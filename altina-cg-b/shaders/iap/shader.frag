#version 300 es
precision highp float;
in vec4 vLT;
in vec4 vLB;
in vec4 vRT;
in vec4 vRB;
in vec4 vLTd;
in vec4 vLBd;
in vec4 vRTd;
in vec4 vRBd;
in vec4 vCol;
in vec4 vPos;
in vec3 vInValue;
in float vDiscard;
out vec4 fDiff;

uniform vec3 uRef;
uniform float useDot;
uniform float outputNormal;
void main(){
    if(vDiscard>0.5){
        discard;
        return;
    }
    vec4 edgA = vLT - vRT;
    vec4 edgB = vLB - vRT;
    vec4 edgAd = vLTd - vRTd;
    vec4 edgBd = vLBd - vRTd;
    
    vec3 n = normalize(cross(edgA.xyz, edgB.xyz));
    vec3 nd = normalize(cross(edgAd.xyz, edgBd.xyz));
    
    float d = abs(dot(n,normalize(uRef.xyz)));
    float ac = acos(d)/3.1415926*2.0;
    
    float ndiff = dot(n,nd);
    //fDiff = vec4(vInValue.x,1.0,1.0,1.0);
    //return ;
    if(outputNormal>0.5){
        
        fDiff = vec4(vCol.xyz*0.5+0.5,1.0);
        return;
    }
    if(useDot >0.9){
        
        fDiff = vec4(abs(n),1.0);
    }else if(useDot >0.7){
        
        fDiff = vec4(ndiff,1.0-ndiff,0.0,1.0);
    }
    else if(useDot >0.5){
        
        fDiff = vec4(ac,1.0-ac,0.0,1.0);
    }
    else if(useDot >0.2){
        
        fDiff = vPos*0.5+0.5;
    }else{
        
        n.xy = abs(n.xy);
        if(dot(n,normalize(uRef.xyz))<0.0){
            fDiff = vec4(n,1.0);
        }else{
            fDiff = vec4(n,1.0);
        }
    }
    
}