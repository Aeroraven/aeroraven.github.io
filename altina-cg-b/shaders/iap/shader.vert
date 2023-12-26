#version 300 es
precision highp float;

in vec3 aPos;
in vec3 aTransl;
in vec2 aTxPs;

uniform mat4 uProj;
uniform mat4 uViewOrtho;
uniform mat4 uModel;
uniform mat4 uLocalMat;

uniform vec3 uLT;
uniform vec3 uLB;
uniform vec3 uRT;
uniform vec3 uRB;

uniform float uFocalX;
uniform float uFocalY;

uniform vec3 uTranslation;

uniform float uRotLb;
uniform float uRotRb;

uniform vec3 uRotAxis;

uniform float pSize;

uniform float disturbX;
uniform float disturbY;

uniform float outputNormal;

uniform vec3 preNormal;
uniform float useUniformDist;
uniform float sortVertex;
uniform float forceCounterClockwiseNormal;
uniform float uTranslRandom;

uniform vec3 uLimitNeighbourRange;
uniform float uLimitNeighbourRangeEna;
uniform float uNeighbourThresh;

out vec4 vLT;
out vec4 vLB;
out vec4 vRT;
out vec4 vRB;

out vec4 vLTd;
out vec4 vLBd;
out vec4 vRTd;
out vec4 vRBd;

out vec4 vCol;
out vec4 vPos;
out vec3 vInValue;
out float vDiscard;

const float PI2 = 6.283185307179586476925286766559;
const float NEIGHBOUR_LIMIT = 1e-1;
const float EPS = 1e-2;



mat4 rotationMatrix(vec3 axis, float angle){
    axis = normalize(axis);
    float s = sin(angle);
    float c = cos(angle);
    float oc = 1.0 - c;

    return mat4(oc * axis.x * axis.x + c,           oc * axis.x * axis.y - axis.z * s,  oc * axis.z * axis.x + axis.y * s,  0.0,
                oc * axis.x * axis.y + axis.z * s,  oc * axis.y * axis.y + c,           oc * axis.y * axis.z - axis.x * s,  0.0,
                oc * axis.z * axis.x - axis.y * s,  oc * axis.y * axis.z + axis.x * s,  oc * axis.z * axis.z + c,           0.0,
                0.0,                                0.0,                                0.0,                                1.0);
}

mat3 uniformRotationMatrix(float x1,float x2,float x3){
    x1 = x1*PI2;
    x2 = x2*PI2;
    mat3 R = mat3(cos(x1),sin(x1),0.0,-sin(x1),cos(x1),0.0,0.0,0.0,1.0);
    vec3 v = vec3(cos(x2)*sqrt(x3),sin(x2)*sqrt(x3),sqrt(1.0-x3));
    mat3 T = mat3(v.x*v.x,v.x*v.y,v.x*v.z,v.x*v.y,v.y*v.y,v.y*v.z,v.x*v.z,v.y*v.z,v.z*v.z);
    mat3 I = mat3(1.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,1.0);
    mat3 H = I - 2.0*T;
    return -H*R;
}

mat3 rotationZ(float x1){
    x1 = x1*PI2;
    mat3 R = mat3(cos(x1),sin(x1),0.0,-sin(x1),cos(x1),0.0,0.0,0.0,1.0);
    return R;

}

float getAng(vec2 a,vec2 b,vec2 o){
    vec2 oa = normalize(a - o);
    vec2 ob = normalize(b - o);
    float w = acos(dot(oa, ob));
    float p = w / 3.1415926 * 180.0;
    float q = p / 180.0 - 0.5;
    return q;
}


void main(){

    vec2 rotv = aPos.xy * PI2;
    float dx = cos(rotv.x)*cos(rotv.y);
    float dy = sin(rotv.x)*cos(rotv.y);
    float dz = sin(rotv.y);

    vec4 pLT,pLB,pRT,pRB;

    
    if(abs(preNormal.x)>0.0||abs(preNormal.y)>0.0||abs(preNormal.z)>0.0){
        vec3 ds = normalize(preNormal);
        vec3 dv = normalize(cross(ds, vec3(dx,dy,dz)));
        mat4 rotation = rotationMatrix(ds, 3.1415926/2.0);

        vec4 aLT = vec4(dv, 1.0);
        vec4 aLB = rotation*aLT;
        vec4 aRT = rotation*aLB;
        vec4 aRB = rotation*aRT;

        pLT = aLT + vec4(uTranslation, 0.0);
        pLB = aLB + vec4(uTranslation, 0.0);
        pRT = aRT + vec4(uTranslation, 0.0);
        pRB = aRB + vec4(uTranslation, 0.0);

    }else{
            
        float lb=uRotLb;
        float rb=uRotRb;
        float rotAngle = (aPos.z*(rb-lb)+lb)/180.0*3.1415926;
        vec3 axis = vec3(dx,dy,dz); 

        if(uRotAxis.x>1e-2||uRotAxis.y>1e-2||uRotAxis.z>1e-2){
            axis = normalize(uRotAxis);
        }

        vec3 nTransl = uTranslation + aTransl*uTranslRandom;
        if(useUniformDist>0.5){
            mat3 rot3 = uniformRotationMatrix(aPos.x,aPos.y,aPos.z);
            //rot3 = rotationZ(aPos.x)*rot3;
            pLT = vec4(rot3 * vec3(uLT) + nTransl, 1.0);
            pLB = vec4(rot3 * vec3(uLB) + nTransl, 1.0);
            pRT = vec4(rot3 * vec3(uRT) + nTransl, 1.0);
            pRB = vec4(rot3 * vec3(uRB) + nTransl, 1.0);

        }else{
            mat4 rotation = rotationMatrix(axis, rotAngle);
            pLT = rotation * vec4(uLT, 1.0) + vec4(nTransl, 0.0);
            pLB = rotation * vec4(uLB, 1.0) + vec4(nTransl, 0.0);
            pRT = rotation * vec4(uRT, 1.0) + vec4(nTransl, 0.0);
            pRB = rotation * vec4(uRB, 1.0) + vec4(nTransl, 0.0);
        }
    }
    
    vec4 pts[4];
    pts[0] = pLT;
    pts[1] = pLB;
    pts[2] = pRB;
    pts[3] = pRT;
    int idx = 0;

    if(sortVertex>0.5){
        int topYIdx = 0;         
        int top2YIdx = 0;         
        for(int i=1;i<4;i++){
            if(pts[i].y/pts[i].z>pts[topYIdx].y/pts[topYIdx].z){
                topYIdx = i;
            }
        }
        top2YIdx = (topYIdx+1)%4;
        for(int i=0;i<4;i++){
            if(i!=topYIdx){
                if(pts[i].y/pts[i].z>pts[top2YIdx].y/pts[top2YIdx].z){
                    top2YIdx = i;
                }
            }
        }

        int leftXIdx = topYIdx;         
        int rightXIdx = top2YIdx;
        if(pts[topYIdx].x/pts[topYIdx].z>pts[top2YIdx].x/pts[top2YIdx].z){
            leftXIdx = top2YIdx;
            rightXIdx = topYIdx;
        }


        idx = leftXIdx;
        pLT = pts[idx];
        pLB = pts[(idx+1)%4];
        pRB = pts[(idx+2)%4];
        pRT = pts[(idx+3)%4];
    }
    
    if(forceCounterClockwiseNormal>0.5){
        vec2 sLT = pLT.xy / pLT.z;
        vec2 sLB = pLB.xy / pLB.z;
        vec2 sRB = pRB.xy / pRB.z;
        vec2 sRT = pRT.xy / pRT.z;
        vec2 sA = sLB - sLT;
        vec2 sB = sRB - sLB;
        float area = sA.x * sB.y - sA.y * sB.x;
        if(area<0.0){
            vec4 tmp = pLT;
            pLT = pts[idx];
            pLB = pts[(idx+3)%4];
            pRB = pts[(idx+2)%4];
            pRT = pts[(idx+1)%4];
        }
    }

    vLTd = pLT + vec4(disturbX, disturbY, 0.0, 0.0) * pLT.z / vec4(uFocalX, uFocalY, 1.0, 1.0);
    vLBd = pLB + vec4(disturbX, disturbY, 0.0, 0.0) * pLB.z / vec4(uFocalX, uFocalY, 1.0, 1.0);
    vRTd = pRT + vec4(disturbX, disturbY, 0.0, 0.0) * pRT.z / vec4(uFocalX, uFocalY, 1.0, 1.0);
    vRBd = pRB + vec4(disturbX, disturbY, 0.0, 0.0) * pRB.z / vec4(uFocalX, uFocalY, 1.0, 1.0);

    vec4 rLT = vec4(pLT.x / pLT.z * uFocalX, pLT.y / pLT.z * uFocalY, pLT.z, 1.0);
    vec4 rLB = vec4(pLB.x / pLB.z * uFocalX, pLB.y / pLB.z * uFocalY, pLB.z, 1.0);
    vec4 rRT = vec4(pRT.x / pRT.z * uFocalX, pRT.y / pRT.z * uFocalY, pRT.z, 1.0);
    vec4 rRB = vec4(pRB.x / pRB.z * uFocalX, pRB.y / pRB.z * uFocalY, pRB.z, 1.0);

    vec4 rPT[4];
    rPT[0] = rLT;
    rPT[1] = rLB;
    rPT[2] = rRT;
    rPT[3] = rRB;
    for(int i=0;i<4;i++){
        if(distance(rPT[i],rPT[(i+1)%4])<EPS){
            vDiscard=1.0;
        }
    }

    float iA = getAng(rLB.xy,rRT.xy, rLT.xy);
    float iB = getAng(rLT.xy,rRB.xy, rRT.xy);
    float iC = getAng(rRT.xy,rLB.xy, rRB.xy);

    float projectedArea = abs((rLT-rLB).x*(rRB-rLB).y - (rLT-rLB).y*(rRB-rLB).x);


    vec4 v = vec4(iA,iB,iC,1.0);
    vPos = v;
    vCol = vec4(iA,iB,iC,1.0);

    vLT = pLT;
    vLB = pLB;
    vRT = pRT;
    vRB = pRB;

    vInValue = aPos.xyz;
    if(distance(vec3(iA,iB,iC),uLimitNeighbourRange.xyz)>uNeighbourThresh && uLimitNeighbourRangeEna>0.5){
        vDiscard = 1.0;
    }else{
        vDiscard = 0.0;
    }
    if(outputNormal<0.5){
        gl_Position = uProj*uModel*uLocalMat*v;
        //gl_Position = vec4(uLimitNeighbourRange.xyz,1.0);
        gl_PointSize = pSize;
    }else if(outputNormal<0.8){
        gl_Position = vec4(aTxPs,1.0,1.0);
    }else{
        vec4 edgA = vLT - vRT;
        vec4 edgB = vLB - vRT;
        vec3 n = normalize(cross(edgA.xyz, edgB.xyz));
        gl_Position = uProj*uModel*uLocalMat*vec4(n, 1.0);
        gl_PointSize = pSize;
    }
}