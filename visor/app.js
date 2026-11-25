var Hi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Gi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},od=0,Al=1,cd=2;var ea=1,_o=2,nr=3,Cn=0,Ke=1,Pe=2,ei=0,ir=1,Tl=2,El=3,Rl=4,ld=5;var ps=100,hd=101,ud=102,dd=103,fd=104,pd=200,md=201,gd=202,bd=203,Cl=204,Il=205,xd=206,yd=207,_d=208,vd=209,Md=210,Sd=211,wd=212,Ad=213,Td=214,Ka=0,Ya=1,Ja=2,zs=3,$a=4,Za=5,Qa=6,to=7,vo=0,Ed=1,Rd=2,Gn=0,Ll=1,Pl=2,Fl=3,na=4,Dl=5,Nl=6,Ul=7,fl="attached",Cd="detached",kl=300,Vi=301,ms=302,Mo=303,So=304,ia=306,Rn=1e3,hn=1001,Hs=1002,Oe=1003,wo=1004;var gs=1005;var Le=1006,sr=1007;var mn=1008;var gn=1009,Ol=1010,Bl=1011,rr=1012,Ao=1013,Vn=1014,Sn=1015,Wn=1016,To=1017,Eo=1018,ar=1020,zl=35902,Hl=35899,Gl=1021,Vl=1022,wn=1023,$n=1026,Wi=1027,Ro=1028,Co=1029,qi=1030,Io=1031;var Lo=1033,sa=33776,ra=33777,aa=33778,oa=33779,Po=35840,Fo=35841,Do=35842,No=35843,Uo=36196,ko=37492,Oo=37496,Bo=37488,zo=37489,ca=37490,Ho=37491,Go=37808,Vo=37809,Wo=37810,qo=37811,Xo=37812,jo=37813,Ko=37814,Yo=37815,Jo=37816,$o=37817,Zo=37818,Qo=37819,tc=37820,ec=37821,nc=36492,ic=36494,sc=36495,rc=36283,ac=36284,la=36285,oc=36286;var is=2300,ss=2301,qa=2302,pl=2303,ml=2400,gl=2401,bl=2402,Id=2500;var Wl=0,ha=1,or=2,Ld=3200;var ua=0,Pd=1,qn="",we="srgb",an="srgb-linear",Fr="linear",be="srgb";var Xa=7680;var Fd=519,Dd=512,Nd=513,Ud=514,cc=515,kd=516,Od=517,lc=518,Bd=519,ql=35044;var Xl="300 es",On=2e3,Gs=2001;function kp(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Op(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function zd(){let i=Vs("canvas");return i.style.display="block",i}var wu={},Ws=null;function Dr(...i){let t="THREE."+i.shift();Ws?Ws("log",t,...i):console.log(t,...i)}function Hd(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Ut(...i){i=Hd(i);let t="THREE."+i.shift();if(Ws)Ws("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function Kt(...i){i=Hd(i);let t="THREE."+i.shift();if(Ws)Ws("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function ns(...i){let t=i.join(" ");t in wu||(wu[t]=!0,Ut(...i))}function Gd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Vd={[Ka]:Ya,[Ja]:Qa,[$a]:to,[zs]:Za,[Ya]:Ka,[Qa]:Ja,[to]:$a,[Za]:zs},zn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},$e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Au=1234567,Lr=Math.PI/180,rs=180/Math.PI;function Bn(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return($e[i&255]+$e[i>>8&255]+$e[i>>16&255]+$e[i>>24&255]+"-"+$e[t&255]+$e[t>>8&255]+"-"+$e[t>>16&15|64]+$e[t>>24&255]+"-"+$e[e&63|128]+$e[e>>8&255]+"-"+$e[e>>16&255]+$e[e>>24&255]+$e[n&255]+$e[n>>8&255]+$e[n>>16&255]+$e[n>>24&255]).toLowerCase()}function ae(i,t,e){return Math.max(t,Math.min(e,i))}function jl(i,t){return(i%t+t)%t}function Bp(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function zp(i,t,e){return i!==t?(e-i)/(t-i):0}function Pr(i,t,e){return(1-e)*i+e*t}function Hp(i,t,e,n){return Pr(i,t,1-Math.exp(-e*n))}function Gp(i,t=1){return t-Math.abs(jl(i,t*2)-t)}function Vp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Wp(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function qp(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Xp(i,t){return i+Math.random()*(t-i)}function jp(i){return i*(.5-Math.random())}function Kp(i){i!==void 0&&(Au=i);let t=Au+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Yp(i){return i*Lr}function Jp(i){return i*rs}function $p(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Zp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Qp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tm(i,t,e,n,s){let r=Math.cos,a=Math.sin,o=r(e/2),c=a(e/2),l=r((t+n)/2),u=a((t+n)/2),h=r((t-n)/2),d=a((t-n)/2),f=r((n-t)/2),m=a((n-t)/2);switch(s){case"XYX":i.set(o*u,c*h,c*d,o*l);break;case"YZY":i.set(c*d,o*u,c*h,o*l);break;case"ZXZ":i.set(c*h,c*d,o*u,o*l);break;case"XZX":i.set(o*u,c*m,c*f,o*l);break;case"YXY":i.set(c*f,o*u,c*m,o*l);break;case"ZYZ":i.set(c*m,c*f,o*u,o*l);break;default:Ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function kn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function ye(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var bs={DEG2RAD:Lr,RAD2DEG:rs,generateUUID:Bn,clamp:ae,euclideanModulo:jl,mapLinear:Bp,inverseLerp:zp,lerp:Pr,damp:Hp,pingpong:Gp,smoothstep:Vp,smootherstep:Wp,randInt:qp,randFloat:Xp,randFloatSpread:jp,seededRandom:Kp,degToRad:Yp,radToDeg:Jp,isPowerOfTwo:$p,ceilPowerOfTwo:Zp,floorPowerOfTwo:Qp,setQuaternionFromProperEuler:tm,normalize:ye,denormalize:kn},Wt=class i{static{i.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Qe=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let c=n[s+0],l=n[s+1],u=n[s+2],h=n[s+3],d=r[a+0],f=r[a+1],m=r[a+2],_=r[a+3];if(h!==_||c!==d||l!==f||u!==m){let p=c*d+l*f+u*m+h*_;p<0&&(d=-d,f=-f,m=-m,_=-_,p=-p);let g=1-o;if(p<.9995){let T=Math.acos(p),M=Math.sin(T);g=Math.sin(g*T)/M,o=Math.sin(o*T)/M,c=c*g+d*o,l=l*g+f*o,u=u*g+m*o,h=h*g+_*o}else{c=c*g+d*o,l=l*g+f*o,u=u*g+m*o,h=h*g+_*o;let T=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=T,l*=T,u*=T,h*=T}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],c=n[s+1],l=n[s+2],u=n[s+3],h=r[a],d=r[a+1],f=r[a+2],m=r[a+3];return t[e]=o*m+u*h+c*f-l*d,t[e+1]=c*m+u*d+l*h-o*f,t[e+2]=l*m+u*f+o*d-c*h,t[e+3]=u*m-o*h-c*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(s/2),h=o(r/2),d=c(n/2),f=c(s/2),m=c(r/2);switch(a){case"XYZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"YXZ":this._x=d*u*h+l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"ZXY":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h-d*f*m;break;case"ZYX":this._x=d*u*h-l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h+d*f*m;break;case"YZX":this._x=d*u*h+l*f*m,this._y=l*f*h+d*u*m,this._z=l*u*m-d*f*h,this._w=l*u*h-d*f*m;break;case"XZY":this._x=d*u*h-l*f*m,this._y=l*f*h-d*u*m,this._z=l*u*m+d*f*h,this._w=l*u*h+d*f*m;break;default:Ut("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],h=e[10],d=n+o+h;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(n>o&&n>h){let f=2*Math.sqrt(1+n-o-h);this._w=(u-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>h){let f=2*Math.sqrt(1+o-n-h);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+h-n-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ae(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+s*l-r*c,this._y=s*u+a*c+r*o-n*l,this._z=r*u+a*l+n*c-s*o,this._w=a*u-n*o-s*c-r*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+s*e,this._z=this._z*c+r*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},q=class i{static{i.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*s-o*n),u=2*(o*e-r*s),h=2*(r*n-a*e);return this.x=e+c*l+a*h-o*u,this.y=n+c*u+o*l-r*h,this.z=s+c*h+r*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,c=e.z;return this.x=s*c-r*o,this.y=r*a-n*c,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Vc.copy(this).projectOnVector(t),this.sub(Vc)}reflect(t){return this.sub(Vc.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ae(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Vc=new q,Tu=new Qe,Zt=class i{static{i.prototype.isMatrix3=!0}constructor(t,e,n,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l)}set(t,e,n,s,r,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=s,u[2]=o,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],f=n[5],m=n[8],_=s[0],p=s[3],g=s[6],T=s[1],M=s[4],y=s[7],v=s[2],w=s[5],x=s[8];return r[0]=a*_+o*T+c*v,r[3]=a*p+o*M+c*w,r[6]=a*g+o*y+c*x,r[1]=l*_+u*T+h*v,r[4]=l*p+u*M+h*w,r[7]=l*g+u*y+h*x,r[2]=d*_+f*T+m*v,r[5]=d*p+f*M+m*w,r[8]=d*g+f*y+m*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*r*u+n*o*c+s*r*l-s*a*c}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=u*a-o*l,d=o*c-u*r,f=l*r-a*c,m=e*h+n*d+s*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/m;return t[0]=h*_,t[1]=(s*l-u*n)*_,t[2]=(o*n-s*a)*_,t[3]=d*_,t[4]=(u*e-s*c)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-s*l,s*c,-s*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Wc.makeScale(t,e)),this}rotate(t){return ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Wc.makeRotation(-t)),this}translate(t,e){return ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Wc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Wc=new Zt,Eu=new Zt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ru=new Zt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function em(){let i={enabled:!0,workingColorSpace:an,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===be&&(s.r=mi(s.r),s.g=mi(s.g),s.b=mi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===be&&(s.r=Bs(s.r),s.g=Bs(s.g),s.b=Bs(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===qn?Fr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[an]:{primaries:t,whitePoint:n,transfer:Fr,toXYZ:Eu,fromXYZ:Ru,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:we},outputColorSpaceConfig:{drawingBufferColorSpace:we}},[we]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Eu,fromXYZ:Ru,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:we}}}),i}var re=em();function mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Bs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var As,eo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{As===void 0&&(As=Vs("canvas")),As.width=t.width,As.height=t.height;let s=As.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=As}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Vs("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(mi(e[n]/255)*255):e[n]=mi(e[n]);return{data:e,width:t.width,height:t.height}}else return Ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},nm=0,qs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:nm++}),this.uuid=Bn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(qc(s[a].image)):r.push(qc(s[a]))}else r=qc(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function qc(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?eo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Ut("Texture: Unable to serialize Texture."),{})}var im=0,Xc=new q,Fe=class i extends zn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=hn,s=hn,r=Le,a=mn,o=wn,c=gn,l=i.DEFAULT_ANISOTROPY,u=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:im++}),this.uuid=Bn(),this.name="",this.source=new qs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Zt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Xc).x}get height(){return this.source.getSize(Xc).y}get depth(){return this.source.getSize(Xc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Ut(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==kl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Rn:t.x=t.x-Math.floor(t.x);break;case hn:t.x=t.x<0?0:1;break;case Hs:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Rn:t.y=t.y-Math.floor(t.y);break;case hn:t.y=t.y<0?0:1;break;case Hs:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Fe.DEFAULT_IMAGE=null;Fe.DEFAULT_MAPPING=kl;Fe.DEFAULT_ANISOTROPY=1;var ve=class i{static{i.prototype.isVector4=!0}constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,c=t.elements,l=c[0],u=c[4],h=c[8],d=c[1],f=c[5],m=c[9],_=c[2],p=c[6],g=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let M=(l+1)/2,y=(f+1)/2,v=(g+1)/2,w=(u+d)/4,x=(h+_)/4,b=(m+p)/4;return M>y&&M>v?M<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(M),s=w/n,r=x/n):y>v?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=w/s,r=b/s):v<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(v),n=x/r,s=b/r),this.set(n,s,r,e),this}let T=Math.sqrt((p-m)*(p-m)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(T)<.001&&(T=1),this.x=(p-m)/T,this.y=(h-_)/T,this.z=(d-u)/T,this.w=Math.acos((l+f+g-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ae(this.x,t.x,e.x),this.y=ae(this.y,t.y,e.y),this.z=ae(this.z,t.z,e.z),this.w=ae(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ae(this.x,t,e),this.y=ae(this.y,t,e),this.z=ae(this.z,t,e),this.w=ae(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ae(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},no=class extends zn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Le,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new ve(0,0,t,e),this.scissorTest=!1,this.viewport=new ve(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:n.depth},r=new Fe(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Le,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new qs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends no{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Nr=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var io=class extends Fe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Oe,this.minFilter=Oe,this.wrapR=hn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var jt=class i{static{i.prototype.isMatrix4=!0}constructor(t,e,n,s,r,a,o,c,l,u,h,d,f,m,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,c,l,u,h,d,f,m,_,p)}set(t,e,n,s,r,a,o,c,l,u,h,d,f,m,_,p){let g=this.elements;return g[0]=t,g[4]=e,g[8]=n,g[12]=s,g[1]=r,g[5]=a,g[9]=o,g[13]=c,g[2]=l,g[6]=u,g[10]=h,g[14]=d,g[3]=f,g[7]=m,g[11]=_,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Ts.setFromMatrixColumn(t,0).length(),r=1/Ts.setFromMatrixColumn(t,1).length(),a=1/Ts.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(s),l=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){let d=a*u,f=a*h,m=o*u,_=o*h;e[0]=c*u,e[4]=-c*h,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-o*c,e[2]=_-d*l,e[6]=m+f*l,e[10]=a*c}else if(t.order==="YXZ"){let d=c*u,f=c*h,m=l*u,_=l*h;e[0]=d+_*o,e[4]=m*o-f,e[8]=a*l,e[1]=a*h,e[5]=a*u,e[9]=-o,e[2]=f*o-m,e[6]=_+d*o,e[10]=a*c}else if(t.order==="ZXY"){let d=c*u,f=c*h,m=l*u,_=l*h;e[0]=d-_*o,e[4]=-a*h,e[8]=m+f*o,e[1]=f+m*o,e[5]=a*u,e[9]=_-d*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order==="ZYX"){let d=a*u,f=a*h,m=o*u,_=o*h;e[0]=c*u,e[4]=m*l-f,e[8]=d*l+_,e[1]=c*h,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order==="YZX"){let d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*u,e[4]=_-d*h,e[8]=m*h+f,e[1]=h,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*h+m,e[10]=d-_*h}else if(t.order==="XZY"){let d=a*c,f=a*l,m=o*c,_=o*l;e[0]=c*u,e[4]=-h,e[8]=l*u,e[1]=d*h+_,e[5]=a*u,e[9]=f*h-m,e[2]=m*h-f,e[6]=o*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(sm,t,rm)}lookAt(t,e,n){let s=this.elements;return yn.subVectors(t,e),yn.lengthSq()===0&&(yn.z=1),yn.normalize(),Ci.crossVectors(n,yn),Ci.lengthSq()===0&&(Math.abs(n.z)===1?yn.x+=1e-4:yn.z+=1e-4,yn.normalize(),Ci.crossVectors(n,yn)),Ci.normalize(),_a.crossVectors(yn,Ci),s[0]=Ci.x,s[4]=_a.x,s[8]=yn.x,s[1]=Ci.y,s[5]=_a.y,s[9]=yn.y,s[2]=Ci.z,s[6]=_a.z,s[10]=yn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],f=n[13],m=n[2],_=n[6],p=n[10],g=n[14],T=n[3],M=n[7],y=n[11],v=n[15],w=s[0],x=s[4],b=s[8],S=s[12],A=s[1],E=s[5],P=s[9],F=s[13],N=s[2],I=s[6],C=s[10],L=s[14],k=s[3],U=s[7],B=s[11],z=s[15];return r[0]=a*w+o*A+c*N+l*k,r[4]=a*x+o*E+c*I+l*U,r[8]=a*b+o*P+c*C+l*B,r[12]=a*S+o*F+c*L+l*z,r[1]=u*w+h*A+d*N+f*k,r[5]=u*x+h*E+d*I+f*U,r[9]=u*b+h*P+d*C+f*B,r[13]=u*S+h*F+d*L+f*z,r[2]=m*w+_*A+p*N+g*k,r[6]=m*x+_*E+p*I+g*U,r[10]=m*b+_*P+p*C+g*B,r[14]=m*S+_*F+p*L+g*z,r[3]=T*w+M*A+y*N+v*k,r[7]=T*x+M*E+y*I+v*U,r[11]=T*b+M*P+y*C+v*B,r[15]=T*S+M*F+y*L+v*z,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],h=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],g=t[15],T=c*f-l*d,M=o*f-l*h,y=o*d-c*h,v=a*f-l*u,w=a*d-c*u,x=a*h-o*u;return e*(_*T-p*M+g*y)-n*(m*T-p*v+g*w)+s*(m*M-_*v+g*x)-r*(m*y-_*w+p*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(r*u-o*c)+s*(r*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],h=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],g=t[15],T=e*o-n*a,M=e*c-s*a,y=e*l-r*a,v=n*c-s*o,w=n*l-r*o,x=s*l-r*c,b=u*_-h*m,S=u*p-d*m,A=u*g-f*m,E=h*p-d*_,P=h*g-f*_,F=d*g-f*p,N=T*F-M*P+y*E+v*A-w*S+x*b;if(N===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let I=1/N;return t[0]=(o*F-c*P+l*E)*I,t[1]=(s*P-n*F-r*E)*I,t[2]=(_*x-p*w+g*v)*I,t[3]=(d*w-h*x-f*v)*I,t[4]=(c*A-a*F-l*S)*I,t[5]=(e*F-s*A+r*S)*I,t[6]=(p*y-m*x-g*M)*I,t[7]=(u*x-d*y+f*M)*I,t[8]=(a*P-o*A+l*b)*I,t[9]=(n*A-e*P-r*b)*I,t[10]=(m*w-_*y+g*T)*I,t[11]=(h*y-u*w-f*T)*I,t[12]=(o*S-a*E-c*b)*I,t[13]=(e*E-n*S+s*b)*I,t[14]=(_*M-m*v-p*T)*I,t[15]=(u*v-h*M+d*T)*I,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,c=t.z,l=r*a,u=r*o;return this.set(l*a+n,l*o-s*c,l*c+s*o,0,l*o+s*c,u*o+n,u*c-s*a,0,l*c-s*o,u*c+s*a,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,c=e._w,l=r+r,u=a+a,h=o+o,d=r*l,f=r*u,m=r*h,_=a*u,p=a*h,g=o*h,T=c*l,M=c*u,y=c*h,v=n.x,w=n.y,x=n.z;return s[0]=(1-(_+g))*v,s[1]=(f+y)*v,s[2]=(m-M)*v,s[3]=0,s[4]=(f-y)*w,s[5]=(1-(d+g))*w,s[6]=(p+T)*w,s[7]=0,s[8]=(m+M)*x,s[9]=(p-T)*x,s[10]=(1-(d+_))*x,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Ts.set(s[0],s[1],s[2]).length(),o=Ts.set(s[4],s[5],s[6]).length(),c=Ts.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Dn.copy(this);let l=1/a,u=1/o,h=1/c;return Dn.elements[0]*=l,Dn.elements[1]*=l,Dn.elements[2]*=l,Dn.elements[4]*=u,Dn.elements[5]*=u,Dn.elements[6]*=u,Dn.elements[8]*=h,Dn.elements[9]*=h,Dn.elements[10]*=h,e.setFromRotationMatrix(Dn),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,s,r,a,o=On,c=!1){let l=this.elements,u=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),f=(n+s)/(n-s),m,_;if(c)m=r/(a-r),_=a*r/(a-r);else if(o===On)m=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===Gs)m=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=On,c=!1){let l=this.elements,u=2/(e-t),h=2/(n-s),d=-(e+t)/(e-t),f=-(n+s)/(n-s),m,_;if(c)m=1/(a-r),_=a/(a-r);else if(o===On)m=-2/(a-r),_=-(a+r)/(a-r);else if(o===Gs)m=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=h,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Ts=new q,Dn=new jt,sm=new q(0,0,0),rm=new q(1,1,1),Ci=new q,_a=new q,yn=new q,Cu=new jt,Iu=new Qe,Zn=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],u=s[9],h=s[2],d=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(ae(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ae(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(ae(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ae(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(ae(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ae(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-u,f),this._y=0);break;default:Ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Cu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Cu,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Iu.setFromEuler(this),this.setFromQuaternion(Iu,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Zn.DEFAULT_ORDER="XYZ";var Ur=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},am=0,Lu=new q,Es=new Qe,li=new jt,va=new q,Sr=new q,om=new q,cm=new Qe,Pu=new q(1,0,0),Fu=new q(0,1,0),Du=new q(0,0,1),Nu={type:"added"},lm={type:"removed"},Rs={type:"childadded",child:null},jc={type:"childremoved",child:null},Ce=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:am++}),this.uuid=Bn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new q,e=new Zn,n=new Qe,s=new q(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new jt},normalMatrix:{value:new Zt}}),this.matrix=new jt,this.matrixWorld=new jt,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ur,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.multiply(Es),this}rotateOnWorldAxis(t,e){return Es.setFromAxisAngle(t,e),this.quaternion.premultiply(Es),this}rotateX(t){return this.rotateOnAxis(Pu,t)}rotateY(t){return this.rotateOnAxis(Fu,t)}rotateZ(t){return this.rotateOnAxis(Du,t)}translateOnAxis(t,e){return Lu.copy(t).applyQuaternion(this.quaternion),this.position.add(Lu.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Pu,t)}translateY(t){return this.translateOnAxis(Fu,t)}translateZ(t){return this.translateOnAxis(Du,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?va.copy(t):va.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(Sr,va,this.up):li.lookAt(va,Sr,this.up),this.quaternion.setFromRotationMatrix(li),s&&(li.extractRotation(s.matrixWorld),Es.setFromRotationMatrix(li),this.quaternion.premultiply(Es.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Kt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Nu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null):Kt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(lm),jc.child=t,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),li.multiply(t.parent.matrixWorld)),t.applyMatrix4(li),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Nu),Rs.child=t,this.dispatchEvent(Rs),Rs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,t,om),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Sr,cm,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){let h=c[l];r(t.shapes,h)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(t.materials,this.material[c]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(t.animations,c))}}if(e){let o=a(t.geometries),c=a(t.materials),l=a(t.textures),u=a(t.images),h=a(t.shapes),d=a(t.skeletons),f=a(t.animations),m=a(t.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){let c=[];for(let l in o){let u=o[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ce.DEFAULT_UP=new q(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=class extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}},hm={type:"move"},Xs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new un,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new un,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new un,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let p=e.getJointPose(_,n),g=this._getHandJoint(l,_);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(hm)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new un;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Wd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ii={h:0,s:0,l:0},Ma={h:0,s:0,l:0};function Kc(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Mt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=we){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,re.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=re.workingColorSpace){return this.r=t,this.g=e,this.b=n,re.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=re.workingColorSpace){if(t=jl(t,1),e=ae(e,0,1),n=ae(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Kc(a,r,t+1/3),this.g=Kc(a,r,t),this.b=Kc(a,r,t-1/3)}return re.colorSpaceToWorking(this,s),this}setStyle(t,e=we){function n(r){r!==void 0&&parseFloat(r)<1&&Ut("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Ut("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);Ut("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=we){let n=Wd[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Ut("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=mi(t.r),this.g=mi(t.g),this.b=mi(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=we){return re.workingToColorSpace(Ze.copy(this),t),Math.round(ae(Ze.r*255,0,255))*65536+Math.round(ae(Ze.g*255,0,255))*256+Math.round(ae(Ze.b*255,0,255))}getHexString(t=we){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=re.workingColorSpace){re.workingToColorSpace(Ze.copy(this),e);let n=Ze.r,s=Ze.g,r=Ze.b,a=Math.max(n,s,r),o=Math.min(n,s,r),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let h=a-o;switch(l=u<=.5?h/(a+o):h/(2-a-o),a){case n:c=(s-r)/h+(s<r?6:0);break;case s:c=(r-n)/h+2;break;case r:c=(n-s)/h+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=re.workingColorSpace){return re.workingToColorSpace(Ze.copy(this),e),t.r=Ze.r,t.g=Ze.g,t.b=Ze.b,t}getStyle(t=we){re.workingToColorSpace(Ze.copy(this),t);let e=Ze.r,n=Ze.g,s=Ze.b;return t!==we?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ii),this.setHSL(Ii.h+t,Ii.s+e,Ii.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ii),t.getHSL(Ma);let n=Pr(Ii.h,Ma.h,e),s=Pr(Ii.s,Ma.s,e),r=Pr(Ii.l,Ma.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ze=new Mt;Mt.NAMES=Wd;var as=class extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Nn=new q,hi=new q,Yc=new q,ui=new q,Cs=new q,Is=new q,Uu=new q,Jc=new q,$c=new q,Zc=new q,Qc=new ve,tl=new ve,el=new ve,Ni=class i{constructor(t=new q,e=new q,n=new q){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Nn.subVectors(t,e),s.cross(Nn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Nn.subVectors(s,e),hi.subVectors(n,e),Yc.subVectors(t,e);let a=Nn.dot(Nn),o=Nn.dot(hi),c=Nn.dot(Yc),l=hi.dot(hi),u=hi.dot(Yc),h=a*l-o*o;if(h===0)return r.set(0,0,0),null;let d=1/h,f=(l*c-o*u)*d,m=(a*u-o*c)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(t,e,n,s,r,a,o,c){return this.getBarycoord(t,e,n,s,ui)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ui.x),c.addScaledVector(a,ui.y),c.addScaledVector(o,ui.z),c)}static getInterpolatedAttribute(t,e,n,s,r,a){return Qc.setScalar(0),tl.setScalar(0),el.setScalar(0),Qc.fromBufferAttribute(t,e),tl.fromBufferAttribute(t,n),el.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Qc,r.x),a.addScaledVector(tl,r.y),a.addScaledVector(el,r.z),a}static isFrontFacing(t,e,n,s){return Nn.subVectors(n,e),hi.subVectors(t,e),Nn.cross(hi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Nn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Nn.cross(hi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;Cs.subVectors(s,n),Is.subVectors(r,n),Jc.subVectors(t,n);let c=Cs.dot(Jc),l=Is.dot(Jc);if(c<=0&&l<=0)return e.copy(n);$c.subVectors(t,s);let u=Cs.dot($c),h=Is.dot($c);if(u>=0&&h<=u)return e.copy(s);let d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(Cs,a);Zc.subVectors(t,r);let f=Cs.dot(Zc),m=Is.dot(Zc);if(m>=0&&f<=m)return e.copy(r);let _=f*l-c*m;if(_<=0&&l>=0&&m<=0)return o=l/(l-m),e.copy(n).addScaledVector(Is,o);let p=u*m-f*h;if(p<=0&&h-u>=0&&f-m>=0)return Uu.subVectors(r,s),o=(h-u)/(h-u+(f-m)),e.copy(s).addScaledVector(Uu,o);let g=1/(p+_+d);return a=_*g,o=d*g,e.copy(n).addScaledVector(Cs,a).addScaledVector(Is,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},cn=class{constructor(t=new q(1/0,1/0,1/0),e=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Un.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Un.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Un.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Un):Un.fromBufferAttribute(r,a),Un.applyMatrix4(t.matrixWorld),this.expandByPoint(Un);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Sa.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Sa.copy(n.boundingBox)),Sa.applyMatrix4(t.matrixWorld),this.union(Sa)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Un),Un.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(wr),wa.subVectors(this.max,wr),Ls.subVectors(t.a,wr),Ps.subVectors(t.b,wr),Fs.subVectors(t.c,wr),Li.subVectors(Ps,Ls),Pi.subVectors(Fs,Ps),Zi.subVectors(Ls,Fs);let e=[0,-Li.z,Li.y,0,-Pi.z,Pi.y,0,-Zi.z,Zi.y,Li.z,0,-Li.x,Pi.z,0,-Pi.x,Zi.z,0,-Zi.x,-Li.y,Li.x,0,-Pi.y,Pi.x,0,-Zi.y,Zi.x,0];return!nl(e,Ls,Ps,Fs,wa)||(e=[1,0,0,0,1,0,0,0,1],!nl(e,Ls,Ps,Fs,wa))?!1:(Aa.crossVectors(Li,Pi),e=[Aa.x,Aa.y,Aa.z],nl(e,Ls,Ps,Fs,wa))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Un).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Un).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(di[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),di[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),di[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),di[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),di[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),di[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),di[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),di[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(di),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},di=[new q,new q,new q,new q,new q,new q,new q,new q],Un=new q,Sa=new cn,Ls=new q,Ps=new q,Fs=new q,Li=new q,Pi=new q,Zi=new q,wr=new q,wa=new q,Aa=new q,Qi=new q;function nl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Qi.fromArray(i,r);let o=s.x*Math.abs(Qi.x)+s.y*Math.abs(Qi.y)+s.z*Math.abs(Qi.z),c=t.dot(Qi),l=e.dot(Qi),u=n.dot(Qi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var Ge=new q,Ta=new Wt,um=0,Xt=class extends zn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:um++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=ql,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Ta.fromBufferAttribute(this,e),Ta.applyMatrix3(t),this.setXY(e,Ta.x,Ta.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix3(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyMatrix4(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.applyNormalMatrix(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ge.fromBufferAttribute(this,e),Ge.transformDirection(t),this.setXYZ(e,Ge.x,Ge.y,Ge.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=kn(e,this.array)),e}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=kn(e,this.array)),e}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=kn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=kn(e,this.array)),e}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}};var os=class extends Xt{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var kr=class extends Xt{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var ke=class extends Xt{constructor(t,e,n){super(new Float32Array(t),e,n)}},dm=new cn,Ar=new q,il=new q,dn=class{constructor(t=new q,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):dm.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ar.subVectors(t,this.center);let e=Ar.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Ar,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(il.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ar.copy(t.center).add(il)),this.expandByPoint(Ar.copy(t.center).sub(il))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},fm=0,En=new jt,sl=new Ce,Ds=new q,_n=new cn,Tr=new cn,je=new q,Te=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:fm++}),this.uuid=Bn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(kp(t)?kr:os)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Zt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return En.makeRotationFromQuaternion(t),this.applyMatrix4(En),this}rotateX(t){return En.makeRotationX(t),this.applyMatrix4(En),this}rotateY(t){return En.makeRotationY(t),this.applyMatrix4(En),this}rotateZ(t){return En.makeRotationZ(t),this.applyMatrix4(En),this}translate(t,e,n){return En.makeTranslation(t,e,n),this.applyMatrix4(En),this}scale(t,e,n){return En.makeScale(t,e,n),this.applyMatrix4(En),this}lookAt(t){return sl.lookAt(t),sl.updateMatrix(),this.applyMatrix4(sl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ke(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&Ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new cn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];_n.setFromBufferAttribute(r),this.morphTargetsRelative?(je.addVectors(this.boundingBox.min,_n.min),this.boundingBox.expandByPoint(je),je.addVectors(this.boundingBox.max,_n.max),this.boundingBox.expandByPoint(je)):(this.boundingBox.expandByPoint(_n.min),this.boundingBox.expandByPoint(_n.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new dn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(t){let n=this.boundingSphere.center;if(_n.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Tr.setFromBufferAttribute(o),this.morphTargetsRelative?(je.addVectors(_n.min,Tr.min),_n.expandByPoint(je),je.addVectors(_n.max,Tr.max),_n.expandByPoint(je)):(_n.expandByPoint(Tr.min),_n.expandByPoint(Tr.max))}_n.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)je.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(je));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)je.fromBufferAttribute(o,l),c&&(Ds.fromBufferAttribute(t,l),je.add(Ds)),s=Math.max(s,n.distanceToSquared(je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let b=0;b<n.count;b++)o[b]=new q,c[b]=new q;let l=new q,u=new q,h=new q,d=new Wt,f=new Wt,m=new Wt,_=new q,p=new q;function g(b,S,A){l.fromBufferAttribute(n,b),u.fromBufferAttribute(n,S),h.fromBufferAttribute(n,A),d.fromBufferAttribute(r,b),f.fromBufferAttribute(r,S),m.fromBufferAttribute(r,A),u.sub(l),h.sub(l),f.sub(d),m.sub(d);let E=1/(f.x*m.y-m.x*f.y);isFinite(E)&&(_.copy(u).multiplyScalar(m.y).addScaledVector(h,-f.y).multiplyScalar(E),p.copy(h).multiplyScalar(f.x).addScaledVector(u,-m.x).multiplyScalar(E),o[b].add(_),o[S].add(_),o[A].add(_),c[b].add(p),c[S].add(p),c[A].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let b=0,S=T.length;b<S;++b){let A=T[b],E=A.start,P=A.count;for(let F=E,N=E+P;F<N;F+=3)g(t.getX(F+0),t.getX(F+1),t.getX(F+2))}let M=new q,y=new q,v=new q,w=new q;function x(b){v.fromBufferAttribute(s,b),w.copy(v);let S=o[b];M.copy(S),M.sub(v.multiplyScalar(v.dot(S))).normalize(),y.crossVectors(w,S);let E=y.dot(c[b])<0?-1:1;a.setXYZW(b,M.x,M.y,M.z,E)}for(let b=0,S=T.length;b<S;++b){let A=T[b],E=A.start,P=A.count;for(let F=E,N=E+P;F<N;F+=3)x(t.getX(F+0)),x(t.getX(F+1)),x(t.getX(F+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Xt(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let s=new q,r=new q,a=new q,o=new q,c=new q,l=new q,u=new q,h=new q;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),o.fromBufferAttribute(n,m),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,p),o.add(u),c.add(u),l.add(u),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),a.fromBufferAttribute(e,d+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)je.fromBufferAttribute(t,e),je.normalize(),t.setXYZ(e,je.x,je.y,je.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,h=o.normalized,d=new l.constructor(c.length*u),f=0,m=0;for(let _=0,p=c.length;_<p;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let g=0;g<u;g++)d[m++]=l[f++]}return new Xt(d,u,h)}if(this.index===null)return Ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=t(c,n);e.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let u=0,h=l.length;u<h;u++){let d=l[u],f=t(d,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){let f=l[h];u.push(f.toJSON(t.data))}u.length>0&&(s[c]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let l in s){let u=s[l];this.setAttribute(l,u.clone(e))}let r=t.morphAttributes;for(let l in r){let u=[],h=r[l];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let h=a[l];this.addGroup(h.start,h.count,h.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},js=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=ql,this.updateRanges=[],this.version=0,this.uuid=Bn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Bn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},rn=new q,Ks=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=kn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ye(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=ye(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=kn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=kn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=kn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=kn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=ye(e,this.array),n=ye(n,this.array),s=ye(s,this.array),r=ye(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Dr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Xt(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Dr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},rl=new q,pm=new q,mm=new Zt,vn=class{constructor(t=new q(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=rl.subVectors(n,e).cross(pm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(rl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||mm.getNormalMatrix(t),s=this.coplanarPoint(rl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},gm=0,tn=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gm++}),this.uuid=Bn(),this.name="",this.type="Material",this.blending=ir,this.side=Cn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cl,this.blendDst=Il,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=zs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Fd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xa,this.stencilZFail=Xa,this.stencilZPass=Xa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Ut(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){Ut(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Wt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Wt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};var fi=new q,al=new q,Ea=new q,Ra=new q,gi=class{constructor(t=new q,e=new q(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){al.copy(t).add(e).multiplyScalar(.5),Ea.copy(e).sub(t).normalize(),Ra.copy(this.origin).sub(al);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Ea),o=Ra.dot(this.direction),c=-Ra.dot(Ea),l=Ra.lengthSq(),u=Math.abs(1-a*a),h,d,f,m;if(u>0)if(h=a*c-o,d=a*o-c,m=r*u,h>=0)if(d>=-m)if(d<=m){let _=1/u;h*=_,d*=_,f=h*(h+a*d+2*o)+d*(a*h+d+2*c)+l}else d=r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;else d<=-m?(h=Math.max(0,-(-a*r+o)),d=h>0?-r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l):d<=m?(h=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(h=Math.max(0,-(a*r+o)),d=h>0?r:Math.min(Math.max(-r,-c),r),f=-h*h+d*(d+2*c)+l);else d=a>0?-r:r,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(al).addScaledVector(Ea,d),f}intersectSphere(t,e){if(t.radius<0)return null;fi.subVectors(t.center,this.origin);let n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,c,l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(t.min.x-d.x)*l,s=(t.max.x-d.x)*l):(n=(t.max.x-d.x)*l,s=(t.min.x-d.x)*l),u>=0?(r=(t.min.y-d.y)*u,a=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,a=(t.min.y-d.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(o=(t.min.z-d.z)*h,c=(t.max.z-d.z)*h):(o=(t.max.z-d.z)*h,c=(t.min.z-d.z)*h),n>c||o>s)||((o>n||n!==n)&&(n=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,h=t.x-a.x,d=t.y-a.y,f=t.z-a.z,m=e.x-a.x,_=e.y-a.y,p=e.z-a.z,g=n.x-a.x,T=n.y-a.y,M=n.z-a.z,y=Math.abs(c),v=Math.abs(l),w=Math.abs(u),x,b,S,A,E,P,F,N,I,C,L,k;if(y>=v&&y>=w?(S=c,P=h,I=m,k=g,c>=0?(x=l,b=u,A=d,E=f,F=_,N=p,C=T,L=M):(x=u,b=l,A=f,E=d,F=p,N=_,C=M,L=T)):v>=w?(S=l,P=d,I=_,k=T,l>=0?(x=u,b=c,A=f,E=h,F=p,N=m,C=M,L=g):(x=c,b=u,A=h,E=f,F=m,N=p,C=g,L=M)):(S=u,P=f,I=p,k=M,u>=0?(x=c,b=l,A=h,E=d,F=m,N=_,C=g,L=T):(x=l,b=c,A=d,E=h,F=_,N=m,C=T,L=g)),S===0)return null;let U=x/S,B=b/S,z=1/S,Z=A-U*P,tt=E-B*P,at=F-U*I,nt=N-B*I,ut=C-U*k,X=L-B*k,J=ut*nt-X*at,ct=Z*X-tt*ut,_t=at*tt-nt*Z;if(s){if(J<0||ct<0||_t<0)return null}else if((J<0||ct<0||_t<0)&&(J>0||ct>0||_t>0))return null;let ht=J+ct+_t;if(ht===0)return null;let It=z*(J*P+ct*I+_t*k);return(ht>0?It<0:It>0)?null:this.at(It/ht,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Hn=class extends tn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=vo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},ku=new jt,ts=new gi,Ca=new dn,Ou=new q,Ia=new q,La=new q,Pa=new q,ol=new q,Fa=new q,Bu=new q,Da=new q,fe=class extends Ce{constructor(t=new Te,e=new Hn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Fa.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let u=o[c],h=r[c];u!==0&&(ol.fromBufferAttribute(h,t),a?Fa.addScaledVector(ol,u):Fa.addScaledVector(ol.sub(e),u))}e.add(Fa)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ca.copy(n.boundingSphere),Ca.applyMatrix4(r),ts.copy(t.ray).recast(t.near),!(Ca.containsPoint(ts.origin)===!1&&(ts.intersectSphere(Ca,Ou)===null||ts.origin.distanceToSquared(Ou)>(t.far-t.near)**2))&&(ku.copy(r).invert(),ts.copy(t.ray).applyMatrix4(ku),!(n.boundingBox!==null&&ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ts)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=a[p.materialIndex],T=Math.max(p.start,f.start),M=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=T,v=M;y<v;y+=3){let w=o.getX(y),x=o.getX(y+1),b=o.getX(y+2);s=Na(this,g,t,n,l,u,h,w,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let T=o.getX(p),M=o.getX(p+1),y=o.getX(p+2);s=Na(this,a,t,n,l,u,h,T,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let m=0,_=d.length;m<_;m++){let p=d[m],g=a[p.materialIndex],T=Math.max(p.start,f.start),M=Math.min(c.count,Math.min(p.start+p.count,f.start+f.count));for(let y=T,v=M;y<v;y+=3){let w=y,x=y+1,b=y+2;s=Na(this,g,t,n,l,u,h,w,x,b),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{let m=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let p=m,g=_;p<g;p+=3){let T=p,M=p+1,y=p+2;s=Na(this,a,t,n,l,u,h,T,M,y),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}};function bm(i,t,e,n,s,r,a,o){let c;if(t.side===Ke?c=n.intersectTriangle(a,r,s,!0,o):c=n.intersectTriangle(s,r,a,t.side===Cn,o),c===null)return null;Da.copy(o),Da.applyMatrix4(i.matrixWorld);let l=e.ray.origin.distanceTo(Da);return l<e.near||l>e.far?null:{distance:l,point:Da.clone(),object:i}}function Na(i,t,e,n,s,r,a,o,c,l){i.getVertexPosition(o,Ia),i.getVertexPosition(c,La),i.getVertexPosition(l,Pa);let u=bm(i,t,e,n,Ia,La,Pa,Bu);if(u){let h=new q;Ni.getBarycoord(Bu,Ia,La,Pa,h),s&&(u.uv=Ni.getInterpolatedAttribute(s,o,c,l,h,new Wt)),r&&(u.uv1=Ni.getInterpolatedAttribute(r,o,c,l,h,new Wt)),a&&(u.normal=Ni.getInterpolatedAttribute(a,o,c,l,h,new q),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new q,materialIndex:0};Ni.getNormal(Ia,La,Pa,d.normal),u.face=d,u.barycoord=h}return u}var Er=new ve,zu=new ve,Hu=new ve,xm=new ve,Gu=new jt,Ua=new q,cl=new dn,Vu=new jt,ll=new gi,fn=class extends fe{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=fl,this.bindMatrix=new jt,this.bindMatrixInverse=new jt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let t=this.geometry;this.boundingBox===null&&(this.boundingBox=new cn),this.boundingBox.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ua),this.boundingBox.expandByPoint(Ua)}computeBoundingSphere(){let t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new dn),this.boundingSphere.makeEmpty();let e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,Ua),this.boundingSphere.expandByPoint(Ua)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){let n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),cl.copy(this.boundingSphere),cl.applyMatrix4(s),t.ray.intersectsSphere(cl)!==!1&&(Vu.copy(s).invert(),ll.copy(t.ray).applyMatrix4(Vu),!(this.boundingBox!==null&&ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,ll)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let t=new ve,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);let r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===fl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Cd?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ut("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){let n=this.skeleton,s=this.geometry;zu.fromBufferAttribute(s.attributes.skinIndex,t),Hu.fromBufferAttribute(s.attributes.skinWeight,t),e.isVector4?(Er.copy(e),e.set(0,0,0,0)):(Er.set(...e,1),e.set(0,0,0)),Er.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Hu.getComponent(r);if(a!==0){let o=zu.getComponent(r);Gu.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(xm.copy(Er).applyMatrix4(Gu),a)}}return e.isVector4&&(e.w=Er.w),e.applyMatrix4(this.bindMatrixInverse)}},Ys=class extends Ce{constructor(){super(),this.isBone=!0,this.type="Bone"}},Js=class extends Fe{constructor(t=null,e=1,n=1,s,r,a,o,c,l=Oe,u=Oe,h,d){super(null,a,o,c,l,u,s,r,h,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Wu=new jt,ym=new jt,Or=class i{constructor(t=[],e=[]){this.uuid=Bn(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){Ut("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new jt)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){let n=new jt;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){let n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){let t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){let o=t[r]?t[r].matrixWorld:ym;Wu.multiplyMatrices(o,e[r]),Wu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new i(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);let e=new Float32Array(t*t*4);e.set(this.boneMatrices);let n=new Js(e,t,t,wn,Sn);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){let s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){let r=t.bones[n],a=e[r];a===void 0&&(Ut("Skeleton: No bone found with UUID:",r),a=new Ys),this.bones.push(a),this.boneInverses.push(new jt().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){let t={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;let e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){let a=e[s];t.bones.push(a.uuid);let o=n[s];t.boneInverses.push(o.toArray())}return t}},bi=class extends Xt{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Ns=new jt,qu=new jt,ka=[],Xu=new cn,_m=new jt,Rr=new fe,Cr=new dn,cs=class extends fe{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new bi(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,_m)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new cn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),Xu.copy(t.boundingBox).applyMatrix4(Ns),this.boundingBox.union(Xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new dn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Ns),Cr.copy(t.boundingSphere).applyMatrix4(Ns),this.boundingSphere.union(Cr)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Rr.geometry=this.geometry,Rr.material=this.material,Rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Cr.copy(this.boundingSphere),Cr.applyMatrix4(n),t.ray.intersectsSphere(Cr)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Ns),qu.multiplyMatrices(n,Ns),Rr.matrixWorld=qu,Rr.raycast(t,ka);for(let a=0,o=ka.length;a<o;a++){let c=ka[a];c.instanceId=r,c.object=this,e.push(c)}ka.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new bi(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Js(new Float32Array(s*this.count),s,this.count,Ro,Sn));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<n.length;l++)a+=n[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*t;return r[c]=o,r.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},es=new dn,vm=new Wt(.5,.5),Oa=new q,$s=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=On,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],c=r[2],l=r[3],u=r[4],h=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],g=r[11],T=r[12],M=r[13],y=r[14],v=r[15];if(s[0].setComponents(l-a,f-u,g-m,v-T).normalize(),s[1].setComponents(l+a,f+u,g+m,v+T).normalize(),s[2].setComponents(l+o,f+h,g+_,v+M).normalize(),s[3].setComponents(l-o,f-h,g-_,v-M).normalize(),n)s[4].setComponents(c,d,p,y).normalize(),s[5].setComponents(l-c,f-d,g-p,v-y).normalize();else if(s[4].setComponents(l-c,f-d,g-p,v-y).normalize(),e===On)s[5].setComponents(l+c,f+d,g+p,v+y).normalize();else if(e===Gs)s[5].setComponents(c,d,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),es.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),es.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(es)}intersectsSprite(t){es.center.set(0,0,0);let e=vm.distanceTo(t.center);return es.radius=.7071067811865476+e,es.applyMatrix4(t.matrixWorld),this.intersectsSphere(es)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(Oa.x=s.normal.x>0?t.max.x:t.min.x,Oa.y=s.normal.y>0?t.max.y:t.min.y,Oa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Oa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ui=class extends tn{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},so=new q,ro=new q,ju=new jt,Ir=new gi,Ba=new dn,hl=new q,Ku=new q,ls=class extends Ce{constructor(t=new Te,e=new Ui){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)so.fromBufferAttribute(e,s-1),ro.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=so.distanceTo(ro);t.setAttribute("lineDistance",new ke(n,1))}else Ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ba.copy(n.boundingSphere),Ba.applyMatrix4(s),Ba.radius+=r,t.ray.intersectsSphere(Ba)===!1)return;ju.copy(s).invert(),Ir.copy(t.ray).applyMatrix4(ju);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){let f=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=l){let g=u.getX(_),T=u.getX(_+1),M=za(this,t,Ir,c,g,T,_);M&&e.push(M)}if(this.isLineLoop){let _=u.getX(m-1),p=u.getX(f),g=za(this,t,Ir,c,_,p,m-1);g&&e.push(g)}}else{let f=Math.max(0,a.start),m=Math.min(d.count,a.start+a.count);for(let _=f,p=m-1;_<p;_+=l){let g=za(this,t,Ir,c,_,_+1,_);g&&e.push(g)}if(this.isLineLoop){let _=za(this,t,Ir,c,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function za(i,t,e,n,s,r,a){let o=i.geometry.attributes.position;if(so.fromBufferAttribute(o,s),ro.fromBufferAttribute(o,r),e.distanceSqToSegment(so,ro,hl,Ku)>n)return;hl.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(hl);if(!(l<t.near||l>t.far))return{distance:l,point:Ku.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var Yu=new q,Ju=new q,Br=class extends ls{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Yu.fromBufferAttribute(e,s),Ju.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Yu.distanceTo(Ju);t.setAttribute("lineDistance",new ke(n,1))}else Ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},hs=class extends ls{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}},Zs=class extends tn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$u=new jt,xl=new gi,Ha=new dn,Ga=new q,zr=class extends Ce{constructor(t=new Te,e=new Zs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ha.copy(n.boundingSphere),Ha.applyMatrix4(s),Ha.radius+=r,t.ray.intersectsSphere(Ha)===!1)return;$u.copy(s).invert(),xl.copy(t.ray).applyMatrix4($u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,h=n.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let m=d,_=f;m<_;m++){let p=l.getX(m);Ga.fromBufferAttribute(h,p),Zu(Ga,p,c,s,t,e,this)}}else{let d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let m=d,_=f;m<_;m++)Ga.fromBufferAttribute(h,m),Zu(Ga,m,c,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Zu(i,t,e,n,s,r,a){let o=xl.distanceSqToPoint(i);if(o<e){let c=new q;xl.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var Hr=class extends Fe{constructor(t=[],e=Vi,n,s,r,a,o,c,l,u){super(t,e,n,s,r,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Gr=class extends Fe{constructor(t,e,n,s,r,a,o,c,l){super(t,e,n,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ki=class extends Fe{constructor(t,e,n=Vn,s,r,a,o=Oe,c=Oe,l,u=$n,h=1){if(u!==$n&&u!==Wi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:h};super(d,s,r,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new qs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ao=class extends ki{constructor(t,e=Vn,n=Vi,s,r,a=Oe,o=Oe,c,l=$n){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,s,r,a,o,c,l),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Vr=class extends Fe{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Oi=class i extends Te{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],u=[],h=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,a,r,0),m("z","y","x",1,-1,n,e,-t,a,r,1),m("x","z","y",1,1,t,n,e,s,a,2),m("x","z","y",1,-1,t,n,-e,s,a,3),m("x","y","z",1,-1,t,e,n,s,r,4),m("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new ke(l,3)),this.setAttribute("normal",new ke(u,3)),this.setAttribute("uv",new ke(h,2));function m(_,p,g,T,M,y,v,w,x,b,S){let A=y/x,E=v/b,P=y/2,F=v/2,N=w/2,I=x+1,C=b+1,L=0,k=0,U=new q;for(let B=0;B<C;B++){let z=B*E-F;for(let Z=0;Z<I;Z++){let tt=Z*A-P;U[_]=tt*T,U[p]=z*M,U[g]=N,l.push(U.x,U.y,U.z),U[_]=0,U[p]=0,U[g]=w>0?1:-1,u.push(U.x,U.y,U.z),h.push(Z/x),h.push(1-B/b),L+=1}}for(let B=0;B<b;B++)for(let z=0;z<x;z++){let Z=d+z+I*B,tt=d+z+I*(B+1),at=d+(z+1)+I*(B+1),nt=d+(z+1)+I*B;c.push(Z,tt,nt),c.push(tt,at,nt),k+=6}o.addGroup(f,k,S),f+=k,d+=L}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Wr=class i extends Te{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],c=[],l=new q,u=new Wt;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=e;h++,d+=3){let f=n+h/e*s;l.x=t*Math.cos(f),l.y=t*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),u.x=(a[d]/t+1)/2,u.y=(a[d+1]/t+1)/2,c.push(u.x,u.y)}for(let h=1;h<=e;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new ke(a,3)),this.setAttribute("normal",new ke(o,3)),this.setAttribute("uv",new ke(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.segments,t.thetaStart,t.thetaLength)}};var qr=class i extends Te{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),c=Math.floor(s),l=o+1,u=c+1,h=t/o,d=e/c,f=[],m=[],_=[],p=[];for(let g=0;g<u;g++){let T=g*d-a;for(let M=0;M<l;M++){let y=M*h-r;m.push(y,-T,0),_.push(0,0,1),p.push(M/o),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let T=0;T<o;T++){let M=T+l*g,y=T+l*(g+1),v=T+1+l*(g+1),w=T+1+l*g;f.push(M,y,w),f.push(y,v,w)}this.setIndex(f),this.setAttribute("position",new ke(m,3)),this.setAttribute("normal",new ke(_,3)),this.setAttribute("uv",new ke(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var Xr=class extends tn{constructor(t){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Mt(0),this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.fog=t.fog,this}};function xs(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(Qu(s))s.isRenderTargetTexture?(Ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(Qu(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function en(i){let t={};for(let e=0;e<i.length;e++){let n=xs(i[e]);for(let s in n)t[s]=n[s]}return t}function Qu(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Mm(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Kl(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:re.workingColorSpace}var qd={clone:xs,merge:en},Sm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mn=class extends tn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sm,this.fragmentShader=wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=xs(t.uniforms),this.uniformsGroups=Mm(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Mt().setHex(s.value);break;case"v2":this.uniforms[n].value=new Wt().fromArray(s.value);break;case"v3":this.uniforms[n].value=new q().fromArray(s.value);break;case"v4":this.uniforms[n].value=new ve().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Zt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new jt().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},oo=class extends Mn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Ve=class extends tn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},De=class extends Ve{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Wt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ae(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Mt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Mt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Mt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var jr=class extends tn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ua,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=vo,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},co=class extends tn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ld,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},lo=class extends tn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Di(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function ja(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}function Am(i){function t(s,r){return i[s]-i[r]}let e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function td(i,t,e){let n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){let o=e[r]*t;for(let c=0;c!==t;++c)s[a++]=i[o+c]}return s}function Tm(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push(...a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}var Qn=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ho=class extends Qn{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ml,endingEnd:ml}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case gl:r=t,o=2*e-n;break;case bl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case gl:a=t,c=2*n-e;break;case bl:a=1,c=n+s[1]-s[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=a*u}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(s-e),_=m*m,p=_*m,g=-d*p+2*d*_-d*m,T=(1+d)*p+(-1.5-2*d)*_+(-.5+d)*m+1,M=(-1-f)*p+(1.5+f)*_+.5*m,y=f*p-f*_;for(let v=0;v!==o;++v)r[v]=g*a[u+v]+T*a[l+v]+M*a[c+v]+y*a[h+v];return r}},uo=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(s-e),h=1-u;for(let d=0;d!==o;++d)r[d]=a[l+d]*h+a[c+d]*u;return r}},fo=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},po=class extends Qn{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,h=this.outTangents;if(!u||!h){let m=(n-e)/(s-e),_=1-m;for(let p=0;p!==o;++p)r[p]=a[l+p]*_+a[c+p]*m;return r}let d=o*2,f=t-1;for(let m=0;m!==o;++m){let _=a[l+m],p=a[c+m],g=f*d+m*2,T=h[g],M=h[g+1],y=t*d+m*2,v=u[y],w=u[y+1],x=Rm(n,e,T,v,s);r[m]=Xd(x,_,M,w,p)}return r}};function Xd(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Em(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Rm(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=Xd(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let c=Em(r,t,e,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var pn=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Di(e,this.TimeBufferType),this.values=Di(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Di(t.times,Array),values:Di(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),ja(t.settings)&&(n.settings={inTangents:Di(t.settings.inTangents,Array),outTangents:Di(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new uo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new ho(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new po(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case is:e=this.InterpolantFactoryMethodDiscrete;break;case ss:e=this.InterpolantFactoryMethodLinear;break;case qa:e=this.InterpolantFactoryMethodSmooth;break;case pl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Ut("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return is;case this.InterpolantFactoryMethodLinear:return ss;case this.InterpolantFactoryMethodSmooth:return qa;case this.InterpolantFactoryMethodBezier:return pl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;ja(this.settings)&&(ed(this.settings.inTangents,t),ed(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Kt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Kt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let c=n[o];if(typeof c=="number"&&isNaN(c)){Kt("KeyframeTrack: Time is not a valid number.",this,o,c),t=!1;break}if(a!==null&&a>c){Kt("KeyframeTrack: Out of order keys.",this,o,c,a),t=!1;break}a=c}if(s!==void 0&&Op(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Kt("KeyframeTrack: Value is not a valid number.",this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===qa,r=t.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=t[o],u=t[o+1];if(l!==u&&(o!==1||l!==t[0]))if(s)c=!0;else{let h=o*n,d=h-n,f=h+n;for(let m=0;m!==n;++m){let _=e[h+m];if(_!==e[d+m]||_!==e[f+m]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let h=o*n,d=a*n;for(let f=0;f!==n;++f)e[d+f]=e[h+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,ja(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function ed(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}pn.prototype.ValueTypeName="";pn.prototype.TimeBufferType=Float32Array;pn.prototype.ValueBufferType=Float32Array;pn.prototype.DefaultInterpolation=ss;var xi=class extends pn{constructor(t,e,n){super(t,e,n)}};xi.prototype.ValueTypeName="bool";xi.prototype.ValueBufferType=Array;xi.prototype.DefaultInterpolation=is;xi.prototype.InterpolantFactoryMethodLinear=void 0;xi.prototype.InterpolantFactoryMethodSmooth=void 0;var Kr=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Kr.prototype.ValueTypeName="color";var yi=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};yi.prototype.ValueTypeName="number";var mo=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(s-e),l=t*o;for(let u=l+o;l!==u;l+=4)Qe.slerpFlat(r,0,a,l-o,a,l,c);return r}},_i=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new mo(this.times,this.values,this.getValueSize(),t)}};_i.prototype.ValueTypeName="quaternion";_i.prototype.InterpolantFactoryMethodSmooth=void 0;var vi=class extends pn{constructor(t,e,n){super(t,e,n)}};vi.prototype.ValueTypeName="string";vi.prototype.ValueBufferType=Array;vi.prototype.DefaultInterpolation=is;vi.prototype.InterpolantFactoryMethodLinear=void 0;vi.prototype.InterpolantFactoryMethodSmooth=void 0;var Bi=class extends pn{constructor(t,e,n,s){super(t,e,n,s)}};Bi.prototype.ValueTypeName="vector";var Yr=class{constructor(t="",e=-1,n=[],s=Id){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Bn(),this.userData={},this.duration<0&&this.resetDuration()}static parse(t){let e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(Im(n[a]).scale(s));let r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r.userData=JSON.parse(t.userData||"{}"),r}static toJSON(t){let e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode,userData:JSON.stringify(t.userData)};for(let r=0,a=n.length;r!==a;++r)e.push(pn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){let r=e.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let u=Am(c);c=td(c,1,u),l=td(l,1,u),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new yi(".morphTargetInfluences["+e[o].name+"]",c,l).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){let s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=t.length;o<c;o++){let l=t[o],u=l.name.match(r);if(u&&u.length>1){let h=u[1],d=s[h];d||(s[h]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}resetDuration(){let t=this.tracks,e=0;for(let n=0,s=t.length;n!==s;++n){let r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){let t=[];for(let n=0;n<this.tracks.length;n++)t.push(this.tracks[n].clone());let e=new this.constructor(this.name,this.duration,t,this.blendMode);return e.userData=JSON.parse(JSON.stringify(this.userData)),e}toJSON(){return this.constructor.toJSON(this)}};function Cm(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return yi;case"vector":case"vector2":case"vector3":case"vector4":return Bi;case"color":return Kr;case"quaternion":return _i;case"bool":case"boolean":return xi;case"string":return vi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Im(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let t=Cm(i.type);if(i.times===void 0){let n=[],s=[];Tm(i.keys,n,s,"value"),i.times=n,i.values=s}let e;return t.parse!==void 0?e=t.parse(i):e=new t(i.name,i.times,i.values,i.interpolation),ja(i.settings)&&(e.settings={inTangents:Di(i.settings.inTangents,Float32Array),outTangents:Di(i.settings.outTangents,Float32Array)}),e}var Jn={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(nd(i)||(this.files[i]=t))},get:function(i){if(this.enabled!==!1&&!nd(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function nd(i){try{let t=i.slice(i.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var go=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){o++,r===!1&&s.onStart!==void 0&&s.onStart(u,a,o),r=!0},this.itemEnd=function(u){a++,s.onProgress!==void 0&&s.onProgress(u,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(u){s.onError!==void 0&&s.onError(u)},this.resolveURL=function(u){return u=u.normalize("NFC"),c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){let h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){let f=l[h],m=l[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},jd=new go,ti=class{constructor(t){this.manager=t!==void 0?t:jd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};ti.DEFAULT_MATERIAL_NAME="__DEFAULT";var pi={},yl=class extends Error{constructor(t,e){super(t),this.response=e}},Qs=class extends ti{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=Jn.get(`file:${t}`);if(r!==void 0){this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0);return}if(pi[t]!==void 0){pi[t].push({onLoad:e,onProgress:n,onError:s});return}pi[t]=[],pi[t].push({onLoad:e,onProgress:n,onError:s});let a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ut("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let u=pi[t],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,m=f!==0,_=0,p=new ReadableStream({start(g){T();function T(){h.read().then(({done:M,value:y})=>{if(M)g.close();else{_+=y.byteLength;let v=new ProgressEvent("progress",{lengthComputable:m,loaded:_,total:f});for(let w=0,x=u.length;w<x;w++){let b=u[w];b.onProgress&&b.onProgress(v)}g.enqueue(y),T()}},M=>{g.error(M)})}}});return new Response(p)}else throw new yl(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return l.json();default:if(o==="")return l.text();{let h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(m=>f.decode(m))}}}).then(l=>{Jn.add(`file:${t}`,l);let u=pi[t];delete pi[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onLoad&&f.onLoad(l)}}).catch(l=>{let u=pi[t];if(u===void 0)throw this.manager.itemError(t),l;delete pi[t];for(let h=0,d=u.length;h<d;h++){let f=u[h];f.onError&&f.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var Us=new WeakMap,bo=class extends ti{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Jn.get(`image:${t}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);else{let h=Us.get(a);h===void 0&&(h=[],Us.set(a,h)),h.push({onLoad:e,onError:s})}return a}let o=Vs("img");function c(){u(),e&&e(this);let h=Us.get(this)||[];for(let d=0;d<h.length;d++){let f=h[d];f.onLoad&&f.onLoad(this)}Us.delete(this),r.manager.itemEnd(t)}function l(h){u(),s&&s(h),Jn.remove(`image:${t}`);let d=Us.get(this)||[];for(let f=0;f<d.length;f++){let m=d[f];m.onError&&m.onError(h)}Us.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function u(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Jn.add(`image:${t}`,o),r.manager.itemStart(t),o.src=t,o}};var us=class extends ti{constructor(t){super(t)}load(t,e,n,s){let r=new Fe,a=new bo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}},ds=class extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Jr=class extends ds{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Mt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},ul=new jt,id=new q,sd=new q,tr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.mapType=gn,this.map=null,this.mapPass=null,this.matrix=new jt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $s,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new ve(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;id.setFromMatrixPosition(t.matrixWorld),e.position.copy(id),sd.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sd),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){ul.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(ul,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;t.coordinateSystem===Gs||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(ul)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Va=new q,Wa=new Qe,Yn=new q,$r=class extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new jt,this.projectionMatrix=new jt,this.projectionMatrixInverse=new jt,this.coordinateSystem=On,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Va,Wa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,Yn.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Va,Wa,Yn),Yn.x===1&&Yn.y===1&&Yn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Va,Wa,Yn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Fi=new q,rd=new Wt,ad=new Wt,Ue=class extends $r{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=rs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Lr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return rs*2*Math.atan(Math.tan(Lr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Fi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z),Fi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Fi.x,Fi.y).multiplyScalar(-t/Fi.z)}getViewSize(t,e){return this.getViewBounds(t,rd,ad),e.subVectors(ad,rd)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Lr*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,e-=a.offsetY*n/l,s*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},_l=class extends tr{constructor(){super(new Ue(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=rs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}},Zr=class extends ds{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new _l}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}},vl=class extends tr{constructor(){super(new Ue(90,1,.5,500)),this.isPointLightShadow=!0}},fs=class extends ds{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new vl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},zi=class extends $r{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,c=s-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ml=class extends tr{constructor(){super(new zi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mi=class extends ds{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.shadow=new Ml}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var Si=class{static extractUrlBase(t){let e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}};var dl=new WeakMap,Qr=class extends ti{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ut("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ut("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,a=Jn.get(`image-bitmap:${t}`);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(l=>{dl.has(a)===!0?(s&&s(dl.get(a)),r.manager.itemError(t),r.manager.itemEnd(t)):(e&&e(l),r.manager.itemEnd(t))});return}setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(t,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Jn.add(`image-bitmap:${t}`,l),e&&e(l),r.manager.itemEnd(t),l}).catch(function(l){s&&s(l),dl.set(c,l),Jn.remove(`image-bitmap:${t}`),r.manager.itemError(t),r.manager.itemEnd(t)});Jn.add(`image-bitmap:${t}`,c),r.manager.itemStart(t)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ks=-90,Os=1,xo=class extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ue(ks,Os,t,e);s.layers=this.layers,this.add(s);let r=new Ue(ks,Os,t,e);r.layers=this.layers,this.add(r);let a=new Ue(ks,Os,t,e);a.layers=this.layers,this.add(a);let o=new Ue(ks,Os,t,e);o.layers=this.layers,this.add(o);let c=new Ue(ks,Os,t,e);c.layers=this.layers,this.add(c);let l=new Ue(ks,Os,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,c]=e;for(let l of e)this.remove(l);if(t===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===Gs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let p=!1;t.isWebGLRenderer===!0?p=t.state.buffers.depth.getReversed():p=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),p&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(h,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},yo=class extends Ue{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Yl="\\[\\]\\.:\\/",Lm=new RegExp("["+Yl+"]","g"),Jl="[^"+Yl+"]",Pm="[^"+Yl.replace("\\.","")+"]",Fm=/((?:WC+[\/:])*)/.source.replace("WC",Jl),Dm=/(WCOD+)?/.source.replace("WCOD",Pm),Nm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Um=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),km=new RegExp("^"+Fm+Dm+Nm+Um+"$"),Om=["material","materials","bones","map"],Sl=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Lm,"")}static parseTrackName(t){let e=km.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Om.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let c=n(o.children);if(c)return c}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=e.objectIndex;switch(n){case"materials":if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Kt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Kt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===l){l=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Kt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Kt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Kt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(l!==void 0){if(t[l]===void 0){Kt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[l]}}let a=t[s];if(a===void 0){let l=e.nodeName;Kt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Kt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Sl;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var j_=new Float32Array(1);var er=class{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=ae(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(ae(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}};var wl=class i{static{i.prototype.isMatrix2=!0}constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};var ta=class extends zn{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}};function $l(i,t,e,n){let s=Bm(n);switch(e){case Gl:return i*t;case Ro:return i*t/s.components*s.byteLength;case Co:return i*t/s.components*s.byteLength;case qi:return i*t*2/s.components*s.byteLength;case Io:return i*t*2/s.components*s.byteLength;case Vl:return i*t*3/s.components*s.byteLength;case wn:return i*t*4/s.components*s.byteLength;case Lo:return i*t*4/s.components*s.byteLength;case sa:case ra:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case aa:case oa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Fo:case No:return Math.max(i,16)*Math.max(t,8)/4;case Po:case Do:return Math.max(i,8)*Math.max(t,8)/2;case Uo:case ko:case Bo:case zo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Oo:case ca:case Ho:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Go:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Vo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case qo:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Xo:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case jo:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Ko:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Yo:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Jo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case $o:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Zo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Qo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case tc:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case ec:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case nc:case ic:case sc:return Math.ceil(i/4)*Math.ceil(t/4)*16;case rc:case ac:return Math.ceil(i/4)*Math.ceil(t/4)*8;case la:case oc:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Bm(i){switch(i){case gn:case Ol:return{byteLength:1,components:1};case rr:case Bl:case Wn:return{byteLength:2,components:1};case To:case Eo:return{byteLength:2,components:4};case Vn:case Ao:case Sn:return{byteLength:4,components:1};case zl:case Hl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function gf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Hm(i){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,h=l.byteLength,d=i.createBuffer();i.bindBuffer(c,d),i.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=i.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=i.SHORT;else if(l instanceof Uint32Array)f=i.UNSIGNED_INT;else if(l instanceof Int32Array)f=i.INT;else if(l instanceof Int8Array)f=i.BYTE;else if(l instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,c,l){let u=c.array,h=c.updateRanges;if(i.bindBuffer(l,o),h.length===0)i.bufferSubData(l,0,u);else{h.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<h.length;f++){let m=h[d],_=h[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,h[d]=_)}h.length=d+1;for(let f=0,m=h.length;f<m;f++){let _=h[f];i.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(i.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}var Gm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Vm=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Xm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Km=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ym=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Jm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,$m=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Zm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,tg=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,eg=`#ifdef USE_IRIDESCENCE
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
#endif`,ng=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ig=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,sg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,rg=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ag=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,og=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,cg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,lg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hg=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,ug=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dg=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,fg=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,pg=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mg=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,bg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xg="gl_FragColor = linearToOutputTexel( gl_FragColor );",yg=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_g=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mg=`#ifdef USE_ENVMAP
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
#endif`,Sg=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,wg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Ag=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tg=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Eg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Cg=`#ifdef USE_GRADIENTMAP
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
}`,Ig=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pg=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Fg=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Dg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ug=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Og=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,zg=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Hg=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gg=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Vg=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wg=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,qg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Yg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Jg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$g=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Zg=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,t0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,e0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,n0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,i0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,s0=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,r0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,a0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,o0=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,c0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,l0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,h0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,u0=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,d0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,f0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,p0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,m0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,g0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,b0=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,x0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,v0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,M0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,S0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,w0=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,A0=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,T0=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,E0=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,R0=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,C0=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,I0=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,L0=`#ifdef USE_SKINNING
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
#endif`,P0=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,F0=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,D0=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,N0=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,U0=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,k0=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,O0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,B0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,z0=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,H0=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,G0=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,V0=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,W0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,q0=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,X0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,j0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,K0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Y0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,J0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,$0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Z0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Q0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,rb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ab=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ob=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,hb=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,db=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,fb=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,mb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,bb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_b=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,vb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:Gm,alphahash_pars_fragment:Vm,alphamap_fragment:Wm,alphamap_pars_fragment:qm,alphatest_fragment:Xm,alphatest_pars_fragment:jm,aomap_fragment:Km,aomap_pars_fragment:Ym,batching_pars_vertex:Jm,batching_vertex:$m,begin_vertex:Zm,beginnormal_vertex:Qm,bsdfs:tg,iridescence_fragment:eg,bumpmap_pars_fragment:ng,clipping_planes_fragment:ig,clipping_planes_pars_fragment:sg,clipping_planes_pars_vertex:rg,clipping_planes_vertex:ag,color_fragment:og,color_pars_fragment:cg,color_pars_vertex:lg,color_vertex:hg,common:ug,cube_uv_reflection_fragment:dg,defaultnormal_vertex:fg,displacementmap_pars_vertex:pg,displacementmap_vertex:mg,emissivemap_fragment:gg,emissivemap_pars_fragment:bg,colorspace_fragment:xg,colorspace_pars_fragment:yg,envmap_fragment:_g,envmap_common_pars_fragment:vg,envmap_pars_fragment:Mg,envmap_pars_vertex:Sg,envmap_physical_pars_fragment:Dg,envmap_vertex:wg,fog_vertex:Ag,fog_pars_vertex:Tg,fog_fragment:Eg,fog_pars_fragment:Rg,gradientmap_pars_fragment:Cg,lightmap_pars_fragment:Ig,lights_lambert_fragment:Lg,lights_lambert_pars_fragment:Pg,lights_pars_begin:Fg,lights_toon_fragment:Ng,lights_toon_pars_fragment:Ug,lights_phong_fragment:kg,lights_phong_pars_fragment:Og,lights_physical_fragment:Bg,lights_physical_pars_fragment:zg,lights_fragment_begin:Hg,lights_fragment_maps:Gg,lights_fragment_end:Vg,lightprobes_pars_fragment:Wg,logdepthbuf_fragment:qg,logdepthbuf_pars_fragment:Xg,logdepthbuf_pars_vertex:jg,logdepthbuf_vertex:Kg,map_fragment:Yg,map_pars_fragment:Jg,map_particle_fragment:$g,map_particle_pars_fragment:Zg,metalnessmap_fragment:Qg,metalnessmap_pars_fragment:t0,morphinstance_vertex:e0,morphcolor_vertex:n0,morphnormal_vertex:i0,morphtarget_pars_vertex:s0,morphtarget_vertex:r0,normal_fragment_begin:a0,normal_fragment_maps:o0,normal_pars_fragment:c0,normal_pars_vertex:l0,normal_vertex:h0,normalmap_pars_fragment:u0,clearcoat_normal_fragment_begin:d0,clearcoat_normal_fragment_maps:f0,clearcoat_pars_fragment:p0,iridescence_pars_fragment:m0,opaque_fragment:g0,packing:b0,premultiplied_alpha_fragment:x0,project_vertex:y0,dithering_fragment:_0,dithering_pars_fragment:v0,roughnessmap_fragment:M0,roughnessmap_pars_fragment:S0,shadowmap_pars_fragment:w0,shadowmap_pars_vertex:A0,shadowmap_vertex:T0,shadowmask_pars_fragment:E0,skinbase_vertex:R0,skinning_pars_vertex:C0,skinning_vertex:I0,skinnormal_vertex:L0,specularmap_fragment:P0,specularmap_pars_fragment:F0,tonemapping_fragment:D0,tonemapping_pars_fragment:N0,transmission_fragment:U0,transmission_pars_fragment:k0,uv_pars_fragment:O0,uv_pars_vertex:B0,uv_vertex:z0,worldpos_vertex:H0,background_vert:G0,background_frag:V0,backgroundCube_vert:W0,backgroundCube_frag:q0,cube_vert:X0,cube_frag:j0,depth_vert:K0,depth_frag:Y0,distance_vert:J0,distance_frag:$0,equirect_vert:Z0,equirect_frag:Q0,linedashed_vert:tb,linedashed_frag:eb,meshbasic_vert:nb,meshbasic_frag:ib,meshlambert_vert:sb,meshlambert_frag:rb,meshmatcap_vert:ab,meshmatcap_frag:ob,meshnormal_vert:cb,meshnormal_frag:lb,meshphong_vert:hb,meshphong_frag:ub,meshphysical_vert:db,meshphysical_frag:fb,meshtoon_vert:pb,meshtoon_frag:mb,points_vert:gb,points_frag:bb,shadow_vert:xb,shadow_frag:yb,sprite_vert:_b,sprite_frag:vb},St={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Zt}},envmap:{envMap:{value:null},envMapRotation:{value:new Zt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Zt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Zt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Zt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Zt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Zt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Zt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Zt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Zt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new q},probesMax:{value:new q},probesResolution:{value:new q}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0},uvTransform:{value:new Zt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Zt},alphaMap:{value:null},alphaMapTransform:{value:new Zt},alphaTest:{value:0}}},ii={basic:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:en([St.common,St.specularmap,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.fog,St.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:en([St.common,St.envmap,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.roughnessmap,St.metalnessmap,St.fog,St.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:en([St.common,St.aomap,St.lightmap,St.emissivemap,St.bumpmap,St.normalmap,St.displacementmap,St.gradientmap,St.fog,St.lights,{emissive:{value:new Mt(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,St.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:en([St.points,St.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:en([St.common,St.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:en([St.common,St.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:en([St.common,St.bumpmap,St.normalmap,St.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:en([St.sprite,St.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Zt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Zt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:en([St.common,St.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:en([St.lights,St.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ii.physical={uniforms:en([ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Zt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Zt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Zt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Zt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Zt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Zt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Zt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Zt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Zt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Zt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Zt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Zt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var hc={r:0,b:0,g:0},Mb=new jt,bf=new Zt;bf.set(-1,0,0,0,1,0,0,0,1);function Sb(i,t,e,n,s,r){let a=new Mt(0),o=s===!0?0:1,c,l,u=null,h=0,d=null;function f(T){let M=T.isScene===!0?T.background:null;if(M&&M.isTexture){let y=T.backgroundBlurriness>0;M=t.get(M,y)}return M}function m(T){let M=!1,y=f(T);y===null?p(a,o):y&&y.isColor&&(p(y,1),M=!0);let v=i.xr.getEnvironmentBlendMode();v==="additive"?e.buffers.color.setClear(0,0,0,1,r):v==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||M)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(T,M){let y=f(M);y&&(y.isCubeTexture||y.mapping===ia)?(l===void 0&&(l=new fe(new Oi(1,1,1),new Mn({name:"BackgroundCubeMaterial",uniforms:xs(ii.backgroundCube.uniforms),vertexShader:ii.backgroundCube.vertexShader,fragmentShader:ii.backgroundCube.fragmentShader,side:Ke,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(v,w,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Mb.makeRotationFromEuler(M.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(bf),l.material.toneMapped=re.getTransfer(y.colorSpace)!==be,(u!==y||h!==y.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),l.layers.enableAll(),T.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new fe(new qr(2,2),new Mn({name:"BackgroundMaterial",uniforms:xs(ii.background.uniforms),vertexShader:ii.background.vertexShader,fragmentShader:ii.background.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=re.getTransfer(y.colorSpace)!==be,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||h!==y.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,u=y,h=y.version,d=i.toneMapping),c.layers.enableAll(),T.unshift(c,c.geometry,c.material,0,0,null))}function p(T,M){T.getRGB(hc,Kl(i)),e.buffers.color.setClear(hc.r,hc.g,hc.b,M,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,M=1){a.set(T),o=M,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(T){o=T,p(a,o)},render:m,addToRenderList:_,dispose:g}}function wb(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null),r=s,a=!1;function o(E,P,F,N,I){let C=!1,L=h(E,N,F,P);r!==L&&(r=L,l(r.object)),C=f(E,N,F,I),C&&m(E,N,F,I),I!==null&&t.update(I,i.ELEMENT_ARRAY_BUFFER),(C||a)&&(a=!1,y(E,P,F,N),I!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(I).buffer))}function c(){return i.createVertexArray()}function l(E){return i.bindVertexArray(E)}function u(E){return i.deleteVertexArray(E)}function h(E,P,F,N){let I=N.wireframe===!0,C=n[P.id];C===void 0&&(C={},n[P.id]=C);let L=E.isInstancedMesh===!0?E.id:0,k=C[L];k===void 0&&(k={},C[L]=k);let U=k[F.id];U===void 0&&(U={},k[F.id]=U);let B=U[I];return B===void 0&&(B=d(c()),U[I]=B),B}function d(E){let P=[],F=[],N=[];for(let I=0;I<e;I++)P[I]=0,F[I]=0,N[I]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:N,object:E,attributes:{},index:null}}function f(E,P,F,N){let I=r.attributes,C=P.attributes,L=0,k=F.getAttributes();for(let U in k)if(k[U].location>=0){let z=I[U],Z=C[U];if(Z===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(Z=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(Z=E.instanceColor)),z===void 0||z.attribute!==Z||Z&&z.data!==Z.data)return!0;L++}return r.attributesNum!==L||r.index!==N}function m(E,P,F,N){let I={},C=P.attributes,L=0,k=F.getAttributes();for(let U in k)if(k[U].location>=0){let z=C[U];z===void 0&&(U==="instanceMatrix"&&E.instanceMatrix&&(z=E.instanceMatrix),U==="instanceColor"&&E.instanceColor&&(z=E.instanceColor));let Z={};Z.attribute=z,z&&z.data&&(Z.data=z.data),I[U]=Z,L++}r.attributes=I,r.attributesNum=L,r.index=N}function _(){let E=r.newAttributes;for(let P=0,F=E.length;P<F;P++)E[P]=0}function p(E){g(E,0)}function g(E,P){let F=r.newAttributes,N=r.enabledAttributes,I=r.attributeDivisors;F[E]=1,N[E]===0&&(i.enableVertexAttribArray(E),N[E]=1),I[E]!==P&&(i.vertexAttribDivisor(E,P),I[E]=P)}function T(){let E=r.newAttributes,P=r.enabledAttributes;for(let F=0,N=P.length;F<N;F++)P[F]!==E[F]&&(i.disableVertexAttribArray(F),P[F]=0)}function M(E,P,F,N,I,C,L){L===!0?i.vertexAttribIPointer(E,P,F,I,C):i.vertexAttribPointer(E,P,F,N,I,C)}function y(E,P,F,N){_();let I=N.attributes,C=F.getAttributes(),L=P.defaultAttributeValues;for(let k in C){let U=C[k];if(U.location>=0){let B=I[k];if(B===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(B=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(B=E.instanceColor)),B!==void 0){let z=B.normalized,Z=B.itemSize,tt=t.get(B);if(tt===void 0)continue;let at=tt.buffer,nt=tt.type,ut=tt.bytesPerElement,X=nt===i.INT||nt===i.UNSIGNED_INT||B.gpuType===Ao;if(B.isInterleavedBufferAttribute){let J=B.data,ct=J.stride,_t=B.offset;if(J.isInstancedInterleavedBuffer){for(let ht=0;ht<U.locationSize;ht++)g(U.location+ht,J.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let ht=0;ht<U.locationSize;ht++)p(U.location+ht);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ht=0;ht<U.locationSize;ht++)M(U.location+ht,Z/U.locationSize,nt,z,ct*ut,(_t+Z/U.locationSize*ht)*ut,X)}else{if(B.isInstancedBufferAttribute){for(let J=0;J<U.locationSize;J++)g(U.location+J,B.meshPerAttribute);E.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=B.meshPerAttribute*B.count)}else for(let J=0;J<U.locationSize;J++)p(U.location+J);i.bindBuffer(i.ARRAY_BUFFER,at);for(let J=0;J<U.locationSize;J++)M(U.location+J,Z/U.locationSize,nt,z,Z*ut,Z/U.locationSize*J*ut,X)}}else if(L!==void 0){let z=L[k];if(z!==void 0)switch(z.length){case 2:i.vertexAttrib2fv(U.location,z);break;case 3:i.vertexAttrib3fv(U.location,z);break;case 4:i.vertexAttrib4fv(U.location,z);break;default:i.vertexAttrib1fv(U.location,z)}}}}T()}function v(){S();for(let E in n){let P=n[E];for(let F in P){let N=P[F];for(let I in N){let C=N[I];for(let L in C)u(C[L].object),delete C[L];delete N[I]}}delete n[E]}}function w(E){if(n[E.id]===void 0)return;let P=n[E.id];for(let F in P){let N=P[F];for(let I in N){let C=N[I];for(let L in C)u(C[L].object),delete C[L];delete N[I]}}delete n[E.id]}function x(E){for(let P in n){let F=n[P];for(let N in F){let I=F[N];if(I[E.id]===void 0)continue;let C=I[E.id];for(let L in C)u(C[L].object),delete C[L];delete I[E.id]}}}function b(E){for(let P in n){let F=n[P],N=E.isInstancedMesh===!0?E.id:0,I=F[N];if(I!==void 0){for(let C in I){let L=I[C];for(let k in L)u(L[k].object),delete L[k];delete I[C]}delete F[N],Object.keys(F).length===0&&delete n[P]}}}function S(){A(),a=!0,r!==s&&(r=s,l(r.object))}function A(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:S,resetDefaultState:A,dispose:v,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function Ab(i,t,e){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(i.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,u);let d=0;for(let f=0;f<u;f++)d+=l[f];e.update(d,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Tb(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==wn&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let b=x===Wn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==gn&&x!==Sn&&!b&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp",u=c(l);u!==l&&(Ut("WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);let h=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&d===!1&&Ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),M=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),v=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:h,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:T,maxVaryings:M,maxFragmentUniforms:y,maxSamples:v,samples:w}}function Eb(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vn,o=new Zt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){let f=h.length!==0||d||n!==0||s;return s=d,n=h.length,f},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,f){let m=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,g=i.get(h);if(!s||m===null||m.length===0||r&&!p)r?u(null):l();else{let T=r?0:n,M=T*4,y=g.clippingState||null;c.value=y,y=u(m,d,M,f);for(let v=0;v!==M;++v)y[v]=e[v];g.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,d,f,m){let _=h!==null?h.length:0,p=null;if(_!==0){if(p=c.value,m!==!0||p===null){let g=f+_*4,T=d.matrixWorldInverse;o.getNormalMatrix(T),(p===null||p.length<g)&&(p=new Float32Array(g));for(let M=0,y=f;M!==_;++M,y+=4)a.copy(h[M]).applyMatrix4(T,o),a.normal.toArray(p,y),p[y+3]=a.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}var lr=4,Rb=6,Cb=20,Ib=256,da=new zi,Kd=new Mt,Zl=null,Ql=0,th=0,eh=!1,Lb=new q,ys=new q,ur=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=Lb}=r;Zl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,s,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$d(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Jd(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(Zl,Ql,th),this._renderer.xr.enabled=eh,t.scissorTest=!1,cr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vi||t.mapping===ms?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Zl=this._renderer.getRenderTarget(),Ql=this._renderer.getActiveCubeFace(),th=this._renderer.getActiveMipmapLevel(),eh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Le,minFilter:Le,generateMipmaps:!1,type:Wn,format:wn,colorSpace:an,depthBuffer:!1},s=Yd(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yd(t,e,n);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Pb(r)),this._blurMaterial=Db(r,t,e),this._ggxMaterial=Fb(r,t,e)}return s}_compileMaterial(t){let e=new fe(new Te,t);this._renderer.compile(e,da)}_sceneToCubeUV(t,e,n,s,r){let c=new Ue(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Kd),h.toneMapping=Gn,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(s),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new fe(new Oi,new Hn({name:"PMREM.Background",side:Ke,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,p=_.material,g=!1,T=t.background;T?T.isColor&&(p.color.copy(T),t.background=null,g=!0):(p.color.copy(Kd),g=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+u[M],r.y,r.z)):y===1?(c.up.set(0,0,l[M]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+u[M],r.z)):(c.up.set(0,l[M],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+u[M]));let v=this._cubeSize;cr(s,y*v,M>2?v:0,v,v),h.setRenderTarget(s),g&&h.render(_,c),h.render(t,c)}h.toneMapping=f,h.autoClear=d,t.background=T}_textureToCubeUV(t,e){let n=this._renderer,s=t.mapping===Vi||t.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$d()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Jd());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let c=this._cubeSize;cr(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,da)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=n}_applyGGXFilter(t,e,n){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(l*l-u*u),d=l*1.25,f=h*d,{_lodMax:m}=this,_=this._sizeLods[n],p=3*_*(n>m-lr?n-m+lr:0),g=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=m-e,cr(r,p,g,3*_,2*_),s.setRenderTarget(r),s.render(o,da),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=m-n,cr(t,p,g,3*_,2*_),s.setRenderTarget(t),s.render(o,da)}_blur(t,e,n,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,n,a),this._blurPass(r,t,n,n,a)}_blurPass(t,e,n,s,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[s];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[s],h=3*u*(s>this._lodMax-lr?s-this._lodMax+lr:0),d=4*(this._cubeSize-u);cr(e,h,d,3*u,2*u),a.setRenderTarget(e),a.render(c,da)}};function Pb(i){let t=[],e=[],n=i,s=i-lr+1+Rb;for(let r=0;r<s;r++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],h=6,d=6,f=3,m=new Float32Array(f*d*h),_=new Float32Array(f*d*h);for(let g=0;g<h;g++){let T=g%3*2/3-1,M=g>2?0:-1,y=[T,M,0,T+2/3,M,0,T+2/3,M+1,0,T,M,0,T+2/3,M+1,0,T,M+1,0];m.set(y,f*d*g);for(let v=0;v<d;v++){let w=u[v*2]*2-1,x=u[v*2+1]*2-1;g===0?ys.set(1,x,w):g===1?ys.set(-w,1,-x):g===2?ys.set(-w,x,1):g===3?ys.set(-1,x,-w):g===4?ys.set(-w,-1,x):ys.set(w,x,-1),ys.toArray(_,(g*d+v)*f)}}let p=new Te;p.setAttribute("position",new Xt(m,f)),p.setAttribute("outputDirection",new Xt(_,f)),e.push(new fe(p,null)),n>lr&&n--}return{lodMeshes:e,sizeLods:t}}function Yd(i,t,e){let n=new on(i,t,e);return n.texture.mapping=ia,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Fb(i,t,e){return new Mn({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ib,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Db(i,t,e){return new Mn({name:"SphericalGaussianBlur",defines:{SAMPLES:Cb,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:pc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function Jd(){return new Mn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pc(),fragmentShader:`

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
		`,blending:ei,depthTest:!1,depthWrite:!1})}function $d(){return new Mn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ei,depthTest:!1,depthWrite:!1})}function pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var dc=class extends on{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Hr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Oi(5,5,5),r=new Mn({name:"CubemapFromEquirect",uniforms:xs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ke,blending:ei});r.uniforms.tEquirect.value=e;let a=new fe(s,r),o=e.minFilter;return e.minFilter===mn&&(e.minFilter=Le),new xo(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}};function Nb(i){let t=new WeakMap,e=new WeakMap,n=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Mo||f===So)if(t.has(d)){let m=t.get(d).texture;return o(m,d.mapping)}else{let m=d.image;if(m&&m.height>0){let _=new dc(m.height);return _.fromEquirectangularTexture(i,d),t.set(d,_),d.addEventListener("dispose",l),o(_.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,m=f===Mo||f===So,_=f===Vi||f===ms;if(m||_){let p=e.get(d),g=p!==void 0?p.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==g)return n===null&&(n=new ur(i)),p=m?n.fromEquirectangular(d,p):n.fromCubemap(d,p),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),p.texture;if(p!==void 0)return p.texture;{let T=d.image;return m&&T&&T.height>0||_&&T&&c(T)?(n===null&&(n=new ur(i)),p=m?n.fromEquirectangular(d):n.fromCubemap(d),p.texture.pmremVersion=d.pmremVersion,e.set(d,p),d.addEventListener("dispose",u),p.texture):null}}}return d}function o(d,f){return f===Mo?d.mapping=Vi:f===So&&(d.mapping=ms),d}function c(d){let f=0,m=6;for(let _=0;_<m;_++)d[_]!==void 0&&f++;return f===m}function l(d){let f=d.target;f.removeEventListener("dispose",l);let m=t.get(f);m!==void 0&&(t.delete(f),m.dispose())}function u(d){let f=d.target;f.removeEventListener("dispose",u);let m=e.get(f);m!==void 0&&(e.delete(f),m.dispose())}function h(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:h}}function Ub(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&ns("WebGLRenderer: "+n+" extension not supported."),s}}}function kb(i,t,e,n){let s={},r=new WeakMap;function a(h){let d=h.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",a),delete s[d.id];let f=r.get(d);f&&(t.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function o(h,d){return s[d.id]===!0||(d.addEventListener("dispose",a),s[d.id]=!0,e.memory.geometries++),d}function c(h){let d=h.attributes;for(let f in d)t.update(d[f],i.ARRAY_BUFFER)}function l(h){let d=[],f=h.index,m=h.attributes.position,_=0;if(m===void 0)return;if(f!==null){let T=f.array;_=f.version;for(let M=0,y=T.length;M<y;M+=3){let v=T[M+0],w=T[M+1],x=T[M+2];d.push(v,w,w,x,x,v)}}else{let T=m.array;_=m.version;for(let M=0,y=T.length/3-1;M<y;M+=3){let v=M+0,w=M+1,x=M+2;d.push(v,w,w,x,x,v)}}let p=new(m.count>=65535?kr:os)(d,1);p.version=_;let g=r.get(h);g&&t.remove(g),r.set(h,p)}function u(h){let d=r.get(h);if(d){let f=h.index;f!==null&&d.version<f.version&&l(h)}else l(h);return r.get(h)}return{get:o,update:c,getWireframeAttribute:u}}function Ob(i,t,e){let n;function s(h){n=h}let r,a;function o(h){r=h.type,a=h.bytesPerElement}function c(h,d){i.drawElements(n,d,r,h*a),e.update(d,n,1)}function l(h,d,f){f!==0&&(i.drawElementsInstanced(n,d,r,h*a,f),e.update(d,n,f))}function u(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,h,0,f);let _=0;for(let p=0;p<f;p++)_+=d[p];e.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function Bb(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:Kt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function zb(i,t,e){let n=new WeakMap,s=new ve;function r(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0,d=n.get(o);if(d===void 0||d.count!==h){let S=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",S)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],g=o.morphAttributes.normal||[],T=o.morphAttributes.color||[],M=0;f===!0&&(M=1),m===!0&&(M=2),_===!0&&(M=3);let y=o.attributes.position.count*M,v=1;y>t.maxTextureSize&&(v=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*v*4*h),x=new Nr(w,y,v,h);x.type=Sn,x.needsUpdate=!0;let b=M*4;for(let A=0;A<h;A++){let E=p[A],P=g[A],F=T[A],N=y*v*4*A;for(let I=0;I<E.count;I++){let C=I*b;f===!0&&(s.fromBufferAttribute(E,I),w[N+C+0]=s.x,w[N+C+1]=s.y,w[N+C+2]=s.z,w[N+C+3]=0),m===!0&&(s.fromBufferAttribute(P,I),w[N+C+4]=s.x,w[N+C+5]=s.y,w[N+C+6]=s.z,w[N+C+7]=0),_===!0&&(s.fromBufferAttribute(F,I),w[N+C+8]=s.x,w[N+C+9]=s.y,w[N+C+10]=s.z,w[N+C+11]=F.itemSize===4?s.w:1)}}d={count:h,texture:x,size:new Wt(y,v)},n.set(o,d),o.addEventListener("dispose",S)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let m=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",d.texture,e),c.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function Hb(i,t,e,n,s){let r=new WeakMap;function a(l){let u=s.render.frame,h=l.geometry,d=t.get(l,h);if(r.get(d)!==u&&(t.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==u&&(f.update(),r.set(f,u))}return d}function o(){r=new WeakMap}function c(l){let u=l.target;u.removeEventListener("dispose",c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Gb={[Ll]:"LINEAR_TONE_MAPPING",[Pl]:"REINHARD_TONE_MAPPING",[Fl]:"CINEON_TONE_MAPPING",[na]:"ACES_FILMIC_TONE_MAPPING",[Nl]:"AGX_TONE_MAPPING",[Ul]:"NEUTRAL_TONE_MAPPING",[Dl]:"CUSTOM_TONE_MAPPING"};function Vb(i,t,e,n,s,r){let a=new on(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new Te;l.setAttribute("position",new ke([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new ke([0,2,0,0,2,0],2));let u=new oo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),h=new fe(l,u),d=new zi(-1,1,1,-1,0,1),f=null,m=null,_=!1,p,g=null,T=[],M=!1;this.setSize=function(y,v){a.setSize(y,v),o!==null&&o.setSize(y,v),c!==null&&c.setSize(y,v);for(let w=0;w<T.length;w++){let x=T[w];x.setSize&&x.setSize(y,v)}},this.setEffects=function(y){T=y,M=T.length>0&&T[0].isRenderPass===!0;let v=a.width,w=a.height;T.length>0&&o===null&&(o=new on(v,w,{type:Wn,depthBuffer:!1,stencilBuffer:!1}),c=new on(v,w,{type:Wn,depthBuffer:!1,stencilBuffer:!1}));for(let x=0;x<T.length;x++){let b=T[x];b.setSize&&b.setSize(v,w)}},this.begin=function(y,v){if(_||y.toneMapping===Gn&&T.length===0)return!1;if(g=v,v!==null){let w=v.width,x=v.height;(a.width!==w||a.height!==x)&&this.setSize(w,x)}return M===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Gn,!0},this.hasRenderPass=function(){return M},this.end=function(y,v){y.toneMapping=p,_=!0;let w=a,x=o;for(let b=0;b<T.length;b++){let S=T[b];S.enabled!==!1&&(S.render(y,x,w,v),S.needsSwap!==!1&&(w=x,x=x===o?c:o))}if(f!==y.outputColorSpace||m!==y.toneMapping){f=y.outputColorSpace,m=y.toneMapping,u.defines={},re.getTransfer(f)===be&&(u.defines.SRGB_TRANSFER="");let b=Gb[m];b&&(u.defines[b]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=w.texture,y.setRenderTarget(g),y.render(h,d),g=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var xf=new Fe,sh=new ki(1,1),yf=new Nr,_f=new io,vf=new Hr,Zd=[],Qd=[],tf=new Float32Array(16),ef=new Float32Array(9),nf=new Float32Array(4);function dr(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=Zd[s];if(r===void 0&&(r=new Float32Array(s),Zd[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function We(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function qe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function mc(i,t){let e=Qd[t];e===void 0&&(e=new Int32Array(t),Qd[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Wb(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function qb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2fv(this.addr,t),qe(e,t)}}function Xb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(We(e,t))return;i.uniform3fv(this.addr,t),qe(e,t)}}function jb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4fv(this.addr,t),qe(e,t)}}function Kb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),qe(e,t)}else{if(We(e,n))return;nf.set(n),i.uniformMatrix2fv(this.addr,!1,nf),qe(e,n)}}function Yb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),qe(e,t)}else{if(We(e,n))return;ef.set(n),i.uniformMatrix3fv(this.addr,!1,ef),qe(e,n)}}function Jb(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(We(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),qe(e,t)}else{if(We(e,n))return;tf.set(n),i.uniformMatrix4fv(this.addr,!1,tf),qe(e,n)}}function $b(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Zb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2iv(this.addr,t),qe(e,t)}}function Qb(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3iv(this.addr,t),qe(e,t)}}function tx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4iv(this.addr,t),qe(e,t)}}function ex(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function nx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(We(e,t))return;i.uniform2uiv(this.addr,t),qe(e,t)}}function ix(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(We(e,t))return;i.uniform3uiv(this.addr,t),qe(e,t)}}function sx(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(We(e,t))return;i.uniform4uiv(this.addr,t),qe(e,t)}}function rx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(sh.compareFunction=e.isReversedDepthBuffer()?lc:cc,r=sh):r=xf,e.setTexture2D(t||r,s)}function ax(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||_f,s)}function ox(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||vf,s)}function cx(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||yf,s)}function lx(i){switch(i){case 5126:return Wb;case 35664:return qb;case 35665:return Xb;case 35666:return jb;case 35674:return Kb;case 35675:return Yb;case 35676:return Jb;case 5124:case 35670:return $b;case 35667:case 35671:return Zb;case 35668:case 35672:return Qb;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return nx;case 36295:return ix;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return rx;case 35679:case 36299:case 36307:return ax;case 35680:case 36300:case 36308:case 36293:return ox;case 36289:case 36303:case 36311:case 36292:return cx}}function hx(i,t){i.uniform1fv(this.addr,t)}function ux(i,t){let e=dr(t,this.size,2);i.uniform2fv(this.addr,e)}function dx(i,t){let e=dr(t,this.size,3);i.uniform3fv(this.addr,e)}function fx(i,t){let e=dr(t,this.size,4);i.uniform4fv(this.addr,e)}function px(i,t){let e=dr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mx(i,t){let e=dr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gx(i,t){let e=dr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function bx(i,t){i.uniform1iv(this.addr,t)}function xx(i,t){i.uniform2iv(this.addr,t)}function yx(i,t){i.uniform3iv(this.addr,t)}function _x(i,t){i.uniform4iv(this.addr,t)}function vx(i,t){i.uniform1uiv(this.addr,t)}function Mx(i,t){i.uniform2uiv(this.addr,t)}function Sx(i,t){i.uniform3uiv(this.addr,t)}function wx(i,t){i.uniform4uiv(this.addr,t)}function Ax(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=sh:a=xf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Tx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_f,r[a])}function Ex(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vf,r[a])}function Rx(i,t,e){let n=this.cache,s=t.length,r=mc(e,s);We(n,r)||(i.uniform1iv(this.addr,r),qe(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||yf,r[a])}function Cx(i){switch(i){case 5126:return hx;case 35664:return ux;case 35665:return dx;case 35666:return fx;case 35674:return px;case 35675:return mx;case 35676:return gx;case 5124:case 35670:return bx;case 35667:case 35671:return xx;case 35668:case 35672:return yx;case 35669:case 35673:return _x;case 5125:return vx;case 36294:return Mx;case 36295:return Sx;case 36296:return wx;case 35678:case 36198:case 36298:case 36306:case 35682:return Ax;case 35679:case 36299:case 36307:return Tx;case 35680:case 36300:case 36308:case 36293:return Ex;case 36289:case 36303:case 36311:case 36292:return Rx}}var rh=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=lx(e.type)}},ah=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cx(e.type)}},oh=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},nh=/(\w+)(\])?(\[|\.)?/g;function sf(i,t){i.seq.push(t),i.map[t.id]=t}function Ix(i,t,e){let n=i.name,s=n.length;for(nh.lastIndex=0;;){let r=nh.exec(n),a=nh.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){sf(e,l===void 0?new rh(o,i,t):new ah(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new oh(o),sf(e,h)),e=h}}}var hr=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),c=t.getUniformLocation(e,o.name);Ix(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function rf(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var Lx=37297,Px=0;function Fx(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var af=new Zt;function Dx(i){re._getMatrix(af,re.workingColorSpace,i);let t=`mat3( ${af.elements.map(e=>e.toFixed(4))} )`;switch(re.getTransfer(i)){case Fr:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Ut("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function of(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Fx(i.getShaderSource(t),o)}else return r}function Nx(i,t){let e=Dx(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Ux={[Ll]:"Linear",[Pl]:"Reinhard",[Fl]:"Cineon",[na]:"ACESFilmic",[Nl]:"AgX",[Ul]:"Neutral",[Dl]:"Custom"};function kx(i,t){let e=Ux[t];return e===void 0?(Ut("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var uc=new q;function Ox(){re.getLuminanceCoefficients(uc);let i=uc.x.toFixed(4),t=uc.y.toFixed(4),e=uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bx(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(pa).join(`
`)}function zx(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Hx(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function pa(i){return i!==""}function cf(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Gx=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(i){return i.replace(Gx,Wx)}var Vx=new Map;function Wx(i,t){let e=ie[t];if(e===void 0){let n=Vx.get(t);if(n!==void 0)e=ie[n],Ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return ch(e)}var qx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(i){return i.replace(qx,Xx)}function Xx(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function uf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var jx={[ea]:"SHADOWMAP_TYPE_PCF",[nr]:"SHADOWMAP_TYPE_VSM"};function Kx(i){return jx[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Yx={[Vi]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[ia]:"ENVMAP_TYPE_CUBE_UV"};function Jx(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Yx[i.envMapMode]||"ENVMAP_TYPE_CUBE"}var $x={[ms]:"ENVMAP_MODE_REFRACTION"};function Zx(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":$x[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Qx={[vo]:"ENVMAP_BLENDING_MULTIPLY",[Ed]:"ENVMAP_BLENDING_MIX",[Rd]:"ENVMAP_BLENDING_ADD"};function ty(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Qx[i.combine]||"ENVMAP_BLENDING_NONE"}function ey(i){let t=i.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ny(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,c=Kx(e),l=Jx(e),u=Zx(e),h=ty(e),d=ey(e),f=Bx(e),m=zx(r),_=s.createProgram(),p,g,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pa).join(`
`),p.length>0&&(p+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(pa).join(`
`),g.length>0&&(g+=`
`)):(p=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(pa).join(`
`),g=[uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Gn?"#define TONE_MAPPING":"",e.toneMapping!==Gn?ie.tonemapping_pars_fragment:"",e.toneMapping!==Gn?kx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Nx("linearToOutputTexel",e.outputColorSpace),Ox(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(pa).join(`
`)),a=ch(a),a=cf(a,e),a=lf(a,e),o=ch(o),o=cf(o,e),o=lf(o,e),a=hf(a),o=hf(o),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,g=["#define varying in",e.glslVersion===Xl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Xl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let M=T+p+a,y=T+g+o,v=rf(s,s.VERTEX_SHADER,M),w=rf(s,s.FRAGMENT_SHADER,y);s.attachShader(_,v),s.attachShader(_,w),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function x(E){if(i.debug.checkShaderErrors){let P=s.getProgramInfoLog(_)||"",F=s.getShaderInfoLog(v)||"",N=s.getShaderInfoLog(w)||"",I=P.trim(),C=F.trim(),L=N.trim(),k=!0,U=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(k=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,v,w);else{let B=of(s,v,"vertex"),z=of(s,w,"fragment");Kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+I+`
`+B+`
`+z)}else I!==""?Ut("WebGLProgram: Program Info Log:",I):(C===""||L==="")&&(U=!1);U&&(E.diagnostics={runnable:k,programLog:I,vertexShader:{log:C,prefix:p},fragmentShader:{log:L,prefix:g}})}s.deleteShader(v),s.deleteShader(w),b=new hr(s,_),S=Hx(s,_)}let b;this.getUniforms=function(){return b===void 0&&x(this),b};let S;this.getAttributes=function(){return S===void 0&&x(this),S};let A=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return A===!1&&(A=s.getProgramParameter(_,Lx)),A},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Px++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=v,this.fragmentShader=w,this}var iy=0,lh=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new hh(t),e.set(t,n)),n}},hh=class{constructor(t){this.id=iy++,this.code=t,this.usedTimes=0}};function sy(i){return i===qi||i===ca||i===la}function ry(i,t,e,n,s,r){let a=new Ur,o=new lh,c=new Set,l=[],u=new Map,h=n.logarithmicDepthBuffer,d=n.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,S,A,E,P,F){let N=E.fog,I=P.geometry,C=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?E.environment:null,L=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap,k=t.get(b.envMap||C,L),U=k&&k.mapping===ia?k.image.height:null,B=f[b.type];b.precision!==null&&(d=n.getMaxPrecision(b.precision),d!==b.precision&&Ut("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let z=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Z=z!==void 0?z.length:0,tt=0;I.morphAttributes.position!==void 0&&(tt=1),I.morphAttributes.normal!==void 0&&(tt=2),I.morphAttributes.color!==void 0&&(tt=3);let at,nt,ut,X;if(B){let Ee=ii[B];at=Ee.vertexShader,nt=Ee.fragmentShader}else{at=b.vertexShader,nt=b.fragmentShader;let Ee=o.getVertexShaderStage(b),me=o.getFragmentShaderStage(b);o.update(b,Ee,me),ut=Ee.id,X=me.id}let J=i.getRenderTarget(),ct=i.state.buffers.depth.getReversed(),_t=P.isInstancedMesh===!0,ht=P.isBatchedMesh===!0,It=!!b.map,Yt=!!b.matcap,Et=!!k,Ft=!!b.aoMap,Qt=!!b.lightMap,$t=!!b.bumpMap&&b.wireframe===!1,lt=!!b.normalMap,V=!!b.displacementMap,dt=!!b.emissiveMap,pt=!!b.metalnessMap,Gt=!!b.roughnessMap,H=b.anisotropy>0,xe=b.clearcoat>0,ee=b.dispersion>0,O=b.retroreflectivity>0,R=b.iridescence>0,j=b.sheen>0,$=b.transmission>0,et=H&&!!b.anisotropyMap,ft=xe&&!!b.clearcoatMap,mt=xe&&!!b.clearcoatNormalMap,it=xe&&!!b.clearcoatRoughnessMap,rt=R&&!!b.iridescenceMap,gt=R&&!!b.iridescenceThicknessMap,Bt=j&&!!b.sheenColorMap,vt=j&&!!b.sheenRoughnessMap,bt=!!b.specularMap,zt=!!b.specularColorMap,qt=!!b.specularIntensityMap,te=$&&!!b.transmissionMap,W=$&&!!b.thicknessMap,xt=!!b.gradientMap,st=!!b.alphaMap,yt=b.alphaTest>0,Tt=!!b.alphaHash,ot=!!b.extensions,Vt=Gn;b.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Vt=i.toneMapping);let Dt={shaderID:B,shaderType:b.type,shaderName:b.name,vertexShader:at,fragmentShader:nt,defines:b.defines,customVertexShaderID:ut,customFragmentShaderID:X,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:ht,batchingColor:ht&&P._colorsTexture!==null,instancing:_t,instancingColor:_t&&P.instanceColor!==null,instancingMorph:_t&&P.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:re.workingColorSpace,alphaToCoverage:!!b.alphaToCoverage,map:It,matcap:Yt,envMap:Et,envMapMode:Et&&k.mapping,envMapCubeUVHeight:U,aoMap:Ft,lightMap:Qt,bumpMap:$t,normalMap:lt,displacementMap:V,emissiveMap:dt,normalMapObjectSpace:lt&&b.normalMapType===Pd,normalMapTangentSpace:lt&&b.normalMapType===ua,packedNormalMap:lt&&b.normalMapType===ua&&sy(b.normalMap.format),metalnessMap:pt,roughnessMap:Gt,anisotropy:H,anisotropyMap:et,clearcoat:xe,clearcoatMap:ft,clearcoatNormalMap:mt,clearcoatRoughnessMap:it,dispersion:ee,retroreflection:O,iridescence:R,iridescenceMap:rt,iridescenceThicknessMap:gt,sheen:j,sheenColorMap:Bt,sheenRoughnessMap:vt,specularMap:bt,specularColorMap:zt,specularIntensityMap:qt,transmission:$,transmissionMap:te,thicknessMap:W,gradientMap:xt,opaque:b.transparent===!1&&b.blending===ir&&b.alphaToCoverage===!1,alphaMap:st,alphaTest:yt,alphaHash:Tt,combine:b.combine,mapUv:It&&m(b.map.channel),aoMapUv:Ft&&m(b.aoMap.channel),lightMapUv:Qt&&m(b.lightMap.channel),bumpMapUv:$t&&m(b.bumpMap.channel),normalMapUv:lt&&m(b.normalMap.channel),displacementMapUv:V&&m(b.displacementMap.channel),emissiveMapUv:dt&&m(b.emissiveMap.channel),metalnessMapUv:pt&&m(b.metalnessMap.channel),roughnessMapUv:Gt&&m(b.roughnessMap.channel),anisotropyMapUv:et&&m(b.anisotropyMap.channel),clearcoatMapUv:ft&&m(b.clearcoatMap.channel),clearcoatNormalMapUv:mt&&m(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:it&&m(b.clearcoatRoughnessMap.channel),iridescenceMapUv:rt&&m(b.iridescenceMap.channel),iridescenceThicknessMapUv:gt&&m(b.iridescenceThicknessMap.channel),sheenColorMapUv:Bt&&m(b.sheenColorMap.channel),sheenRoughnessMapUv:vt&&m(b.sheenRoughnessMap.channel),specularMapUv:bt&&m(b.specularMap.channel),specularColorMapUv:zt&&m(b.specularColorMap.channel),specularIntensityMapUv:qt&&m(b.specularIntensityMap.channel),transmissionMapUv:te&&m(b.transmissionMap.channel),thicknessMapUv:W&&m(b.thicknessMap.channel),alphaMapUv:st&&m(b.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(lt||H),vertexNormals:!!I.attributes.normal,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:P.isPoints===!0&&!!I.attributes.uv&&(It||st),fog:!!N,useFog:b.fog===!0,fogExp2:!!N&&N.isFogExp2,flatShading:b.wireframe===!1&&(b.flatShading===!0||I.attributes.normal===void 0&&lt===!1&&(b.isMeshLambertMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isMeshPhysicalMaterial)),sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:ct,skinning:P.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Z,morphTextureStride:tt,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:F.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&A.length>0,shadowMapType:i.shadowMap.type,toneMapping:Vt,decodeVideoTexture:It&&b.map.isVideoTexture===!0&&re.getTransfer(b.map.colorSpace)===be,decodeVideoTextureEmissive:dt&&b.emissiveMap.isVideoTexture===!0&&re.getTransfer(b.emissiveMap.colorSpace)===be,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Pe,flipSided:b.side===Ke,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:ot&&b.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&b.extensions.multiDraw===!0||ht)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Dt.vertexUv1s=c.has(1),Dt.vertexUv2s=c.has(2),Dt.vertexUv3s=c.has(3),c.clear(),Dt}function p(b){let S=[];if(b.shaderID?S.push(b.shaderID):(S.push(b.customVertexShaderID),S.push(b.customFragmentShaderID)),b.defines!==void 0)for(let A in b.defines)S.push(A),S.push(b.defines[A]);return b.isRawShaderMaterial===!1&&(g(S,b),T(S,b),S.push(i.outputColorSpace)),S.push(b.customProgramCacheKey),S.join()}function g(b,S){b.push(S.precision),b.push(S.outputColorSpace),b.push(S.envMapMode),b.push(S.envMapCubeUVHeight),b.push(S.mapUv),b.push(S.alphaMapUv),b.push(S.lightMapUv),b.push(S.aoMapUv),b.push(S.bumpMapUv),b.push(S.normalMapUv),b.push(S.displacementMapUv),b.push(S.emissiveMapUv),b.push(S.metalnessMapUv),b.push(S.roughnessMapUv),b.push(S.anisotropyMapUv),b.push(S.clearcoatMapUv),b.push(S.clearcoatNormalMapUv),b.push(S.clearcoatRoughnessMapUv),b.push(S.iridescenceMapUv),b.push(S.iridescenceThicknessMapUv),b.push(S.sheenColorMapUv),b.push(S.sheenRoughnessMapUv),b.push(S.specularMapUv),b.push(S.specularColorMapUv),b.push(S.specularIntensityMapUv),b.push(S.transmissionMapUv),b.push(S.thicknessMapUv),b.push(S.combine),b.push(S.fogExp2),b.push(S.sizeAttenuation),b.push(S.morphTargetsCount),b.push(S.morphAttributeCount),b.push(S.numSunLights),b.push(S.numDirLights),b.push(S.numPointLights),b.push(S.numSpotLights),b.push(S.numSpotLightMaps),b.push(S.numHemiLights),b.push(S.numRectAreaLights),b.push(S.numSunLightShadows),b.push(S.numDirLightShadows),b.push(S.numPointLightShadows),b.push(S.numSpotLightShadows),b.push(S.numSpotLightShadowsWithMaps),b.push(S.numLightProbes),b.push(S.shadowMapType),b.push(S.toneMapping),b.push(S.numClippingPlanes),b.push(S.numClipIntersection),b.push(S.depthPacking)}function T(b,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),b.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),b.push(a.mask)}function M(b){let S=f[b.type],A;if(S){let E=ii[S];A=qd.clone(E.uniforms)}else A=b.uniforms;return A}function y(b,S){let A=u.get(S);return A!==void 0?++A.usedTimes:(A=new ny(i,S,b,s),l.push(A),u.set(S,A)),A}function v(b){if(--b.usedTimes===0){let S=l.indexOf(b);l[S]=l[l.length-1],l.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){o.remove(b)}function x(){o.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:y,releaseProgram:v,releaseShaderCache:w,programs:l,dispose:x}}function ay(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,c){i.get(a)[o]=c}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function oy(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function df(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ff(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,m,_,p,g){let T=i[t];return T===void 0?(T={id:d.id,object:d,geometry:f,material:m,materialVariant:a(d),groupOrder:_,renderOrder:d.renderOrder,z:p,group:g},i[t]=T):(T.id=d.id,T.object=d,T.geometry=f,T.material=m,T.materialVariant=a(d),T.groupOrder=_,T.renderOrder=d.renderOrder,T.z=p,T.group=g),t++,T}function c(d,f,m,_,p,g,T){T.reversedDepth===!0&&(p=-p);let M=o(d,f,m,_,p,g);m.transmission>0?n.push(M):m.transparent===!0?s.push(M):e.push(M)}function l(d,f,m,_,p,g){let T=o(d,f,m,_,p,g);m.transmission>0?n.unshift(T):m.transparent===!0?s.unshift(T):e.unshift(T)}function u(d,f){e.length>1&&e.sort(d||oy),n.length>1&&n.sort(f||df),s.length>1&&s.sort(f||df)}function h(){for(let d=t,f=i.length;d<f;d++){let m=i[d];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:h,sort:u}}function cy(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new ff,i.set(n,[a])):s>=r.length?(a=new ff,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function ly(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new q,color:new Mt};break;case"SpotLight":e={position:new q,direction:new q,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new q,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new q,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":e={color:new Mt,position:new q,halfWidth:new q,halfHeight:new q};break}return i[t.id]=e,e}}}function hy(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var uy=0;function dy(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function fy(i){let t=new ly,e=hy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new q);let s=new q,r=new jt,a=new jt;function o(l){let u=0,h=0,d=0;for(let P=0;P<9;P++)n.probe[P].set(0,0,0);let f=0,m=0,_=0,p=0,g=0,T=0,M=0,y=0,v=0,w=0,x=0,b=0,S=0,A=0;l.sort(dy);for(let P=0,F=l.length;P<F;P++){let N=l[P],I=N.color,C=N.intensity,L=N.distance,k=null;if(N.shadow&&N.shadow.map&&(N.shadow.map.texture.format===qi?k=N.shadow.map.texture:k=N.shadow.map.depthTexture||N.shadow.map.texture),N.isAmbientLight)u+=I.r*C,h+=I.g*C,d+=I.b*C;else if(N.isLightProbe){for(let U=0;U<9;U++)n.probe[U].addScaledVector(N.sh.coefficients[U],C);A++}else if(N.isSunLight){let U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let B=N.shadow,z=e.get(N);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize.copy(B.mapSize).multiply(B.getFrameExtents()),n.sunShadow[m]=z,n.sunShadowMap[m]=k;let Z=B.getViewportCount();for(let tt=0;tt<Z;tt++)n.sunShadowMatrix[_+tt]=B.getMatrix(tt),n.sunShadowCascade[_+tt]=B._cascadeData[tt];_+=Z,m++}n.sun[f]=U,f++}else if(N.isDirectionalLight){let U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),N.castShadow){let B=N.shadow,z=e.get(N);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=k,n.directionalShadowMatrix[p]=N.shadow.matrix,v++}n.directional[p]=U,p++}else if(N.isSpotLight){let U=t.get(N);U.position.setFromMatrixPosition(N.matrixWorld),U.color.copy(I).multiplyScalar(C),U.distance=L,U.coneCos=Math.cos(N.angle),U.penumbraCos=Math.cos(N.angle*(1-N.penumbra)),U.decay=N.decay,n.spot[T]=U;let B=N.shadow;if(N.map&&(n.spotLightMap[b]=N.map,b++,B.updateMatrices(N),N.castShadow&&S++),n.spotLightMatrix[T]=B.matrix,N.castShadow){let z=e.get(N);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,n.spotShadow[T]=z,n.spotShadowMap[T]=k,x++}T++}else if(N.isRectAreaLight){let U=t.get(N);U.color.copy(I).multiplyScalar(C),U.halfWidth.set(N.width*.5,0,0),U.halfHeight.set(0,N.height*.5,0),n.rectArea[M]=U,M++}else if(N.isPointLight){let U=t.get(N);if(U.color.copy(N.color).multiplyScalar(N.intensity),U.distance=N.distance,U.decay=N.decay,N.castShadow){let B=N.shadow,z=e.get(N);z.shadowIntensity=B.intensity,z.shadowBias=B.bias,z.shadowNormalBias=B.normalBias,z.shadowRadius=B.radius,z.shadowMapSize=B.mapSize,z.shadowCameraNear=B.camera.near,z.shadowCameraFar=B.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=k,n.pointShadowMatrix[g]=N.shadow.matrix,w++}n.point[g]=U,g++}else if(N.isHemisphereLight){let U=t.get(N);U.skyColor.copy(N.color).multiplyScalar(C),U.groundColor.copy(N.groundColor).multiplyScalar(C),n.hemi[y]=U,y++}}M>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=St.LTC_FLOAT_1,n.rectAreaLTC2=St.LTC_FLOAT_2):(n.rectAreaLTC1=St.LTC_HALF_1,n.rectAreaLTC2=St.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;let E=n.hash;(E.sunLength!==f||E.directionalLength!==p||E.pointLength!==g||E.spotLength!==T||E.rectAreaLength!==M||E.hemiLength!==y||E.numSunShadows!==m||E.numDirectionalShadows!==v||E.numPointShadows!==w||E.numSpotShadows!==x||E.numSpotMaps!==b||E.numLightProbes!==A)&&(n.sun.length=f,n.directional.length=p,n.spot.length=T,n.rectArea.length=M,n.point.length=g,n.hemi.length=y,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.directionalShadowMatrix.length=v,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-S,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=A,E.sunLength=f,E.directionalLength=p,E.pointLength=g,E.spotLength=T,E.rectAreaLength=M,E.hemiLength=y,E.numSunShadows=m,E.numDirectionalShadows=v,E.numPointShadows=w,E.numSpotShadows=x,E.numSpotMaps=b,E.numLightProbes=A,n.version=uy++)}function c(l,u){let h=0,d=0,f=0,m=0,_=0,p=0,g=u.matrixWorldInverse;for(let T=0,M=l.length;T<M;T++){let y=l[T];if(y.isSunLight){let v=n.sun[h];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),h++}else if(y.isDirectionalLight){let v=n.directional[d];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(y.isSpotLight){let v=n.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),m++}else if(y.isRectAreaLight){let v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(g),f++}else if(y.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(g),p++}}}return{setup:o,setupView:c,state:n}}function pf(i){let t=new fy(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){e.push(d)}function o(d){n.push(d)}function c(d){s.push(d)}function l(){t.setup(e)}function u(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function py(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new pf(i),t.set(s,[o])):r>=a.length?(o=new pf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var my=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,by=[new q(1,0,0),new q(-1,0,0),new q(0,1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1)],xy=[new q(0,-1,0),new q(0,-1,0),new q(0,0,1),new q(0,0,-1),new q(0,-1,0),new q(0,-1,0)],mf=new jt,fa=new q,ih=new q;function yy(i,t,e){let n=new $s,s=new Wt,r=new Wt,a=new ve,o=new co,c=new lo,l={},u=e.maxTextureSize,h={[Cn]:Ke,[Ke]:Cn,[Pe]:Pe},d=new Mn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:my,fragmentShader:gy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new Te;m.setAttribute("position",new Xt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new fe(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ea;let g=this.type;this.render=function(w,x,b){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===_o&&(Ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ea);let S=i.getRenderTarget(),A=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),P=i.state;P.setBlending(ei),P.buffers.depth.getReversed()===!0?P.buffers.color.setClear(0,0,0,0):P.buffers.color.setClear(1,1,1,1),P.buffers.depth.setTest(!0),P.setScissorTest(!1);let F=g!==this.type;F&&x.traverse(function(N){N.material&&(Array.isArray(N.material)?N.material.forEach(I=>I.needsUpdate=!0):N.material.needsUpdate=!0)});for(let N=0,I=w.length;N<I;N++){let C=w[N],L=C.shadow;if(L===void 0){Ut("WebGLShadowMap:",C,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;s.copy(L.mapSize);let k=L.getFrameExtents();s.multiply(k),r.copy(L.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/k.x),s.x=r.x*k.x,L.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/k.y),s.y=r.y*k.y,L.mapSize.y=r.y));let U=i.state.buffers.depth.getReversed();if(L.camera._reversedDepth=U,L.map===null||F===!0){if(L.map!==null&&(L.map.depthTexture!==null&&(L.map.depthTexture.dispose(),L.map.depthTexture=null),L.map.dispose()),this.type===nr){if(C.isPointLight){Ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}L.map=new on(s.x,s.y,{format:qi,type:Wn,minFilter:Le,magFilter:Le,generateMipmaps:!1}),L.map.texture.name=C.name+".shadowMap",L.map.depthTexture=new ki(s.x,s.y,Sn),L.map.depthTexture.name=C.name+".shadowMapDepth",L.map.depthTexture.format=$n,L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Oe,L.map.depthTexture.magFilter=Oe}else C.isPointLight?(L.map=new dc(s.x),L.map.depthTexture=new ao(s.x,Vn)):(L.map=new on(s.x,s.y),L.map.depthTexture=new ki(s.x,s.y,Vn)),L.map.depthTexture.name=C.name+".shadowMap",L.map.depthTexture.format=$n,this.type===ea?(L.map.depthTexture.compareFunction=U?lc:cc,L.map.depthTexture.minFilter=Le,L.map.depthTexture.magFilter=Le):(L.map.depthTexture.compareFunction=null,L.map.depthTexture.minFilter=Oe,L.map.depthTexture.magFilter=Oe);L.camera.updateProjectionMatrix()}L.map.isWebGLCubeRenderTarget!==!0&&(L.map.width!==s.x||L.map.height!==s.y)&&L.map.setSize(s.x,s.y);let B=L.map.isWebGLCubeRenderTarget?6:L.getViewportCount();C.isPointLight!==!0&&L.updateMatrices(C,b);for(let z=0;z<B;z++){let Z=L.getCamera(z);if(C.isPointLight){let tt=L.camera,at=L.matrix,nt=C.distance||tt.far;nt!==tt.far&&(tt.far=nt,tt.updateProjectionMatrix()),fa.setFromMatrixPosition(C.matrixWorld),tt.position.copy(fa),ih.copy(tt.position),ih.add(by[z]),tt.up.copy(xy[z]),tt.lookAt(ih),tt.updateMatrixWorld(),at.makeTranslation(-fa.x,-fa.y,-fa.z),mf.multiplyMatrices(tt.projectionMatrix,tt.matrixWorldInverse),L._frustum.setFromProjectionMatrix(mf,tt.coordinateSystem,tt.reversedDepth)}if(L.map.isWebGLCubeRenderTarget)i.setRenderTarget(L.map,z),i.clear();else{z===0&&(i.setRenderTarget(L.map),i.clear());let tt=L.getViewport(z);a.set(r.x*tt.x,r.y*tt.y,r.x*tt.z,r.y*tt.w),P.viewport(a)}n=L.getFrustum(z),y(x,b,Z,C,this.type)}L.isPointLightShadow!==!0&&this.type===nr&&T(L,b),L.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(S,A,E)};function T(w,x){let b=t.update(_);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new on(s.x,s.y,{format:qi,type:Wn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(x,null,b,d,_,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(x,null,b,f,_,null)}function M(w,x,b,S){let A=null,E=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(E!==void 0)A=E;else if(A=b.isPointLight===!0?c:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let P=A.uuid,F=x.uuid,N=l[P];N===void 0&&(N={},l[P]=N);let I=N[F];I===void 0&&(I=A.clone(),N[F]=I,x.addEventListener("dispose",v)),A=I}if(A.visible=x.visible,A.wireframe=x.wireframe,S===nr?A.side=x.shadowSide!==null?x.shadowSide:x.side:A.side=x.shadowSide!==null?x.shadowSide:h[x.side],A.alphaMap=x.alphaMap,A.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,A.map=x.map,A.clipShadows=x.clipShadows,A.clippingPlanes=x.clippingPlanes,A.clipIntersection=x.clipIntersection,A.displacementMap=x.displacementMap,A.displacementScale=x.displacementScale,A.displacementBias=x.displacementBias,A.wireframeLinewidth=x.wireframeLinewidth,A.linewidth=x.linewidth,b.isPointLight===!0&&A.isMeshDistanceMaterial===!0){let P=i.properties.get(A);P.light=b}return A}function y(w,x,b,S,A){if(w.visible===!1)return;if(w.layers.test(x.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&A===nr)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let F=t.update(w),N=w.material;if(Array.isArray(N)){let I=F.groups;for(let C=0,L=I.length;C<L;C++){let k=I[C],U=N[k.materialIndex];if(U&&U.visible){let B=M(w,U,S,A);w.onBeforeShadow(i,w,x,b,F,B,k),i.renderBufferDirect(b,null,F,B,w,k),w.onAfterShadow(i,w,x,b,F,B,k)}}}else if(N.visible){let I=M(w,N,S,A);w.onBeforeShadow(i,w,x,b,F,I,null),i.renderBufferDirect(b,null,F,I,w,null),w.onAfterShadow(i,w,x,b,F,I,null)}}let P=w.children;for(let F=0,N=P.length;F<N;F++)y(P[F],x,b,S,A)}function v(w){w.target.removeEventListener("dispose",v);for(let b in l){let S=l[b],A=w.target.uuid;A in S&&(S[A].dispose(),delete S[A])}}}function _y(i,t){function e(){let W=!1,xt=new ve,st=null,yt=new ve(0,0,0,0);return{setMask:function(Tt){st!==Tt&&!W&&(i.colorMask(Tt,Tt,Tt,Tt),st=Tt)},setLocked:function(Tt){W=Tt},setClear:function(Tt,ot,Vt,Dt,Ee){Ee===!0&&(Tt*=Dt,ot*=Dt,Vt*=Dt),xt.set(Tt,ot,Vt,Dt),yt.equals(xt)===!1&&(i.clearColor(Tt,ot,Vt,Dt),yt.copy(xt))},reset:function(){W=!1,st=null,yt.set(-1,0,0,0)}}}function n(){let W=!1,xt=!1,st=null,yt=null,Tt=null;return{setReversed:function(ot){if(xt!==ot){let Vt=t.get("EXT_clip_control");ot?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT),xt=ot;let Dt=Tt;Tt=null,this.setClear(Dt)}},getReversed:function(){return xt},setTest:function(ot){ot?J(i.DEPTH_TEST):ct(i.DEPTH_TEST)},setMask:function(ot){st!==ot&&!W&&(i.depthMask(ot),st=ot)},setFunc:function(ot){if(xt&&(ot=Vd[ot]),yt!==ot){switch(ot){case Ka:i.depthFunc(i.NEVER);break;case Ya:i.depthFunc(i.ALWAYS);break;case Ja:i.depthFunc(i.LESS);break;case zs:i.depthFunc(i.LEQUAL);break;case $a:i.depthFunc(i.EQUAL);break;case Za:i.depthFunc(i.GEQUAL);break;case Qa:i.depthFunc(i.GREATER);break;case to:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}yt=ot}},setLocked:function(ot){W=ot},setClear:function(ot){Tt!==ot&&(Tt=ot,xt&&(ot=1-ot),i.clearDepth(ot))},reset:function(){W=!1,st=null,yt=null,Tt=null,xt=!1}}}function s(){let W=!1,xt=null,st=null,yt=null,Tt=null,ot=null,Vt=null,Dt=null,Ee=null;return{setTest:function(me){W||(me?J(i.STENCIL_TEST):ct(i.STENCIL_TEST))},setMask:function(me){xt!==me&&!W&&(i.stencilMask(me),xt=me)},setFunc:function(me,Fn,jn){(st!==me||yt!==Fn||Tt!==jn)&&(i.stencilFunc(me,Fn,jn),st=me,yt=Fn,Tt=jn)},setOp:function(me,Fn,jn){(ot!==me||Vt!==Fn||Dt!==jn)&&(i.stencilOp(me,Fn,jn),ot=me,Vt=Fn,Dt=jn)},setLocked:function(me){W=me},setClear:function(me){Ee!==me&&(i.clearStencil(me),Ee=me)},reset:function(){W=!1,xt=null,st=null,yt=null,Tt=null,ot=null,Vt=null,Dt=null,Ee=null}}}let r=new e,a=new n,o=new s,c=new WeakMap,l=new WeakMap,u={},h={},d={},f=new WeakMap,m=[],_=null,p=!1,g=null,T=null,M=null,y=null,v=null,w=null,x=null,b=new Mt(0,0,0),S=0,A=!1,E=null,P=null,F=null,N=null,I=null,C=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),L=!1,k=0,U=i.getParameter(i.VERSION);U.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(U)[1]),L=k>=1):U.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(U)[1]),L=k>=2);let B=null,z={},Z=i.getParameter(i.SCISSOR_BOX),tt=i.getParameter(i.VIEWPORT),at=new ve().fromArray(Z),nt=new ve().fromArray(tt);function ut(W,xt,st,yt){let Tt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(W,ot),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Vt=0;Vt<st;Vt++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(xt,0,i.RGBA,1,1,yt,0,i.RGBA,i.UNSIGNED_BYTE,Tt):i.texImage2D(xt+Vt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Tt);return ot}let X={};X[i.TEXTURE_2D]=ut(i.TEXTURE_2D,i.TEXTURE_2D,1),X[i.TEXTURE_CUBE_MAP]=ut(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),X[i.TEXTURE_2D_ARRAY]=ut(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),X[i.TEXTURE_3D]=ut(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),J(i.DEPTH_TEST),a.setFunc(zs),$t(!1),lt(Al),J(i.CULL_FACE),Ft(ei);function J(W){u[W]!==!0&&(i.enable(W),u[W]=!0)}function ct(W){u[W]!==!1&&(i.disable(W),u[W]=!1)}function _t(W,xt){return d[W]!==xt?(i.bindFramebuffer(W,xt),d[W]=xt,W===i.DRAW_FRAMEBUFFER&&(d[i.FRAMEBUFFER]=xt),W===i.FRAMEBUFFER&&(d[i.DRAW_FRAMEBUFFER]=xt),!0):!1}function ht(W,xt){let st=m,yt=!1;if(W){st=f.get(xt),st===void 0&&(st=[],f.set(xt,st));let Tt=W.textures;if(st.length!==Tt.length||st[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Vt=Tt.length;ot<Vt;ot++)st[ot]=i.COLOR_ATTACHMENT0+ot;st.length=Tt.length,yt=!0}}else st[0]!==i.BACK&&(st[0]=i.BACK,yt=!0);yt&&i.drawBuffers(st)}function It(W){return _!==W?(i.useProgram(W),_=W,!0):!1}let Yt={[ps]:i.FUNC_ADD,[hd]:i.FUNC_SUBTRACT,[ud]:i.FUNC_REVERSE_SUBTRACT};Yt[dd]=i.MIN,Yt[fd]=i.MAX;let Et={[pd]:i.ZERO,[md]:i.ONE,[gd]:i.SRC_COLOR,[Cl]:i.SRC_ALPHA,[Md]:i.SRC_ALPHA_SATURATE,[_d]:i.DST_COLOR,[xd]:i.DST_ALPHA,[bd]:i.ONE_MINUS_SRC_COLOR,[Il]:i.ONE_MINUS_SRC_ALPHA,[vd]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[Sd]:i.CONSTANT_COLOR,[wd]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Td]:i.ONE_MINUS_CONSTANT_ALPHA};function Ft(W,xt,st,yt,Tt,ot,Vt,Dt,Ee,me){if(W===ei){p===!0&&(ct(i.BLEND),p=!1);return}if(p===!1&&(J(i.BLEND),p=!0),W!==ld){if(W!==g||me!==A){if((T!==ps||v!==ps)&&(i.blendEquation(i.FUNC_ADD),T=ps,v=ps),me)switch(W){case ir:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tl:i.blendFunc(i.ONE,i.ONE);break;case El:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Kt("WebGLState: Invalid blending: ",W);break}else switch(W){case ir:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Tl:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case El:Kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rl:Kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Kt("WebGLState: Invalid blending: ",W);break}M=null,y=null,w=null,x=null,b.set(0,0,0),S=0,g=W,A=me}return}Tt=Tt||xt,ot=ot||st,Vt=Vt||yt,(xt!==T||Tt!==v)&&(i.blendEquationSeparate(Yt[xt],Yt[Tt]),T=xt,v=Tt),(st!==M||yt!==y||ot!==w||Vt!==x)&&(i.blendFuncSeparate(Et[st],Et[yt],Et[ot],Et[Vt]),M=st,y=yt,w=ot,x=Vt),(Dt.equals(b)===!1||Ee!==S)&&(i.blendColor(Dt.r,Dt.g,Dt.b,Ee),b.copy(Dt),S=Ee),g=W,A=!1}function Qt(W,xt){W.side===Pe?ct(i.CULL_FACE):J(i.CULL_FACE);let st=W.side===Ke;xt&&(st=!st),$t(st),W.blending===ir&&W.transparent===!1?Ft(ei):Ft(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),a.setFunc(W.depthFunc),a.setTest(W.depthTest),a.setMask(W.depthWrite),r.setMask(W.colorWrite);let yt=W.stencilWrite;o.setTest(yt),yt&&(o.setMask(W.stencilWriteMask),o.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),o.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),dt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ct(i.SAMPLE_ALPHA_TO_COVERAGE)}function $t(W){E!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),E=W)}function lt(W){W!==od?(J(i.CULL_FACE),W!==P&&(W===Al?i.cullFace(i.BACK):W===cd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ct(i.CULL_FACE),P=W}function V(W){W!==F&&(L&&i.lineWidth(W),F=W)}function dt(W,xt,st){W?(J(i.POLYGON_OFFSET_FILL),(N!==xt||I!==st)&&(N=xt,I=st,a.getReversed()&&(xt=-xt),i.polygonOffset(xt,st))):ct(i.POLYGON_OFFSET_FILL)}function pt(W){W?J(i.SCISSOR_TEST):ct(i.SCISSOR_TEST)}function Gt(W){W===void 0&&(W=i.TEXTURE0+C-1),B!==W&&(i.activeTexture(W),B=W)}function H(W,xt,st){st===void 0&&(B===null?st=i.TEXTURE0+C-1:st=B);let yt=z[st];yt===void 0&&(yt={type:void 0,texture:void 0},z[st]=yt),(yt.type!==W||yt.texture!==xt)&&(B!==st&&(i.activeTexture(st),B=st),i.bindTexture(W,xt||X[W]),yt.type=W,yt.texture=xt)}function xe(){let W=z[B];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ee(){try{i.compressedTexImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function O(){try{i.compressedTexImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function R(){try{i.texSubImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function j(){try{i.texSubImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function $(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function et(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function ft(){try{i.texStorage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function mt(){try{i.texStorage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function it(){try{i.texImage2D(...arguments)}catch(W){Kt("WebGLState:",W)}}function rt(){try{i.texImage3D(...arguments)}catch(W){Kt("WebGLState:",W)}}function gt(W){return h[W]!==void 0?h[W]:i.getParameter(W)}function Bt(W,xt){h[W]!==xt&&(i.pixelStorei(W,xt),h[W]=xt)}function vt(W){at.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),at.copy(W))}function bt(W){nt.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),nt.copy(W))}function zt(W,xt){let st=l.get(xt);st===void 0&&(st=new WeakMap,l.set(xt,st));let yt=st.get(W);yt===void 0&&(yt=i.getUniformBlockIndex(xt,W.name),st.set(W,yt))}function qt(W,xt){let yt=l.get(xt).get(W);c.get(xt)!==yt&&(i.uniformBlockBinding(xt,yt,W.__bindingPointIndex),c.set(xt,yt))}function te(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),u={},h={},B=null,z={},d={},f=new WeakMap,m=[],_=null,p=!1,g=null,T=null,M=null,y=null,v=null,w=null,x=null,b=new Mt(0,0,0),S=0,A=!1,E=null,P=null,F=null,N=null,I=null,at.set(0,0,i.canvas.width,i.canvas.height),nt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:J,disable:ct,bindFramebuffer:_t,drawBuffers:ht,useProgram:It,setBlending:Ft,setMaterial:Qt,setFlipSided:$t,setCullFace:lt,setLineWidth:V,setPolygonOffset:dt,setScissorTest:pt,activeTexture:Gt,bindTexture:H,unbindTexture:xe,compressedTexImage2D:ee,compressedTexImage3D:O,texImage2D:it,texImage3D:rt,pixelStorei:Bt,getParameter:gt,updateUBOMapping:zt,uniformBlockBinding:qt,texStorage2D:ft,texStorage3D:mt,texSubImage2D:R,texSubImage3D:j,compressedTexSubImage2D:$,compressedTexSubImage3D:et,scissor:vt,viewport:bt,reset:te}}function vy(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Wt,u=new WeakMap,h=new Set,d,f=new WeakMap,m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(O,R){return m?new OffscreenCanvas(O,R):Vs("canvas")}function p(O,R,j){let $=1,et=ee(O);if((et.width>j||et.height>j)&&($=j/Math.max(et.width,et.height)),$<1)if(typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&O instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&O instanceof ImageBitmap||typeof VideoFrame<"u"&&O instanceof VideoFrame){let ft=Math.floor($*et.width),mt=Math.floor($*et.height);d===void 0&&(d=_(ft,mt));let it=R?_(ft,mt):d;return it.width=ft,it.height=mt,it.getContext("2d").drawImage(O,0,0,ft,mt),Ut("WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+ft+"x"+mt+")."),it}else return"data"in O&&Ut("WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),O;return O}function g(O){return O.generateMipmaps}function T(O){i.generateMipmap(O)}function M(O){return O.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:O.isWebGL3DRenderTarget?i.TEXTURE_3D:O.isWebGLArrayRenderTarget||O.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(O,R,j,$,et,ft=!1){if(O!==null){if(i[O]!==void 0)return i[O];Ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+O+"'")}let mt;$&&(mt=t.get("EXT_texture_norm16"),mt||Ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let it=R;if(R===i.RED&&(j===i.FLOAT&&(it=i.R32F),j===i.HALF_FLOAT&&(it=i.R16F),j===i.UNSIGNED_BYTE&&(it=i.R8),j===i.UNSIGNED_SHORT&&mt&&(it=mt.R16_EXT),j===i.SHORT&&mt&&(it=mt.R16_SNORM_EXT)),R===i.RED_INTEGER&&(j===i.UNSIGNED_BYTE&&(it=i.R8UI),j===i.UNSIGNED_SHORT&&(it=i.R16UI),j===i.UNSIGNED_INT&&(it=i.R32UI),j===i.BYTE&&(it=i.R8I),j===i.SHORT&&(it=i.R16I),j===i.INT&&(it=i.R32I)),R===i.RG&&(j===i.FLOAT&&(it=i.RG32F),j===i.HALF_FLOAT&&(it=i.RG16F),j===i.UNSIGNED_BYTE&&(it=i.RG8),j===i.UNSIGNED_SHORT&&mt&&(it=mt.RG16_EXT),j===i.SHORT&&mt&&(it=mt.RG16_SNORM_EXT)),R===i.RG_INTEGER&&(j===i.UNSIGNED_BYTE&&(it=i.RG8UI),j===i.UNSIGNED_SHORT&&(it=i.RG16UI),j===i.UNSIGNED_INT&&(it=i.RG32UI),j===i.BYTE&&(it=i.RG8I),j===i.SHORT&&(it=i.RG16I),j===i.INT&&(it=i.RG32I)),R===i.RGB_INTEGER&&(j===i.UNSIGNED_BYTE&&(it=i.RGB8UI),j===i.UNSIGNED_SHORT&&(it=i.RGB16UI),j===i.UNSIGNED_INT&&(it=i.RGB32UI),j===i.BYTE&&(it=i.RGB8I),j===i.SHORT&&(it=i.RGB16I),j===i.INT&&(it=i.RGB32I)),R===i.RGBA_INTEGER&&(j===i.UNSIGNED_BYTE&&(it=i.RGBA8UI),j===i.UNSIGNED_SHORT&&(it=i.RGBA16UI),j===i.UNSIGNED_INT&&(it=i.RGBA32UI),j===i.BYTE&&(it=i.RGBA8I),j===i.SHORT&&(it=i.RGBA16I),j===i.INT&&(it=i.RGBA32I)),R===i.RGB&&(j===i.UNSIGNED_SHORT&&mt&&(it=mt.RGB16_EXT),j===i.SHORT&&mt&&(it=mt.RGB16_SNORM_EXT),j===i.UNSIGNED_INT_5_9_9_9_REV&&(it=i.RGB9_E5),j===i.UNSIGNED_INT_10F_11F_11F_REV&&(it=i.R11F_G11F_B10F)),R===i.RGBA){let rt=ft?Fr:re.getTransfer(et);j===i.FLOAT&&(it=i.RGBA32F),j===i.HALF_FLOAT&&(it=i.RGBA16F),j===i.UNSIGNED_BYTE&&(it=rt===be?i.SRGB8_ALPHA8:i.RGBA8),j===i.UNSIGNED_SHORT&&mt&&(it=mt.RGBA16_EXT),j===i.SHORT&&mt&&(it=mt.RGBA16_SNORM_EXT),j===i.UNSIGNED_SHORT_4_4_4_4&&(it=i.RGBA4),j===i.UNSIGNED_SHORT_5_5_5_1&&(it=i.RGB5_A1)}return(it===i.R16F||it===i.R32F||it===i.RG16F||it===i.RG32F||it===i.RGBA16F||it===i.RGBA32F)&&t.get("EXT_color_buffer_float"),it}function v(O,R){let j;return O?R===null||R===Vn||R===ar?j=i.DEPTH24_STENCIL8:R===Sn?j=i.DEPTH32F_STENCIL8:R===rr&&(j=i.DEPTH24_STENCIL8,Ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Vn||R===ar?j=i.DEPTH_COMPONENT24:R===Sn?j=i.DEPTH_COMPONENT32F:R===rr&&(j=i.DEPTH_COMPONENT16),j}function w(O,R){return g(O)===!0||O.isFramebufferTexture&&O.minFilter!==Oe&&O.minFilter!==Le?Math.log2(Math.max(R.width,R.height))+1:O.mipmaps!==void 0&&O.mipmaps.length>0?O.mipmaps.length:O.isCompressedTexture&&Array.isArray(O.image)?R.mipmaps.length:1}function x(O){let R=O.target;R.removeEventListener("dispose",x),S(R),R.isVideoTexture&&u.delete(R),R.isHTMLTexture&&h.delete(R)}function b(O){let R=O.target;R.removeEventListener("dispose",b),E(R)}function S(O){let R=n.get(O);if(R.__webglInit===void 0)return;let j=O.source,$=f.get(j);if($){let et=$[R.__cacheKey];et.usedTimes--,et.usedTimes===0&&A(O),Object.keys($).length===0&&f.delete(j)}n.remove(O)}function A(O){let R=n.get(O);i.deleteTexture(R.__webglTexture);let j=O.source,$=f.get(j);delete $[R.__cacheKey],a.memory.textures--}function E(O){let R=n.get(O);if(O.depthTexture&&(O.depthTexture.dispose(),n.remove(O.depthTexture)),O.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(R.__webglFramebuffer[$]))for(let et=0;et<R.__webglFramebuffer[$].length;et++)i.deleteFramebuffer(R.__webglFramebuffer[$][et]);else i.deleteFramebuffer(R.__webglFramebuffer[$]);R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer[$])}else{if(Array.isArray(R.__webglFramebuffer))for(let $=0;$<R.__webglFramebuffer.length;$++)i.deleteFramebuffer(R.__webglFramebuffer[$]);else i.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&i.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&i.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let $=0;$<R.__webglColorRenderbuffer.length;$++)R.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(R.__webglColorRenderbuffer[$]);R.__webglDepthRenderbuffer&&i.deleteRenderbuffer(R.__webglDepthRenderbuffer)}let j=O.textures;for(let $=0,et=j.length;$<et;$++){let ft=n.get(j[$]);ft.__webglTexture&&(i.deleteTexture(ft.__webglTexture),a.memory.textures--),n.remove(j[$])}n.remove(O)}let P=0;function F(){P=0}function N(){return P}function I(O){P=O}function C(){let O=P;return O>=s.maxTextures&&Ut("WebGLTextures: Trying to use "+(O+1)+" texture units while this GPU supports only "+s.maxTextures),P+=1,O}function L(O){let R=[];return R.push(O.wrapS),R.push(O.wrapT),R.push(O.wrapR||0),R.push(O.magFilter),R.push(O.minFilter),R.push(O.anisotropy),R.push(O.internalFormat),R.push(O.format),R.push(O.type),R.push(O.generateMipmaps),R.push(O.premultiplyAlpha),R.push(O.flipY),R.push(O.unpackAlignment),R.push(O.colorSpace),R.join()}function k(O,R){let j=n.get(O);if(O.isVideoTexture&&H(O),O.isRenderTargetTexture===!1&&O.isExternalTexture!==!0&&O.version>0&&j.__version!==O.version){let $=O.image;if($===null)Ut("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(j,O,R);return}}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,j.__webglTexture,i.TEXTURE0+R)}function U(O,R){let j=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){ct(j,O,R);return}else O.isExternalTexture&&(j.__webglTexture=O.sourceTexture?O.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,j.__webglTexture,i.TEXTURE0+R)}function B(O,R){let j=n.get(O);if(O.isRenderTargetTexture===!1&&O.version>0&&j.__version!==O.version){ct(j,O,R);return}e.bindTexture(i.TEXTURE_3D,j.__webglTexture,i.TEXTURE0+R)}function z(O,R){let j=n.get(O);if(O.isCubeDepthTexture!==!0&&O.version>0&&j.__version!==O.version){_t(j,O,R);return}e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture,i.TEXTURE0+R)}let Z={[Rn]:i.REPEAT,[hn]:i.CLAMP_TO_EDGE,[Hs]:i.MIRRORED_REPEAT},tt={[Oe]:i.NEAREST,[wo]:i.NEAREST_MIPMAP_NEAREST,[gs]:i.NEAREST_MIPMAP_LINEAR,[Le]:i.LINEAR,[sr]:i.LINEAR_MIPMAP_NEAREST,[mn]:i.LINEAR_MIPMAP_LINEAR},at={[Dd]:i.NEVER,[Bd]:i.ALWAYS,[Nd]:i.LESS,[cc]:i.LEQUAL,[Ud]:i.EQUAL,[lc]:i.GEQUAL,[kd]:i.GREATER,[Od]:i.NOTEQUAL};function nt(O,R){if(R.type===Sn&&t.has("OES_texture_float_linear")===!1&&(R.magFilter===Le||R.magFilter===sr||R.magFilter===gs||R.magFilter===mn||R.minFilter===Le||R.minFilter===sr||R.minFilter===gs||R.minFilter===mn)&&Ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(O,i.TEXTURE_WRAP_S,Z[R.wrapS]),i.texParameteri(O,i.TEXTURE_WRAP_T,Z[R.wrapT]),(O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY)&&i.texParameteri(O,i.TEXTURE_WRAP_R,Z[R.wrapR]),i.texParameteri(O,i.TEXTURE_MAG_FILTER,tt[R.magFilter]),i.texParameteri(O,i.TEXTURE_MIN_FILTER,tt[R.minFilter]),R.compareFunction&&(i.texParameteri(O,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(O,i.TEXTURE_COMPARE_FUNC,at[R.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Oe||R.minFilter!==gs&&R.minFilter!==mn||R.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||n.get(R).__currentAnisotropy){let j=t.get("EXT_texture_filter_anisotropic");i.texParameterf(O,j.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,s.getMaxAnisotropy())),n.get(R).__currentAnisotropy=R.anisotropy}}}function ut(O,R){let j=!1;O.__webglInit===void 0&&(O.__webglInit=!0,R.addEventListener("dispose",x));let $=R.source,et=f.get($);et===void 0&&(et={},f.set($,et));let ft=L(R);if(ft!==O.__cacheKey){et[ft]===void 0&&(et[ft]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,j=!0),et[ft].usedTimes++;let mt=et[O.__cacheKey];mt!==void 0&&(et[O.__cacheKey].usedTimes--,mt.usedTimes===0&&A(R)),O.__cacheKey=ft,O.__webglTexture=et[ft].texture}return j}function X(O,R,j){return Math.floor(Math.floor(O/j)/R)}function J(O,R,j,$){let ft=O.updateRanges;if(ft.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,R.width,R.height,j,$,R.data);else{ft.sort((Bt,vt)=>Bt.start-vt.start);let mt=0;for(let Bt=1;Bt<ft.length;Bt++){let vt=ft[mt],bt=ft[Bt],zt=vt.start+vt.count,qt=X(bt.start,R.width,4),te=X(vt.start,R.width,4);bt.start<=zt+1&&qt===te&&X(bt.start+bt.count-1,R.width,4)===qt?vt.count=Math.max(vt.count,bt.start+bt.count-vt.start):(++mt,ft[mt]=bt)}ft.length=mt+1;let it=e.getParameter(i.UNPACK_ROW_LENGTH),rt=e.getParameter(i.UNPACK_SKIP_PIXELS),gt=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,R.width);for(let Bt=0,vt=ft.length;Bt<vt;Bt++){let bt=ft[Bt],zt=Math.floor(bt.start/4),qt=Math.ceil(bt.count/4),te=zt%R.width,W=Math.floor(zt/R.width),xt=qt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,te),e.pixelStorei(i.UNPACK_SKIP_ROWS,W),e.texSubImage2D(i.TEXTURE_2D,0,te,W,xt,st,j,$,R.data)}O.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,it),e.pixelStorei(i.UNPACK_SKIP_PIXELS,rt),e.pixelStorei(i.UNPACK_SKIP_ROWS,gt)}}function ct(O,R,j){let $=i.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),R.isData3DTexture&&($=i.TEXTURE_3D);let et=ut(O,R),ft=R.source;e.bindTexture($,O.__webglTexture,i.TEXTURE0+j);let mt=n.get(ft);if(ft.version!==mt.__version||et===!0){if(e.activeTexture(i.TEXTURE0+j),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){let st=re.getPrimaries(re.workingColorSpace),yt=R.colorSpace===qn?null:re.getPrimaries(R.colorSpace),Tt=R.colorSpace===qn||st===yt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Tt)}e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment);let rt=p(R.image,!1,s.maxTextureSize);rt=xe(R,rt);let gt=r.convert(R.format,R.colorSpace),Bt=r.convert(R.type),vt=y(R.internalFormat,gt,Bt,R.normalized,R.colorSpace,R.isVideoTexture);nt($,R);let bt,zt=R.mipmaps,qt=R.isVideoTexture!==!0,te=mt.__version===void 0||et===!0,W=ft.dataReady,xt=w(R,rt);if(R.isDepthTexture)vt=v(R.format===Wi,R.type),te&&(qt?e.texStorage2D(i.TEXTURE_2D,1,vt,rt.width,rt.height):e.texImage2D(i.TEXTURE_2D,0,vt,rt.width,rt.height,0,gt,Bt,null));else if(R.isDataTexture)if(zt.length>0){qt&&te&&e.texStorage2D(i.TEXTURE_2D,xt,vt,zt[0].width,zt[0].height);for(let st=0,yt=zt.length;st<yt;st++)bt=zt[st],qt?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,bt.width,bt.height,gt,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,st,vt,bt.width,bt.height,0,gt,Bt,bt.data);R.generateMipmaps=!1}else qt?(te&&e.texStorage2D(i.TEXTURE_2D,xt,vt,rt.width,rt.height),W&&J(R,rt,gt,Bt)):e.texImage2D(i.TEXTURE_2D,0,vt,rt.width,rt.height,0,gt,Bt,rt.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){qt&&te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,vt,zt[0].width,zt[0].height,rt.depth);for(let st=0,yt=zt.length;st<yt;st++)if(bt=zt[st],R.format!==wn)if(gt!==null)if(qt){if(W)if(R.layerUpdates.size>0){let Tt=$l(bt.width,bt.height,R.format,R.type);for(let ot of R.layerUpdates){let Vt=bt.data.subarray(ot*Tt/bt.data.BYTES_PER_ELEMENT,(ot+1)*Tt/bt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,ot,bt.width,bt.height,1,gt,Vt)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,bt.width,bt.height,rt.depth,gt,bt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,vt,bt.width,bt.height,rt.depth,0,bt.data,0,0);else Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?W&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,bt.width,bt.height,rt.depth,gt,Bt,bt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,vt,bt.width,bt.height,rt.depth,0,gt,Bt,bt.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{qt&&te&&e.texStorage2D(i.TEXTURE_2D,xt,vt,zt[0].width,zt[0].height);for(let st=0,yt=zt.length;st<yt;st++)bt=zt[st],R.format!==wn?gt!==null?qt?W&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,bt.width,bt.height,gt,bt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,vt,bt.width,bt.height,0,bt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,bt.width,bt.height,gt,Bt,bt.data):e.texImage2D(i.TEXTURE_2D,st,vt,bt.width,bt.height,0,gt,Bt,bt.data)}else if(R.isDataArrayTexture)if(qt){if(te&&e.texStorage3D(i.TEXTURE_2D_ARRAY,xt,vt,rt.width,rt.height,rt.depth),W)if(R.layerUpdates.size>0){let st=$l(rt.width,rt.height,R.format,R.type);for(let yt of R.layerUpdates){let Tt=rt.data.subarray(yt*st/rt.data.BYTES_PER_ELEMENT,(yt+1)*st/rt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,yt,rt.width,rt.height,1,gt,Bt,Tt)}R.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,rt.width,rt.height,rt.depth,gt,Bt,rt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,vt,rt.width,rt.height,rt.depth,0,gt,Bt,rt.data);else if(R.isData3DTexture)qt?(te&&e.texStorage3D(i.TEXTURE_3D,xt,vt,rt.width,rt.height,rt.depth),W&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,rt.width,rt.height,rt.depth,gt,Bt,rt.data)):e.texImage3D(i.TEXTURE_3D,0,vt,rt.width,rt.height,rt.depth,0,gt,Bt,rt.data);else if(R.isFramebufferTexture){if(te)if(qt)e.texStorage2D(i.TEXTURE_2D,xt,vt,rt.width,rt.height);else{let st=rt.width,yt=rt.height;for(let Tt=0;Tt<xt;Tt++)e.texImage2D(i.TEXTURE_2D,Tt,vt,st,yt,0,gt,Bt,null),st>>=1,yt>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),rt.parentNode!==st){st.appendChild(rt),h.add(R),st.onpaint=yt=>{let Tt=yt.changedElements;for(let ot of h)Tt.includes(ot.image)&&(ot.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,rt);else{let Tt=i.RGBA,ot=i.RGBA,Vt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Tt,ot,Vt,rt)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(zt.length>0){if(qt&&te){let st=ee(zt[0]);e.texStorage2D(i.TEXTURE_2D,xt,vt,st.width,st.height)}for(let st=0,yt=zt.length;st<yt;st++)bt=zt[st],qt?W&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,gt,Bt,bt):e.texImage2D(i.TEXTURE_2D,st,vt,gt,Bt,bt);R.generateMipmaps=!1}else if(qt){if(te){let st=ee(rt);e.texStorage2D(i.TEXTURE_2D,xt,vt,st.width,st.height)}W&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Bt,rt)}else e.texImage2D(i.TEXTURE_2D,0,vt,gt,Bt,rt);g(R)&&T($),mt.__version=ft.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function _t(O,R,j){if(R.image.length!==6)return;let $=ut(O,R),et=R.source;e.bindTexture(i.TEXTURE_CUBE_MAP,O.__webglTexture,i.TEXTURE0+j);let ft=n.get(et);if(et.version!==ft.__version||$===!0){e.activeTexture(i.TEXTURE0+j);let mt=re.getPrimaries(re.workingColorSpace),it=R.colorSpace===qn?null:re.getPrimaries(R.colorSpace),rt=R.colorSpace===qn||mt===it?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,R.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,R.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);let gt=R.isCompressedTexture||R.image[0].isCompressedTexture,Bt=R.image[0]&&R.image[0].isDataTexture,vt=[];for(let ot=0;ot<6;ot++)!gt&&!Bt?vt[ot]=p(R.image[ot],!0,s.maxCubemapSize):vt[ot]=Bt?R.image[ot].image:R.image[ot],vt[ot]=xe(R,vt[ot]);let bt=vt[0],zt=r.convert(R.format,R.colorSpace),qt=r.convert(R.type),te=y(R.internalFormat,zt,qt,R.normalized,R.colorSpace),W=R.isVideoTexture!==!0,xt=ft.__version===void 0||$===!0,st=et.dataReady,yt=w(R,bt);nt(i.TEXTURE_CUBE_MAP,R);let Tt;if(gt){W&&xt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,te,bt.width,bt.height);for(let ot=0;ot<6;ot++){Tt=vt[ot].mipmaps;for(let Vt=0;Vt<Tt.length;Vt++){let Dt=Tt[Vt];R.format!==wn?zt!==null?W?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,0,0,Dt.width,Dt.height,zt,Dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,te,Dt.width,Dt.height,0,Dt.data):Ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,0,0,Dt.width,Dt.height,zt,qt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt,te,Dt.width,Dt.height,0,zt,qt,Dt.data)}}}else{if(Tt=R.mipmaps,W&&xt){Tt.length>0&&yt++;let ot=ee(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,yt,te,ot.width,ot.height)}for(let ot=0;ot<6;ot++)if(Bt){W?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,vt[ot].width,vt[ot].height,zt,qt,vt[ot].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,vt[ot].width,vt[ot].height,0,zt,qt,vt[ot].data);for(let Vt=0;Vt<Tt.length;Vt++){let Ee=Tt[Vt].image[ot].image;W?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,0,0,Ee.width,Ee.height,zt,qt,Ee.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,te,Ee.width,Ee.height,0,zt,qt,Ee.data)}}else{W?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,0,0,zt,qt,vt[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0,te,zt,qt,vt[ot]);for(let Vt=0;Vt<Tt.length;Vt++){let Dt=Tt[Vt];W?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,0,0,zt,qt,Dt.image[ot]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Vt+1,te,zt,qt,Dt.image[ot])}}}g(R)&&T(i.TEXTURE_CUBE_MAP),ft.__version=et.version,R.onUpdate&&R.onUpdate(R)}O.__version=R.version}function ht(O,R,j,$,et,ft){let mt=r.convert(j.format,j.colorSpace),it=r.convert(j.type),rt=y(j.internalFormat,mt,it,j.normalized,j.colorSpace),gt=n.get(R),Bt=n.get(j);if(Bt.__renderTarget=R,!gt.__hasExternalTextures){let vt=Math.max(1,R.width>>ft),bt=Math.max(1,R.height>>ft);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,ft,rt,vt,bt,R.depth,0,mt,it,null):e.texImage2D(et,ft,rt,vt,bt,0,mt,it,null)}e.bindFramebuffer(i.FRAMEBUFFER,O),Gt(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,et,Bt.__webglTexture,0,pt(R)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,et,Bt.__webglTexture,ft),e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(O,R,j){if(i.bindRenderbuffer(i.RENDERBUFFER,O),R.depthBuffer){let $=R.depthTexture,et=$&&$.isDepthTexture?$.type:null,ft=v(R.stencilBuffer,et),mt=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Gt(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(R),ft,R.width,R.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(R),ft,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,ft,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,mt,i.RENDERBUFFER,O)}else{let $=R.textures;for(let et=0;et<$.length;et++){let ft=$[et],mt=r.convert(ft.format,ft.colorSpace),it=r.convert(ft.type),rt=y(ft.internalFormat,mt,it,ft.normalized,ft.colorSpace);Gt(R)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,pt(R),rt,R.width,R.height):j?i.renderbufferStorageMultisample(i.RENDERBUFFER,pt(R),rt,R.width,R.height):i.renderbufferStorage(i.RENDERBUFFER,rt,R.width,R.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Yt(O,R,j){let $=R.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,O),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let et=n.get(R.depthTexture);if(et.__renderTarget=R,(!et.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),$){if(et.__webglInit===void 0&&(et.__webglInit=!0,R.depthTexture.addEventListener("dispose",x)),et.__webglTexture===void 0){et.__webglTexture=i.createTexture(),e.bindTexture(i.TEXTURE_CUBE_MAP,et.__webglTexture),nt(i.TEXTURE_CUBE_MAP,R.depthTexture);let gt=r.convert(R.depthTexture.format),Bt=r.convert(R.depthTexture.type),vt;R.depthTexture.format===$n?vt=i.DEPTH_COMPONENT24:R.depthTexture.format===Wi&&(vt=i.DEPTH24_STENCIL8);for(let bt=0;bt<6;bt++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+bt,0,vt,R.width,R.height,0,gt,Bt,null)}}else k(R.depthTexture,0);let ft=et.__webglTexture,mt=pt(R),it=$?i.TEXTURE_CUBE_MAP_POSITIVE_X+j:i.TEXTURE_2D,rt=R.depthTexture.format===Wi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(R.depthTexture.format===$n)Gt(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,ft,0);else if(R.depthTexture.format===Wi)Gt(R)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,rt,it,ft,0,mt):i.framebufferTexture2D(i.FRAMEBUFFER,rt,it,ft,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Et(O){let R=n.get(O),j=O.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==O.depthTexture){let $=O.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),$){let et=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,$.removeEventListener("dispose",et)};$.addEventListener("dispose",et),R.__depthDisposeCallback=et}R.__boundDepthTexture=$}if(O.depthTexture&&!R.__autoAllocateDepthBuffer)if(j)for(let $=0;$<6;$++)Yt(R.__webglFramebuffer[$],O,$);else{let $=O.texture.mipmaps;$&&$.length>0?Yt(R.__webglFramebuffer[0],O,0):Yt(R.__webglFramebuffer,O,0)}else if(j){R.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[$]),R.__webglDepthbuffer[$]===void 0)R.__webglDepthbuffer[$]=i.createRenderbuffer(),It(R.__webglDepthbuffer[$],O,!1);else{let et=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=R.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ft)}}else{let $=O.texture.mipmaps;if($&&$.length>0?e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=i.createRenderbuffer(),It(R.__webglDepthbuffer,O,!1);else{let et=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=R.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ft),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,ft)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ft(O,R,j){let $=n.get(O);R!==void 0&&ht($.__webglFramebuffer,O,O.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),j!==void 0&&Et(O)}function Qt(O){let R=O.texture,j=n.get(O),$=n.get(R);O.addEventListener("dispose",b);let et=O.textures,ft=O.isWebGLCubeRenderTarget===!0,mt=et.length>1;if(mt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=R.version,a.memory.textures++),ft){j.__webglFramebuffer=[];for(let it=0;it<6;it++)if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer[it]=[];for(let rt=0;rt<R.mipmaps.length;rt++)j.__webglFramebuffer[it][rt]=i.createFramebuffer()}else j.__webglFramebuffer[it]=i.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){j.__webglFramebuffer=[];for(let it=0;it<R.mipmaps.length;it++)j.__webglFramebuffer[it]=i.createFramebuffer()}else j.__webglFramebuffer=i.createFramebuffer();if(mt)for(let it=0,rt=et.length;it<rt;it++){let gt=n.get(et[it]);gt.__webglTexture===void 0&&(gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(O.samples>0&&Gt(O)===!1){j.__webglMultisampledFramebuffer=i.createFramebuffer(),j.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,j.__webglMultisampledFramebuffer);for(let it=0;it<et.length;it++){let rt=et[it];j.__webglColorRenderbuffer[it]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,j.__webglColorRenderbuffer[it]);let gt=r.convert(rt.format,rt.colorSpace),Bt=r.convert(rt.type),vt=y(rt.internalFormat,gt,Bt,rt.normalized,rt.colorSpace,O.isXRRenderTarget===!0),bt=pt(O);i.renderbufferStorageMultisample(i.RENDERBUFFER,bt,vt,O.width,O.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+it,i.RENDERBUFFER,j.__webglColorRenderbuffer[it])}i.bindRenderbuffer(i.RENDERBUFFER,null),O.depthBuffer&&(j.__webglDepthRenderbuffer=i.createRenderbuffer(),It(j.__webglDepthRenderbuffer,O,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ft){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),nt(i.TEXTURE_CUBE_MAP,R);for(let it=0;it<6;it++)if(R.mipmaps&&R.mipmaps.length>0)for(let rt=0;rt<R.mipmaps.length;rt++)ht(j.__webglFramebuffer[it][rt],O,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,rt);else ht(j.__webglFramebuffer[it],O,R,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+it,0);g(R)&&T(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(mt){for(let it=0,rt=et.length;it<rt;it++){let gt=et[it],Bt=n.get(gt),vt=i.TEXTURE_2D;(O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(vt=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(vt,Bt.__webglTexture),nt(vt,gt),ht(j.__webglFramebuffer,O,gt,i.COLOR_ATTACHMENT0+it,vt,0),g(gt)&&T(vt)}e.unbindTexture()}else{let it=i.TEXTURE_2D;if((O.isWebGL3DRenderTarget||O.isWebGLArrayRenderTarget)&&(it=O.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(it,$.__webglTexture),nt(it,R),R.mipmaps&&R.mipmaps.length>0)for(let rt=0;rt<R.mipmaps.length;rt++)ht(j.__webglFramebuffer[rt],O,R,i.COLOR_ATTACHMENT0,it,rt);else ht(j.__webglFramebuffer,O,R,i.COLOR_ATTACHMENT0,it,0);g(R)&&T(it),e.unbindTexture()}O.depthBuffer&&Et(O)}function $t(O){let R=O.textures;for(let j=0,$=R.length;j<$;j++){let et=R[j];if(g(et)){let ft=M(O),mt=n.get(et).__webglTexture;e.bindTexture(ft,mt),T(ft),e.unbindTexture()}}}let lt=[],V=[];function dt(O){if(O.samples>0){if(Gt(O)===!1){let R=O.textures,j=O.width,$=O.height,et=i.COLOR_BUFFER_BIT,ft=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,mt=n.get(O),it=R.length>1;if(it)for(let gt=0;gt<R.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,mt.__webglMultisampledFramebuffer);let rt=O.texture.mipmaps;rt&&rt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglFramebuffer);for(let gt=0;gt<R.length;gt++){if(O.resolveDepthBuffer&&(O.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),O.stencilBuffer&&O.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),it){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Bt=n.get(R[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Bt,0)}i.blitFramebuffer(0,0,j,$,0,0,j,$,et,i.NEAREST),c===!0&&(lt.length=0,V.length=0,lt.push(i.COLOR_ATTACHMENT0+gt),O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&(lt.push(ft),V.push(ft),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),it)for(let gt=0;gt<R.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,mt.__webglColorRenderbuffer[gt]);let Bt=n.get(R[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,mt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,Bt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,mt.__webglMultisampledFramebuffer)}else if(O.depthBuffer&&O.storeMultisampledDepthBuffer===!1&&c){let R=O.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[R])}}}function pt(O){return Math.min(s.maxSamples,O.samples)}function Gt(O){let R=n.get(O);return O.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function H(O){let R=a.render.frame;u.get(O)!==R&&(u.set(O,R),O.update())}function xe(O,R){let j=O.colorSpace,$=O.format,et=O.type;return O.isCompressedTexture===!0||O.isVideoTexture===!0||j!==an&&j!==qn&&(re.getTransfer(j)===be?($!==wn||et!==gn)&&Ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Kt("WebGLTextures: Unsupported texture color space:",j)),R}function ee(O){return typeof HTMLImageElement<"u"&&O instanceof HTMLImageElement?(l.width=O.naturalWidth||O.width,l.height=O.naturalHeight||O.height):typeof VideoFrame<"u"&&O instanceof VideoFrame?(l.width=O.displayWidth,l.height=O.displayHeight):(l.width=O.width,l.height=O.height),l}this.allocateTextureUnit=C,this.resetTextureUnits=F,this.getTextureUnits=N,this.setTextureUnits=I,this.setTexture2D=k,this.setTexture2DArray=U,this.setTexture3D=B,this.setTextureCube=z,this.rebindTextures=Ft,this.setupRenderTarget=Qt,this.updateRenderTargetMipmap=$t,this.updateMultisampleRenderTarget=dt,this.setupDepthRenderbuffer=Et,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=Gt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function My(i,t){function e(n,s=qn){let r,a=re.getTransfer(s);if(n===gn)return i.UNSIGNED_BYTE;if(n===To)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Eo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===zl)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Hl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ol)return i.BYTE;if(n===Bl)return i.SHORT;if(n===rr)return i.UNSIGNED_SHORT;if(n===Ao)return i.INT;if(n===Vn)return i.UNSIGNED_INT;if(n===Sn)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===Gl)return i.ALPHA;if(n===Vl)return i.RGB;if(n===wn)return i.RGBA;if(n===$n)return i.DEPTH_COMPONENT;if(n===Wi)return i.DEPTH_STENCIL;if(n===Ro)return i.RED;if(n===Co)return i.RED_INTEGER;if(n===qi)return i.RG;if(n===Io)return i.RG_INTEGER;if(n===Lo)return i.RGBA_INTEGER;if(n===sa||n===ra||n===aa||n===oa)if(a===be)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===aa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===oa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Po||n===Fo||n===Do||n===No)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Po)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Fo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Do)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===No)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Uo||n===ko||n===Oo||n===Bo||n===zo||n===ca||n===Ho)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Uo||n===ko)return a===be?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Oo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Bo)return r.COMPRESSED_R11_EAC;if(n===zo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ca)return r.COMPRESSED_RG11_EAC;if(n===Ho)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Go||n===Vo||n===Wo||n===qo||n===Xo||n===jo||n===Ko||n===Yo||n===Jo||n===$o||n===Zo||n===Qo||n===tc||n===ec)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Go)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Vo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Wo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===qo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===jo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ko)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Jo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===$o)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Zo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Qo)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===tc)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ec)return a===be?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===ic||n===sc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===nc)return a===be?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ic)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===sc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===rc||n===ac||n===la||n===oc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===rc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===ac)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===la)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===oc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ar?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var Sy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,uh=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Vr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mn({vertexShader:Sy,fragmentShader:wy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new fe(new qr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},dh=class extends zn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,u=null,h=null,d=null,f=null,m=null,_=typeof XRWebGLBinding<"u",p=new uh,g={},T=e.getContextAttributes(),M=null,y=null,v=[],w=[],x=new Wt,b=null,S=null,A=new Ue;A.viewport=new ve;let E=new Ue;E.viewport=new ve;let P=[A,E],F=new yo,N=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=v[X];return J===void 0&&(J=new Xs,v[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=v[X];return J===void 0&&(J=new Xs,v[X]=J),J.getGripSpace()},this.getHand=function(X){let J=v[X];return J===void 0&&(J=new Xs,v[X]=J),J.getHandSpace()};function C(X){let J=w.indexOf(X.inputSource);if(J===-1)return;let ct=v[J];ct!==void 0&&(ct.update(X.inputSource,X.frame,l||a),ct.dispatchEvent({type:X.type,data:X.inputSource}))}function L(){s.removeEventListener("select",C),s.removeEventListener("selectstart",C),s.removeEventListener("selectend",C),s.removeEventListener("squeeze",C),s.removeEventListener("squeezestart",C),s.removeEventListener("squeezeend",C),s.removeEventListener("end",L),s.removeEventListener("inputsourceschange",k);for(let X=0;X<v.length;X++){let J=w[X];J!==null&&(w[X]=null,v[X].disconnect(J))}N=null,I=null,p.reset();for(let X in g)delete g[X];if(t.setRenderTarget(M),f=null,d=null,h=null,s=null,y=null,ut.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),S!==null){let X=S.camera;X.fov=S.fov,X.zoom=S.zoom,X.updateProjectionMatrix(),S=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&Ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&Ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(X){l=X},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h===null&&_&&(h=new XRWebGLBinding(s,e)),h},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(M=t.getRenderTarget(),s.addEventListener("select",C),s.addEventListener("selectstart",C),s.addEventListener("selectend",C),s.addEventListener("squeeze",C),s.addEventListener("squeezestart",C),s.addEventListener("squeezeend",C),s.addEventListener("end",L),s.addEventListener("inputsourceschange",k),T.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ct=null,_t=null,ht=null;T.depth&&(ht=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ct=T.stencil?Wi:$n,_t=T.stencil?ar:Vn);let It={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};h=this.getBinding(),d=h.createProjectionLayer(It),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new on(d.textureWidth,d.textureHeight,{format:wn,type:gn,depthTexture:new ki(d.textureWidth,d.textureHeight,_t,void 0,void 0,void 0,void 0,void 0,void 0,ct),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let ct={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,ct),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new on(f.framebufferWidth,f.framebufferHeight,{format:wn,type:gn,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),ut.setContext(s),ut.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function k(X){for(let J=0;J<X.removed.length;J++){let ct=X.removed[J],_t=w.indexOf(ct);_t>=0&&(w[_t]=null,v[_t].disconnect(ct))}for(let J=0;J<X.added.length;J++){let ct=X.added[J],_t=w.indexOf(ct);if(_t===-1){for(let It=0;It<v.length;It++)if(It>=w.length){w.push(ct),_t=It;break}else if(w[It]===null){w[It]=ct,_t=It;break}if(_t===-1)break}let ht=v[_t];ht&&ht.connect(ct)}}let U=new q,B=new q;function z(X,J,ct){U.setFromMatrixPosition(J.matrixWorld),B.setFromMatrixPosition(ct.matrixWorld);let _t=U.distanceTo(B),ht=J.projectionMatrix.elements,It=ct.projectionMatrix.elements,Yt=ht[14]/(ht[10]-1),Et=ht[14]/(ht[10]+1),Ft=(ht[9]+1)/ht[5],Qt=(ht[9]-1)/ht[5],$t=(ht[8]-1)/ht[0],lt=(It[8]+1)/It[0],V=Yt*$t,dt=Yt*lt,pt=_t/(-$t+lt),Gt=pt*-$t;if(J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(Gt),X.translateZ(pt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),ht[10]===-1)X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{let H=Yt+pt,xe=Et+pt,ee=V-Gt,O=dt+(_t-Gt),R=Ft*Et/xe*H,j=Qt*Et/xe*H;X.projectionMatrix.makePerspective(ee,O,R,j,H,xe),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function Z(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;let J=X.near,ct=X.far;p.texture!==null&&(p.depthNear>0&&(J=p.depthNear),p.depthFar>0&&(ct=p.depthFar)),F.near=E.near=A.near=J,F.far=E.far=A.far=ct,(N!==F.near||I!==F.far)&&(s.updateRenderState({depthNear:F.near,depthFar:F.far}),N=F.near,I=F.far),F.layers.mask=X.layers.mask|6,A.layers.mask=F.layers.mask&-5,E.layers.mask=F.layers.mask&-3;let _t=X.parent,ht=F.cameras;Z(F,_t);for(let It=0;It<ht.length;It++)Z(ht[It],_t);ht.length===2?z(F,A,E):F.projectionMatrix.copy(A.projectionMatrix),S===null&&X.isPerspectiveCamera&&(S={camera:X,fov:X.fov,zoom:X.zoom}),tt(X,F,_t)};function tt(X,J,ct){ct===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ct.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=rs*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(X){c=X,d!==null&&(d.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(F)},this.getCameraTexture=function(X){return g[X]};let at=null;function nt(X,J){if(u=J.getViewerPose(l||a),m=J,u!==null){let ct=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let _t=!1;ct.length!==F.cameras.length&&(F.cameras.length=0,_t=!0);for(let Et=0;Et<ct.length;Et++){let Ft=ct[Et],Qt=null;if(f!==null)Qt=f.getViewport(Ft);else{let lt=h.getViewSubImage(d,Ft);Qt=lt.viewport,Et===0&&(t.setRenderTargetTextures(y,lt.colorTexture,lt.depthStencilTexture),t.setRenderTarget(y))}let $t=P[Et];$t===void 0&&($t=new Ue,$t.layers.enable(Et),$t.viewport=new ve,P[Et]=$t),$t.matrix.fromArray(Ft.transform.matrix),$t.matrix.decompose($t.position,$t.quaternion,$t.scale),$t.projectionMatrix.fromArray(Ft.projectionMatrix),$t.projectionMatrixInverse.copy($t.projectionMatrix).invert(),$t.viewport.set(Qt.x,Qt.y,Qt.width,Qt.height),Et===0&&(F.matrix.copy($t.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),_t===!0&&F.cameras.push($t)}let ht=s.enabledFeatures;if(ht&&ht.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){h=n.getBinding();let Et=h.getDepthInformation(ct[0]);Et&&Et.isValid&&Et.texture&&p.init(Et,s.renderState)}if(ht&&ht.includes("camera-access")&&_){t.state.unbindTexture(),h=n.getBinding();for(let Et=0;Et<ct.length;Et++){let Ft=ct[Et].camera;if(Ft){let Qt=g[Ft];Qt||(Qt=new Vr,g[Ft]=Qt);let $t=h.getCameraImage(Ft);Qt.sourceTexture=$t}}}}for(let ct=0;ct<v.length;ct++){let _t=w[ct],ht=v[ct];_t!==null&&ht!==void 0&&ht.update(_t,J,l||a)}at&&at(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),m=null}let ut=new gf;ut.setAnimationLoop(nt),this.setAnimationLoop=function(X){at=X},this.dispose=function(){}}},Ay=new jt,Mf=new Zt;Mf.set(-1,0,0,0,1,0,0,0,1);function Ty(i,t){function e(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,Kl(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,T,M,y){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),h(p,g)):g.isMeshPhongMaterial?(r(p,g),u(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),d(p,g),g.isMeshPhysicalMaterial&&f(p,g,y)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),_(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(a(p,g),g.isLineDashedMaterial&&o(p,g)):g.isPointsMaterial?c(p,g,T,M):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,e(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===Ke&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,e(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===Ke&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,e(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,e(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let T=t.get(g),M=T.envMap,y=T.envMapRotation;M&&(p.envMap.value=M,p.envMapRotation.value.setFromMatrix4(Ay.makeRotationFromEuler(y)).transpose(),M.isCubeTexture&&M.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(Mf),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,p.aoMapTransform))}function a(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform))}function o(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,T,M){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*T,p.scale.value=M*.5,g.map&&(p.map.value=g.map,e(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,e(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,e(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function u(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function h(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function d(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function f(p,g,T){p.ior.value=g.ior,g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===Ke&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function _(p,g){let T=t.get(g).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Ey(i,t,e,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,v){let w=v.program;n.uniformBlockBinding(y,w)}function l(y,v){let w=s[y.id];w===void 0&&(p(y),w=u(y),s[y.id]=w,y.addEventListener("dispose",T));let x=v.program;n.updateUBOMapping(y,x);let b=t.render.frame;r[y.id]!==b&&(d(y),r[y.id]=b)}function u(y){let v=h();y.__bindingPointIndex=v;let w=i.createBuffer(),x=y.__size,b=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,x,b),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,v,w),w}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return Kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){let v=s[y.id],w=y.uniforms,x=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,v);for(let b=0,S=w.length;b<S;b++){let A=w[b];if(Array.isArray(A))for(let E=0,P=A.length;E<P;E++)f(A[E],b,E,x);else f(A,b,0,x)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,v,w,x){if(_(y,v,w,x)===!0){let b=y.__offset,S=y.value;if(Array.isArray(S)){let A=0;for(let E=0;E<S.length;E++){let P=S[E],F=g(P);m(P,y.__data,A),typeof P!="number"&&typeof P!="boolean"&&!P.isMatrix3&&!ArrayBuffer.isView(P)&&(A+=F.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(S,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,b,y.__data)}}function m(y,v,w){typeof y=="number"||typeof y=="boolean"?v[0]=y:y.isMatrix3?(v[0]=y.elements[0],v[1]=y.elements[1],v[2]=y.elements[2],v[3]=0,v[4]=y.elements[3],v[5]=y.elements[4],v[6]=y.elements[5],v[7]=0,v[8]=y.elements[6],v[9]=y.elements[7],v[10]=y.elements[8],v[11]=0):ArrayBuffer.isView(y)?v.set(new y.constructor(y.buffer,y.byteOffset,v.length)):y.toArray(v,w)}function _(y,v,w,x){let b=y.value,S=v+"_"+w;if(x[S]===void 0)return typeof b=="number"||typeof b=="boolean"?x[S]=b:ArrayBuffer.isView(b)?x[S]=b.slice():x[S]=b.clone(),!0;{let A=x[S];if(typeof b=="number"||typeof b=="boolean"){if(A!==b)return x[S]=b,!0}else{if(ArrayBuffer.isView(b))return!0;if(A.equals(b)===!1)return A.copy(b),!0}}return!1}function p(y){let v=y.uniforms,w=0,x=16;for(let S=0,A=v.length;S<A;S++){let E=Array.isArray(v[S])?v[S]:[v[S]];for(let P=0,F=E.length;P<F;P++){let N=E[P],I=Array.isArray(N.value)?N.value:[N.value];for(let C=0,L=I.length;C<L;C++){let k=I[C],U=g(k),B=w%x,z=B%U.boundary,Z=B+z;w+=z,Z!==0&&x-Z<U.storage&&(w+=x-Z),N.__data=new Float32Array(U.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=w,w+=U.storage}}}let b=w%x;return b>0&&(w+=x-b),y.__size=w,y.__cache={},this}function g(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?Ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(v.boundary=16,v.storage=y.byteLength):Ut("WebGLRenderer: Unsupported uniform value type.",y),v}function T(y){let v=y.target;v.removeEventListener("dispose",T);let w=a.indexOf(v.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[v.id]),delete s[v.id],delete r[v.id]}function M(){for(let y in s)i.deleteBuffer(s[y]);a=[],s={},r={}}return{bind:c,update:l,dispose:M}}var Ry=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),ni=null;function Cy(){return ni===null&&(ni=new Js(Ry,16,16,qi,Wn),ni.name="DFG_LUT",ni.minFilter=Le,ni.magFilter=Le,ni.wrapS=hn,ni.wrapT=hn,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}var fc=class{constructor(t={}){let{canvas:e=zd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:d=!1,outputBufferType:f=gn}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;let _=f,p=new Set([Lo,Io,Co]),g=new Set([gn,Vn,rr,ar,To,Eo]),T=new Uint32Array(4),M=new Int32Array(4),y=new q,v=null,w=null,x=[],b=[],S=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let A=this,E=!1,P=null,F=null,N=null,I=null;this._outputColorSpace=we;let C=0,L=0,k=null,U=-1,B=null,z=new ve,Z=new ve,tt=null,at=new Mt(0),nt=0,ut=e.width,X=e.height,J=1,ct=null,_t=null,ht=new ve(0,0,ut,X),It=new ve(0,0,ut,X),Yt=!1,Et=new $s,Ft=!1,Qt=!1,$t=new jt,lt=new q,V=new ve,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pt=!1;function Gt(){return k===null?J:1}let H=n;function xe(D,G){return e.getContext(D,G)}let ee,O,R,j,$,et,ft,mt,it,rt,gt,Bt,vt,bt,zt,qt,te,W,xt,st,yt,Tt,ot;try{let D={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",Ee,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",Fn,!1),H===null){let G="webgl2";if(H=xe(G,D),H===null)throw xe(G)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Vt()}catch(D){throw e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),Kt("WebGLRenderer: "+D.message),D}function Vt(){ee=new Ub(H),ee.init(),yt=new My(H,ee),O=new Tb(H,ee,t,yt),R=new _y(H,ee),O.reversedDepthBuffer&&d&&R.buffers.depth.setReversed(!0),F=H.createFramebuffer(),N=H.createFramebuffer(),I=H.createFramebuffer(),j=new Bb(H),$=new ay,et=new vy(H,ee,R,$,O,yt,j),ft=new Nb(A),mt=new Hm(H),Tt=new wb(H,mt),it=new kb(H,mt,j,Tt),rt=new Hb(H,it,mt,Tt,j),W=new zb(H,O,et),zt=new Eb($),gt=new ry(A,ft,ee,O,Tt,zt),Bt=new Ty(A,$),vt=new cy,bt=new py(ee),te=new Sb(A,ft,R,rt,m,c),qt=new yy(A,rt,O),ot=new Ey(H,j,O,R),xt=new Ab(H,ee,j),st=new Ob(H,ee,j),j.programs=gt.programs,A.capabilities=O,A.extensions=ee,A.properties=$,A.renderLists=vt,A.shadowMap=qt,A.state=R,A.info=j}_!==gn&&(S=new Vb(_,e.width,e.height,o,s,r));let Dt=new dh(A,H);this.xr=Dt,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let D=ee.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){let D=ee.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(D){D!==void 0&&(J=D,this.setSize(ut,X,!1))},this.getSize=function(D){return D.set(ut,X)},this.setSize=function(D,G,Q=!0){if(Dt.isPresenting){Ut("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=D,X=G,e.width=Math.floor(D*J),e.height=Math.floor(G*J),Q===!0&&(e.style.width=D+"px",e.style.height=G+"px"),S!==null&&S.setSize(e.width,e.height),this.setViewport(0,0,D,G)},this.getDrawingBufferSize=function(D){return D.set(ut*J,X*J).floor()},this.setDrawingBufferSize=function(D,G,Q){ut=D,X=G,J=Q,e.width=Math.floor(D*Q),e.height=Math.floor(G*Q),this.setViewport(0,0,D,G)},this.setEffects=function(D){if(_===gn){Kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(D){for(let G=0;G<D.length;G++)if(D[G].isOutputPass===!0){Ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}S.setEffects(D||[])},this.getCurrentViewport=function(D){return D.copy(z)},this.getViewport=function(D){return D.copy(ht)},this.setViewport=function(D,G,Q,K){D.isVector4?ht.set(D.x,D.y,D.z,D.w):ht.set(D,G,Q,K),R.viewport(z.copy(ht).multiplyScalar(J).round())},this.getScissor=function(D){return D.copy(It)},this.setScissor=function(D,G,Q,K){D.isVector4?It.set(D.x,D.y,D.z,D.w):It.set(D,G,Q,K),R.scissor(Z.copy(It).multiplyScalar(J).round())},this.getScissorTest=function(){return Yt},this.setScissorTest=function(D){R.setScissorTest(Yt=D)},this.setOpaqueSort=function(D){ct=D},this.setTransparentSort=function(D){_t=D},this.getClearColor=function(D){return D.copy(te.getClearColor())},this.setClearColor=function(){te.setClearColor(...arguments)},this.getClearAlpha=function(){return te.getClearAlpha()},this.setClearAlpha=function(){te.setClearAlpha(...arguments)},this.clear=function(D=!0,G=!0,Q=!0){let K=0;if(D){let Y=!1;if(k!==null){let At=k.texture.format;Y=p.has(At)}if(Y){let At=k.texture.type,Ct=g.has(At),wt=te.getClearColor(),Lt=te.getClearAlpha(),Nt=wt.r,ne=wt.g,ce=wt.b;Ct?(T[0]=Nt,T[1]=ne,T[2]=ce,T[3]=Lt,H.clearBufferuiv(H.COLOR,0,T)):(M[0]=Nt,M[1]=ne,M[2]=ce,M[3]=Lt,H.clearBufferiv(H.COLOR,0,M))}else K|=H.COLOR_BUFFER_BIT}G&&(K|=H.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Q&&(K|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),K!==0&&H.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(D){D.setRenderer(this),P=D},this.dispose=function(){e.removeEventListener("webglcontextlost",Ee,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",Fn,!1),te.dispose(),vt.dispose(),bt.dispose(),$.dispose(),ft.dispose(),rt.dispose(),Tt.dispose(),ot.dispose(),gt.dispose(),Dt.dispose(),Dt.removeEventListener("sessionstart",mu),Dt.removeEventListener("sessionend",gu),$i.stop()};function Ee(D){D.preventDefault(),Dr("WebGLRenderer: Context Lost."),E=!0}function me(){Dr("WebGLRenderer: Context Restored."),E=!1;let D=j.autoReset,G=qt.enabled,Q=qt.autoUpdate,K=qt.needsUpdate,Y=qt.type;Vt(),j.autoReset=D,qt.enabled=G,qt.autoUpdate=Q,qt.needsUpdate=K,qt.type=Y}function Fn(D){Kt("WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function jn(D){let G=D.target;G.removeEventListener("dispose",jn),Ip(G)}function Ip(D){Lp(D),$.remove(D)}function Lp(D){let G=$.get(D).programs;G!==void 0&&(G.forEach(function(Q){gt.releaseProgram(Q)}),D.isShaderMaterial&&gt.releaseShaderCache(D))}this.renderBufferDirect=function(D,G,Q,K,Y,At){G===null&&(G=dt);let Ct=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,wt=Dp(D,G,Q,K,Y);R.setMaterial(K,Ct);let Lt=Q.index,Nt=1;if(K.wireframe===!0){if(Lt=it.getWireframeAttribute(Q),Lt===void 0)return;Nt=2}let ne=Q.drawRange,ce=Q.attributes.position,Pt=ne.start*Nt,ge=(ne.start+ne.count)*Nt;At!==null&&(Pt=Math.max(Pt,At.start*Nt),ge=Math.min(ge,(At.start+At.count)*Nt)),Lt!==null?(Pt=Math.max(Pt,0),ge=Math.min(ge,Lt.count)):ce!=null&&(Pt=Math.max(Pt,0),ge=Math.min(ge,ce.count));let He=ge-Pt;if(He<0||He===1/0)return;Tt.setup(Y,K,wt,Q,Lt);let Ie,Ae=xt;if(Lt!==null&&(Ie=mt.get(Lt),Ae=st,Ae.setIndex(Ie)),Y.isMesh)K.wireframe===!0?(R.setLineWidth(K.wireframeLinewidth*Gt()),Ae.setMode(H.LINES)):Ae.setMode(H.TRIANGLES);else if(Y.isLine){let Je=K.linewidth;Je===void 0&&(Je=1),R.setLineWidth(Je*Gt()),Y.isLineSegments?Ae.setMode(H.LINES):Y.isLineLoop?Ae.setMode(H.LINE_LOOP):Ae.setMode(H.LINE_STRIP)}else Y.isPoints?Ae.setMode(H.POINTS):Y.isSprite&&Ae.setMode(H.TRIANGLES);if(Y.isBatchedMesh)if(ee.get("WEBGL_multi_draw"))Ae.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{let Je=Y._multiDrawStarts,Rt=Y._multiDrawCounts,sn=Y._multiDrawCount,le=Lt?mt.get(Lt).bytesPerElement:1,Tn=$.get(K).currentProgram.getUniforms();for(let Kn=0;Kn<sn;Kn++)Tn.setValue(H,"_gl_DrawID",Kn),Ae.render(Je[Kn]/le,Rt[Kn])}else if(Y.isInstancedMesh)Ae.renderInstances(Pt,He,Y.count);else if(Q.isInstancedBufferGeometry){let Je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,Rt=Math.min(Q.instanceCount,Je);Ae.renderInstances(Pt,He,Rt)}else Ae.render(Pt,He)};function pu(D,G,Q,K){P!==null&&D.isNodeMaterial&&P.setObject(K,D),Ft===!0&&zt.setState(D,Q,!1),D.transparent===!0&&D.side===Pe&&D.forceSinglePass===!1?(D.side=Ke,D.needsUpdate=!0,ya(D,G,K),D.side=Cn,D.needsUpdate=!0,ya(D,G,K),D.side=Pe):ya(D,G,K)}this.compile=function(D,G,Q=null){Q===null&&(Q=D),P!==null&&P.renderStart(D,G,Q),w=bt.get(Q),w.init(G),b.push(w),Q.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),D!==Q&&D.traverseVisible(function(Y){Y.isLight&&Y.layers.test(G.layers)&&(w.pushLight(Y),Y.castShadow&&w.pushShadow(Y))}),w.setupLights(),P!==null&&P.updateLights(w.state.lightsArray),Qt=this.localClippingEnabled,Ft=zt.init(this.clippingPlanes,Qt),Ft===!0&&zt.setGlobalState(this.clippingPlanes,G),P!==null&&qt.render(w.state.shadowsArray,Q,G);let K=new Set;return D.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;let At=Y.material;if(At)if(Array.isArray(At))for(let Ct=0;Ct<At.length;Ct++){let wt=At[Ct];pu(wt,Q,G,Y),K.add(wt)}else pu(At,Q,G,Y),K.add(At)}),w=b.pop(),P!==null&&P.renderEnd(),K},this.compileAsync=function(D,G,Q=null){let K=this.compile(D,G,Q);return new Promise(Y=>{function At(){if(K.forEach(function(Ct){let Lt=$.get(Ct).currentProgram;(Lt===void 0||Lt.isReady())&&K.delete(Ct)}),K.size===0){Y(D);return}setTimeout(At,10)}ee.get("KHR_parallel_shader_compile")!==null?At():setTimeout(At,10)})};let Hc=null;function Pp(D){Hc&&Hc(D)}function mu(){$i.stop()}function gu(){$i.start()}let $i=new gf;$i.setAnimationLoop(Pp),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(D){Hc=D,Dt.setAnimationLoop(D),D===null?$i.stop():$i.start()},Dt.addEventListener("sessionstart",mu),Dt.addEventListener("sessionend",gu),this.render=function(D,G){if(G!==void 0&&G.isCamera!==!0){Kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;P!==null&&P.renderStart(D,G);let Q=Dt.enabled===!0&&Dt.isPresenting===!0,K=S!==null&&(k===null||Q)&&S.begin(A,k);if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),G.parent===null&&G.matrixWorldAutoUpdate===!0&&G.updateMatrixWorld(),Dt.enabled===!0&&Dt.isPresenting===!0&&(S===null||S.isCompositing()===!1)&&(Dt.cameraAutoUpdate===!0&&Dt.updateCamera(G),G=Dt.getCamera()),D.isScene===!0&&D.onBeforeRender(A,D,G,k),w=bt.get(D,b.length),w.init(G),w.state.textureUnits=et.getTextureUnits(),b.push(w),$t.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),Et.setFromProjectionMatrix($t,On,G.reversedDepth),Qt=this.localClippingEnabled,Ft=zt.init(this.clippingPlanes,Qt),v=vt.get(D,x.length),v.init(),x.push(v),Dt.enabled===!0&&Dt.isPresenting===!0){let Ct=A.xr.getDepthSensingMesh();Ct!==null&&Gc(Ct,G,-1/0,A.sortObjects)}Gc(D,G,0,A.sortObjects),v.finish(),P!==null&&P.updateLights(w.state.lightsArray),A.sortObjects===!0&&v.sort(ct,_t),pt=Dt.enabled===!1||Dt.isPresenting===!1||Dt.hasDepthSensing()===!1,pt&&te.addToRenderList(v,D),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ft===!0&&zt.beginShadows();let Y=w.state.shadowsArray;if(qt.render(Y,D,G),Ft===!0&&zt.endShadows(),(K&&S.hasRenderPass())===!1){let Ct=v.opaque,wt=v.transmissive;if(w.setupLights(),G.isArrayCamera){let Lt=G.cameras;if(wt.length>0)for(let Nt=0,ne=Lt.length;Nt<ne;Nt++){let ce=Lt[Nt];xu(Ct,wt,D,ce)}pt&&te.render(D);for(let Nt=0,ne=Lt.length;Nt<ne;Nt++){let ce=Lt[Nt];bu(v,D,ce,ce.viewport)}}else wt.length>0&&xu(Ct,wt,D,G),pt&&te.render(D),bu(v,D,G)}k!==null&&L===0&&(et.updateMultisampleRenderTarget(k),et.updateRenderTargetMipmap(k)),K&&S.end(A),D.isScene===!0&&D.onAfterRender(A,D,G),Tt.resetDefaultState(),U=-1,B=null,b.pop(),b.length>0?(w=b[b.length-1],et.setTextureUnits(w.state.textureUnits),Ft===!0&&zt.setGlobalState(A.clippingPlanes,w.state.camera)):w=null,x.pop(),x.length>0?v=x[x.length-1]:v=null,P!==null&&P.renderEnd()};function Gc(D,G,Q,K){if(D.visible===!1)return;if(D.layers.test(G.layers)){if(D.isGroup)Q=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(G);else if(D.isLightProbeGrid)w.pushLightProbeGrid(D);else if(D.isLight)w.pushLight(D),D.castShadow&&w.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||D.intersectsFrustum(Et)){K&&V.setFromMatrixPosition(D.matrixWorld).applyMatrix4($t);let Ct=rt.update(D),wt=D.material;wt.visible&&v.push(D,Ct,wt,Q,V.z,null,G)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||D.intersectsFrustum(Et))){let Ct=rt.update(D),wt=D.material;if(K&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),V.copy(D.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),V.copy(Ct.boundingSphere.center)),V.applyMatrix4(D.matrixWorld).applyMatrix4($t)),Array.isArray(wt)){let Lt=Ct.groups;for(let Nt=0,ne=Lt.length;Nt<ne;Nt++){let ce=Lt[Nt],Pt=wt[ce.materialIndex];Pt&&Pt.visible&&v.push(D,Ct,Pt,Q,V.z,ce,G)}}else wt.visible&&v.push(D,Ct,wt,Q,V.z,null,G)}}let At=D.children;for(let Ct=0,wt=At.length;Ct<wt;Ct++)Gc(At[Ct],G,Q,K)}function bu(D,G,Q,K){let{opaque:Y,transmissive:At,transparent:Ct}=D;w.setupLightsView(Q),Ft===!0&&zt.setGlobalState(A.clippingPlanes,Q),K&&R.viewport(z.copy(K)),Y.length>0&&xa(Y,G,Q),At.length>0&&xa(At,G,Q),Ct.length>0&&xa(Ct,G,Q),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function xu(D,G,Q,K){if((Q.isScene===!0?Q.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[K.id]===void 0){let Pt=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[K.id]=new on(1,1,{generateMipmaps:!0,type:Pt?Wn:gn,minFilter:mn,samples:Math.max(4,O.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:re.workingColorSpace})}let At=w.state.transmissionRenderTarget[K.id],Ct=K.viewport||z;At.setSize(Ct.z*A.transmissionResolutionScale,Ct.w*A.transmissionResolutionScale);let wt=A.getRenderTarget(),Lt=A.getActiveCubeFace(),Nt=A.getActiveMipmapLevel();A.setRenderTarget(At),A.getClearColor(at),nt=A.getClearAlpha(),nt<1&&A.setClearColor(16777215,.5),A.clear(),pt&&te.render(Q);let ne=A.toneMapping;A.toneMapping=Gn;let ce=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),w.setupLightsView(K),Ft===!0&&zt.setGlobalState(A.clippingPlanes,K),xa(D,Q,K),et.updateMultisampleRenderTarget(At),et.updateRenderTargetMipmap(At),ee.has("WEBGL_multisampled_render_to_texture")===!1){let Pt=!1;for(let ge=0,He=G.length;ge<He;ge++){let Ie=G[ge],{object:Ae,geometry:Je,material:Rt,group:sn}=Ie;if(Rt.side===Pe&&Ae.layers.test(K.layers)){let le=Rt.side;Rt.side=Ke,Rt.needsUpdate=!0,yu(Ae,Q,K,Je,Rt,sn),Rt.side=le,Rt.needsUpdate=!0,Pt=!0}}Pt===!0&&(et.updateMultisampleRenderTarget(At),et.updateRenderTargetMipmap(At))}A.setRenderTarget(wt,Lt,Nt),A.setClearColor(at,nt),ce!==void 0&&(K.viewport=ce),A.toneMapping=ne}function xa(D,G,Q){let K=G.isScene===!0?G.overrideMaterial:null;for(let Y=0,At=D.length;Y<At;Y++){let Ct=D[Y],{object:wt,geometry:Lt,group:Nt}=Ct,ne=Ct.material;ne.allowOverride===!0&&K!==null&&(ne=K),wt.layers.test(Q.layers)&&yu(wt,G,Q,Lt,ne,Nt)}}function yu(D,G,Q,K,Y,At){P!==null&&Y.isNodeMaterial&&P.setObject(D,Y),D.onBeforeRender(A,G,Q,K,Y,At),D.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),Y.onBeforeRender(A,G,Q,K,D,At),Y.transparent===!0&&Y.side===Pe&&Y.forceSinglePass===!1?(Y.side=Ke,Y.needsUpdate=!0,A.renderBufferDirect(Q,G,K,Y,D,At),Y.side=Cn,Y.needsUpdate=!0,A.renderBufferDirect(Q,G,K,Y,D,At),Y.side=Pe):A.renderBufferDirect(Q,G,K,Y,D,At),D.onAfterRender(A,G,Q,K,Y,At)}function ya(D,G,Q){G.isScene!==!0&&(G=dt);let K=$.get(D),Y=w.state.lights,At=w.state.shadowsArray,Ct=Y.state.version,wt=gt.getParameters(D,Y.state,At,G,Q,w.state.lightProbeGridArray),Lt=gt.getProgramCacheKey(wt),Nt=K.programs;K.environment=D.isMeshStandardMaterial||D.isMeshLambertMaterial||D.isMeshPhongMaterial?G.environment:null,K.fog=G.fog;let ne=D.isMeshStandardMaterial||D.isMeshLambertMaterial&&!D.envMap||D.isMeshPhongMaterial&&!D.envMap;K.envMap=ft.get(D.envMap||K.environment,ne),K.envMapRotation=K.environment!==null&&D.envMap===null?G.environmentRotation:D.envMapRotation,Nt===void 0&&(D.addEventListener("dispose",jn),Nt=new Map,K.programs=Nt);let ce=Nt.get(Lt);if(ce!==void 0){if(K.currentProgram===ce&&K.lightsStateVersion===Ct)return vu(D,wt),ce}else wt.uniforms=gt.getUniforms(D),P!==null&&D.isNodeMaterial&&P.build(D,Q,wt),D.onBeforeCompile(wt,A),ce=gt.acquireProgram(wt,Lt),Nt.set(Lt,ce),K.uniforms=wt.uniforms;let Pt=K.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Pt.clippingPlanes=zt.uniform),vu(D,wt),K.needsLights=Up(D),K.lightsStateVersion=Ct,K.needsLights&&(Pt.ambientLightColor.value=Y.state.ambient,Pt.lightProbe.value=Y.state.probe,Pt.sunLights.value=Y.state.sun,Pt.sunLightShadows.value=Y.state.sunShadow,Pt.directionalLights.value=Y.state.directional,Pt.directionalLightShadows.value=Y.state.directionalShadow,Pt.spotLights.value=Y.state.spot,Pt.spotLightShadows.value=Y.state.spotShadow,Pt.rectAreaLights.value=Y.state.rectArea,Pt.ltc_1.value=Y.state.rectAreaLTC1,Pt.ltc_2.value=Y.state.rectAreaLTC2,Pt.pointLights.value=Y.state.point,Pt.pointLightShadows.value=Y.state.pointShadow,Pt.hemisphereLights.value=Y.state.hemi,Pt.sunShadowMatrix.value=Y.state.sunShadowMatrix,Pt.sunShadowCascade.value=Y.state.sunShadowCascade,Pt.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,Pt.spotLightMatrix.value=Y.state.spotLightMatrix,Pt.spotLightMap.value=Y.state.spotLightMap,Pt.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.lightProbeGrid=w.state.lightProbeGridArray.length>0,K.currentProgram=ce,K.uniformsList=null,ce}function _u(D){if(D.uniformsList===null){let G=D.currentProgram.getUniforms();D.uniformsList=hr.seqWithValue(G.seq,D.uniforms)}return D.uniformsList}function vu(D,G){let Q=$.get(D);Q.outputColorSpace=G.outputColorSpace,Q.batching=G.batching,Q.batchingColor=G.batchingColor,Q.instancing=G.instancing,Q.instancingColor=G.instancingColor,Q.instancingMorph=G.instancingMorph,Q.skinning=G.skinning,Q.morphTargets=G.morphTargets,Q.morphNormals=G.morphNormals,Q.morphColors=G.morphColors,Q.morphTargetsCount=G.morphTargetsCount,Q.numClippingPlanes=G.numClippingPlanes,Q.numIntersection=G.numClipIntersection,Q.vertexAlphas=G.vertexAlphas,Q.vertexTangents=G.vertexTangents,Q.toneMapping=G.toneMapping}function Fp(D,G){if(D.length===0)return null;if(D.length===1)return D[0].texture!==null?D[0]:null;y.setFromMatrixPosition(G.matrixWorld);for(let Q=0,K=D.length;Q<K;Q++){let Y=D[Q];if(Y.texture!==null&&Y.boundingBox.containsPoint(y))return Y}return null}function Dp(D,G,Q,K,Y){G.isScene!==!0&&(G=dt),et.resetTextureUnits();let At=G.fog,Ct=K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial?G.environment:null,wt=k===null?A.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:re.workingColorSpace,Lt=K.isMeshStandardMaterial||K.isMeshLambertMaterial&&!K.envMap||K.isMeshPhongMaterial&&!K.envMap,Nt=ft.get(K.envMap||Ct,Lt),ne=K.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,ce=!!Q.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),Pt=!!Q.morphAttributes.position,ge=!!Q.morphAttributes.normal,He=!!Q.morphAttributes.color,Ie=Gn;K.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ie=A.toneMapping);let Ae=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,Je=Ae!==void 0?Ae.length:0,Rt=$.get(K),sn=w.state.lights;if(Ft===!0&&(Qt===!0||D!==B)){let Re=D===B&&K.id===U;zt.setState(K,D,Re)}let le=!1;K.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==sn.state.version||Rt.outputColorSpace!==wt||Y.isBatchedMesh&&Rt.batching===!1||!Y.isBatchedMesh&&Rt.batching===!0||Y.isBatchedMesh&&Rt.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Rt.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Rt.instancing===!1||!Y.isInstancedMesh&&Rt.instancing===!0||Y.isSkinnedMesh&&Rt.skinning===!1||!Y.isSkinnedMesh&&Rt.skinning===!0||Y.isInstancedMesh&&Rt.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Rt.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Rt.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Rt.instancingMorph===!1&&Y.morphTexture!==null||Rt.envMap!==Nt||K.fog===!0&&Rt.fog!==At||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==zt.numPlanes||Rt.numIntersection!==zt.numIntersection)||Rt.vertexAlphas!==ne||Rt.vertexTangents!==ce||Rt.morphTargets!==Pt||Rt.morphNormals!==ge||Rt.morphColors!==He||Rt.toneMapping!==Ie||Rt.morphTargetsCount!==Je||!!Rt.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(le=!0):(le=!0,Rt.__version=K.version);let Tn=Rt.currentProgram;le===!0&&(Tn=ya(K,G,Y),P&&K.isNodeMaterial&&P.onUpdateProgram(K,Tn,Rt));let Kn=!1,Ti=!1,Ss=!1,Se=Tn.getUniforms(),Ne=Rt.uniforms;if(R.useProgram(Tn.program)&&(Kn=!0,Ti=!0,Ss=!0),K.id!==U&&(U=K.id,Ti=!0),Rt.needsLights){let Re=Fp(w.state.lightProbeGridArray,Y);Rt.lightProbeGrid!==Re&&(Rt.lightProbeGrid=Re,Ti=!0)}if(Kn||B!==D){R.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),Se.setValue(H,"projectionMatrix",D.projectionMatrix),Se.setValue(H,"viewMatrix",D.matrixWorldInverse);let Ri=Se.map.cameraPosition;Ri!==void 0&&Ri.setValue(H,lt.setFromMatrixPosition(D.matrixWorld)),O.logarithmicDepthBuffer&&Se.setValue(H,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Se.setValue(H,"isOrthographic",D.isOrthographicCamera===!0),B!==D&&(B=D,Ti=!0,Ss=!0)}if(Rt.needsLights&&(sn.state.sunShadowMap.length>0&&Se.setValue(H,"sunShadowMap",sn.state.sunShadowMap,et),sn.state.directionalShadowMap.length>0&&Se.setValue(H,"directionalShadowMap",sn.state.directionalShadowMap,et),sn.state.spotShadowMap.length>0&&Se.setValue(H,"spotShadowMap",sn.state.spotShadowMap,et),sn.state.pointShadowMap.length>0&&Se.setValue(H,"pointShadowMap",sn.state.pointShadowMap,et)),Y.isSkinnedMesh){Se.setOptional(H,Y,"bindMatrix"),Se.setOptional(H,Y,"bindMatrixInverse");let Re=Y.skeleton;Re&&(Re.boneTexture===null&&Re.computeBoneTexture(),Se.setValue(H,"boneTexture",Re.boneTexture,et))}Y.isBatchedMesh&&(Se.setOptional(H,Y,"batchingTexture"),Se.setValue(H,"batchingTexture",Y._matricesTexture,et),Se.setOptional(H,Y,"batchingIdTexture"),Se.setValue(H,"batchingIdTexture",Y._indirectTexture,et),Se.setOptional(H,Y,"batchingColorTexture"),Y._colorsTexture!==null&&Se.setValue(H,"batchingColorTexture",Y._colorsTexture,et));let Ei=Q.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&W.update(Y,Q,Tn),(Ti||Rt.receiveShadow!==Y.receiveShadow)&&(Rt.receiveShadow=Y.receiveShadow,Se.setValue(H,"receiveShadow",Y.receiveShadow)),(K.isMeshStandardMaterial||K.isMeshLambertMaterial||K.isMeshPhongMaterial)&&K.envMap===null&&G.environment!==null&&(Ne.envMapIntensity.value=G.environmentIntensity),Ne.dfgLUT!==void 0&&(Ne.dfgLUT.value=Cy()),Ti){if(Se.setValue(H,"toneMappingExposure",A.toneMappingExposure),Rt.needsLights&&Np(Ne,Ss),At&&K.fog===!0&&Bt.refreshFogUniforms(Ne,At),Bt.refreshMaterialUniforms(Ne,K,J,X,w.state.transmissionRenderTarget[D.id]),Rt.needsLights&&Rt.lightProbeGrid){let Re=Rt.lightProbeGrid;Ne.probesSH.value=Re.texture,Ne.probesMin.value.copy(Re.boundingBox.min),Ne.probesMax.value.copy(Re.boundingBox.max),Ne.probesResolution.value.copy(Re.resolution)}hr.upload(H,_u(Rt),Ne,et)}if(K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(hr.upload(H,_u(Rt),Ne,et),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Se.setValue(H,"center",Y.center),Se.setValue(H,"modelViewMatrix",Y.modelViewMatrix),Se.setValue(H,"normalMatrix",Y.normalMatrix),Se.setValue(H,"modelMatrix",Y.matrixWorld),K.uniformsGroups!==void 0){let Re=K.uniformsGroups;for(let Ri=0,ws=Re.length;Ri<ws;Ri++){let Su=Re[Ri];ot.update(Su,Tn),ot.bind(Su,Tn)}}return Tn}function Np(D,G){D.ambientLightColor.needsUpdate=G,D.lightProbe.needsUpdate=G,D.sunLights.needsUpdate=G,D.sunLightShadows.needsUpdate=G,D.directionalLights.needsUpdate=G,D.directionalLightShadows.needsUpdate=G,D.pointLights.needsUpdate=G,D.pointLightShadows.needsUpdate=G,D.spotLights.needsUpdate=G,D.spotLightShadows.needsUpdate=G,D.rectAreaLights.needsUpdate=G,D.hemisphereLights.needsUpdate=G}function Up(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(D,G,Q){let K=$.get(D);K.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),$.get(D.texture).__webglTexture=G,$.get(D.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:Q,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,G){let Q=$.get(D);Q.__webglFramebuffer=G,Q.__useDefaultFramebuffer=G===void 0},this.setRenderTarget=function(D,G=0,Q=0){k=D,C=G,L=Q;let K=null,Y=!1,At=!1;if(D){let wt=$.get(D);if(wt.__useDefaultFramebuffer!==void 0){R.bindFramebuffer(H.FRAMEBUFFER,wt.__webglFramebuffer),z.copy(D.viewport),Z.copy(D.scissor),tt=D.scissorTest,R.viewport(z),R.scissor(Z),R.setScissorTest(tt),U=-1;return}else if(wt.__webglFramebuffer===void 0)et.setupRenderTarget(D);else if(wt.__hasExternalTextures)et.rebindTextures(D,$.get(D.texture).__webglTexture,$.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){let ne=D.depthTexture;if(wt.__boundDepthTexture!==ne){if(ne!==null&&$.has(ne)&&(D.width!==ne.image.width||D.height!==ne.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");et.setupDepthRenderbuffer(D)}}let Lt=D.texture;(Lt.isData3DTexture||Lt.isDataArrayTexture||Lt.isCompressedArrayTexture)&&(At=!0);let Nt=$.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Nt[G])?K=Nt[G][Q]:K=Nt[G],Y=!0):D.samples>0&&et.useMultisampledRTT(D)===!1?K=$.get(D).__webglMultisampledFramebuffer:Array.isArray(Nt)?K=Nt[Q]:K=Nt,z.copy(D.viewport),Z.copy(D.scissor),tt=D.scissorTest}else z.copy(ht).multiplyScalar(J).floor(),Z.copy(It).multiplyScalar(J).floor(),tt=Yt;if(Q!==0&&(K=F),R.bindFramebuffer(H.FRAMEBUFFER,K)&&R.drawBuffers(D,K),R.viewport(z),R.scissor(Z),R.setScissorTest(tt),Y){let wt=$.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+G,wt.__webglTexture,Q)}else if(At){let wt=G;for(let Lt=0;Lt<D.textures.length;Lt++){let Nt=$.get(D.textures[Lt]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+Lt,Nt.__webglTexture,Q,wt)}}else if(D!==null&&Q!==0){let wt=$.get(D.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,wt.__webglTexture,Q)}U=-1};function Mu(D){let G=$.get(D);return(G.__readFormat!==D.format||G.__readType!==D.type)&&(G.__readFormat=D.format,G.__readType=D.type,G.__formatReadable=O.textureFormatReadable(D.format),G.__typeReadable=O.textureTypeReadable(D.type)),G}this.readRenderTargetPixels=function(D,G,Q,K,Y,At,Ct,wt=0){if(!(D&&D.isWebGLRenderTarget)){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=$.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt){R.bindFramebuffer(H.FRAMEBUFFER,Lt);try{let Nt=D.textures[wt],ne=Nt.format,ce=Nt.type;D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+wt);let Pt=Mu(Nt);if(Pt.__formatReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Pt.__typeReadable===!1){Kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}G>=0&&G<=D.width-K&&Q>=0&&Q<=D.height-Y&&H.readPixels(G,Q,K,Y,yt.convert(ne),yt.convert(ce),At)}finally{let Nt=k!==null?$.get(k).__webglFramebuffer:null;R.bindFramebuffer(H.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(D,G,Q,K,Y,At,Ct,wt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Lt=$.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Ct!==void 0&&(Lt=Lt[Ct]),Lt)if(G>=0&&G<=D.width-K&&Q>=0&&Q<=D.height-Y){R.bindFramebuffer(H.FRAMEBUFFER,Lt);let Nt=D.textures[wt],ne=Nt.format,ce=Nt.type;D.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+wt);let Pt=Mu(Nt);if(Pt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Pt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ge=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,ge),H.bufferData(H.PIXEL_PACK_BUFFER,At.byteLength,H.STREAM_READ),H.readPixels(G,Q,K,Y,yt.convert(ne),yt.convert(ce),0),H.bindBuffer(H.PIXEL_PACK_BUFFER,null);let He=k!==null?$.get(k).__webglFramebuffer:null;R.bindFramebuffer(H.FRAMEBUFFER,He);let Ie=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Gd(H,Ie,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,ge),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,At),H.bindBuffer(H.PIXEL_PACK_BUFFER,null),H.deleteBuffer(ge),H.deleteSync(Ie),At}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,G=null,Q=0){let K=Math.pow(2,-Q),Y=Math.floor(D.image.width*K),At=Math.floor(D.image.height*K),Ct=G!==null?G.x:0,wt=G!==null?G.y:0;et.setTexture2D(D,0),H.copyTexSubImage2D(H.TEXTURE_2D,Q,0,0,Ct,wt,Y,At),R.unbindTexture()},this.copyTextureToTexture=function(D,G,Q=null,K=null,Y=0,At=0){let Ct,wt,Lt,Nt,ne,ce,Pt,ge,He,Ie=D.isCompressedTexture?D.mipmaps[At]:D.image;if(Q!==null)Ct=Q.max.x-Q.min.x,wt=Q.max.y-Q.min.y,Lt=Q.isBox3?Q.max.z-Q.min.z:1,Nt=Q.min.x,ne=Q.min.y,ce=Q.isBox3?Q.min.z:0;else{let Ne=Math.pow(2,-Y);Ct=Math.floor(Ie.width*Ne),wt=Math.floor(Ie.height*Ne),D.isDataArrayTexture?Lt=Ie.depth:D.isData3DTexture?Lt=Math.floor(Ie.depth*Ne):Lt=1,Nt=0,ne=0,ce=0}K!==null?(Pt=K.x,ge=K.y,He=K.z):(Pt=0,ge=0,He=0);let Ae=yt.convert(G.format),Je=yt.convert(G.type),Rt;G.isData3DTexture?(et.setTexture3D(G,0),Rt=H.TEXTURE_3D):G.isDataArrayTexture||G.isCompressedArrayTexture?(et.setTexture2DArray(G,0),Rt=H.TEXTURE_2D_ARRAY):(et.setTexture2D(G,0),Rt=H.TEXTURE_2D),R.activeTexture(H.TEXTURE0),R.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,G.flipY),R.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,G.premultiplyAlpha),R.pixelStorei(H.UNPACK_ALIGNMENT,G.unpackAlignment);let sn=R.getParameter(H.UNPACK_ROW_LENGTH),le=R.getParameter(H.UNPACK_IMAGE_HEIGHT),Tn=R.getParameter(H.UNPACK_SKIP_PIXELS),Kn=R.getParameter(H.UNPACK_SKIP_ROWS),Ti=R.getParameter(H.UNPACK_SKIP_IMAGES);R.pixelStorei(H.UNPACK_ROW_LENGTH,Ie.width),R.pixelStorei(H.UNPACK_IMAGE_HEIGHT,Ie.height),R.pixelStorei(H.UNPACK_SKIP_PIXELS,Nt),R.pixelStorei(H.UNPACK_SKIP_ROWS,ne),R.pixelStorei(H.UNPACK_SKIP_IMAGES,ce);let Ss=D.isDataArrayTexture||D.isData3DTexture,Se=G.isDataArrayTexture||G.isData3DTexture;if(D.isDepthTexture){let Ne=$.get(D),Ei=$.get(G),Re=$.get(Ne.__renderTarget),Ri=$.get(Ei.__renderTarget);R.bindFramebuffer(H.READ_FRAMEBUFFER,Re.__webglFramebuffer),R.bindFramebuffer(H.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let ws=0;ws<Lt;ws++)Ss&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$.get(D).__webglTexture,Y,ce+ws),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,$.get(G).__webglTexture,At,He+ws)),H.blitFramebuffer(Nt,ne,Ct,wt,Pt,ge,Ct,wt,H.DEPTH_BUFFER_BIT,H.NEAREST);R.bindFramebuffer(H.READ_FRAMEBUFFER,null),R.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Y!==0||D.isRenderTargetTexture||$.has(D)){let Ne=$.get(D),Ei=$.get(G);R.bindFramebuffer(H.READ_FRAMEBUFFER,N),R.bindFramebuffer(H.DRAW_FRAMEBUFFER,I);for(let Re=0;Re<Lt;Re++)Ss?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ne.__webglTexture,Y,ce+Re):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ne.__webglTexture,Y),Se?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,Ei.__webglTexture,At,He+Re):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Ei.__webglTexture,At),Y!==0?H.blitFramebuffer(Nt,ne,Ct,wt,Pt,ge,Ct,wt,H.COLOR_BUFFER_BIT,H.NEAREST):Se?H.copyTexSubImage3D(Rt,At,Pt,ge,He+Re,Nt,ne,Ct,wt):H.copyTexSubImage2D(Rt,At,Pt,ge,Nt,ne,Ct,wt);R.bindFramebuffer(H.READ_FRAMEBUFFER,null),R.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Se?D.isDataTexture||D.isData3DTexture?H.texSubImage3D(Rt,At,Pt,ge,He,Ct,wt,Lt,Ae,Je,Ie.data):G.isCompressedArrayTexture?H.compressedTexSubImage3D(Rt,At,Pt,ge,He,Ct,wt,Lt,Ae,Ie.data):H.texSubImage3D(Rt,At,Pt,ge,He,Ct,wt,Lt,Ae,Je,Ie):D.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,At,Pt,ge,Ct,wt,Ae,Je,Ie.data):D.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,At,Pt,ge,Ie.width,Ie.height,Ae,Ie.data):H.texSubImage2D(H.TEXTURE_2D,At,Pt,ge,Ct,wt,Ae,Je,Ie);R.pixelStorei(H.UNPACK_ROW_LENGTH,sn),R.pixelStorei(H.UNPACK_IMAGE_HEIGHT,le),R.pixelStorei(H.UNPACK_SKIP_PIXELS,Tn),R.pixelStorei(H.UNPACK_SKIP_ROWS,Kn),R.pixelStorei(H.UNPACK_SKIP_IMAGES,Ti),At===0&&G.generateMipmaps&&H.generateMipmap(Rt),R.unbindTexture()},this.initRenderTarget=function(D){$.get(D).__webglFramebuffer===void 0&&et.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?et.setTextureCube(D,0):D.isData3DTexture?et.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?et.setTexture2DArray(D,0):et.setTexture2D(D,0),R.unbindTexture()},this.resetState=function(){C=0,L=0,k=null,R.reset(),Tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=re._getDrawingBufferColorSpace(t),e.unpackColorSpace=re._getUnpackColorSpace()}};var Be=56,ln=40,Sf=(i,t)=>Math.sign(i)*Math.pow(Math.abs(i),t),gc=class{constructor(t,e,n,s){this.body=t;this.skeleton=e;this.root=s;let r=n.length/3,a=1e9,o=-1e9;for(let x=0;x<r;x++){let b=n[x*3+1];b<a&&(a=b),b>o&&(o=b)}this.minY=a,this.Hh=o-a,this.yTop=a+.056*this.Hh;for(let x of[1,-1]){let b=[];for(let S=0;S<r;S++)n[S*3+1]<this.yTop&&Math.sign(n[S*3])===x&&Math.abs(n[S*3])>.012&&b.push(S);this.feet.push({side:x,idx:Int32Array.from(b)})}let c=Be*(ln+1),l=c*2;this.pos=new Float32Array(l*3),this.col=new Float32Array(l*3),this.nrm=new Float32Array(l*3),this.uv=new Float32Array(l*2);let u=[];for(let x=0;x<2;x++)for(let b=0;b<Be-1;b++)for(let S=0;S<ln;S++){let A=x*c+b*(ln+1)+S,E=A+1,P=A+ln+1,F=P+1;u.push(A,P,E,E,P,F)}for(let x=0;x<2;x++)for(let b=0;b<Be;b++)for(let S=0;S<=ln;S++){let A=x*c+b*(ln+1)+S;this.uv[A*2]=b/(Be-1),this.uv[A*2+1]=S/ln}this.geo.setAttribute("position",new Xt(this.pos,3)),this.geo.setAttribute("normal",new Xt(this.nrm,3)),this.geo.setAttribute("color",new Xt(this.col,3)),this.geo.setAttribute("uv",new Xt(this.uv,2)),this.geo.setIndex(u);let h=document.createElement("canvas");h.width=1024,h.height=256;let d=h.getContext("2d");d.fillStyle="#fff",d.fillRect(0,0,1024,256);let f=x=>x*1024,m=x=>(1-x)*256;d.lineCap="round",d.strokeStyle="#a8a299",d.lineWidth=5;for(let x of[.165,.335])d.beginPath(),d.moveTo(f(.27),m(x)),d.lineTo(f(.64),m(x)),d.stroke();d.lineWidth=9,d.strokeStyle="#8f897f";for(let x=0;x<6;x++){let b=.3+.058*x;d.beginPath(),d.moveTo(f(b),m(.19)),d.lineTo(f(b),m(.31)),d.stroke()}d.lineWidth=6,d.strokeStyle="#a39d93",d.beginPath(),d.moveTo(f(.8),m(.02)),d.quadraticCurveTo(f(.77),m(.25),f(.8),m(.48)),d.stroke(),d.strokeStyle="#b3ada3",d.lineWidth=5,d.beginPath(),d.moveTo(f(.02),m(.36)),d.lineTo(f(.3),m(.36)),d.stroke();let _=new Gr(h);_.colorSpace=we,_.anisotropy=4;let p=new Ve({vertexColors:!0,map:_,roughness:.68,metalness:0});this.mesh=new fn(this.geo,p),this.mesh.name="shoes",this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.update(n,1);let g=t.geometry,T=g.getAttribute("skinIndex"),M=g.getAttribute("skinWeight"),y=x=>new x.array.constructor(l*4),v=y(T),w=y(M);for(let x=0;x<2;x++){let b=this.feet[x].idx;for(let S=x*c;S<(x+1)*c;S++){let A=1e9,E=b[0],P=this.pos[S*3],F=this.pos[S*3+1],N=this.pos[S*3+2];for(let I=0;I<b.length;I++){let C=b[I]*3,L=(n[C]-P)**2+(n[C+1]-F)**2+(n[C+2]-N)**2;L<A&&(A=L,E=b[I])}for(let I=0;I<4;I++)v[S*4+I]=T.array[E*4+I],w[S*4+I]=M.array[E*4+I]}}this.geo.setAttribute("skinIndex",new Xt(v,4,T.normalized)),this.geo.setAttribute("skinWeight",new Xt(w,4,M.normalized)),this.mesh.bind(e,t.bindMatrix),t.parent.add(this.mesh)}body;skeleton;root;mesh;soleH=.02;geo=new Te;feet=[];pos;col;nrm;uv;minY=0;Hh=1.6;yTop=0;update(t,e){let n=Be*(ln+1),s=this.soleH=.0125*this.Hh/1.6*1.6*(e||1);for(let o=0;o<2;o++){let c=this.feet[o].idx;if(!c.length)continue;let l=0,u=0,h=0;for(let C=0;C<c.length;C++){let L=c[C]*3;t[L+1]<this.minY+.03&&(l+=t[L],u+=t[L+2],h++)}l/=Math.max(1,h),u/=Math.max(1,h);let d=0,f=0,m=0;for(let C=0;C<c.length;C++){let L=c[C]*3;if(t[L+1]<this.minY+.03){let k=t[L]-l,U=t[L+2]-u;d+=k*k,f+=U*U,m+=k*U}}let _=.5*Math.atan2(2*m,d-f),p=Math.cos(_),g=Math.sin(_);g<0&&(p=-p,g=-g);let T=-g,M=p,y=1e9,v=-1e9,w=new Float32Array(c.length),x=new Float32Array(c.length);for(let C=0;C<c.length;C++){let L=c[C]*3,k=t[L]-l,U=t[L+2]-u;w[C]=k*p+U*g,x[C]=k*T+U*M,w[C]<y&&(y=w[C]),w[C]>v&&(v=w[C])}y-=.007*e,v+=.012*e;let b=v-y,S=new Float32Array(Be).fill(-1),A=new Float32Array(Be).fill(1e9),E=new Float32Array(Be).fill(-1e9);for(let C=0;C<c.length;C++){let L=(w[C]-y)/b,k=Math.max(0,Math.min(Be-1,Math.round(L*(Be-1))));for(let U=Math.max(0,k-1);U<=Math.min(Be-1,k+1);U++){let B=t[c[C]*3+1];B>S[U]&&(S[U]=B),x[C]<A[U]&&(A[U]=x[C]),x[C]>E[U]&&(E[U]=x[C])}}let P=(C,L)=>{for(let k=0;k<Be;k++)if(L(C[k])){let U=k-1,B=k+1;for(;U>=0&&L(C[U]);)U--;for(;B<Be&&L(C[B]);)B++;C[k]=U>=0&&B<Be?(C[U]+C[B])/2:U>=0?C[U]:B<Be?C[B]:0}};P(S,C=>C<0),P(A,C=>C>1e8),P(E,C=>C<-1e8);let F=C=>{for(let L=0;L<4;L++){let k=C.slice();for(let U=1;U<Be-1;U++)k[U]=(C[U-1]+2*C[U]+C[U+1])/4;C.set(k)}};F(S),F(A),F(E);{let C=Math.round(.7*(Be-1)),L=(E[C]-A[C])/2;for(let k=C;k<Be;k++){let U=(A[k]+E[k])/2,B=Math.max((E[k]-A[k])/2,.88*L);A[k]=U-B,E[k]=U+B}}let N=this.minY-s,I=this.yTop+.004*e;for(let C=0;C<Be;C++){let L=C/(Be-1),k=y+L*b,U=(A[C]+E[C])/2,B=Math.max(.02,(E[C]-A[C])/2+.008*e),z=Math.min(S[C]+.008*e,I);L>.74&&(z=Math.max(z,S[C]+.013*e));let Z=L>.84?Math.sqrt(Math.max(0,1-((L-.84)/.16)**2)):1,tt=L<.07?Math.sqrt(Math.max(0,1-((.07-L)/.07)**2)):1,at=Math.min(Z,tt),nt=B*Math.max(at,0),ut=Math.max(.002,(z-N)*(.25+.75*at));for(let X=0;X<=ln;X++){let J=X%ln/ln*Math.PI*2,ct=Math.cos(J),_t=Math.sin(J),ht=(1+Sf(_t,2/3.2))/2,It=U+nt*Sf(ct,2/2.7);ht<.32&&(It+=Math.sign(ct)*.004*e*(1-ht/.32)*at);let Yt=N+ut*ht,Et=o*n+C*(ln+1)+X;this.pos[Et*3]=l+p*k+T*It,this.pos[Et*3+1]=Yt,this.pos[Et*3+2]=u+g*k+M*It;let Qt=Yt<this.minY+.015*e?.34:.8;this.col[Et*3]=Qt,this.col[Et*3+1]=Qt*.985,this.col[Et*3+2]=Qt*.96}}}let r=this.geo.getAttribute("position");r.needsUpdate=!0,this.geo.getAttribute("color").needsUpdate=!0,this.geo.computeVertexNormals();let a=this.geo.getAttribute("normal");for(let o=0;o<2;o++)for(let c=0;c<Be;c++){let l=(o*n+c*(ln+1))*3,u=(o*n+c*(ln+1)+ln)*3;for(let h=0;h<3;h++){let d=(a.array[l+h]+a.array[u+h])/2;a.array[l+h]=d,a.array[u+h]=d}}a.needsUpdate=!0,this.geo.computeBoundingSphere(),this.root.position.y=s}};function fh(i,t){if(t===Wl)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(t===or||t===ha){let e=i.getIndex();if(e===null){let r=[],a=i.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);i.setIndex(r),e=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}let n=e.count-2,s=[];if(t===or)for(let r=1;r<=n;r++)s.push(e.getX(0)),s.push(e.getX(r)),s.push(e.getX(r+1));else for(let r=0;r<n;r++)r%2===0?(s.push(e.getX(r)),s.push(e.getX(r+1)),s.push(e.getX(r+2))):(s.push(e.getX(r+2)),s.push(e.getX(r+1)),s.push(e.getX(r)));return s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),i.setIndex(s),i.clearGroups(),i}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",t),i}function wf(i){let t=new Map,e=new Map,n=i.clone();return Af(i,n,function(s,r){t.set(r,s),e.set(s,r)}),n.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=t.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return e.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Af(i,t,e){e(i,t);for(let n=0;n<i.children.length;n++)Af(i.children[n],t.children[n],e)}var Ki=class extends ti{constructor(t){super(t),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(e){return new _h(e)}),this.register(function(e){return new vh(e)}),this.register(function(e){return new Ih(e)}),this.register(function(e){return new Lh(e)}),this.register(function(e){return new Ph(e)}),this.register(function(e){return new Sh(e)}),this.register(function(e){return new wh(e)}),this.register(function(e){return new Ah(e)}),this.register(function(e){return new Th(e)}),this.register(function(e){return new yh(e)}),this.register(function(e){return new Eh(e)}),this.register(function(e){return new Mh(e)}),this.register(function(e){return new Ch(e)}),this.register(function(e){return new Rh(e)}),this.register(function(e){return new bh(e)}),this.register(function(e){return new bc(e,oe.EXT_MESHOPT_COMPRESSION)}),this.register(function(e){return new bc(e,oe.KHR_MESHOPT_COMPRESSION)}),this.register(function(e){return new Fh(e)})}load(t,e,n,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Si.extractUrlBase(t);a=Si.resolveURL(l,this.path)}else a=Si.extractUrlBase(t);this.manager.itemStart(t);let o=function(l){s?s(l):console.error(l),r.manager.itemError(t),r.manager.itemEnd(t)},c=new Qs(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(t,function(l){try{r.parse(l,a,function(u){e(u),r.manager.itemEnd(t)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(t){return this.dracoLoader=t,this}setKTX2Loader(t){return this.ktx2Loader=t,this}setMeshoptDecoder(t){return this.meshoptDecoder=t,this}register(t){return this.pluginCallbacks.indexOf(t)===-1&&this.pluginCallbacks.push(t),this}unregister(t){return this.pluginCallbacks.indexOf(t)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(t),1),this}parse(t,e,n,s){let r,a={},o={},c=new TextDecoder;if(typeof t=="string")r=JSON.parse(t);else if(t instanceof ArrayBuffer)if(c.decode(new Uint8Array(t,0,4))===If){try{a[oe.KHR_BINARY_GLTF]=new Dh(t)}catch(h){s&&s(h);return}r=JSON.parse(a[oe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(t));else r=t;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Hh(r,{path:e||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){let h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[h.name]=h,a[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){let h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case oe.KHR_MATERIALS_UNLIT:a[h]=new xh;break;case oe.KHR_DRACO_MESH_COMPRESSION:a[h]=new Nh(r,this.dracoLoader);break;case oe.KHR_TEXTURE_TRANSFORM:a[h]=new Uh;break;case oe.KHR_MESH_QUANTIZATION:a[h]=new kh;break;default:d.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(n,s)}parseAsync(t,e){let n=this;return new Promise(function(s,r){n.parse(t,e,s,r)})}};function Iy(){let i={};return{get:function(t){return i[t]},add:function(t,e){i[t]=e},remove:function(t){delete i[t]},removeAll:function(){i={}}}}function ze(i,t,e){let n=i.json.materials[t];return n.extensions&&n.extensions[e]?n.extensions[e]:null}var oe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bh=class{constructor(t){this.parser=t,this.name=oe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let t=this.parser,e=this.parser.json.nodes||[];for(let n=0,s=e.length;n<s;n++){let r=e[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&t._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(t){let e=this.parser,n="light:"+t,s=e.cache.get(n);if(s)return s;let r=e.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[t],l,u=new Mt(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],an);let h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mi(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new fs(u),l.distance=h;break;case"spot":l=new Zr(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),si(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=e.createUniqueName(c.name||"light_"+t),s=Promise.resolve(l),e.cache.add(n,s),s}getDependency(t,e){if(t==="light")return this._loadLight(e)}createNodeAttachment(t){let e=this,n=this.parser,r=n.json.nodes[t],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return n._getNodeRef(e.cache,o,c)})}},xh=class{constructor(){this.name=oe.KHR_MATERIALS_UNLIT}getMaterialType(){return Hn}extendParams(t,e,n){let s=[];t.color=new Mt(1,1,1),t.opacity=1;let r=e.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;t.color.setRGB(a[0],a[1],a[2],an),t.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(t,"map",r.baseColorTexture,we))}return Promise.all(s)}},yh=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);return n===null||n.emissiveStrength!==void 0&&(e.emissiveIntensity=n.emissiveStrength),Promise.resolve()}},_h=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_CLEARCOAT}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(n.clearcoatFactor!==void 0&&(e.clearcoat=n.clearcoatFactor),n.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatMap",n.clearcoatTexture)),n.clearcoatRoughnessFactor!==void 0&&(e.clearcoatRoughness=n.clearcoatRoughnessFactor),n.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"clearcoatRoughnessMap",n.clearcoatRoughnessTexture)),n.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(e,"clearcoatNormalMap",n.clearcoatNormalTexture)),n.clearcoatNormalTexture.scale!==void 0)){let r=n.clearcoatNormalTexture.scale;e.clearcoatNormalScale=new Wt(r,r)}return Promise.all(s)}},vh=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_DISPERSION}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);return n===null||(e.dispersion=n.dispersion!==void 0?n.dispersion:0),Promise.resolve()}},Mh=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.iridescenceFactor!==void 0&&(e.iridescence=n.iridescenceFactor),n.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceMap",n.iridescenceTexture)),n.iridescenceIor!==void 0&&(e.iridescenceIOR=n.iridescenceIor),e.iridescenceThicknessRange===void 0&&(e.iridescenceThicknessRange=[100,400]),n.iridescenceThicknessMinimum!==void 0&&(e.iridescenceThicknessRange[0]=n.iridescenceThicknessMinimum),n.iridescenceThicknessMaximum!==void 0&&(e.iridescenceThicknessRange[1]=n.iridescenceThicknessMaximum),n.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"iridescenceThicknessMap",n.iridescenceThicknessTexture)),Promise.all(s)}},Sh=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SHEEN}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];if(e.sheenColor=new Mt(0,0,0),e.sheenRoughness=0,e.sheen=1,n.sheenColorFactor!==void 0){let r=n.sheenColorFactor;e.sheenColor.setRGB(r[0],r[1],r[2],an)}return n.sheenRoughnessFactor!==void 0&&(e.sheenRoughness=n.sheenRoughnessFactor),n.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenColorMap",n.sheenColorTexture,we)),n.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(e,"sheenRoughnessMap",n.sheenRoughnessTexture)),Promise.all(s)}},wh=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_TRANSMISSION}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.transmissionFactor!==void 0&&(e.transmission=n.transmissionFactor),n.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(e,"transmissionMap",n.transmissionTexture)),Promise.all(s)}},Ah=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_VOLUME}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.thickness=n.thicknessFactor!==void 0?n.thicknessFactor:0,n.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(e,"thicknessMap",n.thicknessTexture)),e.attenuationDistance=n.attenuationDistance||1/0;let r=n.attenuationColor||[1,1,1];return e.attenuationColor=new Mt().setRGB(r[0],r[1],r[2],an),Promise.all(s)}},Th=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_IOR}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);return n===null||(e.ior=n.ior!==void 0?n.ior:1.5,e.ior===0&&(e.ior=1e3)),Promise.resolve()}},Eh=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_SPECULAR}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];e.specularIntensity=n.specularFactor!==void 0?n.specularFactor:1,n.specularTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularIntensityMap",n.specularTexture));let r=n.specularColorFactor||[1,1,1];return e.specularColor=new Mt().setRGB(r[0],r[1],r[2],an),n.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(e,"specularColorMap",n.specularColorTexture,we)),Promise.all(s)}},Rh=class{constructor(t){this.parser=t,this.name=oe.EXT_MATERIALS_BUMP}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return e.bumpScale=n.bumpFactor!==void 0?n.bumpFactor:1,n.bumpTexture!==void 0&&s.push(this.parser.assignTexture(e,"bumpMap",n.bumpTexture)),Promise.all(s)}},Ch=class{constructor(t){this.parser=t,this.name=oe.KHR_MATERIALS_ANISOTROPY}getMaterialType(t){return ze(this.parser,t,this.name)!==null?De:null}extendMaterialParams(t,e){let n=ze(this.parser,t,this.name);if(n===null)return Promise.resolve();let s=[];return n.anisotropyStrength!==void 0&&(e.anisotropy=n.anisotropyStrength),n.anisotropyRotation!==void 0&&(e.anisotropyRotation=n.anisotropyRotation),n.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(e,"anisotropyMap",n.anisotropyTexture)),Promise.all(s)}},Ih=class{constructor(t){this.parser=t,this.name=oe.KHR_TEXTURE_BASISU}loadTexture(t){let e=this.parser,n=e.json,s=n.textures[t];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=e.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return e.loadTextureImage(t,r.source,a)}},Lh=class{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_WEBP}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(t,a.source,c)}},Ph=class{constructor(t){this.parser=t,this.name=oe.EXT_TEXTURE_AVIF}loadTexture(t){let e=this.name,n=this.parser,s=n.json,r=s.textures[t];if(!r.extensions||!r.extensions[e])return null;let a=r.extensions[e],o=s.images[a.source],c=n.textureLoader;if(o.uri){let l=n.options.manager.getHandler(o.uri);l!==null&&(c=l)}return n.loadTextureImage(t,a.source,c)}},bc=class{constructor(t,e){this.name=e,this.parser=t}loadBufferView(t){let e=this.parser.json,n=e.bufferViews[t];if(n.extensions&&n.extensions[this.name]){let s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(e.extensionsRequired&&e.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,u=s.count,h=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(f),u,h,d,s.mode,s.filter),f})})}else return null}},Fh=class{constructor(t){this.name=oe.EXT_MESH_GPU_INSTANCING,this.parser=t}createNodeMesh(t){let e=this.parser.json,n=e.nodes[t];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;let s=e.meshes[n.mesh];for(let l of s.primitives)if(l.mode!==In.TRIANGLES&&l.mode!==In.TRIANGLE_STRIP&&l.mode!==In.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=n.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(u=>(c[l]=u,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(t)),Promise.all(o).then(l=>{let u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,f=[];for(let m of h){let _=new jt,p=new q,g=new Qe,T=new q(1,1,1),M=new cs(m.geometry,m.material,d);for(let v=0;v<d;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&g.fromBufferAttribute(c.ROTATION,v),c.SCALE&&T.fromBufferAttribute(c.SCALE,v),M.setMatrixAt(v,_.compose(p,g,T));let y=null;for(let v in c)if(v==="_COLOR_0"){let w=c[v];M.instanceColor=new bi(w.array,w.itemSize,w.normalized)}else if(v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"){if(y===null){let x=M.geometry;y=new Te,y.name=x.name;for(let b in x.attributes)y.setAttribute(b,x.attributes[b]);for(let b in x.morphAttributes)y.morphAttributes[b]=x.morphAttributes[b];x.index!==null&&y.setIndex(x.index),y.morphTargetsRelative=x.morphTargetsRelative;for(let b of x.groups)y.addGroup(b.start,b.count,b.materialIndex);x.boundingBox!==null&&(y.boundingBox=x.boundingBox.clone()),x.boundingSphere!==null&&(y.boundingSphere=x.boundingSphere.clone()),y.drawRange.start=x.drawRange.start,y.drawRange.count=x.drawRange.count,y.userData=Object.assign({},x.userData),M.geometry=y}let w=c[v];y.setAttribute(v,new bi(w.array,w.itemSize,w.normalized))}Ce.prototype.copy.call(M,m),this.parser.assignFinalMaterial(M),f.push(M)}return u.isGroup?(u.clear(),u.add(...f),u):f[0]}))}},If="glTF",ma=12,Tf={JSON:1313821514,BIN:5130562},Dh=class{constructor(t){this.name=oe.KHR_BINARY_GLTF,this.content=null,this.body=null;let e=new DataView(t,0,ma),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(t.slice(0,4))),version:e.getUint32(4,!0),length:e.getUint32(8,!0)},this.header.magic!==If)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-ma,r=new DataView(t,ma),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Tf.JSON){let l=new Uint8Array(t,ma+a,o);this.content=n.decode(l)}else if(c===Tf.BIN){let l=ma+a;this.body=t.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Nh=class{constructor(t,e){if(!e)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=oe.KHR_DRACO_MESH_COMPRESSION,this.json=t,this.dracoLoader=e,this.dracoLoader.preload()}decodePrimitive(t,e){let n=this.json,s=this.dracoLoader,r=t.extensions[this.name].bufferView,a=t.extensions[this.name].attributes,o={},c={},l={};for(let u in a){let h=Bh[u]||u.toLowerCase();o[h]=a[u]}for(let u in t.attributes){let h=Bh[u]||u.toLowerCase();if(a[u]!==void 0){let d=n.accessors[t.attributes[u]],f=fr[d.componentType];l[h]=f.name,c[h]=d.normalized===!0}}return e.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){s.decodeDracoFile(u,function(f){for(let m in f.attributes){let _=f.attributes[m],p=c[m];p!==void 0&&(_.normalized=p)}h(f)},o,l,an,d)})})}},Uh=class{constructor(){this.name=oe.KHR_TEXTURE_TRANSFORM}extendTexture(t,e){if((e.texCoord===void 0||e.texCoord===t.channel)&&e.offset===void 0&&e.rotation===void 0&&e.scale===void 0)return t;if(t=t.clone(),e.texCoord!==void 0&&(t.channel=e.texCoord),e.offset!==void 0&&t.offset.fromArray(e.offset),e.rotation!==void 0&&(t.rotation=e.rotation),e.scale!==void 0&&t.repeat.fromArray(e.scale),e.rotation!==void 0){let n=Math.cos(t.rotation),s=Math.sin(t.rotation);t.matrix.set(t.repeat.x*n,t.repeat.y*s,t.offset.x,-t.repeat.x*s,t.repeat.y*n,t.offset.y,0,0,1),t.matrixAutoUpdate=!1}return t.needsUpdate=!0,t}},kh=class{constructor(){this.name=oe.KHR_MESH_QUANTIZATION}},xc=class extends Qn{constructor(t,e,n,s){super(t,e,n,s)}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s*3+s;for(let a=0;a!==s;a++)e[a]=n[r+a];return e}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,u=s-e,h=(n-e)/u,d=h*h,f=d*h,m=t*l,_=m-l,p=-2*f+3*d,g=f-d,T=1-p,M=g-d+h;for(let y=0;y!==o;y++){let v=a[_+y+o],w=a[_+y+c]*u,x=a[m+y+o],b=a[m+y]*u;r[y]=T*v+M*w+p*x+g*b}return r}},Ly=new Qe,Oh=class extends xc{interpolate_(t,e,n,s){let r=super.interpolate_(t,e,n,s);return Ly.fromArray(r).normalize().toArray(r),r}},In={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ef={9728:Oe,9729:Le,9984:wo,9985:sr,9986:gs,9987:mn},Rf={33071:hn,33648:Hs,10497:Rn},ph={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Bh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ji={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Py={CUBICSPLINE:void 0,LINEAR:ss,STEP:is},mh={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Ve({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Cn})),i.DefaultMaterial}function _s(i,t,e){for(let n in e.extensions)i[n]===void 0&&(t.userData.gltfExtensions=t.userData.gltfExtensions||{},t.userData.gltfExtensions[n]=e.extensions[n])}function si(i,t){t.extras!==void 0&&(typeof t.extras=="object"?Object.assign(i.userData,t.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+t.extras))}function Dy(i,t,e){let n=!1,s=!1,r=!1;for(let l=0,u=t.length;l<u;l++){let h=t[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(s=!0),h.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);let a=[],o=[],c=[];for(let l=0,u=t.length;l<u;l++){let h=t[l];if(n){let d=h.POSITION!==void 0?e.getDependency("accessor",h.POSITION):i.attributes.position;a.push(d)}if(s){let d=h.NORMAL!==void 0?e.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(d)}if(r){let d=h.COLOR_0!==void 0?e.getDependency("accessor",h.COLOR_0):i.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let u=l[0],h=l[1],d=l[2];return n&&(i.morphAttributes.position=u),s&&(i.morphAttributes.normal=h),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ny(i,t){if(i.updateMorphTargets(),t.weights!==void 0)for(let e=0,n=t.weights.length;e<n;e++)i.morphTargetInfluences[e]=t.weights[e];if(t.extras&&Array.isArray(t.extras.targetNames)){let e=t.extras.targetNames;if(i.morphTargetInfluences.length===e.length){i.morphTargetDictionary={};for(let n=0,s=e.length;n<s;n++)i.morphTargetDictionary[e[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Uy(i){let t,e=i.extensions&&i.extensions[oe.KHR_DRACO_MESH_COMPRESSION];if(e?t="draco:"+e.bufferView+":"+e.indices+":"+gh(e.attributes):t=i.indices+":"+gh(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)t+=":"+gh(i.targets[n]);return t}function gh(i){let t="",e=Object.keys(i).sort();for(let n=0,s=e.length;n<s;n++)t+=e[n]+":"+i[e[n]]+";";return t}function zh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ky(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":i.search(/\.ktx2($|\?)/i)>0||i.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var Oy=new jt,Hh=class{constructor(t={},e={}){this.json=t,this.extensions={},this.plugins={},this.options=e,this.cache=new Iy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=n&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&a<98?this.textureLoader=new us(this.options.manager):this.textureLoader=new Qr(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Qs(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(t){this.extensions=t}setPlugins(t){this.plugins=t}parse(t,e){let n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:n,userData:{}};return _s(r,o,s),si(o,s),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();t(o)})}).catch(e)}_markDefs(){let t=this.json.nodes||[],e=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=e.length;s<r;s++){let a=e[s].joints;for(let o=0,c=a.length;o<c;o++)t[a[o]].isBone=!0}for(let s=0,r=t.length;s<r;s++){let a=t[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(t,e){e!==void 0&&(t.refs[e]===void 0&&(t.refs[e]=t.uses[e]=0),t.refs[e]++)}_getNodeRef(t,e,n){if(t.refs[e]<=1)return n;let s=n.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,u]of a.children.entries())r(u,o.children[l])};return r(n,s),s.name+="_instance_"+t.uses[e]++,s}_invokeOne(t){let e=Object.values(this.plugins);e.push(this);for(let n=0;n<e.length;n++){let s=t(e[n]);if(s)return s}return null}_invokeAll(t){let e=Object.values(this.plugins);e.unshift(this);let n=[];for(let s=0;s<e.length;s++){let r=t(e[s]);r&&n.push(r)}return n}getDependency(t,e){let n=t+":"+e,s=this.cache.get(n);if(!s){switch(t){case"scene":s=this.loadScene(e);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(e)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(e)});break;case"accessor":s=this.loadAccessor(e);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(e)});break;case"buffer":s=this.loadBuffer(e);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(e)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(e)});break;case"skin":s=this.loadSkin(e);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(e)});break;case"camera":s=this.loadCamera(e);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(t,e)}),!s)throw new Error("Unknown type: "+t);break}this.cache.add(n,s)}return s}getDependencies(t){let e=this.cache.get(t);if(!e){let n=this,s=this.json[t+(t==="mesh"?"es":"s")]||[];e=Promise.all(s.map(function(r,a){return n.getDependency(t,a)})),this.cache.add(t,e)}return e}loadBuffer(t){let e=this.json.buffers[t],n=this.fileLoader;if(e.type&&e.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+e.type+" buffer type is not supported.");if(e.uri===void 0&&t===0)return Promise.resolve(this.extensions[oe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){n.load(Si.resolveURL(e.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+e.uri+'".'))})})}loadBufferView(t){let e=this.json.bufferViews[t];return this.getDependency("buffer",e.buffer).then(function(n){let s=e.byteLength||0,r=e.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(t){let e=this,n=this.json,s=this.json.accessors[t];if(s.bufferView===void 0&&s.sparse===void 0){let a=ph[s.type],o=fr[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new Xt(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=ph[s.type],l=fr[s.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=s.byteOffset||0,f=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,m=s.normalized===!0,_,p;if(f&&f!==h){let g=Math.floor(d/f),T="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+g+":"+s.count,M=e.cache.get(T);M||(_=new l(o,g*f,s.count*f/u),M=new js(_,f/u),e.cache.add(T,M)),p=new Ks(M,c,d%f/u,m)}else o===null?_=new l(s.count*c):_=new l(o,d,s.count*c),p=new Xt(_,c,m);if(s.sparse!==void 0){let g=ph.SCALAR,T=fr[s.sparse.indices.componentType],M=s.sparse.indices.byteOffset||0,y=s.sparse.values.byteOffset||0,v=new T(a[1],M,s.sparse.count*g),w=new l(a[2],y,s.sparse.count*c);o!==null&&(p=new Xt(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let x=0,b=v.length;x<b;x++){let S=v[x];if(p.setX(S,w[x*c]),c>=2&&p.setY(S,w[x*c+1]),c>=3&&p.setZ(S,w[x*c+2]),c>=4&&p.setW(S,w[x*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=m}return p})}loadTexture(t){let e=this.json,n=this.options,r=e.textures[t].source,a=e.images[r],o=this.textureLoader;if(a.uri){let c=n.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(t,r,o)}loadTextureImage(t,e,n){let s=this,r=this.json,a=r.textures[t],o=r.images[e],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(e,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return u.magFilter=Ef[d.magFilter]||Le,u.minFilter=Ef[d.minFilter]||mn,u.wrapS=Rf[d.wrapS]||Rn,u.wrapT=Rf[d.wrapT]||Rn,u.generateMipmaps=!u.isCompressedTexture&&u.minFilter!==Oe&&u.minFilter!==Le,s.associations.set(u,{textures:t}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(t,e){let n=this,s=this.json,r=this.options;if(this.sourceCache[t]!==void 0)return this.sourceCache[t].then(h=>h.clone());let a=s.images[t],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=n.getDependency("bufferView",a.bufferView).then(function(h){l=!0;let d=new Blob([h],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+t+" is missing URI and bufferView");let u=Promise.resolve(c).then(function(h){return new Promise(function(d,f){let m=d;e.isImageBitmapLoader===!0&&(m=function(_){let p=new Fe(_);p.needsUpdate=!0,d(p)}),e.load(Si.resolveURL(h,r.path),m,void 0,f)})}).then(function(h){return l===!0&&o.revokeObjectURL(c),si(h,a),h.userData.mimeType=a.mimeType||ky(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[t]=u,u}assignTexture(t,e,n,s){let r=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),r.extensions[oe.KHR_TEXTURE_TRANSFORM]){let o=n.extensions!==void 0?n.extensions[oe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[oe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),t[e]=a,a})}assignFinalMaterial(t){let e=t.geometry,n=t.material,s=e.attributes.tangent===void 0,r=e.attributes.color!==void 0,a=e.attributes.normal===void 0;if(t.isPoints){let o="PointsMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Zs,tn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(o,c)),n=c}else if(t.isLine){let o="LineBasicMaterial:"+n.uuid,c=this.cache.get(o);c||(c=new Ui,tn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(o,c)),n=c}if(s||r||a){let o="ClonedMaterial:"+n.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=n.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(n))),n=c}t.material=n}getMaterialType(){return Ve}loadMaterial(t){let e=this,n=this.json,s=this.extensions,r=n.materials[t],a,o={},c=r.extensions||{},l=[];if(c[oe.KHR_MATERIALS_UNLIT]){let h=s[oe.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),l.push(h.extendParams(o,r,e))}else{let h=r.pbrMetallicRoughness||{};if(o.color=new Mt(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){let d=h.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],an),o.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(e.assignTexture(o,"map",h.baseColorTexture,we)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(e.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),l.push(e.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(t)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(t,o)})))}r.doubleSided===!0&&(o.side=Pe);let u=r.alphaMode||mh.OPAQUE;if(u===mh.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===mh.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Hn&&(l.push(e.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Wt(1,1),r.normalTexture.scale!==void 0)){let h=r.normalTexture.scale;o.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&a!==Hn&&(l.push(e.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Hn){let h=r.emissiveFactor;o.emissive=new Mt().setRGB(h[0],h[1],h[2],an)}return r.emissiveTexture!==void 0&&a!==Hn&&l.push(e.assignTexture(o,"emissiveMap",r.emissiveTexture,we)),Promise.all(l).then(function(){let h=new a(o);return r.name&&(h.name=r.name),si(h,r),e.associations.set(h,{materials:t}),r.extensions&&_s(s,h,r),h})}createUniqueName(t){let e=_e.sanitizeNodeName(t||"");return e in this.nodeNamesUsed?e+"_"+ ++this.nodeNamesUsed[e]:(this.nodeNamesUsed[e]=0,e)}loadGeometries(t){let e=this,n=this.extensions,s=this.primitiveCache;function r(o){return n[oe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,e).then(function(c){return Cf(c,o,e)})}let a=[];for(let o=0,c=t.length;o<c;o++){let l=t[o],u=Uy(l),h=s[u];if(h)a.push(h.promise);else{let d;l.extensions&&l.extensions[oe.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Cf(new Te,l,e),l.mode===In.TRIANGLE_STRIP?d=d.then(f=>fh(f,ha)):l.mode===In.TRIANGLE_FAN&&(d=d.then(f=>fh(f,or))),s[u]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(t){let e=this,n=this.json,s=this.extensions,r=n.meshes[t],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let u=a[c].material===void 0?Fy(this.cache):this.getDependency("material",a[c].material);o.push(u)}return o.push(e.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let f=0,m=u.length;f<m;f++){let _=u[f],p=a[f],g,T=l[f];if(p.mode===In.TRIANGLES||p.mode===In.TRIANGLE_STRIP||p.mode===In.TRIANGLE_FAN||p.mode===void 0){let M=r.isSkinnedMesh===!0,y=_.hasAttribute("skinIndex")&&_.hasAttribute("skinWeight");M&&y===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),g=M&&y?new fn(_,T):new fe(_,T),g.isSkinnedMesh===!0&&g.normalizeSkinWeights()}else if(p.mode===In.LINES)g=new Br(_,T);else if(p.mode===In.LINE_STRIP)g=new ls(_,T);else if(p.mode===In.LINE_LOOP)g=new hs(_,T);else if(p.mode===In.POINTS)g=new zr(_,T);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(g.geometry.morphAttributes).length>0&&Ny(g,r),g.name=e.createUniqueName(r.name||"mesh_"+t),si(g,r),p.extensions&&_s(s,g,p),e.assignFinalMaterial(g),h.push(g)}for(let f=0,m=h.length;f<m;f++)e.associations.set(h[f],{meshes:t,primitives:f});if(h.length===1)return r.extensions&&_s(s,h[0],r),h[0];let d=new un;r.extensions&&_s(s,d,r),e.associations.set(d,{meshes:t});for(let f=0,m=h.length;f<m;f++)d.add(h[f]);return d})}loadCamera(t){let e,n=this.json.cameras[t],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?e=new Ue(bs.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(e=new zi(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(e.name=this.createUniqueName(n.name)),si(e,n),Promise.resolve(e)}loadSkin(t){let e=this.json.skins[t],n=[];for(let s=0,r=e.joints.length;s<r;s++)n.push(this._loadNodeShallow(e.joints[s]));return e.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",e.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,u=a.length;l<u;l++){let h=a[l];if(h){o.push(h);let d=new jt;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',e.joints[l])}return new Or(o,c)})}loadAnimation(t){let e=this.json,n=this,s=e.animations[t],r=s.name?s.name:"animation_"+t,a=[],o=[],c=[],l=[],u=[];for(let h=0,d=s.channels.length;h<d;h++){let f=s.channels[h],m=s.samplers[f.sampler],_=f.target,p=_.node,g=s.parameters!==void 0?s.parameters[m.input]:m.input,T=s.parameters!==void 0?s.parameters[m.output]:m.output;_.node!==void 0&&(a.push(this.getDependency("node",p)),o.push(this.getDependency("accessor",g)),c.push(this.getDependency("accessor",T)),l.push(m),u.push(_))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){let d=h[0],f=h[1],m=h[2],_=h[3],p=h[4],g=[];for(let M=0,y=d.length;M<y;M++){let v=d[M],w=f[M],x=m[M],b=_[M],S=p[M];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();let A=n._createAnimationTracks(v,w,x,b,S);if(A)for(let E=0;E<A.length;E++)g.push(A[E])}let T=new Yr(r,void 0,g);return si(T,s),T})}createNodeMesh(t){let e=this.json,n=this,s=e.nodes[t];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){let a=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(t){let e=this.json,n=this,s=e.nodes[t],r=n._loadNodeShallow(t),a=[],o=s.children||[];for(let l=0,u=o.length;l<u;l++)a.push(n.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Oy)});for(let f=0,m=h.length;f<m;f++)u.add(h[f]);if(u.userData.pivot!==void 0&&h.length>0){let f=u.userData.pivot,m=h[0];u.pivot=new q().fromArray(f),u.position.x-=f[0],u.position.y-=f[1],u.position.z-=f[2],m.position.set(0,0,0),delete u.userData.pivot}return u})}_loadNodeShallow(t){let e=this.json,n=this.extensions,s=this;if(this.nodeCache[t]!==void 0)return this.nodeCache[t];let r=e.nodes[t],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(t)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(t)}).forEach(function(l){o.push(l)}),this.nodeCache[t]=Promise.all(o).then(function(l){let u;if(r.isBone===!0?u=new Ys:l.length>1?u=new un:l.length===1?u=l[0]:u=new Ce,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=a),si(u,r),r.extensions&&_s(n,u,r),r.matrix!==void 0){let h=new jt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);if(!s.associations.has(u))s.associations.set(u,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let h=s.associations.get(u);s.associations.set(u,{...h})}return s.associations.get(u).nodes=t,u}),this.nodeCache[t]}loadScene(t){let e=this.extensions,n=this.json.scenes[t],s=this,r=new un;n.name&&(r.name=s.createUniqueName(n.name)),si(r,n),n.extensions&&_s(e,r,n);let a=n.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let u=0,h=c.length;u<h;u++){let d=c[u];d.parent!==null?r.add(wf(d)):r.add(d)}let l=u=>{let h=new Map;for(let[d,f]of s.associations)(d instanceof tn||d instanceof Fe)&&h.set(d,f);return u.traverse(d=>{let f=s.associations.get(d);f!=null&&h.set(d,f)}),h};return s.associations=l(r),r})}_createAnimationTracks(t,e,n,s,r){let a=[],o=t.name?t.name:t.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ji[r.path]===ji.weights?(l(t),t.isGroup&&t.children.forEach(l)):c.push(o);let u;switch(ji[r.path]){case ji.weights:u=yi;break;case ji.rotation:u=_i;break;case ji.translation:case ji.scale:u=Bi;break;default:n.itemSize===1?u=yi:u=Bi;break}let h=s.interpolation!==void 0?Py[s.interpolation]:ss,d=this._getArrayFromAccessor(n);for(let f=0,m=c.length;f<m;f++){let _=new u(c[f]+"."+ji[r.path],e.array,d,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),a.push(_)}return a}_getArrayFromAccessor(t){let e=t.array;if(t.normalized){let n=zh(e.constructor),s=new Float32Array(e.length);for(let r=0,a=e.length;r<a;r++)s[r]=e[r]*n;e=s}return e}_createCubicSplineTrackInterpolant(t){t.createInterpolant=function(n){let s=this instanceof _i?Oh:xc;return new s(this.times,this.values,this.getValueSize()/3,n)},t.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function By(i,t,e){let n=t.attributes,s=new cn;if(n.POSITION!==void 0){let o=e.json.accessors[n.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new q(c[0],c[1],c[2]),new q(l[0],l[1],l[2])),o.normalized){let u=zh(fr[o.componentType]);s.min.multiplyScalar(u),s.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=t.targets;if(r!==void 0){let o=new q,c=new q;for(let l=0,u=r.length;l<u;l++){let h=r[l];if(h.POSITION!==void 0){let d=e.json.accessors[h.POSITION],f=d.min,m=d.max;if(f!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(m[2]))),d.normalized){let _=zh(fr[d.componentType]);c.multiplyScalar(_)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}i.boundingBox=s;let a=new dn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=a}function Cf(i,t,e){let n=t.attributes,s=[];function r(a,o){return e.getDependency("accessor",a).then(function(c){i.setAttribute(o,c)})}for(let a in n){let o=Bh[a]||a.toLowerCase();o in i.attributes||s.push(r(n[a],o))}if(t.indices!==void 0&&!i.index){let a=e.getDependency("accessor",t.indices).then(function(o){i.setIndex(o)});s.push(a)}return re.workingColorSpace!==an&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${re.workingColorSpace}" not supported.`),si(i,t),By(i,t,e),Promise.all(s).then(function(){return t.targets!==void 0?Dy(i,t.targets,e):i})}var pr=(function(){var i="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",t="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",e=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),n=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var s=WebAssembly.validate(e)?o(t):o(i),r,a=WebAssembly.instantiate(s,{}).then(function(g){r=g.instance,r.exports.__wasm_call_ctors()});function o(g){for(var T=new Uint8Array(g.length),M=0;M<g.length;++M){var y=g.charCodeAt(M);T[M]=y>96?y-97:y>64?y-39:y+4}for(var v=0,M=0;M<g.length;++M)T[v++]=T[M]<60?n[T[M]]:(T[M]-60)*64+T[++M];return T.buffer.slice(0,v)}function c(g,T,M,y,v,w,x){var b=g.exports.sbrk,S=y+3&-4,A=b(S*v),E=b(w.length),P=new Uint8Array(g.exports.memory.buffer);P.set(w,E);var F=T(A,y,v,E,w.length);if(F==0&&x&&x(A,S,v),M.set(P.subarray(A,A+y*v)),b(A-b(0)),F!=0)throw new Error("Malformed buffer data: "+F)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},u={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},h=[],d=0;function f(g){var T={object:new Worker(g),pending:0,requests:{}};return T.object.onmessage=function(M){var y=M.data;T.pending-=y.count,T.requests[y.id][y.action](y.value),delete T.requests[y.id]},T}function m(g){for(var T="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(s)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+p.name+";"+c.toString()+p.toString(),M=new Blob([T],{type:"text/javascript"}),y=URL.createObjectURL(M),v=h.length;v<g;++v)h[v]=f(y);for(var v=g;v<h.length;++v)h[v].object.postMessage({});h.length=g,URL.revokeObjectURL(y)}function _(g,T,M,y,v){for(var w=h[0],x=1;x<h.length;++x)h[x].pending<w.pending&&(w=h[x]);return new Promise(function(b,S){var A=new Uint8Array(M),E=++d;w.pending+=g,w.requests[E]={resolve:b,reject:S},w.object.postMessage({id:E,count:g,size:T,source:A,mode:y,filter:v},[A.buffer])})}function p(g){var T=g.data;self.ready.then(function(M){if(!T.id)return self.close();try{var y=new Uint8Array(T.count*T.size);c(M,M.exports[T.mode],y,T.count,T.size,T.source,M.exports[T.filter]),self.postMessage({id:T.id,count:T.count,action:"resolve",value:y},[y.buffer])}catch(v){self.postMessage({id:T.id,count:T.count,action:"reject",value:v})}})}return{ready:a,supported:!0,useWorkers:function(g){m(g)},decodeVertexBuffer:function(g,T,M,y,v){c(r,r.exports.meshopt_decodeVertexBuffer,g,T,M,y,r.exports[l[v]])},decodeIndexBuffer:function(g,T,M,y){c(r,r.exports.meshopt_decodeIndexBuffer,g,T,M,y)},decodeIndexSequence:function(g,T,M,y){c(r,r.exports.meshopt_decodeIndexSequence,g,T,M,y)},decodeGltfBuffer:function(g,T,M,y,v,w){c(r,r.exports[u[v]],g,T,M,y,r.exports[l[w]])},decodeGltfBufferAsync:function(g,T,M,y,v){return h.length>0?_(g,T,M,u[y],l[v]):a.then(function(){var w=new Uint8Array(g*T);return c(r,r.exports[u[y]],w,g,T,M,r.exports[l[v]]),w})}}})();function yc(i,t,e,n){let s={};for(let r of n){let a=[],o=[];for(let c=0;c<r.pos.length/3;c++){let l=r.pos[c*3],u=r.pos[c*3+1],h=r.pos[c*3+2];Math.abs(l)+Math.abs(u)+Math.abs(h)>1e-7&&(a.push(c),o.push(l,u,h))}s[r.name]={idx:new Uint32Array(a),d:new Float32Array(o)}}return{pos:Float32Array.from(i),idx:Uint32Array.from(t),weld:Uint32Array.from(e,r=>Math.round(r)),morphs:s}}function wi(i,t,e,n,s){s.set(i.pos);let r=0;for(let a of e.controls){let o=t[a.id]||0;if(!o)continue;let c=o>0?"plus":"minus",l=Math.abs(o),u=i.morphs[`${a.id}.${c}`];if(!u)continue;let{idx:h,d}=u;for(let f=0;f<h.length;f++){let m=h[f]*3,_=f*3;s[m]+=l*d[_],s[m+1]+=l*d[_+1],s[m+2]+=l*d[_+2]}r+=l*(a.groundDelta[c]||0)}i.relax&&e.relax&&zy(i,e.relax,s);for(let a=0;a<s.length;a+=3)s[a]*=n,s[a+1]=(s[a+1]-r)*n,s[a+2]*=n}var Lf=new WeakMap;function zy(i,t,e){let n=Lf.get(i);if(!n){let r=new Map,a=new Map;for(let l=0;l<i.weld.length;l++){let u=i.weld[l];r.has(u)?(a.get(u)||a.set(u,[]).get(u)).push(l):r.set(u,l)}let o=Int32Array.from(t.verts,l=>r.get(l)??-1),c=Int32Array.from(t.nbr,l=>r.get(l)??-1);n={v:o,dup:t.verts.map(l=>Int32Array.from(a.get(l)||[])),nb:c,st:Int32Array.from(t.start),tmp:new Float64Array(t.verts.length*3)},Lf.set(i,n)}let s=n.v.length;for(let r=0;r<t.iters;r++){for(let a=0;a<s;a++){let o=0,c=0,l=0,u=n.st[a],h=n.st[a+1];for(let p=u;p<h;p++){let g=n.nb[p]*3;o+=e[g],c+=e[g+1],l+=e[g+2]}let d=h-u,f=n.v[a]*3,m=0;for(let p=u;p<h;p++){let g=n.nb[p]*3;m+=Math.hypot(e[g]-e[f],e[g+1]-e[f+1],e[g+2]-e[f+2])}let _=1;n.tmp[a*3]=.5*e[f]+.5*(o/d+_*t.lap[a*3]),n.tmp[a*3+1]=.5*e[f+1]+.5*(c/d+_*t.lap[a*3+1]),n.tmp[a*3+2]=.5*e[f+2]+.5*(l/d+_*t.lap[a*3+2])}for(let a=0;a<s;a++){let o=n.v[a]*3;e[o]=n.tmp[a*3],e[o+1]=n.tmp[a*3+1],e[o+2]=n.tmp[a*3+2]}}for(let r=0;r<s;r++){let a=n.v[r]*3;for(let o of n.dup[r])e[o*3]=e[a],e[o*3+1]=e[a+1],e[o*3+2]=e[a+2]}}function Ff(i,t,e){let n=t.bones.length,s=t.bones.map(o=>o.head.slice()),r=t.bones.map(o=>o.tail.slice()),a=0;for(let o of t.controls){let c=i[o.id]||0;if(!c)continue;let l=c>0?"plus":"minus",u=Math.abs(c),h=o.jointDelta[l],d=o.tailDelta[l];if(h){for(let f=0;f<n;f++)for(let m=0;m<3;m++)s[f][m]+=u*h[f][m],r[f][m]+=u*d[f][m];a+=u*(o.groundDelta[l]||0)}}for(let o of[s,r])for(let c of o)c[0]*=e,c[1]=(c[1]-a)*e,c[2]*=e;return{heads:s,tails:r}}var Pf=new Map;function ri(i,t,e,n,s){let r=Pf.get(n*3);r?r.fill(0):(r=new Float32Array(n*3),Pf.set(n*3,r));for(let a=0;a<t.length;a+=3){let o=t[a]*3,c=t[a+1]*3,l=t[a+2]*3,u=i[c]-i[o],h=i[c+1]-i[o+1],d=i[c+2]-i[o+2],f=i[l]-i[o],m=i[l+1]-i[o+1],_=i[l+2]-i[o+2],p=h*_-d*m,g=d*f-u*_,T=u*m-h*f,M=e[t[a]]*3;r[M]+=p,r[M+1]+=g,r[M+2]+=T,M=e[t[a+1]]*3,r[M]+=p,r[M+1]+=g,r[M+2]+=T,M=e[t[a+2]]*3,r[M]+=p,r[M+1]+=g,r[M+2]+=T}for(let a=0;a<e.length;a++){let o=e[a]*3,c=r[o],l=r[o+1],u=r[o+2],h=Math.hypot(c,l,u)||1;s[a*3]=c/h,s[a*3+1]=l/h,s[a*3+2]=u/h}}function Gh(i,t,e,n=.06){let s=new Map;for(let u=0;u<t.length;u++){let h=t[u];if(s.has(h))continue;let d=Math.abs(i[u*3]),f=i[u*3+1],m=i[u*3+2],_=Math.hypot((d-.052)/.085,(f-1.15)/.095),p=m>n?Math.max(0,Math.min(1,(1-_)/.45)):0;p>0&&s.set(h,p*p*(3-2*p))}let r=new Map;for(let u of s.keys())r.set(u,new Set);for(let u=0;u<e.length;u+=3)for(let h=0;h<3;h++){let d=t[e[u+h]],f=t[e[u+(h+1)%3]];d!==f&&(r.get(d)?.add(f),r.get(f)?.add(d))}let a=[...s.keys()],o=new Map,c=new Map,l=new Set(a);for(let u of r.values())for(let h of u)l.add(h);for(let u=0;u<t.length;u++){let h=t[u];s.has(h)&&(o.has(h)||o.set(h,[]),o.get(h).push(u)),l.has(h)&&!c.has(h)&&c.set(h,u)}return{w:a,wt:a.map(u=>s.get(u)),nb:a.map(u=>[...r.get(u)]),verts:a.map(u=>o.get(u)),vOf:c}}function Vh(i,t,e=globalThis.__bnIt??24){if(!i||!i.w.length)return;let n=i.w.length,s=new Float32Array(n*3),r=new Float32Array(n*3),a=new Map;i.w.forEach((l,u)=>a.set(l,u));for(let l=0;l<n;l++){let u=i.vOf.get(i.w[l]);s[l*3]=t[u*3],s[l*3+1]=t[u*3+1],s[l*3+2]=t[u*3+2]}let o=new Map,c=l=>{let u=a.get(l);if(u!==void 0)return[s[u*3],s[u*3+1],s[u*3+2]];let h=o.get(l);if(!h){let d=i.vOf.get(l);h=[t[d*3],t[d*3+1],t[d*3+2]],o.set(l,h)}return h};for(let l=0;l<e;l++){for(let u=0;u<n;u++){let h=0,d=0,f=0,m=i.nb[u];for(let v of m){let w=c(v);h+=w[0],d+=w[1],f+=w[2]}let _=m.length||1,p=.6*i.wt[u],g=s[u*3]*(1-p)+p*h/_,T=s[u*3+1]*(1-p)+p*d/_,M=s[u*3+2]*(1-p)+p*f/_,y=Math.hypot(g,T,M)||1;r[u*3]=g/y,r[u*3+1]=T/y,r[u*3+2]=M/y}s.set(r)}for(let l=0;l<n;l++)for(let u of i.verts[l])t[u*3]=s[l*3],t[u*3+1]=s[l*3+1],t[u*3+2]=s[l*3+2]}function Df(i,t){let e=new Set(t.armVerts),n=[];for(let a=0;a<i.idx.length;a+=3)e.has(i.weld[i.idx[a]])||e.has(i.weld[i.idx[a+1]])||e.has(i.weld[i.idx[a+2]])||n.push(i.idx[a],i.idx[a+1],i.idx[a+2]);let s={};for(let a=0;a<i.weld.length;a++)i.weld[a]in s||(s[i.weld[a]]=a);let r={};for(let[a,o]of Object.entries(t.landmarks))r[a]=s[o];return{idx:new Uint32Array(n),vOf:r}}function Hy(i,t){let e=i.length;if(e<3)return 0;let n=Array.from({length:e},(l,u)=>u).sort((l,u)=>i[l]-i[u]||t[l]-t[u]),s=(l,u,h)=>(i[u]-i[l])*(t[h]-t[l])-(t[u]-t[l])*(i[h]-i[l]),r=[],a=[];for(let l of n){for(;r.length>=2&&s(r[r.length-2],r[r.length-1],l)<=0;)r.pop();r.push(l)}for(let l=e-1;l>=0;l--){let u=n[l];for(;a.length>=2&&s(a[a.length-2],a[a.length-1],u)<=0;)a.pop();a.push(u)}let o=r.slice(0,-1).concat(a.slice(0,-1)),c=0;for(let l=0;l<o.length;l++){let u=o[l],h=o[(l+1)%o.length];c+=Math.hypot(i[h]-i[u],t[h]-t[u])}return c}function _c(i,t,e){let n=[],s=[];for(let u=0;u<t.length;u+=3){let h=t[u]*3,d=t[u+1]*3,f=t[u+2]*3;for(let[m,_]of[[h,d],[d,f],[f,h]]){let p=i[m+1]-e,g=i[_+1]-e;if(p*g<0){let T=p/(p-g);n.push(i[m]+(i[_]-i[m])*T),s.push(i[m+2]+(i[_+2]-i[m+2])*T)}}}let r=n.length;if(r<3)return[];let a=Array.from({length:r},(u,h)=>h).sort((u,h)=>n[u]-n[h]||s[u]-s[h]),o=(u,h,d)=>(n[h]-n[u])*(s[d]-s[u])-(s[h]-s[u])*(n[d]-n[u]),c=[],l=[];for(let u of a){for(;c.length>=2&&o(c[c.length-2],c[c.length-1],u)<=0;)c.pop();c.push(u)}for(let u=r-1;u>=0;u--){let h=a[u];for(;l.length>=2&&o(l[l.length-2],l[l.length-1],h)<=0;)l.pop();l.push(h)}return c.slice(0,-1).concat(l.slice(0,-1)).map(u=>[n[u],e,s[u]])}var qh=class{constructor(t,e){this.P=t;this.T=e;let n=1e9,s=-1e9,r=e.length/3,a=new Float64Array(r),o=new Float64Array(r);for(let h=0;h<r;h++){let d=t[e[h*3]*3+1],f=t[e[h*3+1]*3+1],m=t[e[h*3+2]*3+1];a[h]=Math.min(d,f,m),o[h]=Math.max(d,f,m),n=Math.min(n,a[h]),s=Math.max(s,o[h])}this.y0=n;let c=Math.max(1,Math.ceil((s-n)/this.h)+1),l=new Int32Array(c+1);for(let h=0;h<r;h++)for(let d=Math.floor((a[h]-n)/this.h);d<=Math.floor((o[h]-n)/this.h);d++)l[d+1]++;for(let h=0;h<c;h++)l[h+1]+=l[h];this.start=l.slice();let u=l.slice();this.list=new Int32Array(l[c]);for(let h=0;h<r;h++)for(let d=Math.floor((a[h]-n)/this.h);d<=Math.floor((o[h]-n)/this.h);d++)this.list[u[d]++]=h}P;T;start;list;y0;h=.005;px=[];pz=[];girth(t){let e=Math.floor((t-this.y0)/this.h);if(e<0||e>=this.start.length-1)return 0;let n=this.P,s=this.T,r=this.px,a=this.pz;r.length=0,a.length=0;for(let o=this.start[e];o<this.start[e+1];o++){let c=this.list[o],l=s[c*3]*3,u=s[c*3+1]*3,h=s[c*3+2]*3,d=n[l+1]-t,f=n[u+1]-t,m=n[h+1]-t;if(!(d>0&&f>0&&m>0||d<0&&f<0&&m<0)){if(d*f<0){let _=d/(d-f);r.push(n[l]+(n[u]-n[l])*_),a.push(n[l+2]+(n[u+2]-n[l+2])*_)}if(f*m<0){let _=f/(f-m);r.push(n[u]+(n[h]-n[u])*_),a.push(n[u+2]+(n[h+2]-n[u+2])*_)}if(m*d<0){let _=m/(m-d);r.push(n[h]+(n[l]-n[h])*_),a.push(n[h+2]+(n[l+2]-n[h+2])*_)}}}return Hy(r,a)}};function Wh(i,t,e,n,s){let r=s==="max"?-1:1e9,a=t;for(let c=0;c<=n;c++){let l=t+(e-t)*c/n,u=i.girth(l);u<=0||(s==="max"?u>r:u<r)&&(r=u,a=l)}let o=(e-t)/n;for(let c=-4;c<=4;c++){let l=a+o*c/4;if(l<Math.min(t,e)||l>Math.max(t,e))continue;let u=i.girth(l);u>0&&(s==="max"?u>r:u<r)&&(r=u)}return{g:r,y:a}}function ai(i,t){let e=x=>i[t.vOf[x]*3+1],n=x=>[i[t.vOf[x]*3],i[t.vOf[x]*3+1],i[t.vOf[x]*3+2]],s=-1e9,r=1e9;for(let x=1;x<i.length;x+=3)i[x]>s&&(s=i[x]),i[x]<r&&(r=i[x]);let a=e("bustL"),o=e("underbustL"),c=e("crotch"),l=e("navel"),u=c,h=a+.04,d=[],f=t.idx;for(let x=0;x<f.length;x+=3){let b=i[f[x]*3+1],S=i[f[x+1]*3+1],A=i[f[x+2]*3+1];Math.max(b,S,A)>=u&&Math.min(b,S,A)<=h&&d.push(f[x],f[x+1],f[x+2])}let m=Uint32Array.from(d),_=new qh(i,m),p=Wh(_,a-.035,a+.035,10,"max"),g={g:_.girth(o),y:o},T=Wh(_,l-.02,o-.02,14,"min"),M=Wh(_,c+.02,T.y-.06,14,"max"),y=n("acromionL"),v=n("acromionR");return{cm:{height:(s-r)*100,bust:p.g*100,underbust:g.g*100,waist:T.g*100,hips:M.g*100,shoulders:Math.hypot(y[0]-v[0],y[1]-v[1],y[2]-v[2])*100},levels:{bust:p.y,underbust:g.y,waist:T.y,hips:M.y}}}var Xh=["height","bust","underbust","waist","hips","shoulders"];var jh={height:.5,bust:1,underbust:1,waist:1,hips:1,shoulders:1},Nf=()=>typeof performance<"u"?performance.now():Date.now();function Gy(i,t){let e=[];for(let n of t){let s=i[n.a],r=n.b?i[n.b]:void 0;if(s==null||n.b&&r==null)continue;let a=n.expr==="range"?s:n.expr==="ratio"?s/r:s-r;(a<n.min||a>n.max)&&e.push(n.text)}return e}function Vy(i,t,e){if(e<=t[0])return i[0];for(let n=1;n<t.length;n++)if(e<=t[n]){let s=(e-t[n-1])/(t[n]-t[n-1]);return i[n-1]+s*(i[n]-i[n-1])}return i[i.length-1]}function vc(i,t,e,n){let s=i.baseline[n];for(let r=0;r<t.length;r++){let a=i.curves[n]?.[t[r]];a&&(s+=Vy(a,i.samples,e[r]))}return s}function Wy(i,t,e,n,s=1){let r=Xh.filter(m=>e[m]!=null),a=t.map(m=>(i.solver.lambda[m]??1)*s),o=t.map(m=>i.solver.bounds?.[m]?.[0]??-1),c=t.map(m=>i.solver.bounds?.[m]?.[1]??1),l=(m,_)=>Math.max(o[_],Math.min(c[_],m)),u=n.map(l),h=.01,d=m=>{let _=0;for(let p of r){let g=(vc(i,t,m,p)-e[p])/jh[p];_+=g*g}for(let p=0;p<m.length;p++)_+=a[p]*m[p]*m[p];return _},f=d(u);for(let m=0;m<40;m++){let _=[],p=[];for(let x of r){let b=vc(i,t,u,x);_.push((b-e[x])/jh[x]),p.push(t.map((S,A)=>{let P=u.slice();P[A]=l(u[A]+.02,A);let F=u.slice();return F[A]=l(u[A]-.02,A),P[A]===F[A]?0:(vc(i,t,P,x)-vc(i,t,F,x))/((P[A]-F[A])*jh[x])}))}let g=t.length,T=Array.from({length:g},()=>new Array(g).fill(0)),M=new Array(g).fill(0);for(let x=0;x<g;x++){for(let S=0;S<g;S++){let A=0;for(let E=0;E<_.length;E++)A+=p[E][x]*p[E][S];T[x][S]=A}let b=0;for(let S=0;S<_.length;S++)b+=p[S][x]*_[S];M[x]=b+a[x]*u[x],T[x][x]+=a[x]+h*(1+T[x][x])}let y=qy(T,M.map(x=>-x)),v=u.map((x,b)=>l(x+y[b],b)),w=d(v);if(w<f){if(u=v,f=w,h=Math.max(1e-6,h/3),Math.max(...y.map(Math.abs))<1e-4)break}else if(h*=4,h>1e6)break}return u}function qy(i,t){let e=t.length,n=i.map((s,r)=>[...s,t[r]]);for(let s=0;s<e;s++){let r=s;for(let o=s+1;o<e;o++)Math.abs(n[o][s])>Math.abs(n[r][s])&&(r=o);[n[s],n[r]]=[n[r],n[s]];let a=n[s][s]||1e-12;for(let o=0;o<e;o++)if(o!==s){let c=n[o][s]/a;for(let l=s;l<=e;l++)n[o][l]-=c*n[s][l]}}return n.map((s,r)=>s[e]/(s[r]||1e-12))}function Uf(i,t,e,n,s={},r){let a=Nf(),o=e.solver.variables,c=Gy(i,e.plausibility),l={};for(let g of Xh)i[g]!=null&&isFinite(i[g])&&(l[g]=i[g]);let u=r||new Float32Array(t.pos.length),h=e.solver.extra||[],d=o.filter(g=>!h.includes(g)),f=(g,T,M=1,y=6)=>{let v={...l},w=T.slice(),x=1,b=null,S=w,A=0;for(A=1;A<=y;A++){let E={};for(let k of Object.keys(v))E[k]=v[k]/x;w=Wy(e,g,E,w,M);let P={...s};g.forEach((k,U)=>{Math.abs(w[U])>1e-4&&(P[k]=w[U])}),wi(t,P,e,1,u);let F=ai(u,n).cm;l.height!=null&&(x=Math.max(.96,Math.min(1.04,l.height/F.height)));let N=Object.fromEntries(Object.entries(F).map(([k,U])=>[k,U*x])),I={},C=0;for(let k of Object.keys(l))I[k]=N[k]-l[k],C=Math.max(C,Math.abs(I[k]));let L=Xy(e,P,x,N,I,c,A,g,w);if((!b||mr(L)<mr(b))&&(b=L,S=w.slice()),C<.3)break;for(let k of Object.keys(l))v[k]=v[k]-I[k]}return b.iterations=Math.min(A,y),{best:b,x:S}},m=f(d,d.map(()=>0)),_=m.best,p=m.best.iterations;if(_.status!=="validado"&&h.length){let g=f(o,o.map(T=>{let M=d.indexOf(T);return M>=0?m.x[M]:0}));p+=g.best.iterations,mr(g.best)<mr(_)&&(_=g.best)}if(_.status!=="validado"){let g=_.atLimit.length||h.length?o:d,T=g.map(M=>{let y=_.weights[M];return y??0});for(let M of[.25,.05]){let y=f(g,T,M,10);if(p+=y.best.iterations,mr(y.best)<mr(_)&&(_=y.best),_.status==="validado")break}}return _.iterations=p,_.ms=Nf()-a,_}function mr(i){return Object.values(i.error).reduce((t,e)=>t+e**2,0)}function Xy(i,t,e,n,s,r,a,o,c){let l={},u="validado";for(let[d,f]of Object.entries(s)){let m=d==="height"?.5:1;l[d]=Math.abs(f)<=m?"validado":Math.abs(f)<=2?"aproximado":"fuera",l[d]==="fuera"?u="fuera":l[d]==="aproximado"&&u==="validado"&&(u="aproximado")}let h=o.filter((d,f)=>{let m=i.solver.bounds?.[d]??[-1,1];return m[0]===m[1]?!1:c[f]<=m[0]+.005||c[f]>=m[1]-.005});return{weights:t,scale:e,measured:n,error:s,status:u,perMeasure:l,warnings:r.slice(),iterations:a,ms:0,atLimit:h}}function Mc(i,t,e,n,s,r,a,o){wi(i,t,e,n,a);let c=a.length/3,l=0,u=Kh("b",a.length);u.set(a);for(let h=0;h<c;h++){let d=i.bindTri[h*3]*3,f=i.bindTri[h*3+1]*3,m=i.bindTri[h*3+2]*3,_=i.bindBary[h*3],p=i.bindBary[h*3+1],g=i.bindBary[h*3+2],T=_*s[d]+p*s[f]+g*s[m],M=_*s[d+1]+p*s[f+1]+g*s[m+1],y=_*s[d+2]+p*s[f+2]+g*s[m+2],v=s[f]-s[d],w=s[f+1]-s[d+1],x=s[f+2]-s[d+2],b=s[m]-s[d],S=s[m+1]-s[d+1],A=s[m+2]-s[d+2],E=w*A-x*S,P=x*b-v*A,F=v*S-w*b,N=Math.hypot(E,P,F)||1;E/=N,P/=N,F/=N;let I=(a[h*3]-T)*E+(a[h*3+1]-M)*P+(a[h*3+2]-y)*F,C=i.minClear[h]*n;if(I<C){let L=C-I;a[h*3]+=E*L,a[h*3+1]+=P*L,a[h*3+2]+=F*L,l++}if(i.candTri&&i.candK)for(let L=1;L<i.candK;L++){let k=(h*i.candK+L)*3;Ky(s,i.candTri[k]*3,i.candTri[k+1]*3,i.candTri[k+2]*3,a,h*3,C)&&l++}}if(l){let h=Yy(i),d=Kh("c",a.length);for(let f=0;f<a.length;f++)d[f]=a[f]-u[f];for(let f=0;f<4;f++){let m=Kh("c2",d.length);for(let _=0;_<c;_++){let p=h.start[_],g=h.start[_+1],T=0,M=0,y=0;for(let w=p;w<g;w++){let x=h.list[w]*3;T+=d[x],M+=d[x+1],y+=d[x+2]}let v=g-p||1;m[_*3]=Math.max(d[_*3]*.4+.6*T/v,0)*0+(d[_*3]*.4+.6*T/v),m[_*3+1]=d[_*3+1]*.4+.6*M/v,m[_*3+2]=d[_*3+2]*.4+.6*y/v}for(let _=0;_<c;_++){let p=Math.hypot(d[_*3],d[_*3+1],d[_*3+2]),g=Math.hypot(m[_*3],m[_*3+1],m[_*3+2]);if(g<p&&g>1e-9){let T=p/g;m[_*3]*=T,m[_*3+1]*=T,m[_*3+2]*=T}}d.set(m)}for(let f=0;f<a.length;f++)a[f]=u[f]+d[f]}return ri(a,i.idx,i.weld,i.nWeld,o),l}var gr=new Float64Array(3);function jy(i,t,e,n,s,r,a){let o=i[e]-i[t],c=i[e+1]-i[t+1],l=i[e+2]-i[t+2],u=i[n]-i[t],h=i[n+1]-i[t+1],d=i[n+2]-i[t+2],f=s-i[t],m=r-i[t+1],_=a-i[t+2],p=o*f+c*m+l*_,g=u*f+h*m+d*_,T=(U,B,z)=>{gr[0]=U*i[t]+B*i[e]+z*i[n],gr[1]=U*i[t+1]+B*i[e+1]+z*i[n+1],gr[2]=U*i[t+2]+B*i[e+2]+z*i[n+2]};if(p<=0&&g<=0)return T(1,0,0);let M=s-i[e],y=r-i[e+1],v=a-i[e+2],w=o*M+c*y+l*v,x=u*M+h*y+d*v;if(w>=0&&x<=w)return T(0,1,0);let b=p*x-w*g;if(b<=0&&p>=0&&w<=0){let U=p/(p-w);return T(1-U,U,0)}let S=s-i[n],A=r-i[n+1],E=a-i[n+2],P=o*S+c*A+l*E,F=u*S+h*A+d*E;if(F>=0&&P<=F)return T(0,0,1);let N=P*g-p*F;if(N<=0&&g>=0&&F<=0){let U=g/(g-F);return T(1-U,0,U)}let I=w*F-P*x;if(I<=0&&x-w>=0&&P-F>=0){let U=(x-w)/(x-w+(P-F));return T(0,1-U,U)}let C=1/(I+N+b),L=N*C,k=b*C;return T(1-L-k,L,k)}function Ky(i,t,e,n,s,r,a){let o=i[e]-i[t],c=i[e+1]-i[t+1],l=i[e+2]-i[t+2],u=i[n]-i[t],h=i[n+1]-i[t+1],d=i[n+2]-i[t+2],f=c*d-l*h,m=l*u-o*d,_=o*h-c*u,p=Math.hypot(f,m,_)||1;f/=p,m/=p,_/=p,jy(i,t,e,n,s[r],s[r+1],s[r+2]);let g=s[r]-gr[0],T=s[r+1]-gr[1],M=s[r+2]-gr[2];if(Math.hypot(g,T,M)>.03)return!1;let y=g*f+T*m+M*_;if(y>=a)return!1;let v=a-y;return s[r]+=f*v,s[r+1]+=m*v,s[r+2]+=_*v,!0}var kf=new WeakMap;function Yy(i){let t=kf.get(i.idx);if(t)return t;let e=i.pos.length/3,n=Array.from({length:e},()=>new Set);for(let c=0;c<i.idx.length;c+=3)for(let l=0;l<3;l++)for(let u=0;u<3;u++)l!==u&&n[i.idx[c+l]].add(i.idx[c+u]);let s=new Uint32Array(e+1),r=0;n.forEach((c,l)=>{s[l]=r,r+=c.size}),s[e]=r;let a=new Uint32Array(r),o=0;for(let c of n)for(let l of c)a[o++]=l;return t={start:s,list:a},kf.set(i.idx,t),t}var Of=new Map;function Kh(i,t){let e=i+t,n=Of.get(e);return n||(n=new Float32Array(t),Of.set(e,n)),n}function Bf(i,t,e){let n={};for(let a=0;a<t.length;a++)t[a]in n||(n[t[a]]=a);let s=a=>Uint32Array.from(a.filter((o,c)=>c%3===0).map(o=>n[o]).filter(o=>o!=null)),r=e.torso?Uint32Array.from(e.torso.map(a=>n[a]).filter(a=>a!=null)):(()=>{let a=new Set;for(let o=0;o<i.idx.length;o++)a.add(i.idx[o]);return Uint32Array.from(a)})();return{L:s(e.L),R:s(e.R),torso:r}}var Jy=.23,$y={2:[.22,.32],3:[.28,.38],4:[.32,.44],5:[.38,.48],1:[.12,.16]},zf=.004,Zy=.11;function Qy(i,t,e,n,s,r,a,o=zf){let c=_=>Math.floor(_/.01),l=_=>Math.floor(_/.02)+50,u=new Map;for(let _=0;_<e.length;_++){let p=e[_]*3,g=s*i[p];if(g<.02)continue;let T=c(i[p+1])*1e3+l(i[p+2]),M=u.get(T);(M==null||g>M)&&u.set(T,g)}let h=new Float64Array(t.length),d=new Float64Array(t.length),f=new Float64Array(t.length),m=new Float64Array(t.length);for(let _=0;_<t.length;_++){let p=t[_]*3;h[_]=s*(i[p]-n[0]),d[_]=i[p+1]-n[1],f[_]=i[p+2],m[_]=Math.hypot(h[_],d[_])}for(let _=a;_<=.9;_+=.02){let p=_-r,g=Math.cos(p),T=Math.sin(p),M=!0;for(let y=0;y<t.length&&M;y++){if(m[y]<Zy)continue;let v=h[y]*g-d[y]*T,w=d[y]*g+h[y]*T,x=n[0]*s+v,b=n[1]+w;for(let S of[-1,0,1]){let A=u.get(c(b)*1e3+l(f[y])+S);if(A!=null&&x<A+o){M=!1;break}}}if(M)return _}return .9}function Hf(i,t,e,n,s=0){let r=[],a={L:0,R:0};for(let o of["L","R"]){let c=o==="L"?1:-1,l=n["upperarm01."+o],u=n["lowerarm01."+o],h=Math.atan2(u[1]-l[1],c*(u[0]-l[0])),d=Math.PI/2+h,f=i==="natural"?.12:d,m=Math.min(Qy(t,e[o],e.torso,l,c,d,f,zf+s),i==="natural"?.4:.9);a[o]=m;let _=c*(m-d);if(Math.abs(_)>1e-4&&r.push({bone:"upperarm01."+o,axis:[0,0,1],angle:_}),i==="natural"){let p=n["wrist."+o],g=[p[0]-u[0],p[1]-u[1],p[2]-u[2]],T=[u[0]-l[0],u[1]-l[1],u[2]-l[2]],M=S=>{let A=Math.hypot(S[0],S[1],S[2])||1;return[S[0]/A,S[1]/A,S[2]/A]},y=M(g),v=M(T),w=M([v[0],v[1],v[2]+Jy]),x=[y[1]*w[2]-y[2]*w[1],y[2]*w[0]-y[0]*w[2],y[0]*w[1]-y[1]*w[0]],b=Math.hypot(x[0],x[1],x[2]);b>1e-6&&r.push({bone:"lowerarm01."+o,axis:[x[0]/b,x[1]/b,x[2]/b],angle:Math.atan2(b,y[0]*w[0]+y[1]*w[1]+y[2]*w[2])});for(let S=1;S<=5;S++){let A=n[`finger${S}-1.${o}`],E=n[`finger${S}-2.${o}`];if(!A||!E)continue;let P=M([E[0]-A[0],E[1]-A[1],E[2]-A[2]]),F=[-c,0,0],N=P[0]*F[0],I=M([F[0]-N*P[0],-N*P[1],-N*P[2]]),C=M([P[1]*I[2]-P[2]*I[1],P[2]*I[0]-P[0]*I[2],P[0]*I[1]-P[1]*I[0]]);$y[S].forEach((L,k)=>r.push({bone:`finger${S}-${k+1}.${o}`,axis:[C[0],C[1],C[2]],angle:L}))}r.push({bone:"shoulder01."+o,axis:[0,0,1],angle:c*.06})}}return{rots:r,angles:a}}function t_(i,t){let e=0,n=0,s=0;for(let a of t)e+=i[a*3],n+=i[a*3+1],s+=i[a*3+2];e/=t.length,n/=t.length,s/=t.length;let r=Array.from(t,a=>Math.hypot(i[a*3]-e,i[a*3+1]-n,i[a*3+2]-s)).sort((a,o)=>a-o);return{c:[e,n,s],r:r[r.length>>1]}}function Gf(i,t,e,n){let s=0;for(let h of e)s=Math.max(s,h+1);let r=new Int32Array(s).fill(-1);e.forEach((h,d)=>{r[h]<0&&(r[h]=d)});let a=Array.from({length:s},()=>[]);e.forEach((h,d)=>{r[h]!==d&&a[h].push(d)});let o=[0],c=[];for(let h=0;h<s;h++)c.push(...a[h]),o.push(c.length);let l=Array.from({length:s},()=>new Set);for(let h=0;h<t.length;h+=3){let d=e[t[h]],f=e[t[h+1]],m=e[t[h+2]];l[d].add(f).add(m),l[f].add(d).add(m),l[m].add(d).add(f)}let u=h=>{let d=[];for(let b=0;b<n.length/3;b++)Math.sign(n[b*3])===h&&d.push(b);let f=Int32Array.from(d),{c:m,r:_}=t_(n,f),p=[],g=[];for(let b=0;b<s;b++){let S=r[b]*3,A=Math.hypot(i[S]-m[0],i[S+1]-m[1],i[S+2]-m[2]);A<.0185&&i[S+2]>m[2]-.004&&Math.abs(A-_)<.0015&&(p.push(b),g.push(A-_))}let T=new Set(p),M=new Map;for(let b of p)for(let S of l[b])if(!T.has(S)){let A=r[S]*3;Math.hypot(i[A]-m[0],i[A+1]-m[1],i[A+2]-m[2])<.024&&(M.get(S)||M.set(S,[]).get(S)).push(p.indexOf(b))}let y=[],v=[0],w=[];for(let[b,S]of M)y.push(b),w.push(...S),v.push(w.length);let x=new Float64Array(p.length*3);return p.forEach((b,S)=>{for(let A=0;A<3;A++)x[S*3+A]=i[r[b]*3+A]}),{eye:f,c0:m,r0:_,ring:Int32Array.from(p),rb:x,sd0:Float64Array.from(g),nb:Int32Array.from(y),nbStart:Int32Array.from(v),nbW:Float64Array.from(w)}};return{L:u(1),R:u(-1),dupStart:Int32Array.from(o),dup:Int32Array.from(c),firstOf:r}}var Vf=[.08,.03];function Wf(i,t,e,n){let r=1+(Array.isArray(n)?e<0?n[0]:n[1]:n)*e;if(Math.abs(r-1)<1e-6)return r;for(let a of["L","R"]){let o=t[a],c=0,l=0,u=0;for(let h of o.eye)c+=i[h*3],l+=i[h*3+1],u+=i[h*3+2];c/=o.eye.length,l/=o.eye.length,u/=o.eye.length;for(let h of o.eye)i[h*3]=c+r*(i[h*3]-c),i[h*3+1]=l+r*(i[h*3+1]-l),i[h*3+2]=u+r*(i[h*3+2]-u)}return r}var br=new Float64Array(3),Yh=.96,qf=new WeakMap;function e_(i,t,e,n,s,r,a){let o=i[e]-i[t],c=i[e+1]-i[t+1],l=i[e+2]-i[t+2],u=i[n]-i[t],h=i[n+1]-i[t+1],d=i[n+2]-i[t+2],f=s-i[t],m=r-i[t+1],_=a-i[t+2],p=o*f+c*m+l*_,g=u*f+h*m+d*_,T=(U,B,z)=>{br[0]=U*i[t]+B*i[e]+z*i[n],br[1]=U*i[t+1]+B*i[e+1]+z*i[n+1],br[2]=U*i[t+2]+B*i[e+2]+z*i[n+2]};if(p<=0&&g<=0)return T(1,0,0);let M=s-i[e],y=r-i[e+1],v=a-i[e+2],w=o*M+c*y+l*v,x=u*M+h*y+d*v;if(w>=0&&x<=w)return T(0,1,0);let b=p*x-w*g;if(b<=0&&p>=0&&w<=0){let U=p/(p-w);return T(1-U,U,0)}let S=s-i[n],A=r-i[n+1],E=a-i[n+2],P=o*S+c*A+l*E,F=u*S+h*A+d*E;if(F>=0&&P<=F)return T(0,0,1);let N=P*g-p*F;if(N<=0&&g>=0&&F<=0){let U=g/(g-F);return T(1-U,0,U)}let I=w*F-P*x;if(I<=0&&x-w>=0&&P-F>=0){let U=(x-w)/(x-w+(P-F));return T(0,1-U,U)}let C=1/(I+N+b),L=N*C,k=b*C;return T(1-L-k,L,k)}function Jh(i,t,e,n){let{n:s,rest:r,anc:a,ancW:o}=i;for(let T=0;T<s;T++){let M=0,y=0,v=0,w=T*8;for(let x=0;x<8;x++){let b=o[w+x];if(!b)continue;let S=a[w+x]*3;M+=b*(t[S]-e[S]),y+=b*(t[S+1]-e[S+1]),v+=b*(t[S+2]-e[S+2])}n[T*3]=r[T*3]+M,n[T*3+1]=r[T*3+1]+y,n[T*3+2]=r[T*3+2]+v}if(i.ear&&i.ear.nodes.length){let T=i.ear.radii,M=1+i.ear.clear/Math.min(T[0],T[1],T[2]);for(let y of i.ear.sides){let v=0,w=0,x=0;for(let S of y.v)v+=t[S*3],w+=t[S*3+1],x+=t[S*3+2];let b=1/y.v.length;v=v*b+y.off[0],w=w*b+y.off[1],x=x*b+y.off[2];for(let S of i.ear.nodes){let A=S*3,E=(n[A]-v)/T[0],P=(n[A+1]-w)/T[1],F=(n[A+2]-x)/T[2],N=Math.hypot(E,P,F);if(N>=M||N<1e-9)continue;let I=M/N;n[A]=v+E*I*T[0],n[A+1]=w+P*I*T[1],n[A+2]=x+F*I*T[2]}}}let c=i.candK,l=i.minClear,u=i.nodeMode==="pairs",h=qf.get(i);if(!h){let T=u?s/2:s;h=new Int32Array(T).fill(-1);for(let M=0;M<i.candNodes.length;M++)h[i.candNodes[M]]=M;qf.set(i,h)}let d=h.length,f=!!(u&&i.strandFirst),m=0,_=0,p=0,g=0;for(let T=0;T<d;T++){let M=u?T*2:T,y=u?T*2+1:T;f&&(i.strandFirst[T]?_=p=g=0:(_*=Yh,p*=Yh,g*=Yh));let v=h[T];if(v<0&&!(_||p||g))continue;let w=_,x=p,b=g;if(v>=0){let S=(n[M*3]+n[y*3])/2,A=(n[M*3+1]+n[y*3+1])/2,E=(n[M*3+2]+n[y*3+2])/2,P=!1;for(let F=0;F<c;F++){let N=(v*c+F)*3,I=i.candV[N]*3,C=i.candV[N+1]*3,L=i.candV[N+2]*3,k=t[C]-t[I],U=t[C+1]-t[I+1],B=t[C+2]-t[I+2],z=t[L]-t[I],Z=t[L+1]-t[I+1],tt=t[L+2]-t[I+2],at=U*tt-B*Z,nt=B*z-k*tt,ut=k*Z-U*z,X=Math.hypot(at,nt,ut)||1;at/=X,nt/=X,ut/=X,e_(t,I,C,L,S+w,A+x,E+b);let J=S+w-br[0],ct=A+x-br[1],_t=E+b-br[2];if(J*J+ct*ct+_t*_t>9e-4)continue;let ht=J*at+ct*nt+_t*ut;if(ht>=l||J*J+ct*ct+_t*_t-ht*ht>4e-6)continue;let It=l-ht;w+=at*It,x+=nt*It,b+=ut*It,P=!0}P&&m++}(w||x||b)&&(n[M*3]+=w,n[M*3+1]+=x,n[M*3+2]+=b,y!==M&&(n[y*3]+=w,n[y*3+1]+=x,n[y*3+2]+=b),f&&(_=w,p=x,g=b))}return m}function $h(i,t,e){let n=i.length,s={};i.forEach((h,d)=>s[h.name]=d);let r=i.map(()=>[1,0,0,0,1,0,0,0,1]);for(let h of e){let[d,f,m]=h.axis,_=Math.cos(h.angle),p=Math.sin(h.angle),g=1-_;r[s[h.bone]]=[_+d*d*g,d*f*g-m*p,d*m*g+f*p,f*d*g+m*p,_+f*f*g,f*m*g-d*p,m*d*g-f*p,m*f*g+d*p,_+m*m*g]}let a=new Array(n),o=new Array(n),c=new Float64Array(n*12),l=(h,d)=>[0,1,2].flatMap(f=>[0,1,2].map(m=>h[f*3]*d[m]+h[f*3+1]*d[3+m]+h[f*3+2]*d[6+m])),u=(h,d)=>[h[0]*d[0]+h[1]*d[1]+h[2]*d[2],h[3]*d[0]+h[4]*d[1]+h[5]*d[2],h[6]*d[0]+h[7]*d[1]+h[8]*d[2]];return i.forEach((h,d)=>{let f=t[h.name],m=h.parent?t[h.parent]:[0,0,0],_=[f[0]-m[0],f[1]-m[1],f[2]-m[2]];if(h.parent){let g=s[h.parent];a[d]=l(a[g],r[d]);let T=u(a[g],_);o[d]=[o[g][0]+T[0],o[g][1]+T[1],o[g][2]+T[2]]}else a[d]=r[d],o[d]=_;let p=u(a[d],f);for(let g=0;g<9;g++)c[d*12+g]=a[d][g];c[d*12+9]=o[d][0]-p[0],c[d*12+10]=o[d][1]-p[1],c[d*12+11]=o[d][2]-p[2]}),c}function oi(i,t,e,n,s,r){let a=i[t*3],o=i[t*3+1],c=i[t*3+2];if(s[0]=s[1]=s[2]=0,r)for(let l=0;l<9;l++)r[l]=0;for(let l=0;l<4;l++){let u=e.w[t*4+l];if(!u)continue;let h=e.j[t*4+l]*12;if(s[0]+=u*(n[h]*a+n[h+1]*o+n[h+2]*c+n[h+9]),s[1]+=u*(n[h+3]*a+n[h+4]*o+n[h+5]*c+n[h+10]),s[2]+=u*(n[h+6]*a+n[h+7]*o+n[h+8]*c+n[h+11]),r)for(let d=0;d<9;d++)r[d]+=u*n[h+d]}}var Xf=.0025,Ln=.025;function Jf(i,t,e,n){let s=Kf(i,t,e,n.arm,Xf*.6);return n.torso&&(s+=Kf(i,t,e,n.torso,Xf*.4)),s}var jf=new WeakMap;function n_(i){let t=jf.get(i);if(t)return t;let e=new Map,n=new Int32Array(i.tris.length);for(let s=0;s<i.tris.length;s++){let r=i.tris[s],a=e.get(r);a===void 0&&(a=e.size,e.set(r,a)),n[s]=a}return t={uv:Int32Array.from(e.keys()),tl:n},jf.set(i,t),t}function Kf(i,t,e,n,s){let r=n.tris.length/3,a=new Float64Array(r*9),o=[0,0,0],{uv:c,tl:l}=n_(n),u=new Float64Array(c.length*3),h=1e9,d=1e9,f=1e9,m=-1e9,_=-1e9,p=-1e9;for(let I=0;I<c.length;I++)oi(i,c[I],t,e,o),u[I*3]=o[0],u[I*3+1]=o[1],u[I*3+2]=o[2],o[0]<h&&(h=o[0]),o[1]<d&&(d=o[1]),o[2]<f&&(f=o[2]),o[0]>m&&(m=o[0]),o[1]>_&&(_=o[1]),o[2]>p&&(p=o[2]);let g=Math.floor((m-h)/Ln)+1,T=Math.floor((_-d)/Ln)+1,M=Math.floor((p-f)/Ln)+1,y=new Int32Array(r*6);for(let I=0;I<r;I++){let C=1e9,L=1e9,k=1e9,U=-1e9,B=-1e9,z=-1e9;for(let Z=0;Z<3;Z++){let tt=l[I*3+Z]*3,at=u[tt],nt=u[tt+1],ut=u[tt+2],X=I*9+Z*3;a[X]=at,a[X+1]=nt,a[X+2]=ut,at<C&&(C=at),nt<L&&(L=nt),ut<k&&(k=ut),at>U&&(U=at),nt>B&&(B=nt),ut>z&&(z=ut)}y[I*6]=Math.floor((C-h)/Ln),y[I*6+1]=Math.floor((L-d)/Ln),y[I*6+2]=Math.floor((k-f)/Ln),y[I*6+3]=Math.floor((U-h)/Ln),y[I*6+4]=Math.floor((B-d)/Ln),y[I*6+5]=Math.floor((z-f)/Ln)}let v=g*T*M,w=new Int32Array(v+1);for(let I=0;I<r;I++)for(let C=y[I*6];C<=y[I*6+3];C++)for(let L=y[I*6+1];L<=y[I*6+4];L++)for(let k=y[I*6+2];k<=y[I*6+5];k++)w[(C*T+L)*M+k+1]++;for(let I=0;I<v;I++)w[I+1]+=w[I];let x=w.slice(0,v),b=new Int32Array(w[v]);for(let I=0;I<r;I++)for(let C=y[I*6];C<=y[I*6+3];C++)for(let L=y[I*6+1];L<=y[I*6+4];L++)for(let k=y[I*6+2];k<=y[I*6+5];k++)b[x[(C*T+L)*M+k]++]=I;let S=I=>{let C=Math.floor((I[0]-h)/Ln),L=Math.floor((I[1]-d)/Ln),k=Math.floor((I[2]-f)/Ln);return C<0||L<0||k<0||C>=g||L>=T||k>=M?-1:(C*T+L)*M+k},A=n.arm.length,E=new Float64Array(A*3),P=0,F=new Array(9).fill(0),N=[0,0,0];for(let I=0;I<A;I++){oi(i,n.arm[I],t,e,o);let C=S(o);if(C<0||w[C]===w[C+1])continue;let L=1e9,k=[0,0,0],U=0;for(let B=w[C];B<w[C+1];B++){let Z=b[B]*9;i_(a,Z,o,N);let tt=o[0]-N[0],at=o[1]-N[1],nt=o[2]-N[2],ut=Math.hypot(tt,at,nt);if(ut<L){L=ut;let X=a[Z+3]-a[Z],J=a[Z+4]-a[Z+1],ct=a[Z+5]-a[Z+2],_t=a[Z+6]-a[Z],ht=a[Z+7]-a[Z+1],It=a[Z+8]-a[Z+2],Yt=J*It-ct*ht,Et=ct*_t-X*It,Ft=X*ht-J*_t,Qt=Math.hypot(Yt,Et,Ft)||1;Yt/=Qt,Et/=Qt,Ft/=Qt,k=[Yt,Et,Ft],U=tt*Yt+at*Et+nt*Ft}}if(L<.03&&U<s&&U>-.05){let B=s-U;E[I*3]=k[0]*B,E[I*3+1]=k[1]*B,E[I*3+2]=k[2]*B,P++}}if(!P)return 0;for(let I=0;I<3;I++){let C=new Float64Array(E.length);for(let L=0;L<A;L++){let k=0,U=0,B=0,z=n.armStart[L],Z=n.armStart[L+1];for(let ut=z;ut<Z;ut++){let X=n.armNbr[ut]*3;k+=E[X],U+=E[X+1],B+=E[X+2]}let tt=Z-z||1;C[L*3]=.5*E[L*3]+.5*k/tt,C[L*3+1]=.5*E[L*3+1]+.5*U/tt,C[L*3+2]=.5*E[L*3+2]+.5*B/tt;let at=Math.hypot(E[L*3],E[L*3+1],E[L*3+2]),nt=Math.hypot(C[L*3],C[L*3+1],C[L*3+2]);if(nt<at&&nt>1e-9){let ut=at/nt;C[L*3]*=ut,C[L*3+1]*=ut,C[L*3+2]*=ut}}E.set(C)}for(let I=0;I<A;I++){let C=E[I*3],L=E[I*3+1],k=E[I*3+2];if(!C&&!L&&!k)continue;let U=n.arm[I];oi(i,U,t,e,o,F);let B=F[0]*(F[4]*F[8]-F[5]*F[7])-F[1]*(F[3]*F[8]-F[5]*F[6])+F[2]*(F[3]*F[7]-F[4]*F[6]);if(Math.abs(B)<1e-9)continue;let z=1/B,Z=(F[4]*F[8]-F[5]*F[7])*z,tt=(F[2]*F[7]-F[1]*F[8])*z,at=(F[1]*F[5]-F[2]*F[4])*z,nt=(F[5]*F[6]-F[3]*F[8])*z,ut=(F[0]*F[8]-F[2]*F[6])*z,X=(F[2]*F[3]-F[0]*F[5])*z,J=(F[3]*F[7]-F[4]*F[6])*z,ct=(F[1]*F[6]-F[0]*F[7])*z,_t=(F[0]*F[4]-F[1]*F[3])*z,ht=Z*C+tt*L+at*k,It=nt*C+ut*L+X*k,Yt=J*C+ct*L+_t*k;i[U*3]+=ht,i[U*3+1]+=It,i[U*3+2]+=Yt;for(let Et=n.dupStart[I];Et<n.dupStart[I+1];Et++){let Ft=n.dup[Et]*3;i[Ft]+=ht,i[Ft+1]+=It,i[Ft+2]+=Yt}}return P}function i_(i,t,e,n){let s=i[t],r=i[t+1],a=i[t+2],o=i[t+3],c=i[t+4],l=i[t+5],u=i[t+6],h=i[t+7],d=i[t+8],f=o-s,m=c-r,_=l-a,p=u-s,g=h-r,T=d-a,M=e[0]-s,y=e[1]-r,v=e[2]-a,w=(nt,ut,X)=>{n[0]=nt*s+ut*o+X*u,n[1]=nt*r+ut*c+X*h,n[2]=nt*a+ut*l+X*d},x=f*M+m*y+_*v,b=p*M+g*y+T*v;if(x<=0&&b<=0)return w(1,0,0);let S=e[0]-o,A=e[1]-c,E=e[2]-l,P=f*S+m*A+_*E,F=p*S+g*A+T*E;if(P>=0&&F<=P)return w(0,1,0);let N=x*F-P*b;if(N<=0&&x>=0&&P<=0){let nt=x/(x-P);return w(1-nt,nt,0)}let I=e[0]-u,C=e[1]-h,L=e[2]-d,k=f*I+m*C+_*L,U=p*I+g*C+T*L;if(U>=0&&k<=U)return w(0,0,1);let B=k*b-x*U;if(B<=0&&b>=0&&U<=0){let nt=b/(b-U);return w(1-nt,0,nt)}let z=P*U-k*F;if(z<=0&&F-P>=0&&k-U>=0){let nt=(F-P)/(F-P+(k-U));return w(0,1-nt,nt)}let Z=1/(z+B+N),tt=B*Z,at=N*Z;return w(1-tt-at,tt,at)}function $f(i,t){return{arm:Yf(i,t),torso:t.torso?Yf(i,t.torso):void 0}}function Yf(i,t){let e=new Map,n=new Map;for(let a=0;a<i.length;a++){let o=i[a];e.has(o)?(n.get(o)||n.set(o,[]).get(o)).push(a):e.set(o,a)}let s=[0],r=[];for(let a of t.arm)r.push(...n.get(a)||[]),s.push(r.length);return{arm:Int32Array.from(t.arm,a=>e.get(a)),armStart:Int32Array.from(t.armStart),armNbr:Int32Array.from(t.armNbr),tris:Int32Array.from(t.tris,a=>e.get(a)),dupStart:Int32Array.from(s),dup:Int32Array.from(r)}}function Zf(i,t,e=14){let n=new Map,s=new Map;for(let o=0;o<i.length;o++){let c=i[o];n.has(c)?(s.get(c)||s.set(c,[]).get(c)).push(o):n.set(c,o)}let r=[0],a=[];for(let o of t.verts)a.push(...s.get(o)||[]),r.push(a.length);return{v:Int32Array.from(t.verts,o=>n.get(o)),start:Int32Array.from(t.start),nbr:Int32Array.from(t.nbr,o=>n.get(o)),dupStart:Int32Array.from(r),dup:Int32Array.from(a),iters:e}}function Qf(i,t,e,n){let s=n.v.length,r=[0,0,0],a=new Map,o=h=>{let d=a.get(h);return d||(oi(i,h,t,e,r),d=[r[0],r[1],r[2]],a.set(h,d)),d};for(let h=0;h<s;h++){o(n.v[h]);for(let d=n.start[h];d<n.start[h+1];d++)o(n.nbr[d])}let c=Array.from({length:s},(h,d)=>o(n.v[d]).slice()),l=h=>{let d=new Array(s);for(let f=0;f<s;f++){let m=o(n.v[f]),_=0,p=0,g=0,T=n.start[f],M=n.start[f+1];for(let v=T;v<M;v++){let w=o(n.nbr[v]);_+=w[0],p+=w[1],g+=w[2]}let y=M-T;d[f]=[m[0]+h*(_/y-m[0]),m[1]+h*(p/y-m[1]),m[2]+h*(g/y-m[2])]}for(let f=0;f<s;f++){let m=o(n.v[f]);m[0]=d[f][0],m[1]=d[f][1],m[2]=d[f][2]}};for(let h=0;h<n.iters;h++)l(.5),l(-.53);let u=new Array(9).fill(0);for(let h=0;h<s;h++){let d=n.v[h],f=o(d),m=f[0]-c[h][0],_=f[1]-c[h][1],p=f[2]-c[h][2];oi(i,d,t,e,r,u);let g=u[0]*(u[4]*u[8]-u[5]*u[7])-u[1]*(u[3]*u[8]-u[5]*u[6])+u[2]*(u[3]*u[7]-u[4]*u[6]);if(Math.abs(g)<1e-9)continue;let T=1/g,M=((u[4]*u[8]-u[5]*u[7])*m+(u[2]*u[7]-u[1]*u[8])*_+(u[1]*u[5]-u[2]*u[4])*p)*T,y=((u[5]*u[6]-u[3]*u[8])*m+(u[0]*u[8]-u[2]*u[6])*_+(u[2]*u[3]-u[0]*u[5])*p)*T,v=((u[3]*u[7]-u[4]*u[6])*m+(u[1]*u[6]-u[0]*u[7])*_+(u[0]*u[4]-u[1]*u[3])*p)*T;i[d*3]+=M,i[d*3+1]+=y,i[d*3+2]+=v;for(let w=n.dupStart[h];w<n.dupStart[h+1];w++){let x=n.dup[w]*3;i[x]+=M,i[x+1]+=y,i[x+2]+=v}}}async function tp(i){let t=new Ki;if(t.setMeshoptDecoder(pr),!i.endsWith(".b64.txt"))return t.loadAsync(i+"?v=B33");let e=await fetch(i+"?v=B38"),n=e.ok?(await e.text()).trim():"";if(!e.ok||!/^[A-Za-z0-9+/=\s]+$/.test(n)||n.length<100)return t.loadAsync(i.replace(/\.b64\.txt$/,".glb")+"?v=B38");let s=atob(n),r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a);return t.parseAsync(r.buffer,"")}function Zh(i,t){let e=i.width,n=i.height,s=document.createElement("canvas");s.width=e,s.height=n;let r=s.getContext("2d");r.drawImage(i,0,0);let a=r.getImageData(0,0,e,n),o=(f,m=1)=>{let _=0;for(let p=3;p<f.length;p+=4)f[p]*m>t*255&&_++;return _/(f.length/4)},c=o(a.data),l=[a],u=e,h=n;for(;u>1||h>1;){let f=Math.max(1,u>>1),m=Math.max(1,h>>1),_=new ImageData(f,m);for(let T=0;T<m;T++)for(let M=0;M<f;M++)for(let y=0;y<4;y++){let v=0;for(let w=0;w<2;w++)for(let x=0;x<2;x++)v+=a.data[(Math.min(h-1,T*2+w)*u+Math.min(u-1,M*2+x))*4+y];_.data[(T*f+M)*4+y]=v/4}let p=1,g=8;for(let T=0;T<12;T++){let M=(p+g)/2;o(_.data,M)<c?p=M:g=M}for(let T=3;T<_.data.length;T+=4)_.data[T]=Math.min(255,_.data[T]*p);l.push(_),a=_,u=f,h=m}let d=new Fe;return d.mipmaps=l,d.image=l[0],d.generateMipmaps=!1,d.flipY=!0,d.minFilter=mn,d.magFilter=Le,d.wrapS=d.wrapT=Rn,d.needsUpdate=!0,d}async function ep(i){let t=new Image;return t.src=i,await t.decode(),t}async function s_(i,t,e){let n=await ep(i),s=document.createElement("canvas");s.width=n.width,s.height=n.height;let r=s.getContext("2d",{willReadFrequently:!0});r.drawImage(n,0,0);let a=[r.getImageData(0,0,t,e)],o=t,c=e,l=0;for(;o>1||c>1;)o=Math.max(1,o>>1),c=Math.max(1,c>>1),a.push(r.getImageData(t,l,o,c)),l+=c;let u=new Fe;return u.mipmaps=a,u.image=a[0],u.generateMipmaps=!1,u.flipY=!1,u.minFilter=mn,u.magFilter=Le,u.wrapS=u.wrapT=hn,u.anisotropy=4,u.needsUpdate=!0,u}function Qh(i,t,e,n=!1){let s=new Ve({map:i,color:e,roughness:.55,metalness:0,side:Pe,alphaTest:t==="opaque"?.5:.02,transparent:t==="edge",depthWrite:t==="opaque"});return s.onBeforeCompile=r=>{r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 hairTangent; attribute vec2 hairLayer; varying vec3 vHT; varying vec2 vLayer; varying vec2 vHuv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHT = normalize((modelViewMatrix * vec4(hairTangent.xyz, 0.0)).xyz); vLayer = hairLayer; vHuv = uv;`),r.fragmentShader=r.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vHT; varying vec2 vLayer; varying vec2 vHuv;`).replace("#include <map_fragment>",`
vec4 tc = texture2D(map, vHuv); float lum = dot(tc.rgb, vec3(0.333)); ${n?"tc.a *= mix(0.30, 1.0, vLayer.x);":"tc.a = clamp(tc.a * 2.1, 0.0, 1.0);"}
${n?"diffuseColor.rgb *= 0.88 + 0.12 * lum;":`diffuseColor.rgb *= 0.50 + 0.62 * lum;
diffuseColor.rgb *= mix(0.72, 1.0, smoothstep(0.0, 0.9, vLayer.x));`}
diffuseColor.a *= tc.a;
${t==="edge"?n?"if (tc.a >= 0.5) discard; diffuseColor.a = smoothstep(0.02, 0.5, tc.a) * 0.55;":"if (tc.a >= 0.5) discard; diffuseColor.a = smoothstep(0.02, 0.5, tc.a) * 0.9;":""}`).replace("#include <opaque_fragment>",n?`outgoingLight = diffuseColor.rgb * (0.55 + 0.45 * vLayer.x);   // pesta\xF1as: mate, sin reflejo blanco
#include <opaque_fragment>`:`
#if NUM_DIR_LIGHTS > 0
{ vec3 L = directionalLights[0].direction; vec3 V = normalize(vViewPosition); vec3 T = normalize(vHT);
  float shf = (lum - 0.5) * 0.25;
  vec3 T1 = normalize(T + normal * (0.08 + shf)), T2 = normalize(T - normal * (0.12 - shf));
  vec3 Hh = normalize(L + V); float t1 = dot(T1, Hh), t2 = dot(T2, Hh);
  float s1 = pow(sqrt(max(0.0, 1.0 - t1 * t1)), 90.0), s2 = pow(sqrt(max(0.0, 1.0 - t2 * t2)), 22.0);
  float lit = (smoothstep(-0.2, 0.5, dot(normal, L)) * 0.75 + 0.25) * mix(0.5, 1.0, vLayer.x);
  outgoingLight += directionalLights[0].color * (s1 * 0.05 + s2 * 0.14 * diffuseColor.rgb) * lit; }
#endif
#include <opaque_fragment>`)},s.customProgramCacheKey=()=>"g1-mesh-hair-"+t+(n?"l":""),s}function r_(i,t,e,n=-9,s=-9,r=1,a=-9){let o=new Ve({map:i,color:e,roughness:.88,metalness:0,envMapIntensity:.1,side:Pe,alphaTest:t!=="edge"?.5:.02,transparent:t==="edge",depthWrite:t!=="edge"});return o.onBeforeCompile=c=>{c.vertexShader=c.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 hairTangent; attribute vec2 hairLayer; attribute vec3 hairRoot; varying vec3 vHT; varying vec2 vLayer; varying vec2 vHuv; varying vec3 vRoot; varying vec3 vTo; varying float vPy; varying float vPz; uniform float uTipY;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHT = normalize((modelViewMatrix * vec4(hairTangent.xyz, 0.0)).xyz); vLayer = hairLayer; vHuv = uv; vRoot = hairRoot; vTo = hairTangent.xyz; if (uTipY > -5.0 && hairLayer.y < 0.2 && transformed.z < -0.042 && transformed.y < 1.485) transformed.z = -0.042;   // coleta/trenza: la l\xE1mina trasera pegada al cr\xE1neo (sin borde p\xE1lido de canto)
vPy = position.y; vPz = position.z;${t.startsWith("under")?` transformed -= normalize(normal) * ${t==="under2"?"0.024":"0.009"};`:""}`),c.uniforms.uTipY={value:n},c.uniforms.uBotY={value:s},c.uniforms.uLen={value:r},c.uniforms.uCapY={value:a},c.fragmentShader=c.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vHT; varying vec2 vLayer; varying vec2 vHuv; varying vec3 vRoot; varying vec3 vTo; varying float vPy; varying float vPz; uniform float uTipY; uniform float uBotY; uniform float uLen; uniform float uCapY;
float h3(vec3 p) { p = fract(p * 0.3183099 + 0.1); p *= 17.0; return fract(p.x * p.y * p.z * (p.x + p.y + p.z)); }
float vn3(vec3 x) { vec3 i = floor(x), f = fract(x); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(h3(i), h3(i + vec3(1,0,0)), f.x), mix(h3(i + vec3(0,1,0)), h3(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(h3(i + vec3(0,0,1)), h3(i + vec3(1,0,1)), f.x), mix(h3(i + vec3(0,1,1)), h3(i + vec3(1,1,1)), f.x), f.y), f.z); }`).replace("#include <map_fragment>",`
float lum; float alphaS; float k = vLayer.y;
// tipos: <0,2 volumen (k/0,19 = cercan\xEDa al nacimiento o a la raya) \xB7 0,2\u20130,5 tubo \xB7 0,5\u20131,5 tira \xB7 1,5\u20132,5 goma \xB7 >2,5 cuero cabelludo
if (k < 0.5) {
  vec3 To = normalize(vTo); vec3 rp = vRoot - To * dot(vRoot, To) * 0.985;      // hebras alineadas con el flujo (sin veteado)
  float fq = k > 0.2 ? 520.0 : 1100.0;                               // tubos (rizos, cola): hebras algo m\xE1s gruesas
  vec3 r = rp * fq; float aa = clamp(1.6 - length(fwidth(r)), 0.0, 1.0);
  float n1 = vn3(r), n2 = vn3(rp * 320.0 + 7.0), n3 = vn3(vRoot * 70.0 + 13.0);
  lum = 0.50 + (n1 - 0.5) * (k > 0.2 ? 0.62 : 0.46) * aa + (n2 - 0.5) * 0.30 + (n3 - 0.5) * 0.12; alphaS = 1.0;
  if (k > 0.2 && uTipY > -5.0) { float dd = vPy - uTipY + (n3 - 0.5) * 0.02; alphaS = smoothstep(0.0, 0.11, dd); }   // F3: la punta de coleta y trenza se desvanece en hebras finas, sin pico r\xEDgido
  if (k < 0.2 && uBotY > -5.0) { float nz = vn3(vRoot * 95.0 + 3.0), nf = vn3(vRoot * 420.0 + 1.0), ns = vn3(vec3(vRoot.x * 30.0, 0.0, vRoot.z * 30.0) + 9.0);
    float stag = uLen * (0.012 + 0.10 * (0.45 * ns + 0.40 * nz + 0.15 * nf));      // F3: cada mech\xF3n termina a distinta altura
    alphaS = smoothstep(0.0, uLen * 0.15 + 0.004, vPy - uBotY - stag); }          // y con degradado alfa hacia la punta (sin corte de regla)
  if (k < 0.2) {                                                     // G3 \xB7 nacimiento y raya: el borde termina en puntas de hebra
    float e = clamp(k / 0.19, 0.0, 1.0);
    e *= smoothstep(-0.01, 0.04, vPz);                         // F3: el borde en puntas solo en el frente (nacimiento); atr\xE1s la melena es continua (sin agujeros)
    float nn = mix(0.5, n1, aa);
    alphaS *= clamp((1.0 - e) * 1.45 + (nn - 0.5) * 0.95 * e + (n2 - 0.5) * 0.22 * e, 0.0, 1.0);
    lum -= 0.06 * e;                                                 // las puntas finas se ven algo m\xE1s oscuras
  }
} else if (k > 2.5) {
  float sp = smoothstep(0.35, 0.95, vn3(vRoot * 900.0)) * clamp(1.4 - length(fwidth(vRoot * 900.0)) * 2.0, 0.0, 1.0);   // B32: textura de cuero cabelludo m\xE1s fina y suave (sin bloques)
  float ax = smoothstep(0.04, 0.95, vLayer.x); lum = 0.1 + 0.25 * sp * (0.35 + 0.65 * ax) * (uCapY > -5.0 ? smoothstep(uCapY + 0.02, uCapY + 0.12, vPy) : 1.0); alphaS = ax * ax * (0.88 + 0.12 * sp);
  if (uCapY > -5.0) alphaS *= (uBotY > -5.0 ? smoothstep(uCapY + 0.03, uCapY + 0.07, vPy) : smoothstep(uCapY - 0.012, uCapY + 0.075, vPy));   // el casquete del cuero cabelludo no cuelga bajo la melena (mancha en la nuca)     // cuero cabelludo: tono del cabello, ra\xEDces punteadas; Fase 3: la franja del nacimiento se desvanece de forma gradual hacia la piel
} else if (k > 1.5) {
  lum = 0.0; alphaS = 1.0;                                           // goma de la coleta
} else {
  vec4 tc = texture2D(map, vHuv); lum = mix(0.46, tc.r, 0.3) * (0.92 + 0.16 * vRoot.y) + 0.02; alphaS = clamp(tc.a * 2.3, 0.0, 1.0); alphaS *= mix(0.6, 1.0, smoothstep(0.0, 0.2, min(vHuv.x, 1.0 - vHuv.x)));   // B38: borde lateral de cada tira m\xE1s suave
  { float sa = vn3(vec3(vHuv.x * 260.0, 1.7, 5.0)), sb = vn3(vec3(vHuv.x * 950.0, 3.1, 1.0)), sc = vn3(vec3(vHuv.x * 70.0, 8.3, 2.0));
    float endv = mix(0.66, 0.985, clamp(0.5 * sa + 0.3 * sb + 0.2 * sc, 0.0, 1.0));              // F3: cada hebra termina a una altura distinta (puntas escalonadas)
    if (uBotY > -5.0) alphaS *= smoothstep(uBotY + uLen * 0.015, uBotY + uLen * 0.12, vPy);   // B15: las tiras no cuelgan por debajo del borde de la melena (plumillas sueltas)
    float lowW = uBotY > -5.0 ? 1.0 - smoothstep(0.0, uLen * 0.16, vPy - uBotY) : 1.0;           // solo en el tramo final de la melena: arriba las tiras no se desvanecen (sin huecos)
    if (k < 1.15) alphaS = max(alphaS, 0.62 * (1.0 - lowW));   // F3: el interior de la melena no deja huecos entre mechones
    alphaS *= 1.0 - lowW * smoothstep(endv - 0.14, endv, vHuv.y);                                       // y con degradado alfa hacia la punta
    lum += (sb - 0.5) * 0.15 * (0.4 + 0.6 * smoothstep(0.0, 0.5, vHuv.y)) + (sa - 0.5) * 0.09; }    // F3: definici\xF3n de mechones
  lum = min(lum, 0.50 + 0.10 * (1.0 - smoothstep(0.0, 0.6, vHuv.y)));                           // F3: sin reflejos blancos en las tiras (puntos blancos en la vista trasera)
  if (k > 1.15) { alphaS = min(alphaS, 0.48) * 0.22 * smoothstep(-0.01, 0.04, vPz); lum += 0.10; }   // el vello solo en el frente (nacimiento): atr\xE1s deja manchas p\xE1lidas transl\xFAcidas   // vello del nacimiento: fino y transl\xFAcido
}
diffuseColor.rgb *= 0.55 + 0.75 * lum;
if (uBotY > -5.0 && k < 2.5) diffuseColor.rgb *= mix(0.62, 1.0, smoothstep(0.0, uLen * 0.10 + 0.01, vPy - uBotY));   // B33: puntas m\xE1s oscuras y parejas (sin hebras gris\xE1ceas en el borde inferior)
if (k > 1.5 && k < 2.5) diffuseColor.rgb *= 0.45;   // liga: tono oscuro del propio cabello (no negro duro)
if (k > 2.5) diffuseColor.rgb *= 0.55;
else diffuseColor.rgb *= mix(0.84, 1.0, smoothstep(0.0, 0.9, vLayer.x));   // B32: menos contraste entre capas (sin bloques)
diffuseColor.a *= alphaS;
${t.startsWith("under")?"if (k >= 0.2 || vPz > -0.01) discard; diffuseColor.rgb *= 0.62;":""}
${t==="edge"?"if ((k > 1.5 && k < 2.5) || (k < 2.5 && alphaS >= 0.5) || (uBotY > -5.0 && k < 1.15 && vPy - uBotY < uLen * 0.34)) discard; diffuseColor.a = k > 2.5 ? alphaS : (k > 0.5 && k < 1.15 ? smoothstep(0.18, 0.46, alphaS) : smoothstep(0.12, 0.4, alphaS)) * 0.97;   // B33: borde inferior sin flecos transl\xFAcidos gris\xE1ceos   // B15: las tiras no dejan franjas claras transl\xFAcidas sobre la piel":"if (k > 2.5) discard;"}`).replace("#include <opaque_fragment>",`
#if NUM_DIR_LIGHTS > 0
{ vec3 L = directionalLights[0].direction; vec3 V = normalize(vViewPosition); vec3 T = normalize(vHT);
  float shf = (lum - 0.5) * 0.3;
  vec3 T1 = normalize(T + normal * (0.08 + shf)), T2 = normalize(T - normal * (0.12 - shf));
  vec3 Hh = normalize(L + V); float t1 = dot(T1, Hh), t2 = dot(T2, Hh);
  float s1 = pow(sqrt(max(0.0, 1.0 - t1 * t1)), 90.0), s2 = pow(sqrt(max(0.0, 1.0 - t2 * t2)), 22.0);
  float lit = (smoothstep(-0.2, 0.5, dot(normal, L)) * 0.75 + 0.25) * mix(0.45, 1.0, vLayer.x);
  float graze = smoothstep(0.05, 0.45, abs(dot(normal, V)));            // sin brillo pl\xE1stico en el contorno
  outgoingLight += directionalLights[0].color * (s1 * 0.022 + s2 * 0.10 * diffuseColor.rgb) * lit * (0.6 + 0.8 * lum) * graze; }
#endif
{ float inside = dot(normalize(vNormal), normalize(vViewPosition));      // cara interior de una capa vista por un hueco
  if (vLayer.y < 1.5) outgoingLight *= mix(mix(1.0, 0.68, smoothstep(0.42, 0.55, vLayer.x)), 1.0, smoothstep(-0.25, 0.05, inside)); }   // G3.1: la capa pegada a la piel (nuca de los recogidos) no se oscurece
if (vLayer.y > 2.5) outgoingLight *= 0.9;
if (uBotY > -5.0 && vLayer.y < 2.5) { float hemM = 1.0 - smoothstep(0.0, uLen * 0.14 + 0.01, vPy - uBotY); outgoingLight = mix(outgoingLight, min(outgoingLight, diffuseColor.rgb * 0.85), hemM); }   // B33: sin destellos grises en el borde inferior
#include <opaque_fragment>`)},o.customProgramCacheKey=()=>"g2-hair-"+t,o}var Sc=class{constructor(t,e){this.eng=t;this.parent=e}eng;parent;cat;base="";color=new Mt;colorId="";styleId="";gathered=!1;mesh=null;data=null;out=null;cache=new Map;used=null;posed=null;tex={};uniforms={uHair:{value:new Mt}};async load(t=""){this.base=t,this.cat=await(await fetch(t+"hairCatalog.json?v=B33")).json();let[e,n,s]=await Promise.all(["hair_atlas.png","hair_atlas_curly.png","hair_afro.png"].map(r=>ep(t+r)));this.tex.straight=Zh(e,.5),this.tex.curly=Zh(n,.5),this.tex.afro=Zh(s,.3),this.colorId=this.cat.default.color,this.color.set(this.cat.colors.find(r=>r.id===this.colorId).hex),await this.setStyle(this.cat.default.style)}resolve(t){return this.cat.aliases?.[t]??t}style(t=this.styleId){return t=this.resolve(t),this.cat.styles.find(e=>e.id===t)}shownId(){let t=this.style();return this.gathered&&t.gather?t.gather:t.id}async setStyle(t){this.styleId=this.resolve(t),await this.show(this.shownId())}async setGathered(t){this.gathered=t,await this.show(this.shownId())}material(t){let e=this.style().texture==="rizado"||this.style().texture==="muy-rizado",n=t==="afro"?this.tex.afro:e?this.tex.curly:this.tex.straight,s=new Ve({map:n,color:this.color,roughness:.62,metalness:0,side:Pe,alphaTest:t==="afro"?.3:.5}),r=t==="afro";return s.onBeforeCompile=a=>{a.vertexShader=a.vertexShader.replace("#include <common>",`#include <common>
attribute vec4 hairTangent; attribute vec2 hairLayer; varying vec3 vHT; varying vec2 vLayer; varying vec2 vHuv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vHT = normalize((modelViewMatrix * vec4(hairTangent.xyz, 0.0)).xyz); vLayer = hairLayer; vHuv = uv;`),a.fragmentShader=a.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vHT; varying vec2 vLayer; varying vec2 vHuv;`).replace("#include <map_fragment>",r?`
vec4 tc = texture2D(map, vHuv); diffuseColor.rgb *= (0.6 + 0.6 * tc.rgb) * mix(0.6, 1.05, vLayer.x);
float cov = vLayer.x < 0.3 ? 1.0 : tc.a * (1.35 - vLayer.x);          // capas interiores opacas, exteriores deshilachadas
diffuseColor.a = cov * smoothstep(0.0, 0.6, vLayer.y + (tc.a - 0.5) * 0.3);`:`
vec4 tc = texture2D(map, vHuv); diffuseColor.rgb *= 0.55 + 0.75 * tc.rgb; diffuseColor.a *= tc.a;
diffuseColor.rgb *= mix(0.62, 1.0, smoothstep(0.0, 0.35, vHuv.y));`).replace("#include <opaque_fragment>",`
#if NUM_DIR_LIGHTS > 0
{ vec3 L = directionalLights[0].direction; vec3 V = normalize(vViewPosition); vec3 Hh = normalize(L + V); vec3 T = normalize(vHT);
  float t1 = dot(T, Hh); float s1 = pow(max(0.0, sqrt(max(0.0, 1.0 - t1 * t1))), 110.0);
  vec3 T2 = normalize(T + normal * 0.2); float t2 = dot(T2, Hh); float s2 = pow(max(0.0, sqrt(max(0.0, 1.0 - t2 * t2))), 28.0);
  float lit = (smoothstep(-0.1, 0.4, dot(normal, L)) * 0.7 + 0.3) * smoothstep(0.5, 0.9, tc.a);
  outgoingLight += directionalLights[0].color * (s1 * 0.06 * mix(vec3(1.0), diffuseColor.rgb * 2.0, 0.5) + s2 * 0.16 * diffuseColor.rgb) * lit${r?" * 0.3":""}; }
#endif
#include <opaque_fragment>`)},s.customProgramCacheKey=()=>"miriz-hair-"+t+(e?"c":"s"),s}async show(t){let e=this.cache.get(t);if(!e){let[s,r]=await Promise.all([tp(this.base+`hair_${t}`+(window.MIRIZ_HAIR_EXT||".glb")),fetch(this.base+`hair_${t}_bind.json?v=B33`).then(A=>A.json())]),a=null;s.scene.traverse(A=>{A.isSkinnedMesh&&!a&&(a=A)});let o=a,c=o.geometry,l=c.getAttribute("position").count,u=this.eng.weldFirst,h=new Uint32Array(l*8),d=new Float32Array(l*8),f=c.getAttribute("_ancj0"),m=c.getAttribute("_ancj1"),_=c.getAttribute("_ancw0"),p=c.getAttribute("_ancw1");for(let A=0;A<l;A++)for(let E=0;E<4;E++)h[A*8+E]=u[f.getComponent(A,E)],h[A*8+4+E]=u[m.getComponent(A,E)],d[A*8+E]=_.getComponent(A,E),d[A*8+4+E]=p.getComponent(A,E);for(let A of["_ancj0","_ancj1","_ancw0","_ancw1"])c.deleteAttribute(A);let g=c.getAttribute("tangent");g&&(c.setAttribute("hairTangent",g),c.deleteAttribute("tangent"));let T=c.getAttribute("uv1"),M=new Float32Array(l*2);if(T)for(let A=0;A<l;A++)M[A*2]=T.getX(A),M[A*2+1]=T.getY(A);else M.fill(1);c.setAttribute("hairLayer",new Xt(M,2)),T&&c.deleteAttribute("uv1");let y=c.getAttribute("position"),v=Float32Array.from(y.array);c.setAttribute("position",new Xt(Float32Array.from(v),3));let w=(A,E)=>{let P=Uint8Array.from(atob(A),F=>F.charCodeAt(0));return new E(P.buffer)},x={n:l,rest:v,anc:h,ancW:d,nodeMode:r.nodeMode,candNodes:w(r.candNodes,Uint32Array),candV:w(r.candTriWeld,Uint32Array).map(A=>u[A]),candK:r.candK,minClear:r.minClear,strandFirst:r.strandFirst?w(r.strandFirst,Uint8Array):void 0};r.ear&&(x.ear={nodes:w(r.ear.nodes,Uint32Array),radii:r.ear.radii,clear:r.ear.clear,sides:r.ear.sides.map(A=>({v:w(A.weld,Uint32Array).map(E=>u[E]),off:A.off}))}),r.tex&&(o.userData.g1={tex:r.tex,mips:r.texMips,g2:!!r.g2}),typeof window<"u"&&window.dispatchEvent(new CustomEvent("miriz-hair-scalp",{detail:!r.g3}));let b=c.getAttribute("_root");b&&(c.setAttribute("hairRoot",b),c.deleteAttribute("_root")),o.frustumCulled=!1,o.castShadow=!0,o.receiveShadow=!1;let S=new Set;for(let A=0;A<h.length;A++)d[A]&&S.add(h[A]);for(let A of x.candV)S.add(A);if(x.ear)for(let A of x.ear.sides)for(let E of A.v)S.add(E);e={mesh:o,data:x,used:Uint32Array.from(S)},this.cache.set(t,e)}this.mesh&&this.parent.remove(this.mesh),this.edge&&(this.parent.remove(this.edge),this.edge=null),this.under&&(this.parent.remove(this.under),this.under=null),this.under2&&(this.parent.remove(this.under2),this.under2=null),this.sheet&&(this.parent.remove(this.sheet),this.sheet.geometry.dispose(),this.sheet=null),this.sheetOn=!1;let n=e.mesh.userData.g1;if(n){let s=await this.meshTex(n.tex,n.mips),r=n.g2?r_:Qh,a=-9,o=-9,c=1,l=-9;{let h=e.mesh.geometry,d=h.getAttribute("position"),f=h.getAttribute("hairLayer"),m=1e9,_=1e9,p=-1e9;for(let g=0;g<d.count;g++){let T=f.getY(g),M=d.getY(g);T>.2&&T<.5&&(m=Math.min(m,M)),T<.2&&(_=Math.min(_,M),p=Math.max(p,M))}_<1e8&&(l=_),m<1e8?a=m:_<1e8&&(o=_,c=Math.max(.15,p-_))}if(e.mesh.material=r(s,"opaque",this.color,a,o,c,l),this.sheetOn=!!(n.g2&&o>-5),n.g2&&o>-5&&c>.3){let h=new fn(e.mesh.geometry,r(s,"under",this.color,a,o,c,l));h.frustumCulled=!1,h.bind(this.eng.skeleton,new jt),this.under=h,this.parent.add(h);let d=new fn(e.mesh.geometry,r(s,"under2",this.color,a,o,c,l));d.frustumCulled=!1,d.bind(this.eng.skeleton,new jt),this.under2=d,this.parent.add(d)}let u=new fn(e.mesh.geometry,r(s,"edge",this.color,a,o,c,l));u.frustumCulled=!1,u.renderOrder=2,u.bind(this.eng.skeleton,new jt),this.edge=u,this.parent.add(u)}else e.mesh.material=this.material(this.cat.styles.find(s=>s.id===t)?.kind||"loose");this.mesh=e.mesh,this.data=e.data,this.used=e.used,this.out=new Float32Array(e.data.n*3),this.parent.add(this.mesh),this.fit()}sheet=null;sheetOn=!1;edge=null;under=null;under2=null;texCache=new Map;async meshTex(t,e){let n=this.texCache.get(t);return n||(n=await s_(this.base+t,e.w,e.h),this.texCache.set(t,n)),n}lash=null;async setLashes(t){let[e,n]=await Promise.all([tp(this.base+`hair_${t}`+(window.MIRIZ_HAIR_EXT||".glb")),fetch(this.base+`hair_${t}_bind.json?v=B33`).then(v=>v.json())]),s=null;e.scene.traverse(v=>{v.isSkinnedMesh&&!s&&(s=v)});let r=s.geometry,a=r.getAttribute("position").count,o=this.eng.weldFirst,c=new Uint32Array(a*8),l=new Float32Array(a*8),u=r.getAttribute("_ancj0"),h=r.getAttribute("_ancj1"),d=r.getAttribute("_ancw0"),f=r.getAttribute("_ancw1");for(let v=0;v<a;v++)for(let w=0;w<4;w++)c[v*8+w]=o[u.getComponent(v,w)],c[v*8+4+w]=o[h.getComponent(v,w)],l[v*8+w]=d.getComponent(v,w),l[v*8+4+w]=f.getComponent(v,w);let m=r.getAttribute("tangent");m&&(r.setAttribute("hairTangent",m),r.deleteAttribute("tangent")),r.setAttribute("hairLayer",new Xt(new Float32Array(a*2).fill(1),2));let _=Float32Array.from(r.getAttribute("position").array);r.setAttribute("position",new Xt(Float32Array.from(_),3));let p={n:a,rest:_,anc:c,ancW:l,nodeMode:"afro",candNodes:new Uint32Array(0),candV:new Uint32Array(0),candK:1,minClear:0},g=await this.meshTex(n.tex,n.texMips),T=this.lashColor(),M=new fn(r,Qh(g,"opaque",T,!0)),y=new fn(r,Qh(g,"edge",T,!0));this.lash&&this.parent.remove(this.lash.mesh,this.lash.edge);for(let v of[M,y])v.frustumCulled=!1,v.bind(this.eng.skeleton,new jt),this.parent.add(v);y.renderOrder=3,this.lash={mesh:M,edge:y,data:p,out:new Float32Array(a*3)},this.eng.lashes.mesh.visible=!1,this.fitLash()}shortenLashes(t){let e=window.MIRIZ_LASH_K??.5,n=.0125,s=.0068,r=new q;for(let a of["eye.L","eye.R"]){let o=this.eng.bones[a];if(o){o.getWorldPosition(r);for(let c=0;c<t.length;c+=3){let l=t[c]-r.x;if(Math.sign(l)!==Math.sign(r.x)&&Math.abs(r.x)>1e-4||Math.abs(l)>.03)continue;let u=t[c+1]-r.y,h=t[c+2]-r.z;if(Math.abs(u)>.03||Math.abs(h)>.04)continue;let d=Math.hypot(l/n,u/s);if(d<=1)continue;let f=(1+(d-1)*e)/d;t[c]=r.x+l*f,t[c+1]=r.y+u*f}}}}lashColor(){return new Mt("#44322a").lerp(this.color,.35)}markLowerLashes(t,e){let n=new q,s=[];for(let r of["eye.L","eye.R"]){let a=this.eng.bones[r];if(!a)return;a.getWorldPosition(n),s.push(n.clone())}for(let r=0;r<t.length/3;r++){let a=t[r*3]*s[0].x>=0?s[0]:s[1],o=Math.min(1,Math.max(0,(t[r*3+1]-a.y+.002)/.004));e.setX(r,.3+.7*o)}e.needsUpdate=!0}fitLash(){if(!this.lash)return;let t=this.lash;Jh(t.data,this.eng.body.out,this.eng.bodyRest,t.out),this.shortenLashes(t.out),t.marked||(this.markLowerLashes(t.out,t.mesh.geometry.getAttribute("hairLayer")),t.marked=!0),t.mesh.geometry.getAttribute("position").copyArray(t.out).needsUpdate=!0,t.mesh.geometry.computeBoundingSphere()}fit(){if(this.fitLash(),!this.mesh||!this.data||!this.out)return 0;let t=this.eng,e=t.body.out;if(t.skinS&&this.used){(!this.posed||this.posed.length!==e.length)&&(this.posed=new Float32Array(e.length)),this.posed.set(e);let r=[0,0,0];for(let a of this.used)oi(e,a,t.bodySkin,t.skinS,r),this.posed[a*3]=r[0],this.posed[a*3+1]=r[1],this.posed[a*3+2]=r[2];e=this.posed}let n=Jh(this.data,e,t.bodyRest,this.out),s=this.mesh.geometry;return s.getAttribute("position").copyArray(this.out).needsUpdate=!0,s.computeBoundingSphere(),this.buildSheet(),n}buildSheet(){if(this.sheet&&(this.parent.remove(this.sheet),this.sheet.geometry.dispose(),this.sheet=null),!this.sheetOn||!this.mesh||!this.out)return;let t=this.mesh.geometry,e=t.getAttribute("hairLayer"),n=t.getAttribute("skinIndex"),s=t.getAttribute("skinWeight");if(!n||!s)return;let r=this.out,a=r.length/3,o=.005,c=.014,l=1e9,u=-1e9,h=1e9,d=-1e9,f=[];for(let L=0;L<a;L++)e.getY(L)>=.2||r[L*3+2]>-.01||(f.push(L),l=Math.min(l,r[L*3]),u=Math.max(u,r[L*3]),h=Math.min(h,r[L*3+1]),d=Math.max(d,r[L*3+1]));if(f.length<20)return;let m=Math.ceil((u-l)/o)+1,_=Math.ceil((d-h)/o)+1,p=new Float32Array(m*_).fill(1e9),g=new Int32Array(m*_).fill(-1);for(let L of f){let k=Math.round((r[L*3]-l)/o),U=Math.round((r[L*3+1]-h)/o),B=U*m+k;r[L*3+2]<p[B]&&(p[B]=r[L*3+2],g[B]=L)}let T=p.slice(),M=g.slice();for(let L=0;L<_;L++)for(let k=0;k<m;k++){let U=L*m+k;if(g[U]>=0)continue;let B=-1,z=99;for(let Z=-2;Z<=2;Z++)for(let tt=-2;tt<=2;tt++){let at=k+tt,nt=L+Z;if(at<0||nt<0||at>=m||nt>=_)continue;let ut=tt*tt+Z*Z;g[nt*m+at]>=0&&ut<z&&(z=ut,B=nt*m+at)}B>=0&&(T[U]=p[B],M[U]=g[B])}let y=4,v=9,w=new Uint8Array(m*_);for(let L=v;L<_-y;L++)for(let k=y;k<m-y;k++){let U=1;for(let B=-v;B<=y&&U;B++)for(let z=-y;z<=y;z++)if(M[(L+B)*m+k+z]<0){U=0;break}w[L*m+k]=U}let x=new Float32Array(m*_);for(let L=0;L<_;L++)for(let k=0;k<m;k++){let U=0,B=0;for(let z=-1;z<=1;z++)for(let Z=-1;Z<=1;Z++){let tt=k+Z,at=L+z;tt<0||at<0||tt>=m||at>=_||M[at*m+tt]<0||(U+=T[at*m+tt],B++)}x[L*m+k]=B?U/B:0}let b=new Int32Array(m*_).fill(-1),S=[],A=[],E=[],P=0;for(let L=0;L<m*_;L++)if(w[L]){b[L]=P++;let k=L%m,U=(L-k)/m,B=M[L];S.push(l+k*o,h+U*o,x[L]+c);for(let z=0;z<4;z++)A.push(n.getComponent(B,z)),E.push(s.getComponent(B,z))}let F=[];for(let L=0;L<_-1;L++)for(let k=0;k<m-1;k++){let U=b[L*m+k],B=b[L*m+k+1],z=b[(L+1)*m+k],Z=b[(L+1)*m+k+1];U>=0&&B>=0&&z>=0&&Z>=0&&F.push(U,z,B,B,z,Z)}if(!F.length)return;let N=new Te;N.setAttribute("position",new ke(S,3)),N.setAttribute("skinIndex",new os(A,4)),N.setAttribute("skinWeight",new ke(E,4)),N.setIndex(F),N.computeVertexNormals();let I=new Ve({color:this.color.clone().multiplyScalar(.72),roughness:1,metalness:0,side:Pe}),C=new fn(N,I);C.frustumCulled=!1,C.bind(this.eng.skeleton,new jt),this.sheet=C,this.parent.add(C)}setColor(t){this.colorId=t;let e=this.cat.colors.find(n=>n.id===t);if(this.color.set(e.hex),this.mesh&&this.mesh.material.color.copy(this.color),this.edge&&this.edge.material.color.copy(this.color),this.under&&this.under.material.color.copy(this.color),this.under2&&this.under2.material.color.copy(this.color),this.sheet&&this.sheet.material.color.copy(this.color).multiplyScalar(.72),this.lash){let n=this.lashColor();for(let s of[this.lash.mesh,this.lash.edge])s.material.color.copy(n)}return e}};async function np(i){let t=new Ki;if(t.setMeshoptDecoder(pr),!i.endsWith(".b64.txt"))return t.loadAsync(i+"?v=B33");let e=await fetch(i+"?v=B38"),n=e.ok?(await e.text()).trim():"";if(!e.ok||!/^[A-Za-z0-9+/=\s]+$/.test(n)||n.length<100)return t.loadAsync(i.replace(/\.b64\.txt$/,".glb")+"?v=B38");let s=atob(n),r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a);return t.parseAsync(r.buffer,"")}function ip(i){let t=i.geometry,e=Object.entries(i.morphTargetDictionary||{}).sort((o,c)=>o[1]-c[1]).map(o=>o[0]),n=t.morphAttributes.position||[],s=t.getAttribute("_weld"),r=t.getAttribute("position"),a=yc(r.array,t.index.array,s?s.array:Float32Array.from({length:r.count},(o,c)=>c),n.map((o,c)=>({name:e[c],pos:o.array})));return t.morphAttributes={},i.morphTargetInfluences=void 0,i.morphTargetDictionary=void 0,t.setAttribute("position",new Xt(Float32Array.from(a.pos),3)),t.setAttribute("normal",new Xt(new Float32Array(a.pos.length),3)),a}var wc=class{root=new un;cal;ctx;body;lashes;eyes;skeleton;bustN;liftW;liftBustCm=0;bones={};garments=[];skinMat;skinS=null;weights={};scale=1;pose="natural";eyesPart;armAngles={L:.16,R:.16};arms;contact;poseRelax;contactCache;bodySkin;contactMoved=0;lastMs={blend:0,solve:0,hair:0};levels={};eyeFit;hair;weldFirst;bodyRest;fitting;extraArmGap=0;_repose=0;restHeads={};shoes;addShoes(){this.shoes=new gc(this.body.mesh,this.skeleton,this.body.out,this.root)}async load(t,e){this.cal=e,this.root.add(this.tapes),this.tapes.renderOrder=10;let n=await np(t);this.root.add(n.scene);let s=u=>{let h=n.scene.getObjectByName(u);h.frustumCulled=!1;let d=ip(h),f=0;for(let m of d.weld)f=Math.max(f,m+1);return{mesh:h,data:d,out:new Float32Array(d.pos.length),nrm:new Float32Array(d.pos.length),nWeld:f}};this.body=s("body"),this.body.data.relax=!0,this.lashes=s("lashes"),this.eyesPart=s("eyes"),this.eyes=this.eyesPart.mesh,this.skeleton=this.body.mesh.skeleton;let r={};for(let u of this.skeleton.bones)r[u.name]=u;for(let u of e.bones)this.bones[u.name]=r[_e.sanitizeNodeName(u.name)];{let u=new Float32Array(this.body.data.pos.length),h=new Float32Array(this.eyesPart.data.pos.length);wi(this.body.data,{},e,1,u),wi(this.eyesPart.data,{},e,1,h),this.eyeFit=Gf(u,this.body.data.idx,this.body.data.weld,h)}this.ctx=Df(this.body.data,e),this.bodyRest=new Float32Array(this.body.data.pos.length),wi(this.body.data,{},e,1,this.bodyRest),this.weldFirst=new Int32Array(this.body.nWeld).fill(-1),this.body.data.weld.forEach((u,h)=>{this.weldFirst[u]<0&&(this.weldFirst[u]=h)}),this.bustN=Gh(this.bodyRest,this.body.data.weld,this.body.data.idx);{let u=this.bodyRest,h=u.length/3,d=[],f=[];for(let m=0;m<h;m++){let _=Math.abs(u[m*3]),p=u[m*3+1];if(u[m*3+2]<.05)continue;let T=Math.hypot((_-.05)/.085,(p-1.15)/.095),M=Math.max(0,Math.min(1,(1-T)/.5));M>0&&(d.push(m),f.push(M*M*(3-2*M)))}this.liftW={v:Int32Array.from(d),w:Float32Array.from(f)}}this.arms=Bf(this.ctx,this.body.data.weld,e.armSide),e.contact&&(this.contact=$f(this.body.data.weld,e.contact)),e.poseRelax&&(this.poseRelax=Zf(this.body.data.weld,e.poseRelax));{let u=this.body.mesh.geometry,h=u.getAttribute("skinIndex"),d=u.getAttribute("skinWeight"),f=new Uint16Array(h.count*4),m=new Float32Array(h.count*4);for(let _=0;_<h.count;_++)f[_*4]=h.getX(_),f[_*4+1]=h.getY(_),f[_*4+2]=h.getZ(_),f[_*4+3]=h.getW(_),m[_*4]=d.getX(_),m[_*4+1]=d.getY(_),m[_*4+2]=d.getZ(_),m[_*4+3]=d.getW(_);this.bodySkin={j:f,w:m}}let a=this.body.mesh.material;this.skinMat=new De({map:a.map,roughness:.55,metalness:0,sheen:.25,sheenRoughness:.8,sheenColor:new Mt("#ffd9c8"),clearcoat:.04,clearcoatRoughness:.6,polygonOffset:!0,polygonOffsetFactor:8,polygonOffsetUnits:30}),this.skinMat.map&&(this.skinMat.map.colorSpace=we),this.body.mesh.material=this.skinMat,this.skinMat.polygonOffsetFactor=14,this.skinMat.polygonOffsetUnits=60;let o=this.eyes.material;o.roughness=.42,o.envMapIntensity=0,o.color.set("#d8cbc2"),o.onBeforeCompile=u=>{u.fragmentShader=u.fragmentShader.replace("#include <lights_fragment_maps>","").replace("#include <opaque_fragment>",`#if NUM_DIR_LIGHTS > 0
{ vec3 Lq = directionalLights[0].direction; vec3 Vq = normalize(vViewPosition); vec3 Nq = normalize(vNormal); float spq = pow(max(dot(Nq, normalize(Lq + Vq)), 0.0), 140.0); outgoingLight += vec3(1.0, 0.97, 0.93) * spq * 0.42; }   // B33: reflejo suave y peque\xF1o (sin punto blanco duro)
#endif
#include <opaque_fragment>`).replace("#include <map_fragment>",`#include <map_fragment>
{ float ndv = abs(dot(normalize(vNormal), normalize(vViewPosition))); float ed = 1.0 - smoothstep(0.12, 0.72, ndv);   // B33: el globo se oscurece y se ti\xF1e de rosa hacia los bordes (sin halo gris a los lados del ojo)
  diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * vec3(0.80, 0.60, 0.55), ed * 0.95); } `)},o.customProgramCacheKey=()=>"eye-b33",o.emissive.set("#fff1e6"),o.emissiveMap=o.map,o.emissiveIntensity=.45,o.alphaTest=.5,o.transparent=!1,o.map&&(o.map.colorSpace=we);let c=this.lashes.mesh.material;c.alphaTest=.25,c.side=Pe,this.update(),this.addShoes();let l={...this.weights};this.solve({height:158,bust:92,waist:74,hips:100}),this.weights=l,this.scale=1,this.update()}async addGarment(t,e,n="#e7e2da"){let[s,r]=await Promise.all([np(t),fetch(e+"?v=B33").then(x=>x.json())]),a=null;s.scene.traverse(x=>{x.isSkinnedMesh&&!a&&(a=x)});let o=a,c=ip(o),l=(x,b)=>{let S=Uint8Array.from(atob(x),A=>A.charCodeAt(0));return new b(S.buffer)},u=l(r.bindTriWeld,Uint32Array),h=l(r.bindBary,Float32Array),d=l(r.minClear,Float32Array),f=new Int32Array(this.body.nWeld).fill(-1);this.body.data.weld.forEach((x,b)=>{f[x]<0&&(f[x]=b)});let m=c.weld.length,_=new Uint32Array(m*3),p=new Float32Array(m*3),g=new Float32Array(m);for(let x=0;x<m;x++){let b=c.weld[x];for(let S=0;S<3;S++)_[x*3+S]=f[u[b*3+S]],p[x*3+S]=h[b*3+S];g[x]=d[b]}let T=0;for(let x of c.weld)T=Math.max(T,x+1);let M=r.candK||0,y=r.candTriWeld?l(r.candTriWeld,Uint32Array):null,v=y?new Uint32Array(m*M*3):void 0;if(y&&v)for(let x=0;x<m;x++){let b=c.weld[x];for(let S=0;S<M*3;S++)v[x*M*3+S]=f[y[b*M*3+S]]}let w={...c,bindTri:_,bindBary:p,minClear:g,nWeld:T,candTri:v,candK:M};o.material=new Ve({color:n,roughness:.86,metalness:0,side:Pe}),o.frustumCulled=!1,o.castShadow=!0,o.bind(this.skeleton,new jt),this.root.add(o),this.garments.push({mesh:o,data:w,out:new Float32Array(c.pos.length),nrm:new Float32Array(c.pos.length),info:r}),this.update()}setSkinTone(t){this.skinMat.color.set(t)}async addHair(t=""){return this.hair=new Sc(this,this.root),await this.hair.load(t),this.update(),this.hair}solve(t){let e={};for(let[s,r]of Object.entries(this.weights))s.startsWith("face.")&&(e[s]=r);let n=Uf(t,this.body.data,this.cal,this.ctx,{},this.body.out);return this.lastMs.solve=n.ms,this.weights={...n.weights,...e},this.scale=n.scale,this.liftBustCm=n.measured.bust,this.update(),n}setWeights(t,e=this.scale){this.weights={...t},this.scale=e,this.update()}setPose(t){this.pose=t,this.update()}update(){let t=performance.now(),e=[this.body,this.lashes,this.eyesPart];for(let o of e)wi(o.data,this.weights,this.cal,this.scale,o.out);{let o=this.liftW,c=globalThis.__liftBust??this.liftBustCm;if(o&&c>88){let l=Math.min(1,(c-88)/12),u=globalThis.__liftMax??.005*l*l*(3-2*l)*this.scale,h=this.body.out;for(let d=0;d<o.v.length;d++)h[o.v[d]*3+1]+=u*o.w[d]}}this.eyeFit&&Wf(this.eyesPart.out,this.eyeFit,this.weights["face.eye-size"]||0,Vf),this.showTapes&&(this.levels=ai(this.body.out,this.ctx).levels);for(let o of this.garments){Mc(o.data,this.weights,this.cal,this.scale,this.body.out,this.body.data,o.out,o.nrm);let c=o.mesh.geometry;c.getAttribute("position").copyArray(o.out).needsUpdate=!0;let l=c.getAttribute("normal");o.bustN||(o.bustN=Gh(o.data.pos,o.data.weld,o.data.idx)),Vh(o.bustN,o.nrm),l.copyArray(o.nrm),l.needsUpdate=!0,c.computeBoundingSphere()}let{heads:n}=Ff(this.weights,this.cal,this.scale),s={};this.cal.bones.forEach((o,c)=>s[o.name]=n[c]),this.restHeads=s;for(let o of this.cal.bones){let c=this.bones[o.name],l=o.parent?s[o.parent]:[0,0,0];c.position.set(s[o.name][0]-l[0],s[o.name][1]-l[1],s[o.name][2]-l[2]),c.quaternion.identity()}this.root.updateMatrixWorld(!0),this.skeleton.calculateInverses();let{rots:r,angles:a}=Hf(this.pose,this.body.out,this.arms,s,this.extraArmGap);this.armAngles=a,this.skinS=$h(this.cal.bones,s,r);for(let o of r)this.bones[o.bone].quaternion.setFromAxisAngle(new q(...o.axis),o.angle);if(this.contact){let o=this.pose+"|"+this.scale+"|"+this.extraArmGap.toFixed(4)+"|"+Object.keys(this.weights).filter(l=>!l.startsWith("face.")).sort().map(l=>l+":"+this.weights[l]).join(","),c=this.body.out;if(this.contactCache&&this.contactCache.sig===o){let{i:l,d:u}=this.contactCache;for(let h=0;h<l.length;h++)c[l[h]]+=u[h]}else{this.contactMoved=0;let l=c.slice(),u=$h(this.cal.bones,s,r);this.pose==="natural"&&this.poseRelax&&Qf(c,this.bodySkin,u,this.poseRelax);for(let f=0;f<3;f++){let m=Jf(c,this.bodySkin,u,this.contact);if(this.contactMoved+=m,!m)break}let h=[],d=[];for(let f=0;f<c.length;f++)c[f]!==l[f]&&(h.push(f),d.push(c[f]-l[f]));this.contactCache={sig:o,i:Int32Array.from(h),d:Float32Array.from(d)}}}if(this.fitting&&this.fitting.fit()&&this._repose<1){this._repose++,this.update(),this._repose=0;return}if(this.hair){let o=performance.now();this.hair.fit(),this.lastMs.hair=performance.now()-o}for(let o of e){ri(o.out,o.data.idx,o.data.weld,o.nWeld,o.nrm),o===this.body&&Vh(this.bustN,o.nrm);let c=o.mesh.geometry;c.getAttribute("position").copyArray(o.out).needsUpdate=!0;let l=c.getAttribute("normal");l.copyArray(o.nrm),l.needsUpdate=!0,c.computeBoundingSphere(),c.computeBoundingBox()}this.shoes?.update(this.body.out,this.scale),this.root.updateMatrixWorld(!0),this.lastMs.blend=performance.now()-t,this.drawTapes()}measure(){return ai(this.body.out,this.ctx).cm}tapes=new un;showTapes=!1;drawTapes(){if(this.tapes.clear(),!this.showTapes)return;this.levels=ai(this.body.out,this.ctx).levels;let t={bust:"#b0306a",underbust:"#7a4bb3",waist:"#1f7a8c",hips:"#c47a12"};for(let[e,n]of Object.entries(this.levels)){let s=_c(this.body.out,this.ctx.idx,n).map(a=>new q(a[0]*1.004,a[1],a[2]*1.004));if(s.length<3)continue;let r=new Te().setFromPoints(s);this.tapes.add(new hs(r,new Ui({color:t[e]||"#333",depthTest:!1})))}}config(t="Avatar"){return{schema:"miriz.avatar2/1",name:t,measurements:{},weights:{...this.weights},scale:this.scale,skinTone:"#"+this.skinMat.color.getHexString(),pose:this.pose}}};var sp={type:"change"},eu={type:"start"},ap={type:"end"},Ac=new gi,rp=new vn,a_=Math.cos(70*bs.DEG2RAD),Xe=new q,bn=2*Math.PI,Me={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},tu=1e-6,Tc=class extends ta{constructor(t,e=null){super(t,e),this.state=Me.NONE,this.target=new q,this.cursor=new q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Hi.ROTATE,MIDDLE:Hi.DOLLY,RIGHT:Hi.PAN},this.touches={ONE:Gi.ROTATE,TWO:Gi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new q,this._lastQuaternion=new Qe,this._lastTargetPosition=new q,this._quat=new Qe().setFromUnitVectors(t.up,new q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new er,this._sphericalDelta=new er,this._scale=1,this._panOffset=new q,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new q,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=c_.bind(this),this._onPointerDown=o_.bind(this),this._onPointerUp=l_.bind(this),this._onContextMenu=g_.bind(this),this._onMouseWheel=d_.bind(this),this._onKeyDown=f_.bind(this),this._onTouchStart=p_.bind(this),this._onTouchMove=m_.bind(this),this._onMouseDown=h_.bind(this),this._onMouseMove=u_.bind(this),this._interceptControlDown=b_.bind(this),this._interceptControlUp=x_.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(t){this._cursorStyle=t,t==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Me.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();let t=this.domElement.getRootNode();t.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),t.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(sp),this.update(),this.state=Me.NONE}pan(t,e){this._pan(t,e),this.update()}dollyIn(t){this._dollyIn(t),this.update()}dollyOut(t){this._dollyOut(t),this.update()}rotateLeft(t){this._rotateLeft(t),this.update()}rotateUp(t){this._rotateUp(t),this.update()}update(t=null){let e=this.object.position;Xe.copy(e).sub(this.target),Xe.applyQuaternion(this._quat),this._spherical.setFromVector3(Xe),this.autoRotate&&this.state===Me.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=bn:n>Math.PI&&(n-=bn),s<-Math.PI?s+=bn:s>Math.PI&&(s-=bn),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{let a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(Xe.setFromSpherical(this._spherical),Xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(Xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){let o=Xe.length();a=this._clampDistance(o*this._scale);let c=o-a;this.object.position.addScaledVector(this._dollyDirection,c),this.object.updateMatrixWorld(),r=!!c}else if(this.object.isOrthographicCamera){let o=new q(this._mouse.x,this._mouse.y,0);o.unproject(this.object);let c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=c!==this.object.zoom;let l=new q(this._mouse.x,this._mouse.y,0);l.unproject(this.object),this.object.position.sub(l).add(o),this.object.updateMatrixWorld(),a=Xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(Ac.origin.copy(this.object.position),Ac.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ac.direction))<a_?this.object.lookAt(this.target):(rp.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ac.intersectPlane(rp,this.target))))}else if(this.object.isOrthographicCamera){let a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>tu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>tu||this._lastTargetPosition.distanceToSquared(this.target)>tu?(this.dispatchEvent(sp),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?bn/60*this.autoRotateSpeed*t:bn/60/60*this.autoRotateSpeed}_getZoomScale(t){let e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){Xe.setFromMatrixColumn(e,0),Xe.multiplyScalar(-t),this._panOffset.add(Xe)}_panUp(t,e){this.screenSpacePanning===!0?Xe.setFromMatrixColumn(e,1):(Xe.setFromMatrixColumn(e,0),Xe.crossVectors(this.object.up,Xe)),Xe.multiplyScalar(t),this._panOffset.add(Xe)}_pan(t,e){let n=this.domElement;if(this.object.isPerspectiveCamera){let s=this.object.position;Xe.copy(s).sub(this.target);let r=Xe.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;let n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-bn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{let n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);let e=this.domElement;this._rotateLeft(bn*this._rotateDelta.x/e.clientHeight),this._rotateUp(bn*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{let e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){let e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);let a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){let e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){let e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}};function o_(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function c_(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function l_(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ap),this.state=Me.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:let t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function h_(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case Hi.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Me.DOLLY;break;case Hi.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Me.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Me.ROTATE}break;case Hi.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Me.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Me.PAN}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(eu)}function u_(i){switch(this.state){case Me.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Me.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Me.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function d_(i){this.enabled===!1||this.enableZoom===!1||this.state!==Me.NONE||(i.preventDefault(),this.dispatchEvent(eu),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ap))}function f_(i){this.enabled!==!1&&this._handleKeyDown(i)}function p_(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Gi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Me.TOUCH_ROTATE;break;case Gi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Me.TOUCH_PAN;break;default:this.state=Me.NONE}break;case 2:switch(this.touches.TWO){case Gi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Me.TOUCH_DOLLY_PAN;break;case Gi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Me.TOUCH_DOLLY_ROTATE;break;default:this.state=Me.NONE}break;default:this.state=Me.NONE}this.state!==Me.NONE&&this.dispatchEvent(eu)}function m_(i){switch(this._trackPointer(i),this.state){case Me.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Me.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Me.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Me.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Me.NONE}}function g_(i){this.enabled!==!1&&i.preventDefault()}function b_(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function x_(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var Ec=class extends as{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Oi;t.deleteAttribute("uv");let e=new Ve({side:Ke}),n=new Ve,s=new fs(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new fe(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new cs(t,n,6),o=new Ce;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new fe(t,xr(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new fe(t,xr(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let u=new fe(t,xr(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new fe(t,xr(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let d=new fe(t,xr(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new fe(t,xr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function xr(i){return new jr({color:0,emissive:16777215,emissiveIntensity:i})}function op(i,t={}){let e=new fc({canvas:i,antialias:!0,preserveDrawingBuffer:!!t.preserve,alpha:!1});e.setPixelRatio(Math.min(window.devicePixelRatio,2)),e.outputColorSpace=we,e.toneMapping=na,e.toneMappingExposure=1,e.shadowMap.enabled=!0,e.shadowMap.type=_o;let n=new as,s=new ur(e);n.environment=s.fromScene(new Ec,.04).texture,n.environmentIntensity=.55;let r=new Ue(28,1,.05,50),a=new Mi("#fff4ea",1.6);a.position.set(1.6,2.6,2.4),a.castShadow=!0,a.shadow.mapSize.set(2048,2048),Object.assign(a.shadow.camera,{left:-3,right:3,top:3.5,bottom:-3,near:.5,far:14}),a.shadow.bias=-4e-4,a.shadow.radius=4;let o=new Mi("#e8eeff",.45);o.position.set(-2.2,1.4,1.2);let c=new Mi("#ffffff",.7);c.position.set(-.6,2.2,-2.6),n.add(a,o,c,new Jr("#ffffff","#b9a99a",.35));let l=new fe(new Wr(4,64),new Xr({opacity:.18}));l.rotation.x=-Math.PI/2,l.receiveShadow=!0,n.add(l);let u=new Tc(r,i);u.enableDamping=!t.preserve,u.minDistance=.35,u.maxDistance=6,u.target.set(0,.9,0),u.maxPolarAngle=Math.PI*.62,u.enablePan=!0,u.screenSpacePanning=!0;let h=1.6;function d(){let m=i.clientWidth||i.width,_=i.clientHeight||i.height;e.setSize(m,_,!1),r.aspect=m/_,r.updateProjectionMatrix()}function f(m,_=h){h=_;let p=v=>v/2/Math.tan(bs.degToRad(r.fov/2))*1.12/Math.min(1,r.aspect*1.6),T={frente:{az:0,el:.04,ty:_*.52,d:p(_)},"tres-cuartos":{az:Math.PI/4,el:.08,ty:_*.52,d:p(_)},perfil:{az:Math.PI/2,el:.04,ty:_*.52,d:p(_)},espalda:{az:Math.PI,el:.06,ty:_*.52,d:p(_)},rostro:{az:0,el:.02,ty:_*.915,d:p(_*.27),tz:.05},"rostro-perfil":{az:Math.PI*.42,el:.02,ty:_*.915,d:p(_*.28),tz:.06},torso:{az:.25,el:.05,ty:_*.72,d:p(_*.42)},superior:{az:.6,el:.75,ty:_*.8,d:p(_*.45)},cabello:{az:.55,el:.05,ty:_*.86,d:p(_*.34),tz:.02}}[m],M=T.tz||0;u.target.set(0,T.ty,M),r.position.set(Math.sin(T.az)*Math.cos(T.el)*T.d,T.ty+Math.sin(T.el)*T.d,M+Math.cos(T.az)*Math.cos(T.el)*T.d),r.lookAt(u.target);let y=u.enableDamping;u.enableDamping=!1,u.update(),u.enableDamping=y}return d(),{renderer:e,scene:n,camera:r,controls:u,resize:d,setView:f,render:()=>{u.update(),e.render(n,r)}}}function Rc(i,t){let e=i.starts.find(n=>n.id===t)||i.starts[0];return{recipesVersion:i.version,start:e.id,choice:{...e.choice},sliders:{...e.sliders},browThickness:e.browThickness,eyeColor:e.eyeColor}}function cp(i,t,e){let n={},s=(o,c)=>{n[o]=(n[o]||0)+c},r=i.starts.find(o=>o.id===t.start)||i.starts[0];for(let o of i.groups){let c=o.options.find(l=>l.id===t.choice[o.id])||o.options[0];if(c)for(let[l,u]of Object.entries(c.w))s(l,u);for(let l of o.sliders||[]){let u=Math.max(-1,Math.min(1,t.sliders[l.id]||0));for(let[h,d]of Object.entries(l.w))s(h,u*d)}}for(let[o,c]of Object.entries(r.nuance))s(o,c);let a=[];for(let o of Object.keys(n)){let[c,l]=e[o]||[-1,1],u=Math.max(c,Math.min(l,n[o]));Math.abs(u-n[o])>1e-9&&a.push(o),Math.abs(u)<1e-6?delete n[o]:n[o]=u}return{weights:n,clamped:a}}function lp(i,t){let e=i.groups.find(r=>r.id==="cejas"),n=e.options.find(r=>r.id===t.choice.cejas)||e.options[1],s=e.thickness.find(r=>r.id===t.browThickness)||e.thickness[1];return{shape:n.texture||"arco-suave",channel:s.channel}}var y_=new us;async function vs(i,t){let e=await y_.loadAsync(i);return e.flipY=!1,e.colorSpace=t?we:qn,e.anisotropy=4,e.needsUpdate=!0,e}var Cc=class{constructor(t){this.eng=t}eng;R;T;cfg;skin;browColor=new Mt;brows={};eyesTex={};uniforms={uMasks:{value:null},uLine:{value:null},uBrows:{value:null},uBrowCh:{value:new q(0,1,0)},uLip:{value:new Mt},uBlush:{value:new Mt},uBrowCol:{value:new Mt},uScalp:{value:null},uHairCol:{value:new Mt("#422d21")},uScalpOn:{value:0}};async load(t,e,n){let s=h=>fetch(t+h).then(d=>d.json());[this.R,this.T]=await Promise.all([e||s("faceRecipes.json"),n||s("skinTones.json")]);let[r,a,o,c,...l]=await Promise.all([vs(t+"skin_detail.jpg",!0),vs(t+"face_masks.png",!1),vs(t+"skin_micro.png",!1),vs(t+"lip_line.png",!1),...["recta","arco-suave","arco-marcado"].map(h=>vs(t+`brows_${h}.png`,!1)),...this.R.eyeColors.map(h=>vs(t+`eye_${h.id}.png`,!0))]);["recta","arco-suave","arco-marcado"].forEach((h,d)=>this.brows[h]=l[d]),this.R.eyeColors.forEach((h,d)=>this.eyesTex[h.id]=l[3+d]);let u=this.eng.skinMat;u.map=r,u.color.set("#ffffff"),o.wrapS=o.wrapT=Rn,o.repeat.set(12,12),o.anisotropy=8,o.needsUpdate=!0,u.bumpMap=o,u.bumpScale=.2,u.roughnessMap=o,u.roughness=.74,u.clearcoat=0,u.sheen=.12,u.specularIntensity=.45,this.uniforms.uMasks.value=a,this.uniforms.uLine.value=c;try{this.uniforms.uScalp.value=await vs(t+"scalp_mask.png",!1)}catch{}u.onBeforeCompile=h=>{Object.assign(h.uniforms,this.uniforms),h.fragmentShader=h.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D uMasks; uniform sampler2D uLine; uniform sampler2D uBrows; uniform vec3 uBrowCh; uniform vec3 uLip; uniform vec3 uBlush; uniform vec3 uBrowCol; uniform sampler2D uScalp; uniform vec3 uHairCol; uniform float uScalpOn;`).replace("#include <map_fragment>",`#include <map_fragment>
          { vec3 fm = texture2D(uMasks, vMapUv).rgb; float lum = dot(sampledDiffuseColor.rgb, vec3(0.333));
            diffuseColor.rgb = mix(diffuseColor.rgb, uLip * lum, fm.r * 0.86);
            float ll = texture2D(uLine, vMapUv).r; diffuseColor.rgb *= 1.0 - 0.42 * ll;   /* l\xEDnea de uni\xF3n de los labios y comisuras: sombra natural */
            diffuseColor.rgb *= 1.0 - 0.06 * fm.r * smoothstep(0.0, 1.0, 1.0 - fm.r);
            diffuseColor.rgb = mix(diffuseColor.rgb, uBlush * lum, fm.g * 0.30);
            diffuseColor.rgb *= 1.0 - 0.07 * fm.b;
            float bw = clamp(dot(texture2D(uBrows, vMapUv).rgb, uBrowCh), 0.0, 1.0);
            bw = smoothstep(0.02, 0.85, bw); diffuseColor.rgb = mix(diffuseColor.rgb, uBrowCol, bw * 0.97);
            // F3 \xB7 cuero cabelludo te\xF1ido del color del pelo bajo el cabello (no se ve piel entre mechones)
            float sc = texture2D(uScalp, vMapUv).r * uScalpOn; diffuseColor.rgb = mix(diffuseColor.rgb, uHairCol * 0.8, sc * 0.94); }`)},u.customProgramCacheKey=()=>"miriz-f3-skin",u.needsUpdate=!0,this.skin={...this.T.default},this.browColor.set(this.T.browDefault),this.setFace(Rc(this.R,this.R.starts[0].id)),this.setSkin(this.skin)}setFace(t,e=!0){this.cfg=JSON.parse(JSON.stringify(t));let{weights:n}=cp(this.R,this.cfg,this.eng.cal.faceSafe),s={};for(let[c,l]of Object.entries(this.eng.weights))c.startsWith("face.")||(s[c]=l);this.eng.weights={...s,...n};let r=lp(this.R,this.cfg);this.uniforms.uBrows.value=this.brows[r.shape],this.uniforms.uBrowCh.value.set(r.channel===0?1:0,r.channel===1?1:0,r.channel===2?1:0);let a=this.eng.eyes.material,o=this.eyesTex[this.cfg.eyeColor];o&&a.map!==o&&(a.map=o,a.emissiveMap=o,a.needsUpdate=!0),a.roughness=Math.min(a.roughness,.22),e&&this.eng.update()}setSkin(t){this.skin={...t};let e=this.T.tones.find(f=>f.id===t.tone)||this.T.tones[4],n=e.undertones[t.undertone]||e.undertones.neutro;this.eng.skinMat.color.set(n.skin),this.uniforms.uLip.value.set(n.lip),this.uniforms.uBlush.value.set(n.blush);let s=f=>.2126*f.r+.7152*f.g+.0722*f.b,r=new Mt(n.skin),a=s(r),o=this.browColor.clone().multiplyScalar(.82),c=s(o),l=Math.max(.005,a*.25);c>l&&o.multiplyScalar(l/c),this.uniforms.uBrowCol.value.copy(o);let u=this.eng.eyes?.material,h=Math.min(1,Math.max(0,(e.L??50)/80)),d=.5+.5*h;u&&(u.color.setRGB(.69*d,.6*d,.555*d),u.emissiveIntensity=.45*(.1+.9*h))}setBrowColor(t){this.browColor.set(t),this.setSkin(this.skin)}setHair(t,e,n=!0){this.uniforms.uHairCol.value.set(t),this.uniforms.uScalpOn.value=n?1:0,this.setBrowColor(e)}config(){return{face:JSON.parse(JSON.stringify(this.cfg)),skin:{...this.skin}}}};var __={busto:"el busto",cintura:"la cintura",cadera:"la cadera"};function v_(i,t,e){let n=t.fitRanges[i.fit],s=(t.stretchCm[i.stretch]??0)/2,r=i.table;return i.sizes.map((a,o)=>{let c=r.busto[o]-e.bust,l=r.cintura[o]-e.waist,u=(r.cadera??r.borde)[o]-e.hips,h=[["busto",n.busto[0]-s-c],["cintura",n.cintura[0]-s-l]],d=h.reduce((_,p)=>p[1]>_[1]?p:_,h[0]),f=Math.max(0,d[1]),m=Math.abs(c-n.busto[2])+3*h.reduce((_,p)=>_+Math.max(0,p[1]),0);return{size:a,busto:c,cintura:l,cadera:u,tight:f,tightZone:d[0],cost:m,largo:r.largo[o]}})}function M_(i,t,e,n){let s=i.bodySizes,r=0;for(let a=0;a<t.length;a++)n>=s[t[a]][e][0]&&(r=a);return r}function ga(i,t,e){let n=v_(i,t,e),s=i.sizes,r=M_(t,s,"busto",e.bust),a=(t.stretchCm[i.stretch]??0)/2;return t.bodySizes&&e.waist>t.bodySizes[s[r]].cintura[1]+.5&&(r=Math.min(s.length-1,r+1)),{index:r,size:s[r],eases:n}}function hp(i,t,e,n){let s=ga(i,t,e),r=i.sizes.indexOf(n),a=s.eases[r],o=s.eases[s.index];if(r===s.index)return{kind:"ok",text:"Calce ideal seg\xFAn tus medidas"};if(r>s.index){let d=i.table.busto[r]-i.table.busto[s.index],f=i.table.largo[r]-i.table.largo[s.index];return{kind:"loose",text:`Calce holgado / estilo oversize \xB7 +${d.toLocaleString("es-PE",{maximumFractionDigits:0})} cm de ancho en el busto y +${f.toLocaleString("es-PE",{maximumFractionDigits:1})} cm de largo`}}let c=t.fitRanges[i.fit],l=(t.stretchCm[i.stretch]??0)/2,u=[["busto",a.busto-c.busto[0]+l],["cintura",a.cintura-c.cintura[0]+l]],h=u.reduce((d,f)=>f[1]<d[1]?f:d,u[0]);return h[1]>=0?{kind:"snug",text:"Calce algo m\xE1s ajustado que la talla recomendada"}:{kind:"tight",text:`Aviso: Te quedar\xE1 muy ajustada en ${__[h[0]]}`}}function dp(i,t,e){let n=e.map(()=>[]);for(let r=0;r<i.length;r++)i[r]>=0&&n[i[r]].push(r);let s=new Float32Array(e.length);for(let r=0;r<e.length;r++){if(!e[r].closed)continue;let a=99;for(let o=0;o<e.length;o++)e[o].zone===e[r].zone&&!e[o].closed&&(a=Math.min(a,Math.abs(e[o].key-e[r].key)));s[r]=a>=2?1:.7}return{level:i,zone:t,levels:e,members:n.map(r=>Int32Array.from(r)),weight:s}}var se=72,Yi=[],yr=[];function S_(i,t,e){let n=Array.from({length:e},(o,c)=>c).sort((o,c)=>i[o]-i[c]||t[o]-t[c]),s=[],r=(o,c,l)=>(i[c]-i[o])*(t[l]-t[o])-(t[c]-t[o])*(i[l]-i[o]);for(let o of n){for(;s.length>=2&&r(s[s.length-2],s[s.length-1],o)<=0;)s.pop();s.push(o)}let a=s.length+1;for(let o=n.length-2;o>=0;o--){let c=n[o];for(;s.length>=a&&r(s[s.length-2],s[s.length-1],c)<=0;)s.pop();s.push(c)}s.pop(),Yi.length=yr.length=0;for(let o of s)Yi.push(i[o]),yr.push(t[o])}function up(i,t){let e=Yi.length,n=0;for(let s=0;s<e;s++){let r=Yi[s],a=yr[s],o=Yi[(s+1)%e],c=yr[(s+1)%e],l=o-r,u=c-a,h=i*u-t*l;if(Math.abs(h)<1e-12)continue;let d=(r*u-a*l)/h,f=(r*t-a*i)/h;d>0&&f>=-1e-6&&f<=1+1e-6&&(n=Math.max(n,d))}return n}function w_(){let i=0,t=Yi.length;for(let e=0;e<t;e++)i+=Math.hypot(Yi[(e+1)%t]-Yi[e],yr[(e+1)%t]-yr[e]);return i}function fp(i,t,e,n,s){let r=[],a=i.levels.length,o=Array.from({length:a},(S,A)=>A).sort((S,A)=>i.levels[S].zone-i.levels[A].zone||i.levels[S].key-i.levels[A].key),c=[],l=new Float64Array(4096),u=new Float64Array(4096),h=new Float64Array(se),d=new Float64Array(se);for(let S=0;S<se;S++){let A=-Math.PI+(S+.5)*2*Math.PI/se;h[S]=Math.cos(A),d[S]=Math.sin(A)}let f=S=>{let A=0;for(let E=0;E<se;E++){let P=(E+1)%se;A+=Math.hypot(S[P]*h[P]-S[E]*h[E],S[P]*d[P]-S[E]*d[E])}return A},m=null,_=0,p=-1,g=-1,T=0,M=0,y=0,v=!1,w=[0,0,0],x=null,b=-1;for(let S of o){let A=i.levels[S],E=i.members[S],P=E.length,F=i.weight[S];if(A.zone!==p&&(m=null,p=A.zone,T=0),!A.closed&&A.zone===0&&t.drape>=.2&&m&&A.key>b&&P>=2&&P<=4096){let lt=[w[0],0,w[2]],V=0;for(let pt=0;pt<P;pt++)V+=n[E[pt]*3+1];V/=P;let dt=Float64Array.from(m);for(let pt=0;pt<P;pt++){let Gt=E[pt]*3,H=n[Gt]-lt[0],xe=n[Gt+2]-lt[2],ee=Math.floor((Math.atan2(xe,H)+Math.PI)/(2*Math.PI)*se)%se;dt[ee]=Math.max(dt[ee],Math.hypot(H,xe)+t.clearance+.005)}c.push({li:S,c:[lt[0],V,lt[2]],ax:[0,1,0],e1:[1,0,0],e2:[0,0,1],r:dt,w:1});continue}if(!A.closed||F<=0||P<6||P>4096){m=null;continue}A.zone===0&&(b=Math.max(b,A.key));let N,I,C;if(A.zone===0)N=[0,1,0],I=[1,0,0],C=[0,0,1];else{N=(A.zone===1?s.L:A.zone===2?s.R:A.zone===3?s.L2:s.R2)[1];let V=Math.abs(N[2])<.9?[0,0,1]:[1,0,0];I=[N[1]*V[2]-N[2]*V[1],N[2]*V[0]-N[0]*V[2],N[0]*V[1]-N[1]*V[0]];let dt=Math.hypot(I[0],I[1],I[2]);I=I.map(pt=>pt/dt),C=[N[1]*I[2]-N[2]*I[1],N[2]*I[0]-N[0]*I[2],N[0]*I[1]-N[1]*I[0]]}let L=0,k=0,U=0;for(let lt=0;lt<P;lt++){let V=E[lt]*3;L+=n[V],k+=n[V+1],U+=n[V+2]}L/=P,k/=P,U/=P;let B=new Float64Array(se);for(let lt=0;lt<P;lt++){let V=E[lt]*3,dt=n[V]-L,pt=n[V+1]-k,Gt=n[V+2]-U;l[lt]=dt*I[0]+pt*I[1]+Gt*I[2],u[lt]=dt*C[0]+pt*C[1]+Gt*C[2];let H=e[V]-L,xe=e[V+1]-k,ee=e[V+2]-U,O=H*I[0]+xe*I[1]+ee*I[2],R=H*C[0]+xe*C[1]+ee*C[2],j=Math.floor((Math.atan2(R,O)+Math.PI)/(2*Math.PI)*se)%se;B[j]=Math.max(B[j],Math.hypot(O,R))}S_(l,u,P);let z=w_(),Z=t.contour(A.zone,A.d),tt=t.clearance;if(A.zone>0&&z>1.2*Z){m=null,T=0;continue}let at=!1;if(A.zone===0&&(v||M>0&&A.d>28&&(z<.96*M||Math.abs(U-y)>.02))){if(v=!0,!(t.drape>=.2&&m))continue;at=!0}A.zone===0&&!at&&(M=z,y=U),A.zone>0&&(T++,F*=Math.min(1,T/3));let nt=new Float64Array(se);for(let lt=0;lt<se;lt++)nt[lt]=Math.max(B[lt],up(h[lt],d[lt])+tt);if(at){let lt=new Float64Array(se);for(let V=0;V<se;V++)lt[V]=Math.max(nt[V],m[V]+(w[0]-L)*h[V]+(w[2]-U)*d[V]);c.push({li:S,c:[L,k,U],ax:N,e1:I,e2:C,r:lt,w:F});continue}let ut=globalThis.__margin??t.margin;if(A.zone===0&&ut!==void 0){let lt=new Float64Array(se);for(let V=0;V<se;V++)lt[V]=up(h[V],d[V])+ut;c.push({li:S,c:[L,k,U],ax:N,e1:I,e2:C,r:lt,w:F}),m=lt,_=k,w=[L,k,U],r.push({zone:0,d:A.d,body:z,garment:f(lt),target:Z,stretch:0});continue}let X=Float64Array.from(nt),J=A.zone===0&&t.drape>0&&A.d>t.bustDepth-1,ct=A.zone===0&&A.d>t.bustDepth-1;if(A.zone===0&&g<0&&(g=A.d),A.zone===0&&t.drape>0&&x===null){let lt=9;for(let V=0;V<i.zone.length;V++){if(i.zone[V]!==0)continue;let dt=V*3;Math.abs(e[dt])>.05||e[dt+1]<k||e[dt+1]>k+.14||(lt=Math.min(lt,e[dt+2]))}x=lt<9?lt:0}if(J&&m&&x!==null&&x<0)for(let lt=0;lt<se;lt++){let V=Math.max(0,Math.min(1,(-d[lt]-.5)/.35));if(V<=0)continue;let dt=(U-x)/-d[lt];X[lt]+=V*Math.max(0,dt-X[lt])}let _t=A.zone===0?Math.max(0,1-Math.max(0,A.d-g-10)/8):0;if(J&&m){let lt=Math.max(0,_-k);for(let V=0;V<se;V++){let dt=(w[0]-L)*h[V]+(w[2]-U)*d[V],pt=Math.max(0,-d[V]),Gt=(t.drape+1.2*_t*Math.pow(Math.abs(h[V]),3))*(1-(globalThis.__backHang??1)*pt),H=Math.max(0,Math.min(1,(A.d-t.bustDepth+1)/3))*Math.max(0,Math.min(1,(t.bustDepth+(globalThis.__gatL??13)-A.d)/5)),xe=Math.max(0,d[V]);X[V]=Math.max(X[V],m[V]+dt-(Gt+(globalThis.__gatK??.5)*H*xe)*lt)}}let ht=A.zone===0?1-(1-(globalThis.__frontEase??.1))*Math.max(0,Math.min(1,(t.bustDepth+8-A.d)/6)):1,It=new Float64Array(se);for(let lt=0;lt<se;lt++)It[lt]=(1-.85*_t*Math.pow(Math.abs(h[lt]),3))*(d[lt]>0?1-(1-ht)*d[lt]:1);if(A.zone===0&&t.drape>0)for(let lt=0;lt<se;lt++){let V=Math.max(0,-d[lt]);It[lt]*=Math.max(0,1-(globalThis.__backEase??1.3)*V)*(1+.5*Math.pow(Math.abs(h[lt]),2))}let Yt=f(nt),Et=f(X),Ft=new Float64Array(se),Qt=0,$t=(globalThis.__hang??!0)&&ct&&m&&Z>=Et;if($t){let lt=t.drape>0?globalThis.__hangEase??.6:.3,V=Et+lt*(Z-Et),dt=new Float64Array(se);for(let Gt=0;Gt<se;Gt++)dt[Gt]=Math.pow(Math.abs(h[Gt]),2)*(t.drape>0?Math.max(0,1-1.3*Math.max(0,-d[Gt])):1);let pt=(V-Et)/(2*Math.PI*.6);for(let Gt=0;Gt<4;Gt++){for(let ee=0;ee<se;ee++)Ft[ee]=X[ee]+pt*dt[ee];let H=f(Ft),xe=(H-Et)/Math.max(pt,1e-6);pt+=(V-H)/Math.max(xe,.001)}pt=Math.min(Math.max(0,pt),.05);for(let Gt=0;Gt<se;Gt++)Ft[Gt]=X[Gt]+pt*dt[Gt]}else if(Z>=Et){let lt=(Z-Et)/(2*Math.PI);for(let V=0;V<4;V++){for(let Gt=0;Gt<se;Gt++)Ft[Gt]=X[Gt]+lt*It[Gt];let dt=f(Ft),pt=(dt-Et)/Math.max(lt,1e-6);lt+=(Z-dt)/Math.max(pt,.001)}for(let V=0;V<se;V++)Ft[V]=X[V]+Math.max(0,lt)*It[V]}else if(Z>=Yt){let lt=(Z-Yt)/Math.max(Et-Yt,1e-9);for(let V=0;V<se;V++)Ft[V]=nt[V]+(X[V]-nt[V])*lt}else Ft.set(nt),Qt=Yt/Z-1;if(c.push({li:S,c:[L,k,U],ax:N,e1:I,e2:C,r:Ft,w:F}),A.zone===0&&globalThis.__dbgR){let lt=Math.floor(se/4);globalThis.__dbgR.push([+k.toFixed(3),A.d,+(U-Ft[lt]).toFixed(3),+(U-X[lt]).toFixed(3),+(U-nt[lt]).toFixed(3),$t?"H":Z>=Et?"E":"x",+(f(Ft)*100).toFixed(1),+(Z*100).toFixed(1),+(z*100).toFixed(1),+(U-Ft[se*3/4|0]).toFixed(3)])}A.zone===0&&(m=Ft,_=k,w=[L,k,U]),r.push({zone:A.zone,d:A.d,body:z,garment:Math.max(Z,Yt),target:Z,stretch:Qt})}for(let S=0;S<4;S++){let A=c.map(E=>Float64Array.from(E.r));for(let E=0;E<c.length;E++){let P=i.levels[c[E].li].zone,F=i.levels[c[E].li].key,N=[E-1,E+1].filter(I=>I>=0&&I<c.length&&i.levels[c[I].li].zone===P&&Math.abs(i.levels[c[I].li].key-F)===1);for(let I=0;I<se;I++){let C=A[E][I]*2,L=2;for(let U of N)C+=A[U][I],L++;let k=(A[E][(I+se-1)%se]+A[E][(I+1)%se])*.5;c[E].r[I]=Math.max(.6*(C/L)+.4*k,0)}}}for(let S of c){let A=i.members[S.li],[E,P,F]=S.c,{ax:N,e1:I,e2:C,r:L,w:k}=S;for(let U=0;U<A.length;U++){let B=A[U]*3,z=e[B]-E,Z=e[B+1]-P,tt=e[B+2]-F,at=z*I[0]+Z*I[1]+tt*I[2],nt=z*C[0]+Z*C[1]+tt*C[2],ut=z*N[0]+Z*N[1]+tt*N[2],X=Math.atan2(nt,at),J=(X+Math.PI)/(2*Math.PI)*se-.5,ct=(Math.floor(J)+se)%se,_t=(ct+1)%se,ht=J-Math.floor(J),It=L[ct]*(1-ht)+L[_t]*ht,Yt=Math.cos(X),Et=Math.sin(X),Ft=E+N[0]*ut+It*(Yt*I[0]+Et*C[0]),Qt=P+N[1]*ut+It*(Yt*I[1]+Et*C[1]),$t=F+N[2]*ut+It*(Yt*I[2]+Et*C[2]);e[B]+=(Ft-e[B])*k,e[B+1]+=(Qt-e[B+1])*k,e[B+2]+=($t-e[B+2])*k}}return r}function pp(i,t,e,n,s,r,a=6,o){let c=i.length/3,l=new Float32Array(i.length);for(let u=0;u<a;u++){for(let h=0;h<c;h++){let d=e.start[h],f=e.start[h+1],m=0,_=0,p=0;for(let M=d;M<f;M++){let y=e.list[M]*3;m+=i[y],_+=i[y+1],p+=i[y+2]}let g=f-d||1,T=o&&o[h]<.004?.15:.45;l[h*3]=i[h*3]*(1-T)+T*m/g,l[h*3+1]=i[h*3+1]*(1-T)+T*_/g,l[h*3+2]=i[h*3+2]*(1-T)+T*p/g}for(let h=0;h<c;h++){let d=h*3,f=l[d],m=l[d+1],_=l[d+2],p=(f-n[d])*s[d]+(m-n[d+1])*s[d+1]+(_-n[d+2])*s[d+2];if(p<r[h]){let g=r[h]-p;f+=s[d]*g,m+=s[d+1]*g,_+=s[d+2]*g}i[d]=f,i[d+1]=m,i[d+2]=_}}}function mp(i,t,e,n,s,r,a=60){let o=i.length/3,c=new Float32Array(i.length),l=new Float32Array(i.length),u=(h,d)=>{for(let f=0;f<o;f++){let m=t.start[f],_=t.start[f+1],p=_-m;if(!p){d[f*3]=d[f*3+1]=d[f*3+2]=0;continue}let g=0,T=0,M=0;for(let y=m;y<_;y++){let v=t.list[y]*3;g+=h[v],T+=h[v+1],M+=h[v+2]}d[f*3]=g/p-h[f*3],d[f*3+1]=T/p-h[f*3+1],d[f*3+2]=M/p-h[f*3+2]}};for(let h=0;h<a;h++){u(i,c),u(c,l);for(let d=0;d<o;d++){let f=.22*r[d];if(f<=0)continue;let m=d*3,_=i[m]-f*l[m],p=i[m+1]-f*l[m+1],g=i[m+2]-f*l[m+2],T=(_-e[m])*n[m]+(p-e[m+1])*n[m+1]+(g-e[m+2])*n[m+2];if(T<s[d]){let M=s[d]-T;_+=n[m]*M,p+=n[m+1]*M,g+=n[m+2]*M}i[m]=_,i[m+1]=p,i[m+2]=g}}}function nu(i,t,e,n,s,r,a=40,o=6,c=25,l=-.53){let u=i.length/3,h=Float32Array.from(t),d=new Float32Array(t.length),f=new Float32Array(t.length),m=[];for(let x=0;x<u;x++)n[x]>.01&&m.push(x);if(!m.length)return 0;let _=(x,b,S=!0)=>{d.set(b);for(let A of m){let E=e.start[A],P=e.start[A+1],F=P-E;if(!F)continue;let N=0,I=0,C=0;for(let k=E;k<P;k++){let U=e.list[k]*3;N+=d[U],I+=d[U+1],C+=d[U+2]}let L=x*(S?Math.min(1,n[A]*1.5):1);b[A*3]+=L*(N/F-d[A*3]),b[A*3+1]+=L*(I/F-d[A*3+1]),b[A*3+2]+=L*(C/F-d[A*3+2])}};for(let x=0;x<a;x++)_(.5,h),l&&_(l,h);r(h,f);let p=new Float32Array(u),g=new Float32Array(u);for(let x of m){let b=x*3;p[x]=Math.max(0,(t[b]-h[b])*f[b]+(t[b+1]-h[b+1])*f[b+1]+(t[b+2]-h[b+2])*f[b+2]),g[x]=(i[b]-h[b])*f[b]+(i[b+1]-h[b+1])*f[b+1]+(i[b+2]-h[b+2])*f[b+2]}let T=(x,b,S=!1)=>{let A=new Float32Array(u);for(let E=0;E<b;E++){A.set(x);for(let P of m){let F=0,N=A[P],I=e.start[P],C=e.start[P+1];for(let k=I;k<C;k++){let U=A[e.list[k]];F+=U,N=Math.max(N,U)}let L=C-I||1;x[P]=S?Math.max(A[P],N*.97):.5*A[P]+.5*F/L}}},M=Float32Array.from(p);if(o<0){for(let x=0;x<c;x++){T(M,1);for(let b of m)M[b]=Math.max(M[b],p[b])}T(M,-o)}else T(M,o,!0),T(M,c);let y=0,v=1;for(let x of m)y=Math.max(y,p[x]),M[x]>2e-4&&(v=Math.max(v,p[x]/M[x]));v=Math.min(v,1.3);for(let x of m)M[x]=Math.max(M[x]*v,p[x]);{let x=Float32Array.from(M);T(x,globalThis.__braBlur??22);let b=1;for(let S of m)x[S]>2e-4&&(b=Math.max(b,p[S]/x[S]));b=Math.min(b,globalThis.__braScale??2.2);for(let S of m)M[S]=Math.max(x[S]*b,p[S]*.97)}let w=Float32Array.from(g);T(w,globalThis.__braH??60);for(let x of m){let b=x*3,S=Math.max(w[x],M[x]+s[x]),A=Math.min(1,n[x]*1.5),E=Math.abs(t[b]),P=Math.max(0,1-E/(globalThis.__braXw??.065)),F=(globalThis.__braFill??.02)*P*P*(3-2*P)*Math.min(1,n[x]*1.5),N=S+F,I=(globalThis.__braIn??.007)*Math.min(1,n[x]*1.5)*Math.min(1,Math.max(0,(E-.02)/.04))*Math.max(0,1-Math.max(0,E-.09)/.05);for(let C=0;C<3;C++)i[b+C]+=(h[b+C]+f[b+C]*N-i[b+C])*A;i[b]-=Math.sign(t[b])*I*A}return y}function gp(i,t,e,n,s,r,a,o=1){let c=i.length/3,l=.01,u=.005,h=Math.ceil(.5/l),d=Math.ceil((a-r)/u)+1,f=new Float32Array(h*d).fill(-9),m=new Int32Array(c).fill(-1);for(let y=0;y<c;y++){let v=y*3;if(e[y]!==0||t[v+2]<.25)continue;let w=i[v+1];if(w<r||w>a)continue;let x=Math.floor((i[v]+.25)/l),b=Math.floor((a-w)/u);if(x<0||x>=h)continue;let S=x*d+b;m[y]=S,f[S]=Math.max(f[S],i[v+2])}let _=new Float32Array(h*d);for(let y=0;y<h;y++){let v=-1,w=-9;for(let b=0;b<d;b++)f[y*d+b]>w&&(w=f[y*d+b],v=b);if(v<0)continue;let x=w;for(let b=v+1;b<d&&(b-v)*u<=o;b++){x-=(s+(globalThis.__curveK??.55)*Math.exp(-((b-v)*u)/.045)*Math.min(1,s/.1))*u;let S=y*d+b;f[S]<-1||(f[S]<x?_[S]=x-f[S]:x=f[S])}}let p=new Float32Array(c),g=!1;for(let y=0;y<c;y++)m[y]>=0&&(p[y]=_[m[y]]*Math.min(1,(t[y*3+2]-.25)/.35),p[y]>0&&(g=!0));if(!g)return 0;let T=0,M=new Float32Array(c);for(let y=0;y<20;y++){M.set(p);for(let v=0;v<c;v++){let w=n.start[v],x=n.start[v+1];if(x===w)continue;let b=0;for(let S=w;S<x;S++)b+=M[n.list[S]];p[v]=.5*M[v]+.5*b/(x-w)}}for(let y=0;y<c;y++)e[y]===0&&(i[y*3+2]+=p[y],T=Math.max(T,p[y]));return T}var kt=52,he=34,ue=88,Ht=72,nn=44,xn=Math.PI*2,An=i=>(i=Math.min(1,Math.max(0,i)),i*i*(3-2*i)),ru=class{constructor(t,e){this.P=t;this.idx=e;this.n=e.length/3,this.ymin=new Float32Array(this.n),this.ymax=new Float32Array(this.n);for(let n=0;n<this.n;n++){let s=t[e[n*3]*3+1],r=t[e[n*3+1]*3+1],a=t[e[n*3+2]*3+1];this.ymin[n]=Math.min(s,r,a),this.ymax[n]=Math.max(s,r,a)}}P;idx;n;ymin;ymax;segs(t,e=[]){let n=this.P,s=this.idx;e.length=0;for(let r=0;r<this.n;r++){if(this.ymin[r]>t||this.ymax[r]<t)continue;let a=[];for(let o=0;o<3;o++){let c=s[r*3+o]*3,l=s[r*3+(o+1)%3]*3,u=n[c+1]-t,h=n[l+1]-t;if(u<0&&h>=0||u>=0&&h<0){let d=u/(u-h);a.push(n[c]+(n[l]-n[c])*d,n[c+2]+(n[l+2]-n[c+2])*d)}}a.length===4&&e.push(a[0],a[1],a[2],a[3])}return e}};function ci(i,t,e,n,s){let r=Math.sin(n),a=Math.cos(n),o=0;for(let c=0;c<i.length;c+=4){if(s&&!s((i[c]+i[c+2])*.5))continue;let l=i[c]-t,u=i[c+1]-e,h=i[c+2]-i[c],d=i[c+3]-i[c+1],f=r*d-a*h;if(Math.abs(f)<1e-12)continue;let m=(l*d-u*h)/f,_=(l*a-u*r)/f;m>o&&_>=0&&_<=1&&(o=m)}return o}function A_(i,t,e,n){for(let s=0;s<3;s++){let r=1e9,a=0,o=0;for(let m=0;m<i.length;m+=4){let _=i[m+2]-i[m],p=i[m+3]-i[m+1],g=_*_+p*p||1e-12,T=((t-i[m])*_+(e-i[m+1])*p)/g;T=Math.max(0,Math.min(1,T));let M=i[m]+_*T,y=i[m+1]+p*T,v=(t-M)**2+(e-y)**2;v<r&&(r=v,a=M,o=y)}let c=0;for(let m=0;m<i.length;m+=4){let _=i[m+1],p=i[m+3];_>e!=p>e&&i[m]+(e-_)/(p-_)*(i[m+2]-i[m])>t&&c++}let l=Math.sqrt(r),u=c%2===1;if(!u&&l>=n)return[t,e];let h=u?a-t:t-a,d=u?o-e:e-o,f=Math.hypot(h,d);f<1e-9?(h=t>=0?1:-1,d=0):(h/=f,d/=f),t=a+h*n,e=o+d*n}return[t,e]}function T_(i){let t=0,e=i.length/2;for(let n=0;n<e;n++){let s=(n+1)%e;t+=Math.hypot(i[s*2]-i[n*2],i[s*2+1]-i[n*2+1])}return t}function bp(i,t,e,n){let r=[];for(let h=0;h<120;h++){let d=xn*h/120,f=ci(i,t,e,d,n);r.push(t+Math.sin(d)*f,e+Math.cos(d)*f)}let a=[];for(let h=0;h<120;h++)a.push([r[h*2],r[h*2+1]]);a.sort((h,d)=>h[0]-d[0]||h[1]-d[1]);let o=(h,d,f)=>(d[0]-h[0])*(f[1]-h[1])-(d[1]-h[1])*(f[0]-h[0]),c=[],l=[];for(let h of a){for(;c.length>=2&&o(c[c.length-2],c[c.length-1],h)<=0;)c.pop();c.push(h)}for(let h=a.length-1;h>=0;h--){let d=a[h];for(;l.length>=2&&o(l[l.length-2],l[l.length-1],d)<=0;)l.pop();l.push(d)}let u=c.slice(0,-1).concat(l.slice(0,-1));return T_(u.flat())}function xp(i,t){let e=0,n=0,s=0;for(let r=0;r<i.length;r+=4){if(t&&!t((i[r]+i[r+2])*.5))continue;let a=Math.hypot(i[r+2]-i[r],i[r+3]-i[r+1]);e+=(i[r]+i[r+2])*.5*a,n+=(i[r+1]+i[r+3])*.5*a,s+=a}return s?[e/s,n/s]:[0,0]}function iu(i,t,e=36){let n=new Float32Array(e).fill(9),s=9;for(let a=0;a<i.n;a++){let o=i.out[a*3],c=i.out[a*3+1],l=i.out[a*3+2]-t;if(Math.hypot(o,l)>.215||c<.3)continue;let u=Math.min(e-1,Math.floor((Math.atan2(o,l)+Math.PI)/xn*e));c<n[u]&&(n[u]=c),c<s&&(s=c)}for(let a=0;a<e;a++)n[a]>8&&(n[a]=s);let r=n.slice();for(let a=0;a<e;a++)r[a]=Math.min(n[a],.5*(n[(a+e-1)%e]+n[(a+1)%e])+.004);return{a:r,g:s,at:(a,o)=>r[Math.min(e-1,Math.floor((Math.atan2(a,o-t)+Math.PI)/xn*e))]}}var Ic=class{constructor(t,e){this.g=t;this.sizeIdx=e;this.init(t.kind==="skirt")}g;sizeIdx;mesh;mat;geo;fullIdx0;wallRow;wlsRows=[];nOut=0;rest;posed;nrm;attrs;thick=8e-4;reads=[];maxStretch=0;recIdx=0;hemY=0;topY=0;keys=[];floorR;src=null;seamPairs=[];flip=[!1,!1];inited=!1;lastKey="";fullIdx;get size(){return this.g.sizes[this.sizeIdx]}init(t){let e=t?nn*Ht:2*ue*kt;this.nOut=e;let n=e*2;this.floorR=new Float32Array(e),this.rest=new Float32Array(n*3),this.posed=new Float32Array(n*3),this.nrm=new Float32Array(n*3),this.attrs=new Float32Array(n*4);let s=new Te;s.setAttribute("position",new Xt(this.posed,3)),s.setAttribute("normal",new Xt(this.nrm,3)),s.setAttribute("aRest",new Xt(this.rest,3)),s.setAttribute("aGp",new Xt(this.attrs,4));let r=[],a=[],o=(l,u,h,d)=>{a.push(l,u,h,l,h,d)},c=l=>l+e;if(t){for(let l=0;l<nn-1;l++)for(let u=0;u<Ht;u++){let h=(u+1)%Ht,d=l*Ht+u,f=l*Ht+h,m=(l+1)*Ht+h,_=(l+1)*Ht+u;o(d,_,m,f),o(c(d),c(f),c(m),c(_))}for(let l=0;l<Ht;l++){let u=(l+1)%Ht,h=l,d=u;o(h,d,c(d),c(h));let f=(nn-1)*Ht+l,m=(nn-1)*Ht+u;o(f,c(f),c(m),m)}}else for(let l=0;l<2;l++){let u=l*ue*kt;for(let h=0;h<ue-1;h++)for(let d=0;d<kt;d++){let f=(d+1)%kt,m=u+h*kt+d,_=u+h*kt+f,p=u+(h+1)*kt+f,g=u+(h+1)*kt+d,T=a.length/3;l===0?(o(m,g,p,_),o(c(m),c(_),c(p),c(g))):(o(m,_,p,g),o(c(m),c(g),c(p),c(_)));let M=a.length/3-T;if(d>=he)for(let y=0;y<M;y++){for(;r.length<T+y;)r.push(-1);r[T+y]=h}}for(let h=0;h<kt;h++){let d=(h+1)%kt,f=u+h,m=u+d;o(f,m,c(m),c(f));let _=u+(ue-1)*kt+h,p=u+(ue-1)*kt+d;o(_,c(_),c(p),p)}}s.setIndex(a),this.geo=s,this.fullIdx=Uint32Array.from(a),this.fullIdx0=this.fullIdx,this.wallRow=Int16Array.from({length:a.length/3},(l,u)=>r[u]??-1),this.mat=R_(this.g.fabricKind,this.g.design),this.mesh=new fe(s,this.mat),this.mesh.name="lower_"+this.g.id+"_"+this.size,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.inited=!0}setColor(t){this.mat.color.set(t),this.mat.sheenColor.set(t).lerp(new Mt("#ffffff"),this.g.fabricKind==="satin"?.25:.3)}fit(t,e){let n=this.g.kind==="skirt",s=new ru(t.P,t.idx),r=this.g.geom,a=this.g.table,o=this.sizeIdx,c=[],l=t.levels.waist+r.riseOff;if(e){let A=iu(e,.02).g;A<l+.012&&(l=Math.max(l,A+.03))}this.topY=l;let u=n?t.floorY+(r.hemFrac??.2)*t.H:r.hemDropFromCrotch!=null?t.crotchY-r.hemDropFromCrotch*t.H:t.floorY+(r.hemFrac??.06)*t.H;this.hemY=u;let h=t.floorY+.6*(t.crotchY-t.floorY),d=t.crotchY-.045,f=t.levels.hips,m=S=>s.segs(S,c).slice(),_=m(l),p=m(f),g=(()=>{let S=ci(_,0,0,0),A=ci(_,0,0,Math.PI);return(S-A)*.5})(),T=(S,A)=>{let E=m(S);if(!A)return bp(E,0,g);let P=N=>N>0,F=xp(E,P);return bp(E,F[0],F[1],P)},M={w:T(l,!1)*100,h:T(f,!1)*100,t:n?0:T(d,!0)*100,k:n?0:T(Math.max(h,u+.02),!0)*100,hm:n?0:T(u+.003,!0)*100},y=(S,A)=>(S-A)/(xn*100)*100,v=(S,A)=>Math.min(r.maxM,Math.max(r.minM,(S-A)/xn/100)),w=(S,A,E)=>({zona:S,prenda:A,cuerpo:E,estira:Math.max(0,E/A-1)});this.reads=[w("cintura",a.cintura[o],M.w),w("cadera",a.cadera[o],M.h)],n||this.reads.push(w("muslo",a.muslo[o],M.t)),this.maxStretch=Math.max(...this.reads.map(S=>S.estira));let x=n?[{y:l,m:v(a.cintura[o],M.w)},{y:f,m:v(a.cadera[o],M.h)},{y:u,m:v(a.cadera[o],M.h)}]:[{y:l,m:v(a.cintura[o],M.w)},{y:f,m:v(a.cadera[o],M.h)},{y:d,m:v(a.muslo[o],M.t)},{y:Math.max(h,u+.02),m:v(a.rodilla[o],M.k)},{y:u,m:v(a.bajo[o],M.hm)}];this.keys=x,x.sort((S,A)=>A.y-S.y);let b=S=>{if(S>=x[0].y)return x[0].m;for(let A=0;A<x.length-1;A++){let E=x[A],P=x[A+1];if(S<=E.y&&S>=P.y)return E.m+(P.m-E.m)*An((E.y-S)/Math.max(1e-6,E.y-P.y))}return x[x.length-1].m};if(n?this.buildSkirt(s,t,l,u,f,g,b,a,o,r):this.buildPants(s,t,l,u,h,b,r),e&&this.clampUnderTop(t,e,n),!n){let S=this.fullIdx0,A=[];for(let E=0;E<S.length;E+=3){let P=this.wallRow[E/3];A.push(S[E],S[E+1],S[E+2])}this.fullIdx=Uint32Array.from(A)}this.geo.setIndex(new Xt(this.fullIdx,1)),this.finish(n,t),e&&this.cutUnderTop(e),this.pose(t)}buildPants(t,e,n,s,r,a,o){let c=this.rest,l=this.nOut,u=[],h=[],d=[],f=[],m=[],_=[],p=[],g=v=>t.segs(v,u).slice();for(let v=0;v<ue;v++){let w=n+(s-n)*v/(ue-1);d.push(w);let x=An((e.crotchY-.004-w)/.19),b=new Float32Array(kt*2);_.push(g(w)),p.push(x);let S=new Float32Array(kt*2),A=new Float32Array(kt*2);if(x<1){let C=Math.max(w,e.crotchY+.012),L=g(C),k=ci(L,0,0,0),U=ci(L,0,0,Math.PI),B=(k-U)*.5;for(let tt=0;tt<=he;tt++){let at=Math.PI*tt/he,nt=ci(L,0,B,at);S[tt*2]=Math.sin(at)*nt,S[tt*2+1]=B+Math.cos(at)*nt}let z=S[1],Z=S[he*2+1];for(let tt=he+1;tt<kt;tt++){let at=(tt-he)/(kt-he);S[tt*2]=0,S[tt*2+1]=Z+(z-Z)*at}}if(x>0){let C=Math.min(w,e.crotchY-.008),L=g(C),k=nt=>nt>0,U=xp(L,k),B=-Math.PI*.2,z=Math.PI*1.2,Z=[];for(let nt=0;nt<kt;nt++){let ut=nt<=he?B+(z-B)*nt/he:z+(B+xn-z)*(nt-he)/(kt-he);Z.push(ut,ci(L,U[0],U[1],ut,k))}let tt=0;for(let nt=0;nt<kt;nt++)tt+=Z[nt*2+1];tt/=kt;let at=o.kappa*An((r+.12-w)/.25);for(let nt=0;nt<kt;nt++){let ut=Z[nt*2],X=Z[nt*2+1],J=Math.max(X,(1-at)*X+at*tt);A[nt*2]=U[0]+Math.sin(ut)*J,A[nt*2+1]=U[1]+Math.cos(ut)*J}}for(let C=0;C<kt*2;C++)b[C]=x<=0?S[C]:x>=1?A[C]:S[C]*(1-x)+A[C]*x;let E=a(w),P=0;for(let C=0;C<kt;C++){let L=(C+1)%kt;P+=b[C*2]*b[L*2+1]-b[L*2]*b[C*2+1]}let F=P>0?1:-1,N=new Float32Array(kt*3),I=new Float32Array(kt*2);for(let C=0;C<kt;C++){let L=(C+kt-1)%kt,k=(C+1)%kt,U=b[k*2]-b[L*2],B=b[k*2+1]-b[L*2+1],z=Math.hypot(U,B)||1;U/=z,B/=z;let Z=F*B,tt=-F*U,at=1;if(C===0){Z*=x,tt=(tt>=0,1),at=1;let ct=Math.hypot(Z,tt)||1;Z/=ct,tt/=ct}else if(C===he){Z*=x,tt=(tt<=0,-1);let ct=Math.hypot(Z,tt)||1;Z/=ct,tt/=ct}else C>he&&(at=x);let nt=.004*An(1-Math.abs(w-(e.crotchY-.03))/.065),ut=Math.min(Math.abs(C-he),99),X=ut<=4?0*(1-ut/5)*An(1-Math.abs(w-(e.crotchY+.07))/.1):0,J=E+nt+X;N[C*3]=b[C*2]+Z*J*at,N[C*3+1]=w,N[C*3+2]=b[C*2+1]+tt*J*at,I[C*2]=at>0?Z:0,I[C*2+1]=at>0?tt:0}h.push(N),f.push(b.slice()),m.push(I)}let T=v=>{for(let w=0;w<v;w++){let x=h.map(b=>b.slice());for(let b=1;b<ue-1;b++)for(let S=0;S<kt;S++)for(let A of[0,2])A===0&&S>he&&Math.abs(x[b][S*3])<1e-6||(h[b][S*3+A]=.5*x[b][S*3+A]+.25*(x[b-1][S*3+A]+x[b+1][S*3+A]));x=h.map(b=>b.slice());for(let b=1;b<ue-1;b++){for(let S=1;S<he;S++)for(let A of[0,2])h[b][S*3+A]=.5*x[b][S*3+A]+.25*(x[b][(S-1)*3+A]+x[b][(S+1)*3+A]);for(let S=he+2;S<kt-1;S++)h[b][S*3+2]=.5*x[b][S*3+2]+.25*(x[b][(S-1)*3+2]+x[b][(S+1)*3+2])}}},M=()=>{for(let v=0;v<ue;v++)for(let w=0;w<kt;w++){let x=m[v][w*2],b=m[v][w*2+1];if(!x&&!b)continue;let S=(h[v][w*3]-f[v][w*2])*x+(h[v][w*3+2]-f[v][w*2+1])*b;S<o.minM&&(h[v][w*3]+=x*(o.minM-S),h[v][w*3+2]+=b*(o.minM-S))}for(let v=0;v<ue;v++)for(let w=0;w<kt;w++){let x=w>he;if(x&&p[v]<.15)continue;let b=A_(_[v],h[v][w*3],h[v][w*3+2],o.minM+.005*Math.sin(Math.PI*p[v])+(w>=he-3&&w<=he?.003:0));w===0||w===he||x&&p[v]<.5||(h[v][w*3]=b[0]),h[v][w*3+2]=b[1]}};for(let v=0;v<9;v++)T(5),M();this.wlsRows=p.slice();let y=v=>{for(let w=0;w<v;w++){let x=h.map(b=>b.slice());for(let b=1;b<ue-1;b++){let S=1-Math.min(1,p[b]*1.6);if(S<=0)continue;h[b][2]=x[b][2]+S*(.5*(x[b][5]+0*x[b][2])+.25*(x[b-1][2]+x[b+1][2])-x[b][2])*.8+S*0;let A=he*3+2,E=(he-1)*3+2;h[b][A]=x[b][A]+S*(.5*x[b][E]+.25*(x[b-1][A]+x[b+1][A])-x[b][A])*.8}}};{let v=d.findIndex(x=>x<=e.crotchY+.16),w=Math.min(ue-1,d.findIndex(x=>x<=e.crotchY-.22)<0?ue-1:d.findIndex(x=>x<=e.crotchY-.22));for(let x=Math.max(1,he-18);x<=he;x++){let b=v,S=-1e9;for(let P=v;P<=Math.min(w,ue-1);P++){if(d[P]>e.crotchY+.16||d[P]<e.crotchY-.02)continue;let F=-h[P][x*3+2];F>S&&(S=F,b=P)}if(S<-1e8||w<=b+1)continue;let A=-h[b][x*3+2],E=-h[w][x*3+2];for(let P=b+1;P<w;P++){let F=(P-b)/(w-b),N=A+(E-A)*F;N>-h[P][x*3+2]&&(h[P][x*3+2]=-N)}}}for(let v=0;v<4;v++)T(5),y(4),M();if(e.crotchY-s<.3)for(let v=0;v<14;v++){let w=h.map(x=>x.slice());for(let x=ue-14;x<ue;x++)for(let b=0;b<kt;b++)if(!(b>he&&Math.abs(w[x][b*3])<1e-6))for(let S of[0,2]){let A=w[x-1][b*3+S],E=x<ue-1?w[x+1][b*3+S]:w[x][b*3+S]+(w[x][b*3+S]-A);h[x][b*3+S]=.5*w[x][b*3+S]+.25*(A+E)}M()}for(let v=0;v<ue;v++){if(p[v]>=1)continue;let w=_[v],x=ci(w,0,0,0),b=ci(w,0,0,Math.PI),S=o.minM+.003*(1-p[v])+.0035;h[v][2]=Math.max(h[v][2],x+S),h[v][he*3+2]=Math.min(h[v][he*3+2],-b-S)}for(let v=0;v<2;v++){let w=v===0?1:-1;for(let x=0;x<ue;x++)for(let b=0;b<kt;b++){let S=(v*ue*1+x)*kt+b,A=h[x][b*3]<.0012?0:h[x][b*3];c[S*3]=w*A,c[S*3+1]=d[x],c[S*3+2]=h[x][b*3+2],this.floorR[S]=Math.hypot(f[x][b*2],f[x][b*2+1]-.02)+5e-4}}}buildSkirt(t,e,n,s,r,a,o,c,l,u){let h=this.rest,d=[],f=x=>{let b=t.segs(x,d).slice(),S=new Float32Array(Ht);for(let A=0;A<Ht;A++)S[A]=ci(b,0,a,xn*A/Ht);return S},m=f(r),_=o(r),p=c.bajo[l]/xn/100*100/100,g=.86,T=c.bajo[l]/100/xn/Math.sqrt((1+g*g)/2),M=f(s),y=new Float32Array(Ht);for(let x=0;x<Ht;x++){let b=M[x];for(let S=-10;S<=10;S++)b=Math.max(b,M[(x+S+Ht)%Ht]*Math.cos(S*xn/Ht*.5));y[x]=b}for(let x=0;x<4;x++){let b=y.slice();for(let S=0;S<Ht;S++)y[S]=.5*b[S]+.25*(b[(S+Ht-1)%Ht]+b[(S+1)%Ht])}let v=[],w=[];for(let x=0;x<nn;x++){let b=n+(s-n)*x/(nn-1),S=f(Math.max(b,e.crotchY-0));if(b<e.crotchY){let N=f(b);for(let I=0;I<Ht;I++)S[I]=Math.max(S[I],N[I])}let A=o(b),E=new Float32Array(Ht),P=An((r-b)/Math.max(1e-6,r-s)),F=Math.pow(Math.max(0,(r-b)/Math.max(1e-6,r-s)),1.15);for(let N=0;N<Ht;N++){let I=xn*N/Ht,C=Math.hypot(T*Math.sin(I),T*g*Math.cos(I))>0?1/Math.hypot(Math.sin(I)/T,Math.cos(I)/(T*g)):T,L=b>=r?S[N]+A:m[N]+_,k=Math.min(C,y[N]+.003+u.minM),U=b>=r?L:L+(Math.max(k,m[N]*0+0)-L)*F*(u.flare??1);U=Math.max(U,S[N]+u.minM+.006*An(1-Math.abs(b-(e.crotchY-.02))/.08)),E[N]=U}if(b<r)for(let N=0;N<Ht;N++)S[N]=Math.min(S[N],m[N]+.004);if(b<r){let N=S.slice(),I=10,C=An((r-b)/.12);for(let L=0;L<Ht;L++){let k=N[L];for(let U=-I;U<=I;U++)k=Math.max(k,N[(L+U+Ht)%Ht]*Math.cos(U*xn/Ht*.5));S[L]=N[L]+(k-N[L])*C}for(let L=0;L<3;L++){let k=S.slice();for(let U=0;U<Ht;U++)S[U]=Math.max(k[U],.5*k[U]+.25*(k[(U+Ht-1)%Ht]+k[(U+1)%Ht]))}for(let L=0;L<Ht;L++){let k=xn*L/Ht,U=m[L]+_,B=E[L];E[L]=Math.max(B,S[L]+u.minM)}}v.push(E),w.push(S)}{let x=v.map(S=>S.slice()),b=8;for(let S=0;S<nn;S++){let A=n+(s-n)*S/(nn-1),E=An((r+.09-A)/.1);if(!(E<=0))for(let P=0;P<Ht;P++){let F=x[S][P];for(let N=-b;N<=b;N++){let I=S+N;I<0||I>=nn||(F=Math.max(F,x[I][P]-.0016*Math.abs(N)))}v[S][P]=x[S][P]+(F-x[S][P])*E}}}for(let b=0;b<Ht;b++){let S=[];for(let A=0;A<nn;A++){for(;S.length>=2;){let E=S[S.length-2],P=S[S.length-1];if((P-E)*(v[A][b]-v[E][b])-(v[P][b]-v[E][b])*(A-E)>=0)S.pop();else break}S.push(A)}for(let A=0;A+1<S.length;A++){let E=S[A],P=S[A+1];for(let F=E+1;F<P;F++){let N=(F-E)/(P-E),I=v[E][b]+(v[P][b]-v[E][b])*N;I>v[F][b]&&(v[F][b]=I)}}}for(let x=0;x<8;x++){let b=v.map(S=>S.slice());for(let S=1;S<nn-1;S++)for(let A=0;A<Ht;A++)v[S][A]=.5*b[S][A]+.25*(b[S-1][A]+b[S+1][A])}for(let x=0;x<nn;x++){let b=n+(s-n)*x/(nn-1),S=v[x].slice();for(let A=0;A<4;A++){let E=S.slice();for(let P=0;P<Ht;P++)S[P]=.5*E[P]+.25*(E[(P+Ht-1)%Ht]+E[(P+1)%Ht])}for(let A=0;A<Ht;A++){let E=xn*A/Ht,P=Math.max(S[A],w[x][A]+u.minM+.005*An(1-Math.abs(b-(e.crotchY-.02))/.08)),F=x*Ht+A;h[F*3]=Math.sin(E)*P,h[F*3+1]=b,h[F*3+2]=a+Math.cos(E)*P,this.floorR[F]=Math.hypot(Math.sin(E)*w[x][A],a-.02+Math.cos(E)*w[x][A])+5e-4}}}clampUnderTop(t,e,n){let s=this.rest,r=this.nOut,a=.02,o=iu(e,a);for(let c=0;c<r;c++){let l=c*3,u=s[l],h=s[l+1],d=s[l+2]-a,f=o.at(u,d+a);if(h<f-.045)continue;let m=An((h-(f-.045))/.05),_=Math.hypot(u,d),g=this.floorR[c]-(d<0?.005:0)*An((h-f+.02)/.02);if(_<=g)continue;let T=(_+(g-_)*m)/_;s[l]=u*T,s[l+2]=a+d*T}}cutUnderTop(t){let e=iu(t,.02),n=this.nOut,s=this.rest,r=this.fullIdx,a=[];for(let o=0;o<r.length;o+=3){let c=!0;for(let l=0;l<3;l++){let u=r[o+l]%n;s[u*3+1]<e.at(s[u*3],s[u*3+2])+.014&&(c=!1)}c||a.push(r[o],r[o+1],r[o+2])}this.geo.setIndex(new Xt(Uint32Array.from(a),1))}finish(t,e){let n=this.nOut,s=this.rest,r=this.attrs,a=this.thick,o=this.geo.index.array,c=this.nrm;c.fill(0);let l=o.length/3;for(let _=0;_<l;_++){let p=o[_*3],g=o[_*3+1],T=o[_*3+2];if(p>=n||g>=n||T>=n)continue;let M=s[g*3]-s[p*3],y=s[g*3+1]-s[p*3+1],v=s[g*3+2]-s[p*3+2],w=s[T*3]-s[p*3],x=s[T*3+1]-s[p*3+1],b=s[T*3+2]-s[p*3+2],S=y*b-v*x,A=v*w-M*b,E=M*x-y*w;for(let P of[p,g,T])c[P*3]+=S,c[P*3+1]+=A,c[P*3+2]+=E}let u=t?nn*Ht:ue*kt;for(let _=0;_<n;_++){let p=Math.hypot(c[_*3],c[_*3+1],c[_*3+2])||1;c[_*3]/=p,c[_*3+1]/=p,c[_*3+2]/=p}let h=t?1:2;for(let _=0;_<h;_++){let p=0,g=0,T=_*u;for(let M=2;M<(t?nn:ue)-2;M+=3)for(let y=0;y<(t?Ht:kt);y++){let v=T+M*(t?Ht:kt)+y;if(!t&&(y===0||y>=he))continue;let w=0,x=0;for(let b=0;b<(t?Ht:kt);b++)w+=s[(T+M*(t?Ht:kt)+b)*3],x+=s[(T+M*(t?Ht:kt)+b)*3+2];w/=t?Ht:kt,x/=t?Ht:kt,p+=(s[v*3]-w)*c[v*3]+(s[v*3+2]-x)*c[v*3+2],g++}if(p<0)for(let M=T;M<T+u;M++)c[M*3]*=-1,c[M*3+1]*=-1,c[M*3+2]*=-1}if(!t)for(let _=0;_<ue;_++)for(let p of[0,he]){let g=_*kt+p,T=(ue+_)*kt+p;if(Math.hypot(s[g*3]-s[T*3],s[g*3+1]-s[T*3+1],s[g*3+2]-s[T*3+2])<.0012){let y=c[g*3]+c[T*3],v=c[g*3+1]+c[T*3+1],w=c[g*3+2]+c[T*3+2],x=Math.hypot(y,v,w)||1;c[g*3]=c[T*3]=y/x,c[g*3+1]=c[T*3+1]=v/x,c[g*3+2]=c[T*3+2]=w/x}}if(!t){let _=e.crotchY;for(let p=0;p<14;p++){let g=c.slice(0,n*3);for(let T=0;T<2;T++)for(let M=1;M<ue-1;M++){let y=s[(T*ue+M)*kt*3+1],v=An(1-Math.abs(y-(_+.02))/.2);if(!(v<=0))for(let w=0;w<kt;w++){if(w>he&&Math.abs(s[((T*ue+M)*kt+w)*3])<1e-6)continue;let x=(T*ue+M)*kt+w,b=g[x*3]*2,S=g[x*3+1]*2,A=g[x*3+2]*2;for(let P of[x-kt,x+kt,w>0?x-1:-1,w<kt-1?x+1:-1])P<0||(b+=g[P*3],S+=g[P*3+1],A+=g[P*3+2]);let E=Math.hypot(b,S,A)||1;c[x*3]=g[x*3]*(1-v)+b/E*v,c[x*3+1]=g[x*3+1]*(1-v)+S/E*v,c[x*3+2]=g[x*3+2]*(1-v)+A/E*v}}}for(let p=0;p<n;p++){let g=Math.hypot(c[p*3],c[p*3+1],c[p*3+2])||1;c[p*3]/=g,c[p*3+1]/=g,c[p*3+2]/=g}for(let p=0;p<ue;p++)for(let g of[0,he]){let T=p*kt+g,M=(ue+p)*kt+g;if(Math.hypot(s[T*3]-s[M*3],s[T*3+1]-s[M*3+1],s[T*3+2]-s[M*3+2])<.0012){let v=c[T*3]+c[M*3],w=c[T*3+1]+c[M*3+1],x=c[T*3+2]+c[M*3+2],b=Math.hypot(v,w,x)||1;c[T*3]=c[M*3]=v/b,c[T*3+1]=c[M*3+1]=w/b,c[T*3+2]=c[M*3+2]=x/b}}}for(let _=0;_<n;_++)for(let p=0;p<3;p++)s[(n+_)*3+p]=s[_*3+p]-c[_*3+p]*a,c[(n+_)*3+p]=-c[_*3+p];let d=t?nn:ue,f=t?Ht:kt,m=t?1:2;for(let _=0;_<m;_++)for(let p=0;p<d;p++){let g=_*d*f+p*f,T=0,M=new Float32Array(f+1),y=t?f:he;for(let v=0;v<y;v++){let w=g+v,x=g+(v+1)%f;M[v+1]=M[v]+Math.hypot(s[x*3]-s[w*3],s[x*3+2]-s[w*3+2])}T=M[y]||1;for(let v=0;v<f;v++){let w=g+v,x=v<=y?M[v]:-1,b=v<=y?M[v]/T:-1,S=s[w*3+1];for(let A of[w,w+n])r[A*4]=b,r[A*4+1]=x,r[A*4+2]=this.topY-S,r[A*4+3]=S-this.hemY}}this.geo.getAttribute("aRest").needsUpdate=!0,this.geo.getAttribute("aGp").needsUpdate=!0}pose(t){let e=this.nOut*2,n=this.rest,s=t.P,r=t.Bp,a=t.Mv,o=this.posed;this.cell||(this.cell=new Map,this.cellKey=-1);let c=.035,l=(d,f,m)=>((d+64)*128+(f+64))*128+(m+64),u=new Map,h=s.length/3;for(let d=0;d<h;d++){let f=s[d*3+1];if(f>this.topY+.1||f<this.hemY-.08)continue;let m=s[d*3];if(Math.abs(m)>.3)continue;let _=l(Math.floor(m/c),Math.floor(f/c),Math.floor(s[d*3+2]/c)),p=u.get(_);p||u.set(_,p=[]),p.push(d)}for(let d=0;d<e;d++){let f=d*3,m=n[f],_=n[f+1],p=n[f+2],g=Math.abs(m)<.0035?0:m,T=Math.floor(g/c),M=Math.floor(_/c),y=Math.floor(p/c),v=-1,w=1e9;for(let E=1;E<=3&&v<0;E++)for(let P=T-E;P<=T+E;P++)for(let F=M-E;F<=M+E;F++)for(let N=y-E;N<=y+E;N++){let I=u.get(l(P,F,N));if(I)for(let C of I){let L=s[C*3]-g,k=s[C*3+1]-_,U=s[C*3+2]-p,B=L*L+k*k+U*U;B<w&&(w=B,v=C)}}if(v<0){o[f]=m,o[f+1]=_,o[f+2]=p;continue}let x=m-s[v*3],b=_-s[v*3+1],S=p-s[v*3+2],A=v*9;o[f]=r[v*3]+a[A]*x+a[A+1]*b+a[A+2]*S,o[f+1]=r[v*3+1]+a[A+3]*x+a[A+4]*b+a[A+5]*S,o[f+2]=r[v*3+2]+a[A+6]*x+a[A+7]*b+a[A+8]*S,Math.abs(m)>=.0035;{let E=o[f]-r[v*3],P=o[f+1]-r[v*3+1],F=o[f+2]-r[v*3+2],N=Math.hypot(E,P,F);if(N>1e-6&&N<.003&&d<this.nOut){let I=.003/N;o[f]=r[v*3]+E*I,o[f+1]=r[v*3+1]+P*I,o[f+2]=r[v*3+2]+F*I}}}this.geo.getAttribute("position").needsUpdate=!0,this.geo.getAttribute("normal").needsUpdate=!0,this.geo.computeBoundingSphere()}cell=null;cellKey=-1};function au(i,t,e){let n=t.lowerStretchCm?.[i.stretch]??0,s=i.table,r=i.sizes.length-1;for(let a=0;a<i.sizes.length;a++)if(s.cadera[a]+n>=e.hips+(i.kind==="skirt"?3:2)&&s.cintura[a]+n>=e.waist+.5){r=a;break}return{index:r,size:i.sizes[r]}}function yp(i,t,e,n){let s=au(i,t,e),r=i.sizes.indexOf(n);if(r===s.index)return{kind:"ok",text:"Calce ideal seg\xFAn tus medidas"};if(r>s.index)return{kind:"loose",text:`Calce holgado \xB7 +${su(i.table.cintura[r]-i.table.cintura[s.index])} cm en la cintura y +${su(i.table.cadera[r]-i.table.cadera[s.index])} cm en la cadera`};let a=t.lowerStretchCm?.[i.stretch]??0,o=Math.max(e.waist-(i.table.cintura[r]+a),e.hips-(i.table.cadera[r]+a));return o>0?{kind:"tight",text:`Aviso: te quedar\xE1 muy ajustada (faltan ${su(o)} cm de contorno)`}:{kind:"snug",text:"Calce algo m\xE1s ajustado que la talla recomendada"}}var su=i=>i.toLocaleString("es-PE",{maximumFractionDigits:1}),E_={jean:0,sastre:1,falda:2,short:3};function R_(i,t){let e=i==="satin",n=new De({color:"#888",roughness:e?.78:i==="denim"?.92:.86,metalness:0,sheen:e?.3:.5,sheenRoughness:e?.6:.8,sheenColor:new Mt("#aaa"),specularIntensity:e?.15:.8,side:Pe});return n.onBeforeCompile=s=>{s.uniforms.uDes={value:E_[t]??0},s.uniforms.uKind={value:i==="denim"?0:i==="suiting"?1:2},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aRest; attribute vec4 aGp; varying vec3 vRest; varying vec4 vGp;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = aRest; vGp = aGp;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uDes; uniform float uKind; varying vec3 vRest; varying vec4 vGp;
float lineA(float d, float at, float w) { float fw = max(fwidth(d), 1e-5); return 1.0 - smoothstep(w, w + fw * 1.5, abs(d - at)); }
float dashA(float d, float s) { float fw = max(fwidth(s), 1e-5); return smoothstep(0.35, 0.35 + fw * 3.0, abs(fract(s / 0.004) - 0.5) * 2.0 * 0.9 + 0.05); }`).replace("#include <color_fragment>",`#include <color_fragment>
{ float sN = vGp.x, sM = vGp.y, dT = vGp.z, dH = vGp.w; float X = vRest.x, Y = vRest.y;
  // trama (muy fina, solo tono): sarga en diagonal del denim / tejido liso del sastre
  float tw = (uKind < 0.5) ? sin((X + Y) * 2400.0) * 0.5 + 0.5 : (uKind < 1.5 ? sin(X * 1800.0) * sin(Y * 1800.0) * 0.5 + 0.5 : 0.5);
  float fwv = max(fwidth(X + Y) * 2400.0, 0.001); tw = mix(tw, 0.5, smoothstep(0.8, 2.5, fwv)); diffuseColor.rgb *= 0.96 + 0.06 * tw;
  vec3 thread = (uDes > 1.5 && uDes < 2.5) ? diffuseColor.rgb * 0.7 + vec3(0.06) : diffuseColor.rgb * (uDes < 0.5 ? 0.82 : 0.86);   /* B47: costuras tono sobre tono (sin franja crema) */
  float band = (uDes > 1.5 && uDes < 2.5) ? 0.032 : 0.038;
  float st = 0.0; float btn = 0.0;
  if (dT >= 0.0 && dT < band + 0.002) { diffuseColor.rgb *= 0.93; st += lineA(dT, 0.0032, 0.00045) * 0.8 + lineA(dT, band, 0.00045) * 0.8; }
  if (dH >= 0.0 && dH < 0.05) { st += lineA(dH, (uDes > 1.5 && uDes < 2.5) ? 0.008 : 0.011, 0.00045) * 0.9; }   /* B26: un solo pespunte, bajo limpio (sin doble borde) */
  bool front = sN >= 0.0 && sN < 0.22, back = sN > 0.78;
  if (uDes < 0.5 || uDes > 2.5) {   // jean / short: pretina con trabillas, bragueta, bolsillos
    float L = 0.30; float sm = sM; bool loop = dT >= -0.002 && dT < band + 0.012 && sN >= 0.0 && (abs(sN - 0.115) < 0.02 || abs(sN - 0.5) < 0.014 || abs(sN - 0.885) < 0.02 || abs(sN - 0.985) < 0.012);
    if (loop) { diffuseColor.rgb *= 0.9; st += (lineA(dT, 0.0, 0.0004) + lineA(dT, band + 0.012, 0.0004)) * 0.0; }
    if (front && dT > band && dT < band + 0.13 && sN < 0.02) { st += lineA(sM, 0.0, 0.0007) * 0.0; }
    if (uDes < 0.5 && sN >= 0.0) { float bx = abs(sN - 0.865); if (back && dT > band + 0.012 && dT < band + 0.115 && bx < 0.075) { float inB = 1.0; float v = (dT - band - 0.012) / 0.103; float edge = max(lineA(bx, 0.07, 0.0006) * step(v, 1.0), lineA(v, 0.0, 0.0006) * step(bx, 0.07)); edge = max(edge, lineA(v, 0.86 + 0.14 * bx / 0.07 * 0.0, 0.0006) * step(bx, 0.07)); st += edge * 0.9 * 0.0 + (lineA(bx, 0.07, 0.00045) * step(dT, band + 0.115)) * 0.85 + lineA(dT, band + 0.115 - 0.02 * (bx / 0.07), 0.00045) * step(bx, 0.07) * 0.85; } }
  }
  if (uDes > 1.5 && uDes < 2.5 && sN >= 0.0) {   // minifalda: bot\xF3n, bragueta, bolsillos delanteros y costura trasera
    float xm = X, ax = abs(X);
    if (ax < 0.17 && vRest.z > 0.02 && (sN < 0.25 || sN > 0.75)) {
      float dd = length(vec2(xm, dT - 0.016)); btn = 1.0 - smoothstep(0.0052, 0.0058, dd); st += lineA(dd, 0.0062, 0.00035) * 0.7;
      if (dT > band && dT < band + 0.075) st += lineA(xm, 0.011, 0.0004) * 0.9;
      st += lineA(dT, band + 0.075, 0.0004) * step(0.0, 0.011 - xm) * step(0.0, xm) * 0.9;
      float t = (dT - band) / 0.08; if (t > 0.0 && t < 1.0 && ax > 0.03) { float xc = 0.052 + 0.078 * pow(t, 1.7); st += (lineA(ax, xc, 0.0005) + lineA(ax, xc + 0.0045, 0.0004) * 0.6) * 0.9; }
    }
    if (dT > band && vRest.z < 0.0 && sN > 0.25 && sN < 0.75) st += lineA(X, 0.0, 0.0007) * 0.5;
  }
  if (uDes > 0.5 && uDes < 1.5 && front) { diffuseColor.rgb *= 1.0 - 0.10 * smoothstep(0.0, 0.002, abs(sM - 0.045)) * 0.0; }
  if (sN >= 0.0) { st += lineA(sN, 0.5, 0.0016) * 0.4 * 0.0; }
  diffuseColor.rgb = mix(diffuseColor.rgb, thread, clamp(st, 0.0, 1.0)); diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.32, 0.32, 0.35), btn); }`)},n}async function C_(i){let t=new Ki;if(t.setMeshoptDecoder(pr),!i.endsWith(".b64.txt"))return t.loadAsync(i+"?v=B33");let e=await fetch(i+"?v=B38"),n=e.ok?(await e.text()).trim():"";if(!e.ok||!/^[A-Za-z0-9+/=\s]+$/.test(n)||n.length<100)return t.loadAsync(i.replace(/\.b64\.txt$/,".glb")+"?v=B38");let s=atob(n),r=new Uint8Array(s.length);for(let a=0;a<s.length;a++)r[a]=s.charCodeAt(a);return t.parseAsync(r.buffer,"")}var Ji=(i,t)=>{let e=Uint8Array.from(atob(i),n=>n.charCodeAt(0));return new t(e.buffer)};function I_(i,t,e,n){let s=i.contornoManga?i.contornoManga[t]:30;if(!i.pu\u00F1o)return s;let r=s*.88,a=i.pu\u00F1o[t],o=(c,l,u)=>c+(l-c)*Math.min(1,Math.max(0,u));return e<=2?o(s,r,n/23):o(r,a,n/20)}var ou=class{constructor(t,e){this.g=t;this.sizeIdx=e}g;sizeIdx;recIdx=0;data;f4;spec;mesh;posed;pn;pushedPosed=0;mat;out;nrm;A;N;before;nb;n=0;bnb;edgeD;minClr;rim;thick=.0012;results=[];bulge=0;ms=0;get size(){return this.g.sizes[this.sizeIdx]}async load(t,e,n,s){let r=`garment_${this.g.id}_${this.size}`,[a,o]=await Promise.all([C_(t+r+e),fetch(t+r+"_bind.json?v=B33").then(V=>V.json())]),c=null;a.scene.traverse(V=>{V.isSkinnedMesh&&!c&&(c=V)});let l=c,u=l.geometry,h=Object.entries(l.morphTargetDictionary||{}).sort((V,dt)=>V[1]-dt[1]).map(V=>V[0]),d=u.morphAttributes.position||[],f=u.getAttribute("position"),m=u.getAttribute("_weld"),_=yc(f.array,u.index.array,m.array,d.map((V,dt)=>({name:h[dt],pos:V.array}))),p=this.n=_.weld.length,g=Ji(o.bindTriWeld,Uint32Array),T=Ji(o.bindBary,Float32Array),M=Ji(o.minClear,Float32Array),y=o.candK||0,v=Ji(o.candTriWeld,Uint32Array),w=new Uint32Array(p*3),x=new Float32Array(p*3),b=new Float32Array(p),S=new Uint32Array(p*y*3),A=Ji(o.f4.level,Int32Array),E=Ji(o.f4.zone,Int32Array),P=Ji(o.f4.edgeDist,Float32Array),F=Ji(o.f4.edgeType,Int32Array),N=new Int32Array(p),I=new Int32Array(p),C=new Float32Array(p*2);this.minClr=new Float32Array(p);for(let V=0;V<p;V++){let dt=_.weld[V];for(let pt=0;pt<3;pt++)w[V*3+pt]=s[g[dt*3+pt]],x[V*3+pt]=T[dt*3+pt];b[V]=M[dt],this.minClr[V]=M[dt];for(let pt=0;pt<y*3;pt++)S[V*y*3+pt]=s[v[dt*y*3+pt]];N[V]=A[dt],I[V]=E[dt],C[V*2]=P[dt],C[V*2+1]=F[dt]}this.edgeD=new Float32Array(p),this.edgeT=new Int8Array(p);for(let V=0;V<p;V++)this.edgeD[V]=C[V*2],this.edgeT[V]=Math.round(C[V*2+1]);this.data={..._,bindTri:w,bindBary:x,minClear:b,nWeld:p,candTri:S,candK:y},this.f4=dp(N,I,o.f4.levels);let L=this.g.table,k=this.sizeIdx,U=this.g.pattern,B=U.bustDepth[k],z=U.waistDepth[k],Z=L.largo[k],tt=(V,dt,pt)=>V+(dt-V)*Math.min(1,Math.max(0,pt));this.spec={fit:this.g.fit,drape:this.g.drape,clearance:this.g.clearance,bustDepth:B,contour:(V,dt)=>V>0?I_(L,k,V,dt)/100:(dt<=B?L.busto[k]:dt<=z?tt(L.busto[k],L.cintura[k],(dt-B)/(z-B)):tt(L.cintura[k],L.borde[k],(dt-z)/Math.max(Z-2-z,1)))/100},this.thick=this.g.fabricKind==="rib"?.0016:.0012;let at=Array.from({length:p},()=>new Set);for(let V=0;V<_.idx.length;V+=3)for(let dt=0;dt<3;dt++)for(let pt=0;pt<3;pt++)dt!==pt&&at[_.idx[V+dt]].add(_.idx[V+pt]);let nt=new Int32Array(p+1);for(let V=0;V<p;V++)nt[V+1]=nt[V]+at[V].size;let ut=new Int32Array(nt[p]);for(let V=0;V<p;V++)ut.set([...at[V]],nt[V]);this.nb={start:nt,list:ut};let X=new Map,J=_.idx;for(let V=0;V<J.length;V+=3)for(let dt=0;dt<3;dt++){let pt=J[V+dt],Gt=J[V+(dt+1)%3],H=pt<Gt?pt+","+Gt:Gt+","+pt,xe=X.get(H);xe?xe.push(-1):X.set(H,[pt,Gt])}let ct=[];for(let V of X.values())V.length===2&&ct.push(V[0],V[1]);this.rim=Int32Array.from(ct),this.bnb=new Int32Array(p*2).fill(-1);for(let V=0;V<ct.length;V+=2)for(let[dt,pt]of[[ct[V],ct[V+1]],[ct[V+1],ct[V]]])this.bnb[dt*2]<0?this.bnb[dt*2]=pt:this.bnb[dt*2+1]=pt;let _t=new Te,ht=p*2;_t.setAttribute("position",new Xt(new Float32Array(ht*3),3)),_t.setAttribute("normal",new Xt(new Float32Array(ht*3),3));let It=new Float32Array(ht*3);It.set(_.pos),It.set(_.pos,p*3),_t.setAttribute("aRest",new Xt(It,3));let Yt=new Float32Array(ht*3);for(let V=0;V<p;V++)Yt[V*3]=C[V*2],Yt[V*3+1]=C[V*2+1],Yt[(p+V)*3]=C[V*2],Yt[(p+V)*3+1]=C[V*2+1],Yt[(p+V)*3+2]=1;_t.setAttribute("aEdge",new Xt(Yt,3)),this.restPos=_.pos,this.tc=new Float32Array(ht*3),_t.setAttribute("aTc",new Xt(this.tc,3));let Et=u.getAttribute("skinIndex"),Ft=u.getAttribute("skinWeight"),Qt=new Uint16Array(ht*4),$t=new Float32Array(ht*4);for(let V=0;V<p;V++)for(let dt=0;dt<4;dt++){let pt=Et.getComponent(V,dt),Gt=Ft.getComponent(V,dt);Qt[V*4+dt]=Qt[(p+V)*4+dt]=pt,$t[V*4+dt]=$t[(p+V)*4+dt]=Gt}_t.setAttribute("skinIndex",new Xt(Qt,4)),_t.setAttribute("skinWeight",new Xt($t,4));let lt=Array.from(J);for(let V=0;V<J.length;V+=3)lt.push(p+J[V],p+J[V+2],p+J[V+1]);for(let V=0;V<this.rim.length;V+=2){let dt=this.rim[V],pt=this.rim[V+1];lt.push(dt,p+dt,pt,pt,p+dt,p+pt)}return _t.setIndex(lt),this.mat=D_(this.g.fabricKind,this.g.design||"polo"),this.mesh=new fe(_t,this.mat),this.mesh.name=r,this.mesh.frustumCulled=!1,this.mesh.castShadow=!0,this.mesh.receiveShadow=!0,this.posed=new Float32Array(p*3),this.pn=new Float32Array(p*3),this.out=new Float32Array(p*3),this.nrm=new Float32Array(p*3),this.A=new Float32Array(p*3),this.N=new Float32Array(p*3),this.before=new Float32Array(p*3),this}setColor(t){this.mat.color.set(t),this.mat.sheenColor.set(t).lerp(new Mt("#ffffff"),this.g.fabricKind==="satin"?.6:.35)}fit(t,e,n,s,r,a,o){let c=performance.now(),l=this.data,u=this.n;Mc(l,t,e,n,s,r,this.out,this.nrm);let h=this.A,d=this.N;for(let y=0;y<u;y++){let v=l.bindTri[y*3]*3,w=l.bindTri[y*3+1]*3,x=l.bindTri[y*3+2]*3,b=l.bindBary[y*3],S=l.bindBary[y*3+1],A=l.bindBary[y*3+2];for(let z=0;z<3;z++)h[y*3+z]=b*s[v+z]+S*s[w+z]+A*s[x+z];let E=s[w]-s[v],P=s[w+1]-s[v+1],F=s[w+2]-s[v+2],N=s[x]-s[v],I=s[x+1]-s[v+1],C=s[x+2]-s[v+2],L=P*C-F*I,k=F*N-E*C,U=E*I-P*N,B=Math.hypot(L,k,U)||1;d[y*3]=L/B,d[y*3+1]=k/B,d[y*3+2]=U/B}if(this.g.drape>=.2)for(let y=0;y<u;y++){if(this.f4.zone[y]!==0||this.edgeT[y]!==2)continue;let v=.018*(1-Math.min(1,this.edgeD[y]/.09));v>this.minClr[y]&&(this.minClr[y]=v)}let f=this.bendW(o),m=this.mc2??=new Float32Array(u),_=this.g.clearance;for(let y=0;y<u;y++)m[y]=Math.max(this.minClr[y],this.bW[y]>.05?_*.9:0)+(globalThis.__clrAdd??0);let p=globalThis.__shell?.[this.g.fabricKind]??[50,-5,100,-.53];(globalThis.__shellFirst??!0)&&(this.nipple=nu(this.out,h,this.nb,this.shW(),m,(y,v)=>ri(y,l.idx,l.weld,u,v),p[0],p[1],p[2],p[3])),this.before.set(this.out);{let y={ce\u00F1ido:.003,regular:.0105,holgado:.025},v=Math.max(0,this.sizeIdx-this.recIdx);this.spec.margin=v>0?y[this.g.fit]+.018*Math.min(v,2)+.006*Math.max(0,v-2):this.sizeIdx<this.recIdx?.0025:y[this.g.fit]}this.results=globalThis.__skipSize?[]:fp(this.f4,this.spec,this.out,h,a);let T=this.g.drape>=.2?Float32Array.from(this.out):null;globalThis.__skipRelax||pp(this.out,this.before,this.nb,h,d,m,8,this.edgeD),globalThis.__skipBend||mp(this.out,this.nb,h,d,m,f,this.g.fabricKind==="rib"?50:70),globalThis.__skipShell2||(this.nipple=nu(this.out,h,this.nb,this.shW(),m,(y,v)=>ri(y,l.idx,l.weld,u,v),p[0],p[1],p[2],p[3]));{let y=globalThis.__bustDrape??this.g.bustDrape??0;y>0&&(ri(this.out,l.idx,l.weld,u,this.nrm),this.dropMax=gp(this.out,this.nrm,this.f4.zone,this.nb,y,.75,1.3,this.g.bustDropRun??1))}if(T)for(let y=0;y<u;y++){if(this.f4.zone[y]!==0||this.edgeT[y]!==2)continue;let v=Math.min(1,this.edgeD[y]/.05),w=.92*Math.pow(1-v,.8);if(w<=0)continue;let x=y*3;this.out[x]+=(T[x]-this.out[x])*w,this.out[x+2]+=(T[x+2]-this.out[x+2])*w}if(T)for(let y=0;y<u;y++){if(this.f4.zone[y]!==0||this.edgeT[y]!==2)continue;let w=.009*(1-Math.min(1,this.edgeD[y]/.05));if(w<=0)continue;let x=y*3,b=(this.out[x]-h[x])*d[x]+(this.out[x+1]-h[x+1])*d[x+1]+(this.out[x+2]-h[x+2])*d[x+2];if(b<w){let S=w-b;this.out[x]+=d[x]*S,this.out[x+1]+=d[x+1]*S,this.out[x+2]+=d[x+2]*S}}{let y=this.out,v=new Float32Array(y.length);for(let w=0;w<6;w++){v.set(y);for(let x=0;x<u;x++){let b=this.bnb[x*2],S=this.bnb[x*2+1];if(!(b<0||S<0))for(let A=0;A<3;A++)y[x*3+A]=.5*v[x*3+A]+.25*(v[b*3+A]+v[S*3+A])}}for(let w=0;w<u;w++){if(this.bnb[w*2]<0)continue;let x=w*3,b=(y[x]-h[x])*d[x]+(y[x+1]-h[x+1])*d[x+1]+(y[x+2]-h[x+2])*d[x+2];if(b<this.minClr[w]){let S=this.minClr[w]-b;y[x]+=d[x]*S,y[x+1]+=d[x+1]*S,y[x+2]+=d[x+2]*S}}}this.cleanEdges(h,d);{let y=l.idx,v=this.out,w=this.nb,x=new Uint8Array(u),b=new Float32Array(v.length);for(let S=0;S<(globalThis.__unfold??60);S++){x.fill(0);let A=0;for(let E=0;E<y.length;E+=3){let P=y[E]*3,F=y[E+1]*3,N=y[E+2]*3,I=v[F]-v[P],C=v[F+1]-v[P+1],L=v[F+2]-v[P+2],k=v[N]-v[P],U=v[N+1]-v[P+1],B=v[N+2]-v[P+2],z=C*B-L*U,Z=L*k-I*B,tt=I*U-C*k,at=Math.hypot(z,Z,tt)||1,nt=d[P]+d[F]+d[N],ut=d[P+1]+d[F+1]+d[N+1],X=d[P+2]+d[F+2]+d[N+2];(z*nt+Z*ut+tt*X)/(at*(Math.hypot(nt,ut,X)||1))<.12&&(x[y[E]]=x[y[E+1]]=x[y[E+2]]=1,A++)}if(!A)break;b.set(v);for(let E=0;E<u;E++){let P=x[E]===1;if(!P){for(let C=w.start[E];C<w.start[E+1];C++)if(x[w.list[C]]){P=!0;break}}if(!P||this.bnb[E*2]>=0||this.f4.zone[E]!==0)continue;let F=w.start[E],N=w.start[E+1],I=N-F;if(I)for(let C=0;C<3;C++){let L=0;for(let k=F;k<N;k++)L+=b[w.list[k]*3+C];v[E*3+C]+=.7*(L/I-b[E*3+C])}}}}{let y=globalThis.__finSm??14,v=this.out,w=new Float32Array(v.length),x=this.nb,b=(S,A=!1)=>{w.set(v);for(let E=0;E<u;E++){if(A?this.bnb[E*2]>=0||this.edgeT[E]!==4||this.edgeD[E]<.006||this.edgeD[E]>.06:this.bnb[E*2]>=0||this.edgeD[E]<.006||this.f4.zone[E]!==0)continue;let P=x.start[E],F=x.start[E+1],N=F-P;if(N)for(let I=0;I<3;I++){let C=0;for(let L=P;L<F;L++)C+=w[x.list[L]*3+I];v[E*3+I]+=S*(C/N-w[E*3+I])}}};for(let S=0;S<y;S++)b(.5),b(-.53);for(let S=0;S<(globalThis.__shSm??24);S++)b(.5,!0),b(-.53,!0);for(let S=0;S<u;S++){let A=S*3,E=(v[A]-h[A])*d[A]+(v[A+1]-h[A+1])*d[A+1]+(v[A+2]-h[A+2])*d[A+2];if(this.minClr[S]>0&&E<this.minClr[S]){let P=this.minClr[S]-E;v[A]+=d[A]*P,v[A+1]+=d[A+1]*P,v[A+2]+=d[A+2]*P}}}ri(this.out,l.idx,l.weld,u,this.nrm),this.texCoords(a);let M=0;for(let y=0;y<u;y++){if(this.f4.zone[y]!==0)continue;let v=y*3,w=Math.abs(h[v]);if(h[v+1]<.95||h[v+1]>1.22||w<.09)continue;let x=d[v];if(Math.abs(x)<.7)continue;let b=(this.out[v]-h[v])*x+(this.out[v+1]-h[v+1])*d[v+1]+(this.out[v+2]-h[v+2])*d[v+2];M=Math.max(M,b)}return this.bulge=M,this.ms=performance.now()-c,M}anchor(t,e,n){let s=this.n,r=this.out;this.aT??=new Int32Array(s*3),this.aB??=new Float32Array(s*3),this.aP??=new Float32Array(s*3);let a=this.data;for(let o=0;o<s;o++){let c=o*3,l=n.nearest(r[c],r[c+1],r[c+2],t,e),u=l[0].ok&&(!l[1].ok||l[0].d2<=l[1].d2)?l[0]:l[1].ok?l[1]:null;if(u)this.aT[c]=e[u.t],this.aT[c+1]=e[u.t+1],this.aT[c+2]=e[u.t+2],this.aB[c]=u.u,this.aB[c+1]=u.v,this.aB[c+2]=u.w;else for(let h=0;h<3;h++)this.aT[c+h]=a.bindTri[c+h],this.aB[c+h]=a.bindBary[c+h];for(let h=0;h<3;h++)this.aP[c+h]=this.aB[c]*t[this.aT[c]*3+h]+this.aB[c+1]*t[this.aT[c+1]*3+h]+this.aB[c+2]*t[this.aT[c+2]*3+h]}}aT;aB;aP;pD;pDt;pose(t,e,n,s){let r=performance.now(),a=this.data,o=this.n,c=this.out,l=this.posed,u=this.aT,h=this.aB,d=this.aP;for(let S=0;S<o;S++){let A=S*3,E=u[A],P=u[A+1],F=u[A+2],N=h[A],I=h[A+1],C=h[A+2],L=c[A]-d[A],k=c[A+1]-d[A+1],U=c[A+2]-d[A+2];for(let B=0;B<3;B++){let z=E*9+B*3,Z=P*9+B*3,tt=F*9+B*3,at=N*s[z]+I*s[Z]+C*s[tt],nt=N*s[z+1]+I*s[Z+1]+C*s[tt+1],ut=N*s[z+2]+I*s[Z+2]+C*s[tt+2];l[A+B]=N*t[E*3+B]+I*t[P*3+B]+C*t[F*3+B]+at*L+nt*k+ut*U}}let f=this.g.clearance*.5,m=0,_=this.pD??=new Float32Array(o*3),p=this.pDt??=new Float32Array(o*3),g=this.nb,T=null;for(let S=0;S<(globalThis.__noPush?0:3);S++){let A=[],E=T??Array.from({length:o},(F,N)=>N);_.fill(0);let P=!1;for(let F of E){let N=this.minClr[F]>0?f:5e-4,I=n.nearest(l[F*3],l[F*3+1],l[F*3+2],t,e),C=!1;for(let L of I){if(!L.ok||L.sd>=N)continue;let k=N-L.sd;_[F*3]+=L.nx*k,_[F*3+1]+=L.ny*k,_[F*3+2]+=L.nz*k,C=!0}C&&(m++,A.push(F),P=!0)}if(!P)break;for(let F=0;F<6;F++){p.set(_);for(let N=0;N<o;N++){let I=g.start[N],C=g.start[N+1],L=C-I;if(!L)continue;let k=0,U=0,B=0;for(let at=I;at<C;at++){let nt=g.list[at]*3;k+=p[nt],U+=p[nt+1],B+=p[nt+2]}k/=L,U/=L,B/=L;let z=N*3,Z=p[z]*p[z]+p[z+1]*p[z+1]+p[z+2]*p[z+2];.25*((p[z]+k)**2+(p[z+1]+U)**2+(p[z+2]+B)**2)>Z&&(_[z]=.5*(p[z]+k),_[z+1]=.5*(p[z+1]+U),_[z+2]=.5*(p[z+2]+B))}}for(let F=0;F<o*3;F++)l[F]+=_[F];T=A}this.pushedPosed=m,ri(l,a.idx,a.weld,o,this.pn);let M=Float32Array.from(this.pn);{let S=this.pn,A=new Float32Array(S.length),E=this.nb,P=this.bW,F=globalThis.__nsm??70,N=globalThis.__nsb??.8;for(let I=0;I<F;I++){A.set(S);for(let C=0;C<o;C++){let L=E.start[C],k=E.start[C+1],U=k-L;if(!U)continue;let B=.6*Math.min(1,Math.max(P[C]*1.5,N)),z=0,Z=0,tt=0;for(let ct=L;ct<k;ct++){let _t=E.list[ct]*3;z+=A[_t],Z+=A[_t+1],tt+=A[_t+2]}let at=C*3,nt=A[at]+B*(z/U-A[at]),ut=A[at+1]+B*(Z/U-A[at+1]),X=A[at+2]+B*(tt/U-A[at+2]),J=Math.hypot(nt,ut,X)||1;S[at]=nt/J,S[at+1]=ut/J,S[at+2]=X/J}}}let y=this.mesh.geometry,v=y.getAttribute("position"),w=y.getAttribute("normal"),x=v.array,b=w.array;x.set(l),b.set(this.pn);for(let S=0;S<o;S++)for(let A=0;A<3;A++)x[(o+S)*3+A]=l[S*3+A]-M[S*3+A]*this.thick,b[(o+S)*3+A]=-this.pn[S*3+A];v.needsUpdate=!0,w.needsUpdate=!0,y.computeBoundingSphere(),this.ms+=performance.now()-r}cleanEdges(t,e){let n=this.out,s=this.n,r=this.bnb,a=this.nb,o=new Float32Array(n.length),c=globalThis.__edgeIts??30,l=f=>{o.set(n);for(let m=0;m<s;m++){let _=r[m*2],p=r[m*2+1];if(!(_<0||p<0))for(let g=0;g<3;g++)n[m*3+g]+=f*(.5*(o[_*3+g]+o[p*3+g])-o[m*3+g])}},u=globalThis.__edgeMu??0;for(let f=0;f<c;f++)l(.5),u&&l(u);for(let f=0;f<12;f++){o.set(n);for(let m=0;m<s;m++){let _=this.edgeD[m];if(_<=0||_>.012||r[m*2]>=0)continue;let p=a.start[m],g=a.start[m+1],T=g-p;if(!T)continue;let M=.5*(1-_/.012);for(let y=0;y<3;y++){let v=0;for(let w=p;w<g;w++)v+=o[a.list[w]*3+y];n[m*3+y]+=M*(v/T-o[m*3+y])}}}let h=this.mc2??this.minClr,d=this.g.clearance+(globalThis.__edgeCap??.006);for(let f=0;f<s;f++){if(this.edgeD[f]>.012)continue;let m=f*3,_=(n[m]-t[m])*e[m]+(n[m+1]-t[m+1])*e[m+1]+(n[m+2]-t[m+2])*e[m+2],p=this.edgeT[f];if((p===1||p===3||p===4||p===2&&!(this.g.drape>0))&&_>d){let T=(_-d)*(1-this.edgeD[f]/.012);n[m]-=e[m]*T,n[m+1]-=e[m+1]*T,n[m+2]-=e[m+2]*T,_-=T}if(_<h[f]){let T=h[f]-_;n[m]+=e[m]*T,n[m+1]+=e[m+1]*T,n[m+2]+=e[m+2]*T}}}shW(){let t=this.n,e=globalThis.__torsoShell??.7,n=this.sW??=new Float32Array(t);for(let s=0;s<t;s++){let r=Math.min(1,Math.max(0,(this.edgeD[s]-.004)/.02));n[s]=Math.max(this.bW[s]*(.5+.5*r),this.f4.zone[s]===0?e*r:0)}return n}sW;edgeT;restPos;tc;tcDone=!1;texCoords(t){let e=this.n,n=this.out,s=this.tc;for(let r=0;r<e;r++){let a=this.f4.zone[r],o=Math.atan2(n[r*3],Math.abs(n[r*3+2]-.03))*.16,c=-n[r*3+1];if(a>0){let l=a===1?t.L:a===2?t.R:a===3?t.L2:t.R2,u=l[0],h=l[1],d=n[r*3]-u[0],f=n[r*3+1]-u[1],m=n[r*3+2]-u[2],_=d*h[0]+f*h[1]+m*h[2],p=d-_*h[0],g=f-_*h[1],T=m-_*h[2],M=[h[1]*1-h[2]*0,h[2]*0-h[0]*1,0],y=Math.hypot(M[0],M[1],M[2])||1;M=M.map(w=>w/y);let v=[h[1]*M[2]-h[2]*M[1],h[2]*M[0]-h[0]*M[2],h[0]*M[1]-h[1]*M[0]];o=Math.atan2(p*v[0]+g*v[1]+T*v[2],p*M[0]+g*M[1]+T*M[2])*.04,c=_}for(let l of[r,e+r])s[l*3]=o,s[l*3+1]=c,s[l*3+2]=a}this.mesh.geometry.getAttribute("aTc").needsUpdate=!0}bW;nipple=0;dropMax=0;wB;mc2;bendW(t){let e=this.n,n=this.data,s=this.nb;if(this.bW||(this.bW=new Float32Array(e)),t){let a=new Float32Array(e);for(let c=0;c<e;c++){let l=0;for(let u=0;u<3;u++)l+=n.bindBary[c*3+u]*t[n.bindTri[c*3+u]];a[c]=this.f4.zone[c]===0?l:0}let o=a;for(let c=0;c<10;c++){let l=new Float32Array(e);for(let u=0;u<e;u++){let h=o[u];for(let d=s.start[u];d<s.start[u+1];d++)h=Math.max(h,o[s.list[d]]*.93);l[u]=h}o=l}for(let c=0;c<e;c++)this.bW[c]=Math.min(1,o[c]*2.2)}let r=this.wB??=new Float32Array(e);for(let a=0;a<e;a++){let o=this.edgeD[a],c=Math.min(1,Math.max(0,(o-.006)/.02));r[a]=c*(.35+.65*this.bW[a])}return r}zones(){let t=this.g.table,e=this.sizeIdx,n=this.g.pattern,s=this.results.filter(c=>c.zone===0),r=c=>s.reduce((l,u)=>Math.abs(u.d-c)<Math.abs(l.d-c)?u:l,s[0]),a=[];if(s.length){let c=s.reduce((h,d)=>d.d>h.d?d:h,s[0]);a.push({zona:"bajo",prenda:t.borde[e],cuerpo:c.body*100,estira:c.stretch});let l=r(n.bustDepth[e]);a.unshift({zona:"busto",prenda:t.busto[e],cuerpo:l.body*100,estira:Math.max(...s.filter(h=>Math.abs(h.d-n.bustDepth[e])<=3).map(h=>h.stretch))});let u=r(n.waistDepth[e]);a.splice(1,0,{zona:"cintura",prenda:t.cintura[e],cuerpo:u.body*100,estira:u.stretch})}let o=this.results.filter(c=>c.zone===1||c.zone===2);if(o.length&&t.contornoManga){let c=o.reduce((l,u)=>u.d>l.d?u:l,o[0]);a.push({zona:"manga",prenda:t.contornoManga[e],cuerpo:c.body*100,estira:Math.max(...o.map(l=>l.stretch))})}return a}},Lc=class{m=new Map;C=.026;key(t,e,n){return((t+256)*512+(e+256))*512+(n+256)}build(t,e,n){this.m.clear();let s=this.C;for(let r=0;r<e.length;r+=3){let a=e[r]*3,o=e[r+1]*3,c=e[r+2]*3,l=Math.min(t[a],t[o],t[c]),u=Math.max(t[a],t[o],t[c]),h=Math.min(t[a+1],t[o+1],t[c+1]),d=Math.max(t[a+1],t[o+1],t[c+1]),f=Math.min(t[a+2],t[o+2],t[c+2]),m=Math.max(t[a+2],t[o+2],t[c+2]);if(!(u<n[0]||l>n[3]||d<n[1]||h>n[4]||m<n[2]||f>n[5]))for(let _=Math.floor(l/s);_<=Math.floor(u/s);_++)for(let p=Math.floor(h/s);p<=Math.floor(d/s);p++)for(let g=Math.floor(f/s);g<=Math.floor(m/s);g++){let T=this.key(_,p,g),M=this.m.get(T);M||(M=[],this.m.set(T,M)),M.push(r)}}}cls=null;r0={sd:0,nx:0,ny:0,nz:0,ok:!1,t:0,u:0,v:0,w:0,d2:0};r1={sd:0,nx:0,ny:0,nz:0,ok:!1,t:0,u:0,v:0,w:0,d2:0};nearest(t,e,n,s,r){let a=this.C,o=Math.floor(t/a),c=Math.floor(e/a),l=Math.floor(n/a),u=[9e-4,9e-4],h=[this.r0,this.r1];h[0].ok=h[1].ok=!1;for(let d=o-1;d<=o+1;d++)for(let f=c-1;f<=c+1;f++)for(let m=l-1;m<=l+1;m++){let _=this.m.get(this.key(d,f,m));if(_)for(let p of _){let g=this.cls?this.cls[p/3]:0,T=r[p]*3,M=r[p+1]*3,y=r[p+2]*3;L_(s,T,M,y,t,e,n);let v=t-_r[0],w=e-_r[1],x=n-_r[2],b=v*v+w*w+x*x;if(b>=u[g])continue;u[g]=b;let S=s[M]-s[T],A=s[M+1]-s[T+1],E=s[M+2]-s[T+2],P=s[y]-s[T],F=s[y+1]-s[T+1],N=s[y+2]-s[T+2],I=A*N-E*F,C=E*P-S*N,L=S*F-A*P,k=Math.hypot(I,C,L)||1;I/=k,C/=k,L/=k;let U=h[g];U.sd=v*I+w*C+x*L,U.nx=I,U.ny=C,U.nz=L,U.ok=!0,U.t=p,U.u=vr[0],U.v=vr[1],U.w=vr[2],U.d2=b}}return h}},_r=new Float64Array(3),vr=new Float64Array(3);function L_(i,t,e,n,s,r,a){let o=i[e]-i[t],c=i[e+1]-i[t+1],l=i[e+2]-i[t+2],u=i[n]-i[t],h=i[n+1]-i[t+1],d=i[n+2]-i[t+2],f=s-i[t],m=r-i[t+1],_=a-i[t+2],p=o*f+c*m+l*_,g=u*f+h*m+d*_,T=(U,B,z)=>{vr[0]=U,vr[1]=B,vr[2]=z,_r[0]=U*i[t]+B*i[e]+z*i[n],_r[1]=U*i[t+1]+B*i[e+1]+z*i[n+1],_r[2]=U*i[t+2]+B*i[e+2]+z*i[n+2]};if(p<=0&&g<=0)return T(1,0,0);let M=s-i[e],y=r-i[e+1],v=a-i[e+2],w=o*M+c*y+l*v,x=u*M+h*y+d*v;if(w>=0&&x<=w)return T(0,1,0);let b=p*x-w*g;if(b<=0&&p>=0&&w<=0){let U=p/(p-w);return T(1-U,U,0)}let S=s-i[n],A=r-i[n+1],E=a-i[n+2],P=o*S+c*A+l*E,F=u*S+h*A+d*E;if(F>=0&&P<=F)return T(0,0,1);let N=P*g-p*F;if(N<=0&&g>=0&&F<=0){let U=g/(g-F);return T(1-U,0,U)}let I=w*F-P*x;if(I<=0&&x-w>=0&&P-F>=0){let U=(x-w)/(x-w+(P-F));return T(0,1-U,U)}let C=1/(I+N+b),L=N*C,k=b*C;return T(1-L-k,L,k)}var P_={jersey:0,rib:1,stripe:2,satin:3,cardigan:4,knit:5},F_={polo:0,camisa:1,cardigan:2,asim:3,halter:4,body:5};function D_(i,t){let e=i==="satin",n=new De({color:"#888",roughness:e?.66:i==="rib"?.8:i==="knit"?.9:.88,metalness:0,sheen:e?.85:.55,sheenRoughness:e?.38:.75,sheenColor:new Mt("#aaa"),clearcoat:0,clearcoatRoughness:.6,specularIntensity:e?.32:1,side:Cn});return n.onBeforeCompile=s=>{s.uniforms.uKind={value:P_[i]??0},s.uniforms.uDes={value:F_[t]??0},s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
attribute vec3 aRest; attribute vec3 aEdge; attribute vec3 aTc; varying vec3 vRest; varying vec3 vEdge; varying vec3 vTc;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vRest = aRest; vEdge = aEdge; vTc = aTc;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
uniform float uKind; uniform float uDes; varying vec3 vRest; varying vec3 vEdge; varying vec3 vTc;
float groove(float d, float at, float w) { float fw = max(fwidth(d), 1e-5); return 1.0 - smoothstep(w, w + fw * 1.5, abs(d - at)); }
// relieve con gradiente ANAL\xCDTICO (derivadas del \xE1ngulo, que es suave): sin el ruido de derivar en pantalla una onda fina
vec2 waveGrad(float ang, vec2 da, float N, float amp) { float fw = N * length(da) / 6.2832; float f = 1.0 - smoothstep(0.09, 0.24, fw);
  return -amp * f * 0.5 * N * sin(N * ang) * da; }
// onda en metros: altura A\xB70.9 mm \xB7 cos(k\xB7c)
vec2 waveC(float c, vec2 dc, float k, float A) { float fw = k * length(dc) / 6.2832; float f = 1.0 - smoothstep(0.09, 0.24, fw);
  return -A * f * k * sin(k * c) * dc; }
float edist() { return vEdge.x; }   // B18: aEdge.x ya est\xE1 en metros (antes se multiplicaba por 0.05 y las bandas de canal\xE9 sal\xEDan en todo el cuerpo de la prenda)
vec2 fabricGrad() {
  float ang = atan(vRest.x, vRest.z - 0.03);              // alrededor del tronco (n\xFAmero entero de canal\xE9s: sin costura)
  vec2 da = vec2(dFdx(ang), dFdy(ang)); if (abs(da.x) > 3.0) da.x -= sign(da.x) * 6.2832; if (abs(da.y) > 3.0) da.y -= sign(da.y) * 6.2832;
  float ed = edist(); float et = floor(vEdge.y + 0.5); bool sl = vTc.z > 0.5;
  vec2 g = vec2(0.0);
  float X = vRest.x, Y = vRest.y, Z = vRest.z; vec2 dY = vec2(dFdx(Y), dFdy(Y));
  if (uKind > 0.5 && uKind < 1.5) g += waveGrad(ang, da, 120.0, 0.8);     // acanalado (~6,5 mm)
  if (false && et > 0.5 && et < 1.5 && uKind < 0.5) { float band = 1.0 - smoothstep(0.013, 0.016, ed); g = mix(g, waveGrad(ang, da, 300.0, 0.35), band); }   // tapeta del polo
  if (uDes > 2.5 && uDes < 3.5) {   // top asim\xE9trico: fruncido horizontal en los costados + drapeado diagonal del pecho
    float side = smoothstep(0.05, 0.11, abs(X)) * (1.0 - smoothstep(0.15, 0.22, abs(X))) * (1.0 - smoothstep(1.10, 1.19, Y)) * step(vTc.z, 0.5);
    g += waveC(Y + 0.01 * sin(X * 40.0), dY, 215.0, 1.5) * side;
    float cd = -0.69 * X + 0.72 * Y; vec2 dcd = vec2(dFdx(cd), dFdy(cd));
    float chest = smoothstep(1.16, 1.20, Y) * (1.0 - smoothstep(1.28, 1.33, Y)) * smoothstep(0.02, 0.06, Z) * step(vTc.z, 0.5);
    g += waveC(cd, dcd, 150.0, 1.2) * chest; }
  if (uDes > 3.5 && uDes < 4.5) {   // halter: cowl = pliegues suaves en U paralelos al borde del escote + ca\xEDda fluida
    float yc = 1.215 + 0.137 * pow(clamp(abs(X) / 0.046, 0.0, 1.0), 2.0); float dcw = yc - Y; vec2 ddc = vec2(dFdx(dcw), dFdy(dcw));
    float cowl = smoothstep(-0.004, 0.012, dcw) * (1.0 - smoothstep(0.07, 0.14, dcw)) * smoothstep(0.0, 0.05, Z) * (1.0 - smoothstep(0.05, 0.10, abs(X)));
    g += waveC(dcw, ddc, 190.0 - 40.0 * clamp(dcw / 0.1, 0.0, 1.0), 2.4) * cowl; g += waveC(X, vec2(dFdx(X), dFdy(X)), 70.0, 0.4) * smoothstep(1.18, 1.10, Y); }
  if (uDes > 1.5 && uDes < 2.5) {   // c\xE1rdigan: canal\xE9 en cuello, bajo y pu\xF1os; punto fino liso en el resto
    float neck = (et > 0.5 && et < 1.5) ? 1.0 - smoothstep(0.012, 0.016, ed) : 0.0;
    float hem = (et > 1.5 && et < 2.5) ? 1.0 - smoothstep(0.034, 0.040, ed) : 0.0;
    float cuff = (et > 2.5 && et < 3.5) ? 1.0 - smoothstep(0.034, 0.040, ed) : 0.0;
    g = mix(g, waveGrad(ang, da, 170.0, 1.4), max(hem, neck * 0.0)); g = mix(g, waveGrad(ang, da, 300.0, 0.9), neck);
    vec2 du = vec2(dFdx(vTc.x), dFdy(vTc.x)); g = mix(g, waveC(vTc.x, du, 1100.0, 1.3), cuff); }
  return g;
}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
{ vec2 dH = fabricGrad() * 0.0009;
  vec3 sx = dFdx(-vViewPosition), sy = dFdy(-vViewPosition); vec3 r1 = cross(sy, normal), r2 = cross(normal, sx);
  float det = dot(sx, r1) * faceDirection; vec3 grad = sign(det) * (dH.x * r1 + dH.y * r2); normal = normalize(abs(det) * normal - grad); }`).replace("#include <color_fragment>",`#include <color_fragment>
{ float ed = edist(); diffuseColor.rgb *= mix(0.80, 1.0, smoothstep(0.0, 0.0025, ed)); if (vEdge.z > 0.5) diffuseColor.rgb *= 0.62;
  float X = vRest.x, Y = vRest.y, Z = vRest.z; bool front = Z > 0.03 && vTc.z < 0.5;
  if (uDes > 0.5 && uDes < 1.5) {   // camisa: rayas finas verticales blancas, tapeta con botones, bolsillo, cuello camp y costura del hombro ca\xEDdo
    float edc = vEdge.x;   /* distancia al borde en metros (aEdge.x) */ float et5 = floor(vEdge.y + 0.5); float wl = et5 > 4.5 ? 0.040 : 0.034; bool isCol = (et5 > 4.5 && edc < wl) || (et5 > 0.5 && et5 < 1.5 && vRest.y > 1.25 && edc < wl);   // solapa (borde 5) y solapas del escote en V (borde 1)   // B17: cuello camisero (rayas paralelas al borde)
    float per = 0.016; float u = isCol ? edc : vTc.x; float fr = fract(u / per); float fwu = max(fwidth(u) / per, 1e-4);
    float st = smoothstep(0.0, fwu, fr) * (1.0 - smoothstep(0.30, 0.30 + fwu, fr)); st = mix(st, 0.30, smoothstep(0.25, 0.7, fwu));
    float plk = (front && abs(vRest.x) < 0.019 && vRest.y < 1.235) ? 1.0 : 0.0; diffuseColor.rgb = mix(diffuseColor.rgb, mix(diffuseColor.rgb, vec3(1.0), 0.85), st * (1.0 - plk));
    float seam = vTc.z > 0.5 && vTc.z < 2.5 ? groove(vTc.y, 0.043, 0.0011) : 0.0; diffuseColor.rgb *= 1.0 - 0.28 * seam;
    if (front) {
      float pl = abs(X) < 0.019 ? 1.0 : 0.0; float edgeL = groove(abs(X), 0.019, 0.0008) + groove(abs(X), 0.006, 0.0007) * 0.0;
      diffuseColor.rgb *= 1.0 - 0.30 * edgeL * step(Y, 1.235); diffuseColor.rgb *= 1.0 - 0.05 * pl * step(Y, 1.235);
      float q = (1.205 - Y) / 0.060; float k = floor(q + 0.5); float dy = (q - k) * 0.060; float db = length(vec2(X, dy));
      if (k >= 0.0 && Y < 1.215) { float b = 1.0 - smoothstep(0.0058, 0.0064, db); float h = 1.0 - smoothstep(0.0020, 0.0030, db);
        diffuseColor.rgb = mix(diffuseColor.rgb, vec3(0.96, 0.95, 0.92), b); diffuseColor.rgb *= 1.0 - 0.45 * h * b; diffuseColor.rgb *= 1.0 - 0.5 * (1.0 - smoothstep(0.0066, 0.0074, db)) * smoothstep(0.0062, 0.0068, db); }
      bool pk = false;   /* B18: sin bolsillo sobre el busto (el trazo sal\xEDa roto sobre el pecho) */
      float pe = pk ? (groove(X, 0.050, 0.0009) + groove(X, 0.102, 0.0009) + groove(Y, 1.116, 0.0009)) : 0.0; if (pk) { float inside = (X > 0.046 && X < 0.106) ? 1.0 : 0.0; diffuseColor.rgb *= 1.0 - 0.45 * pe; }
      if (pk) diffuseColor.rgb *= 0.985; }
    float neckE = (floor(vEdge.y + 0.5) == 1.0) ? 1.0 - smoothstep(0.016, 0.022, ed) : 0.0; diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 1.06 + 0.02, neckE * 0.7);
    if (isCol) { diffuseColor.rgb *= 0.84; diffuseColor.rgb *= 1.0 - 0.28 * groove(edc, wl, 0.0010); diffuseColor.rgb *= 1.0 - 0.22 * groove(edc, 0.0042, 0.0007); diffuseColor.rgb *= 0.93 + 0.07 * smoothstep(0.0, 0.03, edc); }   // pespunte y sombra bajo el borde de la solapa
  }
  if (uDes > 1.5 && uDes < 2.5 && front) {   // c\xE1rdigan: tapeta y botones del mismo tono
    float q = (1.262 - Y) / 0.058; float k = floor(q + 0.5); float dy = (q - k) * 0.058; float db = length(vec2(X, dy));
    float pl = abs(X) < 0.017 && Y < 1.275 ? 1.0 : 0.0; diffuseColor.rgb *= 1.0 - 0.07 * pl; diffuseColor.rgb *= 1.0 - 0.18 * groove(abs(X), 0.017, 0.0007) * step(Y, 1.275);
    if (k >= 0.0 && Y < 1.272) { float b = 1.0 - smoothstep(0.0058, 0.0066, db); float rg = 1.0 - smoothstep(0.0, 0.0018, abs(db - 0.0035)); diffuseColor.rgb = mix(diffuseColor.rgb, diffuseColor.rgb * 0.82, b); diffuseColor.rgb *= 1.0 - 0.18 * rg * b; }
  }
  if (uDes > 4.5) { }
}`)},n}var Pc=class{constructor(t){this.eng=t}eng;cat;cache=new Map;a=null;b=null;lo=null;loCache=new Map;loColorId="";colorId="";base="";ext=".glb";uwFull=null;uwBrief=null;Bp=null;Mv=null;grid=new Lc;restGrid=new Lc;_bw=null;breastW(){if(this._bw)return this._bw;let t=this.eng,e=t.bodySkin,s=t.cal.bones.map(o=>o.name).map(o=>/^breast/.test(o)),r=e.w.length/4,a=new Float32Array(r);for(let o=0;o<r;o++){let c=0;for(let l=0;l<4;l++)s[e.j[o*4+l]]&&(c+=e.w[o*4+l]);a[o]=c}return this._bw=a}async load(t="",e=".glb"){return this.base=t,this.ext=e,this.cat=await(await fetch(t+"garmentCatalog.json?v=B33")).json(),this.eng.fitting=this,this}garment(t){return this.cat.garments.find(e=>e.id===t)}async inst(t,e){let n=this.garment(t),s=t+"_"+e,r=this.cache.get(s);return r||(r=await new ou(n,n.sizes.indexOf(e)).load(this.base,this.ext,this.eng.skeleton,this.eng.weldFirst),this.cache.set(s,r)),r}async show(t,e="M",n){for(let s of[this.a,this.b])s&&this.eng.root.remove(s.mesh);if(this.a=null,this.b=null,t){this.a=await this.inst(t,e);let s=this.garment(t);this.colorId=n&&s.colors.some(r=>r.id===n)?n:s.colors[0].id,this.a.setColor(this.color().hex),this.eng.root.add(this.a.mesh)}return this.underwear(),this.eng.update(),this.a}color(){let t=this.a.g;return t.colors.find(e=>e.id===this.colorId)||t.colors[0]}setColor(t){this.colorId=t;for(let e of[this.a,this.b])e?.setColor(this.color().hex)}async compare(t){this.b&&this.eng.root.remove(this.b.mesh),this.b=null,t&&this.a&&(this.b=await this.inst(this.a.g.id,t),this.b.setColor(this.color().hex),this.eng.root.add(this.b.mesh),this.b.mesh.visible=!1),this.eng.update()}uwTopOnly=null;underwear(){let t=this.eng.garments[0];if(!t)return;let e=t.mesh.geometry,n=!this.a,s=!this.lo;if(!this.uwFull){this.uwFull=e.index;let r=t.info?.parts?.top??0,a=this.uwFull.array,o=[],c=[];for(let l=0;l<a.length;l+=3){let u=t.data.weld[a[l]],h=t.data.weld[a[l+1]],d=t.data.weld[a[l+2]];u>=r||h>=r||d>=r?o.push(a[l],a[l+1],a[l+2]):c.push(a[l],a[l+1],a[l+2])}this.uwBrief=new Xt(Uint32Array.from(o),1),this.uwTopOnly=new Xt(Uint32Array.from(c),1)}t.mesh.visible=n||s,e.setIndex(n&&s?this.uwFull:n?this.uwTopOnly:this.uwBrief)}async showLower(t,e="M",n){if(this.lo&&this.eng.root.remove(this.lo.mesh),this.lo=null,t){let s=this.cat.lower.find(o=>o.id===t),r=t+"_"+e,a=this.loCache.get(r);a||(a=new Ic(s,s.sizes.indexOf(e)),this.loCache.set(r,a)),this.lo=a,this.loColorId=n&&s.colors.some(o=>o.id===n)?n:s.colors[0].id,this.setLowerColor(this.loColorId),this.eng.root.add(a.mesh)}return this.underwear(),this.eng.update(),this.lo}setLowerColor(t){if(this.loColorId=t,!this.lo)return;let e=this.lo.g.colors.find(n=>n.id===t)||this.lo.g.colors[0];this.lo.setColor(e.hex)}lowerGarment(t){return this.cat.lower.find(e=>e.id===t)}fit(){let t=this.eng;if(!this.a&&!this.lo){let c=t.extraArmGap!==0;return t.extraArmGap=0,c}if(!this.a){let c=t.extraArmGap!==0;if(t.extraArmGap=0,c)return!0}let e=null,n=0;if(this.a){let c=(d,f="upperarm01.",m="lowerarm01.")=>{let _=t.restHeads[f+d],p=t.restHeads[m+d],g=[p[0]-_[0],p[1]-_[1],p[2]-_[2]],T=Math.hypot(g[0],g[1],g[2]);return[_,g.map(M=>M/T)]};e={L:c("L"),R:c("R"),L2:c("L","lowerarm01.","wrist."),R2:c("R","lowerarm01.","wrist.")};{let d=t.measure();for(let f of[this.a,this.b])f&&(f.recIdx=ga(f.g,this.cat,{bust:d.bust,waist:d.waist,hips:d.hips}).index)}for(let d of[this.a,this.b])d&&(n=Math.max(n,d.fit(t.weights,t.cal,t.scale,t.body.out,t.body.data,e,this.breastW())));let l=[this.a,this.b].some(d=>d&&d.g.fit==="holgado")?.027:.006,u=Math.min(l,Math.max(0,n-.002)),h=Math.abs(u-t.extraArmGap)>.0015;if(h)return t.extraArmGap=u,h}let s=t.body.out,r=s.length/3;(!this.Bp||this.Bp.length!==s.length)&&(this.Bp=new Float32Array(s.length)),(!this.Mv||this.Mv.length!==r*9)&&(this.Mv=new Float32Array(r*9));let a=[0,0,0],o=[0,0,0,0,0,0,0,0,0];for(let c=0;c<r;c++){oi(s,c,t.bodySkin,t.skinS,a,o),this.Bp[c*3]=a[0],this.Bp[c*3+1]=a[1],this.Bp[c*3+2]=a[2];for(let l=0;l<9;l++)this.Mv[c*9+l]=o[l]}if(!this.grid.cls){let c=t.bodySkin,l=t.body.data.idx,h=t.cal.bones.map(m=>m.name).map(m=>/^(upperarm|lowerarm|wrist|finger)/.test(m)),d=m=>{let _=0;for(let p=1;p<4;p++)c.w[m*4+p]>c.w[m*4+_]&&(_=p);return c.j[m*4+_]},f=new Uint8Array(l.length/3);for(let m=0;m<f.length;m++){let _=0;for(let p=0;p<3;p++)h[d(l[m*3+p])]&&_++;f[m]=_>=2?1:0}this.grid.cls=f}this.restGrid.cls=this.grid.cls,this.restGrid.build(s,t.body.data.idx,[-.6,.55,-.4,.6,1.75,.4]);for(let c of[this.a,this.b])c&&c.anchor(s,t.body.data.idx,this.restGrid);this.grid.build(this.Bp,t.body.data.idx,[-.6,.55,-.4,.6,1.75,.4]);for(let c of[this.a,this.b])c&&c.pose(this.Bp,t.body.data.idx,this.grid,this.Mv);if(this.lo){let c=ai(s,t.ctx),l=-9,u=9;for(let h=0;h<s.length/3;h++){let d=s[h*3+1];d>l&&(l=d),d<u&&(u=d)}this.lo.fit({P:s,idx:t.ctx.idx,levels:c.levels,crotchY:s[t.ctx.vOf.crotch*3+1],H:l-u,floorY:u,Bp:this.Bp,Mv:this.Mv},this.a?{out:this.a.out,n:this.a.n,thick:this.a.thick}:null)}return!1}};var Xn=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]),Ai=(i,t=1)=>i.toLocaleString("es-PE",{minimumFractionDigits:t,maximumFractionDigits:t}),N_=i=>(i>0?"+":i<0?"\u2212":"")+Ai(Math.abs(i));function _p(i,t,e,n){let s=t.cat,r={garment:null,size:"M",compare:null,lower:null,lowerSize:"M",cat:"sup"};i.innerHTML=`
    <p class="fid" role="note"><b>Representaci\xF3n aproximada.</b> Prendas digitales de demostraci\xF3n de MIRIZ con medidas t\xE9cnicas estimadas: muestran la forma, el color y la diferencia entre tallas, no un ajuste f\xEDsico exacto.</p>
    <div class="toggles" id="pr-cat" role="group" aria-label="Categor\xEDa de prenda"><button class="chipbtn" data-c="sup" aria-pressed="true">Superiores</button><button class="chipbtn" data-c="inf" aria-pressed="false">Inferiores</button></div>
    <div id="pr-sup">
    <div class="group"><span class="lbl">Prenda superior</span>
      <div class="cards gcards" id="pr-garments" role="group" aria-label="Prenda">${s.garments.map(M=>`<button class="card" data-id="${M.id}" aria-pressed="false"><span class="ph"><img alt="" src="garment_thumb_${M.id}.jpg"></span>${Xn(M.label)}<span class="tag">${Xn(M.tag)}</span></button>`).join("")}
        <button class="card" data-id="" aria-pressed="true"><span class="ph none">\u2014</span>Sin prenda</button></div>
      <p class="note" id="pr-desc"></p></div>
    <div id="pr-body" hidden>
      <div class="group"><span class="lbl">Color</span><div class="swatches" id="pr-colors"></div><p class="note" id="pr-colname"></p></div>
      <div class="group"><span class="lbl">Talla <span class="rec" id="pr-rec" title="Calculada con las medidas actuales del avatar"></span></span><div class="toggles" id="pr-sizes" role="group" aria-label="Talla"></div>
        <p class="status" id="pr-status" role="status"></p></div>
      <details class="more" id="pr-det"><summary>Gu\xEDa de tallas <span aria-hidden="true">\u25BE</span></summary>
        <div class="fit" id="pr-table"></div>
        <div class="group"><span class="lbl">Calce por zona <span class="src" id="pr-src"></span></span><div class="fit" id="pr-fit"></div><p class="note" id="pr-stretch"></p></div>
        <div class="group"><span class="lbl">Comparar 2 tallas</span><div class="toggles" id="pr-cmp" role="group" aria-label="Talla para comparar"></div>
          <p class="note" id="pr-cmpnote">Elige una segunda talla: la vista se divide en dos con el mismo avatar y la misma c\xE1mara.</p></div>
      </details>
    </div>
    </div>
    <div id="pr-inf" hidden>
      <div class="group"><span class="lbl">Prenda inferior</span>
        <div class="cards gcards" id="pl-garments" role="group" aria-label="Prenda inferior">${(s.lower||[]).map(M=>`<button class="card" data-id="${M.id}" aria-pressed="false"><span class="ph"><img alt="" src="garment_thumb_${M.id}.jpg"></span>${Xn(M.label)}<span class="tag">${Xn(M.tag)}</span></button>`).join("")}
          <button class="card" data-id="" aria-pressed="true"><span class="ph none">\u2014</span>Sin prenda</button></div>
        <p class="note" id="pl-desc"></p></div>
      <div id="pl-body" hidden>
        <div class="group"><span class="lbl">Color</span><div class="swatches" id="pl-colors"></div><p class="note" id="pl-colname"></p></div>
        <div class="group"><span class="lbl">Talla <span class="rec" id="pl-rec" title="Calculada con la cintura y la cadera del avatar"></span></span><div class="toggles" id="pl-sizes" role="group" aria-label="Talla inferior"></div>
          <p class="status" id="pl-status" role="status"></p></div>
        <details class="more"><summary>Gu\xEDa de tallas <span aria-hidden="true">\u25BE</span></summary><div class="fit" id="pl-table"></div><div class="fit" id="pl-fit"></div></details>
      </div>
    </div>
    <div id="pr-common">
      <details class="more"><summary>Limitaciones del probador</summary><ul class="lim">${s.limitations.map(M=>`<li>${Xn(M)}</li>`).join("")}</ul></details>
    </div>`;let a=M=>i.querySelector("#"+M),o=M=>{i.style.opacity=M?"0.6":""},c=()=>r.garment?t.garment(r.garment):null;function l(){i.querySelectorAll("#pr-garments .card").forEach(w=>w.setAttribute("aria-pressed",String((w.dataset.id||null)===r.garment)));let M=c();if(a("pr-body").hidden=!M,a("pr-desc").textContent=M?`${M.description} ${M.fabric} \xB7 calce ${M.fit} \xB7 elasticidad ${M.stretch} (estimadas).`:"El avatar se muestra con el conjunto interior neutro.",!M)return;a("pr-colors").innerHTML=M.colors.map(w=>`<button class="sw" data-id="${w.id}" title="${Xn(w.label)}" aria-label="${Xn(w.label)}" aria-pressed="${w.id===t.colorId}" style="background:${w.hex}"></button>`).join(""),a("pr-colname").textContent=M.colors.find(w=>w.id===t.colorId)?.label||"",a("pr-sizes").innerHTML=M.sizes.map(w=>`<button class="chipbtn" data-s="${w}" aria-pressed="${w===r.size}">${w}</button>`).join(""),a("pr-cmp").innerHTML=`<button class="chipbtn" data-s="" aria-pressed="${!r.compare}">No</button>`+M.sizes.filter(w=>w!==r.size).map(w=>`<button class="chipbtn" data-s="${w}" aria-pressed="${w===r.compare}">${w}</button>`).join(""),u();let y=M.table,v=[["busto","Busto"],["cintura","Cintura"],["cadera","Cadera"],["hombro","Hombros"],["largo","Largo total"],["manga","Largo de manga"],["contornoManga","Contorno de manga"]];a("pr-table").innerHTML=`<table><thead><tr><th>cm</th>${M.sizes.map(w=>`<th>${w}</th>`).join("")}</tr></thead><tbody>${v.filter(w=>y[w[0]]).map(([w,x])=>`<tr><td>${x}</td>${y[w].map(b=>`<td>${Ai(b,b%1?1:0)}</td>`).join("")}</tr>`).join("")}</tbody></table>
      <p class="note">Contornos completos de la prenda en plano \xD7 2. Medidas t\xE9cnicas estimadas para la demostraci\xF3n, no medidas de una prenda f\xEDsica.</p>`}function u(){let M=c();if(!M)return;let y=e.measure(),v={bust:y.bust,waist:y.waist,hips:y.hips},w=ga(M,s,v);a("pr-rec").textContent=`Mi talla recomendada: ${w.size}`;let x=hp(M,s,v,r.size),b=a("pr-status");b.textContent=x.text,b.dataset.kind=x.kind,i.querySelectorAll("#pr-sizes .chipbtn").forEach(S=>S.classList.toggle("isrec",S.dataset.s===w.size))}function h(M,y,v){let w=s.fitRanges[v.fit]||{},x=s.stretchCm[v.stretch]||0,b=M==="busto"?w.busto:M==="cintura"?w.cintura:M==="bajo"?w.cadera:null;return M==="manga"?y<0?["Ajustada en el brazo","warn"]:y<2?["Cerca del brazo","ok"]:["Holgada","ok"]:b?y<b[0]-x?["Muy justa: m\xE1s de lo que cede la tela (est.)","bad"]:y<b[0]?["Ajustada: la tela cede","warn"]:y>b[1]?["M\xE1s holgada de lo previsto","warn"]:["Dentro del calce previsto","ok"]:["\u2014",""]}function d(){let M=c();if(!M||!t.a)return;u();let y=e.measure(),v={busto:y.bust,cintura:y.waist},w=[t.a,...t.b?[t.b]:[]],x=w.map(A=>A.zones()),b=x[0].map((A,E)=>{let P=v[A.zona]??A.cuerpo,F=x.map(N=>{let I=N[E],C=I.prenda-P,[L,k]=h(A.zona,C,M);return`<td><b>${Ai(I.prenda,I.prenda%1?1:0)}</b><span class="e ${k}">${N_(C)} \xB7 ${Xn(L)}</span></td>`}).join("");return`<tr><td>${{busto:"Busto",cintura:"Cintura",bajo:"Bajo",manga:"Manga"}[A.zona]||A.zona}</td><td>${Ai(P)}</td>${F}</tr>`}).join("");a("pr-fit").innerHTML=`<table><thead><tr><th>Zona</th><th>Avatar</th>${w.map(A=>`<th>Talla ${A.size}</th>`).join("")}</tr></thead><tbody>${b}</tbody></table>`,a("pr-src").textContent="\xB7 medidas del avatar de prueba";let S=w.map(A=>{let E=Math.max(0,...A.results.filter(P=>P.zone===0).map(P=>P.stretch));return E>.005?`talla ${A.size}: la prenda tendr\xEDa que estirarse hasta un ${Ai(E*100,0)} % en alguna altura del tronco`:""}).filter(Boolean);a("pr-stretch").textContent=(S.length?"Donde el cuerpo es mayor que la prenda, se muestra pegada: "+S.join(" \xB7 ")+". ":"")+"Avatar: contorno con cinta en busto y cintura; contorno de la piel a la altura del bajo y de la manga."}async function f(){o(!0),await t.show(r.garment,r.size,t.colorId),r.garment&&r.compare&&await t.compare(r.compare),o(!1),l(),d(),n()}a("pr-garments").addEventListener("click",async M=>{let y=M.target.closest(".card");y&&(r.garment=y.dataset.id||null,r.compare=null,t.colorId="",await f())}),i.addEventListener("click",async M=>{let y=M.target.closest("button");y&&(y.closest("#pr-colors")?(t.setColor(y.dataset.id),l(),n()):y.closest("#pr-sizes")?(r.size=y.dataset.s,r.compare===r.size&&(r.compare=null),await f()):y.closest("#pr-cmp")&&(r.compare=y.dataset.s||null,o(!0),await t.compare(r.compare),o(!1),l(),d(),n()))});let m=()=>r.lower?t.lowerGarment(r.lower):null,_=()=>{let M=e.measure();return{waist:M.waist,hips:M.hips}};function p(){i.querySelectorAll("#pl-garments .card").forEach(v=>v.setAttribute("aria-pressed",String((v.dataset.id||null)===r.lower)));let M=m();if(a("pl-body").hidden=!M,a("pl-desc").textContent=M?`${M.description} ${M.fabric} \xB7 calce ${M.fit} (estimado).`:"Sin prenda inferior: el avatar muestra la braga del conjunto interior.",!M)return;a("pl-colors").innerHTML=M.colors.map(v=>`<button class="sw" data-id="${v.id}" title="${Xn(v.label)}" aria-label="${Xn(v.label)}" aria-pressed="${v.id===t.loColorId}" style="background:${v.hex}"></button>`).join(""),a("pl-colname").textContent=M.colors.find(v=>v.id===t.loColorId)?.label||"",a("pl-sizes").innerHTML=M.sizes.map(v=>`<button class="chipbtn" data-s="${v}" aria-pressed="${v===r.lowerSize}">${v}</button>`).join("");let y=[["cintura","Cintura"],["cadera","Cadera"],["muslo","Muslo"],["rodilla","Rodilla"],["bajo",M.kind==="skirt"?"Contorno del bajo":"Abertura del bajo"],["tiro","Tiro"],["largo","Largo"]];a("pl-table").innerHTML=`<table><thead><tr><th>cm</th>${M.sizes.map(v=>`<th>${v}</th>`).join("")}</tr></thead><tbody>${y.filter(v=>M.table[v[0]]).map(([v,w])=>`<tr><td>${w}</td>${M.table[v].map(x=>`<td>${Ai(x,x%1?1:0)}</td>`).join("")}</tr>`).join("")}</tbody></table>
      <p class="note">Contornos completos en plano \xD7 2. Medidas t\xE9cnicas estimadas para la demostraci\xF3n, no medidas de una prenda f\xEDsica.</p>`,g()}function g(){let M=m();if(!M)return;let y=_(),v=au(M,s,y);a("pl-rec").textContent=`Mi talla recomendada: ${v.size}`;let w=yp(M,s,y,r.lowerSize),x=a("pl-status");x.textContent=w.text,x.dataset.kind=w.kind,i.querySelectorAll("#pl-sizes .chipbtn").forEach(b=>b.classList.toggle("isrec",b.dataset.s===v.size)),t.lo&&(a("pl-fit").innerHTML=`<table><thead><tr><th>Zona</th><th>Avatar</th><th>Talla ${t.lo.size}</th></tr></thead><tbody>${t.lo.reads.map(b=>`<tr><td>${Xn(b.zona[0].toUpperCase()+b.zona.slice(1))}</td><td>${Ai(b.cuerpo)}</td><td><b>${Ai(b.prenda,b.prenda%1?1:0)}</b><span class="e ${b.estira>(M.geom.stretchTol||0)?"bad":b.estira>0?"warn":"ok"}">${b.estira>0?"La tela se estirar\xEDa "+Ai(b.estira*100,0)+" %":"Dentro del calce"}</span></td></tr>`).join("")}</tbody></table>`)}async function T(){o(!0),await t.showLower(r.lower,r.lowerSize,t.loColorId),o(!1),p(),n()}return a("pl-garments").addEventListener("click",async M=>{let y=M.target.closest(".card");y&&(r.lower=y.dataset.id||null,t.loColorId="",await T())}),a("pr-cat").addEventListener("click",M=>{let y=M.target.closest("button");y&&(r.cat=y.dataset.c,i.querySelectorAll("#pr-cat button").forEach(v=>v.setAttribute("aria-pressed",String(v===y))),a("pr-sup").hidden=r.cat!=="sup",a("pr-inf").hidden=r.cat!=="inf")}),a("pr-inf").addEventListener("click",async M=>{let y=M.target.closest("button");y&&(y.closest("#pl-colors")?(t.setLowerColor(y.dataset.id),p(),n()):y.closest("#pl-sizes")&&(r.lowerSize=y.dataset.s,await T()))}),l(),p(),{st:r,refreshFit:()=>{d(),g()},apply:f}}var Ot=i=>document.getElementById(i),U_=Ot("c"),pe=op(U_),k_=()=>getComputedStyle(document.documentElement),Jt=new wc;pe.scene.add(Jt.root);var fu=()=>{pe.scene.background=new Mt(k_().getPropertyValue("--stage").trim()||"#f4f2ef"),Ye=!0};matchMedia("(prefers-color-scheme: dark)").addEventListener("change",fu);new MutationObserver(fu).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]});var Fc=!1,Ye=!0,Sp="frente",cu,de=new Cc(Jt),uu=[{k:"height",label:"Estatura (cm)"},{k:"bust",label:"Busto (cm)"},{k:"waist",label:"Cintura (cm)"},{k:"hips",label:"Cadera (cm)"},{k:"underbust",label:"Bajo busto (opcional)",opt:!0},{k:"shoulders",label:"Hombros (opcional)",opt:!0}],zc={height:"Estatura",bust:"Busto",underbust:"Bajo busto",waist:"Cintura",hips:"Cadera",shoulders:"Hombros"},O_=[["Forma del rostro",/head|forehead|ears/],["Ojos y cejas",/eye|brow/],["Nariz",/nose/],["Boca",/mouth|lip|cupid/],["Ment\xF3n y mejillas",/chin|jaw|cheek/]];function Pn(i,t=1){return i.toLocaleString("es-PE",{minimumFractionDigits:t,maximumFractionDigits:t})}function wp(){pe.resize(),Ye=!0}window.addEventListener("resize",wp);pe.controls.addEventListener("change",()=>Ye=!0);var Oc=!1,vp={frente:0,"tres-cuartos":Math.PI/4,perfil:Math.PI/2,espalda:Math.PI};function Dc(i){Sp=i;let t=new cn().setFromObject(Jt.body.mesh);if(pe.setView(i,t.max.y),Oc&&vp[i]!==void 0){let e=t.max.y,n=vp[i],s=.04,r=e*.78,a=e*.85,o=pe.controls.target;o.set(0,r,.03),pe.camera.position.set(Math.sin(n)*Math.cos(s)*a,r+Math.sin(s)*a,.03+Math.cos(n)*Math.cos(s)*a),pe.camera.lookAt(o);let c=pe.controls.enableDamping;pe.controls.enableDamping=!1,pe.controls.update(),pe.controls.enableDamping=c}document.querySelectorAll("#views button[data-v]").forEach(e=>e.setAttribute("aria-pressed",String(e.dataset.v===i))),Ye=!0}function B_(i,t){let e=Object.keys(i.error).map(r=>{let a=i.error[r],o=i.perMeasure[r];return`<tr><td>${zc[r]}</td><td>${Pn(t[r])}</td><td>${Pn(i.measured[r])}</td><td>${a>=0?"+":""}${Pn(a,2)}</td><td><span class="pill ${o}">${o==="validado"?"validado":o==="aproximado"?"aprox.":"fuera"}</span></td></tr>`}).join(""),n=["underbust","shoulders"].filter(r=>i.error[r]==null).map(r=>`${zc[r]} ${Pn(i.measured[r])} cm`).join(" \xB7 "),s=i.status==="validado"?"Ajuste validado":i.status==="aproximado"?"Vista aproximada":"Medidas no alcanzadas";Ot("result").innerHTML=`
    <div class="status"><strong>${s}</strong><span class="pill ${i.status}">${i.iterations} vuelta(s) \xB7 ${Pn(i.ms,0)} ms</span></div>
    ${i.warnings.map(r=>`<div class="warn">${r}</div>`).join("")}
    ${i.atLimit.length?`<div class="warn">Controles en su l\xEDmite: ${i.atLimit.join(", ")}. La combinaci\xF3n est\xE1 en el borde del rango calibrado.</div>`:""}
    <table><thead><tr><th>Medida</th><th>Pedida</th><th>Malla</th><th>Dif.</th><th></th></tr></thead><tbody>${e}</tbody></table>
    ${n?`<p class="note">Resultado sin pedir: ${n}</p>`:""}`}var du=!1;function Ap(){if(du)return;let i=parseFloat((Ot("m-bust").value||"").replace(",","."));isFinite(i)&&(Ot("m-underbust").value=String(Math.round(i-15)))}function z_(){Ap();let i={};for(let t of uu){let e=parseFloat((Ot("m-"+t.k).value||"").replace(",","."));isFinite(e)&&(i[t.k]=e)}return i}function Nc(){let i=z_(),t=Jt.solve(i);B_(t,i),G_(),Ye=!0,Mr(i)}function Mp(i,t,e,n,s){let r=document.createElement("div");r.className="sl";let a=Jt.weights[t]||0;r.innerHTML=`<label for="s-${t}">${e}</label><input id="s-${t}" type="range" min="${n}" max="${s}" step="0.01" value="${a}"><output>${Pn(a*100,0)}</output>`;let o=r.querySelector("input"),c=r.querySelector("output");o.addEventListener("input",()=>{let l=parseFloat(o.value);c.textContent=Pn(l*100,0),Bc[t]=l,H_()}),i.appendChild(r)}var Bc={},lu=0;function H_(){lu||(lu=requestAnimationFrame(()=>{lu=0,Jt.setWeights({...Jt.weights,...Bc});for(let i in Bc)delete Bc[i];Ye=!0,Tp(),Mr()}))}function G_(){document.querySelectorAll(".sl input").forEach(i=>{let t=i.id.slice(2);i.value=String(Jt.weights[t]||0),i.nextElementSibling.textContent=Pn((Jt.weights[t]||0)*100,0)})}function Tp(){let i=document.getElementById("live");if(!i)return;let t=Jt.measure();i.textContent=Object.keys(zc).map(e=>`${zc[e]} ${Pn(t[e])}`).join(" \xB7 ")+" cm"}function Mr(i){let t=Jt.config("Avatar de prueba");if(i?t.measurements=i:cu&&(t.measurements=cu),i&&(cu=i),de.cfg){let e=de.config();t.face=e.face,t.skin=e.skin,delete t.skinTone}Jt.hair?.cat&&(t.hair={catalogVersion:Jt.hair.cat.version,style:Jt.hair.styleId,color:Jt.hair.colorId,gathered:Jt.hair.gathered}),t.weights=Object.fromEntries(Object.entries(t.weights).filter(([,e])=>Math.abs(e)>.001).map(([e,n])=>[e,+n.toFixed(3)])),t.scale=+t.scale.toFixed(4),Ot("cfg").textContent=JSON.stringify(t,null,1)}async function V_(){let[i,t]=await Promise.all([fetch("calibracion.json").then(M=>M.json()),fetch("testcases.json").then(M=>M.json())]),e=window.MIRIZ_GLB_EXT||".glb";await Jt.load("avatar2_base"+e,i),await Jt.addGarment("underwear"+e,"underwear_bind.json");{let M=Jt.garments[0].mesh;M.material.dispose(),M.material=new De({color:"#463c3e",roughness:.5,metalness:0,sheen:.6,sheenRoughness:.5,sheenColor:new Mt("#9b8a8c"),side:Pe})}Jt.root.traverse(M=>{M.isMesh&&(M.castShadow=!0)}),await de.load(""),window.MIRIZ_HAIR_EXT=e,await Jt.addHair(""),Cp();{let M=new URLSearchParams(location.search).get("lash")||"03";M!=="f1"&&await Jt.hair.setLashes("g1-pestanas"+M)}let n=await new Pc(Jt).load("",e),s=0;{let M=Jt.update.bind(Jt);Jt.update=()=>{M(),s++}}let r=_p(Ot("t-probador"),n,Jt,()=>{Ye=!0});{let M=document.createElement("details");M.className="more",M.id="insp",M.open=!1,M.innerHTML=`<summary>Inspecci\xF3n del busto (diagn\xF3stico)</summary>
      <div class="toggles" id="insp-states" role="group" aria-label="Estado"><button class="chipbtn" data-s="" aria-pressed="false">Sin prendas (brasier base)</button><button class="chipbtn" data-s="polo-basico" aria-pressed="false">Polo b\xE1sico</button><button class="chipbtn" data-s="top-asimetrico" aria-pressed="false">Top asim\xE9trico</button><button class="chipbtn" data-s="skin" aria-pressed="false">Solo piel (diagn\xF3stico)</button></div>
      <div class="toggles"><button class="chipbtn" id="insp-zoom" aria-pressed="false">Acercar al busto</button></div>
      <p class="note">Elige el estado y mira las 4 vistas con los botones Frente, 3/4, Perfil y Espalda (abajo del avatar). \xABSin prendas\xBB viste el conjunto base seamless (se oculta solo al probar polos o blusas); \xABSolo piel\xBB es solo para diagn\xF3stico.</p>`,Ot("t-probador").append(M);let y=()=>Jt.garments[0]?.mesh;Ot("insp-states").addEventListener("click",async v=>{let w=v.target.closest("button");if(!w)return;let x=w.dataset.s||"",b=x==="skin"?"":x;Ot("t-probador").querySelector(`#pr-garments .card[data-id="${b}"]`)?.click();for(let S=0;S<80&&(b?!n.a:n.a);S++)await new Promise(A=>setTimeout(A,100));y()&&x==="skin"?y().visible=!1:y()&&(y().visible=!0),Ot("insp-states").querySelectorAll("button").forEach(S=>S.setAttribute("aria-pressed",String(S===w))),Ye=!0}),Ot("insp-zoom").addEventListener("click",()=>{Oc=!Oc,Ot("insp-zoom").setAttribute("aria-pressed",String(Oc)),Dc(Sp)})}Ot("loading").hidden=!0,fu();let a=Ot("preset");a.innerHTML=`<option value="">\u2014 Elegir \u2014</option><optgroup label="30 combinaciones plausibles">${t.real.map(M=>`<option value="${M.id}">${M.id} \xB7 ${M.label}</option>`).join("")}</optgroup>
    <optgroup label="10 combinaciones incoherentes (deben avisar)">${t.incoherent.map(M=>`<option value="${M.id}">${M.id} \xB7 ${M.label}</option>`).join("")}</optgroup>`,Ot("mfields").innerHTML=uu.map(M=>`<div class="field"><label for="m-${M.k}">${M.label}</label><input id="m-${M.k}" inputmode="decimal" placeholder="${M.opt?"\u2014":""}"></div>`).join("");let o=M=>{du=!1,uu.forEach(y=>Ot("m-"+y.k).value=M[y.k]!=null?String(M[y.k]):"")};Ot("m-underbust").addEventListener("input",()=>{du=Ot("m-underbust").value.trim()!==""}),Ot("m-bust").addEventListener("input",Ap),a.addEventListener("change",()=>{let M=[...t.real,...t.incoherent].find(y=>y.id===a.value);M&&(o(M.m),Nc())}),Ot("apply").addEventListener("click",Nc),Ot("mfields").addEventListener("keydown",M=>{M.key==="Enter"&&Nc()}),a.value="R06",o(t.real[5].m),Nc();let c=Ot("techface"),l=i.controls.filter(M=>M.group==="face");for(let[M,y]of O_){let v=document.createElement("div");v.className="group",v.innerHTML=`<span class="lbl">${M}</span>`;for(let w of l.filter(x=>y.test(x.id))){let x=i.faceSafe?.[w.id]??[w.bipolar?-1:0,1];x[0]===0&&x[1]===0||Mp(v,w.id,w.label,x[0],x[1])}c.appendChild(v)}q_(),X_();let u=Ot("t-cuerpo"),h=new Set(i.solver.variables);u.insertAdjacentHTML("beforeend",'<p class="note">Ajustes de forma que el formulario de medidas no controla. Al moverlos, la malla se vuelve a medir:</p><p class="note" id="live" style="font-family:var(--f-data)"></p>');let d=[["Silueta",M=>M.group==="shape"&&M.id!=="shape.apple"],["Detalles",M=>M.group==="body"&&!h.has(M.id)],["Controles del solver (se sobrescriben al aplicar medidas)",M=>h.has(M.id)]];for(let[M,y]of d){let v=document.createElement("div");v.className="group",v.innerHTML=`<span class="lbl">${M}</span>`;for(let w of i.controls.filter(y))Mp(v,w.id,w.label,w.bipolar?-1:0,1);u.appendChild(v)}Tp();let f=(M,y)=>Ot(M).addEventListener("click",()=>{let v=Ot(M).getAttribute("aria-pressed")!=="true";Ot(M).setAttribute("aria-pressed",String(v)),y(v),Ye=!0});f("tg-garment",M=>Jt.garments.forEach(y=>y.mesh.visible=M)),f("tg-pose",M=>{Jt.setPose(M?"natural":"reference"),Mr()}),f("tg-tapes",M=>{Jt.showTapes=M,Jt.drawTapes()}),f("tg-wire",M=>{Jt.body.mesh.material.wireframe=M}),Ot("copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(Ot("cfg").textContent||""),Ot("copy").textContent="Copiado"}catch{let M=document.createRange();M.selectNodeContents(Ot("cfg"));let y=getSelection();y?.removeAllRanges(),y?.addRange(M),Ot("copy").textContent="Seleccionado: use Ctrl+C"}}),Ot("tabs").addEventListener("click",M=>{let y=M.target.closest("button");y&&(Ot("tabs").querySelectorAll("button").forEach(v=>v.setAttribute("aria-selected",String(v===y))),["medidas","rostro","cabello","cuerpo","probador","vista"].forEach(v=>Ot("t-"+v).hidden=v!==y.dataset.t))}),Ot("views").addEventListener("click",M=>{let y=M.target.closest("button");if(y){if(y.id==="spin"){Fc=!Fc,y.setAttribute("aria-pressed",String(Fc));return}Dc(y.dataset.v)}}),wp(),Dc("frente");let m=0,_=performance.now(),p=0,g=-1,T=(Jt.body.data.idx.length+Jt.garments.reduce((M,y)=>M+y.data.idx.length,0))/3;(function M(){if(requestAnimationFrame(M),Fc){let w=pe.controls.target,x=pe.camera.position.clone().sub(w);x.applyAxisAngle(new q(0,1,0),.008),pe.camera.position.copy(w).add(x),Ye=!0}if(pe.controls.enableDamping&&pe.controls.update(),s!==g&&(g=s,r.refreshFit(),Ye=!0),!Ye)return;Ye=!1;let y=!!(n.a&&n.b&&r.st.compare);if(Ot("cmp").hidden=!y,y){let w=pe.renderer,x=w.getSize(new Wt),b=Math.floor(x.x/2),S=x.y,A=pe.camera.aspect;w.setScissorTest(!0),pe.camera.aspect=b/S,pe.camera.updateProjectionMatrix();for(let[E,P]of[n.a,n.b].entries())n.a.mesh.visible=E===0,n.b.mesh.visible=E===1,w.setViewport(E*b,0,b,S),w.setScissor(E*b,0,b,S),w.render(pe.scene,pe.camera);n.a.mesh.visible=!0,n.b.mesh.visible=!1,w.setScissorTest(!1),w.setViewport(0,0,x.x,x.y),pe.camera.aspect=A,pe.camera.updateProjectionMatrix(),Ot("cmp-a").textContent="Talla "+n.a.size,Ot("cmp-b").textContent="Talla "+n.b.size}else pe.renderer.render(pe.scene,pe.camera);m++;let v=performance.now();v-_>1e3&&(p=m*1e3/(v-_),m=0,_=v),Ot("stats").textContent=`forma ${Pn(Jt.lastMs.blend,1)} ms \xB7 solver ${Pn(Jt.lastMs.solve,0)} ms \xB7 ${Math.round(T).toLocaleString("es-PE")} tri\xE1ngulos \xB7 ${pe.renderer.info.render.calls} llamadas${p?` \xB7 ${Pn(p,0)} fps`:""}`})(),pe.controls.addEventListener("change",()=>Ye=!0),window.mirizAv2={loopAt:M=>_c(Jt.body.out,Jt.body.data.idx,M),levels:()=>ai(Jt.body.out,Jt.ctx).levels,eng:Jt,stage:pe,setView:Dc,fs:de,thumbs:()=>thumbs,fr:n,pr:r}}var ba=[],W_=()=>({face:JSON.parse(JSON.stringify(de.cfg)),skin:{...de.skin}});function Uc(i){ba.push(W_()),ba.length>50&&ba.shift(),Ot("f-undo").disabled=!1,i(),Ep()}function Ep(){Ye=!0,Rp(),Mr()}var Ms=i=>i.replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function q_(){let i=de.R,t=de.T;Ot("tones").innerHTML=t.tones.map(r=>`<button class="sw" data-id="${r.id}" title="${r.label}" aria-label="${r.label}" aria-pressed="false"></button>`).join("");let e=i.groups.find(r=>r.id==="forma");Ot("faceforms").innerHTML=e.options.map(r=>`<button class="chipbtn" data-id="${r.id}" aria-pressed="false">${Ms(r.label)}</button>`).join("");let n=(r,a,o)=>`<div class="toggles" id="${r}" role="group" aria-label="${Ms(o)}">${a.map(c=>`<button class="chipbtn" data-id="${c.id}" aria-pressed="false">${Ms(c.label)}</button>`).join("")}</div>`,s=r=>{let a=`<div class="group"><span class="lbl">${Ms(r.label)}</span>${n("fc-"+r.id,r.options,r.label)}`;return r.id==="ojos"&&(a+=`<span class="lbl sub">Color de iris</span><div class="swatches irises" id="fc-iris" role="group" aria-label="Color de iris">${i.eyeColors.map(o=>`<button class="sw" data-id="${o.id}" title="${Ms(o.label)}" aria-label="${Ms(o.label)}" aria-pressed="false" style="background:${o.hex}"></button>`).join("")}</div>`),r.id==="cejas"&&r.thickness&&(a+=`<span class="lbl sub">Grosor</span>${n("fc-grosor",r.thickness,"Grosor de cejas")}`),a+"</div>"};Ot("facegroups").innerHTML=i.groups.filter(r=>r.id!=="forma").map(s).join(""),Ot("tones").addEventListener("click",r=>{let a=r.target.closest(".sw");a&&Uc(()=>de.setSkin({...de.skin,tone:a.dataset.id}))}),Ot("faceforms").addEventListener("click",r=>{let a=r.target.closest("button");a&&Uc(()=>de.setFace({...de.cfg,choice:{...de.cfg.choice,forma:a.dataset.id}}))}),Ot("facegroups").addEventListener("click",r=>{let a=r.target.closest(".chipbtn, .sw");if(!a)return;let o=a.parentElement.id,c=a.dataset.id;Uc(()=>{o==="fc-grosor"?de.setFace({...de.cfg,browThickness:c}):o==="fc-iris"?de.setFace({...de.cfg,eyeColor:c}):o.startsWith("fc-")&&de.setFace({...de.cfg,choice:{...de.cfg.choice,[o.slice(3)]:c}})})}),Ot("f-undo").addEventListener("click",()=>{let r=ba.pop();r&&(de.setFace(r.face),de.setSkin(r.skin),Ot("f-undo").disabled=!ba.length,Ep())}),Ot("f-reset").addEventListener("click",()=>Uc(()=>de.setFace(Rc(de.R,de.cfg.start)))),Rp()}function Rp(){let i=de.cfg,t=de.T;Ot("tones").querySelectorAll(".sw").forEach(n=>{let s=t.tones.find(r=>r.id===n.dataset.id);n.style.background=s.undertones[de.skin.undertone].skin,n.setAttribute("aria-pressed",String(n.dataset.id===de.skin.tone))});let e={faceforms:i.choice.forma,"fc-grosor":i.browThickness,"fc-iris":i.eyeColor};for(let n of de.R.groups)n.id!=="forma"&&(e["fc-"+n.id]=i.choice[n.id]||n.options[0]?.id);for(let[n,s]of Object.entries(e))document.querySelectorAll(`#${n} [data-id]`).forEach(r=>r.setAttribute("aria-pressed",String(r.dataset.id===s)))}var kc={length:"",texture:""};window.addEventListener("miriz-hair-scalp",i=>{de.uniforms.uScalpOn.value=i.detail?1:0});function Cp(){let i=Jt.hair,t=i.cat.colors.find(e=>e.id===i.colorId);de.setHair(t.hex,t.hex,!i.shownId().startsWith("g3-"))}function X_(){let i=Jt.hair,t=i.cat,e=(r,a)=>`<div class="toggles" id="${r}" role="group"><button class="chipbtn" data-v="" aria-pressed="true">Todos</button>${Object.entries(a).map(([o,c])=>`<button class="chipbtn" data-v="${o}" aria-pressed="false">${c}</button>`).join("")}</div>`;Ot("t-cabello").innerHTML=`
    <div class="group"><span class="lbl">Peinado</span><div class="cards" id="hc-styles" role="group" aria-label="Peinado">${t.styles.filter(r=>!r.variant&&!r.hidden).map(r=>`<button class="card" data-id="${r.id}" aria-pressed="false"><span class="ph"><img alt="" src="hair_thumb_${r.id}.jpg"></span>${Ms(r.label)}</button>`).join("")}</div></div>
    <div class="group"><span class="lbl">Color</span><div class="swatches" id="hc-colors">${t.colors.map(r=>`<button class="sw" data-id="${r.id}" title="${r.label}" aria-label="${r.label}" aria-pressed="false" style="background:${r.hex}"></button>`).join("")}</div><p class="note" id="hc-colname"></p></div>
    <p class="note">Las cejas siguen al color del cabello en una versi\xF3n algo m\xE1s suave.</p>`;let n=r=>{Ot("t-cabello").style.opacity=r?"0.6":""},s=(r,a)=>{Ot(r).querySelectorAll("button").forEach(o=>o.setAttribute("aria-pressed",String(o.dataset.v===a)))};Ot("hc-styles").addEventListener("click",async r=>{let a=r.target.closest(".card");a&&(n(!0),await i.setStyle(a.dataset.id),Jt.update(),n(!1),Ye=!0,hu(),Mr())}),Ot("hc-colors").addEventListener("click",r=>{let a=r.target.closest(".sw");a&&(i.setColor(a.dataset.id),Cp(),Ye=!0,hu(),Mr(),void 0)}),hu()}function hu(){let i=Jt.hair,t=i.cat,e=0;document.querySelectorAll("#hc-styles .card").forEach(n=>{let s=t.styles.find(a=>a.id===n.dataset.id),r=(!kc.length||s.length===kc.length)&&(!kc.texture||s.texture===kc.texture);n.hidden=!r,r&&e++,n.setAttribute("aria-pressed",String(s.id===i.styleId))}),document.querySelectorAll("#hc-colors .sw").forEach(n=>n.setAttribute("aria-pressed",String(n.dataset.id===i.colorId))),Ot("hc-colname").textContent=t.colors.find(n=>n.id===i.colorId).label}V_().catch(i=>{Ot("loading").textContent="No se pudo cargar el avatar: "+i.message,console.error(i)});
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
