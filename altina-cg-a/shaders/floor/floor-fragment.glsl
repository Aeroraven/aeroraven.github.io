#version 300 es
precision highp float;

in mediump vec2 vTex;
in mediump vec3 vNorm;
in mediump vec3 vFragPos;

uniform sampler2D uSampler;
uniform vec3 uCamPos;
uniform mat4 uModel;

out vec4 fragColor;

void main(){
    vec4 lightCol = vec4(1.0);
    vec4 texCol = texture(uSampler,vec2(vTex.s,vTex.t));
    vec4 lightPos = vec4(0.0,0.6,-0.3,1.0);
    lightPos = uModel * lightPos;

    //Ambient
    float ambientStrength = 0.1;
    vec4 ambientPart = ambientStrength * lightCol;

    //Diffuse
    float diffuseStrength = 0.2;
    vec3 norm = normalize(vNorm);
    vec3 lightDir = normalize(lightPos.xyz-vFragPos);
    float diffusePower = max(dot(norm,lightDir),0.0);
    vec4 diffusePart = lightCol * diffuseStrength * diffusePower;

    //Specular
    float specStrength = 1.5;
    vec3 viewDir = normalize(uCamPos-vFragPos);
    vec3 reflDir = reflect(-lightDir,norm);
    vec3 halfway = normalize(viewDir+lightDir);
    float spec = pow(max(dot(norm,halfway),0.0),4.0);
    vec4 specularPart = specStrength * spec * lightCol;

    fragColor = (ambientPart + diffusePart + specularPart )*texCol;
    //fragColor = vec4(diffusePower,0.0,0.0,1.0);
}