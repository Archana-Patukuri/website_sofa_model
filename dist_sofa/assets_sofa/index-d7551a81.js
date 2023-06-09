(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const s of n)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(n){const s={};return n.integrity&&(s.integrity=n.integrity),n.referrerpolicy&&(s.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?s.credentials="include":n.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(n){if(n.ep)return;n.ep=!0;const s=t(n);fetch(n.href,s)}})();/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ea="148",di={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},nn={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Nc=0,Ya=1,Uc=2,Pl=1,Fl=2,Xn=3,Fi=0,Vt=1,$s=2,fs=3,tt=0,xi=1,Ja=2,Xa=3,Ka=4,kc=5,Ri=100,Gc=101,Oc=102,ja=103,Za=104,Hc=200,zc=201,Vc=202,Wc=203,Js=204,Xs=205,qc=206,Yc=207,Jc=208,Xc=209,Kc=210,jc=0,Zc=1,$c=2,ta=3,eh=4,th=5,ih=6,nh=7,Nl=0,sh=1,rh=2,Ei=0,ah=1,oh=2,lh=3,Ul=4,ch=5,kl=300,yn=301,wn=302,is=303,ia=304,er=306,Ni=1e3,vt=1001,Ks=1002,Ne=1003,na=1004,Hs=1005,Je=1006,Gl=1007,Ci=1008,Ct=1009,hh=1010,uh=1011,tr=1012,dh=1013,Ki=1014,yt=1015,wt=1016,Ah=1017,fh=1018,Cn=1020,ph=1021,gh=1022,ht=1023,mh=1024,_h=1025,ji=1026,Mn=1027,Kn=1028,xh=1029,jn=1030,Eh=1031,Ih=1033,zs=33776,hr=33777,ur=33778,Vs=33779,sa=35840,$a=35841,ra=35842,eo=35843,Ol=36196,aa=37492,oa=37496,la=37808,to=37809,io=37810,no=37811,so=37812,ro=37813,ao=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,Ao=37820,fo=37821,ca=36492,Hl=2200,Ch=2201,vh=2202,ns=2300,bn=2301,dr=2302,xn=2400,En=2401,js=2402,Ia=2500,yh=2501,wh=1,zl=2,ti=3e3,Se=3001,Mh=3200,bh=3201,Ca=0,Sh=1,Zt="srgb",ss="srgb-linear",Ar=7680,Bh=519,ha=35044,po="300 es",ua=1035;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const n=this._listeners[e];if(n!==void 0){const s=n.indexOf(t);s!==-1&&n.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const n=i.slice(0);for(let s=0,r=n.length;s<r;s++)n[s].call(this,e);e.target=null}}}const At=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let go=1234567;const $n=Math.PI/180,rs=180/Math.PI;function Xt(){const o=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(At[o&255]+At[o>>8&255]+At[o>>16&255]+At[o>>24&255]+"-"+At[e&255]+At[e>>8&255]+"-"+At[e>>16&15|64]+At[e>>24&255]+"-"+At[t&63|128]+At[t>>8&255]+"-"+At[t>>16&255]+At[t>>24&255]+At[i&255]+At[i>>8&255]+At[i>>16&255]+At[i>>24&255]).toLowerCase()}function ct(o,e,t){return Math.max(e,Math.min(t,o))}function va(o,e){return(o%e+e)%e}function Th(o,e,t,i,n){return i+(o-e)*(n-i)/(t-e)}function Dh(o,e,t){return o!==e?(t-o)/(e-o):0}function es(o,e,t){return(1-t)*o+t*e}function Rh(o,e,t,i){return es(o,e,1-Math.exp(-t*i))}function Lh(o,e=1){return e-Math.abs(va(o,e*2)-e)}function Qh(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*(3-2*o))}function Ph(o,e,t){return o<=e?0:o>=t?1:(o=(o-e)/(t-e),o*o*o*(o*(o*6-15)+10))}function Fh(o,e){return o+Math.floor(Math.random()*(e-o+1))}function Nh(o,e){return o+Math.random()*(e-o)}function Uh(o){return o*(.5-Math.random())}function kh(o){o!==void 0&&(go=o);let e=go+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Gh(o){return o*$n}function Oh(o){return o*rs}function da(o){return(o&o-1)===0&&o!==0}function Vl(o){return Math.pow(2,Math.ceil(Math.log(o)/Math.LN2))}function Zs(o){return Math.pow(2,Math.floor(Math.log(o)/Math.LN2))}function Hh(o,e,t,i,n){const s=Math.cos,r=Math.sin,a=s(t/2),l=r(t/2),c=s((e+i)/2),h=r((e+i)/2),u=s((e-i)/2),d=r((e-i)/2),f=s((i-e)/2),g=r((i-e)/2);switch(n){case"XYX":o.set(a*h,l*u,l*d,a*c);break;case"YZY":o.set(l*d,a*h,l*u,a*c);break;case"ZXZ":o.set(l*u,l*d,a*h,a*c);break;case"XZX":o.set(a*h,l*g,l*f,a*c);break;case"YXY":o.set(l*f,a*h,l*g,a*c);break;case"ZYZ":o.set(l*g,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function mi(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return o/65535;case Uint8Array:return o/255;case Int16Array:return Math.max(o/32767,-1);case Int8Array:return Math.max(o/127,-1);default:throw new Error("Invalid component type.")}}function ze(o,e){switch(e.constructor){case Float32Array:return o;case Uint16Array:return Math.round(o*65535);case Uint8Array:return Math.round(o*255);case Int16Array:return Math.round(o*32767);case Int8Array:return Math.round(o*127);default:throw new Error("Invalid component type.")}}var zh=Object.freeze({__proto__:null,DEG2RAD:$n,RAD2DEG:rs,generateUUID:Xt,clamp:ct,euclideanModulo:va,mapLinear:Th,inverseLerp:Dh,lerp:es,damp:Rh,pingpong:Lh,smoothstep:Qh,smootherstep:Ph,randInt:Fh,randFloat:Nh,randFloatSpread:Uh,seededRandom:kh,degToRad:Gh,radToDeg:Oh,isPowerOfTwo:da,ceilPowerOfTwo:Vl,floorPowerOfTwo:Zs,setQuaternionFromProperEuler:Hh,normalize:ze,denormalize:mi});class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),n=Math.sin(t),s=this.x-e.x,r=this.y-e.y;return this.x=s*i-r*n+e.x,this.y=s*n+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ut{constructor(){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,i,n,s,r,a,l,c){const h=this.elements;return h[0]=e,h[1]=n,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[3],l=i[6],c=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],p=n[0],A=n[3],m=n[6],I=n[1],_=n[4],v=n[7],E=n[2],b=n[5],B=n[8];return s[0]=r*p+a*I+l*E,s[3]=r*A+a*_+l*b,s[6]=r*m+a*v+l*B,s[1]=c*p+h*I+u*E,s[4]=c*A+h*_+u*b,s[7]=c*m+h*v+u*B,s[2]=d*p+f*I+g*E,s[5]=d*A+f*_+g*b,s[8]=d*m+f*v+g*B,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*a*c-i*s*h+i*a*l+n*s*c-n*r*l}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*r-a*c,d=a*l-h*s,f=c*s-r*l,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const p=1/g;return e[0]=u*p,e[1]=(n*c-h*i)*p,e[2]=(a*i-n*r)*p,e[3]=d*p,e[4]=(h*t-n*l)*p,e[5]=(n*s-a*t)*p,e[6]=f*p,e[7]=(i*l-c*t)*p,e[8]=(r*t-i*s)*p,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,s,r,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*r+c*a)+r+e,-n*c,n*l,-n*(-c*r+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(fr.makeScale(e,t)),this}rotate(e){return this.premultiply(fr.makeRotation(-e)),this}translate(e,t){return this.premultiply(fr.makeTranslation(e,t)),this}makeTranslation(e,t){return this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const fr=new Ut;function Wl(o){for(let e=o.length-1;e>=0;--e)if(o[e]>=65535)return!0;return!1}function as(o){return document.createElementNS("http://www.w3.org/1999/xhtml",o)}function Zi(o){return o<.04045?o*.0773993808:Math.pow(o*.9478672986+.0521327014,2.4)}function Ws(o){return o<.0031308?o*12.92:1.055*Math.pow(o,.41666)-.055}const pr={[Zt]:{[ss]:Zi},[ss]:{[Zt]:Ws}},_t={legacyMode:!0,get workingColorSpace(){return ss},set workingColorSpace(o){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(o,e,t){if(this.legacyMode||e===t||!e||!t)return o;if(pr[e]&&pr[e][t]!==void 0){const i=pr[e][t];return o.r=i(o.r),o.g=i(o.g),o.b=i(o.b),o}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(o,e){return this.convert(o,this.workingColorSpace,e)},toWorkingColorSpace:function(o,e){return this.convert(o,e,this.workingColorSpace)}},ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},et={r:0,g:0,b:0},Wt={h:0,s:0,l:0},ps={h:0,s:0,l:0};function gr(o,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?o+(e-o)*6*t:t<1/2?e:t<2/3?o+(e-o)*6*(2/3-t):o}function gs(o,e){return e.r=o.r,e.g=o.g,e.b=o.b,e}class Ie{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&i===void 0?this.set(e):this.setRGB(e,t,i)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.toWorkingColorSpace(this,t),this}setRGB(e,t,i,n=_t.workingColorSpace){return this.r=e,this.g=t,this.b=i,_t.toWorkingColorSpace(this,n),this}setHSL(e,t,i,n=_t.workingColorSpace){if(e=va(e,1),t=ct(t,0,1),i=ct(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,r=2*i-s;this.r=gr(r,s,e+1/3),this.g=gr(r,s,e),this.b=gr(r,s,e-1/3)}return _t.toWorkingColorSpace(this,n),this}setStyle(e,t=Zt){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const r=n[1],a=n[2];switch(r){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,_t.toWorkingColorSpace(this,t),i(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,_t.toWorkingColorSpace(this,t),i(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const l=parseFloat(s[1])/360,c=parseFloat(s[2])/100,h=parseFloat(s[3])/100;return i(s[4]),this.setHSL(l,c,h,t)}break}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=n[1],r=s.length;if(r===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,_t.toWorkingColorSpace(this,t),this;if(r===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,_t.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=Zt){const i=ql[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zi(e.r),this.g=Zi(e.g),this.b=Zi(e.b),this}copyLinearToSRGB(e){return this.r=Ws(e.r),this.g=Ws(e.g),this.b=Ws(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return _t.fromWorkingColorSpace(gs(this,et),e),ct(et.r*255,0,255)<<16^ct(et.g*255,0,255)<<8^ct(et.b*255,0,255)<<0}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.fromWorkingColorSpace(gs(this,et),t);const i=et.r,n=et.g,s=et.b,r=Math.max(i,n,s),a=Math.min(i,n,s);let l,c;const h=(a+r)/2;if(a===r)l=0,c=0;else{const u=r-a;switch(c=h<=.5?u/(r+a):u/(2-r-a),r){case i:l=(n-s)/u+(n<s?6:0);break;case n:l=(s-i)/u+2;break;case s:l=(i-n)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.fromWorkingColorSpace(gs(this,et),t),e.r=et.r,e.g=et.g,e.b=et.b,e}getStyle(e=Zt){return _t.fromWorkingColorSpace(gs(this,et),e),e!==Zt?`color(${e} ${et.r} ${et.g} ${et.b})`:`rgb(${et.r*255|0},${et.g*255|0},${et.b*255|0})`}offsetHSL(e,t,i){return this.getHSL(Wt),Wt.h+=e,Wt.s+=t,Wt.l+=i,this.setHSL(Wt.h,Wt.s,Wt.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(Wt),e.getHSL(ps);const i=es(Wt.h,ps.h,t),n=es(Wt.s,ps.s,t),s=es(Wt.l,ps.l,t);return this.setHSL(i,n,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Ie.NAMES=ql;let sn;class Yl{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{sn===void 0&&(sn=as("canvas")),sn.width=e.width,sn.height=e.height;const i=sn.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=sn}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=as("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const n=i.getImageData(0,0,e.width,e.height),s=n.data;for(let r=0;r<s.length;r++)s[r]=Zi(s[r]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zi(t[i]/255)*255):t[i]=Zi(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class Jl{constructor(e=null){this.isSource=!0,this.uuid=Xt(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let s;if(Array.isArray(n)){s=[];for(let r=0,a=n.length;r<a;r++)n[r].isDataTexture?s.push(mr(n[r].image)):s.push(mr(n[r]))}else s=mr(n);i.url=s}return t||(e.images[this.uuid]=i),i}}function mr(o){return typeof HTMLImageElement<"u"&&o instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&o instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&o instanceof ImageBitmap?Yl.getDataURL(o):o.data?{data:Array.from(o.data),width:o.width,height:o.height,type:o.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vh=0;class lt extends Ui{constructor(e=lt.DEFAULT_IMAGE,t=lt.DEFAULT_MAPPING,i=vt,n=vt,s=Je,r=Ci,a=ht,l=Ct,c=lt.DEFAULT_ANISOTROPY,h=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=Xt(),this.name="",this.source=new Jl(e),this.mipmaps=[],this.mapping=t,this.wrapS=i,this.wrapT=n,this.magFilter=s,this.minFilter=r,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==kl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Ni:e.x=e.x-Math.floor(e.x);break;case vt:e.x=e.x<0?0:1;break;case Ks:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Ni:e.y=e.y-Math.floor(e.y);break;case vt:e.y=e.y<0?0:1;break;case Ks:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}lt.DEFAULT_IMAGE=null;lt.DEFAULT_MAPPING=kl;lt.DEFAULT_ANISOTROPY=1;class Ve{constructor(e=0,t=0,i=0,n=1){Ve.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n+r[12]*s,this.y=r[1]*t+r[5]*i+r[9]*n+r[13]*s,this.z=r[2]*t+r[6]*i+r[10]*n+r[14]*s,this.w=r[3]*t+r[7]*i+r[11]*n+r[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,s;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],g=l[9],p=l[2],A=l[6],m=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-p)<.01&&Math.abs(g-A)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+p)<.1&&Math.abs(g+A)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,v=(f+1)/2,E=(m+1)/2,b=(h+d)/4,B=(u+p)/4,x=(g+A)/4;return _>v&&_>E?_<.01?(i=0,n=.707106781,s=.707106781):(i=Math.sqrt(_),n=b/i,s=B/i):v>E?v<.01?(i=.707106781,n=0,s=.707106781):(n=Math.sqrt(v),i=b/n,s=x/n):E<.01?(i=.707106781,n=.707106781,s=0):(s=Math.sqrt(E),i=B/s,n=x/s),this.set(i,n,s,t),this}let I=Math.sqrt((A-g)*(A-g)+(u-p)*(u-p)+(d-h)*(d-h));return Math.abs(I)<.001&&(I=1),this.x=(A-g)/I,this.y=(u-p)/I,this.z=(d-h)/I,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Tt extends Ui{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ve(0,0,e,t),this.scissorTest=!1,this.viewport=new Ve(0,0,e,t);const n={width:e,height:t,depth:1};this.texture=new lt(n,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Je,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Jl(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xl extends lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Kl extends lt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=vt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class kt{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,s,r,a){let l=i[n+0],c=i[n+1],h=i[n+2],u=i[n+3];const d=s[r+0],f=s[r+1],g=s[r+2],p=s[r+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==d||c!==f||h!==g){let A=1-a;const m=l*d+c*f+h*g+u*p,I=m>=0?1:-1,_=1-m*m;if(_>Number.EPSILON){const E=Math.sqrt(_),b=Math.atan2(E,m*I);A=Math.sin(A*b)/E,a=Math.sin(a*b)/E}const v=a*I;if(l=l*A+d*v,c=c*A+f*v,h=h*A+g*v,u=u*A+p*v,A===1-a){const E=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=E,c*=E,h*=E,u*=E}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,s,r){const a=i[n],l=i[n+1],c=i[n+2],h=i[n+3],u=s[r],d=s[r+1],f=s[r+2],g=s[r+3];return e[t]=a*g+h*u+l*f-c*d,e[t+1]=l*g+h*d+c*u-a*f,e[t+2]=c*g+h*f+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,n=e._y,s=e._z,r=e._order,a=Math.cos,l=Math.sin,c=a(i/2),h=a(n/2),u=a(s/2),d=l(i/2),f=l(n/2),g=l(s/2);switch(r){case"XYZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u+d*f*g;break;case"YZX":this._x=d*h*u+c*f*g,this._y=c*f*u+d*h*g,this._z=c*h*g-d*f*u,this._w=c*h*u-d*f*g;break;case"XZY":this._x=d*h*u-c*f*g,this._y=c*f*u-d*h*g,this._z=c*h*g+d*f*u,this._w=c*h*u+d*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],n=t[4],s=t[8],r=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=i+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(r-n)*f}else if(i>a&&i>u){const f=2*Math.sqrt(1+i-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(n+r)/f,this._z=(s+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-i-u);this._w=(s-c)/f,this._x=(n+r)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-i-a);this._w=(r-n)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,n=e._y,s=e._z,r=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*a+n*c-s*l,this._y=n*h+r*l+s*a-i*c,this._z=s*h+r*c+i*l-n*a,this._w=r*h-i*a-n*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,n=this._y,s=this._z,r=this._w;let a=r*e._w+i*e._x+n*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=r,this._x=i,this._y=n,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*r+t*this._w,this._x=f*i+t*this._x,this._y=f*n+t*this._y,this._z=f*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=r*u+this._w*d,this._x=i*u+this._x*d,this._y=n*u+this._y*d,this._z=s*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),n=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(n),i*Math.sin(s),i*Math.cos(s),t*Math.sin(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(e=0,t=0,i=0){T.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*n,this.y=s[1]*t+s[4]*i+s[7]*n,this.z=s[2]*t+s[5]*i+s[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,n=this.z,s=e.elements,r=1/(s[3]*t+s[7]*i+s[11]*n+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*n+s[12])*r,this.y=(s[1]*t+s[5]*i+s[9]*n+s[13])*r,this.z=(s[2]*t+s[6]*i+s[10]*n+s[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,n=this.z,s=e.x,r=e.y,a=e.z,l=e.w,c=l*t+r*n-a*i,h=l*i+a*t-s*n,u=l*n+s*i-r*t,d=-s*t-r*i-a*n;return this.x=c*l+d*-s+h*-a-u*-r,this.y=h*l+d*-r+u*-s-c*-a,this.z=u*l+d*-a+c*-r-h*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,n=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*n,this.y=s[1]*t+s[5]*i+s[9]*n,this.z=s[2]*t+s[6]*i+s[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,n=e.y,s=e.z,r=t.x,a=t.y,l=t.z;return this.x=n*l-s*a,this.y=s*r-i*l,this.z=i*a-n*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return _r.copy(this).projectOnVector(e),this.sub(_r)}reflect(e){return this.sub(_r.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const _r=new T,mo=new kt;class Tn{constructor(e=new T(1/0,1/0,1/0),t=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,i=1/0,n=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.length;l<c;l+=3){const h=e[l],u=e[l+1],d=e[l+2];h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,i,n),this.max.set(s,r,a),this}setFromBufferAttribute(e){let t=1/0,i=1/0,n=1/0,s=-1/0,r=-1/0,a=-1/0;for(let l=0,c=e.count;l<c;l++){const h=e.getX(l),u=e.getY(l),d=e.getZ(l);h<t&&(t=h),u<i&&(i=u),d<n&&(n=d),h>s&&(s=h),u>r&&(r=u),d>a&&(a=d)}return this.min.set(t,i,n),this.max.set(s,r,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Vi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0)if(t&&i.attributes!=null&&i.attributes.position!==void 0){const s=i.attributes.position;for(let r=0,a=s.count;r<a;r++)Vi.fromBufferAttribute(s,r).applyMatrix4(e.matrixWorld),this.expandByPoint(Vi)}else i.boundingBox===null&&i.computeBoundingBox(),xr.copy(i.boundingBox),xr.applyMatrix4(e.matrixWorld),this.union(xr);const n=e.children;for(let s=0,r=n.length;s<r;s++)this.expandByObject(n[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Vi),Vi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fn),ms.subVectors(this.max,Fn),rn.subVectors(e.a,Fn),an.subVectors(e.b,Fn),on.subVectors(e.c,Fn),vi.subVectors(an,rn),yi.subVectors(on,an),Wi.subVectors(rn,on);let t=[0,-vi.z,vi.y,0,-yi.z,yi.y,0,-Wi.z,Wi.y,vi.z,0,-vi.x,yi.z,0,-yi.x,Wi.z,0,-Wi.x,-vi.y,vi.x,0,-yi.y,yi.x,0,-Wi.y,Wi.x,0];return!Er(t,rn,an,on,ms)||(t=[1,0,0,0,1,0,0,0,1],!Er(t,rn,an,on,ms))?!1:(_s.crossVectors(vi,yi),t=[_s.x,_s.y,_s.z],Er(t,rn,an,on,ms))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return Vi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(Vi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new T,new T,new T,new T,new T,new T,new T,new T],Vi=new T,xr=new Tn,rn=new T,an=new T,on=new T,vi=new T,yi=new T,Wi=new T,Fn=new T,ms=new T,_s=new T,qi=new T;function Er(o,e,t,i,n){for(let s=0,r=o.length-3;s<=r;s+=3){qi.fromArray(o,s);const a=n.x*Math.abs(qi.x)+n.y*Math.abs(qi.y)+n.z*Math.abs(qi.z),l=e.dot(qi),c=t.dot(qi),h=i.dot(qi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Wh=new Tn,Nn=new T,Ir=new T;class Dn{constructor(e=new T,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):Wh.setFromPoints(e).getCenter(i);let n=0;for(let s=0,r=e.length;s<r;s++)n=Math.max(n,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Nn.subVectors(e,this.center);const t=Nn.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(Nn,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Nn.copy(e.center).add(Ir)),this.expandByPoint(Nn.copy(e.center).sub(Ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new T,Cr=new T,xs=new T,wi=new T,vr=new T,Es=new T,yr=new T;class ya{constructor(e=new T,t=new T(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(i).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.direction).multiplyScalar(t).add(this.origin),ai.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){Cr.copy(e).add(t).multiplyScalar(.5),xs.copy(t).sub(e).normalize(),wi.copy(this.origin).sub(Cr);const s=e.distanceTo(t)*.5,r=-this.direction.dot(xs),a=wi.dot(this.direction),l=-wi.dot(xs),c=wi.lengthSq(),h=Math.abs(1-r*r);let u,d,f,g;if(h>0)if(u=r*l-a,d=r*a-l,g=s*h,u>=0)if(d>=-g)if(d<=g){const p=1/h;u*=p,d*=p,f=u*(u+r*d+2*a)+d*(r*u+d+2*l)+c}else d=s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-r*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(r*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=r>0?-s:s,u=Math.max(0,-(r*d+a)),f=-u*u+d*(d+2*l)+c;return i&&i.copy(this.direction).multiplyScalar(u).add(this.origin),n&&n.copy(xs).multiplyScalar(d).add(Cr),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),n=ai.dot(ai)-i*i,s=e.radius*e.radius;if(n>s)return null;const r=Math.sqrt(s-n),a=i-r,l=i+r;return a<0&&l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,s,r,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,n=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,n=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,r=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,r=(e.min.y-d.y)*h),i>r||s>n||((s>i||isNaN(i))&&(i=s),(r<n||isNaN(n))&&(n=r),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),i>l||a>n)||((a>i||i!==i)&&(i=a),(l<n||n!==n)&&(n=l),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,i,n,s){vr.subVectors(t,e),Es.subVectors(i,e),yr.crossVectors(vr,Es);let r=this.direction.dot(yr),a;if(r>0){if(n)return null;a=1}else if(r<0)a=-1,r=-r;else return null;wi.subVectors(this.origin,e);const l=a*this.direction.dot(Es.crossVectors(wi,Es));if(l<0)return null;const c=a*this.direction.dot(vr.cross(wi));if(c<0||l+c>r)return null;const h=-a*wi.dot(yr);return h<0?null:this.at(h/r,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ve{constructor(){ve.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,i,n,s,r,a,l,c,h,u,d,f,g,p,A){const m=this.elements;return m[0]=e,m[4]=t,m[8]=i,m[12]=n,m[1]=s,m[5]=r,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=d,m[3]=f,m[7]=g,m[11]=p,m[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ve().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,n=1/ln.setFromMatrixColumn(e,0).length(),s=1/ln.setFromMatrixColumn(e,1).length(),r=1/ln.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,n=e.y,s=e.z,r=Math.cos(i),a=Math.sin(i),l=Math.cos(n),c=Math.sin(n),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const d=r*h,f=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+g*c,t[5]=d-p*c,t[9]=-a*l,t[2]=p-d*c,t[6]=g+f*c,t[10]=r*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d+p*a,t[4]=g*a-f,t[8]=r*c,t[1]=r*u,t[5]=r*h,t[9]=-a,t[2]=f*a-g,t[6]=p+d*a,t[10]=r*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,g=c*h,p=c*u;t[0]=d-p*a,t[4]=-r*u,t[8]=g+f*a,t[1]=f+g*a,t[5]=r*h,t[9]=p-d*a,t[2]=-r*c,t[6]=a,t[10]=r*l}else if(e.order==="ZYX"){const d=r*h,f=r*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-f,t[8]=d*c+p,t[1]=l*u,t[5]=p*c+d,t[9]=f*c-g,t[2]=-c,t[6]=a*l,t[10]=r*l}else if(e.order==="YZX"){const d=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-d*u,t[8]=g*u+f,t[1]=u,t[5]=r*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+g,t[10]=d-p*u}else if(e.order==="XZY"){const d=r*l,f=r*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+p,t[5]=r*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=a*h,t[10]=p*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(qh,e,Yh)}lookAt(e,t,i){const n=this.elements;return Pt.subVectors(e,t),Pt.lengthSq()===0&&(Pt.z=1),Pt.normalize(),Mi.crossVectors(i,Pt),Mi.lengthSq()===0&&(Math.abs(i.z)===1?Pt.x+=1e-4:Pt.z+=1e-4,Pt.normalize(),Mi.crossVectors(i,Pt)),Mi.normalize(),Is.crossVectors(Pt,Mi),n[0]=Mi.x,n[4]=Is.x,n[8]=Pt.x,n[1]=Mi.y,n[5]=Is.y,n[9]=Pt.y,n[2]=Mi.z,n[6]=Is.z,n[10]=Pt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,n=t.elements,s=this.elements,r=i[0],a=i[4],l=i[8],c=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],p=i[6],A=i[10],m=i[14],I=i[3],_=i[7],v=i[11],E=i[15],b=n[0],B=n[4],x=n[8],w=n[12],R=n[1],F=n[5],O=n[9],Q=n[13],D=n[2],G=n[6],K=n[10],W=n[14],k=n[3],j=n[7],Z=n[11],H=n[15];return s[0]=r*b+a*R+l*D+c*k,s[4]=r*B+a*F+l*G+c*j,s[8]=r*x+a*O+l*K+c*Z,s[12]=r*w+a*Q+l*W+c*H,s[1]=h*b+u*R+d*D+f*k,s[5]=h*B+u*F+d*G+f*j,s[9]=h*x+u*O+d*K+f*Z,s[13]=h*w+u*Q+d*W+f*H,s[2]=g*b+p*R+A*D+m*k,s[6]=g*B+p*F+A*G+m*j,s[10]=g*x+p*O+A*K+m*Z,s[14]=g*w+p*Q+A*W+m*H,s[3]=I*b+_*R+v*D+E*k,s[7]=I*B+_*F+v*G+E*j,s[11]=I*x+_*O+v*K+E*Z,s[15]=I*w+_*Q+v*W+E*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],n=e[8],s=e[12],r=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],p=e[7],A=e[11],m=e[15];return g*(+s*l*u-n*c*u-s*a*d+i*c*d+n*a*f-i*l*f)+p*(+t*l*f-t*c*d+s*r*d-n*r*f+n*c*h-s*l*h)+A*(+t*c*u-t*a*f-s*r*u+i*r*f+s*a*h-i*c*h)+m*(-n*a*h-t*l*u+t*a*d+n*r*u-i*r*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],n=e[2],s=e[3],r=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],p=e[13],A=e[14],m=e[15],I=u*A*c-p*d*c+p*l*f-a*A*f-u*l*m+a*d*m,_=g*d*c-h*A*c-g*l*f+r*A*f+h*l*m-r*d*m,v=h*p*c-g*u*c+g*a*f-r*p*f-h*a*m+r*u*m,E=g*u*l-h*p*l-g*a*d+r*p*d+h*a*A-r*u*A,b=t*I+i*_+n*v+s*E;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const B=1/b;return e[0]=I*B,e[1]=(p*d*s-u*A*s-p*n*f+i*A*f+u*n*m-i*d*m)*B,e[2]=(a*A*s-p*l*s+p*n*c-i*A*c-a*n*m+i*l*m)*B,e[3]=(u*l*s-a*d*s-u*n*c+i*d*c+a*n*f-i*l*f)*B,e[4]=_*B,e[5]=(h*A*s-g*d*s+g*n*f-t*A*f-h*n*m+t*d*m)*B,e[6]=(g*l*s-r*A*s-g*n*c+t*A*c+r*n*m-t*l*m)*B,e[7]=(r*d*s-h*l*s+h*n*c-t*d*c-r*n*f+t*l*f)*B,e[8]=v*B,e[9]=(g*u*s-h*p*s-g*i*f+t*p*f+h*i*m-t*u*m)*B,e[10]=(r*p*s-g*a*s+g*i*c-t*p*c-r*i*m+t*a*m)*B,e[11]=(h*a*s-r*u*s-h*i*c+t*u*c+r*i*f-t*a*f)*B,e[12]=E*B,e[13]=(h*p*n-g*u*n+g*i*d-t*p*d-h*i*A+t*u*A)*B,e[14]=(g*a*n-r*p*n-g*i*l+t*p*l+r*i*A-t*a*A)*B,e[15]=(r*u*n-h*a*n+h*i*l-t*u*l-r*i*d+t*a*d)*B,this}scale(e){const t=this.elements,i=e.x,n=e.y,s=e.z;return t[0]*=i,t[4]*=n,t[8]*=s,t[1]*=i,t[5]*=n,t[9]*=s,t[2]*=i,t[6]*=n,t[10]*=s,t[3]*=i,t[7]*=n,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),n=Math.sin(t),s=1-i,r=e.x,a=e.y,l=e.z,c=s*r,h=s*a;return this.set(c*r+i,c*a-n*l,c*l+n*a,0,c*a+n*l,h*a+i,h*l-n*r,0,c*l-n*a,h*l+n*r,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,s,r){return this.set(1,i,s,0,e,1,r,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){const n=this.elements,s=t._x,r=t._y,a=t._z,l=t._w,c=s+s,h=r+r,u=a+a,d=s*c,f=s*h,g=s*u,p=r*h,A=r*u,m=a*u,I=l*c,_=l*h,v=l*u,E=i.x,b=i.y,B=i.z;return n[0]=(1-(p+m))*E,n[1]=(f+v)*E,n[2]=(g-_)*E,n[3]=0,n[4]=(f-v)*b,n[5]=(1-(d+m))*b,n[6]=(A+I)*b,n[7]=0,n[8]=(g+_)*B,n[9]=(A-I)*B,n[10]=(1-(d+p))*B,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){const n=this.elements;let s=ln.set(n[0],n[1],n[2]).length();const r=ln.set(n[4],n[5],n[6]).length(),a=ln.set(n[8],n[9],n[10]).length();this.determinant()<0&&(s=-s),e.x=n[12],e.y=n[13],e.z=n[14],qt.copy(this);const c=1/s,h=1/r,u=1/a;return qt.elements[0]*=c,qt.elements[1]*=c,qt.elements[2]*=c,qt.elements[4]*=h,qt.elements[5]*=h,qt.elements[6]*=h,qt.elements[8]*=u,qt.elements[9]*=u,qt.elements[10]*=u,t.setFromRotationMatrix(qt),i.x=s,i.y=r,i.z=a,this}makePerspective(e,t,i,n,s,r){const a=this.elements,l=2*s/(t-e),c=2*s/(i-n),h=(t+e)/(t-e),u=(i+n)/(i-n),d=-(r+s)/(r-s),f=-2*r*s/(r-s);return a[0]=l,a[4]=0,a[8]=h,a[12]=0,a[1]=0,a[5]=c,a[9]=u,a[13]=0,a[2]=0,a[6]=0,a[10]=d,a[14]=f,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,i,n,s,r){const a=this.elements,l=1/(t-e),c=1/(i-n),h=1/(r-s),u=(t+e)*l,d=(i+n)*c,f=(r+s)*h;return a[0]=2*l,a[4]=0,a[8]=0,a[12]=-u,a[1]=0,a[5]=2*c,a[9]=0,a[13]=-d,a[2]=0,a[6]=0,a[10]=-2*h,a[14]=-f,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const ln=new T,qt=new ve,qh=new T(0,0,0),Yh=new T(1,1,1),Mi=new T,Is=new T,Pt=new T,_o=new ve,xo=new kt;class hs{constructor(e=0,t=0,i=0,n=hs.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const n=e.elements,s=n[0],r=n[4],a=n[8],l=n[1],c=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-r,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return _o.makeRotationFromQuaternion(e),this.setFromRotationMatrix(_o,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xo.setFromEuler(this),this.setFromQuaternion(xo,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}hs.DefaultOrder="XYZ";hs.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class jl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Jh=0;const Eo=new T,cn=new kt,oi=new ve,Cs=new T,Un=new T,Xh=new T,Kh=new kt,Io=new T(1,0,0),Co=new T(0,1,0),vo=new T(0,0,1),jh={type:"added"},yo={type:"removed"};class qe extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Xt(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DefaultUp.clone();const e=new T,t=new hs,i=new kt,n=new T(1,1,1);function s(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new ve},normalMatrix:{value:new Ut}}),this.matrix=new ve,this.matrixWorld=new ve,this.matrixAutoUpdate=qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qe.DefaultMatrixWorldAutoUpdate,this.layers=new jl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return cn.setFromAxisAngle(e,t),this.quaternion.multiply(cn),this}rotateOnWorldAxis(e,t){return cn.setFromAxisAngle(e,t),this.quaternion.premultiply(cn),this}rotateX(e){return this.rotateOnAxis(Io,e)}rotateY(e){return this.rotateOnAxis(Co,e)}rotateZ(e){return this.rotateOnAxis(vo,e)}translateOnAxis(e,t){return Eo.copy(e).applyQuaternion(this.quaternion),this.position.add(Eo.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Io,e)}translateY(e){return this.translateOnAxis(Co,e)}translateZ(e){return this.translateOnAxis(vo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Cs.copy(e):Cs.set(e,t,i);const n=this.parent;this.updateWorldMatrix(!0,!1),Un.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Un,Cs,this.up):oi.lookAt(Cs,Un,this.up),this.quaternion.setFromRotationMatrix(oi),n&&(oi.extractRotation(n.matrixWorld),cn.setFromRotationMatrix(oi),this.quaternion.premultiply(cn.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(jh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(yo)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(yo)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let n=0,s=this.children.length;n<s;n++){const r=this.children[n].getObjectsByProperty(e,t);r.length>0&&(i=i.concat(r))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Un,e,Xh),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Un,Kh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,n=t.length;i<n;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const n=this.children;for(let s=0,r=n.length;s<r;s++){const a=n[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const n={};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.castShadow===!0&&(n.castShadow=!0),this.receiveShadow===!0&&(n.receiveShadow=!0),this.visible===!1&&(n.visible=!1),this.frustumCulled===!1&&(n.frustumCulled=!1),this.renderOrder!==0&&(n.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(n.matrixAutoUpdate=!1),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));n.material=a}else n.material=s(e.materials,this.material);if(this.children.length>0){n.children=[];for(let a=0;a<this.children.length;a++)n.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];n.animations.push(s(e.animations,l))}}if(t){const a=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),u=r(e.shapes),d=r(e.skeletons),f=r(e.animations),g=r(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function r(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const n=e.children[i];this.add(n.clone())}return this}}qe.DefaultUp=new T(0,1,0);qe.DefaultMatrixAutoUpdate=!0;qe.DefaultMatrixWorldAutoUpdate=!0;const Yt=new T,li=new T,wr=new T,ci=new T,hn=new T,un=new T,wo=new T,Mr=new T,br=new T,Sr=new T;class pi{constructor(e=new T,t=new T,i=new T){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),Yt.subVectors(e,t),n.cross(Yt);const s=n.lengthSq();return s>0?n.multiplyScalar(1/Math.sqrt(s)):n.set(0,0,0)}static getBarycoord(e,t,i,n,s){Yt.subVectors(n,t),li.subVectors(i,t),wr.subVectors(e,t);const r=Yt.dot(Yt),a=Yt.dot(li),l=Yt.dot(wr),c=li.dot(li),h=li.dot(wr),u=r*c-a*a;if(u===0)return s.set(-2,-1,-1);const d=1/u,f=(c*l-a*h)*d,g=(r*h-a*l)*d;return s.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,ci),ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getUV(e,t,i,n,s,r,a,l){return this.getBarycoord(e,t,i,n,ci),l.set(0,0),l.addScaledVector(s,ci.x),l.addScaledVector(r,ci.y),l.addScaledVector(a,ci.z),l}static isFrontFacing(e,t,i,n){return Yt.subVectors(i,t),li.subVectors(e,t),Yt.cross(li).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Yt.subVectors(this.c,this.b),li.subVectors(this.a,this.b),Yt.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return pi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return pi.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,n,s){return pi.getUV(e,this.a,this.b,this.c,t,i,n,s)}containsPoint(e){return pi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return pi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,n=this.b,s=this.c;let r,a;hn.subVectors(n,i),un.subVectors(s,i),Mr.subVectors(e,i);const l=hn.dot(Mr),c=un.dot(Mr);if(l<=0&&c<=0)return t.copy(i);br.subVectors(e,n);const h=hn.dot(br),u=un.dot(br);if(h>=0&&u<=h)return t.copy(n);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector(hn,r);Sr.subVectors(e,s);const f=hn.dot(Sr),g=un.dot(Sr);if(g>=0&&f<=g)return t.copy(s);const p=f*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(i).addScaledVector(un,a);const A=h*g-f*u;if(A<=0&&u-h>=0&&f-g>=0)return wo.subVectors(s,n),a=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(wo,a);const m=1/(A+p+d);return r=p*m,a=d*m,t.copy(i).addScaledVector(hn,r).addScaledVector(un,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Zh=0;class Kt extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=Xt(),this.name="",this.type="Material",this.blending=xi,this.side=Fi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Js,this.blendDst=Xs,this.blendEquation=Ri,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ar,this.stencilZFail=Ar,this.stencilZPass=Ar,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const n=this[t];if(n===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}n&&n.isColor?n.set(i):n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==xi&&(i.blending=this.blending),this.side!==Fi&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(s){const r=[];for(const a in s){const l=s[a];delete l.metadata,r.push(l)}return r}if(t){const s=n(e.textures),r=n(e.images);s.length>0&&(i.textures=s),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const n=t.length;i=new Array(n);for(let s=0;s!==n;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class _i extends Kt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ie(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Nl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const je=new T,vs=new me;class ut{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=ha,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,s=this.itemSize;n<s;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)vs.fromBufferAttribute(this,t),vs.applyMatrix3(e),this.setXY(t,vs.x,vs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)je.fromBufferAttribute(this,t),je.applyMatrix3(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)je.fromBufferAttribute(this,t),je.applyMatrix4(e),this.setXYZ(t,je.x,je.y,je.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)je.fromBufferAttribute(this,t),je.applyNormalMatrix(e),this.setXYZ(t,je.x,je.y,je.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)je.fromBufferAttribute(this,t),je.transformDirection(e),this.setXYZ(t,je.x,je.y,je.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=ze(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),i=ze(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),i=ze(i,this.array),n=ze(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e*=this.itemSize,this.normalized&&(t=ze(t,this.array),i=ze(i,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ha&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Zl extends ut{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class $l extends ut{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Mt extends ut{constructor(e,t,i){super(new Float32Array(e),t,i)}}let $h=0;const Ht=new ve,Br=new qe,dn=new T,Ft=new Tn,kn=new Tn,ot=new T;class Rt extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$h++}),this.uuid=Xt(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wl(e)?$l:Zl)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ut().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ht.makeRotationFromQuaternion(e),this.applyMatrix4(Ht),this}rotateX(e){return Ht.makeRotationX(e),this.applyMatrix4(Ht),this}rotateY(e){return Ht.makeRotationY(e),this.applyMatrix4(Ht),this}rotateZ(e){return Ht.makeRotationZ(e),this.applyMatrix4(Ht),this}translate(e,t,i){return Ht.makeTranslation(e,t,i),this.applyMatrix4(Ht),this}scale(e,t,i){return Ht.makeScale(e,t,i),this.applyMatrix4(Ht),this}lookAt(e){return Br.lookAt(e),Br.updateMatrix(),this.applyMatrix4(Br.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(dn).negate(),this.translate(dn.x,dn.y,dn.z),this}setFromPoints(e){const t=[];for(let i=0,n=e.length;i<n;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Mt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){const s=t[i];Ft.setFromBufferAttribute(s),this.morphTargetsRelative?(ot.addVectors(this.boundingBox.min,Ft.min),this.boundingBox.expandByPoint(ot),ot.addVectors(this.boundingBox.max,Ft.max),this.boundingBox.expandByPoint(ot)):(this.boundingBox.expandByPoint(Ft.min),this.boundingBox.expandByPoint(Ft.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Dn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new T,1/0);return}if(e){const i=this.boundingSphere.center;if(Ft.setFromBufferAttribute(e),t)for(let s=0,r=t.length;s<r;s++){const a=t[s];kn.setFromBufferAttribute(a),this.morphTargetsRelative?(ot.addVectors(Ft.min,kn.min),Ft.expandByPoint(ot),ot.addVectors(Ft.max,kn.max),Ft.expandByPoint(ot)):(Ft.expandByPoint(kn.min),Ft.expandByPoint(kn.max))}Ft.getCenter(i);let n=0;for(let s=0,r=e.count;s<r;s++)ot.fromBufferAttribute(e,s),n=Math.max(n,i.distanceToSquared(ot));if(t)for(let s=0,r=t.length;s<r;s++){const a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ot.fromBufferAttribute(a,c),l&&(dn.fromBufferAttribute(e,c),ot.add(dn)),n=Math.max(n,i.distanceToSquared(ot))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,n=t.position.array,s=t.normal.array,r=t.uv.array,a=n.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let R=0;R<a;R++)c[R]=new T,h[R]=new T;const u=new T,d=new T,f=new T,g=new me,p=new me,A=new me,m=new T,I=new T;function _(R,F,O){u.fromArray(n,R*3),d.fromArray(n,F*3),f.fromArray(n,O*3),g.fromArray(r,R*2),p.fromArray(r,F*2),A.fromArray(r,O*2),d.sub(u),f.sub(u),p.sub(g),A.sub(g);const Q=1/(p.x*A.y-A.x*p.y);isFinite(Q)&&(m.copy(d).multiplyScalar(A.y).addScaledVector(f,-p.y).multiplyScalar(Q),I.copy(f).multiplyScalar(p.x).addScaledVector(d,-A.x).multiplyScalar(Q),c[R].add(m),c[F].add(m),c[O].add(m),h[R].add(I),h[F].add(I),h[O].add(I))}let v=this.groups;v.length===0&&(v=[{start:0,count:i.length}]);for(let R=0,F=v.length;R<F;++R){const O=v[R],Q=O.start,D=O.count;for(let G=Q,K=Q+D;G<K;G+=3)_(i[G+0],i[G+1],i[G+2])}const E=new T,b=new T,B=new T,x=new T;function w(R){B.fromArray(s,R*3),x.copy(B);const F=c[R];E.copy(F),E.sub(B.multiplyScalar(B.dot(F))).normalize(),b.crossVectors(x,F);const Q=b.dot(h[R])<0?-1:1;l[R*4]=E.x,l[R*4+1]=E.y,l[R*4+2]=E.z,l[R*4+3]=Q}for(let R=0,F=v.length;R<F;++R){const O=v[R],Q=O.start,D=O.count;for(let G=Q,K=Q+D;G<K;G+=3)w(i[G+0]),w(i[G+1]),w(i[G+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);const n=new T,s=new T,r=new T,a=new T,l=new T,c=new T,h=new T,u=new T;if(e)for(let d=0,f=e.count;d<f;d+=3){const g=e.getX(d+0),p=e.getX(d+1),A=e.getX(d+2);n.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),r.fromBufferAttribute(t,A),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,p),c.fromBufferAttribute(i,A),a.add(h),l.add(h),c.add(h),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(A,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),r.fromBufferAttribute(t,d+2),h.subVectors(r,s),u.subVectors(n,s),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)ot.fromBufferAttribute(e,t),ot.normalize(),e.setXYZ(t,ot.x,ot.y,ot.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,g=0;for(let p=0,A=l.length;p<A;p++){a.isInterleavedBufferAttribute?f=l[p]*a.data.stride+a.offset:f=l[p]*h;for(let m=0;m<h;m++)d[g++]=c[f++]}return new ut(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Rt,i=this.index.array,n=this.attributes;for(const a in n){const l=n[a],c=e(l,i);t.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,i);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let a=0,l=r.length;a<l;a++){const c=r[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const n={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,s=!0)}s&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const n=e.attributes;for(const c in n){const h=n[c];this.setAttribute(c,h.clone(t))}const s=e.morphAttributes;for(const c in s){const h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const u=r[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mo=new ve,An=new ya,Tr=new Dn,Gn=new T,On=new T,Hn=new T,Dr=new T,ys=new T,ws=new me,Ms=new me,bs=new me,Rr=new T,Ss=new T;class Dt extends qe{constructor(e=new Rt,t=new _i){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,n=i.attributes.position,s=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(n,e);const a=this.morphTargetInfluences;if(s&&a){ys.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const h=a[l],u=s[l];h!==0&&(Dr.fromBufferAttribute(u,e),r?ys.addScaledVector(Dr,h):ys.addScaledVector(Dr.sub(t),h))}t.add(ys)}return this.isSkinnedMesh&&this.boneTransform(e,t),t}raycast(e,t){const i=this.geometry,n=this.material,s=this.matrixWorld;if(n===void 0||(i.boundingSphere===null&&i.computeBoundingSphere(),Tr.copy(i.boundingSphere),Tr.applyMatrix4(s),e.ray.intersectsSphere(Tr)===!1)||(Mo.copy(s).invert(),An.copy(e.ray).applyMatrix4(Mo),i.boundingBox!==null&&An.intersectsBox(i.boundingBox)===!1))return;let r;const a=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv2,u=i.groups,d=i.drawRange;if(a!==null)if(Array.isArray(n))for(let f=0,g=u.length;f<g;f++){const p=u[f],A=n[p.materialIndex],m=Math.max(p.start,d.start),I=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let _=m,v=I;_<v;_+=3){const E=a.getX(_),b=a.getX(_+1),B=a.getX(_+2);r=Bs(this,A,e,An,c,h,E,b,B),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let p=f,A=g;p<A;p+=3){const m=a.getX(p),I=a.getX(p+1),_=a.getX(p+2);r=Bs(this,n,e,An,c,h,m,I,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(n))for(let f=0,g=u.length;f<g;f++){const p=u[f],A=n[p.materialIndex],m=Math.max(p.start,d.start),I=Math.min(l.count,Math.min(p.start+p.count,d.start+d.count));for(let _=m,v=I;_<v;_+=3){const E=_,b=_+1,B=_+2;r=Bs(this,A,e,An,c,h,E,b,B),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=p.materialIndex,t.push(r))}}else{const f=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let p=f,A=g;p<A;p+=3){const m=p,I=p+1,_=p+2;r=Bs(this,n,e,An,c,h,m,I,_),r&&(r.faceIndex=Math.floor(p/3),t.push(r))}}}}function eu(o,e,t,i,n,s,r,a){let l;if(e.side===Vt?l=i.intersectTriangle(r,s,n,!0,a):l=i.intersectTriangle(n,s,r,e.side===Fi,a),l===null)return null;Ss.copy(a),Ss.applyMatrix4(o.matrixWorld);const c=t.ray.origin.distanceTo(Ss);return c<t.near||c>t.far?null:{distance:c,point:Ss.clone(),object:o}}function Bs(o,e,t,i,n,s,r,a,l){o.getVertexPosition(r,Gn),o.getVertexPosition(a,On),o.getVertexPosition(l,Hn);const c=eu(o,e,t,i,Gn,On,Hn,Rr);if(c){n&&(ws.fromBufferAttribute(n,r),Ms.fromBufferAttribute(n,a),bs.fromBufferAttribute(n,l),c.uv=pi.getUV(Rr,Gn,On,Hn,ws,Ms,bs,new me)),s&&(ws.fromBufferAttribute(s,r),Ms.fromBufferAttribute(s,a),bs.fromBufferAttribute(s,l),c.uv2=pi.getUV(Rr,Gn,On,Hn,ws,Ms,bs,new me));const h={a:r,b:a,c:l,normal:new T,materialIndex:0};pi.getNormal(Gn,On,Hn,h.normal),c.face=h}return c}class us extends Rt{constructor(e=1,t=1,i=1,n=1,s=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:s,depthSegments:r};const a=this;n=Math.floor(n),s=Math.floor(s),r=Math.floor(r);const l=[],c=[],h=[],u=[];let d=0,f=0;g("z","y","x",-1,-1,i,t,e,r,s,0),g("z","y","x",1,-1,i,t,-e,r,s,1),g("x","z","y",1,1,e,i,t,n,r,2),g("x","z","y",1,-1,e,i,-t,n,r,3),g("x","y","z",1,-1,e,t,i,n,s,4),g("x","y","z",-1,-1,e,t,-i,n,s,5),this.setIndex(l),this.setAttribute("position",new Mt(c,3)),this.setAttribute("normal",new Mt(h,3)),this.setAttribute("uv",new Mt(u,2));function g(p,A,m,I,_,v,E,b,B,x,w){const R=v/B,F=E/x,O=v/2,Q=E/2,D=b/2,G=B+1,K=x+1;let W=0,k=0;const j=new T;for(let Z=0;Z<K;Z++){const H=Z*F-Q;for(let Y=0;Y<G;Y++){const ee=Y*R-O;j[p]=ee*I,j[A]=H*_,j[m]=D,c.push(j.x,j.y,j.z),j[p]=0,j[A]=0,j[m]=b>0?1:-1,h.push(j.x,j.y,j.z),u.push(Y/B),u.push(1-Z/x),W+=1}}for(let Z=0;Z<x;Z++)for(let H=0;H<B;H++){const Y=d+H+G*Z,ee=d+H+G*(Z+1),ie=d+(H+1)+G*(Z+1),re=d+(H+1)+G*Z;l.push(Y,ee,re),l.push(ee,ie,re),k+=6}a.addGroup(f,k,w),f+=k,d+=W}}static fromJSON(e){return new us(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sn(o){const e={};for(const t in o){e[t]={};for(const i in o[t]){const n=o[t][i];n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)?e[t][i]=n.clone():Array.isArray(n)?e[t][i]=n.slice():e[t][i]=n}}return e}function It(o){const e={};for(let t=0;t<o.length;t++){const i=Sn(o[t]);for(const n in i)e[n]=i[n]}return e}function tu(o){const e=[];for(let t=0;t<o.length;t++)e.push(o[t].clone());return e}function ec(o){return o.getRenderTarget()===null&&o.outputEncoding===Se?Zt:ss}const $t={clone:Sn,merge:It};var iu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,nu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pt extends Kt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=iu,this.fragmentShader=nu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sn(e.uniforms),this.uniformsGroups=tu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const n in this.uniforms){const r=this.uniforms[n].value;r&&r.isTexture?t.uniforms[n]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[n]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[n]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[n]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[n]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[n]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[n]={type:"m4",value:r.toArray()}:t.uniforms[n]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const i={};for(const n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class tc extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ve,this.projectionMatrix=new ve,this.projectionMatrixInverse=new ve}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class ft extends tc{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=rs*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan($n*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return rs*2*Math.atan(Math.tan($n*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,n,s,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan($n*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,s=-.5*n;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;s+=r.offsetX*n/l,t-=r.offsetY*i/c,n*=r.width/l,i*=r.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+n,t,t-i,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const fn=-90,pn=1;class su extends qe{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i;const n=new ft(fn,pn,e,t);n.layers=this.layers,n.up.set(0,1,0),n.lookAt(1,0,0),this.add(n);const s=new ft(fn,pn,e,t);s.layers=this.layers,s.up.set(0,1,0),s.lookAt(-1,0,0),this.add(s);const r=new ft(fn,pn,e,t);r.layers=this.layers,r.up.set(0,0,-1),r.lookAt(0,1,0),this.add(r);const a=new ft(fn,pn,e,t);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const l=new ft(fn,pn,e,t);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,1),this.add(l);const c=new ft(fn,pn,e,t);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,-1),this.add(c)}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget,[n,s,r,a,l,c]=this.children,h=e.getRenderTarget(),u=e.toneMapping,d=e.xr.enabled;e.toneMapping=Ei,e.xr.enabled=!1;const f=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,n),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,r),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=f,e.setRenderTarget(i,5),e.render(t,c),e.setRenderTarget(h),e.toneMapping=u,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class ic extends lt{constructor(e,t,i,n,s,r,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:yn,super(e,t,i,n,s,r,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ru extends Tt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new ic(n,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Je}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new us(5,5,5),s=new pt({name:"CubemapFromEquirect",uniforms:Sn(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Vt,blending:tt});s.uniforms.tEquirect.value=t;const r=new Dt(n,s),a=t.minFilter;return t.minFilter===Ci&&(t.minFilter=Je),new su(1,10,this).update(e,r),t.minFilter=a,r.geometry.dispose(),r.material.dispose(),this}clear(e,t,i,n){const s=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,n);e.setRenderTarget(s)}}const Lr=new T,au=new T,ou=new Ut;class Ti{constructor(e=new T(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const n=Lr.subVectors(i,t).cross(au.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const i=e.delta(Lr),n=this.normal.dot(i);if(n===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/n;return s<0||s>1?null:t.copy(i).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||ou.getNormalMatrix(e),n=this.coplanarPoint(Lr).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gn=new Dn,Ts=new T;class wa{constructor(e=new Ti,t=new Ti,i=new Ti,n=new Ti,s=new Ti,r=new Ti){this.planes=[e,t,i,n,s,r]}set(e,t,i,n,s,r){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(n),a[4].copy(s),a[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e){const t=this.planes,i=e.elements,n=i[0],s=i[1],r=i[2],a=i[3],l=i[4],c=i[5],h=i[6],u=i[7],d=i[8],f=i[9],g=i[10],p=i[11],A=i[12],m=i[13],I=i[14],_=i[15];return t[0].setComponents(a-n,u-l,p-d,_-A).normalize(),t[1].setComponents(a+n,u+l,p+d,_+A).normalize(),t[2].setComponents(a+s,u+c,p+f,_+m).normalize(),t[3].setComponents(a-s,u-c,p-f,_-m).normalize(),t[4].setComponents(a-r,u-h,p-g,_-I).normalize(),t[5].setComponents(a+r,u+h,p+g,_+I).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),gn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(gn)}intersectsSprite(e){return gn.center.set(0,0,0),gn.radius=.7071067811865476,gn.applyMatrix4(e.matrixWorld),this.intersectsSphere(gn)}intersectsSphere(e){const t=this.planes,i=e.center,n=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const n=t[i];if(Ts.x=n.normal.x>0?e.max.x:e.min.x,Ts.y=n.normal.y>0?e.max.y:e.min.y,Ts.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Ts)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function nc(){let o=null,e=!1,t=null,i=null;function n(s,r){t(s,r),i=o.requestAnimationFrame(n)}return{start:function(){e!==!0&&t!==null&&(i=o.requestAnimationFrame(n),e=!0)},stop:function(){o.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){o=s}}}function lu(o,e){const t=e.isWebGL2,i=new WeakMap;function n(c,h){const u=c.array,d=c.usage,f=o.createBuffer();o.bindBuffer(h,f),o.bufferData(h,u,d),c.onUploadCallback();let g;if(u instanceof Float32Array)g=5126;else if(u instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(u instanceof Int16Array)g=5122;else if(u instanceof Uint32Array)g=5125;else if(u instanceof Int32Array)g=5124;else if(u instanceof Int8Array)g=5120;else if(u instanceof Uint8Array)g=5121;else if(u instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:f,type:g,bytesPerElement:u.BYTES_PER_ELEMENT,version:c.version}}function s(c,h,u){const d=h.array,f=h.updateRange;o.bindBuffer(u,c),f.count===-1?o.bufferSubData(u,0,d):(t?o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d,f.offset,f.count):o.bufferSubData(u,f.offset*d.BYTES_PER_ELEMENT,d.subarray(f.offset,f.offset+f.count)),f.count=-1),h.onUploadCallback()}function r(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(o.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u===void 0?i.set(c,n(c,h)):u.version<c.version&&(s(u.buffer,c,h),u.version=c.version)}return{get:r,remove:a,update:l}}class ir extends Rt{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};const s=e/2,r=t/2,a=Math.floor(i),l=Math.floor(n),c=a+1,h=l+1,u=e/a,d=t/l,f=[],g=[],p=[],A=[];for(let m=0;m<h;m++){const I=m*d-r;for(let _=0;_<c;_++){const v=_*u-s;g.push(v,-I,0),p.push(0,0,1),A.push(_/a),A.push(1-m/l)}}for(let m=0;m<l;m++)for(let I=0;I<a;I++){const _=I+c*m,v=I+c*(m+1),E=I+1+c*(m+1),b=I+1+c*m;f.push(_,v,b),f.push(v,E,b)}this.setIndex(f),this.setAttribute("position",new Mt(g,3)),this.setAttribute("normal",new Mt(p,3)),this.setAttribute("uv",new Mt(A,2))}static fromJSON(e){return new ir(e.width,e.height,e.widthSegments,e.heightSegments)}}var cu=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,hu=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uu=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,du=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Au=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,fu=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pu="vec3 transformed = vec3( position );",gu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mu=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,_u=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,xu=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Eu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Iu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Cu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,yu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Mu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Su=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Bu=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Tu=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Du=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ru=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Lu=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Pu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fu=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nu=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Uu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ku=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Gu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,qu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Yu=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Ju=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ku=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ju=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zu=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,$u=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ed=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,td=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,id=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,nd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,sd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,ad=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,od=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,ld=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,ud=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,dd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,md=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_d=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ed=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Id=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,vd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,yd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Md=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,bd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,Td=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Dd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Rd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ld=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Pd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Nd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ud=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Gd=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Od=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Hd=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Vd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Wd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,qd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Jd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Xd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Kd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Zd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,$d=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,eA=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,tA=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,iA=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,nA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,sA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,rA=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,aA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const oA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,lA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,cA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,uA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,AA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,pA=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_A=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,xA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,EA=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IA=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,CA=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vA=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yA=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wA=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,MA=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,SA=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,BA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TA=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,DA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,RA=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LA=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QA=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,PA=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,FA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,NA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,UA=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,kA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,GA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ce={alphamap_fragment:cu,alphamap_pars_fragment:hu,alphatest_fragment:uu,alphatest_pars_fragment:du,aomap_fragment:Au,aomap_pars_fragment:fu,begin_vertex:pu,beginnormal_vertex:gu,bsdfs:mu,iridescence_fragment:_u,bumpmap_pars_fragment:xu,clipping_planes_fragment:Eu,clipping_planes_pars_fragment:Iu,clipping_planes_pars_vertex:Cu,clipping_planes_vertex:vu,color_fragment:yu,color_pars_fragment:wu,color_pars_vertex:Mu,color_vertex:bu,common:Su,cube_uv_reflection_fragment:Bu,defaultnormal_vertex:Tu,displacementmap_pars_vertex:Du,displacementmap_vertex:Ru,emissivemap_fragment:Lu,emissivemap_pars_fragment:Qu,encodings_fragment:Pu,encodings_pars_fragment:Fu,envmap_fragment:Nu,envmap_common_pars_fragment:Uu,envmap_pars_fragment:ku,envmap_pars_vertex:Gu,envmap_physical_pars_fragment:Zu,envmap_vertex:Ou,fog_vertex:Hu,fog_pars_vertex:zu,fog_fragment:Vu,fog_pars_fragment:Wu,gradientmap_pars_fragment:qu,lightmap_fragment:Yu,lightmap_pars_fragment:Ju,lights_lambert_fragment:Xu,lights_lambert_pars_fragment:Ku,lights_pars_begin:ju,lights_toon_fragment:$u,lights_toon_pars_fragment:ed,lights_phong_fragment:td,lights_phong_pars_fragment:id,lights_physical_fragment:nd,lights_physical_pars_fragment:sd,lights_fragment_begin:rd,lights_fragment_maps:ad,lights_fragment_end:od,logdepthbuf_fragment:ld,logdepthbuf_pars_fragment:cd,logdepthbuf_pars_vertex:hd,logdepthbuf_vertex:ud,map_fragment:dd,map_pars_fragment:Ad,map_particle_fragment:fd,map_particle_pars_fragment:pd,metalnessmap_fragment:gd,metalnessmap_pars_fragment:md,morphcolor_vertex:_d,morphnormal_vertex:xd,morphtarget_pars_vertex:Ed,morphtarget_vertex:Id,normal_fragment_begin:Cd,normal_fragment_maps:vd,normal_pars_fragment:yd,normal_pars_vertex:wd,normal_vertex:Md,normalmap_pars_fragment:bd,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:Td,iridescence_pars_fragment:Dd,output_fragment:Rd,packing:Ld,premultiplied_alpha_fragment:Qd,project_vertex:Pd,dithering_fragment:Fd,dithering_pars_fragment:Nd,roughnessmap_fragment:Ud,roughnessmap_pars_fragment:kd,shadowmap_pars_fragment:Gd,shadowmap_pars_vertex:Od,shadowmap_vertex:Hd,shadowmask_pars_fragment:zd,skinbase_vertex:Vd,skinning_pars_vertex:Wd,skinning_vertex:qd,skinnormal_vertex:Yd,specularmap_fragment:Jd,specularmap_pars_fragment:Xd,tonemapping_fragment:Kd,tonemapping_pars_fragment:jd,transmission_fragment:Zd,transmission_pars_fragment:$d,uv_pars_fragment:eA,uv_pars_vertex:tA,uv_vertex:iA,uv2_pars_fragment:nA,uv2_pars_vertex:sA,uv2_vertex:rA,worldpos_vertex:aA,background_vert:oA,background_frag:lA,backgroundCube_vert:cA,backgroundCube_frag:hA,cube_vert:uA,cube_frag:dA,depth_vert:AA,depth_frag:fA,distanceRGBA_vert:pA,distanceRGBA_frag:gA,equirect_vert:mA,equirect_frag:_A,linedashed_vert:xA,linedashed_frag:EA,meshbasic_vert:IA,meshbasic_frag:CA,meshlambert_vert:vA,meshlambert_frag:yA,meshmatcap_vert:wA,meshmatcap_frag:MA,meshnormal_vert:bA,meshnormal_frag:SA,meshphong_vert:BA,meshphong_frag:TA,meshphysical_vert:DA,meshphysical_frag:RA,meshtoon_vert:LA,meshtoon_frag:QA,points_vert:PA,points_frag:FA,shadow_vert:NA,shadow_frag:UA,sprite_vert:kA,sprite_frag:GA},se={common:{diffuse:{value:new Ie(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Ut},uv2Transform:{value:new Ut},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ie(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ie(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Ie(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Ut}}},Jt={basic:{uniforms:It([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.fog]),vertexShader:Ce.meshbasic_vert,fragmentShader:Ce.meshbasic_frag},lambert:{uniforms:It([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshlambert_vert,fragmentShader:Ce.meshlambert_frag},phong:{uniforms:It([se.common,se.specularmap,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.fog,se.lights,{emissive:{value:new Ie(0)},specular:{value:new Ie(1118481)},shininess:{value:30}}]),vertexShader:Ce.meshphong_vert,fragmentShader:Ce.meshphong_frag},standard:{uniforms:It([se.common,se.envmap,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.roughnessmap,se.metalnessmap,se.fog,se.lights,{emissive:{value:new Ie(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag},toon:{uniforms:It([se.common,se.aomap,se.lightmap,se.emissivemap,se.bumpmap,se.normalmap,se.displacementmap,se.gradientmap,se.fog,se.lights,{emissive:{value:new Ie(0)}}]),vertexShader:Ce.meshtoon_vert,fragmentShader:Ce.meshtoon_frag},matcap:{uniforms:It([se.common,se.bumpmap,se.normalmap,se.displacementmap,se.fog,{matcap:{value:null}}]),vertexShader:Ce.meshmatcap_vert,fragmentShader:Ce.meshmatcap_frag},points:{uniforms:It([se.points,se.fog]),vertexShader:Ce.points_vert,fragmentShader:Ce.points_frag},dashed:{uniforms:It([se.common,se.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ce.linedashed_vert,fragmentShader:Ce.linedashed_frag},depth:{uniforms:It([se.common,se.displacementmap]),vertexShader:Ce.depth_vert,fragmentShader:Ce.depth_frag},normal:{uniforms:It([se.common,se.bumpmap,se.normalmap,se.displacementmap,{opacity:{value:1}}]),vertexShader:Ce.meshnormal_vert,fragmentShader:Ce.meshnormal_frag},sprite:{uniforms:It([se.sprite,se.fog]),vertexShader:Ce.sprite_vert,fragmentShader:Ce.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ce.background_vert,fragmentShader:Ce.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ce.backgroundCube_vert,fragmentShader:Ce.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ce.cube_vert,fragmentShader:Ce.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ce.equirect_vert,fragmentShader:Ce.equirect_frag},distanceRGBA:{uniforms:It([se.common,se.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ce.distanceRGBA_vert,fragmentShader:Ce.distanceRGBA_frag},shadow:{uniforms:It([se.lights,se.fog,{color:{value:new Ie(0)},opacity:{value:1}}]),vertexShader:Ce.shadow_vert,fragmentShader:Ce.shadow_frag}};Jt.physical={uniforms:It([Jt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new me(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Ie(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Ie(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Ie(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ce.meshphysical_vert,fragmentShader:Ce.meshphysical_frag};const Ds={r:0,b:0,g:0};function OA(o,e,t,i,n,s,r){const a=new Ie(0);let l=s===!0?0:1,c,h,u=null,d=0,f=null;function g(A,m){let I=!1,_=m.isScene===!0?m.background:null;_&&_.isTexture&&(_=(m.backgroundBlurriness>0?t:e).get(_));const v=o.xr,E=v.getSession&&v.getSession();E&&E.environmentBlendMode==="additive"&&(_=null),_===null?p(a,l):_&&_.isColor&&(p(_,1),I=!0),(o.autoClear||I)&&o.clear(o.autoClearColor,o.autoClearDepth,o.autoClearStencil),_&&(_.isCubeTexture||_.mapping===er)?(h===void 0&&(h=new Dt(new us(1,1,1),new pt({name:"BackgroundCubeMaterial",uniforms:Sn(Jt.backgroundCube.uniforms),vertexShader:Jt.backgroundCube.vertexShader,fragmentShader:Jt.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,B,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(h)),h.material.uniforms.envMap.value=_,h.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=m.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,h.material.toneMapped=_.encoding!==Se,(u!==_||d!==_.version||f!==o.toneMapping)&&(h.material.needsUpdate=!0,u=_,d=_.version,f=o.toneMapping),h.layers.enableAll(),A.unshift(h,h.geometry,h.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Dt(new ir(2,2),new pt({name:"BackgroundMaterial",uniforms:Sn(Jt.background.uniforms),vertexShader:Jt.background.vertexShader,fragmentShader:Jt.background.fragmentShader,side:Fi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=m.backgroundIntensity,c.material.toneMapped=_.encoding!==Se,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(u!==_||d!==_.version||f!==o.toneMapping)&&(c.material.needsUpdate=!0,u=_,d=_.version,f=o.toneMapping),c.layers.enableAll(),A.unshift(c,c.geometry,c.material,0,0,null))}function p(A,m){A.getRGB(Ds,ec(o)),i.buffers.color.setClear(Ds.r,Ds.g,Ds.b,m,r)}return{getClearColor:function(){return a},setClearColor:function(A,m=1){a.set(A),l=m,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(A){l=A,p(a,l)},render:g}}function HA(o,e,t,i){const n=o.getParameter(34921),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),r=i.isWebGL2||s!==null,a={},l=A(null);let c=l,h=!1;function u(D,G,K,W,k){let j=!1;if(r){const Z=p(W,K,G);c!==Z&&(c=Z,f(c.object)),j=m(D,W,K,k),j&&I(D,W,K,k)}else{const Z=G.wireframe===!0;(c.geometry!==W.id||c.program!==K.id||c.wireframe!==Z)&&(c.geometry=W.id,c.program=K.id,c.wireframe=Z,j=!0)}k!==null&&t.update(k,34963),(j||h)&&(h=!1,x(D,G,K,W),k!==null&&o.bindBuffer(34963,t.get(k).buffer))}function d(){return i.isWebGL2?o.createVertexArray():s.createVertexArrayOES()}function f(D){return i.isWebGL2?o.bindVertexArray(D):s.bindVertexArrayOES(D)}function g(D){return i.isWebGL2?o.deleteVertexArray(D):s.deleteVertexArrayOES(D)}function p(D,G,K){const W=K.wireframe===!0;let k=a[D.id];k===void 0&&(k={},a[D.id]=k);let j=k[G.id];j===void 0&&(j={},k[G.id]=j);let Z=j[W];return Z===void 0&&(Z=A(d()),j[W]=Z),Z}function A(D){const G=[],K=[],W=[];for(let k=0;k<n;k++)G[k]=0,K[k]=0,W[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:G,enabledAttributes:K,attributeDivisors:W,object:D,attributes:{},index:null}}function m(D,G,K,W){const k=c.attributes,j=G.attributes;let Z=0;const H=K.getAttributes();for(const Y in H)if(H[Y].location>=0){const ie=k[Y];let re=j[Y];if(re===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(re=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(re=D.instanceColor)),ie===void 0||ie.attribute!==re||re&&ie.data!==re.data)return!0;Z++}return c.attributesNum!==Z||c.index!==W}function I(D,G,K,W){const k={},j=G.attributes;let Z=0;const H=K.getAttributes();for(const Y in H)if(H[Y].location>=0){let ie=j[Y];ie===void 0&&(Y==="instanceMatrix"&&D.instanceMatrix&&(ie=D.instanceMatrix),Y==="instanceColor"&&D.instanceColor&&(ie=D.instanceColor));const re={};re.attribute=ie,ie&&ie.data&&(re.data=ie.data),k[Y]=re,Z++}c.attributes=k,c.attributesNum=Z,c.index=W}function _(){const D=c.newAttributes;for(let G=0,K=D.length;G<K;G++)D[G]=0}function v(D){E(D,0)}function E(D,G){const K=c.newAttributes,W=c.enabledAttributes,k=c.attributeDivisors;K[D]=1,W[D]===0&&(o.enableVertexAttribArray(D),W[D]=1),k[D]!==G&&((i.isWebGL2?o:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](D,G),k[D]=G)}function b(){const D=c.newAttributes,G=c.enabledAttributes;for(let K=0,W=G.length;K<W;K++)G[K]!==D[K]&&(o.disableVertexAttribArray(K),G[K]=0)}function B(D,G,K,W,k,j){i.isWebGL2===!0&&(K===5124||K===5125)?o.vertexAttribIPointer(D,G,K,k,j):o.vertexAttribPointer(D,G,K,W,k,j)}function x(D,G,K,W){if(i.isWebGL2===!1&&(D.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const k=W.attributes,j=K.getAttributes(),Z=G.defaultAttributeValues;for(const H in j){const Y=j[H];if(Y.location>=0){let ee=k[H];if(ee===void 0&&(H==="instanceMatrix"&&D.instanceMatrix&&(ee=D.instanceMatrix),H==="instanceColor"&&D.instanceColor&&(ee=D.instanceColor)),ee!==void 0){const ie=ee.normalized,re=ee.itemSize,J=t.get(ee);if(J===void 0)continue;const Be=J.buffer,de=J.type,_e=J.bytesPerElement;if(ee.isInterleavedBufferAttribute){const ue=ee.data,Ue=ue.stride,we=ee.offset;if(ue.isInstancedInterleavedBuffer){for(let xe=0;xe<Y.locationSize;xe++)E(Y.location+xe,ue.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let xe=0;xe<Y.locationSize;xe++)v(Y.location+xe);o.bindBuffer(34962,Be);for(let xe=0;xe<Y.locationSize;xe++)B(Y.location+xe,re/Y.locationSize,de,ie,Ue*_e,(we+re/Y.locationSize*xe)*_e)}else{if(ee.isInstancedBufferAttribute){for(let ue=0;ue<Y.locationSize;ue++)E(Y.location+ue,ee.meshPerAttribute);D.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let ue=0;ue<Y.locationSize;ue++)v(Y.location+ue);o.bindBuffer(34962,Be);for(let ue=0;ue<Y.locationSize;ue++)B(Y.location+ue,re/Y.locationSize,de,ie,re*_e,re/Y.locationSize*ue*_e)}}else if(Z!==void 0){const ie=Z[H];if(ie!==void 0)switch(ie.length){case 2:o.vertexAttrib2fv(Y.location,ie);break;case 3:o.vertexAttrib3fv(Y.location,ie);break;case 4:o.vertexAttrib4fv(Y.location,ie);break;default:o.vertexAttrib1fv(Y.location,ie)}}}}b()}function w(){O();for(const D in a){const G=a[D];for(const K in G){const W=G[K];for(const k in W)g(W[k].object),delete W[k];delete G[K]}delete a[D]}}function R(D){if(a[D.id]===void 0)return;const G=a[D.id];for(const K in G){const W=G[K];for(const k in W)g(W[k].object),delete W[k];delete G[K]}delete a[D.id]}function F(D){for(const G in a){const K=a[G];if(K[D.id]===void 0)continue;const W=K[D.id];for(const k in W)g(W[k].object),delete W[k];delete K[D.id]}}function O(){Q(),h=!0,c!==l&&(c=l,f(c.object))}function Q(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:u,reset:O,resetDefaultState:Q,dispose:w,releaseStatesOfGeometry:R,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:v,disableUnusedAttributes:b}}function zA(o,e,t,i){const n=i.isWebGL2;let s;function r(c){s=c}function a(c,h){o.drawArrays(s,c,h),t.update(h,s,1)}function l(c,h,u){if(u===0)return;let d,f;if(n)d=o,f="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),f="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[f](s,c,h,u),t.update(h,s,u)}this.setMode=r,this.render=a,this.renderInstances=l}function VA(o,e,t){let i;function n(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const B=e.get("EXT_texture_filter_anisotropic");i=o.getParameter(B.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(B){if(B==="highp"){if(o.getShaderPrecisionFormat(35633,36338).precision>0&&o.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";B="mediump"}return B==="mediump"&&o.getShaderPrecisionFormat(35633,36337).precision>0&&o.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const r=typeof WebGL2RenderingContext<"u"&&o instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&o instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=r||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,u=o.getParameter(34930),d=o.getParameter(35660),f=o.getParameter(3379),g=o.getParameter(34076),p=o.getParameter(34921),A=o.getParameter(36347),m=o.getParameter(36348),I=o.getParameter(36349),_=d>0,v=r||e.has("OES_texture_float"),E=_&&v,b=r?o.getParameter(36183):0;return{isWebGL2:r,drawBuffers:c,getMaxAnisotropy:n,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:h,maxTextures:u,maxVertexTextures:d,maxTextureSize:f,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:A,maxVaryings:m,maxFragmentUniforms:I,vertexTextures:_,floatFragmentTextures:v,floatVertexTextures:E,maxSamples:b}}function WA(o){const e=this;let t=null,i=0,n=!1,s=!1;const r=new Ti,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d,f){const g=u.length!==0||d||i!==0||n;return n=d,t=h(u,f,0),i=u.length,g},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1,c()},this.setState=function(u,d,f){const g=u.clippingPlanes,p=u.clipIntersection,A=u.clipShadows,m=o.get(u);if(!n||g===null||g.length===0||s&&!A)s?h(null):c();else{const I=s?0:i,_=I*4;let v=m.clippingState||null;l.value=v,v=h(g,d,_,f);for(let E=0;E!==_;++E)v[E]=t[E];m.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=I}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){const p=u!==null?u.length:0;let A=null;if(p!==0){if(A=l.value,g!==!0||A===null){const m=f+p*4,I=d.matrixWorldInverse;a.getNormalMatrix(I),(A===null||A.length<m)&&(A=new Float32Array(m));for(let _=0,v=f;_!==p;++_,v+=4)r.copy(u[_]).applyMatrix4(I,a),r.normal.toArray(A,v),A[v+3]=r.constant}l.value=A,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,A}}function qA(o){let e=new WeakMap;function t(r,a){return a===is?r.mapping=yn:a===ia&&(r.mapping=wn),r}function i(r){if(r&&r.isTexture&&r.isRenderTargetTexture===!1){const a=r.mapping;if(a===is||a===ia)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new ru(l.height/2);return c.fromEquirectangularTexture(o,r),e.set(r,c),r.addEventListener("dispose",n),t(c.texture,r.mapping)}else return null}}return r}function n(r){const a=r.target;a.removeEventListener("dispose",n);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class nr extends tc{constructor(e=-1,t=1,i=1,n=-1,s=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=s,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,s,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=s,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2;let s=i-e,r=i+e,a=n+t,l=n-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,r=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,r,a,l,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const In=4,bo=[.125,.215,.35,.446,.526,.582],Xi=20,Qr=new nr,So=new Ie;let Pr=null;const Ji=(1+Math.sqrt(5))/2,mn=1/Ji,Bo=[new T(1,1,1),new T(-1,1,1),new T(1,1,-1),new T(-1,1,-1),new T(0,Ji,mn),new T(0,Ji,-mn),new T(mn,0,Ji),new T(-mn,0,Ji),new T(Ji,mn,0),new T(-Ji,mn,0)];class To{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,n=100){Pr=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,n,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ro(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Pr),e.scissorTest=!1,Rs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===yn||e.mapping===wn?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Pr=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Je,minFilter:Je,generateMipmaps:!1,type:wt,format:ht,encoding:ti,depthBuffer:!1},n=Do(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Do(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=YA(s)),this._blurMaterial=JA(s,e,t)}return n}_compileMaterial(e){const t=new Dt(this._lodPlanes[0],e);this._renderer.compile(t,Qr)}_sceneToCubeUV(e,t,i,n){const a=new ft(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(So),h.toneMapping=Ei,h.autoClear=!1;const f=new _i({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Dt(new us,f);let p=!1;const A=e.background;A?A.isColor&&(f.color.copy(A),e.background=null,p=!0):(f.color.copy(So),p=!0);for(let m=0;m<6;m++){const I=m%3;I===0?(a.up.set(0,l[m],0),a.lookAt(c[m],0,0)):I===1?(a.up.set(0,0,l[m]),a.lookAt(0,c[m],0)):(a.up.set(0,l[m],0),a.lookAt(0,0,c[m]));const _=this._cubeSize;Rs(n,I*_,m>2?_:0,_,_),h.setRenderTarget(n),p&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=A}_textureToCubeUV(e,t){const i=this._renderer,n=e.mapping===yn||e.mapping===wn;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ro());const s=n?this._cubemapMaterial:this._equirectMaterial,r=new Dt(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Rs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Qr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let n=1;n<this._lodPlanes.length;n++){const s=Math.sqrt(this._sigmas[n]*this._sigmas[n]-this._sigmas[n-1]*this._sigmas[n-1]),r=Bo[(n-1)%Bo.length];this._blur(e,n-1,n,s,r)}t.autoClear=i}_blur(e,t,i,n,s){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,n,"latitudinal",s),this._halfBlur(r,e,i,i,n,"longitudinal",s)}_halfBlur(e,t,i,n,s,r,a){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Dt(this._lodPlanes[n],c),d=c.uniforms,f=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Xi-1),p=s/g,A=isFinite(s)?1+Math.floor(h*p):Xi;A>Xi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${Xi}`);const m=[];let I=0;for(let B=0;B<Xi;++B){const x=B/p,w=Math.exp(-x*x/2);m.push(w),B===0?I+=w:B<A&&(I+=2*w)}for(let B=0;B<m.length;B++)m[B]=m[B]/I;d.envMap.value=e.texture,d.samples.value=A,d.weights.value=m,d.latitudinal.value=r==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const v=this._sizeLods[n],E=3*v*(n>_-In?n-_+In:0),b=4*(this._cubeSize-v);Rs(t,E,b,3*v,2*v),l.setRenderTarget(t),l.render(u,Qr)}}function YA(o){const e=[],t=[],i=[];let n=o;const s=o-In+1+bo.length;for(let r=0;r<s;r++){const a=Math.pow(2,n);t.push(a);let l=1/a;r>o-In?l=bo[r-o+In-1]:r===0&&(l=0),i.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,g=6,p=3,A=2,m=1,I=new Float32Array(p*g*f),_=new Float32Array(A*g*f),v=new Float32Array(m*g*f);for(let b=0;b<f;b++){const B=b%3*2/3-1,x=b>2?0:-1,w=[B,x,0,B+2/3,x,0,B+2/3,x+1,0,B,x,0,B+2/3,x+1,0,B,x+1,0];I.set(w,p*g*b),_.set(d,A*g*b);const R=[b,b,b,b,b,b];v.set(R,m*g*b)}const E=new Rt;E.setAttribute("position",new ut(I,p)),E.setAttribute("uv",new ut(_,A)),E.setAttribute("faceIndex",new ut(v,m)),e.push(E),n>In&&n--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Do(o,e,t){const i=new Tt(o,e,t);return i.texture.mapping=er,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rs(o,e,t,i,n){o.viewport.set(e,t,i,n),o.scissor.set(e,t,i,n)}function JA(o,e,t){const i=new Float32Array(Xi),n=new T(0,1,0);return new pt({name:"SphericalGaussianBlur",defines:{n:Xi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${o}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:n}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:tt,depthTest:!1,depthWrite:!1})}function Ro(){return new pt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:tt,depthTest:!1,depthWrite:!1})}function Lo(){return new pt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ma(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tt,depthTest:!1,depthWrite:!1})}function Ma(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function XA(o){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===is||l===ia,h=l===yn||l===wn;if(c||h)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let u=e.get(a);return t===null&&(t=new To(o)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),e.set(a,u),u.texture}else{if(e.has(a))return e.get(a).texture;{const u=a.image;if(c&&u&&u.height>0||h&&u&&n(u)){t===null&&(t=new To(o));const d=c?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function n(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function KA(o){const e={};function t(i){if(e[i]!==void 0)return e[i];let n;switch(i){case"WEBGL_depth_texture":n=o.getExtension("WEBGL_depth_texture")||o.getExtension("MOZ_WEBGL_depth_texture")||o.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":n=o.getExtension("EXT_texture_filter_anisotropic")||o.getExtension("MOZ_EXT_texture_filter_anisotropic")||o.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":n=o.getExtension("WEBGL_compressed_texture_s3tc")||o.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":n=o.getExtension("WEBGL_compressed_texture_pvrtc")||o.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:n=o.getExtension(i)}return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const n=t(i);return n===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),n}}}function jA(o,e,t,i){const n={},s=new WeakMap;function r(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",r),delete n[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return n[d.id]===!0||(d.addEventListener("dispose",r),n[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],34962);const f=u.morphAttributes;for(const g in f){const p=f[g];for(let A=0,m=p.length;A<m;A++)e.update(p[A],34962)}}function c(u){const d=[],f=u.index,g=u.attributes.position;let p=0;if(f!==null){const I=f.array;p=f.version;for(let _=0,v=I.length;_<v;_+=3){const E=I[_+0],b=I[_+1],B=I[_+2];d.push(E,b,b,B,B,E)}}else{const I=g.array;p=g.version;for(let _=0,v=I.length/3-1;_<v;_+=3){const E=_+0,b=_+1,B=_+2;d.push(E,b,b,B,B,E)}}const A=new(Wl(d)?$l:Zl)(d,1);A.version=p;const m=s.get(u);m&&e.remove(m),s.set(u,A)}function h(u){const d=s.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function ZA(o,e,t,i){const n=i.isWebGL2;let s;function r(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function h(d,f){o.drawElements(s,f,a,d*l),t.update(f,s,1)}function u(d,f,g){if(g===0)return;let p,A;if(n)p=o,A="drawElementsInstanced";else if(p=e.get("ANGLE_instanced_arrays"),A="drawElementsInstancedANGLE",p===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}p[A](s,f,a,d*l,g),t.update(f,s,g)}this.setMode=r,this.setIndex=c,this.render=h,this.renderInstances=u}function $A(o){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,r,a){switch(t.calls++,r){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function n(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function ef(o,e){return o[0]-e[0]}function tf(o,e){return Math.abs(e[1])-Math.abs(o[1])}function nf(o,e,t){const i={},n=new Float32Array(8),s=new WeakMap,r=new Ve,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,h,u,d){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const p=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,A=p!==void 0?p.length:0;let m=s.get(h);if(m===void 0||m.count!==A){let K=function(){D.dispose(),s.delete(h),h.removeEventListener("dispose",K)};var g=K;m!==void 0&&m.texture.dispose();const v=h.morphAttributes.position!==void 0,E=h.morphAttributes.normal!==void 0,b=h.morphAttributes.color!==void 0,B=h.morphAttributes.position||[],x=h.morphAttributes.normal||[],w=h.morphAttributes.color||[];let R=0;v===!0&&(R=1),E===!0&&(R=2),b===!0&&(R=3);let F=h.attributes.position.count*R,O=1;F>e.maxTextureSize&&(O=Math.ceil(F/e.maxTextureSize),F=e.maxTextureSize);const Q=new Float32Array(F*O*4*A),D=new Xl(Q,F,O,A);D.type=yt,D.needsUpdate=!0;const G=R*4;for(let W=0;W<A;W++){const k=B[W],j=x[W],Z=w[W],H=F*O*4*W;for(let Y=0;Y<k.count;Y++){const ee=Y*G;v===!0&&(r.fromBufferAttribute(k,Y),Q[H+ee+0]=r.x,Q[H+ee+1]=r.y,Q[H+ee+2]=r.z,Q[H+ee+3]=0),E===!0&&(r.fromBufferAttribute(j,Y),Q[H+ee+4]=r.x,Q[H+ee+5]=r.y,Q[H+ee+6]=r.z,Q[H+ee+7]=0),b===!0&&(r.fromBufferAttribute(Z,Y),Q[H+ee+8]=r.x,Q[H+ee+9]=r.y,Q[H+ee+10]=r.z,Q[H+ee+11]=Z.itemSize===4?r.w:1)}}m={count:A,texture:D,size:new me(F,O)},s.set(h,m),h.addEventListener("dispose",K)}let I=0;for(let v=0;v<f.length;v++)I+=f[v];const _=h.morphTargetsRelative?1:1-I;d.getUniforms().setValue(o,"morphTargetBaseInfluence",_),d.getUniforms().setValue(o,"morphTargetInfluences",f),d.getUniforms().setValue(o,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(o,"morphTargetsTextureSize",m.size)}else{const p=f===void 0?0:f.length;let A=i[h.id];if(A===void 0||A.length!==p){A=[];for(let E=0;E<p;E++)A[E]=[E,0];i[h.id]=A}for(let E=0;E<p;E++){const b=A[E];b[0]=E,b[1]=f[E]}A.sort(tf);for(let E=0;E<8;E++)E<p&&A[E][1]?(a[E][0]=A[E][0],a[E][1]=A[E][1]):(a[E][0]=Number.MAX_SAFE_INTEGER,a[E][1]=0);a.sort(ef);const m=h.morphAttributes.position,I=h.morphAttributes.normal;let _=0;for(let E=0;E<8;E++){const b=a[E],B=b[0],x=b[1];B!==Number.MAX_SAFE_INTEGER&&x?(m&&h.getAttribute("morphTarget"+E)!==m[B]&&h.setAttribute("morphTarget"+E,m[B]),I&&h.getAttribute("morphNormal"+E)!==I[B]&&h.setAttribute("morphNormal"+E,I[B]),n[E]=x,_+=x):(m&&h.hasAttribute("morphTarget"+E)===!0&&h.deleteAttribute("morphTarget"+E),I&&h.hasAttribute("morphNormal"+E)===!0&&h.deleteAttribute("morphNormal"+E),n[E]=0)}const v=h.morphTargetsRelative?1:1-_;d.getUniforms().setValue(o,"morphTargetBaseInfluence",v),d.getUniforms().setValue(o,"morphTargetInfluences",n)}}return{update:l}}function sf(o,e,t,i){let n=new WeakMap;function s(l){const c=i.render.frame,h=l.geometry,u=e.get(l,h);return n.get(u)!==c&&(e.update(u),n.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,34962),l.instanceColor!==null&&t.update(l.instanceColor,34962)),u}function r(){n=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:r}}const sc=new lt,rc=new Xl,ac=new Kl,oc=new ic,Qo=[],Po=[],Fo=new Float32Array(16),No=new Float32Array(9),Uo=new Float32Array(4);function Rn(o,e,t){const i=o[0];if(i<=0||i>0)return o;const n=e*t;let s=Qo[n];if(s===void 0&&(s=new Float32Array(n),Qo[n]=s),e!==0){i.toArray(s,0);for(let r=1,a=0;r!==e;++r)a+=t,o[r].toArray(s,a)}return s}function it(o,e){if(o.length!==e.length)return!1;for(let t=0,i=o.length;t<i;t++)if(o[t]!==e[t])return!1;return!0}function nt(o,e){for(let t=0,i=e.length;t<i;t++)o[t]=e[t]}function sr(o,e){let t=Po[e];t===void 0&&(t=new Int32Array(e),Po[e]=t);for(let i=0;i!==e;++i)t[i]=o.allocateTextureUnit();return t}function rf(o,e){const t=this.cache;t[0]!==e&&(o.uniform1f(this.addr,e),t[0]=e)}function af(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;o.uniform2fv(this.addr,e),nt(t,e)}}function of(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(o.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(it(t,e))return;o.uniform3fv(this.addr,e),nt(t,e)}}function lf(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;o.uniform4fv(this.addr,e),nt(t,e)}}function cf(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(it(t,e))return;o.uniformMatrix2fv(this.addr,!1,e),nt(t,e)}else{if(it(t,i))return;Uo.set(i),o.uniformMatrix2fv(this.addr,!1,Uo),nt(t,i)}}function hf(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(it(t,e))return;o.uniformMatrix3fv(this.addr,!1,e),nt(t,e)}else{if(it(t,i))return;No.set(i),o.uniformMatrix3fv(this.addr,!1,No),nt(t,i)}}function uf(o,e){const t=this.cache,i=e.elements;if(i===void 0){if(it(t,e))return;o.uniformMatrix4fv(this.addr,!1,e),nt(t,e)}else{if(it(t,i))return;Fo.set(i),o.uniformMatrix4fv(this.addr,!1,Fo),nt(t,i)}}function df(o,e){const t=this.cache;t[0]!==e&&(o.uniform1i(this.addr,e),t[0]=e)}function Af(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;o.uniform2iv(this.addr,e),nt(t,e)}}function ff(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;o.uniform3iv(this.addr,e),nt(t,e)}}function pf(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;o.uniform4iv(this.addr,e),nt(t,e)}}function gf(o,e){const t=this.cache;t[0]!==e&&(o.uniform1ui(this.addr,e),t[0]=e)}function mf(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(o.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(it(t,e))return;o.uniform2uiv(this.addr,e),nt(t,e)}}function _f(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(o.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(it(t,e))return;o.uniform3uiv(this.addr,e),nt(t,e)}}function xf(o,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(o.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(it(t,e))return;o.uniform4uiv(this.addr,e),nt(t,e)}}function Ef(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2D(e||sc,n)}function If(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||ac,n)}function Cf(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||oc,n)}function vf(o,e,t){const i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(o.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||rc,n)}function yf(o){switch(o){case 5126:return rf;case 35664:return af;case 35665:return of;case 35666:return lf;case 35674:return cf;case 35675:return hf;case 35676:return uf;case 5124:case 35670:return df;case 35667:case 35671:return Af;case 35668:case 35672:return ff;case 35669:case 35673:return pf;case 5125:return gf;case 36294:return mf;case 36295:return _f;case 36296:return xf;case 35678:case 36198:case 36298:case 36306:case 35682:return Ef;case 35679:case 36299:case 36307:return If;case 35680:case 36300:case 36308:case 36293:return Cf;case 36289:case 36303:case 36311:case 36292:return vf}}function wf(o,e){o.uniform1fv(this.addr,e)}function Mf(o,e){const t=Rn(e,this.size,2);o.uniform2fv(this.addr,t)}function bf(o,e){const t=Rn(e,this.size,3);o.uniform3fv(this.addr,t)}function Sf(o,e){const t=Rn(e,this.size,4);o.uniform4fv(this.addr,t)}function Bf(o,e){const t=Rn(e,this.size,4);o.uniformMatrix2fv(this.addr,!1,t)}function Tf(o,e){const t=Rn(e,this.size,9);o.uniformMatrix3fv(this.addr,!1,t)}function Df(o,e){const t=Rn(e,this.size,16);o.uniformMatrix4fv(this.addr,!1,t)}function Rf(o,e){o.uniform1iv(this.addr,e)}function Lf(o,e){o.uniform2iv(this.addr,e)}function Qf(o,e){o.uniform3iv(this.addr,e)}function Pf(o,e){o.uniform4iv(this.addr,e)}function Ff(o,e){o.uniform1uiv(this.addr,e)}function Nf(o,e){o.uniform2uiv(this.addr,e)}function Uf(o,e){o.uniform3uiv(this.addr,e)}function kf(o,e){o.uniform4uiv(this.addr,e)}function Gf(o,e,t){const i=this.cache,n=e.length,s=sr(t,n);it(i,s)||(o.uniform1iv(this.addr,s),nt(i,s));for(let r=0;r!==n;++r)t.setTexture2D(e[r]||sc,s[r])}function Of(o,e,t){const i=this.cache,n=e.length,s=sr(t,n);it(i,s)||(o.uniform1iv(this.addr,s),nt(i,s));for(let r=0;r!==n;++r)t.setTexture3D(e[r]||ac,s[r])}function Hf(o,e,t){const i=this.cache,n=e.length,s=sr(t,n);it(i,s)||(o.uniform1iv(this.addr,s),nt(i,s));for(let r=0;r!==n;++r)t.setTextureCube(e[r]||oc,s[r])}function zf(o,e,t){const i=this.cache,n=e.length,s=sr(t,n);it(i,s)||(o.uniform1iv(this.addr,s),nt(i,s));for(let r=0;r!==n;++r)t.setTexture2DArray(e[r]||rc,s[r])}function Vf(o){switch(o){case 5126:return wf;case 35664:return Mf;case 35665:return bf;case 35666:return Sf;case 35674:return Bf;case 35675:return Tf;case 35676:return Df;case 5124:case 35670:return Rf;case 35667:case 35671:return Lf;case 35668:case 35672:return Qf;case 35669:case 35673:return Pf;case 5125:return Ff;case 36294:return Nf;case 36295:return Uf;case 36296:return kf;case 35678:case 36198:case 36298:case 36306:case 35682:return Gf;case 35679:case 36299:case 36307:return Of;case 35680:case 36300:case 36308:case 36293:return Hf;case 36289:case 36303:case 36311:case 36292:return zf}}class Wf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=yf(t.type)}}class qf{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=Vf(t.type)}}class Yf{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const n=this.seq;for(let s=0,r=n.length;s!==r;++s){const a=n[s];a.setValue(e,t[a.id],i)}}}const Fr=/(\w+)(\])?(\[|\.)?/g;function ko(o,e){o.seq.push(e),o.map[e.id]=e}function Jf(o,e,t){const i=o.name,n=i.length;for(Fr.lastIndex=0;;){const s=Fr.exec(i),r=Fr.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&r+2===n){ko(t,c===void 0?new Wf(a,o,e):new qf(a,o,e));break}else{let u=t.map[a];u===void 0&&(u=new Yf(a),ko(t,u)),t=u}}}class qs{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,35718);for(let n=0;n<i;++n){const s=e.getActiveUniform(t,n),r=e.getUniformLocation(t,s.name);Jf(s,r,this)}}setValue(e,t,i,n){const s=this.map[t];s!==void 0&&s.setValue(e,i,n)}setOptional(e,t,i){const n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let s=0,r=t.length;s!==r;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,n)}}static seqWithValue(e,t){const i=[];for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.id in t&&i.push(r)}return i}}function Go(o,e,t){const i=o.createShader(e);return o.shaderSource(i,t),o.compileShader(i),i}let Xf=0;function Kf(o,e){const t=o.split(`
`),i=[],n=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let r=n;r<s;r++){const a=r+1;i.push(`${a===e?">":" "} ${a}: ${t[r]}`)}return i.join(`
`)}function jf(o){switch(o){case ti:return["Linear","( value )"];case Se:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",o),["Linear","( value )"]}}function Oo(o,e,t){const i=o.getShaderParameter(e,35713),n=o.getShaderInfoLog(e).trim();if(i&&n==="")return"";const s=/ERROR: 0:(\d+)/.exec(n);if(s){const r=parseInt(s[1]);return t.toUpperCase()+`

`+n+`

`+Kf(o.getShaderSource(e),r)}else return n}function Zf(o,e){const t=jf(e);return"vec4 "+o+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function $f(o,e){let t;switch(e){case ah:t="Linear";break;case oh:t="Reinhard";break;case lh:t="OptimizedCineon";break;case Ul:t="ACESFilmic";break;case ch:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+o+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function ep(o){return[o.extensionDerivatives||o.envMapCubeUVHeight||o.bumpMap||o.tangentSpaceNormalMap||o.clearcoatNormalMap||o.flatShading||o.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(o.extensionFragDepth||o.logarithmicDepthBuffer)&&o.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",o.extensionDrawBuffers&&o.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(o.extensionShaderTextureLOD||o.envMap||o.transmission)&&o.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Zn).join(`
`)}function tp(o){const e=[];for(const t in o){const i=o[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function ip(o,e){const t={},i=o.getProgramParameter(e,35721);for(let n=0;n<i;n++){const s=o.getActiveAttrib(e,n),r=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[r]={type:s.type,location:o.getAttribLocation(e,r),locationSize:a}}return t}function Zn(o){return o!==""}function Ho(o,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return o.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zo(o,e){return o.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const np=/^[ \t]*#include +<([\w\d./]+)>/gm;function Aa(o){return o.replace(np,sp)}function sp(o,e){const t=Ce[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return Aa(t)}const rp=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vo(o){return o.replace(rp,ap)}function ap(o,e,t,i){let n="";for(let s=parseInt(e);s<parseInt(t);s++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return n}function Wo(o){let e="precision "+o.precision+` float;
precision `+o.precision+" int;";return o.precision==="highp"?e+=`
#define HIGH_PRECISION`:o.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:o.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function op(o){let e="SHADOWMAP_TYPE_BASIC";return o.shadowMapType===Pl?e="SHADOWMAP_TYPE_PCF":o.shadowMapType===Fl?e="SHADOWMAP_TYPE_PCF_SOFT":o.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function lp(o){let e="ENVMAP_TYPE_CUBE";if(o.envMap)switch(o.envMapMode){case yn:case wn:e="ENVMAP_TYPE_CUBE";break;case er:e="ENVMAP_TYPE_CUBE_UV";break}return e}function cp(o){let e="ENVMAP_MODE_REFLECTION";if(o.envMap)switch(o.envMapMode){case wn:e="ENVMAP_MODE_REFRACTION";break}return e}function hp(o){let e="ENVMAP_BLENDING_NONE";if(o.envMap)switch(o.combine){case Nl:e="ENVMAP_BLENDING_MULTIPLY";break;case sh:e="ENVMAP_BLENDING_MIX";break;case rh:e="ENVMAP_BLENDING_ADD";break}return e}function up(o){const e=o.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function dp(o,e,t,i){const n=o.getContext(),s=t.defines;let r=t.vertexShader,a=t.fragmentShader;const l=op(t),c=lp(t),h=cp(t),u=hp(t),d=up(t),f=t.isWebGL2?"":ep(t),g=tp(s),p=n.createProgram();let A,m,I=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=[g].filter(Zn).join(`
`),A.length>0&&(A+=`
`),m=[f,g].filter(Zn).join(`
`),m.length>0&&(m+=`
`)):(A=[Wo(t),"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zn).join(`
`),m=[f,Wo(t),"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?Ce.tonemapping_pars_fragment:"",t.toneMapping!==Ei?$f("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ce.encodings_pars_fragment,Zf("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zn).join(`
`)),r=Aa(r),r=Ho(r,t),r=zo(r,t),a=Aa(a),a=Ho(a,t),a=zo(a,t),r=Vo(r),a=Vo(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(I=`#version 300 es
`,A=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,m=["#define varying in",t.glslVersion===po?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===po?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const _=I+A+r,v=I+m+a,E=Go(n,35633,_),b=Go(n,35632,v);if(n.attachShader(p,E),n.attachShader(p,b),t.index0AttributeName!==void 0?n.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&n.bindAttribLocation(p,0,"position"),n.linkProgram(p),o.debug.checkShaderErrors){const w=n.getProgramInfoLog(p).trim(),R=n.getShaderInfoLog(E).trim(),F=n.getShaderInfoLog(b).trim();let O=!0,Q=!0;if(n.getProgramParameter(p,35714)===!1){O=!1;const D=Oo(n,E,"vertex"),G=Oo(n,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(p,35715)+`

Program Info Log: `+w+`
`+D+`
`+G)}else w!==""?console.warn("THREE.WebGLProgram: Program Info Log:",w):(R===""||F==="")&&(Q=!1);Q&&(this.diagnostics={runnable:O,programLog:w,vertexShader:{log:R,prefix:A},fragmentShader:{log:F,prefix:m}})}n.deleteShader(E),n.deleteShader(b);let B;this.getUniforms=function(){return B===void 0&&(B=new qs(n,p)),B};let x;return this.getAttributes=function(){return x===void 0&&(x=ip(n,p)),x},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(p),this.program=void 0},this.name=t.shaderName,this.id=Xf++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=E,this.fragmentShader=b,this}let Ap=0;class fp{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,n=this._getShaderStage(t),s=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(n)===!1&&(r.add(n),n.usedTimes++),r.has(s)===!1&&(r.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pp(e),t.set(e,i)),i}}class pp{constructor(e){this.id=Ap++,this.code=e,this.usedTimes=0}}function gp(o,e,t,i,n,s,r){const a=new jl,l=new fp,c=[],h=n.isWebGL2,u=n.logarithmicDepthBuffer,d=n.vertexTextures;let f=n.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(x,w,R,F,O){const Q=F.fog,D=O.geometry,G=x.isMeshStandardMaterial?F.environment:null,K=(x.isMeshStandardMaterial?t:e).get(x.envMap||G),W=K&&K.mapping===er?K.image.height:null,k=g[x.type];x.precision!==null&&(f=n.getMaxPrecision(x.precision),f!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const j=D.morphAttributes.position||D.morphAttributes.normal||D.morphAttributes.color,Z=j!==void 0?j.length:0;let H=0;D.morphAttributes.position!==void 0&&(H=1),D.morphAttributes.normal!==void 0&&(H=2),D.morphAttributes.color!==void 0&&(H=3);let Y,ee,ie,re;if(k){const Ue=Jt[k];Y=Ue.vertexShader,ee=Ue.fragmentShader}else Y=x.vertexShader,ee=x.fragmentShader,l.update(x),ie=l.getVertexShaderID(x),re=l.getFragmentShaderID(x);const J=o.getRenderTarget(),Be=x.alphaTest>0,de=x.clearcoat>0,_e=x.iridescence>0;return{isWebGL2:h,shaderID:k,shaderName:x.type,vertexShader:Y,fragmentShader:ee,defines:x.defines,customVertexShaderID:ie,customFragmentShaderID:re,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:d,outputEncoding:J===null?o.outputEncoding:J.isXRRenderTarget===!0?J.texture.encoding:ti,map:!!x.map,matcap:!!x.matcap,envMap:!!K,envMapMode:K&&K.mapping,envMapCubeUVHeight:W,lightMap:!!x.lightMap,aoMap:!!x.aoMap,emissiveMap:!!x.emissiveMap,bumpMap:!!x.bumpMap,normalMap:!!x.normalMap,objectSpaceNormalMap:x.normalMapType===Sh,tangentSpaceNormalMap:x.normalMapType===Ca,decodeVideoTexture:!!x.map&&x.map.isVideoTexture===!0&&x.map.encoding===Se,clearcoat:de,clearcoatMap:de&&!!x.clearcoatMap,clearcoatRoughnessMap:de&&!!x.clearcoatRoughnessMap,clearcoatNormalMap:de&&!!x.clearcoatNormalMap,iridescence:_e,iridescenceMap:_e&&!!x.iridescenceMap,iridescenceThicknessMap:_e&&!!x.iridescenceThicknessMap,displacementMap:!!x.displacementMap,roughnessMap:!!x.roughnessMap,metalnessMap:!!x.metalnessMap,specularMap:!!x.specularMap,specularIntensityMap:!!x.specularIntensityMap,specularColorMap:!!x.specularColorMap,opaque:x.transparent===!1&&x.blending===xi,alphaMap:!!x.alphaMap,alphaTest:Be,gradientMap:!!x.gradientMap,sheen:x.sheen>0,sheenColorMap:!!x.sheenColorMap,sheenRoughnessMap:!!x.sheenRoughnessMap,transmission:x.transmission>0,transmissionMap:!!x.transmissionMap,thicknessMap:!!x.thicknessMap,combine:x.combine,vertexTangents:!!x.normalMap&&!!D.attributes.tangent,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!D.attributes.color&&D.attributes.color.itemSize===4,vertexUvs:!!x.map||!!x.bumpMap||!!x.normalMap||!!x.specularMap||!!x.alphaMap||!!x.emissiveMap||!!x.roughnessMap||!!x.metalnessMap||!!x.clearcoatMap||!!x.clearcoatRoughnessMap||!!x.clearcoatNormalMap||!!x.iridescenceMap||!!x.iridescenceThicknessMap||!!x.displacementMap||!!x.transmissionMap||!!x.thicknessMap||!!x.specularIntensityMap||!!x.specularColorMap||!!x.sheenColorMap||!!x.sheenRoughnessMap,uvsVertexOnly:!(x.map||x.bumpMap||x.normalMap||x.specularMap||x.alphaMap||x.emissiveMap||x.roughnessMap||x.metalnessMap||x.clearcoatNormalMap||x.iridescenceMap||x.iridescenceThicknessMap||x.transmission>0||x.transmissionMap||x.thicknessMap||x.specularIntensityMap||x.specularColorMap||x.sheen>0||x.sheenColorMap||x.sheenRoughnessMap)&&!!x.displacementMap,fog:!!Q,useFog:x.fog===!0,fogExp2:Q&&Q.isFogExp2,flatShading:!!x.flatShading,sizeAttenuation:x.sizeAttenuation,logarithmicDepthBuffer:u,skinning:O.isSkinnedMesh===!0,morphTargets:D.morphAttributes.position!==void 0,morphNormals:D.morphAttributes.normal!==void 0,morphColors:D.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:H,numDirLights:w.directional.length,numPointLights:w.point.length,numSpotLights:w.spot.length,numSpotLightMaps:w.spotLightMap.length,numRectAreaLights:w.rectArea.length,numHemiLights:w.hemi.length,numDirLightShadows:w.directionalShadowMap.length,numPointLightShadows:w.pointShadowMap.length,numSpotLightShadows:w.spotShadowMap.length,numSpotLightShadowsWithMaps:w.numSpotLightShadowsWithMaps,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:o.shadowMap.enabled&&R.length>0,shadowMapType:o.shadowMap.type,toneMapping:x.toneMapped?o.toneMapping:Ei,physicallyCorrectLights:o.physicallyCorrectLights,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===$s,flipSided:x.side===Vt,useDepthPacking:!!x.depthPacking,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:x.extensions&&x.extensions.derivatives,extensionFragDepth:x.extensions&&x.extensions.fragDepth,extensionDrawBuffers:x.extensions&&x.extensions.drawBuffers,extensionShaderTextureLOD:x.extensions&&x.extensions.shaderTextureLOD,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function A(x){const w=[];if(x.shaderID?w.push(x.shaderID):(w.push(x.customVertexShaderID),w.push(x.customFragmentShaderID)),x.defines!==void 0)for(const R in x.defines)w.push(R),w.push(x.defines[R]);return x.isRawShaderMaterial===!1&&(m(w,x),I(w,x),w.push(o.outputEncoding)),w.push(x.customProgramCacheKey),w.join()}function m(x,w){x.push(w.precision),x.push(w.outputEncoding),x.push(w.envMapMode),x.push(w.envMapCubeUVHeight),x.push(w.combine),x.push(w.vertexUvs),x.push(w.fogExp2),x.push(w.sizeAttenuation),x.push(w.morphTargetsCount),x.push(w.morphAttributeCount),x.push(w.numDirLights),x.push(w.numPointLights),x.push(w.numSpotLights),x.push(w.numSpotLightMaps),x.push(w.numHemiLights),x.push(w.numRectAreaLights),x.push(w.numDirLightShadows),x.push(w.numPointLightShadows),x.push(w.numSpotLightShadows),x.push(w.numSpotLightShadowsWithMaps),x.push(w.shadowMapType),x.push(w.toneMapping),x.push(w.numClippingPlanes),x.push(w.numClipIntersection),x.push(w.depthPacking)}function I(x,w){a.disableAll(),w.isWebGL2&&a.enable(0),w.supportsVertexTextures&&a.enable(1),w.instancing&&a.enable(2),w.instancingColor&&a.enable(3),w.map&&a.enable(4),w.matcap&&a.enable(5),w.envMap&&a.enable(6),w.lightMap&&a.enable(7),w.aoMap&&a.enable(8),w.emissiveMap&&a.enable(9),w.bumpMap&&a.enable(10),w.normalMap&&a.enable(11),w.objectSpaceNormalMap&&a.enable(12),w.tangentSpaceNormalMap&&a.enable(13),w.clearcoat&&a.enable(14),w.clearcoatMap&&a.enable(15),w.clearcoatRoughnessMap&&a.enable(16),w.clearcoatNormalMap&&a.enable(17),w.iridescence&&a.enable(18),w.iridescenceMap&&a.enable(19),w.iridescenceThicknessMap&&a.enable(20),w.displacementMap&&a.enable(21),w.specularMap&&a.enable(22),w.roughnessMap&&a.enable(23),w.metalnessMap&&a.enable(24),w.gradientMap&&a.enable(25),w.alphaMap&&a.enable(26),w.alphaTest&&a.enable(27),w.vertexColors&&a.enable(28),w.vertexAlphas&&a.enable(29),w.vertexUvs&&a.enable(30),w.vertexTangents&&a.enable(31),w.uvsVertexOnly&&a.enable(32),x.push(a.mask),a.disableAll(),w.fog&&a.enable(0),w.useFog&&a.enable(1),w.flatShading&&a.enable(2),w.logarithmicDepthBuffer&&a.enable(3),w.skinning&&a.enable(4),w.morphTargets&&a.enable(5),w.morphNormals&&a.enable(6),w.morphColors&&a.enable(7),w.premultipliedAlpha&&a.enable(8),w.shadowMapEnabled&&a.enable(9),w.physicallyCorrectLights&&a.enable(10),w.doubleSided&&a.enable(11),w.flipSided&&a.enable(12),w.useDepthPacking&&a.enable(13),w.dithering&&a.enable(14),w.specularIntensityMap&&a.enable(15),w.specularColorMap&&a.enable(16),w.transmission&&a.enable(17),w.transmissionMap&&a.enable(18),w.thicknessMap&&a.enable(19),w.sheen&&a.enable(20),w.sheenColorMap&&a.enable(21),w.sheenRoughnessMap&&a.enable(22),w.decodeVideoTexture&&a.enable(23),w.opaque&&a.enable(24),x.push(a.mask)}function _(x){const w=g[x.type];let R;if(w){const F=Jt[w];R=$t.clone(F.uniforms)}else R=x.uniforms;return R}function v(x,w){let R;for(let F=0,O=c.length;F<O;F++){const Q=c[F];if(Q.cacheKey===w){R=Q,++R.usedTimes;break}}return R===void 0&&(R=new dp(o,w,x,s),c.push(R)),R}function E(x){if(--x.usedTimes===0){const w=c.indexOf(x);c[w]=c[c.length-1],c.pop(),x.destroy()}}function b(x){l.remove(x)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:A,getUniforms:_,acquireProgram:v,releaseProgram:E,releaseShaderCache:b,programs:c,dispose:B}}function mp(){let o=new WeakMap;function e(s){let r=o.get(s);return r===void 0&&(r={},o.set(s,r)),r}function t(s){o.delete(s)}function i(s,r,a){o.get(s)[r]=a}function n(){o=new WeakMap}return{get:e,remove:t,update:i,dispose:n}}function _p(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.material.id!==e.material.id?o.material.id-e.material.id:o.z!==e.z?o.z-e.z:o.id-e.id}function qo(o,e){return o.groupOrder!==e.groupOrder?o.groupOrder-e.groupOrder:o.renderOrder!==e.renderOrder?o.renderOrder-e.renderOrder:o.z!==e.z?e.z-o.z:o.id-e.id}function Yo(){const o=[];let e=0;const t=[],i=[],n=[];function s(){e=0,t.length=0,i.length=0,n.length=0}function r(u,d,f,g,p,A){let m=o[e];return m===void 0?(m={id:u.id,object:u,geometry:d,material:f,groupOrder:g,renderOrder:u.renderOrder,z:p,group:A},o[e]=m):(m.id=u.id,m.object=u,m.geometry=d,m.material=f,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=p,m.group=A),e++,m}function a(u,d,f,g,p,A){const m=r(u,d,f,g,p,A);f.transmission>0?i.push(m):f.transparent===!0?n.push(m):t.push(m)}function l(u,d,f,g,p,A){const m=r(u,d,f,g,p,A);f.transmission>0?i.unshift(m):f.transparent===!0?n.unshift(m):t.unshift(m)}function c(u,d){t.length>1&&t.sort(u||_p),i.length>1&&i.sort(d||qo),n.length>1&&n.sort(d||qo)}function h(){for(let u=e,d=o.length;u<d;u++){const f=o[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:i,transparent:n,init:s,push:a,unshift:l,finish:h,sort:c}}function xp(){let o=new WeakMap;function e(i,n){const s=o.get(i);let r;return s===void 0?(r=new Yo,o.set(i,[r])):n>=s.length?(r=new Yo,s.push(r)):r=s[n],r}function t(){o=new WeakMap}return{get:e,dispose:t}}function Ep(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new T,color:new Ie};break;case"SpotLight":t={position:new T,direction:new T,color:new Ie,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new T,color:new Ie,distance:0,decay:0};break;case"HemisphereLight":t={direction:new T,skyColor:new Ie,groundColor:new Ie};break;case"RectAreaLight":t={color:new Ie,position:new T,halfWidth:new T,halfHeight:new T};break}return o[e.id]=t,t}}}function Ip(){const o={};return{get:function(e){if(o[e.id]!==void 0)return o[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return o[e.id]=t,t}}}let Cp=0;function vp(o,e){return(e.castShadow?2:0)-(o.castShadow?2:0)+(e.map?1:0)-(o.map?1:0)}function yp(o,e){const t=new Ep,i=Ip(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let h=0;h<9;h++)n.probe.push(new T);const s=new T,r=new ve,a=new ve;function l(h,u){let d=0,f=0,g=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let p=0,A=0,m=0,I=0,_=0,v=0,E=0,b=0,B=0,x=0;h.sort(vp);const w=u!==!0?Math.PI:1;for(let F=0,O=h.length;F<O;F++){const Q=h[F],D=Q.color,G=Q.intensity,K=Q.distance,W=Q.shadow&&Q.shadow.map?Q.shadow.map.texture:null;if(Q.isAmbientLight)d+=D.r*G*w,f+=D.g*G*w,g+=D.b*G*w;else if(Q.isLightProbe)for(let k=0;k<9;k++)n.probe[k].addScaledVector(Q.sh.coefficients[k],G);else if(Q.isDirectionalLight){const k=t.get(Q);if(k.color.copy(Q.color).multiplyScalar(Q.intensity*w),Q.castShadow){const j=Q.shadow,Z=i.get(Q);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,n.directionalShadow[p]=Z,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=Q.shadow.matrix,v++}n.directional[p]=k,p++}else if(Q.isSpotLight){const k=t.get(Q);k.position.setFromMatrixPosition(Q.matrixWorld),k.color.copy(D).multiplyScalar(G*w),k.distance=K,k.coneCos=Math.cos(Q.angle),k.penumbraCos=Math.cos(Q.angle*(1-Q.penumbra)),k.decay=Q.decay,n.spot[m]=k;const j=Q.shadow;if(Q.map&&(n.spotLightMap[B]=Q.map,B++,j.updateMatrices(Q),Q.castShadow&&x++),n.spotLightMatrix[m]=j.matrix,Q.castShadow){const Z=i.get(Q);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,n.spotShadow[m]=Z,n.spotShadowMap[m]=W,b++}m++}else if(Q.isRectAreaLight){const k=t.get(Q);k.color.copy(D).multiplyScalar(G),k.halfWidth.set(Q.width*.5,0,0),k.halfHeight.set(0,Q.height*.5,0),n.rectArea[I]=k,I++}else if(Q.isPointLight){const k=t.get(Q);if(k.color.copy(Q.color).multiplyScalar(Q.intensity*w),k.distance=Q.distance,k.decay=Q.decay,Q.castShadow){const j=Q.shadow,Z=i.get(Q);Z.shadowBias=j.bias,Z.shadowNormalBias=j.normalBias,Z.shadowRadius=j.radius,Z.shadowMapSize=j.mapSize,Z.shadowCameraNear=j.camera.near,Z.shadowCameraFar=j.camera.far,n.pointShadow[A]=Z,n.pointShadowMap[A]=W,n.pointShadowMatrix[A]=Q.shadow.matrix,E++}n.point[A]=k,A++}else if(Q.isHemisphereLight){const k=t.get(Q);k.skyColor.copy(Q.color).multiplyScalar(G*w),k.groundColor.copy(Q.groundColor).multiplyScalar(G*w),n.hemi[_]=k,_++}}I>0&&(e.isWebGL2||o.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=se.LTC_FLOAT_1,n.rectAreaLTC2=se.LTC_FLOAT_2):o.has("OES_texture_half_float_linear")===!0?(n.rectAreaLTC1=se.LTC_HALF_1,n.rectAreaLTC2=se.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;const R=n.hash;(R.directionalLength!==p||R.pointLength!==A||R.spotLength!==m||R.rectAreaLength!==I||R.hemiLength!==_||R.numDirectionalShadows!==v||R.numPointShadows!==E||R.numSpotShadows!==b||R.numSpotMaps!==B)&&(n.directional.length=p,n.spot.length=m,n.rectArea.length=I,n.point.length=A,n.hemi.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=E,n.pointShadowMap.length=E,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=E,n.spotLightMatrix.length=b+B-x,n.spotLightMap.length=B,n.numSpotLightShadowsWithMaps=x,R.directionalLength=p,R.pointLength=A,R.spotLength=m,R.rectAreaLength=I,R.hemiLength=_,R.numDirectionalShadows=v,R.numPointShadows=E,R.numSpotShadows=b,R.numSpotMaps=B,n.version=Cp++)}function c(h,u){let d=0,f=0,g=0,p=0,A=0;const m=u.matrixWorldInverse;for(let I=0,_=h.length;I<_;I++){const v=h[I];if(v.isDirectionalLight){const E=n.directional[d];E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),d++}else if(v.isSpotLight){const E=n.spot[g];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),E.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(m),g++}else if(v.isRectAreaLight){const E=n.rectArea[p];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),a.identity(),r.copy(v.matrixWorld),r.premultiply(m),a.extractRotation(r),E.halfWidth.set(v.width*.5,0,0),E.halfHeight.set(0,v.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),p++}else if(v.isPointLight){const E=n.point[f];E.position.setFromMatrixPosition(v.matrixWorld),E.position.applyMatrix4(m),f++}else if(v.isHemisphereLight){const E=n.hemi[A];E.direction.setFromMatrixPosition(v.matrixWorld),E.direction.transformDirection(m),A++}}}return{setup:l,setupView:c,state:n}}function Jo(o,e){const t=new yp(o,e),i=[],n=[];function s(){i.length=0,n.length=0}function r(u){i.push(u)}function a(u){n.push(u)}function l(u){t.setup(i,u)}function c(u){t.setupView(i,u)}return{init:s,state:{lightsArray:i,shadowsArray:n,lights:t},setupLights:l,setupLightsView:c,pushLight:r,pushShadow:a}}function wp(o,e){let t=new WeakMap;function i(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new Jo(o,e),t.set(s,[l])):r>=a.length?(l=new Jo(o,e),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:i,dispose:n}}class Mp extends Kt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class bp extends Kt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new T,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Sp=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Bp=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Tp(o,e,t){let i=new wa;const n=new me,s=new me,r=new Ve,a=new Mp({depthPacking:bh}),l=new bp,c={},h=t.maxTextureSize,u={0:Vt,1:Fi,2:$s},d=new pt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Sp,fragmentShader:Bp}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const g=new Rt;g.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const p=new Dt(g,d),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Pl,this.render=function(v,E,b){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||v.length===0)return;const B=o.getRenderTarget(),x=o.getActiveCubeFace(),w=o.getActiveMipmapLevel(),R=o.state;R.setBlending(tt),R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);for(let F=0,O=v.length;F<O;F++){const Q=v[F],D=Q.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;n.copy(D.mapSize);const G=D.getFrameExtents();if(n.multiply(G),s.copy(D.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(s.x=Math.floor(h/G.x),n.x=s.x*G.x,D.mapSize.x=s.x),n.y>h&&(s.y=Math.floor(h/G.y),n.y=s.y*G.y,D.mapSize.y=s.y)),D.map===null){const W=this.type!==Xn?{minFilter:Ne,magFilter:Ne}:{};D.map=new Tt(n.x,n.y,W),D.map.texture.name=Q.name+".shadowMap",D.camera.updateProjectionMatrix()}o.setRenderTarget(D.map),o.clear();const K=D.getViewportCount();for(let W=0;W<K;W++){const k=D.getViewport(W);r.set(s.x*k.x,s.y*k.y,s.x*k.z,s.y*k.w),R.viewport(r),D.updateMatrices(Q,W),i=D.getFrustum(),_(E,b,D.camera,Q,this.type)}D.isPointLightShadow!==!0&&this.type===Xn&&m(D,b),D.needsUpdate=!1}A.needsUpdate=!1,o.setRenderTarget(B,x,w)};function m(v,E){const b=e.update(p);d.defines.VSM_SAMPLES!==v.blurSamples&&(d.defines.VSM_SAMPLES=v.blurSamples,f.defines.VSM_SAMPLES=v.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new Tt(n.x,n.y)),d.uniforms.shadow_pass.value=v.map.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,o.setRenderTarget(v.mapPass),o.clear(),o.renderBufferDirect(E,null,b,d,p,null),f.uniforms.shadow_pass.value=v.mapPass.texture,f.uniforms.resolution.value=v.mapSize,f.uniforms.radius.value=v.radius,o.setRenderTarget(v.map),o.clear(),o.renderBufferDirect(E,null,b,f,p,null)}function I(v,E,b,B,x,w){let R=null;const F=b.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(F!==void 0)R=F;else if(R=b.isPointLight===!0?l:a,o.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const O=R.uuid,Q=E.uuid;let D=c[O];D===void 0&&(D={},c[O]=D);let G=D[Q];G===void 0&&(G=R.clone(),D[Q]=G),R=G}return R.visible=E.visible,R.wireframe=E.wireframe,w===Xn?R.side=E.shadowSide!==null?E.shadowSide:E.side:R.side=E.shadowSide!==null?E.shadowSide:u[E.side],R.alphaMap=E.alphaMap,R.alphaTest=E.alphaTest,R.map=E.map,R.clipShadows=E.clipShadows,R.clippingPlanes=E.clippingPlanes,R.clipIntersection=E.clipIntersection,R.displacementMap=E.displacementMap,R.displacementScale=E.displacementScale,R.displacementBias=E.displacementBias,R.wireframeLinewidth=E.wireframeLinewidth,R.linewidth=E.linewidth,b.isPointLight===!0&&R.isMeshDistanceMaterial===!0&&(R.referencePosition.setFromMatrixPosition(b.matrixWorld),R.nearDistance=B,R.farDistance=x),R}function _(v,E,b,B,x){if(v.visible===!1)return;if(v.layers.test(E.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&x===Xn)&&(!v.frustumCulled||i.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,v.matrixWorld);const F=e.update(v),O=v.material;if(Array.isArray(O)){const Q=F.groups;for(let D=0,G=Q.length;D<G;D++){const K=Q[D],W=O[K.materialIndex];if(W&&W.visible){const k=I(v,W,B,b.near,b.far,x);o.renderBufferDirect(b,null,F,k,v,K)}}}else if(O.visible){const Q=I(v,O,B,b.near,b.far,x);o.renderBufferDirect(b,null,F,Q,v,null)}}const R=v.children;for(let F=0,O=R.length;F<O;F++)_(R[F],E,b,B,x)}}function Dp(o,e,t){const i=t.isWebGL2;function n(){let L=!1;const V=new Ve;let $=null;const ce=new Ve(0,0,0,0);return{setMask:function(pe){$!==pe&&!L&&(o.colorMask(pe,pe,pe,pe),$=pe)},setLocked:function(pe){L=pe},setClear:function(pe,ke,rt,dt,Gi){Gi===!0&&(pe*=dt,ke*=dt,rt*=dt),V.set(pe,ke,rt,dt),ce.equals(V)===!1&&(o.clearColor(pe,ke,rt,dt),ce.copy(V))},reset:function(){L=!1,$=null,ce.set(-1,0,0,0)}}}function s(){let L=!1,V=null,$=null,ce=null;return{setTest:function(pe){pe?Be(2929):de(2929)},setMask:function(pe){V!==pe&&!L&&(o.depthMask(pe),V=pe)},setFunc:function(pe){if($!==pe){switch(pe){case jc:o.depthFunc(512);break;case Zc:o.depthFunc(519);break;case $c:o.depthFunc(513);break;case ta:o.depthFunc(515);break;case eh:o.depthFunc(514);break;case th:o.depthFunc(518);break;case ih:o.depthFunc(516);break;case nh:o.depthFunc(517);break;default:o.depthFunc(515)}$=pe}},setLocked:function(pe){L=pe},setClear:function(pe){ce!==pe&&(o.clearDepth(pe),ce=pe)},reset:function(){L=!1,V=null,$=null,ce=null}}}function r(){let L=!1,V=null,$=null,ce=null,pe=null,ke=null,rt=null,dt=null,Gi=null;return{setTest:function(We){L||(We?Be(2960):de(2960))},setMask:function(We){V!==We&&!L&&(o.stencilMask(We),V=We)},setFunc:function(We,ni,Ot){($!==We||ce!==ni||pe!==Ot)&&(o.stencilFunc(We,ni,Ot),$=We,ce=ni,pe=Ot)},setOp:function(We,ni,Ot){(ke!==We||rt!==ni||dt!==Ot)&&(o.stencilOp(We,ni,Ot),ke=We,rt=ni,dt=Ot)},setLocked:function(We){L=We},setClear:function(We){Gi!==We&&(o.clearStencil(We),Gi=We)},reset:function(){L=!1,V=null,$=null,ce=null,pe=null,ke=null,rt=null,dt=null,Gi=null}}}const a=new n,l=new s,c=new r,h=new WeakMap,u=new WeakMap;let d={},f={},g=new WeakMap,p=[],A=null,m=!1,I=null,_=null,v=null,E=null,b=null,B=null,x=null,w=!1,R=null,F=null,O=null,Q=null,D=null;const G=o.getParameter(35661);let K=!1,W=0;const k=o.getParameter(7938);k.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(k)[1]),K=W>=1):k.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),K=W>=2);let j=null,Z={};const H=o.getParameter(3088),Y=o.getParameter(2978),ee=new Ve().fromArray(H),ie=new Ve().fromArray(Y);function re(L,V,$){const ce=new Uint8Array(4),pe=o.createTexture();o.bindTexture(L,pe),o.texParameteri(L,10241,9728),o.texParameteri(L,10240,9728);for(let ke=0;ke<$;ke++)o.texImage2D(V+ke,0,6408,1,1,0,6408,5121,ce);return pe}const J={};J[3553]=re(3553,3553,1),J[34067]=re(34067,34069,6),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Be(2929),l.setFunc(ta),$e(!1),gt(Ya),Be(2884),st(tt);function Be(L){d[L]!==!0&&(o.enable(L),d[L]=!0)}function de(L){d[L]!==!1&&(o.disable(L),d[L]=!1)}function _e(L,V){return f[L]!==V?(o.bindFramebuffer(L,V),f[L]=V,i&&(L===36009&&(f[36160]=V),L===36160&&(f[36009]=V)),!0):!1}function ue(L,V){let $=p,ce=!1;if(L)if($=g.get(V),$===void 0&&($=[],g.set(V,$)),L.isWebGLMultipleRenderTargets){const pe=L.texture;if($.length!==pe.length||$[0]!==36064){for(let ke=0,rt=pe.length;ke<rt;ke++)$[ke]=36064+ke;$.length=pe.length,ce=!0}}else $[0]!==36064&&($[0]=36064,ce=!0);else $[0]!==1029&&($[0]=1029,ce=!0);ce&&(t.isWebGL2?o.drawBuffers($):e.get("WEBGL_draw_buffers").drawBuffersWEBGL($))}function Ue(L){return A!==L?(o.useProgram(L),A=L,!0):!1}const we={[Ri]:32774,[Gc]:32778,[Oc]:32779};if(i)we[ja]=32775,we[Za]=32776;else{const L=e.get("EXT_blend_minmax");L!==null&&(we[ja]=L.MIN_EXT,we[Za]=L.MAX_EXT)}const xe={[Hc]:0,[zc]:1,[Vc]:768,[Js]:770,[Kc]:776,[Jc]:774,[qc]:772,[Wc]:769,[Xs]:771,[Xc]:775,[Yc]:773};function st(L,V,$,ce,pe,ke,rt,dt){if(L===tt){m===!0&&(de(3042),m=!1);return}if(m===!1&&(Be(3042),m=!0),L!==kc){if(L!==I||dt!==w){if((_!==Ri||b!==Ri)&&(o.blendEquation(32774),_=Ri,b=Ri),dt)switch(L){case xi:o.blendFuncSeparate(1,771,1,771);break;case Ja:o.blendFunc(1,1);break;case Xa:o.blendFuncSeparate(0,769,0,1);break;case Ka:o.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case xi:o.blendFuncSeparate(770,771,1,771);break;case Ja:o.blendFunc(770,1);break;case Xa:o.blendFuncSeparate(0,769,0,1);break;case Ka:o.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}v=null,E=null,B=null,x=null,I=L,w=dt}return}pe=pe||V,ke=ke||$,rt=rt||ce,(V!==_||pe!==b)&&(o.blendEquationSeparate(we[V],we[pe]),_=V,b=pe),($!==v||ce!==E||ke!==B||rt!==x)&&(o.blendFuncSeparate(xe[$],xe[ce],xe[ke],xe[rt]),v=$,E=ce,B=ke,x=rt),I=L,w=!1}function Ze(L,V){L.side===$s?de(2884):Be(2884);let $=L.side===Vt;V&&($=!$),$e($),L.blending===xi&&L.transparent===!1?st(tt):st(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),a.setMask(L.colorWrite);const ce=L.stencilWrite;c.setTest(ce),ce&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Oe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Be(32926):de(32926)}function $e(L){R!==L&&(L?o.frontFace(2304):o.frontFace(2305),R=L)}function gt(L){L!==Nc?(Be(2884),L!==F&&(L===Ya?o.cullFace(1029):L===Uc?o.cullFace(1028):o.cullFace(1032))):de(2884),F=L}function Ye(L){L!==O&&(K&&o.lineWidth(L),O=L)}function Oe(L,V,$){L?(Be(32823),(Q!==V||D!==$)&&(o.polygonOffset(V,$),Q=V,D=$)):de(32823)}function Gt(L){L?Be(3089):de(3089)}function bt(L){L===void 0&&(L=33984+G-1),j!==L&&(o.activeTexture(L),j=L)}function M(L,V,$){$===void 0&&(j===null?$=33984+G-1:$=j);let ce=Z[$];ce===void 0&&(ce={type:void 0,texture:void 0},Z[$]=ce),(ce.type!==L||ce.texture!==V)&&(j!==$&&(o.activeTexture($),j=$),o.bindTexture(L,V||J[L]),ce.type=L,ce.texture=V)}function C(){const L=Z[j];L!==void 0&&L.type!==void 0&&(o.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function z(){try{o.compressedTexImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{o.compressedTexImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ne(){try{o.texSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{o.texSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ee(){try{o.compressedTexSubImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function S(){try{o.compressedTexSubImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{o.texStorage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function le(){try{o.texStorage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function he(){try{o.texImage2D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function oe(){try{o.texImage3D.apply(o,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(L){ee.equals(L)===!1&&(o.scissor(L.x,L.y,L.z,L.w),ee.copy(L))}function Ae(L){ie.equals(L)===!1&&(o.viewport(L.x,L.y,L.z,L.w),ie.copy(L))}function Te(L,V){let $=u.get(V);$===void 0&&($=new WeakMap,u.set(V,$));let ce=$.get(L);ce===void 0&&(ce=o.getUniformBlockIndex(V,L.name),$.set(L,ce))}function De(L,V){const ce=u.get(V).get(L);h.get(V)!==ce&&(o.uniformBlockBinding(V,ce,L.__bindingPointIndex),h.set(V,ce))}function He(){o.disable(3042),o.disable(2884),o.disable(2929),o.disable(32823),o.disable(3089),o.disable(2960),o.disable(32926),o.blendEquation(32774),o.blendFunc(1,0),o.blendFuncSeparate(1,0,1,0),o.colorMask(!0,!0,!0,!0),o.clearColor(0,0,0,0),o.depthMask(!0),o.depthFunc(513),o.clearDepth(1),o.stencilMask(4294967295),o.stencilFunc(519,0,4294967295),o.stencilOp(7680,7680,7680),o.clearStencil(0),o.cullFace(1029),o.frontFace(2305),o.polygonOffset(0,0),o.activeTexture(33984),o.bindFramebuffer(36160,null),i===!0&&(o.bindFramebuffer(36009,null),o.bindFramebuffer(36008,null)),o.useProgram(null),o.lineWidth(1),o.scissor(0,0,o.canvas.width,o.canvas.height),o.viewport(0,0,o.canvas.width,o.canvas.height),d={},j=null,Z={},f={},g=new WeakMap,p=[],A=null,m=!1,I=null,_=null,v=null,E=null,b=null,B=null,x=null,w=!1,R=null,F=null,O=null,Q=null,D=null,ee.set(0,0,o.canvas.width,o.canvas.height),ie.set(0,0,o.canvas.width,o.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:Be,disable:de,bindFramebuffer:_e,drawBuffers:ue,useProgram:Ue,setBlending:st,setMaterial:Ze,setFlipSided:$e,setCullFace:gt,setLineWidth:Ye,setPolygonOffset:Oe,setScissorTest:Gt,activeTexture:bt,bindTexture:M,unbindTexture:C,compressedTexImage2D:z,compressedTexImage3D:te,texImage2D:he,texImage3D:oe,updateUBOMapping:Te,uniformBlockBinding:De,texStorage2D:P,texStorage3D:le,texSubImage2D:ne,texSubImage3D:ae,compressedTexSubImage2D:Ee,compressedTexSubImage3D:S,scissor:fe,viewport:Ae,reset:He}}function Rp(o,e,t,i,n,s,r){const a=n.isWebGL2,l=n.maxTextures,c=n.maxCubemapSize,h=n.maxTextureSize,u=n.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,f=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let p;const A=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function I(M,C){return m?new OffscreenCanvas(M,C):as("canvas")}function _(M,C,z,te){let ne=1;if((M.width>te||M.height>te)&&(ne=te/Math.max(M.width,M.height)),ne<1||C===!0)if(typeof HTMLImageElement<"u"&&M instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&M instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&M instanceof ImageBitmap){const ae=C?Zs:Math.floor,Ee=ae(ne*M.width),S=ae(ne*M.height);p===void 0&&(p=I(Ee,S));const P=z?I(Ee,S):p;return P.width=Ee,P.height=S,P.getContext("2d").drawImage(M,0,0,Ee,S),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+M.width+"x"+M.height+") to ("+Ee+"x"+S+")."),P}else return"data"in M&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+M.width+"x"+M.height+")."),M;return M}function v(M){return da(M.width)&&da(M.height)}function E(M){return a?!1:M.wrapS!==vt||M.wrapT!==vt||M.minFilter!==Ne&&M.minFilter!==Je}function b(M,C){return M.generateMipmaps&&C&&M.minFilter!==Ne&&M.minFilter!==Je}function B(M){o.generateMipmap(M)}function x(M,C,z,te,ne=!1){if(a===!1)return C;if(M!==null){if(o[M]!==void 0)return o[M];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+M+"'")}let ae=C;return C===6403&&(z===5126&&(ae=33326),z===5131&&(ae=33325),z===5121&&(ae=33321)),C===33319&&(z===5126&&(ae=33328),z===5131&&(ae=33327),z===5121&&(ae=33323)),C===6408&&(z===5126&&(ae=34836),z===5131&&(ae=34842),z===5121&&(ae=te===Se&&ne===!1?35907:32856),z===32819&&(ae=32854),z===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function w(M,C,z){return b(M,z)===!0||M.isFramebufferTexture&&M.minFilter!==Ne&&M.minFilter!==Je?Math.log2(Math.max(C.width,C.height))+1:M.mipmaps!==void 0&&M.mipmaps.length>0?M.mipmaps.length:M.isCompressedTexture&&Array.isArray(M.image)?C.mipmaps.length:1}function R(M){return M===Ne||M===na||M===Hs?9728:9729}function F(M){const C=M.target;C.removeEventListener("dispose",F),Q(C),C.isVideoTexture&&g.delete(C)}function O(M){const C=M.target;C.removeEventListener("dispose",O),G(C)}function Q(M){const C=i.get(M);if(C.__webglInit===void 0)return;const z=M.source,te=A.get(z);if(te){const ne=te[C.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&D(M),Object.keys(te).length===0&&A.delete(z)}i.remove(M)}function D(M){const C=i.get(M);o.deleteTexture(C.__webglTexture);const z=M.source,te=A.get(z);delete te[C.__cacheKey],r.memory.textures--}function G(M){const C=M.texture,z=i.get(M),te=i.get(C);if(te.__webglTexture!==void 0&&(o.deleteTexture(te.__webglTexture),r.memory.textures--),M.depthTexture&&M.depthTexture.dispose(),M.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)o.deleteFramebuffer(z.__webglFramebuffer[ne]),z.__webglDepthbuffer&&o.deleteRenderbuffer(z.__webglDepthbuffer[ne]);else{if(o.deleteFramebuffer(z.__webglFramebuffer),z.__webglDepthbuffer&&o.deleteRenderbuffer(z.__webglDepthbuffer),z.__webglMultisampledFramebuffer&&o.deleteFramebuffer(z.__webglMultisampledFramebuffer),z.__webglColorRenderbuffer)for(let ne=0;ne<z.__webglColorRenderbuffer.length;ne++)z.__webglColorRenderbuffer[ne]&&o.deleteRenderbuffer(z.__webglColorRenderbuffer[ne]);z.__webglDepthRenderbuffer&&o.deleteRenderbuffer(z.__webglDepthRenderbuffer)}if(M.isWebGLMultipleRenderTargets)for(let ne=0,ae=C.length;ne<ae;ne++){const Ee=i.get(C[ne]);Ee.__webglTexture&&(o.deleteTexture(Ee.__webglTexture),r.memory.textures--),i.remove(C[ne])}i.remove(C),i.remove(M)}let K=0;function W(){K=0}function k(){const M=K;return M>=l&&console.warn("THREE.WebGLTextures: Trying to use "+M+" texture units while this GPU supports only "+l),K+=1,M}function j(M){const C=[];return C.push(M.wrapS),C.push(M.wrapT),C.push(M.wrapR||0),C.push(M.magFilter),C.push(M.minFilter),C.push(M.anisotropy),C.push(M.internalFormat),C.push(M.format),C.push(M.type),C.push(M.generateMipmaps),C.push(M.premultiplyAlpha),C.push(M.flipY),C.push(M.unpackAlignment),C.push(M.encoding),C.join()}function Z(M,C){const z=i.get(M);if(M.isVideoTexture&&Gt(M),M.isRenderTargetTexture===!1&&M.version>0&&z.__version!==M.version){const te=M.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{de(z,M,C);return}}t.bindTexture(3553,z.__webglTexture,33984+C)}function H(M,C){const z=i.get(M);if(M.version>0&&z.__version!==M.version){de(z,M,C);return}t.bindTexture(35866,z.__webglTexture,33984+C)}function Y(M,C){const z=i.get(M);if(M.version>0&&z.__version!==M.version){de(z,M,C);return}t.bindTexture(32879,z.__webglTexture,33984+C)}function ee(M,C){const z=i.get(M);if(M.version>0&&z.__version!==M.version){_e(z,M,C);return}t.bindTexture(34067,z.__webglTexture,33984+C)}const ie={[Ni]:10497,[vt]:33071,[Ks]:33648},re={[Ne]:9728,[na]:9984,[Hs]:9986,[Je]:9729,[Gl]:9985,[Ci]:9987};function J(M,C,z){if(z?(o.texParameteri(M,10242,ie[C.wrapS]),o.texParameteri(M,10243,ie[C.wrapT]),(M===32879||M===35866)&&o.texParameteri(M,32882,ie[C.wrapR]),o.texParameteri(M,10240,re[C.magFilter]),o.texParameteri(M,10241,re[C.minFilter])):(o.texParameteri(M,10242,33071),o.texParameteri(M,10243,33071),(M===32879||M===35866)&&o.texParameteri(M,32882,33071),(C.wrapS!==vt||C.wrapT!==vt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),o.texParameteri(M,10240,R(C.magFilter)),o.texParameteri(M,10241,R(C.minFilter)),C.minFilter!==Ne&&C.minFilter!==Je&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const te=e.get("EXT_texture_filter_anisotropic");if(C.magFilter===Ne||C.minFilter!==Hs&&C.minFilter!==Ci||C.type===yt&&e.has("OES_texture_float_linear")===!1||a===!1&&C.type===wt&&e.has("OES_texture_half_float_linear")===!1)return;(C.anisotropy>1||i.get(C).__currentAnisotropy)&&(o.texParameterf(M,te.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,n.getMaxAnisotropy())),i.get(C).__currentAnisotropy=C.anisotropy)}}function Be(M,C){let z=!1;M.__webglInit===void 0&&(M.__webglInit=!0,C.addEventListener("dispose",F));const te=C.source;let ne=A.get(te);ne===void 0&&(ne={},A.set(te,ne));const ae=j(C);if(ae!==M.__cacheKey){ne[ae]===void 0&&(ne[ae]={texture:o.createTexture(),usedTimes:0},r.memory.textures++,z=!0),ne[ae].usedTimes++;const Ee=ne[M.__cacheKey];Ee!==void 0&&(ne[M.__cacheKey].usedTimes--,Ee.usedTimes===0&&D(C)),M.__cacheKey=ae,M.__webglTexture=ne[ae].texture}return z}function de(M,C,z){let te=3553;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(te=35866),C.isData3DTexture&&(te=32879);const ne=Be(M,C),ae=C.source;t.bindTexture(te,M.__webglTexture,33984+z);const Ee=i.get(ae);if(ae.version!==Ee.__version||ne===!0){t.activeTexture(33984+z),o.pixelStorei(37440,C.flipY),o.pixelStorei(37441,C.premultiplyAlpha),o.pixelStorei(3317,C.unpackAlignment),o.pixelStorei(37443,0);const S=E(C)&&v(C.image)===!1;let P=_(C.image,S,!1,h);P=bt(C,P);const le=v(P)||a,he=s.convert(C.format,C.encoding);let oe=s.convert(C.type),fe=x(C.internalFormat,he,oe,C.encoding,C.isVideoTexture);J(te,C,le);let Ae;const Te=C.mipmaps,De=a&&C.isVideoTexture!==!0,He=Ee.__version===void 0||ne===!0,L=w(C,P,le);if(C.isDepthTexture)fe=6402,a?C.type===yt?fe=36012:C.type===Ki?fe=33190:C.type===Cn?fe=35056:fe=33189:C.type===yt&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),C.format===ji&&fe===6402&&C.type!==tr&&C.type!==Ki&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),C.type=Ki,oe=s.convert(C.type)),C.format===Mn&&fe===6402&&(fe=34041,C.type!==Cn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),C.type=Cn,oe=s.convert(C.type))),He&&(De?t.texStorage2D(3553,1,fe,P.width,P.height):t.texImage2D(3553,0,fe,P.width,P.height,0,he,oe,null));else if(C.isDataTexture)if(Te.length>0&&le){De&&He&&t.texStorage2D(3553,L,fe,Te[0].width,Te[0].height);for(let V=0,$=Te.length;V<$;V++)Ae=Te[V],De?t.texSubImage2D(3553,V,0,0,Ae.width,Ae.height,he,oe,Ae.data):t.texImage2D(3553,V,fe,Ae.width,Ae.height,0,he,oe,Ae.data);C.generateMipmaps=!1}else De?(He&&t.texStorage2D(3553,L,fe,P.width,P.height),t.texSubImage2D(3553,0,0,0,P.width,P.height,he,oe,P.data)):t.texImage2D(3553,0,fe,P.width,P.height,0,he,oe,P.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){De&&He&&t.texStorage3D(35866,L,fe,Te[0].width,Te[0].height,P.depth);for(let V=0,$=Te.length;V<$;V++)Ae=Te[V],C.format!==ht?he!==null?De?t.compressedTexSubImage3D(35866,V,0,0,0,Ae.width,Ae.height,P.depth,he,Ae.data,0,0):t.compressedTexImage3D(35866,V,fe,Ae.width,Ae.height,P.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage3D(35866,V,0,0,0,Ae.width,Ae.height,P.depth,he,oe,Ae.data):t.texImage3D(35866,V,fe,Ae.width,Ae.height,P.depth,0,he,oe,Ae.data)}else{De&&He&&t.texStorage2D(3553,L,fe,Te[0].width,Te[0].height);for(let V=0,$=Te.length;V<$;V++)Ae=Te[V],C.format!==ht?he!==null?De?t.compressedTexSubImage2D(3553,V,0,0,Ae.width,Ae.height,he,Ae.data):t.compressedTexImage2D(3553,V,fe,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):De?t.texSubImage2D(3553,V,0,0,Ae.width,Ae.height,he,oe,Ae.data):t.texImage2D(3553,V,fe,Ae.width,Ae.height,0,he,oe,Ae.data)}else if(C.isDataArrayTexture)De?(He&&t.texStorage3D(35866,L,fe,P.width,P.height,P.depth),t.texSubImage3D(35866,0,0,0,0,P.width,P.height,P.depth,he,oe,P.data)):t.texImage3D(35866,0,fe,P.width,P.height,P.depth,0,he,oe,P.data);else if(C.isData3DTexture)De?(He&&t.texStorage3D(32879,L,fe,P.width,P.height,P.depth),t.texSubImage3D(32879,0,0,0,0,P.width,P.height,P.depth,he,oe,P.data)):t.texImage3D(32879,0,fe,P.width,P.height,P.depth,0,he,oe,P.data);else if(C.isFramebufferTexture){if(He)if(De)t.texStorage2D(3553,L,fe,P.width,P.height);else{let V=P.width,$=P.height;for(let ce=0;ce<L;ce++)t.texImage2D(3553,ce,fe,V,$,0,he,oe,null),V>>=1,$>>=1}}else if(Te.length>0&&le){De&&He&&t.texStorage2D(3553,L,fe,Te[0].width,Te[0].height);for(let V=0,$=Te.length;V<$;V++)Ae=Te[V],De?t.texSubImage2D(3553,V,0,0,he,oe,Ae):t.texImage2D(3553,V,fe,he,oe,Ae);C.generateMipmaps=!1}else De?(He&&t.texStorage2D(3553,L,fe,P.width,P.height),t.texSubImage2D(3553,0,0,0,he,oe,P)):t.texImage2D(3553,0,fe,he,oe,P);b(C,le)&&B(te),Ee.__version=ae.version,C.onUpdate&&C.onUpdate(C)}M.__version=C.version}function _e(M,C,z){if(C.image.length!==6)return;const te=Be(M,C),ne=C.source;t.bindTexture(34067,M.__webglTexture,33984+z);const ae=i.get(ne);if(ne.version!==ae.__version||te===!0){t.activeTexture(33984+z),o.pixelStorei(37440,C.flipY),o.pixelStorei(37441,C.premultiplyAlpha),o.pixelStorei(3317,C.unpackAlignment),o.pixelStorei(37443,0);const Ee=C.isCompressedTexture||C.image[0].isCompressedTexture,S=C.image[0]&&C.image[0].isDataTexture,P=[];for(let V=0;V<6;V++)!Ee&&!S?P[V]=_(C.image[V],!1,!0,c):P[V]=S?C.image[V].image:C.image[V],P[V]=bt(C,P[V]);const le=P[0],he=v(le)||a,oe=s.convert(C.format,C.encoding),fe=s.convert(C.type),Ae=x(C.internalFormat,oe,fe,C.encoding),Te=a&&C.isVideoTexture!==!0,De=ae.__version===void 0||te===!0;let He=w(C,le,he);J(34067,C,he);let L;if(Ee){Te&&De&&t.texStorage2D(34067,He,Ae,le.width,le.height);for(let V=0;V<6;V++){L=P[V].mipmaps;for(let $=0;$<L.length;$++){const ce=L[$];C.format!==ht?oe!==null?Te?t.compressedTexSubImage2D(34069+V,$,0,0,ce.width,ce.height,oe,ce.data):t.compressedTexImage2D(34069+V,$,Ae,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Te?t.texSubImage2D(34069+V,$,0,0,ce.width,ce.height,oe,fe,ce.data):t.texImage2D(34069+V,$,Ae,ce.width,ce.height,0,oe,fe,ce.data)}}}else{L=C.mipmaps,Te&&De&&(L.length>0&&He++,t.texStorage2D(34067,He,Ae,P[0].width,P[0].height));for(let V=0;V<6;V++)if(S){Te?t.texSubImage2D(34069+V,0,0,0,P[V].width,P[V].height,oe,fe,P[V].data):t.texImage2D(34069+V,0,Ae,P[V].width,P[V].height,0,oe,fe,P[V].data);for(let $=0;$<L.length;$++){const pe=L[$].image[V].image;Te?t.texSubImage2D(34069+V,$+1,0,0,pe.width,pe.height,oe,fe,pe.data):t.texImage2D(34069+V,$+1,Ae,pe.width,pe.height,0,oe,fe,pe.data)}}else{Te?t.texSubImage2D(34069+V,0,0,0,oe,fe,P[V]):t.texImage2D(34069+V,0,Ae,oe,fe,P[V]);for(let $=0;$<L.length;$++){const ce=L[$];Te?t.texSubImage2D(34069+V,$+1,0,0,oe,fe,ce.image[V]):t.texImage2D(34069+V,$+1,Ae,oe,fe,ce.image[V])}}}b(C,he)&&B(34067),ae.__version=ne.version,C.onUpdate&&C.onUpdate(C)}M.__version=C.version}function ue(M,C,z,te,ne){const ae=s.convert(z.format,z.encoding),Ee=s.convert(z.type),S=x(z.internalFormat,ae,Ee,z.encoding);i.get(C).__hasExternalTextures||(ne===32879||ne===35866?t.texImage3D(ne,0,S,C.width,C.height,C.depth,0,ae,Ee,null):t.texImage2D(ne,0,S,C.width,C.height,0,ae,Ee,null)),t.bindFramebuffer(36160,M),Oe(C)?d.framebufferTexture2DMultisampleEXT(36160,te,ne,i.get(z).__webglTexture,0,Ye(C)):(ne===3553||ne>=34069&&ne<=34074)&&o.framebufferTexture2D(36160,te,ne,i.get(z).__webglTexture,0),t.bindFramebuffer(36160,null)}function Ue(M,C,z){if(o.bindRenderbuffer(36161,M),C.depthBuffer&&!C.stencilBuffer){let te=33189;if(z||Oe(C)){const ne=C.depthTexture;ne&&ne.isDepthTexture&&(ne.type===yt?te=36012:ne.type===Ki&&(te=33190));const ae=Ye(C);Oe(C)?d.renderbufferStorageMultisampleEXT(36161,ae,te,C.width,C.height):o.renderbufferStorageMultisample(36161,ae,te,C.width,C.height)}else o.renderbufferStorage(36161,te,C.width,C.height);o.framebufferRenderbuffer(36160,36096,36161,M)}else if(C.depthBuffer&&C.stencilBuffer){const te=Ye(C);z&&Oe(C)===!1?o.renderbufferStorageMultisample(36161,te,35056,C.width,C.height):Oe(C)?d.renderbufferStorageMultisampleEXT(36161,te,35056,C.width,C.height):o.renderbufferStorage(36161,34041,C.width,C.height),o.framebufferRenderbuffer(36160,33306,36161,M)}else{const te=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let ne=0;ne<te.length;ne++){const ae=te[ne],Ee=s.convert(ae.format,ae.encoding),S=s.convert(ae.type),P=x(ae.internalFormat,Ee,S,ae.encoding),le=Ye(C);z&&Oe(C)===!1?o.renderbufferStorageMultisample(36161,le,P,C.width,C.height):Oe(C)?d.renderbufferStorageMultisampleEXT(36161,le,P,C.width,C.height):o.renderbufferStorage(36161,P,C.width,C.height)}}o.bindRenderbuffer(36161,null)}function we(M,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,M),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(C.depthTexture).__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),Z(C.depthTexture,0);const te=i.get(C.depthTexture).__webglTexture,ne=Ye(C);if(C.depthTexture.format===ji)Oe(C)?d.framebufferTexture2DMultisampleEXT(36160,36096,3553,te,0,ne):o.framebufferTexture2D(36160,36096,3553,te,0);else if(C.depthTexture.format===Mn)Oe(C)?d.framebufferTexture2DMultisampleEXT(36160,33306,3553,te,0,ne):o.framebufferTexture2D(36160,33306,3553,te,0);else throw new Error("Unknown depthTexture format")}function xe(M){const C=i.get(M),z=M.isWebGLCubeRenderTarget===!0;if(M.depthTexture&&!C.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");we(C.__webglFramebuffer,M)}else if(z){C.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(36160,C.__webglFramebuffer[te]),C.__webglDepthbuffer[te]=o.createRenderbuffer(),Ue(C.__webglDepthbuffer[te],M,!1)}else t.bindFramebuffer(36160,C.__webglFramebuffer),C.__webglDepthbuffer=o.createRenderbuffer(),Ue(C.__webglDepthbuffer,M,!1);t.bindFramebuffer(36160,null)}function st(M,C,z){const te=i.get(M);C!==void 0&&ue(te.__webglFramebuffer,M,M.texture,36064,3553),z!==void 0&&xe(M)}function Ze(M){const C=M.texture,z=i.get(M),te=i.get(C);M.addEventListener("dispose",O),M.isWebGLMultipleRenderTargets!==!0&&(te.__webglTexture===void 0&&(te.__webglTexture=o.createTexture()),te.__version=C.version,r.memory.textures++);const ne=M.isWebGLCubeRenderTarget===!0,ae=M.isWebGLMultipleRenderTargets===!0,Ee=v(M)||a;if(ne){z.__webglFramebuffer=[];for(let S=0;S<6;S++)z.__webglFramebuffer[S]=o.createFramebuffer()}else{if(z.__webglFramebuffer=o.createFramebuffer(),ae)if(n.drawBuffers){const S=M.texture;for(let P=0,le=S.length;P<le;P++){const he=i.get(S[P]);he.__webglTexture===void 0&&(he.__webglTexture=o.createTexture(),r.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&M.samples>0&&Oe(M)===!1){const S=ae?C:[C];z.__webglMultisampledFramebuffer=o.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,z.__webglMultisampledFramebuffer);for(let P=0;P<S.length;P++){const le=S[P];z.__webglColorRenderbuffer[P]=o.createRenderbuffer(),o.bindRenderbuffer(36161,z.__webglColorRenderbuffer[P]);const he=s.convert(le.format,le.encoding),oe=s.convert(le.type),fe=x(le.internalFormat,he,oe,le.encoding,M.isXRRenderTarget===!0),Ae=Ye(M);o.renderbufferStorageMultisample(36161,Ae,fe,M.width,M.height),o.framebufferRenderbuffer(36160,36064+P,36161,z.__webglColorRenderbuffer[P])}o.bindRenderbuffer(36161,null),M.depthBuffer&&(z.__webglDepthRenderbuffer=o.createRenderbuffer(),Ue(z.__webglDepthRenderbuffer,M,!0)),t.bindFramebuffer(36160,null)}}if(ne){t.bindTexture(34067,te.__webglTexture),J(34067,C,Ee);for(let S=0;S<6;S++)ue(z.__webglFramebuffer[S],M,C,36064,34069+S);b(C,Ee)&&B(34067),t.unbindTexture()}else if(ae){const S=M.texture;for(let P=0,le=S.length;P<le;P++){const he=S[P],oe=i.get(he);t.bindTexture(3553,oe.__webglTexture),J(3553,he,Ee),ue(z.__webglFramebuffer,M,he,36064+P,3553),b(he,Ee)&&B(3553)}t.unbindTexture()}else{let S=3553;(M.isWebGL3DRenderTarget||M.isWebGLArrayRenderTarget)&&(a?S=M.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(S,te.__webglTexture),J(S,C,Ee),ue(z.__webglFramebuffer,M,C,36064,S),b(C,Ee)&&B(S),t.unbindTexture()}M.depthBuffer&&xe(M)}function $e(M){const C=v(M)||a,z=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0,ne=z.length;te<ne;te++){const ae=z[te];if(b(ae,C)){const Ee=M.isWebGLCubeRenderTarget?34067:3553,S=i.get(ae).__webglTexture;t.bindTexture(Ee,S),B(Ee),t.unbindTexture()}}}function gt(M){if(a&&M.samples>0&&Oe(M)===!1){const C=M.isWebGLMultipleRenderTargets?M.texture:[M.texture],z=M.width,te=M.height;let ne=16384;const ae=[],Ee=M.stencilBuffer?33306:36096,S=i.get(M),P=M.isWebGLMultipleRenderTargets===!0;if(P)for(let le=0;le<C.length;le++)t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,null),t.bindFramebuffer(36160,S.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,null,0);t.bindFramebuffer(36008,S.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,S.__webglFramebuffer);for(let le=0;le<C.length;le++){ae.push(36064+le),M.depthBuffer&&ae.push(Ee);const he=S.__ignoreDepthValues!==void 0?S.__ignoreDepthValues:!1;if(he===!1&&(M.depthBuffer&&(ne|=256),M.stencilBuffer&&(ne|=1024)),P&&o.framebufferRenderbuffer(36008,36064,36161,S.__webglColorRenderbuffer[le]),he===!0&&(o.invalidateFramebuffer(36008,[Ee]),o.invalidateFramebuffer(36009,[Ee])),P){const oe=i.get(C[le]).__webglTexture;o.framebufferTexture2D(36009,36064,3553,oe,0)}o.blitFramebuffer(0,0,z,te,0,0,z,te,ne,9728),f&&o.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),P)for(let le=0;le<C.length;le++){t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer),o.framebufferRenderbuffer(36160,36064+le,36161,S.__webglColorRenderbuffer[le]);const he=i.get(C[le]).__webglTexture;t.bindFramebuffer(36160,S.__webglFramebuffer),o.framebufferTexture2D(36009,36064+le,3553,he,0)}t.bindFramebuffer(36009,S.__webglMultisampledFramebuffer)}}function Ye(M){return Math.min(u,M.samples)}function Oe(M){const C=i.get(M);return a&&M.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function Gt(M){const C=r.render.frame;g.get(M)!==C&&(g.set(M,C),M.update())}function bt(M,C){const z=M.encoding,te=M.format,ne=M.type;return M.isCompressedTexture===!0||M.isVideoTexture===!0||M.format===ua||z!==ti&&(z===Se?a===!1?e.has("EXT_sRGB")===!0&&te===ht?(M.format=ua,M.minFilter=Je,M.generateMipmaps=!1):C=Yl.sRGBToLinear(C):(te!==ht||ne!==Ct)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",z)),C}this.allocateTextureUnit=k,this.resetTextureUnits=W,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=Y,this.setTextureCube=ee,this.rebindTextures=st,this.setupRenderTarget=Ze,this.updateRenderTargetMipmap=$e,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=xe,this.setupFrameBufferTexture=ue,this.useMultisampledRTT=Oe}function Lp(o,e,t){const i=t.isWebGL2;function n(s,r=null){let a;if(s===Ct)return 5121;if(s===Ah)return 32819;if(s===fh)return 32820;if(s===hh)return 5120;if(s===uh)return 5122;if(s===tr)return 5123;if(s===dh)return 5124;if(s===Ki)return 5125;if(s===yt)return 5126;if(s===wt)return i?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===ph)return 6406;if(s===ht)return 6408;if(s===mh)return 6409;if(s===_h)return 6410;if(s===ji)return 6402;if(s===Mn)return 34041;if(s===gh)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ua)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===Kn)return 6403;if(s===xh)return 36244;if(s===jn)return 33319;if(s===Eh)return 33320;if(s===Ih)return 36249;if(s===zs||s===hr||s===ur||s===Vs)if(r===Se)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===zs)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ur)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Vs)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===zs)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===hr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ur)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Vs)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===sa||s===$a||s===ra||s===eo)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===sa)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===$a)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===ra)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===eo)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===Ol)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===aa||s===oa)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===aa)return r===Se?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===oa)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===la||s===to||s===io||s===no||s===so||s===ro||s===ao||s===oo||s===lo||s===co||s===ho||s===uo||s===Ao||s===fo)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===la)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===to)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===io)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===no)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===so)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===ro)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===ao)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===oo)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===lo)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===co)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===ho)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===uo)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ao)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===fo)return r===Se?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===ca)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===ca)return r===Se?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===Cn?i?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):o[s]!==void 0?o[s]:null}return{convert:n}}class Qp extends ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Li extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Pp={type:"move"};class Nr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Li,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Li,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Li,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,s=null,r=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const p of e.hand.values()){const A=t.getJointPose(p,i),m=this._getHandJoint(c,p);A!==null&&(m.matrix.fromArray(A.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.jointRadius=A.radius),m.visible=A!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;c.inputState.pinching&&d>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&s!==null&&(n=s),n!==null&&(a.matrix.fromArray(n.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),n.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(n.linearVelocity)):a.hasLinearVelocity=!1,n.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(n.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Pp)))}return a!==null&&(a.visible=n!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new Li;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class ba extends lt{constructor(e,t,i,n,s,r,a,l,c,h){if(h=h!==void 0?h:ji,h!==ji&&h!==Mn)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===ji&&(i=Ki),i===void 0&&h===Mn&&(i=Cn),super(null,n,s,r,a,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Ne,this.minFilter=l!==void 0?l:Ne,this.flipY=!1,this.generateMipmaps=!1}}class Fp extends Ui{constructor(e,t){super();const i=this;let n=null,s=1,r=null,a="local-floor",l=null,c=null,h=null,u=null,d=null,f=null;const g=t.getContextAttributes();let p=null,A=null;const m=[],I=[],_=new Set,v=new Map,E=new ft;E.layers.enable(1),E.viewport=new Ve;const b=new ft;b.layers.enable(2),b.viewport=new Ve;const B=[E,b],x=new Qp;x.layers.enable(1),x.layers.enable(2);let w=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let Y=m[H];return Y===void 0&&(Y=new Nr,m[H]=Y),Y.getTargetRaySpace()},this.getControllerGrip=function(H){let Y=m[H];return Y===void 0&&(Y=new Nr,m[H]=Y),Y.getGripSpace()},this.getHand=function(H){let Y=m[H];return Y===void 0&&(Y=new Nr,m[H]=Y),Y.getHandSpace()};function F(H){const Y=I.indexOf(H.inputSource);if(Y===-1)return;const ee=m[Y];ee!==void 0&&ee.dispatchEvent({type:H.type,data:H.inputSource})}function O(){n.removeEventListener("select",F),n.removeEventListener("selectstart",F),n.removeEventListener("selectend",F),n.removeEventListener("squeeze",F),n.removeEventListener("squeezestart",F),n.removeEventListener("squeezeend",F),n.removeEventListener("end",O),n.removeEventListener("inputsourceschange",Q);for(let H=0;H<m.length;H++){const Y=I[H];Y!==null&&(I[H]=null,m[H].disconnect(Y))}w=null,R=null,e.setRenderTarget(p),d=null,u=null,h=null,n=null,A=null,Z.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){s=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){a=H,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||r},this.setReferenceSpace=function(H){l=H},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return h},this.getFrame=function(){return f},this.getSession=function(){return n},this.setSession=async function(H){if(n=H,n!==null){if(p=e.getRenderTarget(),n.addEventListener("select",F),n.addEventListener("selectstart",F),n.addEventListener("selectend",F),n.addEventListener("squeeze",F),n.addEventListener("squeezestart",F),n.addEventListener("squeezeend",F),n.addEventListener("end",O),n.addEventListener("inputsourceschange",Q),g.xrCompatible!==!0&&await t.makeXRCompatible(),n.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const Y={antialias:n.renderState.layers===void 0?g.antialias:!0,alpha:g.alpha,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(n,t,Y),n.updateRenderState({baseLayer:d}),A=new Tt(d.framebufferWidth,d.framebufferHeight,{format:ht,type:Ct,encoding:e.outputEncoding,stencilBuffer:g.stencil})}else{let Y=null,ee=null,ie=null;g.depth&&(ie=g.stencil?35056:33190,Y=g.stencil?Mn:ji,ee=g.stencil?Cn:Ki);const re={colorFormat:32856,depthFormat:ie,scaleFactor:s};h=new XRWebGLBinding(n,t),u=h.createProjectionLayer(re),n.updateRenderState({layers:[u]}),A=new Tt(u.textureWidth,u.textureHeight,{format:ht,type:Ct,depthTexture:new ba(u.textureWidth,u.textureHeight,ee,void 0,void 0,void 0,void 0,void 0,void 0,Y),stencilBuffer:g.stencil,encoding:e.outputEncoding,samples:g.antialias?4:0});const J=e.properties.get(A);J.__ignoreDepthValues=u.ignoreDepthValues}A.isXRRenderTarget=!0,this.setFoveation(1),l=null,r=await n.requestReferenceSpace(a),Z.setContext(n),Z.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}};function Q(H){for(let Y=0;Y<H.removed.length;Y++){const ee=H.removed[Y],ie=I.indexOf(ee);ie>=0&&(I[ie]=null,m[ie].disconnect(ee))}for(let Y=0;Y<H.added.length;Y++){const ee=H.added[Y];let ie=I.indexOf(ee);if(ie===-1){for(let J=0;J<m.length;J++)if(J>=I.length){I.push(ee),ie=J;break}else if(I[J]===null){I[J]=ee,ie=J;break}if(ie===-1)break}const re=m[ie];re&&re.connect(ee)}}const D=new T,G=new T;function K(H,Y,ee){D.setFromMatrixPosition(Y.matrixWorld),G.setFromMatrixPosition(ee.matrixWorld);const ie=D.distanceTo(G),re=Y.projectionMatrix.elements,J=ee.projectionMatrix.elements,Be=re[14]/(re[10]-1),de=re[14]/(re[10]+1),_e=(re[9]+1)/re[5],ue=(re[9]-1)/re[5],Ue=(re[8]-1)/re[0],we=(J[8]+1)/J[0],xe=Be*Ue,st=Be*we,Ze=ie/(-Ue+we),$e=Ze*-Ue;Y.matrixWorld.decompose(H.position,H.quaternion,H.scale),H.translateX($e),H.translateZ(Ze),H.matrixWorld.compose(H.position,H.quaternion,H.scale),H.matrixWorldInverse.copy(H.matrixWorld).invert();const gt=Be+Ze,Ye=de+Ze,Oe=xe-$e,Gt=st+(ie-$e),bt=_e*de/Ye*gt,M=ue*de/Ye*gt;H.projectionMatrix.makePerspective(Oe,Gt,bt,M,gt,Ye)}function W(H,Y){Y===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(Y.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(n===null)return;x.near=b.near=E.near=H.near,x.far=b.far=E.far=H.far,(w!==x.near||R!==x.far)&&(n.updateRenderState({depthNear:x.near,depthFar:x.far}),w=x.near,R=x.far);const Y=H.parent,ee=x.cameras;W(x,Y);for(let re=0;re<ee.length;re++)W(ee[re],Y);x.matrixWorld.decompose(x.position,x.quaternion,x.scale),H.matrix.copy(x.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale);const ie=H.children;for(let re=0,J=ie.length;re<J;re++)ie[re].updateMatrixWorld(!0);ee.length===2?K(x,E,b):x.projectionMatrix.copy(E.projectionMatrix)},this.getCamera=function(){return x},this.getFoveation=function(){if(u!==null)return u.fixedFoveation;if(d!==null)return d.fixedFoveation},this.setFoveation=function(H){u!==null&&(u.fixedFoveation=H),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=H)},this.getPlanes=function(){return _};let k=null;function j(H,Y){if(c=Y.getViewerPose(l||r),f=Y,c!==null){const ee=c.views;d!==null&&(e.setRenderTargetFramebuffer(A,d.framebuffer),e.setRenderTarget(A));let ie=!1;ee.length!==x.cameras.length&&(x.cameras.length=0,ie=!0);for(let re=0;re<ee.length;re++){const J=ee[re];let Be=null;if(d!==null)Be=d.getViewport(J);else{const _e=h.getViewSubImage(u,J);Be=_e.viewport,re===0&&(e.setRenderTargetTextures(A,_e.colorTexture,u.ignoreDepthValues?void 0:_e.depthStencilTexture),e.setRenderTarget(A))}let de=B[re];de===void 0&&(de=new ft,de.layers.enable(re),de.viewport=new Ve,B[re]=de),de.matrix.fromArray(J.transform.matrix),de.projectionMatrix.fromArray(J.projectionMatrix),de.viewport.set(Be.x,Be.y,Be.width,Be.height),re===0&&x.matrix.copy(de.matrix),ie===!0&&x.cameras.push(de)}}for(let ee=0;ee<m.length;ee++){const ie=I[ee],re=m[ee];ie!==null&&re!==void 0&&re.update(ie,Y,l||r)}if(k&&k(H,Y),Y.detectedPlanes){i.dispatchEvent({type:"planesdetected",data:Y.detectedPlanes});let ee=null;for(const ie of _)Y.detectedPlanes.has(ie)||(ee===null&&(ee=[]),ee.push(ie));if(ee!==null)for(const ie of ee)_.delete(ie),v.delete(ie),i.dispatchEvent({type:"planeremoved",data:ie});for(const ie of Y.detectedPlanes)if(!_.has(ie))_.add(ie),v.set(ie,Y.lastChangedTime),i.dispatchEvent({type:"planeadded",data:ie});else{const re=v.get(ie);ie.lastChangedTime>re&&(v.set(ie,ie.lastChangedTime),i.dispatchEvent({type:"planechanged",data:ie}))}}f=null}const Z=new nc;Z.setAnimationLoop(j),this.setAnimationLoop=function(H){k=H},this.dispose=function(){}}}function Np(o,e){function t(p,A){A.color.getRGB(p.fogColor.value,ec(o)),A.isFog?(p.fogNear.value=A.near,p.fogFar.value=A.far):A.isFogExp2&&(p.fogDensity.value=A.density)}function i(p,A,m,I,_){A.isMeshBasicMaterial||A.isMeshLambertMaterial?n(p,A):A.isMeshToonMaterial?(n(p,A),h(p,A)):A.isMeshPhongMaterial?(n(p,A),c(p,A)):A.isMeshStandardMaterial?(n(p,A),u(p,A),A.isMeshPhysicalMaterial&&d(p,A,_)):A.isMeshMatcapMaterial?(n(p,A),f(p,A)):A.isMeshDepthMaterial?n(p,A):A.isMeshDistanceMaterial?(n(p,A),g(p,A)):A.isMeshNormalMaterial?n(p,A):A.isLineBasicMaterial?(s(p,A),A.isLineDashedMaterial&&r(p,A)):A.isPointsMaterial?a(p,A,m,I):A.isSpriteMaterial?l(p,A):A.isShadowMaterial?(p.color.value.copy(A.color),p.opacity.value=A.opacity):A.isShaderMaterial&&(A.uniformsNeedUpdate=!1)}function n(p,A){p.opacity.value=A.opacity,A.color&&p.diffuse.value.copy(A.color),A.emissive&&p.emissive.value.copy(A.emissive).multiplyScalar(A.emissiveIntensity),A.map&&(p.map.value=A.map),A.alphaMap&&(p.alphaMap.value=A.alphaMap),A.bumpMap&&(p.bumpMap.value=A.bumpMap,p.bumpScale.value=A.bumpScale,A.side===Vt&&(p.bumpScale.value*=-1)),A.displacementMap&&(p.displacementMap.value=A.displacementMap,p.displacementScale.value=A.displacementScale,p.displacementBias.value=A.displacementBias),A.emissiveMap&&(p.emissiveMap.value=A.emissiveMap),A.normalMap&&(p.normalMap.value=A.normalMap,p.normalScale.value.copy(A.normalScale),A.side===Vt&&p.normalScale.value.negate()),A.specularMap&&(p.specularMap.value=A.specularMap),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);const m=e.get(A).envMap;if(m&&(p.envMap.value=m,p.flipEnvMap.value=m.isCubeTexture&&m.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=A.reflectivity,p.ior.value=A.ior,p.refractionRatio.value=A.refractionRatio),A.lightMap){p.lightMap.value=A.lightMap;const v=o.physicallyCorrectLights!==!0?Math.PI:1;p.lightMapIntensity.value=A.lightMapIntensity*v}A.aoMap&&(p.aoMap.value=A.aoMap,p.aoMapIntensity.value=A.aoMapIntensity);let I;A.map?I=A.map:A.specularMap?I=A.specularMap:A.displacementMap?I=A.displacementMap:A.normalMap?I=A.normalMap:A.bumpMap?I=A.bumpMap:A.roughnessMap?I=A.roughnessMap:A.metalnessMap?I=A.metalnessMap:A.alphaMap?I=A.alphaMap:A.emissiveMap?I=A.emissiveMap:A.clearcoatMap?I=A.clearcoatMap:A.clearcoatNormalMap?I=A.clearcoatNormalMap:A.clearcoatRoughnessMap?I=A.clearcoatRoughnessMap:A.iridescenceMap?I=A.iridescenceMap:A.iridescenceThicknessMap?I=A.iridescenceThicknessMap:A.specularIntensityMap?I=A.specularIntensityMap:A.specularColorMap?I=A.specularColorMap:A.transmissionMap?I=A.transmissionMap:A.thicknessMap?I=A.thicknessMap:A.sheenColorMap?I=A.sheenColorMap:A.sheenRoughnessMap&&(I=A.sheenRoughnessMap),I!==void 0&&(I.isWebGLRenderTarget&&(I=I.texture),I.matrixAutoUpdate===!0&&I.updateMatrix(),p.uvTransform.value.copy(I.matrix));let _;A.aoMap?_=A.aoMap:A.lightMap&&(_=A.lightMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uv2Transform.value.copy(_.matrix))}function s(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity}function r(p,A){p.dashSize.value=A.dashSize,p.totalSize.value=A.dashSize+A.gapSize,p.scale.value=A.scale}function a(p,A,m,I){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.size.value=A.size*m,p.scale.value=I*.5,A.map&&(p.map.value=A.map),A.alphaMap&&(p.alphaMap.value=A.alphaMap),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);let _;A.map?_=A.map:A.alphaMap&&(_=A.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),p.uvTransform.value.copy(_.matrix))}function l(p,A){p.diffuse.value.copy(A.color),p.opacity.value=A.opacity,p.rotation.value=A.rotation,A.map&&(p.map.value=A.map),A.alphaMap&&(p.alphaMap.value=A.alphaMap),A.alphaTest>0&&(p.alphaTest.value=A.alphaTest);let m;A.map?m=A.map:A.alphaMap&&(m=A.alphaMap),m!==void 0&&(m.matrixAutoUpdate===!0&&m.updateMatrix(),p.uvTransform.value.copy(m.matrix))}function c(p,A){p.specular.value.copy(A.specular),p.shininess.value=Math.max(A.shininess,1e-4)}function h(p,A){A.gradientMap&&(p.gradientMap.value=A.gradientMap)}function u(p,A){p.roughness.value=A.roughness,p.metalness.value=A.metalness,A.roughnessMap&&(p.roughnessMap.value=A.roughnessMap),A.metalnessMap&&(p.metalnessMap.value=A.metalnessMap),e.get(A).envMap&&(p.envMapIntensity.value=A.envMapIntensity)}function d(p,A,m){p.ior.value=A.ior,A.sheen>0&&(p.sheenColor.value.copy(A.sheenColor).multiplyScalar(A.sheen),p.sheenRoughness.value=A.sheenRoughness,A.sheenColorMap&&(p.sheenColorMap.value=A.sheenColorMap),A.sheenRoughnessMap&&(p.sheenRoughnessMap.value=A.sheenRoughnessMap)),A.clearcoat>0&&(p.clearcoat.value=A.clearcoat,p.clearcoatRoughness.value=A.clearcoatRoughness,A.clearcoatMap&&(p.clearcoatMap.value=A.clearcoatMap),A.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=A.clearcoatRoughnessMap),A.clearcoatNormalMap&&(p.clearcoatNormalScale.value.copy(A.clearcoatNormalScale),p.clearcoatNormalMap.value=A.clearcoatNormalMap,A.side===Vt&&p.clearcoatNormalScale.value.negate())),A.iridescence>0&&(p.iridescence.value=A.iridescence,p.iridescenceIOR.value=A.iridescenceIOR,p.iridescenceThicknessMinimum.value=A.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=A.iridescenceThicknessRange[1],A.iridescenceMap&&(p.iridescenceMap.value=A.iridescenceMap),A.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=A.iridescenceThicknessMap)),A.transmission>0&&(p.transmission.value=A.transmission,p.transmissionSamplerMap.value=m.texture,p.transmissionSamplerSize.value.set(m.width,m.height),A.transmissionMap&&(p.transmissionMap.value=A.transmissionMap),p.thickness.value=A.thickness,A.thicknessMap&&(p.thicknessMap.value=A.thicknessMap),p.attenuationDistance.value=A.attenuationDistance,p.attenuationColor.value.copy(A.attenuationColor)),p.specularIntensity.value=A.specularIntensity,p.specularColor.value.copy(A.specularColor),A.specularIntensityMap&&(p.specularIntensityMap.value=A.specularIntensityMap),A.specularColorMap&&(p.specularColorMap.value=A.specularColorMap)}function f(p,A){A.matcap&&(p.matcap.value=A.matcap)}function g(p,A){p.referencePosition.value.copy(A.referencePosition),p.nearDistance.value=A.nearDistance,p.farDistance.value=A.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:i}}function Up(o,e,t,i){let n={},s={},r=[];const a=t.isWebGL2?o.getParameter(35375):0;function l(I,_){const v=_.program;i.uniformBlockBinding(I,v)}function c(I,_){let v=n[I.id];v===void 0&&(g(I),v=h(I),n[I.id]=v,I.addEventListener("dispose",A));const E=_.program;i.updateUBOMapping(I,E);const b=e.render.frame;s[I.id]!==b&&(d(I),s[I.id]=b)}function h(I){const _=u();I.__bindingPointIndex=_;const v=o.createBuffer(),E=I.__size,b=I.usage;return o.bindBuffer(35345,v),o.bufferData(35345,E,b),o.bindBuffer(35345,null),o.bindBufferBase(35345,_,v),v}function u(){for(let I=0;I<a;I++)if(r.indexOf(I)===-1)return r.push(I),I;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(I){const _=n[I.id],v=I.uniforms,E=I.__cache;o.bindBuffer(35345,_);for(let b=0,B=v.length;b<B;b++){const x=v[b];if(f(x,b,E)===!0){const w=x.__offset,R=Array.isArray(x.value)?x.value:[x.value];let F=0;for(let O=0;O<R.length;O++){const Q=R[O],D=p(Q);typeof Q=="number"?(x.__data[0]=Q,o.bufferSubData(35345,w+F,x.__data)):Q.isMatrix3?(x.__data[0]=Q.elements[0],x.__data[1]=Q.elements[1],x.__data[2]=Q.elements[2],x.__data[3]=Q.elements[0],x.__data[4]=Q.elements[3],x.__data[5]=Q.elements[4],x.__data[6]=Q.elements[5],x.__data[7]=Q.elements[0],x.__data[8]=Q.elements[6],x.__data[9]=Q.elements[7],x.__data[10]=Q.elements[8],x.__data[11]=Q.elements[0]):(Q.toArray(x.__data,F),F+=D.storage/Float32Array.BYTES_PER_ELEMENT)}o.bufferSubData(35345,w,x.__data)}}o.bindBuffer(35345,null)}function f(I,_,v){const E=I.value;if(v[_]===void 0){if(typeof E=="number")v[_]=E;else{const b=Array.isArray(E)?E:[E],B=[];for(let x=0;x<b.length;x++)B.push(b[x].clone());v[_]=B}return!0}else if(typeof E=="number"){if(v[_]!==E)return v[_]=E,!0}else{const b=Array.isArray(v[_])?v[_]:[v[_]],B=Array.isArray(E)?E:[E];for(let x=0;x<b.length;x++){const w=b[x];if(w.equals(B[x])===!1)return w.copy(B[x]),!0}}return!1}function g(I){const _=I.uniforms;let v=0;const E=16;let b=0;for(let B=0,x=_.length;B<x;B++){const w=_[B],R={boundary:0,storage:0},F=Array.isArray(w.value)?w.value:[w.value];for(let O=0,Q=F.length;O<Q;O++){const D=F[O],G=p(D);R.boundary+=G.boundary,R.storage+=G.storage}if(w.__data=new Float32Array(R.storage/Float32Array.BYTES_PER_ELEMENT),w.__offset=v,B>0){b=v%E;const O=E-b;b!==0&&O-R.boundary<0&&(v+=E-b,w.__offset=v)}v+=R.storage}return b=v%E,b>0&&(v+=E-b),I.__size=v,I.__cache={},this}function p(I){const _={boundary:0,storage:0};return typeof I=="number"?(_.boundary=4,_.storage=4):I.isVector2?(_.boundary=8,_.storage=8):I.isVector3||I.isColor?(_.boundary=16,_.storage=12):I.isVector4?(_.boundary=16,_.storage=16):I.isMatrix3?(_.boundary=48,_.storage=48):I.isMatrix4?(_.boundary=64,_.storage=64):I.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",I),_}function A(I){const _=I.target;_.removeEventListener("dispose",A);const v=r.indexOf(_.__bindingPointIndex);r.splice(v,1),o.deleteBuffer(n[_.id]),delete n[_.id],delete s[_.id]}function m(){for(const I in n)o.deleteBuffer(n[I]);r=[],n={},s={}}return{bind:l,update:c,dispose:m}}function kp(){const o=as("canvas");return o.style.display="block",o}function lc(o={}){this.isWebGLRenderer=!0;const e=o.canvas!==void 0?o.canvas:kp(),t=o.context!==void 0?o.context:null,i=o.depth!==void 0?o.depth:!0,n=o.stencil!==void 0?o.stencil:!0,s=o.antialias!==void 0?o.antialias:!1,r=o.premultipliedAlpha!==void 0?o.premultipliedAlpha:!0,a=o.preserveDrawingBuffer!==void 0?o.preserveDrawingBuffer:!1,l=o.powerPreference!==void 0?o.powerPreference:"default",c=o.failIfMajorPerformanceCaveat!==void 0?o.failIfMajorPerformanceCaveat:!1;let h;t!==null?h=t.getContextAttributes().alpha:h=o.alpha!==void 0?o.alpha:!1;let u=null,d=null;const f=[],g=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ti,this.physicallyCorrectLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const p=this;let A=!1,m=0,I=0,_=null,v=-1,E=null;const b=new Ve,B=new Ve;let x=null,w=e.width,R=e.height,F=1,O=null,Q=null;const D=new Ve(0,0,w,R),G=new Ve(0,0,w,R);let K=!1;const W=new wa;let k=!1,j=!1,Z=null;const H=new ve,Y=new me,ee=new T,ie={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function re(){return _===null?F:1}let J=t;function Be(y,U){for(let q=0;q<y.length;q++){const N=y[q],X=e.getContext(N,U);if(X!==null)return X}return null}try{const y={alpha:!0,depth:i,stencil:n,antialias:s,premultipliedAlpha:r,preserveDrawingBuffer:a,powerPreference:l,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ea}`),e.addEventListener("webglcontextlost",fe,!1),e.addEventListener("webglcontextrestored",Ae,!1),e.addEventListener("webglcontextcreationerror",Te,!1),J===null){const U=["webgl2","webgl","experimental-webgl"];if(p.isWebGL1Renderer===!0&&U.shift(),J=Be(U,y),J===null)throw Be(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}J.getShaderPrecisionFormat===void 0&&(J.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(y){throw console.error("THREE.WebGLRenderer: "+y.message),y}let de,_e,ue,Ue,we,xe,st,Ze,$e,gt,Ye,Oe,Gt,bt,M,C,z,te,ne,ae,Ee,S,P,le;function he(){de=new KA(J),_e=new VA(J,de,o),de.init(_e),S=new Lp(J,de,_e),ue=new Dp(J,de,_e),Ue=new $A,we=new mp,xe=new Rp(J,de,ue,we,_e,S,Ue),st=new qA(p),Ze=new XA(p),$e=new lu(J,_e),P=new HA(J,de,$e,_e),gt=new jA(J,$e,Ue,P),Ye=new sf(J,gt,$e,Ue),ne=new nf(J,_e,xe),C=new WA(we),Oe=new gp(p,st,Ze,de,_e,P,C),Gt=new Np(p,we),bt=new xp,M=new wp(de,_e),te=new OA(p,st,Ze,ue,Ye,h,r),z=new Tp(p,Ye,_e),le=new Up(J,Ue,_e,ue),ae=new zA(J,de,Ue,_e),Ee=new ZA(J,de,Ue,_e),Ue.programs=Oe.programs,p.capabilities=_e,p.extensions=de,p.properties=we,p.renderLists=bt,p.shadowMap=z,p.state=ue,p.info=Ue}he();const oe=new Fp(p,J);this.xr=oe,this.getContext=function(){return J},this.getContextAttributes=function(){return J.getContextAttributes()},this.forceContextLoss=function(){const y=de.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){const y=de.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return F},this.setPixelRatio=function(y){y!==void 0&&(F=y,this.setSize(w,R,!1))},this.getSize=function(y){return y.set(w,R)},this.setSize=function(y,U,q){if(oe.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}w=y,R=U,e.width=Math.floor(y*F),e.height=Math.floor(U*F),q!==!1&&(e.style.width=y+"px",e.style.height=U+"px"),this.setViewport(0,0,y,U)},this.getDrawingBufferSize=function(y){return y.set(w*F,R*F).floor()},this.setDrawingBufferSize=function(y,U,q){w=y,R=U,F=q,e.width=Math.floor(y*q),e.height=Math.floor(U*q),this.setViewport(0,0,y,U)},this.getCurrentViewport=function(y){return y.copy(b)},this.getViewport=function(y){return y.copy(D)},this.setViewport=function(y,U,q,N){y.isVector4?D.set(y.x,y.y,y.z,y.w):D.set(y,U,q,N),ue.viewport(b.copy(D).multiplyScalar(F).floor())},this.getScissor=function(y){return y.copy(G)},this.setScissor=function(y,U,q,N){y.isVector4?G.set(y.x,y.y,y.z,y.w):G.set(y,U,q,N),ue.scissor(B.copy(G).multiplyScalar(F).floor())},this.getScissorTest=function(){return K},this.setScissorTest=function(y){ue.setScissorTest(K=y)},this.setOpaqueSort=function(y){O=y},this.setTransparentSort=function(y){Q=y},this.getClearColor=function(y){return y.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor.apply(te,arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha.apply(te,arguments)},this.clear=function(y=!0,U=!0,q=!0){let N=0;y&&(N|=16384),U&&(N|=256),q&&(N|=1024),J.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",fe,!1),e.removeEventListener("webglcontextrestored",Ae,!1),e.removeEventListener("webglcontextcreationerror",Te,!1),bt.dispose(),M.dispose(),we.dispose(),st.dispose(),Ze.dispose(),Ye.dispose(),P.dispose(),le.dispose(),Oe.dispose(),oe.dispose(),oe.removeEventListener("sessionstart",ce),oe.removeEventListener("sessionend",pe),Z&&(Z.dispose(),Z=null),ke.stop()};function fe(y){y.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Ae(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const y=Ue.autoReset,U=z.enabled,q=z.autoUpdate,N=z.needsUpdate,X=z.type;he(),Ue.autoReset=y,z.enabled=U,z.autoUpdate=q,z.needsUpdate=N,z.type=X}function Te(y){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function De(y){const U=y.target;U.removeEventListener("dispose",De),He(U)}function He(y){L(y),we.remove(y)}function L(y){const U=we.get(y).programs;U!==void 0&&(U.forEach(function(q){Oe.releaseProgram(q)}),y.isShaderMaterial&&Oe.releaseShaderCache(y))}this.renderBufferDirect=function(y,U,q,N,X,ge){U===null&&(U=ie);const ye=X.isMesh&&X.matrixWorld.determinant()<0,Me=Lc(y,U,q,N,X);ue.setMaterial(N,ye);let be=q.index,Fe=1;N.wireframe===!0&&(be=gt.getWireframeAttribute(q),Fe=2);const Re=q.drawRange,Le=q.attributes.position;let Xe=Re.start*Fe,Lt=(Re.start+Re.count)*Fe;ge!==null&&(Xe=Math.max(Xe,ge.start*Fe),Lt=Math.min(Lt,(ge.start+ge.count)*Fe)),be!==null?(Xe=Math.max(Xe,0),Lt=Math.min(Lt,be.count)):Le!=null&&(Xe=Math.max(Xe,0),Lt=Math.min(Lt,Le.count));const si=Lt-Xe;if(si<0||si===1/0)return;P.setup(X,N,Me,q,be);let Oi,Ke=ae;if(be!==null&&(Oi=$e.get(be),Ke=Ee,Ke.setIndex(Oi)),X.isMesh)N.wireframe===!0?(ue.setLineWidth(N.wireframeLinewidth*re()),Ke.setMode(1)):Ke.setMode(4);else if(X.isLine){let Qe=N.linewidth;Qe===void 0&&(Qe=1),ue.setLineWidth(Qe*re()),X.isLineSegments?Ke.setMode(1):X.isLineLoop?Ke.setMode(2):Ke.setMode(3)}else X.isPoints?Ke.setMode(0):X.isSprite&&Ke.setMode(4);if(X.isInstancedMesh)Ke.renderInstances(Xe,si,X.count);else if(q.isInstancedBufferGeometry){const Qe=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ar=Math.min(q.instanceCount,Qe);Ke.renderInstances(Xe,si,ar)}else Ke.render(Xe,si)},this.compile=function(y,U){function q(N,X,ge){N.transparent===!0&&N.side===fs?(N.side=Vt,N.needsUpdate=!0,Ot(N,X,ge),N.side=Fi,N.needsUpdate=!0,Ot(N,X,ge),N.side=fs):Ot(N,X,ge)}d=M.get(y),d.init(),g.push(d),y.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights(p.physicallyCorrectLights),y.traverse(function(N){const X=N.material;if(X)if(Array.isArray(X))for(let ge=0;ge<X.length;ge++){const ye=X[ge];q(ye,y,N)}else q(X,y,N)}),g.pop(),d=null};let V=null;function $(y){V&&V(y)}function ce(){ke.stop()}function pe(){ke.start()}const ke=new nc;ke.setAnimationLoop($),typeof self<"u"&&ke.setContext(self),this.setAnimationLoop=function(y){V=y,oe.setAnimationLoop(y),y===null?ke.stop():ke.start()},oe.addEventListener("sessionstart",ce),oe.addEventListener("sessionend",pe),this.render=function(y,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),oe.enabled===!0&&oe.isPresenting===!0&&(oe.cameraAutoUpdate===!0&&oe.updateCamera(U),U=oe.getCamera()),y.isScene===!0&&y.onBeforeRender(p,y,U,_),d=M.get(y,g.length),d.init(),g.push(d),H.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),W.setFromProjectionMatrix(H),j=this.localClippingEnabled,k=C.init(this.clippingPlanes,j,U),u=bt.get(y,f.length),u.init(),f.push(u),rt(y,U,0,p.sortObjects),u.finish(),p.sortObjects===!0&&u.sort(O,Q),k===!0&&C.beginShadows();const q=d.state.shadowsArray;if(z.render(q,y,U),k===!0&&C.endShadows(),this.info.autoReset===!0&&this.info.reset(),te.render(u,y),d.setupLights(p.physicallyCorrectLights),U.isArrayCamera){const N=U.cameras;for(let X=0,ge=N.length;X<ge;X++){const ye=N[X];dt(u,y,ye,ye.viewport)}}else dt(u,y,U);_!==null&&(xe.updateMultisampleRenderTarget(_),xe.updateRenderTargetMipmap(_)),y.isScene===!0&&y.onAfterRender(p,y,U),P.resetDefaultState(),v=-1,E=null,g.pop(),g.length>0?d=g[g.length-1]:d=null,f.pop(),f.length>0?u=f[f.length-1]:u=null};function rt(y,U,q,N){if(y.visible===!1)return;if(y.layers.test(U.layers)){if(y.isGroup)q=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(U);else if(y.isLight)d.pushLight(y),y.castShadow&&d.pushShadow(y);else if(y.isSprite){if(!y.frustumCulled||W.intersectsSprite(y)){N&&ee.setFromMatrixPosition(y.matrixWorld).applyMatrix4(H);const ye=Ye.update(y),Me=y.material;Me.visible&&u.push(y,ye,Me,q,ee.z,null)}}else if((y.isMesh||y.isLine||y.isPoints)&&(y.isSkinnedMesh&&y.skeleton.frame!==Ue.render.frame&&(y.skeleton.update(),y.skeleton.frame=Ue.render.frame),!y.frustumCulled||W.intersectsObject(y))){N&&ee.setFromMatrixPosition(y.matrixWorld).applyMatrix4(H);const ye=Ye.update(y),Me=y.material;if(Array.isArray(Me)){const be=ye.groups;for(let Fe=0,Re=be.length;Fe<Re;Fe++){const Le=be[Fe],Xe=Me[Le.materialIndex];Xe&&Xe.visible&&u.push(y,ye,Xe,q,ee.z,Le)}}else Me.visible&&u.push(y,ye,Me,q,ee.z,null)}}const ge=y.children;for(let ye=0,Me=ge.length;ye<Me;ye++)rt(ge[ye],U,q,N)}function dt(y,U,q,N){const X=y.opaque,ge=y.transmissive,ye=y.transparent;d.setupLightsView(q),ge.length>0&&Gi(X,U,q),N&&ue.viewport(b.copy(N)),X.length>0&&We(X,U,q),ge.length>0&&We(ge,U,q),ye.length>0&&We(ye,U,q),ue.buffers.depth.setTest(!0),ue.buffers.depth.setMask(!0),ue.buffers.color.setMask(!0),ue.setPolygonOffset(!1)}function Gi(y,U,q){const N=_e.isWebGL2;Z===null&&(Z=new Tt(1,1,{generateMipmaps:!0,type:de.has("EXT_color_buffer_half_float")?wt:Ct,minFilter:Ci,samples:N&&s===!0?4:0})),p.getDrawingBufferSize(Y),N?Z.setSize(Y.x,Y.y):Z.setSize(Zs(Y.x),Zs(Y.y));const X=p.getRenderTarget();p.setRenderTarget(Z),p.clear();const ge=p.toneMapping;p.toneMapping=Ei,We(y,U,q),p.toneMapping=ge,xe.updateMultisampleRenderTarget(Z),xe.updateRenderTargetMipmap(Z),p.setRenderTarget(X)}function We(y,U,q){const N=U.isScene===!0?U.overrideMaterial:null;for(let X=0,ge=y.length;X<ge;X++){const ye=y[X],Me=ye.object,be=ye.geometry,Fe=N===null?ye.material:N,Re=ye.group;Me.layers.test(q.layers)&&ni(Me,U,q,be,Fe,Re)}}function ni(y,U,q,N,X,ge){y.onBeforeRender(p,U,q,N,X,ge),y.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),X.onBeforeRender(p,U,q,N,y,ge),X.transparent===!0&&X.side===fs?(X.side=Vt,X.needsUpdate=!0,p.renderBufferDirect(q,U,N,X,y,ge),X.side=Fi,X.needsUpdate=!0,p.renderBufferDirect(q,U,N,X,y,ge),X.side=fs):p.renderBufferDirect(q,U,N,X,y,ge),y.onAfterRender(p,U,q,N,X,ge)}function Ot(y,U,q){U.isScene!==!0&&(U=ie);const N=we.get(y),X=d.state.lights,ge=d.state.shadowsArray,ye=X.state.version,Me=Oe.getParameters(y,X.state,ge,U,q),be=Oe.getProgramCacheKey(Me);let Fe=N.programs;N.environment=y.isMeshStandardMaterial?U.environment:null,N.fog=U.fog,N.envMap=(y.isMeshStandardMaterial?Ze:st).get(y.envMap||N.environment),Fe===void 0&&(y.addEventListener("dispose",De),Fe=new Map,N.programs=Fe);let Re=Fe.get(be);if(Re!==void 0){if(N.currentProgram===Re&&N.lightsStateVersion===ye)return Va(y,Me),Re}else Me.uniforms=Oe.getUniforms(y),y.onBuild(q,Me,p),y.onBeforeCompile(Me,p),Re=Oe.acquireProgram(Me,be),Fe.set(be,Re),N.uniforms=Me.uniforms;const Le=N.uniforms;(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Le.clippingPlanes=C.uniform),Va(y,Me),N.needsLights=Pc(y),N.lightsStateVersion=ye,N.needsLights&&(Le.ambientLightColor.value=X.state.ambient,Le.lightProbe.value=X.state.probe,Le.directionalLights.value=X.state.directional,Le.directionalLightShadows.value=X.state.directionalShadow,Le.spotLights.value=X.state.spot,Le.spotLightShadows.value=X.state.spotShadow,Le.rectAreaLights.value=X.state.rectArea,Le.ltc_1.value=X.state.rectAreaLTC1,Le.ltc_2.value=X.state.rectAreaLTC2,Le.pointLights.value=X.state.point,Le.pointLightShadows.value=X.state.pointShadow,Le.hemisphereLights.value=X.state.hemi,Le.directionalShadowMap.value=X.state.directionalShadowMap,Le.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Le.spotShadowMap.value=X.state.spotShadowMap,Le.spotLightMatrix.value=X.state.spotLightMatrix,Le.spotLightMap.value=X.state.spotLightMap,Le.pointShadowMap.value=X.state.pointShadowMap,Le.pointShadowMatrix.value=X.state.pointShadowMatrix);const Xe=Re.getUniforms(),Lt=qs.seqWithValue(Xe.seq,Le);return N.currentProgram=Re,N.uniformsList=Lt,Re}function Va(y,U){const q=we.get(y);q.outputEncoding=U.outputEncoding,q.instancing=U.instancing,q.skinning=U.skinning,q.morphTargets=U.morphTargets,q.morphNormals=U.morphNormals,q.morphColors=U.morphColors,q.morphTargetsCount=U.morphTargetsCount,q.numClippingPlanes=U.numClippingPlanes,q.numIntersection=U.numClipIntersection,q.vertexAlphas=U.vertexAlphas,q.vertexTangents=U.vertexTangents,q.toneMapping=U.toneMapping}function Lc(y,U,q,N,X){U.isScene!==!0&&(U=ie),xe.resetTextureUnits();const ge=U.fog,ye=N.isMeshStandardMaterial?U.environment:null,Me=_===null?p.outputEncoding:_.isXRRenderTarget===!0?_.texture.encoding:ti,be=(N.isMeshStandardMaterial?Ze:st).get(N.envMap||ye),Fe=N.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Re=!!N.normalMap&&!!q.attributes.tangent,Le=!!q.morphAttributes.position,Xe=!!q.morphAttributes.normal,Lt=!!q.morphAttributes.color,si=N.toneMapped?p.toneMapping:Ei,Oi=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ke=Oi!==void 0?Oi.length:0,Qe=we.get(N),ar=d.state.lights;if(k===!0&&(j===!0||y!==E)){const Qt=y===E&&N.id===v;C.setState(N,y,Qt)}let at=!1;N.version===Qe.__version?(Qe.needsLights&&Qe.lightsStateVersion!==ar.state.version||Qe.outputEncoding!==Me||X.isInstancedMesh&&Qe.instancing===!1||!X.isInstancedMesh&&Qe.instancing===!0||X.isSkinnedMesh&&Qe.skinning===!1||!X.isSkinnedMesh&&Qe.skinning===!0||Qe.envMap!==be||N.fog===!0&&Qe.fog!==ge||Qe.numClippingPlanes!==void 0&&(Qe.numClippingPlanes!==C.numPlanes||Qe.numIntersection!==C.numIntersection)||Qe.vertexAlphas!==Fe||Qe.vertexTangents!==Re||Qe.morphTargets!==Le||Qe.morphNormals!==Xe||Qe.morphColors!==Lt||Qe.toneMapping!==si||_e.isWebGL2===!0&&Qe.morphTargetsCount!==Ke)&&(at=!0):(at=!0,Qe.__version=N.version);let Hi=Qe.currentProgram;at===!0&&(Hi=Ot(N,U,X));let Wa=!1,Pn=!1,or=!1;const mt=Hi.getUniforms(),zi=Qe.uniforms;if(ue.useProgram(Hi.program)&&(Wa=!0,Pn=!0,or=!0),N.id!==v&&(v=N.id,Pn=!0),Wa||E!==y){if(mt.setValue(J,"projectionMatrix",y.projectionMatrix),_e.logarithmicDepthBuffer&&mt.setValue(J,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),E!==y&&(E=y,Pn=!0,or=!0),N.isShaderMaterial||N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshStandardMaterial||N.envMap){const Qt=mt.map.cameraPosition;Qt!==void 0&&Qt.setValue(J,ee.setFromMatrixPosition(y.matrixWorld))}(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&mt.setValue(J,"isOrthographic",y.isOrthographicCamera===!0),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial||N.isShadowMaterial||X.isSkinnedMesh)&&mt.setValue(J,"viewMatrix",y.matrixWorldInverse)}if(X.isSkinnedMesh){mt.setOptional(J,X,"bindMatrix"),mt.setOptional(J,X,"bindMatrixInverse");const Qt=X.skeleton;Qt&&(_e.floatVertexTextures?(Qt.boneTexture===null&&Qt.computeBoneTexture(),mt.setValue(J,"boneTexture",Qt.boneTexture,xe),mt.setValue(J,"boneTextureSize",Qt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const lr=q.morphAttributes;if((lr.position!==void 0||lr.normal!==void 0||lr.color!==void 0&&_e.isWebGL2===!0)&&ne.update(X,q,N,Hi),(Pn||Qe.receiveShadow!==X.receiveShadow)&&(Qe.receiveShadow=X.receiveShadow,mt.setValue(J,"receiveShadow",X.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(zi.envMap.value=be,zi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),Pn&&(mt.setValue(J,"toneMappingExposure",p.toneMappingExposure),Qe.needsLights&&Qc(zi,or),ge&&N.fog===!0&&Gt.refreshFogUniforms(zi,ge),Gt.refreshMaterialUniforms(zi,N,F,R,Z),qs.upload(J,Qe.uniformsList,zi,xe)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(qs.upload(J,Qe.uniformsList,zi,xe),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&mt.setValue(J,"center",X.center),mt.setValue(J,"modelViewMatrix",X.modelViewMatrix),mt.setValue(J,"normalMatrix",X.normalMatrix),mt.setValue(J,"modelMatrix",X.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Qt=N.uniformsGroups;for(let cr=0,Fc=Qt.length;cr<Fc;cr++)if(_e.isWebGL2){const qa=Qt[cr];le.update(qa,Hi),le.bind(qa,Hi)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Hi}function Qc(y,U){y.ambientLightColor.needsUpdate=U,y.lightProbe.needsUpdate=U,y.directionalLights.needsUpdate=U,y.directionalLightShadows.needsUpdate=U,y.pointLights.needsUpdate=U,y.pointLightShadows.needsUpdate=U,y.spotLights.needsUpdate=U,y.spotLightShadows.needsUpdate=U,y.rectAreaLights.needsUpdate=U,y.hemisphereLights.needsUpdate=U}function Pc(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return m},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return _},this.setRenderTargetTextures=function(y,U,q){we.get(y.texture).__webglTexture=U,we.get(y.depthTexture).__webglTexture=q;const N=we.get(y);N.__hasExternalTextures=!0,N.__hasExternalTextures&&(N.__autoAllocateDepthBuffer=q===void 0,N.__autoAllocateDepthBuffer||de.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(y,U){const q=we.get(y);q.__webglFramebuffer=U,q.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(y,U=0,q=0){_=y,m=U,I=q;let N=!0,X=null,ge=!1,ye=!1;if(y){const be=we.get(y);be.__useDefaultFramebuffer!==void 0?(ue.bindFramebuffer(36160,null),N=!1):be.__webglFramebuffer===void 0?xe.setupRenderTarget(y):be.__hasExternalTextures&&xe.rebindTextures(y,we.get(y.texture).__webglTexture,we.get(y.depthTexture).__webglTexture);const Fe=y.texture;(Fe.isData3DTexture||Fe.isDataArrayTexture||Fe.isCompressedArrayTexture)&&(ye=!0);const Re=we.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(X=Re[U],ge=!0):_e.isWebGL2&&y.samples>0&&xe.useMultisampledRTT(y)===!1?X=we.get(y).__webglMultisampledFramebuffer:X=Re,b.copy(y.viewport),B.copy(y.scissor),x=y.scissorTest}else b.copy(D).multiplyScalar(F).floor(),B.copy(G).multiplyScalar(F).floor(),x=K;if(ue.bindFramebuffer(36160,X)&&_e.drawBuffers&&N&&ue.drawBuffers(y,X),ue.viewport(b),ue.scissor(B),ue.setScissorTest(x),ge){const be=we.get(y.texture);J.framebufferTexture2D(36160,36064,34069+U,be.__webglTexture,q)}else if(ye){const be=we.get(y.texture),Fe=U||0;J.framebufferTextureLayer(36160,36064,be.__webglTexture,q||0,Fe)}v=-1},this.readRenderTargetPixels=function(y,U,q,N,X,ge,ye){if(!(y&&y.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Me=we.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&ye!==void 0&&(Me=Me[ye]),Me){ue.bindFramebuffer(36160,Me);try{const be=y.texture,Fe=be.format,Re=be.type;if(Fe!==ht&&S.convert(Fe)!==J.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Le=Re===wt&&(de.has("EXT_color_buffer_half_float")||_e.isWebGL2&&de.has("EXT_color_buffer_float"));if(Re!==Ct&&S.convert(Re)!==J.getParameter(35738)&&!(Re===yt&&(_e.isWebGL2||de.has("OES_texture_float")||de.has("WEBGL_color_buffer_float")))&&!Le){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=y.width-N&&q>=0&&q<=y.height-X&&J.readPixels(U,q,N,X,S.convert(Fe),S.convert(Re),ge)}finally{const be=_!==null?we.get(_).__webglFramebuffer:null;ue.bindFramebuffer(36160,be)}}},this.copyFramebufferToTexture=function(y,U,q=0){const N=Math.pow(2,-q),X=Math.floor(U.image.width*N),ge=Math.floor(U.image.height*N);xe.setTexture2D(U,0),J.copyTexSubImage2D(3553,q,0,0,y.x,y.y,X,ge),ue.unbindTexture()},this.copyTextureToTexture=function(y,U,q,N=0){const X=U.image.width,ge=U.image.height,ye=S.convert(q.format),Me=S.convert(q.type);xe.setTexture2D(q,0),J.pixelStorei(37440,q.flipY),J.pixelStorei(37441,q.premultiplyAlpha),J.pixelStorei(3317,q.unpackAlignment),U.isDataTexture?J.texSubImage2D(3553,N,y.x,y.y,X,ge,ye,Me,U.image.data):U.isCompressedTexture?J.compressedTexSubImage2D(3553,N,y.x,y.y,U.mipmaps[0].width,U.mipmaps[0].height,ye,U.mipmaps[0].data):J.texSubImage2D(3553,N,y.x,y.y,ye,Me,U.image),N===0&&q.generateMipmaps&&J.generateMipmap(3553),ue.unbindTexture()},this.copyTextureToTexture3D=function(y,U,q,N,X=0){if(p.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=y.max.x-y.min.x+1,ye=y.max.y-y.min.y+1,Me=y.max.z-y.min.z+1,be=S.convert(N.format),Fe=S.convert(N.type);let Re;if(N.isData3DTexture)xe.setTexture3D(N,0),Re=32879;else if(N.isDataArrayTexture)xe.setTexture2DArray(N,0),Re=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}J.pixelStorei(37440,N.flipY),J.pixelStorei(37441,N.premultiplyAlpha),J.pixelStorei(3317,N.unpackAlignment);const Le=J.getParameter(3314),Xe=J.getParameter(32878),Lt=J.getParameter(3316),si=J.getParameter(3315),Oi=J.getParameter(32877),Ke=q.isCompressedTexture?q.mipmaps[0]:q.image;J.pixelStorei(3314,Ke.width),J.pixelStorei(32878,Ke.height),J.pixelStorei(3316,y.min.x),J.pixelStorei(3315,y.min.y),J.pixelStorei(32877,y.min.z),q.isDataTexture||q.isData3DTexture?J.texSubImage3D(Re,X,U.x,U.y,U.z,ge,ye,Me,be,Fe,Ke.data):q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),J.compressedTexSubImage3D(Re,X,U.x,U.y,U.z,ge,ye,Me,be,Ke.data)):J.texSubImage3D(Re,X,U.x,U.y,U.z,ge,ye,Me,be,Fe,Ke),J.pixelStorei(3314,Le),J.pixelStorei(32878,Xe),J.pixelStorei(3316,Lt),J.pixelStorei(3315,si),J.pixelStorei(32877,Oi),X===0&&N.generateMipmaps&&J.generateMipmap(Re),ue.unbindTexture()},this.initTexture=function(y){y.isCubeTexture?xe.setTextureCube(y,0):y.isData3DTexture?xe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?xe.setTexture2DArray(y,0):xe.setTexture2D(y,0),ue.unbindTexture()},this.resetState=function(){m=0,I=0,_=null,ue.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Gp extends lc{}Gp.prototype.isWebGL1Renderer=!0;class Op extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Hp{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ha,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=Xt()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,s=this.stride;n<s;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Xt()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xt=new T;class Sa{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyMatrix4(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.applyNormalMatrix(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)xt.fromBufferAttribute(this,t),xt.transformDirection(e),this.setXYZ(t,xt.x,xt.y,xt.z);return this}setX(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=ze(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=mi(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=ze(t,this.array),i=ze(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=ze(t,this.array),i=ze(i,this.array),n=ze(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=ze(t,this.array),i=ze(i,this.array),n=ze(n,this.array),s=ze(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Sa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let i=0;i<this.count;i++){const n=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[n+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Xo=new T,Ko=new Ve,jo=new Ve,zp=new T,Zo=new ve;class Vp extends Dt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new ve,this.bindMatrixInverse=new ve}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ve,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const i=this.skeleton,n=this.geometry;Ko.fromBufferAttribute(n.attributes.skinIndex,e),jo.fromBufferAttribute(n.attributes.skinWeight,e),Xo.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const r=jo.getComponent(s);if(r!==0){const a=Ko.getComponent(s);Zo.multiplyMatrices(i.bones[a].matrixWorld,i.boneInverses[a]),t.addScaledVector(zp.copy(Xo).applyMatrix4(Zo),r)}}return t.applyMatrix4(this.bindMatrixInverse)}}class cc extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ba extends lt{constructor(e=null,t=1,i=1,n,s,r,a,l,c=Ne,h=Ne,u,d){super(null,r,a,l,c,h,n,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const $o=new ve,Wp=new ve;class Ta{constructor(e=[],t=[]){this.uuid=Xt(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new ve)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const i=new ve;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){const e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let s=0,r=e.length;s<r;s++){const a=e[s]?e[s].matrixWorld:Wp;$o.multiplyMatrices(a,t[s]),$o.toArray(i,s*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new Ta(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Vl(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const i=new Ba(t,e,e,ht,yt);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){const n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){const s=e.bones[i];let r=t[s];r===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),r=new cc),this.bones.push(r),this.boneInverses.push(new ve().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,i=this.boneInverses;for(let n=0,s=t.length;n<s;n++){const r=t[n];e.bones.push(r.uuid);const a=i[n];e.boneInverses.push(a.toArray())}return e}}class el extends ut{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tl=new ve,il=new ve,Ls=[],qp=new ve,zn=new Dt;class hc extends Dt{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new el(new Float32Array(i*16),16),this.instanceColor=null,this.count=i,this.frustumCulled=!1;for(let n=0;n<i;n++)this.setMatrixAt(n,qp)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const i=this.matrixWorld,n=this.count;if(zn.geometry=this.geometry,zn.material=this.material,zn.material!==void 0)for(let s=0;s<n;s++){this.getMatrixAt(s,tl),il.multiplyMatrices(i,tl),zn.matrixWorld=il,zn.raycast(e,Ls);for(let r=0,a=Ls.length;r<a;r++){const l=Ls[r];l.instanceId=s,l.object=this,t.push(l)}Ls.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new el(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class rr extends Kt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Ie(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const nl=new T,sl=new T,rl=new ve,Ur=new ya,Qs=new Dn;class Da extends qe{constructor(e=new Rt,t=new rr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let n=1,s=t.count;n<s;n++)nl.fromBufferAttribute(t,n-1),sl.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=nl.distanceTo(sl);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Qs.copy(i.boundingSphere),Qs.applyMatrix4(n),Qs.radius+=s,e.ray.intersectsSphere(Qs)===!1)return;rl.copy(n).invert(),Ur.copy(e.ray).applyMatrix4(rl);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=new T,h=new T,u=new T,d=new T,f=this.isLineSegments?2:1,g=i.index,A=i.attributes.position;if(g!==null){const m=Math.max(0,r.start),I=Math.min(g.count,r.start+r.count);for(let _=m,v=I-1;_<v;_+=f){const E=g.getX(_),b=g.getX(_+1);if(c.fromBufferAttribute(A,E),h.fromBufferAttribute(A,b),Ur.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const x=e.ray.origin.distanceTo(d);x<e.near||x>e.far||t.push({distance:x,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const m=Math.max(0,r.start),I=Math.min(A.count,r.start+r.count);for(let _=m,v=I-1;_<v;_+=f){if(c.fromBufferAttribute(A,_),h.fromBufferAttribute(A,_+1),Ur.distanceSqToSegment(c,h,d,u)>l)continue;d.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(d);b<e.near||b>e.far||t.push({distance:b,point:u.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const al=new T,ol=new T;class Ra extends Da{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let n=0,s=t.count;n<s;n+=2)al.fromBufferAttribute(t,n),ol.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+al.distanceTo(ol);e.setAttribute("lineDistance",new Mt(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Yp extends Da{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class uc extends Kt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ie(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ll=new ve,fa=new ya,Ps=new Dn,Fs=new T;class Jp extends qe{constructor(e=new Rt,t=new uc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,n=this.matrixWorld,s=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ps.copy(i.boundingSphere),Ps.applyMatrix4(n),Ps.radius+=s,e.ray.intersectsSphere(Ps)===!1)return;ll.copy(n).invert(),fa.copy(e.ray).applyMatrix4(ll);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const d=Math.max(0,r.start),f=Math.min(c.count,r.start+r.count);for(let g=d,p=f;g<p;g++){const A=c.getX(g);Fs.fromBufferAttribute(u,A),cl(Fs,A,l,n,e,t,this)}}else{const d=Math.max(0,r.start),f=Math.min(u.count,r.start+r.count);for(let g=d,p=f;g<p;g++)Fs.fromBufferAttribute(u,g),cl(Fs,g,l,n,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,r=n.length;s<r;s++){const a=n[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function cl(o,e,t,i,n,s,r){const a=fa.distanceSqToPoint(o);if(a<t){const l=new T;fa.closestPointToPoint(o,l),l.applyMatrix4(i);const c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,object:r})}}class dc extends lt{constructor(e,t,i,n,s,r,a,l,c,h,u,d){super(null,r,a,l,c,h,n,s,u,d),this.isCompressedTexture=!0,this.image={width:t,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class Xp extends dc{constructor(e,t,i,n,s,r){super(e,t,i,s,r),this.isCompressedArrayTexture=!0,this.image.depth=n,this.wrapR=vt}}class La extends Kt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ie(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ie(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class tn extends La{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ie(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ie(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ie(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Kp extends Kt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ca,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function bi(o,e,t){return Ac(o)?new o.constructor(o.subarray(e,t!==void 0?t:o.length)):o.slice(e,t)}function Ns(o,e,t){return!o||!t&&o.constructor===e?o:typeof e.BYTES_PER_ELEMENT=="number"?new e(o):Array.prototype.slice.call(o)}function Ac(o){return ArrayBuffer.isView(o)&&!(o instanceof DataView)}function jp(o){function e(n,s){return o[n]-o[s]}const t=o.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function hl(o,e,t){const i=o.length,n=new o.constructor(i);for(let s=0,r=0;r!==i;++s){const a=t[s]*e;for(let l=0;l!==e;++l)n[r++]=o[a+l]}return n}function fc(o,e,t,i){let n=1,s=o[0];for(;s!==void 0&&s[i]===void 0;)s=o[n++];if(s===void 0)return;let r=s[i];if(r!==void 0)if(Array.isArray(r))do r=s[i],r!==void 0&&(e.push(s.time),t.push.apply(t,r)),s=o[n++];while(s!==void 0);else if(r.toArray!==void 0)do r=s[i],r!==void 0&&(e.push(s.time),r.toArray(t,t.length)),s=o[n++];while(s!==void 0);else do r=s[i],r!==void 0&&(e.push(s.time),t.push(r)),s=o[n++];while(s!==void 0)}class ds{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let i=this._cachedIndex,n=t[i],s=t[i-1];e:{t:{let r;i:{n:if(!(e<n)){for(let a=i+2;;){if(n===void 0){if(e<s)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===a)break;if(s=n,n=t[++i],e<n)break t}r=t.length;break i}if(!(e>=s)){const a=t[1];e<a&&(i=2,s=a);for(let l=i-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(n=s,s=t[--i-1],e>=s)break t}r=i,i=0;break i}break e}for(;i<r;){const a=i+r>>>1;e<t[a]?r=a:i=a+1}if(n=t[i],s=t[i-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,s,n)}return this.interpolate_(i,s,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n;for(let r=0;r!==n;++r)t[r]=i[s+r];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Zp extends ds{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xn,endingEnd:xn}}intervalChanged_(e,t,i){const n=this.parameterPositions;let s=e-2,r=e+1,a=n[s],l=n[r];if(a===void 0)switch(this.getSettings_().endingStart){case En:s=e,a=2*t-i;break;case js:s=n.length-2,a=t+n[s]-n[s+1];break;default:s=e,a=i}if(l===void 0)switch(this.getSettings_().endingEnd){case En:r=e,l=2*i-t;break;case js:r=1,l=i+n[1]-n[0];break;default:r=e-1,l=t}const c=(i-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-i),this._offsetPrev=s*h,this._offsetNext=r*h}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),p=g*g,A=p*g,m=-d*A+2*d*p-d*g,I=(1+d)*A+(-1.5-2*d)*p+(-.5+d)*g+1,_=(-1-f)*A+(1.5+f)*p+.5*g,v=f*A-f*p;for(let E=0;E!==a;++E)s[E]=m*r[h+E]+I*r[c+E]+_*r[l+E]+v*r[u+E];return s}}class pc extends ds{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==a;++d)s[d]=r[c+d]*u+r[l+d]*h;return s}}class $p extends ds{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}}class ii{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Ns(t,this.TimeBufferType),this.values=Ns(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:Ns(e.times,Array),values:Ns(e.values,Array)};const n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n)}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new $p(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new pc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Zp(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ns:t=this.InterpolantFactoryMethodDiscrete;break;case bn:t=this.InterpolantFactoryMethodLinear;break;case dr:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return console.warn("THREE.KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ns;case this.InterpolantFactoryMethodLinear:return bn;case this.InterpolantFactoryMethodSmooth:return dr}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e}return this}trim(e,t){const i=this.times,n=i.length;let s=0,r=n-1;for(;s!==n&&i[s]<e;)++s;for(;r!==-1&&i[r]>t;)--r;if(++r,s!==0||r!==n){s>=r&&(r=Math.max(r,1),s=r-1);const a=this.getValueSize();this.times=bi(i,s,r),this.values=bi(this.values,s*a,r*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const i=this.times,n=this.values,s=i.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let r=null;for(let a=0;a!==s;a++){const l=i[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(r!==null&&r>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,r),e=!1;break}r=l}if(n!==void 0&&Ac(n))for(let a=0,l=n.length;a!==l;++a){const c=n[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=bi(this.times),t=bi(this.values),i=this.getValueSize(),n=this.getInterpolation()===dr,s=e.length-1;let r=1;for(let a=1;a<s;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(n)l=!0;else{const u=a*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){const p=t[u+g];if(p!==t[d+g]||p!==t[f+g]){l=!0;break}}}if(l){if(a!==r){e[r]=e[a];const u=a*i,d=r*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++r}}if(s>0){e[r]=e[s];for(let a=s*i,l=r*i,c=0;c!==i;++c)t[l+c]=t[a+c];++r}return r!==e.length?(this.times=bi(e,0,r),this.values=bi(t,0,r*i)):(this.times=e,this.values=t),this}clone(){const e=bi(this.times,0),t=bi(this.values,0),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,n}}ii.prototype.TimeBufferType=Float32Array;ii.prototype.ValueBufferType=Float32Array;ii.prototype.DefaultInterpolation=bn;class Ln extends ii{}Ln.prototype.ValueTypeName="bool";Ln.prototype.ValueBufferType=Array;Ln.prototype.DefaultInterpolation=ns;Ln.prototype.InterpolantFactoryMethodLinear=void 0;Ln.prototype.InterpolantFactoryMethodSmooth=void 0;class gc extends ii{}gc.prototype.ValueTypeName="color";class os extends ii{}os.prototype.ValueTypeName="number";class eg extends ds{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=(i-t)/(n-t);let c=e*a;for(let h=c+a;c!==h;c+=4)kt.slerpFlat(s,0,r,c-a,r,c,l);return s}}class en extends ii{InterpolantFactoryMethodLinear(e){return new eg(this.times,this.values,this.getValueSize(),e)}}en.prototype.ValueTypeName="quaternion";en.prototype.DefaultInterpolation=bn;en.prototype.InterpolantFactoryMethodSmooth=void 0;class Qn extends ii{}Qn.prototype.ValueTypeName="string";Qn.prototype.ValueBufferType=Array;Qn.prototype.DefaultInterpolation=ns;Qn.prototype.InterpolantFactoryMethodLinear=void 0;Qn.prototype.InterpolantFactoryMethodSmooth=void 0;class ls extends ii{}ls.prototype.ValueTypeName="vector";class pa{constructor(e,t=-1,i,n=Ia){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Xt(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],i=e.tracks,n=1/(e.fps||1);for(let r=0,a=i.length;r!==a;++r)t.push(ig(i[r]).scale(n));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,r=i.length;s!==r;++s)t.push(ii.toJSON(i[s]));return n}static CreateFromMorphTargetSequence(e,t,i,n){const s=t.length,r=[];for(let a=0;a<s;a++){let l=[],c=[];l.push((a+s-1)%s,a,(a+1)%s),c.push(0,1,0);const h=jp(l);l=hl(l,1,h),c=hl(c,1,h),!n&&l[0]===0&&(l.push(s),c.push(c[0])),r.push(new os(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/i))}return new this(e,-1,r)}static findByName(e,t){let i=e;if(!Array.isArray(e)){const n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){const n={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(s);if(h&&h.length>1){const u=h[1];let d=n[u];d||(n[u]=d=[]),d.push(c)}}const r=[];for(const a in n)r.push(this.CreateFromMorphTargetSequence(a,n[a],t,i));return r}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const i=function(u,d,f,g,p){if(f.length!==0){const A=[],m=[];fc(f,A,m,g),A.length!==0&&p.push(new u(d,A,m))}},n=[],s=e.name||"default",r=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let p=0;p<d[g].morphTargets.length;p++)f[d[g].morphTargets[p]]=-1;for(const p in f){const A=[],m=[];for(let I=0;I!==d[g].morphTargets.length;++I){const _=d[g];A.push(_.time),m.push(_.morphTarget===p?1:0)}n.push(new os(".morphTargetInfluence["+p+"]",A,m))}l=f.length*r}else{const f=".bones["+t[u].name+"]";i(ls,f+".position",d,"pos",n),i(en,f+".quaternion",d,"rot",n),i(ls,f+".scale",d,"scl",n)}}return n.length===0?null:new this(s,l,n,a)}resetDuration(){const e=this.tracks;let t=0;for(let i=0,n=e.length;i!==n;++i){const s=this.tracks[i];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function tg(o){switch(o.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return os;case"vector":case"vector2":case"vector3":case"vector4":return ls;case"color":return gc;case"quaternion":return en;case"bool":case"boolean":return Ln;case"string":return Qn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+o)}function ig(o){if(o.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=tg(o.type);if(o.times===void 0){const t=[],i=[];fc(o.keys,t,i,"value"),o.times=t,o.values=i}return e.parse!==void 0?e.parse(o):new e(o.name,o.times,o.values,o.interpolation)}const Bn={enabled:!1,files:{},add:function(o,e){this.enabled!==!1&&(this.files[o]=e)},get:function(o){if(this.enabled!==!1)return this.files[o]},remove:function(o){delete this.files[o]},clear:function(){this.files={}}};class mc{constructor(e,t,i){const n=this;let s=!1,r=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.itemStart=function(h){a++,s===!1&&n.onStart!==void 0&&n.onStart(h,r,a),s=!0},this.itemEnd=function(h){r++,n.onProgress!==void 0&&n.onProgress(h,r,a),r===a&&(s=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],g=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const ng=new mc;class ki{constructor(e){this.manager=e!==void 0?e:ng,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(n,s){i.load(e,n,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const hi={};class sg extends Error{constructor(e,t){super(e),this.response=t}}class Qi extends ki{constructor(e){super(e)}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Bn.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(hi[e]!==void 0){hi[e].push({onLoad:t,onProgress:i,onError:n});return}hi[e]=[],hi[e].push({onLoad:t,onProgress:i,onError:n});const r=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(r).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=hi[e],u=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),f=d?parseInt(d):0,g=f!==0;let p=0;const A=new ReadableStream({start(m){I();function I(){u.read().then(({done:_,value:v})=>{if(_)m.close();else{p+=v.byteLength;const E=new ProgressEvent("progress",{lengthComputable:g,loaded:p,total:f});for(let b=0,B=h.length;b<B;b++){const x=h[b];x.onProgress&&x.onProgress(E)}m.enqueue(v),I()}})}}});return new Response(A)}else throw new sg(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{Bn.add(e,c);const h=hi[e];delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=hi[e];if(h===void 0)throw this.manager.itemError(e),c;delete hi[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class rg extends ki{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Bn.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a=as("img");function l(){h(),Bn.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(u){h(),n&&n(u),s.manager.itemError(e),s.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class ag extends ki{constructor(e){super(e)}load(e,t,i,n){const s=this,r=new Ba,a=new Qi(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?r.image=c.image:c.data!==void 0&&(r.image.width=c.width,r.image.height=c.height,r.image.data=c.data),r.wrapS=c.wrapS!==void 0?c.wrapS:vt,r.wrapT=c.wrapT!==void 0?c.wrapT:vt,r.magFilter=c.magFilter!==void 0?c.magFilter:Je,r.minFilter=c.minFilter!==void 0?c.minFilter:Je,r.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.encoding!==void 0&&(r.encoding=c.encoding),c.flipY!==void 0&&(r.flipY=c.flipY),c.format!==void 0&&(r.format=c.format),c.type!==void 0&&(r.type=c.type),c.mipmaps!==void 0&&(r.mipmaps=c.mipmaps,r.minFilter=Ci),c.mipmapCount===1&&(r.minFilter=Je),c.generateMipmaps!==void 0&&(r.generateMipmaps=c.generateMipmaps),r.needsUpdate=!0,t&&t(r,c))},i,n),r}}class Qa extends ki{constructor(e){super(e)}load(e,t,i,n){const s=new lt,r=new rg(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},i,n),s}}class Pa extends qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ie(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const kr=new ve,ul=new T,dl=new T;class Fa{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new ve,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wa,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;ul.setFromMatrixPosition(e.matrixWorld),t.position.copy(ul),dl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(dl),t.updateMatrixWorld(),kr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(kr),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class og extends Fa{constructor(){super(new ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,i=rs*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(i!==t.fov||n!==t.aspect||s!==t.far)&&(t.fov=i,t.aspect=n,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class lg extends Pa{constructor(e,t,i=0,n=Math.PI/3,s=0,r=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.distance=i,this.angle=n,this.penumbra=s,this.decay=r,this.map=null,this.shadow=new og}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Al=new ve,Vn=new T,Gr=new T;class cg extends Fa{constructor(){super(new ft(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new Ve(2,1,1,1),new Ve(0,1,1,1),new Ve(3,1,1,1),new Ve(1,1,1,1),new Ve(3,0,1,1),new Ve(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,n=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Vn.setFromMatrixPosition(e.matrixWorld),i.position.copy(Vn),Gr.copy(i.position),Gr.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(Gr),i.updateMatrixWorld(),n.makeTranslation(-Vn.x,-Vn.y,-Vn.z),Al.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al)}}class hg extends Pa{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new cg}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ug extends Fa{constructor(){super(new nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class dg extends Pa{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.shadow=new ug}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class $i{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let i=0,n=e.length;i<n;i++)t+=String.fromCharCode(e[i]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Ag extends ki{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,r=Bn.get(e);if(r!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(r),s.manager.itemEnd(e)},0),r;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Bn.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){n&&n(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class _c{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=fl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=fl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function fl(){return(typeof performance>"u"?Date:performance).now()}class fg{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,s,r;switch(t){case"quaternion":n=this._slerp,s=this._slerpAdditive,r=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,s=this._select,r=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,s=this._lerpAdditive,r=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=s,this._setIdentity=r,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const i=this.buffer,n=this.valueSize,s=e*n+n;let r=this.cumulativeWeight;if(r===0){for(let a=0;a!==n;++a)i[s+a]=i[a];r=t}else{r+=t;const a=t/r;this._mixBufferRegion(i,s,0,a,n)}this.cumulativeWeight=r}accumulateAdditive(e){const t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,i=this.buffer,n=e*t+t,s=this.cumulativeWeight,r=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(i,n,l,1-s,t)}r>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(i[l]!==i[l+t]){a.setValue(i,n);break}}saveOriginalState(){const e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let s=i,r=n;s!==r;++s)t[s]=t[n+s%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,s){if(n>=.5)for(let r=0;r!==s;++r)e[t+r]=e[i+r]}_slerp(e,t,i,n){kt.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,s){const r=this._workIndex*s;kt.multiplyQuaternionsFlat(e,r,e,t,e,i),kt.slerpFlat(e,t,e,t,e,r,n)}_lerp(e,t,i,n,s){const r=1-n;for(let a=0;a!==s;++a){const l=t+a;e[l]=e[l]*r+e[i+a]*n}}_lerpAdditive(e,t,i,n,s){for(let r=0;r!==s;++r){const a=t+r;e[a]=e[a]+e[i+r]*n}}}const Na="\\[\\]\\.:\\/",pg=new RegExp("["+Na+"]","g"),Ua="[^"+Na+"]",gg="[^"+Na.replace("\\.","")+"]",mg=/((?:WC+[\/:])*)/.source.replace("WC",Ua),_g=/(WCOD+)?/.source.replace("WCOD",gg),xg=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Ua),Eg=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Ua),Ig=new RegExp("^"+mg+_g+xg+Eg+"$"),Cg=["material","materials","bones","map"];class vg{constructor(e,t,i){const n=i||Ge.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();const i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){const i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,s=i.length;n!==s;++n)i[n].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}}class Ge{constructor(e,t,i){this.path=t,this.parsedPath=i||Ge.parseTrackName(t),this.node=Ge.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new Ge.Composite(e,t,i):new Ge(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(pg,"")}static parseTrackName(e){const t=Ig.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){const s=i.nodeName.substring(n+1);Cg.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){const i=function(s){for(let r=0;r<s.length;r++){const a=s[r];if(a.name===t||a.uuid===t)return a;const l=i(a.children);if(l)return l}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const i=this.resolvedProperty;for(let n=0,s=i.length;n!==s;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,i=t.objectName,n=t.propertyName;let s=t.propertyIndex;if(e||(e=Ge.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=t.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const r=e[n];if(r===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=r,this.propertyIndex=s}else r.fromArray!==void 0&&r.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=r):Array.isArray(r)?(l=this.BindingType.EntireArray,this.resolvedProperty=r):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ge.Composite=vg;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class yg{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;const s=t.tracks,r=s.length,a=new Array(r),l={endingStart:xn,endingEnd:xn};for(let c=0;c!==r;++c){const h=s[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(r),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Ch,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i){if(e.fadeOut(t),this.fadeIn(t),i){const n=this._clip.duration,s=e._clip.duration,r=s/n,a=n/s;e.warp(1,r,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,i){return e.crossFadeFrom(this,t,i)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){const n=this._mixer,s=n.time,r=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=n._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=s,l[1]=s+i,c[0]=e/r,c[1]=t/r,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*i;l<0||i===0?t=0:(this._startTime=null,t=i*l)}t*=this._updateTimeScale(e);const r=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case yh:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulateAdditive(a);break;case Ia:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(r),c[h].accumulate(n,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const i=this._weightInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const i=this._timeScaleInterpolant;if(i!==null){const n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,i=this.loop;let n=this.time+e,s=this._loopCount;const r=i===vh;if(e===0)return s===-1?n:r&&(s&1)===1?t-n:n;if(i===Hl){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,r)):this._setEndings(this.repetitions===0,!0,r)),n>=t||n<0){const a=Math.floor(n/t);n-=t*a,s+=Math.abs(a);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,r)}else this._setEndings(!1,!1,r);this._loopCount=s,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=n;if(r&&(s&1)===1)return t-n}return n}_setEndings(e,t,i){const n=this._interpolantSettings;i?(n.endingStart=En,n.endingEnd=En):(e?n.endingStart=this.zeroSlopeAtStart?En:xn:n.endingStart=js,t?n.endingEnd=this.zeroSlopeAtEnd?En:xn:n.endingEnd=js)}_scheduleFading(e,t,i){const n=this._mixer,s=n.time;let r=this._weightInterpolant;r===null&&(r=n._lendControlInterpolant(),this._weightInterpolant=r);const a=r.parameterPositions,l=r.sampleValues;return a[0]=s,l[0]=t,a[1]=s+e,l[1]=i,this}}const wg=new Float32Array(1);class Mg extends Ui{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const i=e._localRoot||this._root,n=e._clip.tracks,s=n.length,r=e._propertyBindings,a=e._interpolants,l=i.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==s;++u){const d=n[u],f=d.name;let g=h[f];if(g!==void 0)++g.referenceCount,r[u]=g;else{if(g=r[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const p=t&&t._propertyBindings[u].binding.parsedPath;g=new fg(Ge.create(i,f,p),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),r[u]=g}a[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const i=(e._localRoot||this._root).uuid,n=e._clip.uuid,s=this._actionsByClip[n];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,n,i)}const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){const n=this._actions,s=this._actionsByClip;let r=s[t];if(r===void 0)r={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=r;else{const a=r.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=n.length,n.push(e),r.actionByRoot[i]=e}_removeInactiveAction(e){const t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,r=this._actionsByClip,a=r[s],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete r[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){const s=t[i];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackAction(e){const t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_addInactiveBinding(e,t,i){const n=this._bindingsByRootAndName,s=this._bindings;let r=n[t];r===void 0&&(r={},n[t]=r),r[i]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,i=e.binding,n=i.rootNode.uuid,s=i.path,r=this._bindingsByRootAndName,a=r[n],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[s],Object.keys(a).length===0&&delete r[n]}_lendBinding(e){const t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_takeBackBinding(e){const t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,s=t[n];e._cacheIndex=n,t[n]=e,s._cacheIndex=i,t[i]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let i=e[t];return i===void 0&&(i=new pc(new Float32Array(2),new Float32Array(2),1,wg),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){const t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,s=t[n];e.__cacheIndex=n,t[n]=e,s.__cacheIndex=i,t[i]=s}clipAction(e,t,i){const n=t||this._root,s=n.uuid;let r=typeof e=="string"?pa.findByName(n,e):e;const a=r!==null?r.uuid:e,l=this._actionsByClip[a];let c=null;if(i===void 0&&(r!==null?i=r.blendMode:i=Ia),l!==void 0){const u=l.actionByRoot[s];if(u!==void 0&&u.blendMode===i)return u;c=l.knownActions[0],r===null&&(r=c._clip)}if(r===null)return null;const h=new yg(this,r,t,i);return this._bindAction(h,c),this._addInactiveAction(h,a,s),h}existingAction(e,t){const i=t||this._root,n=i.uuid,s=typeof e=="string"?pa.findByName(i,e):e,r=s?s.uuid:e,a=this._actionsByClip[r];return a!==void 0&&a.actionByRoot[n]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;const t=this._actions,i=this._nActiveActions,n=this.time+=e,s=Math.sign(e),r=this._accuIndex^=1;for(let c=0;c!==i;++c)t[c]._update(n,e,s,r);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(r);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,i=e.uuid,n=this._actionsByClip,s=n[i];if(s!==void 0){const r=s.knownActions;for(let a=0,l=r.length;a!==l;++a){const c=r[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete n[i]}}uncacheRoot(e){const t=e.uuid,i=this._actionsByClip;for(const r in i){const a=i[r].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const n=this._bindingsByRootAndName,s=n[t];if(s!==void 0)for(const r in s){const a=s[r];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}}class pl{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(ct(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bg extends Ra{constructor(e=10,t=10,i=4473924,n=8947848){i=new Ie(i),n=new Ie(n);const s=t/2,r=e/t,a=e/2,l=[],c=[];for(let d=0,f=0,g=-a;d<=t;d++,g+=r){l.push(-a,0,g,a,0,g),l.push(g,0,-a,g,0,a);const p=d===s?i:n;p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3,p.toArray(c,f),f+=3}const h=new Rt;h.setAttribute("position",new Mt(l,3)),h.setAttribute("color",new Mt(c,3));const u=new rr({vertexColors:!0,toneMapped:!1});super(h,u),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class Sg extends Ra{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],i=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],n=new Rt;n.setAttribute("position",new Mt(t,3)),n.setAttribute("color",new Mt(i,3));const s=new rr({vertexColors:!0,toneMapped:!1});super(n,s),this.type="AxesHelper"}setColors(e,t,i){const n=new Ie,s=this.geometry.attributes.color.array;return n.set(e),n.toArray(s,0),n.toArray(s,3),n.set(t),n.toArray(s,6),n.toArray(s,9),n.set(i),n.toArray(s,12),n.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}const gi=Bg();function Bg(){const o=new ArrayBuffer(4),e=new Float32Array(o),t=new Uint32Array(o),i=new Uint32Array(512),n=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,n[l]=24,n[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,n[l]=-c-1,n[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,n[l]=13,n[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,n[l]=24,n[l|256]=24):(i[l]=31744,i[l|256]=64512,n[l]=13,n[l|256]=13)}const s=new Uint32Array(2048),r=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;!(c&8388608);)c<<=1,h-=8388608;c&=-8388609,h+=947912704,s[l]=c|h}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)r[l]=l<<23;r[31]=1199570944,r[32]=2147483648;for(let l=33;l<63;++l)r[l]=2147483648+(l-32<<23);r[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:i,shiftTable:n,mantissaTable:s,exponentTable:r,offsetTable:a}}function Tg(o){Math.abs(o)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),o=ct(o,-65504,65504),gi.floatView[0]=o;const e=gi.uint32View[0],t=e>>23&511;return gi.baseTable[t]+((e&8388607)>>gi.shiftTable[t])}function Dg(o){const e=o>>10;return gi.uint32View[0]=gi.mantissaTable[gi.offsetTable[e]+(o&1023)]+gi.exponentTable[e],gi.floatView[0]}var Us=Object.freeze({__proto__:null,toHalfFloat:Tg,fromHalfFloat:Dg});typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ea);function Rg(){return new ft(60,window.innerWidth/window.innerHeight,.1,1e3)}function Lg(){return new Op}const gl={type:"change"},Or={type:"start"},ml={type:"end"};class Qg extends Ui{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new T,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},this.touches={ONE:nn.ROTATE,TWO:nn.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(S){S.addEventListener("keydown",bt),this._domElementKeyEvents=S},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(gl),i.update(),s=n.NONE},this.update=function(){const S=new T,P=new kt().setFromUnitVectors(e.up,new T(0,1,0)),le=P.clone().invert(),he=new T,oe=new kt,fe=2*Math.PI;return function(){const Te=i.object.position;S.copy(Te).sub(i.target),S.applyQuaternion(P),a.setFromVector3(S),i.autoRotate&&s===n.NONE&&w(B()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let De=i.minAzimuthAngle,He=i.maxAzimuthAngle;return isFinite(De)&&isFinite(He)&&(De<-Math.PI?De+=fe:De>Math.PI&&(De-=fe),He<-Math.PI?He+=fe:He>Math.PI&&(He-=fe),De<=He?a.theta=Math.max(De,Math.min(He,a.theta)):a.theta=a.theta>(De+He)/2?Math.max(De,a.theta):Math.min(He,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),S.setFromSpherical(a),S.applyQuaternion(le),Te.copy(i.target).add(S),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0)),c=1,u||he.distanceToSquared(i.object.position)>r||8*(1-oe.dot(i.object.quaternion))>r?(i.dispatchEvent(gl),he.copy(i.object.position),oe.copy(i.object.quaternion),u=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",z),i.domElement.removeEventListener("pointerdown",st),i.domElement.removeEventListener("pointercancel",gt),i.domElement.removeEventListener("wheel",Gt),i.domElement.removeEventListener("pointermove",Ze),i.domElement.removeEventListener("pointerup",$e),i._domElementKeyEvents!==null&&i._domElementKeyEvents.removeEventListener("keydown",bt)};const i=this,n={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=n.NONE;const r=1e-6,a=new pl,l=new pl;let c=1;const h=new T;let u=!1;const d=new me,f=new me,g=new me,p=new me,A=new me,m=new me,I=new me,_=new me,v=new me,E=[],b={};function B(){return 2*Math.PI/60/60*i.autoRotateSpeed}function x(){return Math.pow(.95,i.zoomSpeed)}function w(S){l.theta-=S}function R(S){l.phi-=S}const F=function(){const S=new T;return function(le,he){S.setFromMatrixColumn(he,0),S.multiplyScalar(-le),h.add(S)}}(),O=function(){const S=new T;return function(le,he){i.screenSpacePanning===!0?S.setFromMatrixColumn(he,1):(S.setFromMatrixColumn(he,0),S.crossVectors(i.object.up,S)),S.multiplyScalar(le),h.add(S)}}(),Q=function(){const S=new T;return function(le,he){const oe=i.domElement;if(i.object.isPerspectiveCamera){const fe=i.object.position;S.copy(fe).sub(i.target);let Ae=S.length();Ae*=Math.tan(i.object.fov/2*Math.PI/180),F(2*le*Ae/oe.clientHeight,i.object.matrix),O(2*he*Ae/oe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(le*(i.object.right-i.object.left)/i.object.zoom/oe.clientWidth,i.object.matrix),O(he*(i.object.top-i.object.bottom)/i.object.zoom/oe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function D(S){i.object.isPerspectiveCamera?c/=S:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*S)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function G(S){i.object.isPerspectiveCamera?c*=S:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/S)),i.object.updateProjectionMatrix(),u=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function K(S){d.set(S.clientX,S.clientY)}function W(S){I.set(S.clientX,S.clientY)}function k(S){p.set(S.clientX,S.clientY)}function j(S){f.set(S.clientX,S.clientY),g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const P=i.domElement;w(2*Math.PI*g.x/P.clientHeight),R(2*Math.PI*g.y/P.clientHeight),d.copy(f),i.update()}function Z(S){_.set(S.clientX,S.clientY),v.subVectors(_,I),v.y>0?D(x()):v.y<0&&G(x()),I.copy(_),i.update()}function H(S){A.set(S.clientX,S.clientY),m.subVectors(A,p).multiplyScalar(i.panSpeed),Q(m.x,m.y),p.copy(A),i.update()}function Y(S){S.deltaY<0?G(x()):S.deltaY>0&&D(x()),i.update()}function ee(S){let P=!1;switch(S.code){case i.keys.UP:S.ctrlKey||S.metaKey||S.shiftKey?R(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,i.keyPanSpeed),P=!0;break;case i.keys.BOTTOM:S.ctrlKey||S.metaKey||S.shiftKey?R(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(0,-i.keyPanSpeed),P=!0;break;case i.keys.LEFT:S.ctrlKey||S.metaKey||S.shiftKey?w(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(i.keyPanSpeed,0),P=!0;break;case i.keys.RIGHT:S.ctrlKey||S.metaKey||S.shiftKey?w(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):Q(-i.keyPanSpeed,0),P=!0;break}P&&(S.preventDefault(),i.update())}function ie(){if(E.length===1)d.set(E[0].pageX,E[0].pageY);else{const S=.5*(E[0].pageX+E[1].pageX),P=.5*(E[0].pageY+E[1].pageY);d.set(S,P)}}function re(){if(E.length===1)p.set(E[0].pageX,E[0].pageY);else{const S=.5*(E[0].pageX+E[1].pageX),P=.5*(E[0].pageY+E[1].pageY);p.set(S,P)}}function J(){const S=E[0].pageX-E[1].pageX,P=E[0].pageY-E[1].pageY,le=Math.sqrt(S*S+P*P);I.set(0,le)}function Be(){i.enableZoom&&J(),i.enablePan&&re()}function de(){i.enableZoom&&J(),i.enableRotate&&ie()}function _e(S){if(E.length==1)f.set(S.pageX,S.pageY);else{const le=Ee(S),he=.5*(S.pageX+le.x),oe=.5*(S.pageY+le.y);f.set(he,oe)}g.subVectors(f,d).multiplyScalar(i.rotateSpeed);const P=i.domElement;w(2*Math.PI*g.x/P.clientHeight),R(2*Math.PI*g.y/P.clientHeight),d.copy(f)}function ue(S){if(E.length===1)A.set(S.pageX,S.pageY);else{const P=Ee(S),le=.5*(S.pageX+P.x),he=.5*(S.pageY+P.y);A.set(le,he)}m.subVectors(A,p).multiplyScalar(i.panSpeed),Q(m.x,m.y),p.copy(A)}function Ue(S){const P=Ee(S),le=S.pageX-P.x,he=S.pageY-P.y,oe=Math.sqrt(le*le+he*he);_.set(0,oe),v.set(0,Math.pow(_.y/I.y,i.zoomSpeed)),D(v.y),I.copy(_)}function we(S){i.enableZoom&&Ue(S),i.enablePan&&ue(S)}function xe(S){i.enableZoom&&Ue(S),i.enableRotate&&_e(S)}function st(S){i.enabled!==!1&&(E.length===0&&(i.domElement.setPointerCapture(S.pointerId),i.domElement.addEventListener("pointermove",Ze),i.domElement.addEventListener("pointerup",$e)),te(S),S.pointerType==="touch"?M(S):Ye(S))}function Ze(S){i.enabled!==!1&&(S.pointerType==="touch"?C(S):Oe(S))}function $e(S){ne(S),E.length===0&&(i.domElement.releasePointerCapture(S.pointerId),i.domElement.removeEventListener("pointermove",Ze),i.domElement.removeEventListener("pointerup",$e)),i.dispatchEvent(ml),s=n.NONE}function gt(S){ne(S)}function Ye(S){let P;switch(S.button){case 0:P=i.mouseButtons.LEFT;break;case 1:P=i.mouseButtons.MIDDLE;break;case 2:P=i.mouseButtons.RIGHT;break;default:P=-1}switch(P){case di.DOLLY:if(i.enableZoom===!1)return;W(S),s=n.DOLLY;break;case di.ROTATE:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enablePan===!1)return;k(S),s=n.PAN}else{if(i.enableRotate===!1)return;K(S),s=n.ROTATE}break;case di.PAN:if(S.ctrlKey||S.metaKey||S.shiftKey){if(i.enableRotate===!1)return;K(S),s=n.ROTATE}else{if(i.enablePan===!1)return;k(S),s=n.PAN}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Or)}function Oe(S){switch(s){case n.ROTATE:if(i.enableRotate===!1)return;j(S);break;case n.DOLLY:if(i.enableZoom===!1)return;Z(S);break;case n.PAN:if(i.enablePan===!1)return;H(S);break}}function Gt(S){i.enabled===!1||i.enableZoom===!1||s!==n.NONE||(S.preventDefault(),i.dispatchEvent(Or),Y(S),i.dispatchEvent(ml))}function bt(S){i.enabled===!1||i.enablePan===!1||ee(S)}function M(S){switch(ae(S),E.length){case 1:switch(i.touches.ONE){case nn.ROTATE:if(i.enableRotate===!1)return;ie(),s=n.TOUCH_ROTATE;break;case nn.PAN:if(i.enablePan===!1)return;re(),s=n.TOUCH_PAN;break;default:s=n.NONE}break;case 2:switch(i.touches.TWO){case nn.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Be(),s=n.TOUCH_DOLLY_PAN;break;case nn.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;de(),s=n.TOUCH_DOLLY_ROTATE;break;default:s=n.NONE}break;default:s=n.NONE}s!==n.NONE&&i.dispatchEvent(Or)}function C(S){switch(ae(S),s){case n.TOUCH_ROTATE:if(i.enableRotate===!1)return;_e(S),i.update();break;case n.TOUCH_PAN:if(i.enablePan===!1)return;ue(S),i.update();break;case n.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;we(S),i.update();break;case n.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;xe(S),i.update();break;default:s=n.NONE}}function z(S){i.enabled!==!1&&S.preventDefault()}function te(S){E.push(S)}function ne(S){delete b[S.pointerId];for(let P=0;P<E.length;P++)if(E[P].pointerId==S.pointerId){E.splice(P,1);return}}function ae(S){let P=b[S.pointerId];P===void 0&&(P=new me,b[S.pointerId]=P),P.set(S.pageX,S.pageY)}function Ee(S){const P=S.pointerId===E[0].pointerId?E[1]:E[0];return b[P.pointerId]}i.domElement.addEventListener("contextmenu",z),i.domElement.addEventListener("pointerdown",st),i.domElement.addEventListener("pointercancel",gt),i.domElement.addEventListener("wheel",Gt,{passive:!1}),this.update()}}function Pg(o,e){const t=new Qg(o,e);return t.enableDamping=!0,t.dampingFactor=.1,t.enableZoom=!0,t.target.set(.7,.2,0),t.update(),t}function Fg(){const o=new lc({antialias:!0});return o.toneMapping=Ul,o.toneMappingExposure=1,o.outputEncoding=Se,o.shadowMap.enabled=!0,o.shadowMap.type=Fl,o.physicallyCorrectLights=!0,o.xr.enabled=!0,o}const _l=function(o,e,t,i){e.aspect=o.clientWidth/o.clientHeight,e.updateProjectionMatrix();let n=1;/Android|iPhone/i.test(navigator.userAgent)&&(n=.5),t.setSize(o.clientWidth,o.clientHeight),t.setPixelRatio(window.devicePixelRatio*n),i.setSize(o.clientWidth,o.clientHeight),i.setPixelRatio(window.devicePixelRatio*n)};class Ng{constructor(e,t,i,n){_l(e,t,i,n),window.addEventListener("resize",()=>{_l(e,t,i,n)})}}function Ug(o,e,t,i){t.enableZoom=!0,t.enablePan=!0,t.enableRotate=!0,t.minPolarAngle=t.maxPolarAngle=1,t.listenToKeyEvents(window),t.mouseButtons={LEFT:di.ROTATE,MIDDLE:di.DOLLY,RIGHT:di.PAN},t.maxDistance=10,t.update()}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */let Ii=class{constructor(e,t,i,n,s="div"){this.parent=e,this.object=t,this.property=i,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(n),this.$name=document.createElement("div"),this.$name.classList.add("name"),Ii.nextNameID=Ii.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Ii.nextNameID,this.$widget=document.createElement(s),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(i)}name(e){return this._name=e,this.$name.innerHTML=e,this}onChange(e){return this._onChange=e,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(e=!0){return this.disable(!e)}disable(e=!0){return e===this._disabled||(this._disabled=e,this.domElement.classList.toggle("disabled",e),this.$disable.toggleAttribute("disabled",e)),this}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(e){const t=this.parent.add(this.object,this.property,e);return t.name(this._name),this.destroy(),t}min(e){return this}max(e){return this}step(e){return this}decimals(e){return this}listen(e=!0){return this._listening=e,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const e=this.save();e!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=e}getValue(){return this.object[this.property]}setValue(e){return this.object[this.property]=e,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(e){return this.setValue(e),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}};class kg extends Ii{constructor(e,t,i){super(e,t,i,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function ga(o){let e,t;return(e=o.match(/(#|0x)?([a-f0-9]{6})/i))?t=e[2]:(e=o.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?t=parseInt(e[1]).toString(16).padStart(2,0)+parseInt(e[2]).toString(16).padStart(2,0)+parseInt(e[3]).toString(16).padStart(2,0):(e=o.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(t=e[1]+e[1]+e[2]+e[2]+e[3]+e[3]),!!t&&"#"+t}const Gg={isPrimitive:!0,match:o=>typeof o=="string",fromHexString:ga,toHexString:ga},cs={isPrimitive:!0,match:o=>typeof o=="number",fromHexString:o=>parseInt(o.substring(1),16),toHexString:o=>"#"+o.toString(16).padStart(6,0)},Og={isPrimitive:!1,match:Array.isArray,fromHexString(o,e,t=1){const i=cs.fromHexString(o);e[0]=(i>>16&255)/255*t,e[1]=(i>>8&255)/255*t,e[2]=(255&i)/255*t},toHexString:([o,e,t],i=1)=>cs.toHexString(o*(i=255/i)<<16^e*i<<8^t*i<<0)},Hg={isPrimitive:!1,match:o=>Object(o)===o,fromHexString(o,e,t=1){const i=cs.fromHexString(o);e.r=(i>>16&255)/255*t,e.g=(i>>8&255)/255*t,e.b=(255&i)/255*t},toHexString:({r:o,g:e,b:t},i=1)=>cs.toHexString(o*(i=255/i)<<16^e*i<<8^t*i<<0)},zg=[Gg,cs,Og,Hg];class Vg extends Ii{constructor(e,t,i,n){var s;super(e,t,i,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(s=this.initialValue,zg.find(r=>r.match(s))),this._rgbScale=n,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const r=ga(this.$text.value);r&&this._setValueFromHexString(r)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(e){if(this._format.isPrimitive){const t=this._format.fromHexString(e);this.setValue(t)}else this._format.fromHexString(e,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(e){return this._setValueFromHexString(e),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class Hr extends Ii{constructor(e,t,i){super(e,t,i,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",n=>{n.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class Wg extends Ii{constructor(e,t,i,n,s,r){super(e,t,i,"number"),this._initInput(),this.min(n),this.max(s);const a=r!==void 0;this.step(a?r:this._getImplicitStep(),a),this.updateDisplay()}decimals(e){return this._decimals=e,this.updateDisplay(),this}min(e){return this._min=e,this._onUpdateMinMax(),this}max(e){return this._max=e,this._onUpdateMinMax(),this}step(e,t=!0){return this._step=e,this._stepExplicit=t,this}updateDisplay(){const e=this.getValue();if(this._hasSlider){let t=(e-this._min)/(this._max-this._min);t=Math.max(0,Math.min(t,1)),this.$fill.style.width=100*t+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?e:e.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const e=h=>{const u=parseFloat(this.$input.value);isNaN(u)||(this._snapClampSetValue(u+h),this.$input.value=this.getValue())};let t,i,n,s,r,a=!1;const l=h=>{if(a){const u=h.clientX-t,d=h.clientY-i;Math.abs(d)>5?(h.preventDefault(),this.$input.blur(),a=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(u)>5&&c()}if(!a){const u=h.clientY-n;r-=u*this._step*this._arrowKeyMultiplier(h),s+r>this._max?r=this._max-s:s+r<this._min&&(r=this._min-s),this._snapClampSetValue(s+r)}n=h.clientY},c=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",c)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),e(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),e(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{t=h.clientX,i=n=h.clientY,a=!0,s=this.getValue(),r=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",c)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const e=d=>{const f=this.$slider.getBoundingClientRect();let g=(p=d,A=f.left,m=f.right,I=this._min,_=this._max,(p-A)/(m-A)*(_-I)+I);var p,A,m,I,_;this._snapClampSetValue(g)},t=d=>{e(d.clientX)},i=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",t),window.removeEventListener("mouseup",i)};let n,s,r=!1;const a=d=>{d.preventDefault(),this._setDraggingStyle(!0),e(d.touches[0].clientX),r=!1},l=d=>{if(r){const f=d.touches[0].clientX-n,g=d.touches[0].clientY-s;Math.abs(f)>Math.abs(g)?a(d):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c))}else d.preventDefault(),e(d.touches[0].clientX)},c=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",c)},h=this._callOnFinishChange.bind(this);let u;this.$slider.addEventListener("mousedown",d=>{this._setDraggingStyle(!0),e(d.clientX),window.addEventListener("mousemove",t),window.addEventListener("mouseup",i)}),this.$slider.addEventListener("touchstart",d=>{d.touches.length>1||(this._hasScrollBar?(n=d.touches[0].clientX,s=d.touches[0].clientY,r=!0):a(d),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",c))},{passive:!1}),this.$slider.addEventListener("wheel",d=>{if(Math.abs(d.deltaX)<Math.abs(d.deltaY)&&this._hasScrollBar)return;d.preventDefault();const f=this._normalizeMouseWheel(d)*this._step;this._snapClampSetValue(this.getValue()+f),this.$input.value=this.getValue(),clearTimeout(u),u=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(e,t="horizontal"){this.$slider&&this.$slider.classList.toggle("active",e),document.body.classList.toggle("lil-gui-dragging",e),document.body.classList.toggle("lil-gui-"+t,e)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(e){let{deltaX:t,deltaY:i}=e;return Math.floor(e.deltaY)!==e.deltaY&&e.wheelDelta&&(t=0,i=-e.wheelDelta/120,i*=this._stepExplicit?1:10),t+-i}_arrowKeyMultiplier(e){let t=this._stepExplicit?1:10;return e.shiftKey?t*=10:e.altKey&&(t/=10),t}_snap(e){const t=Math.round(e/this._step)*this._step;return parseFloat(t.toPrecision(15))}_clamp(e){return e<this._min&&(e=this._min),e>this._max&&(e=this._max),e}_snapClampSetValue(e){this.setValue(this._clamp(this._snap(e)))}get _hasScrollBar(){const e=this.parent.root.$children;return e.scrollHeight>e.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class qg extends Ii{constructor(e,t,i,n){super(e,t,i,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(n)?n:Object.values(n),this._names=Array.isArray(n)?n:Object.keys(n),this._names.forEach(s=>{const r=document.createElement("option");r.innerHTML=s,this.$select.appendChild(r)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const e=this.getValue(),t=this._values.indexOf(e);return this.$select.selectedIndex=t,this.$display.innerHTML=t===-1?e:this._names[t],this}}class Yg extends Ii{constructor(e,t,i){super(e,t,i,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",n=>{n.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let xl=!1,ka=class{constructor({parent:e,autoPlace:t=e===void 0,container:i,width:n,title:s="Controls",injectStyles:r=!0,touchStyles:a=!0}={}){if(this.parent=e,this.root=e?e.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(s),a&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!xl&&r&&(function(l){const c=document.createElement("style");c.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(c,h):document.head.appendChild(c)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),xl=!0),i?i.appendChild(this.domElement):t&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),n&&this.domElement.style.setProperty("--width",n+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(e,t,i,n,s){if(Object(i)===i)return new qg(this,e,t,i);const r=e[t];switch(typeof r){case"number":return new Wg(this,e,t,i,n,s);case"boolean":return new kg(this,e,t);case"string":return new Yg(this,e,t);case"function":return new Hr(this,e,t)}console.error(`gui.add failed
	property:`,t,`
	object:`,e,`
	value:`,r)}addColor(e,t,i=1){return new Vg(this,e,t,i)}addFolder(e){return new ka({parent:this,title:e})}load(e,t=!0){return e.controllers&&this.controllers.forEach(i=>{i instanceof Hr||i._name in e.controllers&&i.load(e.controllers[i._name])}),t&&e.folders&&this.folders.forEach(i=>{i._title in e.folders&&i.load(e.folders[i._title])}),this}save(e=!0){const t={controllers:{},folders:{}};return this.controllers.forEach(i=>{if(!(i instanceof Hr)){if(i._name in t.controllers)throw new Error(`Cannot save GUI with duplicate property "${i._name}"`);t.controllers[i._name]=i.save()}}),e&&this.folders.forEach(i=>{if(i._title in t.folders)throw new Error(`Cannot save GUI with duplicate folder "${i._title}"`);t.folders[i._title]=i.save()}),t}open(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(e=!0){return this._hidden=!e,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(e=!0){return this._closed=!e,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const t=this.$children.clientHeight;this.$children.style.height=t+"px",this.domElement.classList.add("transition");const i=s=>{s.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",i))};this.$children.addEventListener("transitionend",i);const n=e?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!e),requestAnimationFrame(()=>{this.$children.style.height=n+"px"})}),this}title(e){return this._title=e,this.$title.innerHTML=e,this}reset(e=!0){return(e?this.controllersRecursive():this.controllers).forEach(t=>t.reset()),this}onChange(e){return this._onChange=e,this}_callOnChange(e){this.parent&&this.parent._callOnChange(e),this._onChange!==void 0&&this._onChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}onFinishChange(e){return this._onFinishChange=e,this}_callOnFinishChange(e){this.parent&&this.parent._callOnFinishChange(e),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:e.object,property:e.property,value:e.getValue(),controller:e})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(e=>e.destroy())}controllersRecursive(){let e=Array.from(this.controllers);return this.folders.forEach(t=>{e=e.concat(t.controllersRecursive())}),e}foldersRecursive(){let e=Array.from(this.folders);return this.folders.forEach(t=>{e=e.concat(t.foldersRecursive())}),e}};class Jg extends ki{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new $g(t)}),this.register(function(t){return new am(t)}),this.register(function(t){return new om(t)}),this.register(function(t){return new tm(t)}),this.register(function(t){return new im(t)}),this.register(function(t){return new nm(t)}),this.register(function(t){return new sm(t)}),this.register(function(t){return new Zg(t)}),this.register(function(t){return new rm(t)}),this.register(function(t){return new em(t)}),this.register(function(t){return new Kg(t)}),this.register(function(t){return new lm(t)}),this.register(function(t){return new cm(t)})}load(e,t,i,n){const s=this;let r;this.resourcePath!==""?r=this.resourcePath:this.path!==""?r=this.path:r=$i.extractUrlBase(e),this.manager.itemStart(e);const a=function(c){n?n(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Qi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,r,function(h){t(h),s.manager.itemEnd(e)},a)}catch(h){a(h)}},i,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let s;const r={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if($i.decodeText(new Uint8Array(e,0,4))===xc){try{r[Pe.KHR_BINARY_GLTF]=new hm(e)}catch(h){n&&n(h);return}s=JSON.parse(r[Pe.KHR_BINARY_GLTF].content)}else s=JSON.parse($i.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new vm(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let c=0;c<this.pluginCallbacks.length;c++){const h=this.pluginCallbacks[c](l);a[h.name]=h,r[h.name]=!0}if(s.extensionsUsed)for(let c=0;c<s.extensionsUsed.length;++c){const h=s.extensionsUsed[c],u=s.extensionsRequired||[];switch(h){case Pe.KHR_MATERIALS_UNLIT:r[h]=new jg;break;case Pe.KHR_DRACO_MESH_COMPRESSION:r[h]=new um(s,this.dracoLoader);break;case Pe.KHR_TEXTURE_TRANSFORM:r[h]=new dm;break;case Pe.KHR_MESH_QUANTIZATION:r[h]=new Am;break;default:u.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(r),l.setPlugins(a),l.parse(i,n)}parseAsync(e,t){const i=this;return new Promise(function(n,s){i.parse(e,t,n,s)})}}function Xg(){let o={};return{get:function(e){return o[e]},add:function(e,t){o[e]=t},remove:function(e){delete o[e]},removeAll:function(){o={}}}}const Pe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class Kg{constructor(e){this.parser=e,this.name=Pe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){const s=t[i];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,i="light:"+e;let n=t.cache.get(i);if(n)return n;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const h=new Ie(16777215);l.color!==void 0&&h.fromArray(l.color);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new dg(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new hg(h),c.distance=u;break;case"spot":c=new lg(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Di(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),n=Promise.resolve(c),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,i=this.parser,s=i.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return i._getNodeRef(t.cache,a,l)})}}class jg{constructor(){this.name=Pe.KHR_MATERIALS_UNLIT}getMaterialType(){return _i}extendParams(e,t,i){const n=[];e.color=new Ie(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const r=s.baseColorFactor;e.color.fromArray(r),e.opacity=r[3]}s.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",s.baseColorTexture,Se))}return Promise.all(n)}}class Zg{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class $g{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];if(r.clearcoatFactor!==void 0&&(t.clearcoat=r.clearcoatFactor),r.clearcoatTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatMap",r.clearcoatTexture)),r.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=r.clearcoatRoughnessFactor),r.clearcoatRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"clearcoatRoughnessMap",r.clearcoatRoughnessTexture)),r.clearcoatNormalTexture!==void 0&&(s.push(i.assignTexture(t,"clearcoatNormalMap",r.clearcoatNormalTexture)),r.clearcoatNormalTexture.scale!==void 0)){const a=r.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(a,a)}return Promise.all(s)}}class em{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.iridescenceFactor!==void 0&&(t.iridescence=r.iridescenceFactor),r.iridescenceTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceMap",r.iridescenceTexture)),r.iridescenceIor!==void 0&&(t.iridescenceIOR=r.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),r.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=r.iridescenceThicknessMinimum),r.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=r.iridescenceThicknessMaximum),r.iridescenceThicknessTexture!==void 0&&s.push(i.assignTexture(t,"iridescenceThicknessMap",r.iridescenceThicknessTexture)),Promise.all(s)}}class tm{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_SHEEN}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Ie(0,0,0),t.sheenRoughness=0,t.sheen=1;const r=n.extensions[this.name];return r.sheenColorFactor!==void 0&&t.sheenColor.fromArray(r.sheenColorFactor),r.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=r.sheenRoughnessFactor),r.sheenColorTexture!==void 0&&s.push(i.assignTexture(t,"sheenColorMap",r.sheenColorTexture,Se)),r.sheenRoughnessTexture!==void 0&&s.push(i.assignTexture(t,"sheenRoughnessMap",r.sheenRoughnessTexture)),Promise.all(s)}}class im{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];return r.transmissionFactor!==void 0&&(t.transmission=r.transmissionFactor),r.transmissionTexture!==void 0&&s.push(i.assignTexture(t,"transmissionMap",r.transmissionTexture)),Promise.all(s)}}class nm{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_VOLUME}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];t.thickness=r.thicknessFactor!==void 0?r.thicknessFactor:0,r.thicknessTexture!==void 0&&s.push(i.assignTexture(t,"thicknessMap",r.thicknessTexture)),t.attenuationDistance=r.attenuationDistance||1/0;const a=r.attenuationColor||[1,1,1];return t.attenuationColor=new Ie(a[0],a[1],a[2]),Promise.all(s)}}class sm{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_IOR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const n=this.parser.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=n.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class rm{constructor(e){this.parser=e,this.name=Pe.KHR_MATERIALS_SPECULAR}getMaterialType(e){const i=this.parser.json.materials[e];return!i.extensions||!i.extensions[this.name]?null:tn}extendMaterialParams(e,t){const i=this.parser,n=i.json.materials[e];if(!n.extensions||!n.extensions[this.name])return Promise.resolve();const s=[],r=n.extensions[this.name];t.specularIntensity=r.specularFactor!==void 0?r.specularFactor:1,r.specularTexture!==void 0&&s.push(i.assignTexture(t,"specularIntensityMap",r.specularTexture));const a=r.specularColorFactor||[1,1,1];return t.specularColor=new Ie(a[0],a[1],a[2]),r.specularColorTexture!==void 0&&s.push(i.assignTexture(t,"specularColorMap",r.specularColorTexture,Se)),Promise.all(s)}}class am{constructor(e){this.parser=e,this.name=Pe.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;const s=n.extensions[this.name],r=t.options.ktx2Loader;if(!r){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,r)}}class om{constructor(e){this.parser=e,this.name=Pe.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,i=this.parser,n=i.json,s=n.textures[e];if(!s.extensions||!s.extensions[t])return null;const r=s.extensions[t],a=n.images[r.source];let l=i.textureLoader;if(a.uri){const c=i.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return i.loadTextureImage(e,r.source,l);if(n.extensionsRequired&&n.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return i.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class lm{constructor(e){this.name=Pe.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){const n=i.extensions[this.name],s=this.parser.getDependency("buffer",n.buffer),r=this.parser.options.meshoptDecoder;if(!r||!r.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const l=n.byteOffset||0,c=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(a,l,c);return r.decodeGltfBufferAsync?r.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):r.ready.then(function(){const f=new ArrayBuffer(h*u);return r.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}}class cm{constructor(e){this.name=Pe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const n=t.meshes[i.mesh];for(const c of n.primitives)if(c.mode!==zt.TRIANGLES&&c.mode!==zt.TRIANGLE_STRIP&&c.mode!==zt.TRIANGLE_FAN&&c.mode!==void 0)return null;const r=i.extensions[this.name].attributes,a=[],l={};for(const c in r)a.push(this.parser.getDependency("accessor",r[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const g of u){const p=new ve,A=new T,m=new kt,I=new T(1,1,1),_=new hc(g.geometry,g.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&A.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&m.fromBufferAttribute(l.ROTATION,v),l.SCALE&&I.fromBufferAttribute(l.SCALE,v),_.setMatrixAt(v,p.compose(A,m,I));for(const v in l)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&g.geometry.setAttribute(v,l[v]);qe.prototype.copy.call(_,g),_.frustumCulled=!1,this.parser.assignFinalMaterial(_),f.push(_)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const xc="glTF",Wn=12,El={JSON:1313821514,BIN:5130562};class hm{constructor(e){this.name=Pe.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Wn);if(this.header={magic:$i.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==xc)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Wn,n=new DataView(e,Wn);let s=0;for(;s<i;){const r=n.getUint32(s,!0);s+=4;const a=n.getUint32(s,!0);if(s+=4,a===El.JSON){const l=new Uint8Array(e,Wn+s,r);this.content=$i.decodeText(l)}else if(a===El.BIN){const l=Wn+s;this.body=e.slice(l,l+r)}s+=r}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class um{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Pe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const i=this.json,n=this.dracoLoader,s=e.extensions[this.name].bufferView,r=e.extensions[this.name].attributes,a={},l={},c={};for(const h in r){const u=ma[h]||h.toLowerCase();a[u]=r[h]}for(const h in e.attributes){const u=ma[h]||h.toLowerCase();if(r[h]!==void 0){const d=i.accessors[e.attributes[h]],f=vn[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",s).then(function(h){return new Promise(function(u){n.decodeDracoFile(h,function(d){for(const f in d.attributes){const g=d.attributes[f],p=l[f];p!==void 0&&(g.normalized=p)}u(d)},a,c)})})}}class dm{constructor(){this.name=Pe.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Am{constructor(){this.name=Pe.KHR_MESH_QUANTIZATION}}class Ec extends ds{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){const t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,s=e*n*3+n;for(let r=0;r!==n;r++)t[r]=i[s+r];return t}interpolate_(e,t,i,n){const s=this.resultBuffer,r=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,g=e*c,p=g-c,A=-2*f+3*d,m=f-d,I=1-A,_=m-d+u;for(let v=0;v!==a;v++){const E=r[p+v+a],b=r[p+v+l]*h,B=r[g+v+a],x=r[g+v]*h;s[v]=I*E+_*b+A*B+m*x}return s}}const fm=new kt;class pm extends Ec{interpolate_(e,t,i,n){const s=super.interpolate_(e,t,i,n);return fm.fromArray(s).normalize().toArray(s),s}}const zt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},vn={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Il={9728:Ne,9729:Je,9984:na,9985:Gl,9986:Hs,9987:Ci},Cl={33071:vt,33648:Ks,10497:Ni},zr={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ma={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Si={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},gm={CUBICSPLINE:void 0,LINEAR:bn,STEP:ns},Vr={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function mm(o){return o.DefaultMaterial===void 0&&(o.DefaultMaterial=new La({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Fi})),o.DefaultMaterial}function qn(o,e,t){for(const i in t.extensions)o[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Di(o,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(o.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function _m(o,e,t){let i=!1,n=!1,s=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(s=!0),i&&n&&s)break}if(!i&&!n&&!s)return Promise.resolve(o);const r=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(i){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):o.attributes.position;r.push(d)}if(n){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):o.attributes.normal;a.push(d)}if(s){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):o.attributes.color;l.push(d)}}return Promise.all([Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return i&&(o.morphAttributes.position=h),n&&(o.morphAttributes.normal=u),s&&(o.morphAttributes.color=d),o.morphTargetsRelative=!0,o})}function xm(o,e){if(o.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)o.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(o.morphTargetInfluences.length===t.length){o.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)o.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Em(o){const e=o.extensions&&o.extensions[Pe.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+vl(e.attributes):t=o.indices+":"+vl(o.attributes)+":"+o.mode,t}function vl(o){let e="";const t=Object.keys(o).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+o[t[i]]+";";return e}function _a(o){switch(o){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Im(o){return o.search(/\.jpe?g($|\?)/i)>0||o.search(/^data\:image\/jpeg/)===0?"image/jpeg":o.search(/\.webp($|\?)/i)>0||o.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Cm=new ve;class vm{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Xg,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=!1,s=-1;typeof navigator<"u"&&(i=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,n=navigator.userAgent.indexOf("Firefox")>-1,s=n?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||i||n&&s<98?this.textureLoader=new Qa(this.options.manager):this.textureLoader=new Ag(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const i=this,n=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(r){return r._markDefs&&r._markDefs()}),Promise.all(this._invokeAll(function(r){return r.beforeRoot&&r.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(r){const a={scene:r[0][n.scene||0],scenes:r[0],animations:r[1],cameras:r[2],asset:n.asset,parser:i,userData:{}};qn(s,a,n),Di(a,n),Promise.all(i._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n].joints;for(let a=0,l=r.length;a<l;a++)e[r[a]].isBone=!0}for(let n=0,s=e.length;n<s;n++){const r=e[n];r.mesh!==void 0&&(this._addNodeRef(this.meshCache,r.mesh),r.skin!==void 0&&(i[r.mesh].isSkinnedMesh=!0)),r.camera!==void 0&&this._addNodeRef(this.cameraCache,r.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;const n=i.clone(),s=(r,a)=>{const l=this.associations.get(r);l!=null&&this.associations.set(a,l);for(const[c,h]of r.children.entries())s(h,a.children[c])};return s(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){const n=e(t[i]);if(n)return n}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const i=[];for(let n=0;n<t.length;n++){const s=e(t[n]);s&&i.push(s)}return i}getDependency(e,t){const i=e+":"+t;let n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":n=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){const i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(s,r){return i.getDependency(e,r)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Pe.KHR_BINARY_GLTF].body);const n=this.options;return new Promise(function(s,r){i.load($i.resolveURL(t.uri,n.path),s,void 0,function(){r(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){const n=t.byteLength||0,s=t.byteOffset||0;return i.slice(s,s+n)})}loadAccessor(e){const t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){const r=zr[n.type],a=vn[n.componentType],l=n.normalized===!0,c=new a(n.count*r);return Promise.resolve(new ut(c,r,l))}const s=[];return n.bufferView!==void 0?s.push(this.getDependency("bufferView",n.bufferView)):s.push(null),n.sparse!==void 0&&(s.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(s).then(function(r){const a=r[0],l=zr[n.type],c=vn[n.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0;let p,A;if(f&&f!==u){const m=Math.floor(d/f),I="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+m+":"+n.count;let _=t.cache.get(I);_||(p=new c(a,m*f,n.count*f/h),_=new Hp(p,f/h),t.cache.add(I,_)),A=new Sa(_,l,d%f/h,g)}else a===null?p=new c(n.count*l):p=new c(a,d,n.count*l),A=new ut(p,l,g);if(n.sparse!==void 0){const m=zr.SCALAR,I=vn[n.sparse.indices.componentType],_=n.sparse.indices.byteOffset||0,v=n.sparse.values.byteOffset||0,E=new I(r[1],_,n.sparse.count*m),b=new c(r[2],v,n.sparse.count*l);a!==null&&(A=new ut(A.array.slice(),A.itemSize,A.normalized));for(let B=0,x=E.length;B<x;B++){const w=E[B];if(A.setX(w,b[B*l]),l>=2&&A.setY(w,b[B*l+1]),l>=3&&A.setZ(w,b[B*l+2]),l>=4&&A.setW(w,b[B*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return A})}loadTexture(e){const t=this.json,i=this.options,s=t.textures[e].source,r=t.images[s];let a=this.textureLoader;if(r.uri){const l=i.manager.getHandler(r.uri);l!==null&&(a=l)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,i){const n=this,s=this.json,r=s.textures[e],a=s.images[t],l=(a.uri||a.bufferView)+":"+r.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=r.name||a.name||"";const d=(s.samplers||{})[r.sampler]||{};return h.magFilter=Il[d.magFilter]||Je,h.minFilter=Il[d.minFilter]||Ci,h.wrapS=Cl[d.wrapS]||Ni,h.wrapT=Cl[d.wrapT]||Ni,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const i=this,n=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const r=n.images[e],a=self.URL||self.webkitURL;let l=r.uri||"",c=!1;if(r.bufferView!==void 0)l=i.getDependency("bufferView",r.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:r.mimeType});return l=a.createObjectURL(d),l});else if(r.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(p){const A=new lt(p);A.needsUpdate=!0,d(A)}),t.load($i.resolveURL(u,s.path),g,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),u.userData.mimeType=r.mimeType||Im(r.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){const s=this;return this.getDependency("texture",i.index).then(function(r){if(!r)return null;if(i.texCoord!==void 0&&i.texCoord!=0&&!(t==="aoMap"&&i.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+i.texCoord+" for texture "+t+" not yet supported."),s.extensions[Pe.KHR_TEXTURE_TRANSFORM]){const a=i.extensions!==void 0?i.extensions[Pe.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=s.associations.get(r);r=s.extensions[Pe.KHR_TEXTURE_TRANSFORM].extendTexture(r,a),s.associations.set(r,l)}}return n!==void 0&&(r.encoding=n),e[t]=r,r})}assignFinalMaterial(e){const t=e.geometry;let i=e.material;const n=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,r=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new uc,Kt.prototype.copy.call(l,i),l.color.copy(i.color),l.map=i.map,l.sizeAttenuation=!1,this.cache.add(a,l)),i=l}else if(e.isLine){const a="LineBasicMaterial:"+i.uuid;let l=this.cache.get(a);l||(l=new rr,Kt.prototype.copy.call(l,i),l.color.copy(i.color),this.cache.add(a,l)),i=l}if(n||s||r){let a="ClonedMaterial:"+i.uuid+":";n&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),r&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=i.clone(),s&&(l.vertexColors=!0),r&&(l.flatShading=!0),n&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(i))),i=l}i.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=i}getMaterialType(){return La}loadMaterial(e){const t=this,i=this.json,n=this.extensions,s=i.materials[e];let r;const a={},l=s.extensions||{},c=[];if(l[Pe.KHR_MATERIALS_UNLIT]){const u=n[Pe.KHR_MATERIALS_UNLIT];r=u.getMaterialType(),c.push(u.extendParams(a,s,t))}else{const u=s.pbrMetallicRoughness||{};if(a.color=new Ie(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.fromArray(d),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Se)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),r=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=$s);const h=s.alphaMode||Vr.OPAQUE;if(h===Vr.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Vr.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&r!==_i&&(c.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new me(1,1),s.normalTexture.scale!==void 0)){const u=s.normalTexture.scale;a.normalScale.set(u,u)}return s.occlusionTexture!==void 0&&r!==_i&&(c.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&r!==_i&&(a.emissive=new Ie().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&r!==_i&&c.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,Se)),Promise.all(c).then(function(){const u=new r(a);return s.name&&(u.name=s.name),Di(u,s),t.associations.set(u,{materials:e}),s.extensions&&qn(n,u,s),u})}createUniqueName(e){const t=Ge.sanitizeNodeName(e||"");let i=t;for(let n=1;this.nodeNamesUsed[i];++n)i=t+"_"+n;return this.nodeNamesUsed[i]=!0,i}loadGeometries(e){const t=this,i=this.extensions,n=this.primitiveCache;function s(a){return i[Pe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return yl(l,a,t)})}const r=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Em(c),u=n[h];if(u)r.push(u.promise);else{let d;c.extensions&&c.extensions[Pe.KHR_DRACO_MESH_COMPRESSION]?d=s(c):d=yl(new Rt,c,t),n[h]={primitive:c,promise:d},r.push(d)}}return Promise.all(r)}loadMesh(e){const t=this,i=this.json,n=this.extensions,s=i.meshes[e],r=s.primitives,a=[];for(let l=0,c=r.length;l<c;l++){const h=r[l].material===void 0?mm(this.cache):this.getDependency("material",r[l].material);a.push(h)}return a.push(t.loadGeometries(r)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,g=h.length;f<g;f++){const p=h[f],A=r[f];let m;const I=c[f];if(A.mode===zt.TRIANGLES||A.mode===zt.TRIANGLE_STRIP||A.mode===zt.TRIANGLE_FAN||A.mode===void 0)m=s.isSkinnedMesh===!0?new Vp(p,I):new Dt(p,I),m.isSkinnedMesh===!0&&!m.geometry.attributes.skinWeight.normalized&&m.normalizeSkinWeights(),A.mode===zt.TRIANGLE_STRIP?m.geometry=wl(m.geometry,wh):A.mode===zt.TRIANGLE_FAN&&(m.geometry=wl(m.geometry,zl));else if(A.mode===zt.LINES)m=new Ra(p,I);else if(A.mode===zt.LINE_STRIP)m=new Da(p,I);else if(A.mode===zt.LINE_LOOP)m=new Yp(p,I);else if(A.mode===zt.POINTS)m=new Jp(p,I);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+A.mode);Object.keys(m.geometry.morphAttributes).length>0&&xm(m,s),m.name=t.createUniqueName(s.name||"mesh_"+e),Di(m,s),A.extensions&&qn(n,m,A),t.assignFinalMaterial(m),u.push(m)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return u[0];const d=new Li;t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t;const i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new ft(zh.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new nr(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Di(t,i),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],i=[];for(let n=0,s=t.joints.length;n<s;n++)i.push(this.getDependency("node",t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){const s=n.pop(),r=n,a=[],l=[];for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u){a.push(u);const d=new ve;s!==null&&d.fromArray(s.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ta(a,l)})}loadAnimation(e){const i=this.json.animations[e],n=[],s=[],r=[],a=[],l=[];for(let c=0,h=i.channels.length;c<h;c++){const u=i.channels[c],d=i.samplers[u.sampler],f=u.target,g=f.node,p=i.parameters!==void 0?i.parameters[d.input]:d.input,A=i.parameters!==void 0?i.parameters[d.output]:d.output;n.push(this.getDependency("node",g)),s.push(this.getDependency("accessor",p)),r.push(this.getDependency("accessor",A)),a.push(d),l.push(f)}return Promise.all([Promise.all(n),Promise.all(s),Promise.all(r),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2],f=c[3],g=c[4],p=[];for(let m=0,I=h.length;m<I;m++){const _=h[m],v=u[m],E=d[m],b=f[m],B=g[m];if(_===void 0)continue;_.updateMatrix();let x;switch(Si[B.path]){case Si.weights:x=os;break;case Si.rotation:x=en;break;case Si.position:case Si.scale:default:x=ls;break}const w=_.name?_.name:_.uuid,R=b.interpolation!==void 0?gm[b.interpolation]:bn,F=[];Si[B.path]===Si.weights?_.traverse(function(Q){Q.morphTargetInfluences&&F.push(Q.name?Q.name:Q.uuid)}):F.push(w);let O=E.array;if(E.normalized){const Q=_a(O.constructor),D=new Float32Array(O.length);for(let G=0,K=O.length;G<K;G++)D[G]=O[G]*Q;O=D}for(let Q=0,D=F.length;Q<D;Q++){const G=new x(F[Q]+"."+Si[B.path],v.array,O,R);b.interpolation==="CUBICSPLINE"&&(G.createInterpolant=function(W){const k=this instanceof en?pm:Ec;return new k(this.times,this.values,this.getValueSize()/3,W)},G.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),p.push(G)}}const A=i.name?i.name:"animation_"+e;return new pa(A,void 0,p)})}createNodeMesh(e){const t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(s){const r=i._getNodeRef(i.meshCache,n.mesh,s);return n.weights!==void 0&&r.traverse(function(a){if(a.isMesh)for(let l=0,c=n.weights.length;l<c;l++)a.morphTargetInfluences[l]=n.weights[l]}),r})}loadNode(e){const t=this.json,i=this.extensions,n=this,s=t.nodes[e],r=s.name?n.createUniqueName(s.name):"";return function(){const a=[],l=n._invokeOne(function(d){return d.createNodeMesh&&d.createNodeMesh(e)});l&&a.push(l),s.camera!==void 0&&a.push(n.getDependency("camera",s.camera).then(function(d){return n._getNodeRef(n.cameraCache,s.camera,d)})),n._invokeAll(function(d){return d.createNodeAttachment&&d.createNodeAttachment(e)}).forEach(function(d){a.push(d)});const c=[],h=s.children||[];for(let d=0,f=h.length;d<f;d++)c.push(n.getDependency("node",h[d]));const u=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([Promise.all(a),Promise.all(c),u])}().then(function(a){const l=a[0],c=a[1],h=a[2];let u;if(s.isBone===!0?u=new cc:l.length>1?u=new Li:l.length===1?u=l[0]:u=new qe,u!==l[0])for(let d=0,f=l.length;d<f;d++)u.add(l[d]);if(s.name&&(u.userData.name=s.name,u.name=r),Di(u,s),s.extensions&&qn(i,u,s),s.matrix!==void 0){const d=new ve;d.fromArray(s.matrix),u.applyMatrix4(d)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);n.associations.has(u)||n.associations.set(u,{}),n.associations.get(u).nodes=e,h!==null&&u.traverse(function(d){d.isSkinnedMesh&&d.bind(h,Cm)});for(let d=0,f=c.length;d<f;d++)u.add(c[d]);return u})}loadScene(e){const t=this.extensions,i=this.json.scenes[e],n=this,s=new Li;i.name&&(s.name=n.createUniqueName(i.name)),Di(s,i),i.extensions&&qn(t,s,i);const r=i.nodes||[],a=[];for(let l=0,c=r.length;l<c;l++)a.push(n.getDependency("node",r[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)s.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of n.associations)(d instanceof Kt||d instanceof lt)&&u.set(d,f);return h.traverse(d=>{const f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=c(s),s})}}function ym(o,e,t){const i=e.attributes,n=new Tn;if(i.POSITION!==void 0){const a=t.json.accessors[i.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(n.set(new T(l[0],l[1],l[2]),new T(c[0],c[1],c[2])),a.normalized){const h=_a(vn[a.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new T,l=new T;for(let c=0,h=s.length;c<h;c++){const u=s[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){const p=_a(vn[d.componentType]);l.multiplyScalar(p)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(a)}o.boundingBox=n;const r=new Dn;n.getCenter(r.center),r.radius=n.min.distanceTo(n.max)/2,o.boundingSphere=r}function yl(o,e,t){const i=e.attributes,n=[];function s(r,a){return t.getDependency("accessor",r).then(function(l){o.setAttribute(a,l)})}for(const r in i){const a=ma[r]||r.toLowerCase();a in o.attributes||n.push(s(i[r],a))}if(e.indices!==void 0&&!o.index){const r=t.getDependency("accessor",e.indices).then(function(a){o.setIndex(a)});n.push(r)}return Di(o,e),ym(o,e,t),Promise.all(n).then(function(){return e.targets!==void 0?_m(o,e.targets,t):o})}function wl(o,e){let t=o.getIndex();if(t===null){const r=[],a=o.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)r.push(l);o.setIndex(r),t=o.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),o}const i=t.count-2,n=[];if(e===zl)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));n.length/3!==i&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=o.clone();return s.setIndex(n),s}const Wr=new WeakMap;class wm extends ki{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,i,n){const s=new Qi(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,r=>{this.decodeDracoFile(r,t).catch(n)},i,n)}decodeDracoFile(e,t,i,n){const s={attributeIDs:i||this.defaultAttributeIDs,attributeTypes:n||this.defaultAttributeTypes,useUniqueIDs:!!i};return this.decodeGeometry(e,s).then(t)}decodeGeometry(e,t){const i=JSON.stringify(t);if(Wr.has(e)){const l=Wr.get(e);if(l.key===i)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let n;const s=this.workerNextTaskID++,r=e.byteLength,a=this._getWorker(s,r).then(l=>(n=l,new Promise((c,h)=>{n._callbacks[s]={resolve:c,reject:h},n.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{n&&s&&this._releaseTask(n,s)}),Wr.set(e,{key:i,promise:a}),a}_createGeometry(e){const t=new Rt;e.index&&t.setIndex(new ut(e.index.array,1));for(let i=0;i<e.attributes.length;i++){const n=e.attributes[i],s=n.name,r=n.array,a=n.itemSize;t.setAttribute(s,new ut(r,a))}return t}_loadLibrary(e,t){const i=new Qi(this.manager);return i.setPath(this.decoderPath),i.setResponseType(t),i.setWithCredentials(this.withCredentials),new Promise((n,s)=>{i.load(e,n,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(i=>{const n=i[0];e||(this.decoderConfig.wasmBinary=i[1]);const s=Mm.toString(),r=["/* draco decoder */",n,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([r]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const n=new Worker(this.workerSourceURL);n._callbacks={},n._taskCosts={},n._taskLoad=0,n.postMessage({type:"init",decoderConfig:this.decoderConfig}),n.onmessage=function(s){const r=s.data;switch(r.type){case"decode":n._callbacks[r.id].resolve(r);break;case"error":n._callbacks[r.id].reject(r);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+r.type+'"')}},this.workerPool.push(n)}else this.workerPool.sort(function(n,s){return n._taskLoad>s._taskLoad?-1:1});const i=this.workerPool[this.workerPool.length-1];return i._taskCosts[e]=t,i._taskLoad+=t,i})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this}}function Mm(){let o,e;onmessage=function(r){const a=r.data;switch(a.type){case"init":o=a.decoderConfig,e=new Promise(function(h){o.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(o)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder,f=new u.DecoderBuffer;f.Init(new Int8Array(l),l.byteLength);try{const g=t(u,d,f,c),p=g.attributes.map(A=>A.array.buffer);g.index&&p.push(g.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:g},p)}catch(g){console.error(g),self.postMessage({type:"error",id:a.id,error:g.message})}finally{u.destroy(f),u.destroy(d)}});break}};function t(r,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,f;const g=a.GetEncodedGeometryType(l);if(g===r.TRIANGULAR_MESH)d=new r.Mesh,f=a.DecodeBufferToMesh(l,d);else if(g===r.POINT_CLOUD)d=new r.PointCloud,f=a.DecodeBufferToPointCloud(l,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!f.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+f.error_msg());const p={index:null,attributes:[]};for(const A in h){const m=self[u[A]];let I,_;if(c.useUniqueIDs)_=h[A],I=a.GetAttributeByUniqueId(d,_);else{if(_=a.GetAttributeId(d,r[h[A]]),_===-1)continue;I=a.GetAttribute(d,_)}p.attributes.push(n(r,a,d,A,m,I))}return g===r.TRIANGULAR_MESH&&(p.index=i(r,a,d)),r.destroy(d),p}function i(r,a,l){const h=l.num_faces()*3,u=h*4,d=r._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const f=new Uint32Array(r.HEAPF32.buffer,d,h).slice();return r._free(d),{array:f,itemSize:1}}function n(r,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,p=g*h.BYTES_PER_ELEMENT,A=s(r,h),m=r._malloc(p);a.GetAttributeDataArrayForAllPoints(l,u,A,p,m);const I=new h(r.HEAPF32.buffer,m,g).slice();return r._free(m),{name:c,array:I,itemSize:d}}function s(r,a){switch(a){case Float32Array:return r.DT_FLOAT32;case Int8Array:return r.DT_INT8;case Int16Array:return r.DT_INT16;case Int32Array:return r.DT_INT32;case Uint8Array:return r.DT_UINT8;case Uint16Array:return r.DT_UINT16;case Uint32Array:return r.DT_UINT32}}}const Pi=new mc;Pi.onLoad=function(){};Pi.onProgress=function(o,e,t){};Pi.onError=function(o){console.log("There was an error loading "+o)};class bm{constructor(e){this.name="EXT_mesh_gpu_instancing",this.parser=e}createNodeMesh(e){const i=this.parser.json.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;const s=i.extensions[this.name].attributes,r=[],a={};for(const l in s)r.push(this.parser.getDependency("accessor",s[l]).then(c=>(a[l]=c,a[l])));return r.length<1?null:(r.push(this.parser.createNodeMesh(e)),Promise.all(r).then(l=>{const c=l.pop(),h=c.isGroup?c.children:[c],u=l[0].count,d=[];for(const f of h){const g=f.matrix.clone(),p=f.position.clone().set(0,0,0),A=f.quaternion.clone().set(0,0,0,1),m=f.scale.clone().set(1,1,1),I=new hc(f.geometry,f.material,u);for(let _=0;_<u;_++)a.TRANSLATION&&p.fromBufferAttribute(a.TRANSLATION,_),a.ROTATION&&A.fromBufferAttribute(a.ROTATION,_),a.SCALE&&m.fromBufferAttribute(a.SCALE,_),I.setMatrixAt(_,g.compose(p,A,m));for(const _ in a)_!=="TRANSLATION"&&_!=="ROTATION"&&_!=="SCALE"&&f.geometry.setAttribute(_,a[_]);qe.prototype.copy.call(I,f),I.frustumCulled=!1,this.parser.assignFinalMaterial(I),d.push(I)}if(c.isGroup){for(;c.children.length>0;)c.remove(c.children[0]);for(const f of d)c.add(f);return c}return d[0]}))}}const Sm=o=>{const e=[],t=new Set;for(const i of o){let n=i,s=0;for(;t.has(n);)n=i+"."+ ++s;t.add(n),e.push(n)}return e},Bm=(o,e)=>{const t={};for(const i of o.mappings)for(const n of i.variants)t[e[n]]={material:null,gltfMaterialIndex:i.material};return t},ks=o=>o.material!==void 0&&o.userData&&o.userData.variantMaterials,Ic=(o,e,t)=>{t(o,e);for(let i=0;i<o.children.length;i++)Ic(o.children[i],e.children[i],t)},Ml=(o,e)=>{e.userData.variantMaterials!==void 0&&(o.userData.variantMaterials=Object.assign({},e.userData.variantMaterials)),e.userData.originalMaterial!==void 0&&(o.userData.originalMaterial=e.userData.originalMaterial)};class Tm{constructor(e){this.parser=e,this.name="KHR_materials_variants"}afterRoot(e){const t=this.parser,i=t.json;if(!i.extensions||!i.extensions[this.name])return null;const s=i.extensions[this.name].variants||[],r=Sm(s.map(c=>c.name));for(const c of e.scenes)c.traverse(h=>{const u=t.associations.get(h);if(!u||u.meshes===void 0||u.primitives===void 0)return;const g=i.meshes[u.meshes].primitives[u.primitives].extensions;!g||!g[this.name]||(h.userData.variantMaterials=Bm(g[this.name],r))});e.userData.variants=r,e.functions=e.functions||{};const a=async(c,h,u)=>{c.userData.originalMaterial||(c.userData.originalMaterial=c.material);const d=c.material;let f=null;if(h===null||!c.userData.variantMaterials[h])c.material=c.userData.originalMaterial,t.associations.has(c.material)&&(f=t.associations.get(c.material).index);else{const g=c.userData.variantMaterials[h];g.material?(c.material=g.material,g.gltfMaterialIndex!==void 0&&(f=g.gltfMaterialIndex)):(f=g.gltfMaterialIndex,c.material=await t.getDependency("material",f),t.assignFinalMaterial(c),g.material=c.material)}u!==null&&u(c,d,f)},l=c=>{const h=c.material,u=c.userData.variantMaterials,d=[];for(const f in u){const g=u[f];if(g.material)continue;const p=g.gltfMaterialIndex;d.push(t.getDependency("material",p).then(A=>{c.material=A,t.assignFinalMaterial(c),u[f].material=c.material}))}return Promise.all(d).then(()=>{c.material=h})};e.functions.selectVariant=(c,h,u=!0,d=null)=>{const f=[];return u?c.traverse(g=>ks(g)&&f.push(a(g,h,d))):ks(c)&&f.push(a(c,h,d)),Promise.all(f)},e.functions.ensureLoadVariants=(c,h=!0)=>{const u=[];return h?c.traverse(d=>ks(d)&&u.push(l(d))):ks(c)&&u.push(l(c)),Promise.all(u)},e.functions.copyVariantMaterials=(c,h,u=!0)=>{u?Ic(c,h,(d,f)=>Ml(d,f)):Ml(c,h)}}}class Dm{constructor(e=4){this.pool=e,this.queue=[],this.workers=[],this.workersResolve=[],this.workerStatus=0}_initWorker(e){if(!this.workers[e]){const t=this.workerCreator();t.addEventListener("message",this._onMessage.bind(this,e)),this.workers[e]=t}}_getIdleWorker(){for(let e=0;e<this.pool;e++)if(!(this.workerStatus&1<<e))return e;return-1}_onMessage(e,t){const i=this.workersResolve[e];if(i&&i(t),this.queue.length){const{resolve:n,msg:s,transfer:r}=this.queue.shift();this.workersResolve[e]=n,this.workers[e].postMessage(s,r)}else this.workerStatus^=1<<e}setWorkerCreator(e){this.workerCreator=e}setWorkerLimit(e){this.pool=e}postMessage(e,t){return new Promise(i=>{const n=this._getIdleWorker();n!==-1?(this._initWorker(n),this.workerStatus|=1<<n,this.workersResolve[n]=i,this.workers[n].postMessage(e,t)):this.queue.push({resolve:i,msg:e,transfer:t})})}dispose(){this.workers.forEach(e=>e.terminate()),this.workersResolve.length=0,this.workers.length=0,this.queue.length=0,this.workerStatus=0}}const Rm=0,Lm=2,Qm=1,Pm=2,Fm=0,Cc=9,Ga=15,vc=16,Oa=22,yc=37,Ha=43,wc=76,Mc=83,bc=97,Sc=100,Bc=103,Tc=109;class Nm{constructor(){this.vkFormat=0,this.typeSize=1,this.pixelWidth=0,this.pixelHeight=0,this.pixelDepth=0,this.layerCount=0,this.faceCount=1,this.supercompressionScheme=0,this.levels=[],this.dataFormatDescriptor=[{vendorId:0,descriptorType:0,descriptorBlockSize:0,versionNumber:2,colorModel:0,colorPrimaries:1,transferFunction:2,flags:0,texelBlockDimension:[0,0,0,0],bytesPlane:[0,0,0,0,0,0,0,0],samples:[]}],this.keyValue={},this.globalData=null}}class Yn{constructor(e,t,i,n){this._dataView=new DataView(e.buffer,e.byteOffset+t,i),this._littleEndian=n,this._offset=0}_nextUint8(){const e=this._dataView.getUint8(this._offset);return this._offset+=1,e}_nextUint16(){const e=this._dataView.getUint16(this._offset,this._littleEndian);return this._offset+=2,e}_nextUint32(){const e=this._dataView.getUint32(this._offset,this._littleEndian);return this._offset+=4,e}_nextUint64(){const e=this._dataView.getUint32(this._offset,this._littleEndian)+4294967296*this._dataView.getUint32(this._offset+4,this._littleEndian);return this._offset+=8,e}_nextInt32(){const e=this._dataView.getInt32(this._offset,this._littleEndian);return this._offset+=4,e}_skip(e){return this._offset+=e,this}_scan(e,t=0){const i=this._offset;let n=0;for(;this._dataView.getUint8(this._offset)!==t&&n<e;)n++,this._offset++;return n<e&&this._offset++,new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+i,n)}}const Et=[171,75,84,88,32,50,48,187,13,10,26,10];function bl(o){return typeof TextDecoder<"u"?new TextDecoder().decode(o):Buffer.from(o).toString("utf8")}function Um(o){const e=new Uint8Array(o.buffer,o.byteOffset,Et.length);if(e[0]!==Et[0]||e[1]!==Et[1]||e[2]!==Et[2]||e[3]!==Et[3]||e[4]!==Et[4]||e[5]!==Et[5]||e[6]!==Et[6]||e[7]!==Et[7]||e[8]!==Et[8]||e[9]!==Et[9]||e[10]!==Et[10]||e[11]!==Et[11])throw new Error("Missing KTX 2.0 identifier.");const t=new Nm,i=17*Uint32Array.BYTES_PER_ELEMENT,n=new Yn(o,Et.length,i,!0);t.vkFormat=n._nextUint32(),t.typeSize=n._nextUint32(),t.pixelWidth=n._nextUint32(),t.pixelHeight=n._nextUint32(),t.pixelDepth=n._nextUint32(),t.layerCount=n._nextUint32(),t.faceCount=n._nextUint32();const s=n._nextUint32();t.supercompressionScheme=n._nextUint32();const r=n._nextUint32(),a=n._nextUint32(),l=n._nextUint32(),c=n._nextUint32(),h=n._nextUint64(),u=n._nextUint64(),d=new Yn(o,Et.length+i,3*s*8,!0);for(let W=0;W<s;W++)t.levels.push({levelData:new Uint8Array(o.buffer,o.byteOffset+d._nextUint64(),d._nextUint64()),uncompressedByteLength:d._nextUint64()});const f=new Yn(o,r,a,!0),g={vendorId:f._skip(4)._nextUint16(),descriptorType:f._nextUint16(),versionNumber:f._nextUint16(),descriptorBlockSize:f._nextUint16(),colorModel:f._nextUint8(),colorPrimaries:f._nextUint8(),transferFunction:f._nextUint8(),flags:f._nextUint8(),texelBlockDimension:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],bytesPlane:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],samples:[]},p=(g.descriptorBlockSize/4-6)/4;for(let W=0;W<p;W++){const k={bitOffset:f._nextUint16(),bitLength:f._nextUint8(),channelType:f._nextUint8(),samplePosition:[f._nextUint8(),f._nextUint8(),f._nextUint8(),f._nextUint8()],sampleLower:-1/0,sampleUpper:1/0};64&k.channelType?(k.sampleLower=f._nextInt32(),k.sampleUpper=f._nextInt32()):(k.sampleLower=f._nextUint32(),k.sampleUpper=f._nextUint32()),g.samples[W]=k}t.dataFormatDescriptor.length=0,t.dataFormatDescriptor.push(g);const A=new Yn(o,l,c,!0);for(;A._offset<c;){const W=A._nextUint32(),k=A._scan(W),j=bl(k),Z=A._scan(W-k.byteLength);t.keyValue[j]=j.match(/^ktx/i)?bl(Z):Z,A._offset%4&&A._skip(4-A._offset%4)}if(u<=0)return t;const m=new Yn(o,h,u,!0),I=m._nextUint16(),_=m._nextUint16(),v=m._nextUint32(),E=m._nextUint32(),b=m._nextUint32(),B=m._nextUint32(),x=[];for(let W=0;W<s;W++)x.push({imageFlags:m._nextUint32(),rgbSliceByteOffset:m._nextUint32(),rgbSliceByteLength:m._nextUint32(),alphaSliceByteOffset:m._nextUint32(),alphaSliceByteLength:m._nextUint32()});const w=h+m._offset,R=w+v,F=R+E,O=F+b,Q=new Uint8Array(o.buffer,o.byteOffset+w,v),D=new Uint8Array(o.buffer,o.byteOffset+R,E),G=new Uint8Array(o.buffer,o.byteOffset+F,b),K=new Uint8Array(o.buffer,o.byteOffset+O,B);return t.globalData={endpointCount:I,selectorCount:_,imageDescs:x,endpointsData:Q,selectorsData:D,tablesData:G,extendedData:K},t}let qr,ui,xa;const Yr={env:{emscripten_notify_memory_growth:function(o){xa=new Uint8Array(ui.exports.memory.buffer)}}};class km{init(){return qr||(qr=typeof fetch<"u"?fetch("data:application/wasm;base64,"+Sl).then(e=>e.arrayBuffer()).then(e=>WebAssembly.instantiate(e,Yr)).then(this._init):WebAssembly.instantiate(Buffer.from(Sl,"base64"),Yr).then(this._init),qr)}_init(e){ui=e.instance,Yr.env.emscripten_notify_memory_growth(0)}decode(e,t=0){if(!ui)throw new Error("ZSTDDecoder: Await .init() before decoding.");const i=e.byteLength,n=ui.exports.malloc(i);xa.set(e,n),t=t||Number(ui.exports.ZSTD_findDecompressedSize(n,i));const s=ui.exports.malloc(t),r=ui.exports.ZSTD_decompress(s,t,n,i),a=xa.slice(s,s+r);return ui.exports.free(n),ui.exports.free(s),a}}const Sl="AGFzbQEAAAABpQEVYAF/AX9gAn9/AGADf39/AX9gBX9/f39/AX9gAX8AYAJ/fwF/YAR/f39/AX9gA39/fwBgBn9/f39/fwF/YAd/f39/f39/AX9gAn9/AX5gAn5+AX5gAABgBX9/f39/AGAGf39/f39/AGAIf39/f39/f38AYAl/f39/f39/f38AYAABf2AIf39/f39/f38Bf2ANf39/f39/f39/f39/fwF/YAF/AX4CJwEDZW52H2Vtc2NyaXB0ZW5fbm90aWZ5X21lbW9yeV9ncm93dGgABANpaAEFAAAFAgEFCwACAQABAgIFBQcAAwABDgsBAQcAEhMHAAUBDAQEAAANBwQCAgYCBAgDAwMDBgEACQkHBgICAAYGAgQUBwYGAwIGAAMCAQgBBwUGCgoEEQAEBAEIAwgDBQgDEA8IAAcABAUBcAECAgUEAQCAAgYJAX8BQaCgwAILB2AHBm1lbW9yeQIABm1hbGxvYwAoBGZyZWUAJgxaU1REX2lzRXJyb3IAaBlaU1REX2ZpbmREZWNvbXByZXNzZWRTaXplAFQPWlNURF9kZWNvbXByZXNzAEoGX3N0YXJ0ACQJBwEAQQELASQKussBaA8AIAAgACgCBCABajYCBAsZACAAKAIAIAAoAgRBH3F0QQAgAWtBH3F2CwgAIABBiH9LC34BBH9BAyEBIAAoAgQiA0EgTQRAIAAoAggiASAAKAIQTwRAIAAQDQ8LIAAoAgwiAiABRgRAQQFBAiADQSBJGw8LIAAgASABIAJrIANBA3YiBCABIARrIAJJIgEbIgJrIgQ2AgggACADIAJBA3RrNgIEIAAgBCgAADYCAAsgAQsUAQF/IAAgARACIQIgACABEAEgAgv3AQECfyACRQRAIABCADcCACAAQQA2AhAgAEIANwIIQbh/DwsgACABNgIMIAAgAUEEajYCECACQQRPBEAgACABIAJqIgFBfGoiAzYCCCAAIAMoAAA2AgAgAUF/ai0AACIBBEAgAEEIIAEQFGs2AgQgAg8LIABBADYCBEF/DwsgACABNgIIIAAgAS0AACIDNgIAIAJBfmoiBEEBTQRAIARBAWtFBEAgACABLQACQRB0IANyIgM2AgALIAAgAS0AAUEIdCADajYCAAsgASACakF/ai0AACIBRQRAIABBADYCBEFsDwsgAEEoIAEQFCACQQN0ams2AgQgAgsWACAAIAEpAAA3AAAgACABKQAINwAICy8BAX8gAUECdEGgHWooAgAgACgCAEEgIAEgACgCBGprQR9xdnEhAiAAIAEQASACCyEAIAFCz9bTvtLHq9lCfiAAfEIfiUKHla+vmLbem55/fgsdAQF/IAAoAgggACgCDEYEfyAAKAIEQSBGBUEACwuCBAEDfyACQYDAAE8EQCAAIAEgAhBnIAAPCyAAIAJqIQMCQCAAIAFzQQNxRQRAAkAgAkEBSARAIAAhAgwBCyAAQQNxRQRAIAAhAgwBCyAAIQIDQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADTw0BIAJBA3ENAAsLAkAgA0F8cSIEQcAASQ0AIAIgBEFAaiIFSw0AA0AgAiABKAIANgIAIAIgASgCBDYCBCACIAEoAgg2AgggAiABKAIMNgIMIAIgASgCEDYCECACIAEoAhQ2AhQgAiABKAIYNgIYIAIgASgCHDYCHCACIAEoAiA2AiAgAiABKAIkNgIkIAIgASgCKDYCKCACIAEoAiw2AiwgAiABKAIwNgIwIAIgASgCNDYCNCACIAEoAjg2AjggAiABKAI8NgI8IAFBQGshASACQUBrIgIgBU0NAAsLIAIgBE8NAQNAIAIgASgCADYCACABQQRqIQEgAkEEaiICIARJDQALDAELIANBBEkEQCAAIQIMAQsgA0F8aiIEIABJBEAgACECDAELIAAhAgNAIAIgAS0AADoAACACIAEtAAE6AAEgAiABLQACOgACIAIgAS0AAzoAAyABQQRqIQEgAkEEaiICIARNDQALCyACIANJBEADQCACIAEtAAA6AAAgAUEBaiEBIAJBAWoiAiADRw0ACwsgAAsMACAAIAEpAAA3AAALQQECfyAAKAIIIgEgACgCEEkEQEEDDwsgACAAKAIEIgJBB3E2AgQgACABIAJBA3ZrIgE2AgggACABKAAANgIAQQALDAAgACABKAIANgAAC/cCAQJ/AkAgACABRg0AAkAgASACaiAASwRAIAAgAmoiBCABSw0BCyAAIAEgAhALDwsgACABc0EDcSEDAkACQCAAIAFJBEAgAwRAIAAhAwwDCyAAQQNxRQRAIAAhAwwCCyAAIQMDQCACRQ0EIAMgAS0AADoAACABQQFqIQEgAkF/aiECIANBAWoiA0EDcQ0ACwwBCwJAIAMNACAEQQNxBEADQCACRQ0FIAAgAkF/aiICaiIDIAEgAmotAAA6AAAgA0EDcQ0ACwsgAkEDTQ0AA0AgACACQXxqIgJqIAEgAmooAgA2AgAgAkEDSw0ACwsgAkUNAgNAIAAgAkF/aiICaiABIAJqLQAAOgAAIAINAAsMAgsgAkEDTQ0AIAIhBANAIAMgASgCADYCACABQQRqIQEgA0EEaiEDIARBfGoiBEEDSw0ACyACQQNxIQILIAJFDQADQCADIAEtAAA6AAAgA0EBaiEDIAFBAWohASACQX9qIgINAAsLIAAL8wICAn8BfgJAIAJFDQAgACACaiIDQX9qIAE6AAAgACABOgAAIAJBA0kNACADQX5qIAE6AAAgACABOgABIANBfWogAToAACAAIAE6AAIgAkEHSQ0AIANBfGogAToAACAAIAE6AAMgAkEJSQ0AIABBACAAa0EDcSIEaiIDIAFB/wFxQYGChAhsIgE2AgAgAyACIARrQXxxIgRqIgJBfGogATYCACAEQQlJDQAgAyABNgIIIAMgATYCBCACQXhqIAE2AgAgAkF0aiABNgIAIARBGUkNACADIAE2AhggAyABNgIUIAMgATYCECADIAE2AgwgAkFwaiABNgIAIAJBbGogATYCACACQWhqIAE2AgAgAkFkaiABNgIAIAQgA0EEcUEYciIEayICQSBJDQAgAa0iBUIghiAFhCEFIAMgBGohAQNAIAEgBTcDGCABIAU3AxAgASAFNwMIIAEgBTcDACABQSBqIQEgAkFgaiICQR9LDQALCyAACy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAIajYCACADCy8BAn8gACgCBCAAKAIAQQJ0aiICLQACIQMgACACLwEAIAEgAi0AAxAFajYCACADCx8AIAAgASACKAIEEAg2AgAgARAEGiAAIAJBCGo2AgQLCAAgAGdBH3MLugUBDX8jAEEQayIKJAACfyAEQQNNBEAgCkEANgIMIApBDGogAyAEEAsaIAAgASACIApBDGpBBBAVIgBBbCAAEAMbIAAgACAESxsMAQsgAEEAIAEoAgBBAXRBAmoQECENQVQgAygAACIGQQ9xIgBBCksNABogAiAAQQVqNgIAIAMgBGoiAkF8aiEMIAJBeWohDiACQXtqIRAgAEEGaiELQQQh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ASIDNgLE4AEgACgCvOABIQQgACABNgK84AEgACABIAJqNgK44AEgACABIAQgA2tqNgLA4AELpgEBAX8gACAAKALs4QEQFjYCyOABIABCADcD+OABIABCADcDuOABIABBwOABakIANwMAIABBqNAAaiIBQYyAgOAANgIAIABBADYCmOIBIABCADcDiOEBIABCAzcDgOEBIABBrNABakHgEikCADcCACAAQbTQAWpB6BIoAgA2AgAgACABNgIMIAAgAEGYIGo2AgggACAAQaAwajYCBCAAIABBEGo2AgALYQEBf0G4fyEDAkAgAUEDSQ0AIAIgABAhIgFBA3YiADYCCCACIAFBAXE2AgQgAiABQQF2QQNxIgM2AgACQCADQX9qIgFBAksNAAJAIAFBAWsOAgEAAgtBbA8LIAAhAwsgAwsMACAAIAEgAkEAEC4LiAQCA38CfiADEBYhBCAAQQBBKBAQIQAgBCACSwRAIAQPCyABRQRAQX8PCwJAAkAgA0EBRg0AIAEoAAAiBkGo6r5pRg0AQXYhAyAGQXBxQdDUtMIBRw0BQQghAyACQQhJDQEgAEEAQSgQECEAIAEoAAQhASAAQQE2AhQgACABrTcDAEEADwsgASACIAMQLyIDIAJLDQAgACADNgIYQXIhAyABIARqIgVBf2otAAAiAkEIcQ0AIAJBIHEiBkUEQEFwIQMgBS0AACIFQacBSw0BIAVBB3GtQgEgBUEDdkEKaq2GIgdCA4h+IAd8IQggBEEBaiEECyACQQZ2IQMgAkECdiEFAkAgAkEDcUF/aiICQQJLBEBBACECDAELAkACQAJAIAJBAWsOAgECAAsgASAEai0AACECIARBAWohBAwCCyABIARqLwAAIQIgBEECaiEEDAELIAEgBGooAAAhAiAEQQRqIQQLIAVBAXEhBQJ+AkACQAJAIANBf2oiA0ECTQRAIANBAWsOAgIDAQtCfyAGRQ0DGiABIARqMQAADAMLIAEgBGovAACtQoACfAwCCyABIARqKAAArQwBCyABIARqKQAACyEHIAAgBTYCICAAIAI2AhwgACAHNwMAQQAhAyAAQQA2AhQgACAHIAggBhsiBzcDCCAAIAdCgIAIIAdCgIAIVBs+AhALIAMLWwEBf0G4fyEDIAIQFiICIAFNBH8gACACakF/ai0AACIAQQNxQQJ0QaAeaigCACACaiAAQQZ2IgFBAnRBsB5qKAIAaiAAQSBxIgBFaiABRSAAQQV2cWoFQbh/CwsdACAAKAKQ4gEQWiAAQQA2AqDiASAAQgA3A5DiAQu1AwEFfyMAQZACayIKJABBuH8hBgJAIAVFDQAgBCwAACIIQf8BcSEHAkAgCEF/TARAIAdBgn9qQQF2IgggBU8NAkFsIQYgB0GBf2oiBUGAAk8NAiAEQQFqIQdBACEGA0AgBiAFTwRAIAUhBiAIIQcMAwUgACAGaiAHIAZBAXZqIgQtAABBBHY6AAAgACAGQQFyaiAELQAAQQ9xOgAAIAZBAmohBgwBCwAACwALIAcgBU8NASAAIARBAWogByAKEFMiBhADDQELIAYhBEEAIQYgAUEAQTQQECEJQQAhBQNAIAQgBkcEQCAAIAZqIggtAAAiAUELSwRAQWwhBgwDBSAJIAFBAnRqIgEgASgCAEEBajYCACAGQQFqIQZBASAILQAAdEEBdSAFaiEFDAILAAsLQWwhBiAFRQ0AIAUQFEEBaiIBQQxLDQAgAyABNgIAQQFBASABdCAFayIDEBQiAXQgA0cNACAAIARqIAFBAWoiADoAACAJIABBAnRqIgAgACgCAEEBajYCACAJKAIEIgBBAkkgAEEBcXINACACIARBAWo2AgAgB0EBaiEGCyAKQZACaiQAIAYLxhEBDH8jAEHwAGsiBSQAQWwhCwJAIANBCkkNACACLwAAIQogAi8AAiEJIAIvAAQhByAFQQhqIAQQDgJAIAMgByAJIApqakEGaiIMSQ0AIAUtAAohCCAFQdgAaiACQQZqIgIgChAGIgsQAw0BIAVBQGsgAiAKaiICIAkQBiILEAMNASAFQShqIAIgCWoiAiAHEAYiCxADDQEgBUEQaiACIAdqIAMgDGsQBiILEAMNASAAIAFqIg9BfWohECAEQQRqIQZBASELIAAgAUEDakECdiIDaiIMIANqIgIgA2oiDiEDIAIhBCAMIQcDQCALIAMgEElxBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgCS0AAyELIAcgBiAFQUBrIAgQAkECdGoiCS8BADsAACAFQUBrIAktAAIQASAJLQADIQogBCAGIAVBKGogCBACQQJ0aiIJLwEAOwAAIAVBKGogCS0AAhABIAktAAMhCSADIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgDS0AAyENIAAgC2oiCyAGIAVB2ABqIAgQAkECdGoiAC8BADsAACAFQdgAaiAALQACEAEgAC0AAyEAIAcgCmoiCiAGIAVBQGsgCBACQQJ0aiIHLwEAOwAAIAVBQGsgBy0AAhABIActAAMhByAEIAlqIgkgBiAFQShqIAgQAkECdGoiBC8BADsAACAFQShqIAQtAAIQASAELQADIQQgAyANaiIDIAYgBUEQaiAIEAJBAnRqIg0vAQA7AAAgBUEQaiANLQACEAEgACALaiEAIAcgCmohByAEIAlqIQQgAyANLQADaiEDIAVB2ABqEA0gBUFAaxANciAFQShqEA1yIAVBEGoQDXJFIQsMAQsLIAQgDksgByACS3INAEFsIQsgACAMSw0BIAxBfWohCQNAQQAgACAJSSAFQdgAahAEGwRAIAAgBiAFQdgAaiAIEAJBAnRqIgovAQA7AAAgBUHYAGogCi0AAhABIAAgCi0AA2oiACAGIAVB2ABqIAgQAkECdGoiCi8BADsAACAFQdgAaiAKLQACEAEgACAKLQADaiEADAEFIAxBfmohCgNAIAVB2ABqEAQgACAKS3JFBEAgACAGIAVB2ABqIAgQAkECdGoiCS8BADsAACAFQdgAaiAJLQACEAEgACAJLQADaiEADAELCwNAIAAgCk0EQCAAIAYgBUHYAGogCBACQQJ0aiIJLwEAOwAAIAVB2ABqIAktAAIQASAAIAktAANqIQAMAQsLAkAgACAMTw0AIAAgBiAFQdgAaiAIEAIiAEECdGoiDC0AADoAACAMLQADQQFGBEAgBUHYAGogDC0AAhABDAELIAUoAlxBH0sNACAFQdgAaiAGIABBAnRqLQACEAEgBSgCXEEhSQ0AIAVBIDYCXAsgAkF9aiEMA0BBACAHIAxJIAVBQGsQBBsEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiIAIAYgBUFAayAIEAJBAnRqIgcvAQA7AAAgBUFAayAHLQACEAEgACAHLQADaiEHDAEFIAJBfmohDANAIAVBQGsQBCAHIAxLckUEQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwNAIAcgDE0EQCAHIAYgBUFAayAIEAJBAnRqIgAvAQA7AAAgBUFAayAALQACEAEgByAALQADaiEHDAELCwJAIAcgAk8NACAHIAYgBUFAayAIEAIiAEECdGoiAi0AADoAACACLQADQQFGBEAgBUFAayACLQACEAEMAQsgBSgCREEfSw0AIAVBQGsgBiAAQQJ0ai0AAhABIAUoAkRBIUkNACAFQSA2AkQLIA5BfWohAgNAQQAgBCACSSAFQShqEAQbBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2oiACAGIAVBKGogCBACQQJ0aiIELwEAOwAAIAVBKGogBC0AAhABIAAgBC0AA2ohBAwBBSAOQX5qIQIDQCAFQShqEAQgBCACS3JFBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsDQCAEIAJNBEAgBCAGIAVBKGogCBACQQJ0aiIALwEAOwAAIAVBKGogAC0AAhABIAQgAC0AA2ohBAwBCwsCQCAEIA5PDQAgBCAGIAVBKGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBKGogAi0AAhABDAELIAUoAixBH0sNACAFQShqIAYgAEECdGotAAIQASAFKAIsQSFJDQAgBUEgNgIsCwNAQQAgAyAQSSAFQRBqEAQbBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2oiACAGIAVBEGogCBACQQJ0aiICLwEAOwAAIAVBEGogAi0AAhABIAAgAi0AA2ohAwwBBSAPQX5qIQIDQCAFQRBqEAQgAyACS3JFBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsDQCADIAJNBEAgAyAGIAVBEGogCBACQQJ0aiIALwEAOwAAIAVBEGogAC0AAhABIAMgAC0AA2ohAwwBCwsCQCADIA9PDQAgAyAGIAVBEGogCBACIgBBAnRqIgItAAA6AAAgAi0AA0EBRgRAIAVBEGogAi0AAhABDAELIAUoAhRBH0sNACAFQRBqIAYgAEECdGotAAIQASAFKAIUQSFJDQAgBUEgNgIUCyABQWwgBUHYAGoQCiAFQUBrEApxIAVBKGoQCnEgBUEQahAKcRshCwwJCwAACwALAAALAAsAAAsACwAACwALQWwhCwsgBUHwAGokACALC7UEAQ5/IwBBEGsiBiQAIAZBBGogABAOQVQhBQJAIARB3AtJDQAgBi0ABCEHIANB8ARqQQBB7AAQECEIIAdBDEsNACADQdwJaiIJIAggBkEIaiAGQQxqIAEgAhAxIhAQA0UEQCAGKAIMIgQgB0sNASADQdwFaiEPIANBpAVqIREgAEEEaiESIANBqAVqIQEgBCEFA0AgBSICQX9qIQUgCCACQQJ0aigCAEUNAAsgAkEBaiEOQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgASALaiAKNgIAIAVBAWohBSAKIAxqIQoMAQsLIAEgCjYCAEEAIQUgBigCCCELA0AgBSALRkUEQCABIAUgCWotAAAiDEECdGoiDSANKAIAIg1BAWo2AgAgDyANQQF0aiINIAw6AAEgDSAFOgAAIAVBAWohBQwBCwtBACEBIANBADYCqAUgBEF/cyAHaiEJQQEhBQNAIAUgDk9FBEAgCCAFQQJ0IgtqKAIAIQwgAyALaiABNgIAIAwgBSAJanQgAWohASAFQQFqIQUMAQsLIAcgBEEBaiIBIAJrIgRrQQFqIQgDQEEBIQUgBCAIT0UEQANAIAUgDk9FBEAgBUECdCIJIAMgBEE0bGpqIAMgCWooAgAgBHY2AgAgBUEBaiEFDAELCyAEQQFqIQQMAQsLIBIgByAPIAogESADIAIgARBkIAZBAToABSAGIAc6AAYgACAGKAIENgIACyAQIQULIAZBEGokACAFC8ENAQt/IwBB8ABrIgUkAEFsIQkCQCADQQpJDQAgAi8AACEKIAIvAAIhDCACLwAEIQYgBUEIaiAEEA4CQCADIAYgCiAMampBBmoiDUkNACAFLQAKIQcgBUHYAGogAkEGaiICIAoQBiIJEAMNASAFQUBrIAIgCmoiAiAMEAYiCRADDQEgBUEoaiACIAxqIgIgBhAGIgkQAw0BIAVBEGogAiAGaiADIA1rEAYiCRADDQEgACABaiIOQX1qIQ8gBEEEaiEGQQEhCSAAIAFBA2pBAnYiAmoiCiACaiIMIAJqIg0hAyAMIQQgCiECA0AgCSADIA9JcQRAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAACAGIAVBQGsgBxACQQF0aiIILQAAIQsgBUFAayAILQABEAEgAiALOgAAIAYgBUEoaiAHEAJBAXRqIggtAAAhCyAFQShqIAgtAAEQASAEIAs6AAAgBiAFQRBqIAcQAkEBdGoiCC0AACELIAVBEGogCC0AARABIAMgCzoAACAGIAVB2ABqIAcQAkEBdGoiCC0AACELIAVB2ABqIAgtAAEQASAAIAs6AAEgBiAFQUBrIAcQAkEBdGoiCC0AACELIAVBQGsgCC0AARABIAIgCzoAASAGIAVBKGogBxACQQF0aiIILQAAIQsgBUEoaiAILQABEAEgBCALOgABIAYgBUEQaiAHEAJBAXRqIggtAAAhCyAFQRBqIAgtAAEQASADIAs6AAEgA0ECaiEDIARBAmohBCACQQJqIQIgAEECaiEAIAkgBUHYAGoQDUVxIAVBQGsQDUVxIAVBKGoQDUVxIAVBEGoQDUVxIQkMAQsLIAQgDUsgAiAMS3INAEFsIQkgACAKSw0BIApBfWohCQNAIAVB2ABqEAQgACAJT3JFBEAgBiAFQdgAaiAHEAJBAXRqIggtAAAhCyAFQdgAaiAILQABEAEgACALOgAAIAYgBUHYAGogBxACQQF0aiIILQAAIQsgBUHYAGogCC0AARABIAAgCzoAASAAQQJqIQAMAQsLA0AgBUHYAGoQBCAAIApPckUEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCwNAIAAgCkkEQCAGIAVB2ABqIAcQAkEBdGoiCS0AACEIIAVB2ABqIAktAAEQASAAIAg6AAAgAEEBaiEADAELCyAMQX1qIQADQCAFQUBrEAQgAiAAT3JFBEAgBiAFQUBrIAcQAkEBdGoiCi0AACEJIAVBQGsgCi0AARABIAIgCToAACAGIAVBQGsgBxACQQF0aiIKLQAAIQkgBUFAayAKLQABEAEgAiAJOgABIAJBAmohAgwBCwsDQCAFQUBrEAQgAiAMT3JFBEAgBiAFQUBrIAcQAkEBdGoiAC0AACEKIAVBQGsgAC0AARABIAIgCjoAACACQQFqIQIMAQsLA0AgAiAMSQRAIAYgBUFAayAHEAJBAXRqIgAtAAAhCiAFQUBrIAAtAAEQASACIAo6AAAgAkEBaiECDAELCyANQX1qIQADQCAFQShqEAQgBCAAT3JFBEAgBiAFQShqIAcQAkEBdGoiAi0AACEKIAVBKGogAi0AARABIAQgCjoAACAGIAVBKGogBxACQQF0aiICLQAAIQogBUEoaiACLQABEAEgBCAKOgABIARBAmohBAwBCwsDQCAFQShqEAQgBCANT3JFBEAgBiAFQShqIAcQAkEBdGoiAC0AACECIAVBKGogAC0AARABIAQgAjoAACAEQQFqIQQMAQsLA0AgBCANSQRAIAYgBUEoaiAHEAJBAXRqIgAtAAAhAiAFQShqIAAtAAEQASAEIAI6AAAgBEEBaiEEDAELCwNAIAVBEGoQBCADIA9PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIAYgBUEQaiAHEAJBAXRqIgAtAAAhAiAFQRBqIAAtAAEQASADIAI6AAEgA0ECaiEDDAELCwNAIAVBEGoQBCADIA5PckUEQCAGIAVBEGogBxACQQF0aiIALQAAIQIgBUEQaiAALQABEAEgAyACOgAAIANBAWohAwwBCwsDQCADIA5JBEAgBiAFQRBqIAcQAkEBdGoiAC0AACECIAVBEGogAC0AARABIAMgAjoAACADQQFqIQMMAQsLIAFBbCAFQdgAahAKIAVBQGsQCnEgBUEoahAKcSAFQRBqEApxGyEJDAELQWwhCQsgBUHwAGokACAJC8oCAQR/IwBBIGsiBSQAIAUgBBAOIAUtAAIhByAFQQhqIAIgAxAGIgIQA0UEQCAEQQRqIQIgACABaiIDQX1qIQQDQCAFQQhqEAQgACAET3JFBEAgAiAFQQhqIAcQAkEBdGoiBi0AACEIIAVBCGogBi0AARABIAAgCDoAACACIAVBCGogBxACQQF0aiIGLQAAIQggBUEIaiAGLQABEAEgACAIOgABIABBAmohAAwBCwsDQCAFQQhqEAQgACADT3JFBEAgAiAFQQhqIAcQAkEBdGoiBC0AACEGIAVBCGogBC0AARABIAAgBjoAACAAQQFqIQAMAQsLA0AgACADT0UEQCACIAVBCGogBxACQQF0aiIELQAAIQYgBUEIaiAELQABEAEgACAGOgAAIABBAWohAAwBCwsgAUFsIAVBCGoQChshAgsgBUEgaiQAIAILtgMBCX8jAEEQayIGJAAgBkEANgIMIAZBADYCCEFUIQQCQAJAIANBQGsiDCADIAZBCGogBkEMaiABIAIQMSICEAMNACAGQQRqIAAQDiAGKAIMIgcgBi0ABEEBaksNASAAQQRqIQogBkEAOgAFIAYgBzoABiAAIAYoAgQ2AgAgB0EBaiEJQQEhBANAIAQgCUkEQCADIARBAnRqIgEoAgAhACABIAU2AgAgACAEQX9qdCAFaiEFIARBAWohBAwBCwsgB0EBaiEHQQAhBSAGKAIIIQkDQCAFIAlGDQEgAyAFIAxqLQAAIgRBAnRqIgBBASAEdEEBdSILIAAoAgAiAWoiADYCACAHIARrIQhBACEEAkAgC0EDTQRAA0AgBCALRg0CIAogASAEakEBdGoiACAIOgABIAAgBToAACAEQQFqIQQMAAALAAsDQCABIABPDQEgCiABQQF0aiIEIAg6AAEgBCAFOgAAIAQgCDoAAyAEIAU6AAIgBCAIOgAFIAQgBToABCAEIAg6AAcgBCAFOgAGIAFBBGohAQwAAAsACyAFQQFqIQUMAAALAAsgAiEECyAGQRBqJAAgBAutAQECfwJAQYQgKAIAIABHIAAoAgBBAXYiAyABa0F4aiICQXhxQQhHcgR/IAIFIAMQJ0UNASACQQhqC0EQSQ0AIAAgACgCACICQQFxIAAgAWpBD2pBeHEiASAAa0EBdHI2AgAgASAANgIEIAEgASgCAEEBcSAAIAJBAXZqIAFrIgJBAXRyNgIAQYQgIAEgAkH/////B3FqQQRqQYQgKAIAIABGGyABNgIAIAEQJQsLygIBBX8CQAJAAkAgAEEIIABBCEsbZ0EfcyAAaUEBR2oiAUEESSAAIAF2cg0AIAFBAnRB/B5qKAIAIgJFDQADQCACQXhqIgMoAgBBAXZBeGoiBSAATwRAIAIgBUEIIAVBCEsbZ0Efc0ECdEGAH2oiASgCAEYEQCABIAIoAgQ2AgALDAMLIARBHksNASAEQQFqIQQgAigCBCICDQALC0EAIQMgAUEgTw0BA0AgAUECdEGAH2ooAgAiAkUEQCABQR5LIQIgAUEBaiEBIAJFDQEMAwsLIAIgAkF4aiIDKAIAQQF2QXhqIgFBCCABQQhLG2dBH3NBAnRBgB9qIgEoAgBGBEAgASACKAIENgIACwsgAigCACIBBEAgASACKAIENgIECyACKAIEIgEEQCABIAIoAgA2AgALIAMgAygCAEEBcjYCACADIAAQNwsgAwvhCwINfwV+IwBB8ABrIgckACAHIAAoAvDhASIINgJcIAEgAmohDSAIIAAoAoDiAWohDwJAAkAgBUUEQCABIQQMAQsgACgCxOABIRAgACgCwOABIREgACgCvOABIQ4gAEEBNgKM4QFBACEIA0AgCEEDRwRAIAcgCEECdCICaiAAIAJqQazQAWooAgA2AkQgCEEBaiEIDAELC0FsIQwgB0EYaiADIAQQBhADDQEgB0EsaiAHQRhqIAAoAgAQEyAHQTRqIAdBGGogACgCCBATIAdBPGogB0EYaiAAKAIEEBMgDUFgaiESIAEhBEEAIQwDQCAHKAIwIAcoAixBA3RqKQIAIhRCEIinQf8BcSEIIAcoAkAgBygCPEEDdGopAgAiFUIQiKdB/wFxIQsgBygCOCAHKAI0QQN0aikCACIWQiCIpyEJIBVCIIghFyAUQiCIpyECAkAgFkIQiKdB/wFxIgNBAk8EQAJAIAZFIANBGUlyRQRAIAkgB0EYaiADQSAgBygCHGsiCiAKIANLGyIKEAUgAyAKayIDdGohCSAHQRhqEAQaIANFDQEgB0EYaiADEAUgCWohCQwBCyAHQRhqIAMQBSAJaiEJIAdBGGoQBBoLIAcpAkQhGCAHIAk2AkQgByAYNwNIDAELAkAgA0UEQCACBEAgBygCRCEJDAMLIAcoAkghCQwBCwJAAkAgB0EYakEBEAUgCSACRWpqIgNBA0YEQCAHKAJEQX9qIgMgA0VqIQkMAQsgA0ECdCAHaigCRCIJIAlFaiEJIANBAUYNAQsgByAHKAJINgJMCwsgByAHKAJENgJIIAcgCTYCRAsgF6chAyALBEAgB0EYaiALEAUgA2ohAwsgCCALakEUTwRAIAdBGGoQBBoLIAgEQCAHQRhqIAgQBSACaiECCyAHQRhqEAQaIAcgB0EYaiAUQhiIp0H/AXEQCCAUp0H//wNxajYCLCAHIAdBGGogFUIYiKdB/wFxEAggFadB//8DcWo2AjwgB0EYahAEGiAHIAdBGGogFkIYiKdB/wFxEAggFqdB//8DcWo2AjQgByACNgJgIAcoAlwhCiAHIAk2AmggByADNgJkAkACQAJAIAQgAiADaiILaiASSw0AIAIgCmoiEyAPSw0AIA0gBGsgC0Egak8NAQsgByAHKQNoNwMQIAcgBykDYDcDCCAEIA0gB0EIaiAHQdwAaiAPIA4gESAQEB4hCwwBCyACIARqIQggBCAKEAcgAkERTwRAIARBEGohAgNAIAIgCkEQaiIKEAcgAkEQaiICIAhJDQALCyAIIAlrIQIgByATNgJcIAkgCCAOa0sEQCAJIAggEWtLBEBBbCELDAILIBAgAiAOayICaiIKIANqIBBNBEAgCCAKIAMQDxoMAgsgCCAKQQAgAmsQDyEIIAcgAiADaiIDNgJkIAggAmshCCAOIQILIAlBEE8EQCADIAhqIQMDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALDAELAkAgCUEHTQRAIAggAi0AADoAACAIIAItAAE6AAEgCCACLQACOgACIAggAi0AAzoAAyAIQQRqIAIgCUECdCIDQcAeaigCAGoiAhAXIAIgA0HgHmooAgBrIQIgBygCZCEDDAELIAggAhAMCyADQQlJDQAgAyAIaiEDIAhBCGoiCCACQQhqIgJrQQ9MBEADQCAIIAIQDCACQQhqIQIgCEEIaiIIIANJDQAMAgALAAsDQCAIIAIQByACQRBqIQIgCEEQaiIIIANJDQALCyAHQRhqEAQaIAsgDCALEAMiAhshDCAEIAQgC2ogAhshBCAFQX9qIgUNAAsgDBADDQFBbCEMIAdBGGoQBEECSQ0BQQAhCANAIAhBA0cEQCAAIAhBAnQiAmpBrNABaiACIAdqKAJENgIAIAhBAWohCAwBCwsgBygCXCEIC0G6fyEMIA8gCGsiACANIARrSw0AIAQEfyAEIAggABALIABqBUEACyABayEMCyAHQfAAaiQAIAwLkRcCFn8FfiMAQdABayIHJAAgByAAKALw4QEiCDYCvAEgASACaiESIAggACgCgOIBaiETAkACQCAFRQRAIAEhAwwBCyAAKALE4AEhESAAKALA4AEhFSAAKAK84AEhDyAAQQE2AozhAUEAIQgDQCAIQQNHBEAgByAIQQJ0IgJqIAAgAmpBrNABaigCADYCVCAIQQFqIQgMAQsLIAcgETYCZCAHIA82AmAgByABIA9rNgJoQWwhECAHQShqIAMgBBAGEAMNASAFQQQgBUEESBshFyAHQTxqIAdBKGogACgCABATIAdBxABqIAdBKGogACgCCBATIAdBzABqIAdB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IAdB0AFqJAAgEAslACAAQgA3AgAgAEEAOwEIIABBADoACyAAIAE2AgwgACACOgAKC7QFAQN/IwBBMGsiBCQAIABB/wFqIgVBfWohBgJAIAMvAQIEQCAEQRhqIAEgAhAGIgIQAw0BIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahASOgAAIAMgBEEIaiAEQRhqEBI6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0FIAEgBEEQaiAEQRhqEBI6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBSABIARBCGogBEEYahASOgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEjoAACABIAJqIABrIQIMAwsgAyAEQRBqIARBGGoQEjoAAiADIARBCGogBEEYahASOgADIANBBGohAwwAAAsACyAEQRhqIAEgAhAGIgIQAw0AIARBEGogBEEYaiADEBwgBEEIaiAEQRhqIAMQHCAAIQMDQAJAIARBGGoQBCADIAZPckUEQCADIARBEGogBEEYahAROgAAIAMgBEEIaiAEQRhqEBE6AAEgBEEYahAERQ0BIANBAmohAwsgBUF+aiEFAn8DQEG6fyECIAMiASAFSw0EIAEgBEEQaiAEQRhqEBE6AAAgAUEBaiEDIARBGGoQBEEDRgRAQQIhAiAEQQhqDAILIAMgBUsNBCABIARBCGogBEEYahAROgABIAFBAmohA0EDIQIgBEEYahAEQQNHDQALIARBEGoLIQUgAyAFIARBGGoQEToAACABIAJqIABrIQIMAgsgAyAEQRBqIARBGGoQEToAAiADIARBCGogBEEYahAROgADIANBBGohAwwAAAsACyAEQTBqJAAgAgtpAQF/An8CQAJAIAJBB00NACABKAAAQbfIwuF+Rw0AIAAgASgABDYCmOIBQWIgAEEQaiABIAIQPiIDEAMNAhogAEKBgICAEDcDiOEBIAAgASADaiACIANrECoMAQsgACABIAIQKgtBAAsLrQMBBn8jAEGAAWsiAyQAQWIhCAJAIAJBCUkNACAAQZjQAGogAUEIaiIEIAJBeGogAEGY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wOABCwutAgIEfwF+IwBBQGoiBCQAAkACQCACQQhJDQAgASgAAEFwcUHQ1LTCAUcNACABIAIQIiEBIABCADcDCCAAQQA2AgQgACABNgIADAELIARBGGogASACEC0iAxADBEAgACADEBoMAQsgAwRAIABBuH8QGgwBCyACIAQoAjAiA2shAiABIANqIQMDQAJAIAAgAyACIARBCGoQLCIFEAMEfyAFBSACIAVBA2oiBU8NAUG4fwsQGgwCCyAGQQFqIQYgAiAFayECIAMgBWohAyAEKAIMRQ0ACyAEKAI4BEAgAkEDTQRAIABBuH8QGgwCCyADQQRqIQMLIAQoAighAiAEKQMYIQcgAEEANgIEIAAgAyABazYCACAAIAIgBmytIAcgB0J/URs3AwgLIARBQGskAAslAQF/IwBBEGsiAiQAIAIgACABEFEgAigCACEAIAJBEGokACAAC30BBH8jAEGQBGsiBCQAIARB/wE2AggCQCAEQRBqIARBCGogBEEMaiABIAIQFSIGEAMEQCAGIQUMAQtBVCEFIAQoAgwiB0EGSw0AIAMgBEEQaiAEKAIIIAcQQSIFEAMNACAAIAEgBmogAiAGayADEDwhBQsgBEGQBGokACAFC4cBAgJ/An5BABAWIQMCQANAIAEgA08EQAJAIAAoAABBcHFB0NS0wgFGBEAgACABECIiAhADRQ0BQn4PCyAAIAEQVSIEQn1WDQMgBCAFfCIFIARUIQJCfiEEIAINAyAAIAEQUiICEAMNAwsgASACayEBIAAgAmohAAwBCwtCfiAFIAEbIQQLIAQLPwIBfwF+IwBBMGsiAiQAAn5CfiACQQhqIAAgARAtDQAaQgAgAigCHEEBRg0AGiACKQMICyEDIAJBMGokACADC40BAQJ/IwBBMGsiASQAAkAgAEUNACAAKAKI4gENACABIABB/OEBaigCADYCKCABIAApAvThATcDICAAEDAgACgCqOIBIQIgASABKAIoNgIYIAEgASkDIDcDECACIAFBEGoQGyAAQQA2AqjiASABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALKgECfyMAQRBrIgAkACAAQQA2AgggAEIANwMAIAAQWCEBIABBEGokACABC4cBAQN/IwBBEGsiAiQAAkAgACgCAEUgACgCBEVzDQAgAiAAKAIINgIIIAIgACkCADcDAAJ/IAIoAgAiAQRAIAIoAghBqOMJIAERBQAMAQtBqOMJECgLIgFFDQAgASAAKQIANwL04QEgAUH84QFqIAAoAgg2AgAgARBZIAEhAwsgAkEQaiQAIAMLywEBAn8jAEEgayIBJAAgAEGBgIDAADYCtOIBIABBADYCiOIBIABBADYC7OEBIABCADcDkOIBIABBADYCpOMJIABBADYC3OIBIABCADcCzOIBIABBADYCvOIBIABBADYCxOABIABCADcCnOIBIABBpOIBakIANwIAIABBrOIBakEANgIAIAFCADcCECABQgA3AhggASABKQMYNwMIIAEgASkDEDcDACABKAIIQQh2QQFxIQIgAEEANgLg4gEgACACNgKM4gEgAUEgaiQAC3YBA38jAEEwayIBJAAgAARAIAEgAEHE0AFqIgIoAgA2AiggASAAKQK80AE3AyAgACgCACEDIAEgAigCADYCGCABIAApArzQATcDECADIAFBEGoQGyABIAEoAig2AgggASABKQMgNwMAIAAgARAbCyABQTBqJAALzAEBAX8gACABKAK00AE2ApjiASAAIAEoAgQiAjYCwOABIAAgAjYCvOABIAAgAiABKAIIaiICNgK44AEgACACNgLE4AEgASgCuNABBEAgAEKBgICAEDcDiOEBIAAgAUGk0ABqNgIMIAAgAUGUIGo2AgggACABQZwwajYCBCAAIAFBDGo2AgAgAEGs0AFqIAFBqNABaigCADYCACAAQbDQAWogAUGs0AFqKAIANgIAIABBtNABaiABQbDQAWooAgA2AgAPCyAAQgA3A4jhAQs7ACACRQRAQbp/DwsgBEUEQEFsDwsgAiAEEGAEQCAAIAEgAiADIAQgBRBhDwsgACABIAIgAyAEIAUQZQtGAQF/IwBBEGsiBSQAIAVBCGogBBAOAn8gBS0ACQRAIAAgASACIAMgBBAyDAELIAAgASACIAMgBBA0CyEAIAVBEGokACAACzQAIAAgAyAEIAUQNiIFEAMEQCAFDwsgBSAESQR/IAEgAiADIAVqIAQgBWsgABA1BUG4fwsLRgEBfyMAQRBrIgUkACAFQQhqIAQQDgJ/IAUtAAkEQCAAIAEgAiADIAQQYgwBCyAAIAEgAiADIAQQNQshACAFQRBqJAAgAAtZAQF/QQ8hAiABIABJBEAgAUEE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",Jr=new WeakMap;let Xr=0,Kr;class ei extends ki{constructor(e){super(e),this.transcoderPath="",this.transcoderBinary=null,this.transcoderPending=null,this.workerPool=new Dm,this.workerSourceURL="",this.workerConfig=null,typeof MSC_TRANSCODER<"u"&&console.warn('THREE.KTX2Loader: Please update to latest "basis_transcoder". "msc_basis_transcoder" is no longer supported in three.js r125+.')}setTranscoderPath(e){return this.transcoderPath=e,this}setWorkerLimit(e){return this.workerPool.setWorkerLimit(e),this}detectSupport(e){return this.workerConfig={astcSupported:e.extensions.has("WEBGL_compressed_texture_astc"),etc1Supported:e.extensions.has("WEBGL_compressed_texture_etc1"),etc2Supported:e.extensions.has("WEBGL_compressed_texture_etc"),dxtSupported:e.extensions.has("WEBGL_compressed_texture_s3tc"),bptcSupported:e.extensions.has("EXT_texture_compression_bptc"),pvrtcSupported:e.extensions.has("WEBGL_compressed_texture_pvrtc")||e.extensions.has("WEBKIT_WEBGL_compressed_texture_pvrtc")},e.capabilities.isWebGL2&&(this.workerConfig.etc1Supported=!1),this}init(){if(!this.transcoderPending){const e=new Qi(this.manager);e.setPath(this.transcoderPath),e.setWithCredentials(this.withCredentials);const t=e.loadAsync("basis_transcoder.js"),i=new Qi(this.manager);i.setPath(this.transcoderPath),i.setResponseType("arraybuffer"),i.setWithCredentials(this.withCredentials);const n=i.loadAsync("basis_transcoder.wasm");this.transcoderPending=Promise.all([t,n]).then(([s,r])=>{const a=ei.BasisWorker.toString(),l=["/* constants */","let _EngineFormat = "+JSON.stringify(ei.EngineFormat),"let _TranscoderFormat = "+JSON.stringify(ei.TranscoderFormat),"let _BasisFormat = "+JSON.stringify(ei.BasisFormat),"/* basis_transcoder.js */",s,"/* worker */",a.substring(a.indexOf("{")+1,a.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([l])),this.transcoderBinary=r,this.workerPool.setWorkerCreator(()=>{const c=new Worker(this.workerSourceURL),h=this.transcoderBinary.slice(0);return c.postMessage({type:"init",config:this.workerConfig,transcoderBinary:h},[h]),c})}),Xr>0&&console.warn("THREE.KTX2Loader: Multiple active KTX2 loaders may cause performance issues. Use a single KTX2Loader instance, or call .dispose() on old instances."),Xr++}return this.transcoderPending}load(e,t,i,n){if(this.workerConfig===null)throw new Error("THREE.KTX2Loader: Missing initialization with `.detectSupport( renderer )`.");const s=new Qi(this.manager);s.setResponseType("arraybuffer"),s.setWithCredentials(this.withCredentials),s.load(e,r=>{if(Jr.has(r))return Jr.get(r).promise.then(t).catch(n);this._createTexture(r).then(a=>t?t(a):null).catch(n)},i,n)}_createTextureFrom(e,t){const{mipmaps:i,width:n,height:s,format:r,type:a,error:l,dfdTransferFn:c,dfdFlags:h}=e;if(a==="error")return Promise.reject(l);const u=t.layerCount>1?new Xp(i,n,s,t.layerCount,r,Ct):new dc(i,n,s,r,Ct);return u.minFilter=i.length===1?Je:Ci,u.magFilter=Je,u.generateMipmaps=!1,u.needsUpdate=!0,u.encoding=c===Pm?Se:ti,u.premultiplyAlpha=!!(h&Qm),u}async _createTexture(e,t={}){const i=Um(new Uint8Array(e));if(i.vkFormat!==Fm)return Om(i);const n=t,s=this.init().then(()=>this.workerPool.postMessage({type:"transcode",buffer:e,taskConfig:n},[e])).then(r=>this._createTextureFrom(r.data,i));return Jr.set(e,{promise:s}),s}dispose(){return this.workerPool.dispose(),this.workerSourceURL&&URL.revokeObjectURL(this.workerSourceURL),Xr--,this}}ei.BasisFormat={ETC1S:0,UASTC_4x4:1};ei.TranscoderFormat={ETC1:0,ETC2:1,BC1:2,BC3:3,BC4:4,BC5:5,BC7_M6_OPAQUE_ONLY:6,BC7_M5:7,PVRTC1_4_RGB:8,PVRTC1_4_RGBA:9,ASTC_4x4:10,ATC_RGB:11,ATC_RGBA_INTERPOLATED_ALPHA:12,RGBA32:13,RGB565:14,BGR565:15,RGBA4444:16};ei.EngineFormat={RGBAFormat:ht,RGBA_ASTC_4x4_Format:la,RGBA_BPTC_Format:ca,RGBA_ETC2_EAC_Format:oa,RGBA_PVRTC_4BPPV1_Format:ra,RGBA_S3TC_DXT5_Format:Vs,RGB_ETC1_Format:Ol,RGB_ETC2_Format:aa,RGB_PVRTC_4BPPV1_Format:sa,RGB_S3TC_DXT1_Format:zs};ei.BasisWorker=function(){let o,e,t;const i=_EngineFormat,n=_TranscoderFormat,s=_BasisFormat;self.addEventListener("message",function(g){const p=g.data;switch(p.type){case"init":o=p.config,r(p.transcoderBinary);break;case"transcode":e.then(()=>{try{const{width:A,height:m,hasAlpha:I,mipmaps:_,format:v,dfdTransferFn:E,dfdFlags:b}=a(p.buffer),B=[];for(let x=0;x<_.length;++x)B.push(_[x].data.buffer);self.postMessage({type:"transcode",id:p.id,width:A,height:m,hasAlpha:I,mipmaps:_,format:v,dfdTransferFn:E,dfdFlags:b},B)}catch(A){console.error(A),self.postMessage({type:"error",id:p.id,error:A.message})}});break}});function r(g){e=new Promise(p=>{t={wasmBinary:g,onRuntimeInitialized:p},BASIS(t)}).then(()=>{t.initializeBasis(),t.KTX2File===void 0&&console.warn("THREE.KTX2Loader: Please update Basis Universal transcoder.")})}function a(g){const p=new t.KTX2File(new Uint8Array(g));function A(){p.close(),p.delete()}if(!p.isValid())throw A(),new Error("THREE.KTX2Loader:	Invalid or unsupported .ktx2 file");const m=p.isUASTC()?s.UASTC_4x4:s.ETC1S,I=p.getWidth(),_=p.getHeight(),v=p.getLayers()||1,E=p.getLevels(),b=p.getHasAlpha(),B=p.getDFDTransferFunc(),x=p.getDFDFlags(),{transcoderFormat:w,engineFormat:R}=u(m,I,_,b);if(!I||!_||!E)throw A(),new Error("THREE.KTX2Loader:	Invalid texture");if(!p.startTranscoding())throw A(),new Error("THREE.KTX2Loader: .startTranscoding failed");const F=[];for(let O=0;O<E;O++){const Q=[];let D,G;for(let K=0;K<v;K++){const W=p.getImageLevelInfo(O,K,0);D=W.origWidth,G=W.origHeight;const k=new Uint8Array(p.getImageTranscodedSizeInBytes(O,K,0,w));if(!p.transcodeImage(k,O,K,0,w,0,-1,-1))throw A(),new Error("THREE.KTX2Loader: .transcodeImage failed.");Q.push(k)}F.push({data:f(Q),width:D,height:G})}return A(),{width:I,height:_,hasAlpha:b,mipmaps:F,format:R,dfdTransferFn:B,dfdFlags:x}}const l=[{if:"astcSupported",basisFormat:[s.UASTC_4x4],transcoderFormat:[n.ASTC_4x4,n.ASTC_4x4],engineFormat:[i.RGBA_ASTC_4x4_Format,i.RGBA_ASTC_4x4_Format],priorityETC1S:1/0,priorityUASTC:1,needsPowerOfTwo:!1},{if:"bptcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.BC7_M5,n.BC7_M5],engineFormat:[i.RGBA_BPTC_Format,i.RGBA_BPTC_Format],priorityETC1S:3,priorityUASTC:2,needsPowerOfTwo:!1},{if:"dxtSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.BC1,n.BC3],engineFormat:[i.RGB_S3TC_DXT1_Format,i.RGBA_S3TC_DXT5_Format],priorityETC1S:4,priorityUASTC:5,needsPowerOfTwo:!1},{if:"etc2Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.ETC1,n.ETC2],engineFormat:[i.RGB_ETC2_Format,i.RGBA_ETC2_EAC_Format],priorityETC1S:1,priorityUASTC:3,needsPowerOfTwo:!1},{if:"etc1Supported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.ETC1],engineFormat:[i.RGB_ETC1_Format],priorityETC1S:2,priorityUASTC:4,needsPowerOfTwo:!1},{if:"pvrtcSupported",basisFormat:[s.ETC1S,s.UASTC_4x4],transcoderFormat:[n.PVRTC1_4_RGB,n.PVRTC1_4_RGBA],engineFormat:[i.RGB_PVRTC_4BPPV1_Format,i.RGBA_PVRTC_4BPPV1_Format],priorityETC1S:5,priorityUASTC:6,needsPowerOfTwo:!0}],c=l.sort(function(g,p){return g.priorityETC1S-p.priorityETC1S}),h=l.sort(function(g,p){return g.priorityUASTC-p.priorityUASTC});function u(g,p,A,m){let I,_;const v=g===s.ETC1S?c:h;for(let E=0;E<v.length;E++){const b=v[E];if(o[b.if]&&b.basisFormat.includes(g)&&!(m&&b.transcoderFormat.length<2)&&!(b.needsPowerOfTwo&&!(d(p)&&d(A))))return I=b.transcoderFormat[m?1:0],_=b.engineFormat[m?1:0],{transcoderFormat:I,engineFormat:_}}return console.warn("THREE.KTX2Loader: No suitable compressed texture format found. Decoding to RGBA32."),I=n.RGBA32,_=i.RGBAFormat,{transcoderFormat:I,engineFormat:_}}function d(g){return g<=2?!0:(g&g-1)===0&&g!==0}function f(g){let p=0;for(const I of g)p+=I.byteLength;const A=new Uint8Array(p);let m=0;for(const I of g)A.set(I,m),m+=I.byteLength;return A}};const Bl={[Tc]:ht,[bc]:ht,[yc]:ht,[Ha]:ht,[Bc]:jn,[Mc]:jn,[vc]:jn,[Oa]:jn,[Sc]:Kn,[wc]:Kn,[Ga]:Kn,[Cc]:Kn},jr={[Tc]:yt,[bc]:wt,[yc]:Ct,[Ha]:Ct,[Bc]:yt,[Mc]:wt,[vc]:Ct,[Oa]:Ct,[Sc]:yt,[wc]:wt,[Ga]:Ct,[Cc]:Ct},Gm={[Ha]:Se,[Oa]:Se,[Ga]:Se};async function Om(o){const{vkFormat:e,pixelWidth:t,pixelHeight:i,pixelDepth:n}=o;if(Bl[e]===void 0)throw new Error("THREE.KTX2Loader: Unsupported vkFormat.");const s=o.levels[0];let r,a;if(o.supercompressionScheme===Rm)r=s.levelData;else if(o.supercompressionScheme===Lm)Kr||(Kr=new Promise(async c=>{const h=new km;await h.init(),c(h)})),r=(await Kr).decode(s.levelData,s.uncompressedByteLength);else throw new Error("THREE.KTX2Loader: Unsupported supercompressionScheme.");jr[e]===yt?a=new Float32Array(r.buffer,r.byteOffset,r.byteLength/Float32Array.BYTES_PER_ELEMENT):jr[e]===wt?a=new Uint16Array(r.buffer,r.byteOffset,r.byteLength/Uint16Array.BYTES_PER_ELEMENT):a=r;const l=n===0?new Ba(a,t,i):new Kl(a,t,i,n);return l.type=jr[e],l.format=Bl[e],l.encoding=Gm[e]||ti,l.needsUpdate=!0,Promise.resolve(l)}async function Hm(o,e){const t=new Jg(Pi),i=new wm(Pi);i.setDecoderPath("decoder/draco/"),t.setDRACOLoader(i);const n=new ei(Pi).setTranscoderPath("decoder/basis/").detectSupport(e);return t.setKTX2Loader(n),t.register(r=>new bm(r)),t.register(r=>new Tm(r)),{gltfData:await t.loadAsync(`${o}`)}}class zm extends ag{constructor(e){super(e),this.type=wt}parse(e){const a=function(_,v){switch(_){case 1:console.error("THREE.RGBELoader Read Error: "+(v||""));break;case 2:console.error("THREE.RGBELoader Write Error: "+(v||""));break;case 3:console.error("THREE.RGBELoader Bad File Format: "+(v||""));break;default:case 4:console.error("THREE.RGBELoader: Error: "+(v||""))}return-1},u=`
`,d=function(_,v,E){v=v||1024;let B=_.pos,x=-1,w=0,R="",F=String.fromCharCode.apply(null,new Uint16Array(_.subarray(B,B+128)));for(;0>(x=F.indexOf(u))&&w<v&&B<_.byteLength;)R+=F,w+=F.length,B+=128,F+=String.fromCharCode.apply(null,new Uint16Array(_.subarray(B,B+128)));return-1<x?(E!==!1&&(_.pos+=w+x+1),R+F.slice(0,x)):!1},f=function(_){const v=/^#\?(\S+)/,E=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,x=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,w={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let R,F;if(_.pos>=_.byteLength||!(R=d(_)))return a(1,"no header found");if(!(F=R.match(v)))return a(3,"bad initial token");for(w.valid|=1,w.programtype=F[1],w.string+=R+`
`;R=d(_),R!==!1;){if(w.string+=R+`
`,R.charAt(0)==="#"){w.comments+=R+`
`;continue}if((F=R.match(E))&&(w.gamma=parseFloat(F[1])),(F=R.match(b))&&(w.exposure=parseFloat(F[1])),(F=R.match(B))&&(w.valid|=2,w.format=F[1]),(F=R.match(x))&&(w.valid|=4,w.height=parseInt(F[1],10),w.width=parseInt(F[2],10)),w.valid&2&&w.valid&4)break}return w.valid&2?w.valid&4?w:a(3,"missing image size specifier"):a(3,"missing format specifier")},g=function(_,v,E){const b=v;if(b<8||b>32767||_[0]!==2||_[1]!==2||_[2]&128)return new Uint8Array(_);if(b!==(_[2]<<8|_[3]))return a(3,"wrong scanline width");const B=new Uint8Array(4*v*E);if(!B.length)return a(4,"unable to allocate buffer space");let x=0,w=0;const R=4*b,F=new Uint8Array(4),O=new Uint8Array(R);let Q=E;for(;Q>0&&w<_.byteLength;){if(w+4>_.byteLength)return a(1);if(F[0]=_[w++],F[1]=_[w++],F[2]=_[w++],F[3]=_[w++],F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=b)return a(3,"bad rgbe scanline format");let D=0,G;for(;D<R&&w<_.byteLength;){G=_[w++];const W=G>128;if(W&&(G-=128),G===0||D+G>R)return a(3,"bad scanline data");if(W){const k=_[w++];for(let j=0;j<G;j++)O[D++]=k}else O.set(_.subarray(w,w+G),D),D+=G,w+=G}const K=b;for(let W=0;W<K;W++){let k=0;B[x]=O[W+k],k+=b,B[x+1]=O[W+k],k+=b,B[x+2]=O[W+k],k+=b,B[x+3]=O[W+k],x+=4}Q--}return B},p=function(_,v,E,b){const B=_[v+3],x=Math.pow(2,B-128)/255;E[b+0]=_[v+0]*x,E[b+1]=_[v+1]*x,E[b+2]=_[v+2]*x,E[b+3]=1},A=function(_,v,E,b){const B=_[v+3],x=Math.pow(2,B-128)/255;E[b+0]=Us.toHalfFloat(Math.min(_[v+0]*x,65504)),E[b+1]=Us.toHalfFloat(Math.min(_[v+1]*x,65504)),E[b+2]=Us.toHalfFloat(Math.min(_[v+2]*x,65504)),E[b+3]=Us.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const I=f(m);if(I!==-1){const _=I.width,v=I.height,E=g(m.subarray(m.pos),_,v);if(E!==-1){let b,B,x;switch(this.type){case yt:x=E.length/4;const w=new Float32Array(x*4);for(let F=0;F<x;F++)p(E,F*4,w,F*4);b=w,B=yt;break;case wt:x=E.length/4;const R=new Uint16Array(x*4);for(let F=0;F<x;F++)A(E,F*4,R,F*4);b=R,B=wt;break;default:console.error("THREE.RGBELoader: unsupported type: ",this.type);break}return{width:_,height:v,data:b,header:I.string,gamma:I.gamma,exposure:I.exposure,type:B}}}return null}setDataType(e){return this.type=e,this}load(e,t,i,n){function s(r,a){switch(r.type){case yt:case wt:r.encoding=ti,r.minFilter=Je,r.magFilter=Je,r.generateMipmaps=!1,r.flipY=!0;break}t&&t(r,a)}return super.load(e,s,i,n)}}async function Vm(){const o=new zm(Pi).setPath("/hdri/"),e=new Qa(Pi).setPath("/hdri/"),[t,i]=await Promise.all([e.loadAsync("lythwood_room_1k.jpg"),o.loadAsync("lythwood_room_1k.hdr")]);return t.encoding=Se,t.mapping=is,i.mapping=is,{background1:t,hdri1:i}}var ts=function(){var o=0,e=document.createElement("div");e.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",e.addEventListener("click",function(h){h.preventDefault(),i(++o%e.children.length)},!1);function t(h){return e.appendChild(h.dom),h}function i(h){for(var u=0;u<e.children.length;u++)e.children[u].style.display=u===h?"block":"none";o=h}var n=(performance||Date).now(),s=n,r=0,a=t(new ts.Panel("FPS","#0ff","#002")),l=t(new ts.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var c=t(new ts.Panel("MB","#f08","#201"));return i(0),{REVISION:16,dom:e,addPanel:t,showPanel:i,begin:function(){n=(performance||Date).now()},end:function(){r++;var h=(performance||Date).now();if(l.update(h-n,200),h>=s+1e3&&(a.update(r*1e3/(h-s),100),s=h,r=0,c)){var u=performance.memory;c.update(u.usedJSHeapSize/1048576,u.jsHeapSizeLimit/1048576)}return h},update:function(){n=this.end()},domElement:e,setMode:i}};ts.Panel=function(o,e,t){var i=1/0,n=0,s=Math.round,r=s(window.devicePixelRatio||1),a=80*r,l=48*r,c=3*r,h=2*r,u=3*r,d=15*r,f=74*r,g=30*r,p=document.createElement("canvas");p.width=a,p.height=l,p.style.cssText="width:80px;height:48px";var A=p.getContext("2d");return A.font="bold "+9*r+"px Helvetica,Arial,sans-serif",A.textBaseline="top",A.fillStyle=t,A.fillRect(0,0,a,l),A.fillStyle=e,A.fillText(o,c,h),A.fillRect(u,d,f,g),A.fillStyle=t,A.globalAlpha=.9,A.fillRect(u,d,f,g),{dom:p,update:function(m,I){i=Math.min(i,m),n=Math.max(n,m),A.fillStyle=t,A.globalAlpha=1,A.fillRect(0,0,a,d),A.fillStyle=e,A.fillText(s(m)+" "+o+" ("+s(i)+"-"+s(n)+")",c,h),A.drawImage(p,u+r,d,f-r,g,u,d,f-r,g),A.fillRect(u+f-r,d,r,g),A.fillStyle=t,A.globalAlpha=.9,A.fillRect(u+f-r,d,r,s((1-m/I)*g))}}};let Tl,Dl,Rl;class Wm{createHelpers(e){const t=new Sg(5),i=new bg(10,10),n=new Li;n.add(t),n.add(i),e.add(n)}logSceneInfo(e){console.log(e.info.render),console.log(e.info.memory),console.log(e.info.programs)}createGui(e){Dl=new ka;const t=Dl.addFolder("Performance");Rl=document.createElement("div"),t.$children.appendChild(Rl),t.open()}displayStats(){Tl=new ts}update(e){Tl.update()}}class As{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const qm=new nr(-1,1,1,-1,0,1),za=new Rt;za.setAttribute("position",new Mt([-1,3,0,-1,-1,0,3,-1,0],3));za.setAttribute("uv",new Mt([0,2,0,0,2,0],2));class Dc{constructor(e){this._mesh=new Dt(za,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,qm)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}const Ys={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Rc extends As{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$t.clone(e.uniforms),this.material=new pt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Dc(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ll extends As{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){const n=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let r,a;this.inverse?(r=0,a=1):(r=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),s.buffers.stencil.setFunc(n.ALWAYS,r,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(n.EQUAL,1,4294967295),s.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),s.buffers.stencil.setLocked(!0)}}class Ym extends As{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Jm{constructor(e,t){if(this.renderer=e,t===void 0){const i=e.getSize(new me);this._pixelRatio=e.getPixelRatio(),this._width=i.width,this._height=i.height,t=new Tt(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rc(Ys),this.clock=new _c}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let i=!1;for(let n=0,s=this.passes.length;n<s;n++){const r=this.passes[n];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),r.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),r.needsSwap){if(i){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ll!==void 0&&(r instanceof Ll?i=!0:r instanceof Ym&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new me);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}function Xm(o){return new Jm(o)}const Km={uniforms:{tDiffuse:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 tex = texture2D( tDiffuse, vUv );

			gl_FragColor = LinearTosRGB( tex );

		}`};class jm extends As{constructor(e,t,i,n,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ie}render(e,t,i){const n=e.autoClear;e.autoClear=!1;let s,r;this.overrideMaterial!==void 0&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=r),e.autoClear=n}}function Zm(o,e,t){return o.split(e).join(t)}const $m=Ce.meshphong_frag.slice(0,Ce.meshphong_frag.indexOf("void main() {")),e_=Ce.meshphong_frag.slice(Ce.meshphong_frag.indexOf("void main() {")),t_={uniforms:$t.merge([Jt.phong.uniforms,{thicknessMap:{value:null},thicknessColor:{value:new Ie(16777215)},thicknessDistortion:{value:.1},thicknessAmbient:{value:0},thicknessAttenuation:{value:.1},thicknessPower:{value:2},thicknessScale:{value:10}}]),vertexShader:["#define USE_UV",Ce.meshphong_vert].join(`
`),fragmentShader:["#define USE_UV","#define SUBSURFACE",$m,"uniform sampler2D thicknessMap;","uniform float thicknessPower;","uniform float thicknessScale;","uniform float thicknessDistortion;","uniform float thicknessAmbient;","uniform float thicknessAttenuation;","uniform vec3 thicknessColor;","void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in GeometricContext geometry, inout ReflectedLight reflectedLight) {","	vec3 thickness = thicknessColor * texture2D(thicknessMap, uv).r;","	vec3 scatteringHalf = normalize(directLight.direction + (geometry.normal * thicknessDistortion));","	float scatteringDot = pow(saturate(dot(geometry.viewDir, -scatteringHalf)), thicknessPower) * thicknessScale;","	vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * thickness;","	reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;","}",e_.replace("#include <lights_fragment_begin>",Zm(Ce.lights_fragment_begin,"RE_Direct( directLight, geometry, material, reflectedLight );",["RE_Direct( directLight, geometry, material, reflectedLight );","#if defined( SUBSURFACE ) && defined( USE_UV )"," RE_Direct_Scattering(directLight, vUv, geometry, reflectedLight);","#endif"].join(`
`)))].join(`
`)},jt={defines:{MAX_STEP:0,PERSPECTIVE_CAMERA:!0,DISTANCE_ATTENUATION:!0,FRESNEL:!0,INFINITE_THICK:!1,SELECTIVE:!1},uniforms:{tDiffuse:{value:null},tNormal:{value:null},tMetalness:{value:null},tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null},resolution:{value:new me},cameraProjectionMatrix:{value:new ve},cameraInverseProjectionMatrix:{value:new ve},opacity:{value:.5},maxDistance:{value:180},cameraRange:{value:0},thickness:{value:.018}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`
		// precision highp float;
		precision highp sampler2D;
		varying vec2 vUv;
		uniform sampler2D tDepth;
		uniform sampler2D tNormal;
		uniform sampler2D tMetalness;
		uniform sampler2D tDiffuse;
		uniform float cameraRange;
		uniform vec2 resolution;
		uniform float opacity;
		uniform float cameraNear;
		uniform float cameraFar;
		uniform float maxDistance;
		uniform float thickness;
		uniform mat4 cameraProjectionMatrix;
		uniform mat4 cameraInverseProjectionMatrix;
		#include <packing>
		float pointToLineDistance(vec3 x0, vec3 x1, vec3 x2) {
			//x0: point, x1: linePointA, x2: linePointB
			//https://mathworld.wolfram.com/Point-LineDistance3-Dimensional.html
			return length(cross(x0-x1,x0-x2))/length(x2-x1);
		}
		float pointPlaneDistance(vec3 point,vec3 planePoint,vec3 planeNormal){
			// https://mathworld.wolfram.com/Point-PlaneDistance.html
			//// https://en.wikipedia.org/wiki/Plane_(geometry)
			//// http://paulbourke.net/geometry/pointlineplane/
			float a=planeNormal.x,b=planeNormal.y,c=planeNormal.z;
			float x0=point.x,y0=point.y,z0=point.z;
			float x=planePoint.x,y=planePoint.y,z=planePoint.z;
			float d=-(a*x+b*y+c*z);
			float distance=(a*x0+b*y0+c*z0+d)/sqrt(a*a+b*b+c*c);
			return distance;
		}
		float getDepth( const in vec2 uv ) {
			return texture2D( tDepth, uv ).x;
		}
		float getViewZ( const in float depth ) {
			#ifdef PERSPECTIVE_CAMERA
				return perspectiveDepthToViewZ( depth, cameraNear, cameraFar );
			#else
				return orthographicDepthToViewZ( depth, cameraNear, cameraFar );
			#endif
		}
		vec3 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {
			vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc
			clipPosition *= clipW; //clip
			return ( cameraInverseProjectionMatrix * clipPosition ).xyz;//view
		}
		vec3 getViewNormal( const in vec2 uv ) {
			return unpackRGBToNormal( texture2D( tNormal, uv ).xyz );
		}
		vec2 viewPositionToXY(vec3 viewPosition){
			vec2 xy;
			vec4 clip=cameraProjectionMatrix*vec4(viewPosition,1);
			xy=clip.xy;//clip
			float clipW=clip.w;
			xy/=clipW;//NDC
			xy=(xy+1.)/2.;//uv
			xy*=resolution;//screen
			return xy;
		}
		void main(){
			#ifdef SELECTIVE
				float metalness=texture2D(tMetalness,vUv).r;
				if(metalness==0.) return;
			#endif

			float depth = getDepth( vUv );
			float viewZ = getViewZ( depth );
			if(-viewZ>=cameraFar) return;

			float clipW = cameraProjectionMatrix[2][3] * viewZ+cameraProjectionMatrix[3][3];
			vec3 viewPosition=getViewPosition( vUv, depth, clipW );

			vec2 d0=gl_FragCoord.xy;
			vec2 d1;

			vec3 viewNormal=getViewNormal( vUv );

			#ifdef PERSPECTIVE_CAMERA
				vec3 viewIncidentDir=normalize(viewPosition);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#else
				vec3 viewIncidentDir=vec3(0,0,-1);
				vec3 viewReflectDir=reflect(viewIncidentDir,viewNormal);
			#endif

			float maxReflectRayLen=maxDistance/dot(-viewIncidentDir,viewNormal);
			// dot(a,b)==length(a)*length(b)*cos(theta) // https://www.mathsisfun.com/algebra/vectors-dot-product.html
			// if(a.isNormalized&&b.isNormalized) dot(a,b)==cos(theta)
			// maxDistance/maxReflectRayLen=cos(theta)
			// maxDistance/maxReflectRayLen==dot(a,b)
			// maxReflectRayLen==maxDistance/dot(a,b)

			vec3 d1viewPosition=viewPosition+viewReflectDir*maxReflectRayLen;
			#ifdef PERSPECTIVE_CAMERA
				if(d1viewPosition.z>-cameraNear){
					//https://tutorial.math.lamar.edu/Classes/CalcIII/EqnsOfLines.aspx
					float t=(-cameraNear-viewPosition.z)/viewReflectDir.z;
					d1viewPosition=viewPosition+viewReflectDir*t;
				}
			#endif
			d1=viewPositionToXY(d1viewPosition);

			float totalLen=length(d1-d0);
			float xLen=d1.x-d0.x;
			float yLen=d1.y-d0.y;
			float totalStep=max(abs(xLen),abs(yLen));
			float xSpan=xLen/totalStep;
			float ySpan=yLen/totalStep;
			for(float i=0.;i<float(MAX_STEP);i++){
				if(i>=totalStep) break;
				vec2 xy=vec2(d0.x+i*xSpan,d0.y+i*ySpan);
				if(xy.x<0.||xy.x>resolution.x||xy.y<0.||xy.y>resolution.y) break;
				float s=length(xy-d0)/totalLen;
				vec2 uv=xy/resolution;

				float d = getDepth(uv);
				float vZ = getViewZ( d );
				if(-vZ>=cameraFar) continue;
				float cW = cameraProjectionMatrix[2][3] * vZ+cameraProjectionMatrix[3][3];
				vec3 vP=getViewPosition( uv, d, cW );

				#ifdef PERSPECTIVE_CAMERA
					// https://comp.nus.edu.sg/~lowkl/publications/lowk_persp_interp_techrep.pdf
					float recipVPZ=1./viewPosition.z;
					float viewReflectRayZ=1./(recipVPZ+s*(1./d1viewPosition.z-recipVPZ));
				#else
					float viewReflectRayZ=viewPosition.z+s*(d1viewPosition.z-viewPosition.z);
				#endif

				// if(viewReflectRayZ>vZ) continue; // will cause "npm run make-screenshot webgl_postprocessing_ssr" high probability hang.
				// https://github.com/mrdoob/three.js/pull/21539#issuecomment-821061164
				if(viewReflectRayZ<=vZ){

					bool hit;
					#ifdef INFINITE_THICK
						hit=true;
					#else
						float away=pointToLineDistance(vP,viewPosition,d1viewPosition);

						float minThickness;
						vec2 xyNeighbor=xy;
						xyNeighbor.x+=1.;
						vec2 uvNeighbor=xyNeighbor/resolution;
						vec3 vPNeighbor=getViewPosition(uvNeighbor,d,cW);
						minThickness=vPNeighbor.x-vP.x;
						minThickness*=3.;
						float tk=max(minThickness,thickness);

						hit=away<=tk;
					#endif

					if(hit){
						vec3 vN=getViewNormal( uv );
						if(dot(viewReflectDir,vN)>=0.) continue;
						float distance=pointPlaneDistance(vP,viewPosition,viewNormal);
						if(distance>maxDistance) break;
						float op=opacity;
						#ifdef DISTANCE_ATTENUATION
							float ratio=1.-(distance/maxDistance);
							float attenuation=ratio*ratio;
							op=opacity*attenuation;
						#endif
						#ifdef FRESNEL
							float fresnelCoe=(dot(viewIncidentDir,viewReflectDir)+1.)/2.;
							op*=fresnelCoe;
						#endif
						vec4 reflectColor=texture2D(tDiffuse,uv);
						gl_FragColor.xyz=reflectColor.xyz;
						gl_FragColor.a=op;
						break;
					}
				}
			}
		}
	`},Gs={defines:{PERSPECTIVE_CAMERA:1},uniforms:{tDepth:{value:null},cameraNear:{value:null},cameraFar:{value:null}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDepth;

		uniform float cameraNear;
		uniform float cameraFar;

		varying vec2 vUv;

		#include <packing>

		float getLinearDepth( const in vec2 uv ) {

			#if PERSPECTIVE_CAMERA == 1

				float fragCoordZ = texture2D( tDepth, uv ).x;
				float viewZ = perspectiveDepthToViewZ( fragCoordZ, cameraNear, cameraFar );
				return viewZToOrthographicDepth( viewZ, cameraNear, cameraFar );

			#else

				return texture2D( tDepth, uv ).x;

			#endif

		}

		void main() {

			float depth = getLinearDepth( vUv );
			float d = 1.0 - depth;
			// d=(d-.999)*1000.;
			gl_FragColor = vec4( vec3( d ), 1.0 );

		}

	`},Bi={uniforms:{tDiffuse:{value:null},resolution:{value:new me},opacity:{value:.5}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}

	`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec2 resolution;
		varying vec2 vUv;
		void main() {
			//reverse engineering from PhotoShop blur filter, then change coefficient

			vec2 texelSize = ( 1.0 / resolution );

			vec4 c=texture2D(tDiffuse,vUv);

			vec2 offset;

			offset=(vec2(-1,0))*texelSize;
			vec4 cl=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(1,0))*texelSize;
			vec4 cr=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,-1))*texelSize;
			vec4 cb=texture2D(tDiffuse,vUv+offset);

			offset=(vec2(0,1))*texelSize;
			vec4 ct=texture2D(tDiffuse,vUv+offset);

			// float coeCenter=.5;
			// float coeSide=.125;
			float coeCenter=.2;
			float coeSide=.2;
			float a=c.a*coeCenter+cl.a*coeSide+cr.a*coeSide+cb.a*coeSide+ct.a*coeSide;
			vec3 rgb=(c.rgb*c.a*coeCenter+cl.rgb*cl.a*coeSide+cr.rgb*cr.a*coeSide+cb.rgb*cb.a*coeSide+ct.rgb*ct.a*coeSide)/a;
			gl_FragColor=vec4(rgb,a);

		}
	`};class Ai extends As{constructor({renderer:e,scene:t,camera:i,width:n,height:s,selects:r,bouncing:a=!1,groundReflector:l}){super(),this.width=n!==void 0?n:512,this.height=s!==void 0?s:512,this.clear=!0,this.renderer=e,this.scene=t,this.camera=i,this.groundReflector=l,this.opacity=jt.uniforms.opacity.value,this.output=0,this.maxDistance=jt.uniforms.maxDistance.value,this.thickness=jt.uniforms.thickness.value,this.tempColor=new Ie,this._selects=r,this.selective=Array.isArray(this._selects),Object.defineProperty(this,"selects",{get(){return this._selects},set(h){this._selects!==h&&(this._selects=h,Array.isArray(h)?(this.selective=!0,this.ssrMaterial.defines.SELECTIVE=!0,this.ssrMaterial.needsUpdate=!0):(this.selective=!1,this.ssrMaterial.defines.SELECTIVE=!1,this.ssrMaterial.needsUpdate=!0))}}),this._bouncing=a,Object.defineProperty(this,"bouncing",{get(){return this._bouncing},set(h){this._bouncing!==h&&(this._bouncing=h,h?this.ssrMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture:this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture)}}),this.blur=!0,this._distanceAttenuation=jt.defines.DISTANCE_ATTENUATION,Object.defineProperty(this,"distanceAttenuation",{get(){return this._distanceAttenuation},set(h){this._distanceAttenuation!==h&&(this._distanceAttenuation=h,this.ssrMaterial.defines.DISTANCE_ATTENUATION=h,this.ssrMaterial.needsUpdate=!0)}}),this._fresnel=jt.defines.FRESNEL,Object.defineProperty(this,"fresnel",{get(){return this._fresnel},set(h){this._fresnel!==h&&(this._fresnel=h,this.ssrMaterial.defines.FRESNEL=h,this.ssrMaterial.needsUpdate=!0)}}),this._infiniteThick=jt.defines.INFINITE_THICK,Object.defineProperty(this,"infiniteThick",{get(){return this._infiniteThick},set(h){this._infiniteThick!==h&&(this._infiniteThick=h,this.ssrMaterial.defines.INFINITE_THICK=h,this.ssrMaterial.needsUpdate=!0)}});const c=new ba;c.type=tr,c.minFilter=Ne,c.magFilter=Ne,this.beautyRenderTarget=new Tt(this.width,this.height,{minFilter:Ne,magFilter:Ne,depthTexture:c,depthBuffer:!0}),this.prevRenderTarget=new Tt(this.width,this.height,{minFilter:Ne,magFilter:Ne}),this.normalRenderTarget=new Tt(this.width,this.height,{minFilter:Ne,magFilter:Ne,type:wt}),this.metalnessRenderTarget=new Tt(this.width,this.height,{minFilter:Ne,magFilter:Ne}),this.ssrRenderTarget=new Tt(this.width,this.height,{minFilter:Ne,magFilter:Ne}),this.blurRenderTarget=this.ssrRenderTarget.clone(),this.blurRenderTarget2=this.ssrRenderTarget.clone(),this.ssrMaterial=new pt({defines:Object.assign({},jt.defines,{MAX_STEP:Math.sqrt(this.width*this.width+this.height*this.height)}),uniforms:$t.clone(jt.uniforms),vertexShader:jt.vertexShader,fragmentShader:jt.fragmentShader,blending:tt}),this.ssrMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.ssrMaterial.uniforms.tNormal.value=this.normalRenderTarget.texture,this.ssrMaterial.defines.SELECTIVE=this.selective,this.ssrMaterial.needsUpdate=!0,this.ssrMaterial.uniforms.tMetalness.value=this.metalnessRenderTarget.texture,this.ssrMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.ssrMaterial.uniforms.cameraNear.value=this.camera.near,this.ssrMaterial.uniforms.cameraFar.value=this.camera.far,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.ssrMaterial.uniforms.resolution.value.set(this.width,this.height),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.normalMaterial=new Kp,this.normalMaterial.blending=tt,this.metalnessOnMaterial=new _i({color:"white"}),this.metalnessOffMaterial=new _i({color:"black"}),this.blurMaterial=new pt({defines:Object.assign({},Bi.defines),uniforms:$t.clone(Bi.uniforms),vertexShader:Bi.vertexShader,fragmentShader:Bi.fragmentShader}),this.blurMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.blurMaterial.uniforms.resolution.value.set(this.width,this.height),this.blurMaterial2=new pt({defines:Object.assign({},Bi.defines),uniforms:$t.clone(Bi.uniforms),vertexShader:Bi.vertexShader,fragmentShader:Bi.fragmentShader}),this.blurMaterial2.uniforms.tDiffuse.value=this.blurRenderTarget.texture,this.blurMaterial2.uniforms.resolution.value.set(this.width,this.height),this.depthRenderMaterial=new pt({defines:Object.assign({},Gs.defines),uniforms:$t.clone(Gs.uniforms),vertexShader:Gs.vertexShader,fragmentShader:Gs.fragmentShader,blending:tt}),this.depthRenderMaterial.uniforms.tDepth.value=this.beautyRenderTarget.depthTexture,this.depthRenderMaterial.uniforms.cameraNear.value=this.camera.near,this.depthRenderMaterial.uniforms.cameraFar.value=this.camera.far,this.copyMaterial=new pt({uniforms:$t.clone(Ys.uniforms),vertexShader:Ys.vertexShader,fragmentShader:Ys.fragmentShader,transparent:!0,depthTest:!1,depthWrite:!1,blendSrc:Js,blendDst:Xs,blendEquation:Ri,blendSrcAlpha:Js,blendDstAlpha:Xs,blendEquationAlpha:Ri}),this.fsQuad=new Dc(null),this.originalClearColor=new Ie}dispose(){this.beautyRenderTarget.dispose(),this.prevRenderTarget.dispose(),this.normalRenderTarget.dispose(),this.metalnessRenderTarget.dispose(),this.ssrRenderTarget.dispose(),this.blurRenderTarget.dispose(),this.blurRenderTarget2.dispose(),this.normalMaterial.dispose(),this.metalnessOnMaterial.dispose(),this.metalnessOffMaterial.dispose(),this.blurMaterial.dispose(),this.blurMaterial2.dispose(),this.copyMaterial.dispose(),this.depthRenderMaterial.dispose(),this.fsQuad.dispose()}render(e,t){switch(e.setRenderTarget(this.beautyRenderTarget),e.clear(),this.groundReflector&&(this.groundReflector.visible=!1,this.groundReflector.doRender(this.renderer,this.scene,this.camera),this.groundReflector.visible=!0),e.render(this.scene,this.camera),this.groundReflector&&(this.groundReflector.visible=!1),this.renderOverride(e,this.normalMaterial,this.normalRenderTarget,0,0),this.selective&&this.renderMetalness(e,this.metalnessOnMaterial,this.metalnessRenderTarget,0,0),this.ssrMaterial.uniforms.opacity.value=this.opacity,this.ssrMaterial.uniforms.maxDistance.value=this.maxDistance,this.ssrMaterial.uniforms.thickness.value=this.thickness,this.renderPass(e,this.ssrMaterial,this.ssrRenderTarget),this.blur&&(this.renderPass(e,this.blurMaterial,this.blurRenderTarget),this.renderPass(e,this.blurMaterial2,this.blurRenderTarget2)),this.output){case Ai.OUTPUT.Default:this.bouncing?(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=tt,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=xi,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.prevRenderTarget.texture,this.copyMaterial.blending=tt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t)):(this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=tt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=xi,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t));break;case Ai.OUTPUT.SSR:this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=tt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t),this.bouncing&&(this.blur?this.copyMaterial.uniforms.tDiffuse.value=this.blurRenderTarget2.texture:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=tt,this.renderPass(e,this.copyMaterial,this.prevRenderTarget),this.copyMaterial.uniforms.tDiffuse.value=this.ssrRenderTarget.texture,this.copyMaterial.blending=xi,this.renderPass(e,this.copyMaterial,this.prevRenderTarget));break;case Ai.OUTPUT.Beauty:this.copyMaterial.uniforms.tDiffuse.value=this.beautyRenderTarget.texture,this.copyMaterial.blending=tt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ai.OUTPUT.Depth:this.renderPass(e,this.depthRenderMaterial,this.renderToScreen?null:t);break;case Ai.OUTPUT.Normal:this.copyMaterial.uniforms.tDiffuse.value=this.normalRenderTarget.texture,this.copyMaterial.blending=tt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;case Ai.OUTPUT.Metalness:this.copyMaterial.uniforms.tDiffuse.value=this.metalnessRenderTarget.texture,this.copyMaterial.blending=tt,this.renderPass(e,this.copyMaterial,this.renderToScreen?null:t);break;default:console.warn("THREE.SSRPass: Unknown output type.")}}renderPass(e,t,i,n,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const r=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n!=null&&(e.setClearColor(n),e.setClearAlpha(s||0),e.clear()),this.fsQuad.material=t,this.fsQuad.render(e),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderOverride(e,t,i,n,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const r=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,s=t.clearAlpha||s,n!=null&&(e.setClearColor(n),e.setClearAlpha(s||0),e.clear()),this.scene.overrideMaterial=t,e.render(this.scene,this.camera),this.scene.overrideMaterial=null,e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}renderMetalness(e,t,i,n,s){this.originalClearColor.copy(e.getClearColor(this.tempColor));const r=e.getClearAlpha(this.tempColor),a=e.autoClear;e.setRenderTarget(i),e.autoClear=!1,n=t.clearColor||n,s=t.clearAlpha||s,n!=null&&(e.setClearColor(n),e.setClearAlpha(s||0),e.clear()),this.scene.traverseVisible(l=>{l._SSRPassBackupMaterial=l.material,this._selects.includes(l)?l.material=this.metalnessOnMaterial:l.material=this.metalnessOffMaterial}),e.render(this.scene,this.camera),this.scene.traverseVisible(l=>{l.material=l._SSRPassBackupMaterial}),e.autoClear=a,e.setClearColor(this.originalClearColor),e.setClearAlpha(r)}setSize(e,t){this.width=e,this.height=t,this.ssrMaterial.defines.MAX_STEP=Math.sqrt(e*e+t*t),this.ssrMaterial.needsUpdate=!0,this.beautyRenderTarget.setSize(e,t),this.prevRenderTarget.setSize(e,t),this.ssrRenderTarget.setSize(e,t),this.normalRenderTarget.setSize(e,t),this.metalnessRenderTarget.setSize(e,t),this.blurRenderTarget.setSize(e,t),this.blurRenderTarget2.setSize(e,t),this.ssrMaterial.uniforms.resolution.value.set(e,t),this.ssrMaterial.uniforms.cameraProjectionMatrix.value.copy(this.camera.projectionMatrix),this.ssrMaterial.uniforms.cameraInverseProjectionMatrix.value.copy(this.camera.projectionMatrixInverse),this.blurMaterial.uniforms.resolution.value.set(e,t),this.blurMaterial2.uniforms.resolution.value.set(e,t)}}Ai.OUTPUT={Default:0,SSR:1,Beauty:3,Depth:4,Normal:5,Metalness:7};class fi extends Dt{constructor(e,t={}){super(e),this.isReflectorForSSRPass=!0,this.type="ReflectorForSSRPass";const i=this,n=t.color!==void 0?new Ie(t.color):new Ie(8355711),s=t.textureWidth||512,r=t.textureHeight||512,a=t.clipBias||0,l=t.shader||fi.ReflectorShader,c=t.useDepthTexture===!0,h=new T(0,1,0),u=new T,d=new T;i.needsUpdate=!1,i.maxDistance=fi.ReflectorShader.uniforms.maxDistance.value,i.opacity=fi.ReflectorShader.uniforms.opacity.value,i.color=n,i.resolution=t.resolution||new me(window.innerWidth,window.innerHeight),i._distanceAttenuation=fi.ReflectorShader.defines.DISTANCE_ATTENUATION,Object.defineProperty(i,"distanceAttenuation",{get(){return i._distanceAttenuation},set(O){i._distanceAttenuation!==O&&(i._distanceAttenuation=O,i.material.defines.DISTANCE_ATTENUATION=O,i.material.needsUpdate=!0)}}),i._fresnel=fi.ReflectorShader.defines.FRESNEL,Object.defineProperty(i,"fresnel",{get(){return i._fresnel},set(O){i._fresnel!==O&&(i._fresnel=O,i.material.defines.FRESNEL=O,i.material.needsUpdate=!0)}});const f=new T,g=new T,p=new T,A=new ve,m=new T(0,0,-1),I=new T,_=new T,v=new ve,E=new ft;let b;c&&(b=new ba,b.type=tr,b.minFilter=Ne,b.magFilter=Ne);const B={depthTexture:c?b:null,type:wt},x=new Tt(s,r,B),w=new pt({transparent:c,defines:Object.assign({},fi.ReflectorShader.defines,{useDepthTexture:c}),uniforms:$t.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});w.uniforms.tDiffuse.value=x.texture,w.uniforms.color.value=i.color,w.uniforms.textureMatrix.value=v,c&&(w.uniforms.tDepth.value=x.depthTexture),this.material=w;const F=[new Ti(new T(0,1,0),a)];this.doRender=function(O,Q,D){if(w.uniforms.maxDistance.value=i.maxDistance,w.uniforms.color.value=i.color,w.uniforms.opacity.value=i.opacity,u.copy(D.position).normalize(),d.copy(u).reflect(h),w.uniforms.fresnelCoe.value=(u.dot(d)+1)/2,g.setFromMatrixPosition(i.matrixWorld),p.setFromMatrixPosition(D.matrixWorld),A.extractRotation(i.matrixWorld),f.set(0,0,1),f.applyMatrix4(A),I.subVectors(g,p),I.dot(f)>0)return;I.reflect(f).negate(),I.add(g),A.extractRotation(D.matrixWorld),m.set(0,0,-1),m.applyMatrix4(A),m.add(p),_.subVectors(g,m),_.reflect(f).negate(),_.add(g),E.position.copy(I),E.up.set(0,1,0),E.up.applyMatrix4(A),E.up.reflect(f),E.lookAt(_),E.far=D.far,E.updateMatrixWorld(),E.projectionMatrix.copy(D.projectionMatrix),w.uniforms.virtualCameraNear.value=D.near,w.uniforms.virtualCameraFar.value=D.far,w.uniforms.virtualCameraMatrixWorld.value=E.matrixWorld,w.uniforms.virtualCameraProjectionMatrix.value=D.projectionMatrix,w.uniforms.virtualCameraProjectionMatrixInverse.value=D.projectionMatrixInverse,w.uniforms.resolution.value=i.resolution,v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(E.projectionMatrix),v.multiply(E.matrixWorldInverse),v.multiply(i.matrixWorld);const G=O.getRenderTarget(),K=O.xr.enabled,W=O.shadowMap.autoUpdate,k=O.clippingPlanes;O.xr.enabled=!1,O.shadowMap.autoUpdate=!1,O.clippingPlanes=F,O.setRenderTarget(x),O.state.buffers.depth.setMask(!0),O.autoClear===!1&&O.clear(),O.render(Q,E),O.xr.enabled=K,O.shadowMap.autoUpdate=W,O.clippingPlanes=k,O.setRenderTarget(G);const j=D.viewport;j!==void 0&&O.state.viewport(j)},this.getRenderTarget=function(){return x}}}fi.ReflectorShader={defines:{DISTANCE_ATTENUATION:!0,FRESNEL:!0},uniforms:{color:{value:null},tDiffuse:{value:null},tDepth:{value:null},textureMatrix:{value:new ve},maxDistance:{value:180},opacity:{value:.5},fresnelCoe:{value:null},virtualCameraNear:{value:null},virtualCameraFar:{value:null},virtualCameraProjectionMatrix:{value:new ve},virtualCameraMatrixWorld:{value:new ve},virtualCameraProjectionMatrixInverse:{value:new ve},resolution:{value:new me}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		uniform sampler2D tDepth;
		uniform float maxDistance;
		uniform float opacity;
		uniform float fresnelCoe;
		uniform float virtualCameraNear;
		uniform float virtualCameraFar;
		uniform mat4 virtualCameraProjectionMatrix;
		uniform mat4 virtualCameraProjectionMatrixInverse;
		uniform mat4 virtualCameraMatrixWorld;
		uniform vec2 resolution;
		varying vec4 vUv;
		#include <packing>
		float blendOverlay( float base, float blend ) {
			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );
		}
		vec3 blendOverlay( vec3 base, vec3 blend ) {
			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );
		}
		float getDepth( const in vec2 uv ) {
			return texture2D( tDepth, uv ).x;
		}
		float getViewZ( const in float depth ) {
			return perspectiveDepthToViewZ( depth, virtualCameraNear, virtualCameraFar );
		}
		vec3 getViewPosition( const in vec2 uv, const in float depth/*clip space*/, const in float clipW ) {
			vec4 clipPosition = vec4( ( vec3( uv, depth ) - 0.5 ) * 2.0, 1.0 );//ndc
			clipPosition *= clipW; //clip
			return ( virtualCameraProjectionMatrixInverse * clipPosition ).xyz;//view
		}
		void main() {
			vec4 base = texture2DProj( tDiffuse, vUv );
			#ifdef useDepthTexture
				vec2 uv=(gl_FragCoord.xy-.5)/resolution.xy;
				uv.x=1.-uv.x;
				float depth = texture2DProj( tDepth, vUv ).r;
				float viewZ = getViewZ( depth );
				float clipW = virtualCameraProjectionMatrix[2][3] * viewZ+virtualCameraProjectionMatrix[3][3];
				vec3 viewPosition=getViewPosition( uv, depth, clipW );
				vec3 worldPosition=(virtualCameraMatrixWorld*vec4(viewPosition,1)).xyz;
				if(worldPosition.y>maxDistance) discard;
				float op=opacity;
				#ifdef DISTANCE_ATTENUATION
					float ratio=1.-(worldPosition.y/maxDistance);
					float attenuation=ratio*ratio;
					op=opacity*attenuation;
				#endif
				#ifdef FRESNEL
					op*=fresnelCoe;
				#endif
				gl_FragColor = vec4( blendOverlay( base.rgb, color ), op );
			#else
				gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );
			#endif
		}
	`};const i_=[{URL:"models/RoomForWebsite(Jpeg)_Blue_Leather.glb",Name:"sofa"}],n_={Room:i_};const Zr=document.querySelector("#scene-container");let Nt,St,Bt,$r,ea,Ql,_n,Yi,Os=[],Jn;class s_{constructor(){this.container=Zr,Bt=Lg(),St=Fg(),St.info.autoReset=!1,_n=Xm(St),Nt=Rg(),Bt.add(Nt),Ql=new _c,ea=new Wm,new Ng(Zr,Nt,St,_n),Zr.append(St.domElement),$r=Pg(Nt,St.domElement),Nt.position.set(-1.91,2.165,3.53),Nt.updateMatrixWorld(),Nt.name="PerspectiveCamera",Ug(Bt,Nt,$r)}async loadBackground(){const{background0:e,background1:t,hdri0:i,hdri1:n}=await Vm();Bt.environment=n,Bt.background=e}async loadGLTF(){let{gltfData:e}=await Hm(n_.Room[0].URL,St),t=e.scene;Bt.add(t);let i=Bt.getObjectByName("Point_Light");if(i.intensity=10,i.castShadow=!0,i.shadow.mapSize.width=2048,i.shadow.mapSize.height=2048,Jn=new Mg(t),Yi&&Yi.destroy(),Yi=new ka,Yi.add(i,"Light",{On:10,Off:0}).onChange(function(s){i.intensity=parseInt(s),s==0?St.toneMappingExposure=.1:St.toneMappingExposure=1}),Yi.add(e,"Animations",{Recline:0,Normal:1}).onChange(function(s){let r=parseInt(s);r==0?(Os[r]=Jn.clipAction(e.animations[r]),Os[r].setLoop(Hl),Os[r].clampWhenFinished=!0,Os[r].play()):Jn.stopAllAction()}),Yi.add(e,"Material Variants",{Red:0,Green:1,Blue:2}).onChange(function(s){let r=parseInt(s);e.functions.selectVariant(e.scene,e.userData.variants[r])}),Yi.close(),i.intensity>0){let s=Bt.getObjectByName("Mesh0080_6"),a=new Qa().load("textures/subSurface.jpg");a.wrapS=Ni,a.wrapT=Ni,a.repeat.set(4,4);const l=t_,c=$t.clone(l.uniforms);c.diffuse.value=new T(.8,.3,.2),c.shininess.value=10,c.thicknessMap.value=a,c.thicknessColor.value=new T(.1,0,0),c.thicknessDistortion.value=.1,c.thicknessAmbient.value=.4,c.thicknessAttenuation.value=.7,c.thicknessPower.value=10,c.thicknessScale.value=1;var n=new pt({uniforms:c,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader,lights:!0});s.material=n}St.render(Bt,Nt)}createPostProcess(){Bt.traverse(function(a){a.isMesh&&(a.name=="Plane001_1"?a.receiveShadow=!0:a.castShadow=!0)});const e=new jm(Bt,Nt);_n.addPass(e);let t,i,n,s;n=new ir(3,3),t=new fi(n,{clipBias:3e-4,textureWidth:window.innerWidth,textureHeight:window.innerHeight,color:8947848,useDepthTexture:!0}),t.material.depthWrite=!1,t.rotation.x=-Math.PI/2,t.position.z=.25,t.position.y=.001,t.position.x=.5,i=new Ai({renderer:St,scene:Bt,camera:Nt,width:innerWidth,height:innerHeight,groundReflector:t,selects:s}),_n.addPass(i),Bt.add(t);const r=new Rc(Km);_n.addPass(r)}start(){St.setAnimationLoop(function(){$r.update(),_n.render(),Nt.updateMatrixWorld();const t=Ql.getDelta();Jn&&Jn.update(t),ea.update(St)}),document.getElementById("loadingSpinner").remove(),St.render(Bt,Nt),ea.displayStats()}}async function r_(){const o=new s_;await Promise.all([await o.loadBackground(),await o.loadGLTF()]),o.createPostProcess(),o.start()}r_().catch(o=>{console.error(o)});
