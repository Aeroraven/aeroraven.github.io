#version 300 es
precision highp float;
in vec2 vTex;
in vec3 vNorm;
in vec3 vFragPos;
in vec4 vWorldPos;

out vec4 fragColor;

uniform sampler2D uDiffuse;
uniform mat4 uShadowOrtho;
uniform vec3 uLightPos[20];
uniform vec3 uLightColor[20];
uniform int uLightType[20];
uniform mat4 uLightModel[20];
uniform mat4 uModel;
uniform vec3 uCamPos;

uniform vec3 uS_Albedo;
uniform float uS_Roughness;
uniform float uS_Metallic;
uniform float uS_AO;

uniform vec3 uFogColor;
uniform float uFogNear;
uniform float uFogFar;

float geometrySchlickGGX(float cosVal,float k){
    return cosVal / (cosVal * (1.0-k)+k);
}

float geometrySmith(float nvCos,float nlCos,float k){
    float ggx1 = geometrySchlickGGX(nvCos,k);
    float ggx2 = geometrySchlickGGX(nlCos,k);
    return ggx1 * ggx2;
}

float roughnessDirect(float r){
    float dr = (r+1.0);
    return dr*dr/8.0;
}

float ndfGGX(float cosVal,float a){
    float a2 = a*a;
    return a2 / (3.14159*pow(cosVal * cosVal * (a2 - 1.0)+1.0,2.0));
}

vec3 fresnelApprox(vec3 f0,float cosVal){
    return f0 + (1.0-f0)*pow(1.0-cosVal,5.0);
}

vec3 cookTorranceCoef(float d,vec3 f,float g,float inCos,float outCos){
    return d*f*g/(4.0*inCos*outCos+0.0001);
}

void main(){
    vec4 lightCol = vec4(uLightColor[0],1.0);
    int lightType = uLightType[0];
    vec3 lightPos = (uModel*vec4(uLightPos[0],1.0)).xyz;
    if(lightType==1){
        lightPos = (uModel*vec4(uLightPos[0],0.0)).xyz;
    }
    
    vec3 ambLight = vec3(0.003);
    

    //Basic lighting
    vec3 V = normalize(-vFragPos);
    vec3 L = vec3(0.0);
    if(lightType==0){
        //Point Light
        L=normalize(lightPos-vFragPos);
    }else if(lightType==1){
        //Directional Light
        L=normalize(-lightPos);
    }
    
    vec3 N = normalize(vNorm);
    vec3 H = normalize(V+L);

    float dist = length(lightPos - vFragPos);
    float att = 1.0 / dist / dist;
    vec3 rad = lightCol.xyz * att;

    if(lightType==1){
        rad = lightCol.xyz;
    }

    //Directional Shadow
    if(lightType==1){
        vec4 shadowCoord = uShadowOrtho * uLightModel[0] * vWorldPos;
        shadowCoord = (shadowCoord+1.0)*0.5;
        vec2 shadowTelSize = vec2(1.0 / float(textureSize(uDiffuse,0).x), 1.0 / float(textureSize(uDiffuse,0).y));
        float shadowW = 0.0;
        float dx = -5.0;
        float dy = -5.0;
        for(int i=-5;i<=5;i++){
            dy=-5.0;
            for(int j=-5;j<=5;j++){
                vec4 shadowColor = texture(uDiffuse,shadowCoord.xy+vec2(dx,dy)*shadowTelSize);
                if(shadowCoord.z>=shadowColor.x+1e-3){
                    shadowW+=1.0;
                }
                dy+=1.0;
            }
            dx+=1.0;
        }
        shadowW = shadowW/121.0;
        rad = (1.0-shadowW) * rad;
    }
    

    //Fresnel approxmiation
    vec3 f0 = mix(vec3(0.04),uS_Albedo,uS_Metallic);
    vec3 f = fresnelApprox(f0,max(0.0,dot(H,V)));

    //NDF
    float ndf = ndfGGX(max(dot(N,H),0.0),uS_Roughness * uS_Roughness);

    //Geometry
    float nvcos = max(0.0,dot(N,V));
    float nlcos = max(0.0,dot(N,L));
    float kv = roughnessDirect(uS_Roughness);
    float g = geometrySmith(nvcos,nlcos,kv);

    //Cook Torrance
    vec3 cook = cookTorranceCoef(ndf,f,g,nlcos,nvcos);
    vec3 ks = f;
    vec3 kd = vec3(1.0) - f;
    kd*=1.0-uS_Metallic;

    //Out Radiance
    vec3 Lo = (kd * uS_Albedo / 3.14159 + ks*cook)*rad*nlcos;

    //Ambient
    vec3 color = ambLight * uS_Albedo * uS_AO + Lo;

    //Gamma
    color = color / (color + vec3(1.0));
    color = pow(color, vec3(1.0/2.2));

    float fogDist = length(vFragPos);
    float fogPower = smoothstep(uFogNear,uFogFar,fogDist);
    color = mix(color,uFogColor,fogPower);

    fragColor =  vec4(color,1.0);
}