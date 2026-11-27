/* Two-surface meridional trace and primary Seidel model, in mm and radians. */
export const defaults={f1:1,f2:0,R1:25.84,R2:55,t:4.9,edge:12.5,a:12,n1:1,ng:1.51509,n3:1,field:0,far:true,s:418,screen:46.931859103711986,zone:'all',rays:11,nm:633,crop:true,detail:false};
export const sag=(r,y)=>Number.isFinite(r)?y*y/(r+Math.sign(r)*Math.sqrt(r*r-y*y)):0;
export function geometry(p){
  const r1=p.f1?p.f1*p.R1:Infinity,r2=p.f2?p.f2*p.R2:Infinity;
  const s=p.far?Infinity:p.s,ns=[p.n1,p.ng,p.n3],c=p.field;
  let y=p.a,b=0,u=p.a/s,v=c,H=p.n1*c*p.a;
  const faces=[r1,r2].map((r,i)=>{
    const n=ns[i],m=ns[i+1],C=1/r,A=n*(u+C*y),B=n*(v+C*b);
    const up=(n*u-(m-n)*C*y)/m,vp=(n*v-(m-n)*C*b)/m;
    const K=-y*(up/m-u/n),P=C*(1/m-1/n);
    const values=[A*A*K,A*B*K,B*B*K,-H*H*P,-B*(B*B*(1/m**2-1/n**2)*y-(H+B*y)*b*P)];
    u=up;v=vp;if(!i){y+=p.t*u;b+=p.t*v}
    return values.map(x=>x*1000);
  });
  const q=Math.abs(u)>1e-12?-y/u:Infinity;
  return {r1,r2,s,q,yi:b+q*v,faces,total:faces[0].map((x,i)=>x+faces[1][i])};
}
const snell=(a,n,i,j)=>{const x=i/j*Math.sin(a-n),out=n+Math.asin(x);return Math.cos(out)>0?out:NaN};
const normal=(r,h)=>-Math.asin(h/r);
function second(z,y,u,r,t,edge){
 const dz=Math.cos(u),dy=Math.sin(u),pz=z-t-r,b=pz*dz+y*dy,d=b*b-(pz*pz+y*y-r*r);
 const roots=Number.isFinite(r)?[-b-Math.sqrt(d),-b+Math.sqrt(d)]:[(t-z)/dz];
 for(const k of roots){const zz=z+k*dz,yy=y+k*dy;if(k>1e-9&&Math.abs(yy)<=edge&&Math.abs(zz-t-sag(r,yy))<1e-7)return [zz,yy]}
}
export function trace(h,p,g,left){
 const z=sag(g.r1,h),a=p.far?p.field:Math.atan2(h+p.s*Math.tan(p.field),z+p.s);
 const pts=[[left,h+(left-z)*Math.tan(a)],[z,h]],u=snell(a,normal(g.r1,h),p.n1,p.ng);
 if(!Number.isFinite(u))return pts;
 const pt=second(z,h,u,g.r2,p.t,p.edge);if(!pt)return pts;pts.push(pt);
 const v=snell(u,normal(g.r2,pt[1]),p.ng,p.n3),z3=p.t+p.screen;
 if(Number.isFinite(v)&&z3>=pt[0])pts.push([z3,pt[1]+(z3-pt[0])*Math.tan(v)]);
 return pts;
}
export function psfSpec(p,g,screen){
 const d=1-(p.n3-p.ng)*(p.t/p.ng)/g.r2;
 if(!Number.isFinite(g.q)||g.q<=0||Math.abs(d)<1e-8)return null;
 const z=-p.n3*(p.t/p.ng)/d,a=p.a/Math.abs(d),L0=g.q-z,L=screen-z;
 if(Math.min(L0,L)<=0||a/Math.min(L0,L)>.30)return null;
 const F=500*p.n3*a*a*(1/L-1/L0),[s1,s2,s3,s4,s5]=g.total;
 const A=s1/8,B=s2/2,C=s3/2,Q=F-(s3+s4)/4,E=s5/2,lam=p.nm/1000;
 const grad=4*Math.abs(A)+3*Math.abs(B)+2*Math.abs(C)+2*Math.abs(Q)+Math.abs(E);
 const m=Math.max(256,2**Math.ceil(Math.log2(Math.max(1,6*grad/lam))));
 const n=Math.max(1024,m),dx=lam*L/(p.n3*a*n*(2/m));
 return {A,B,C,Q,E,lam,m,n,dx,view: L/(p.n3*a)*Math.max(1.8,1.18*grad)};
}
