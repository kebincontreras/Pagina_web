/* Radix-2 FFT on a zero-padded circular pupil. Worker keeps form responsive. */
function transform(s){
 const {n,m,A,B,C,Q,E,lam,dx}=s, real=new Float32Array(n*n),imag=new Float32Array(n*n);
 const start=(n-m)/2,scale=2/m,k=2*Math.PI/lam;
 for(let j=0;j<m;j++) for(let i=0;i<m;i++){
   const y=(j-m/2)*scale,x=(i-m/2)*scale,r=x*x+y*y;
   if(r<=1){const ph=k*(-A*r*r-B*x*r-C*x*x+Q*r-E*x),w=(start+j)*n+start+i;real[w]=Math.cos(ph);imag[w]=Math.sin(ph)}
 }
 const perm=new Uint32Array(n),co=new Float64Array(n/2),si=new Float64Array(n/2);
 for(let i=1;i<n;i++)perm[i]=(perm[i>>1]>>1)|((i&1)*(n>>1));
 for(let i=0;i<n/2;i++){const a=-2*Math.PI*i/n;co[i]=Math.cos(a);si[i]=Math.sin(a)}
 function line(base,stride){
  for(let i=1;i<n;i++){const j=perm[i];if(i<j){const a=base+i*stride,b=base+j*stride,t=real[a],u=imag[a];real[a]=real[b];imag[a]=imag[b];real[b]=t;imag[b]=u}}
  for(let step=2;step<=n;step*=2){const h=step/2,d=n/step;
   for(let i=0;i<n;i+=step)for(let j=0;j<h;j++){
    const a=base+(i+j)*stride,b=a+h*stride,w=j*d, x=real[b]*co[w]-imag[b]*si[w],y=real[b]*si[w]+imag[b]*co[w];
    real[b]=real[a]-x;imag[b]=imag[a]-y;real[a]+=x;imag[a]+=y;
   }
  }
 }
 for(let i=0;i<n;i++)line(i*n,1);
 for(let i=0;i<n;i++)line(i,n);
 const rings=new Float64Array(n/2+1);
 let sum=0,peak=0;
 for(let y=0;y<n;y++)for(let x=0;x<n;x++){
   const i=y*n+x,v=real[i]**2+imag[i]**2,k=Math.max(Math.min(y,n-y),Math.min(x,n-x));
   real[i]=v;rings[k]+=v;sum+=v;peak=Math.max(peak,v);
 }
 let r95=null;
 for(let k=0;k<rings.length;k++){rings[k]=rings[k]+(k?rings[k-1]:0);if(r95===null&&rings[k]>=.95*sum)r95=k*dx}
 const levels=new Uint8Array(real.length);
 for(let i=0;i<levels.length;i++)levels[i]=Math.round(255*(real[i]/peak)**.55);
 return {n,dx,levels,rings,sum,r95};
}
function sample(grid,edge){
 const {n,dx,levels,rings,sum}=grid, size=360,pixels=new Uint8Array(size*size), span=2*edge/size;
 const lim=n*dx/2;
 for(let y=0;y<size;y++)for(let x=0;x<size;x++){
   const i=Math.round((x+.5-size/2)*span/dx),j=Math.round((size/2-y-.5)*span/dx);
   if(Math.abs(i)<n/2&&Math.abs(j)<n/2)pixels[y*size+x]=levels[((j+n)%n)*n+((i+n)%n)];
 }
 // Include peaks that are narrower than a rendered pixel in wide windows.
 if(span>dx){
  const kmax=Math.min(n/2-1,Math.floor(edge/dx));
  for(let j=-kmax;j<=kmax;j++)for(let i=-kmax;i<=kmax;i++){
   const x=Math.floor(i*dx/span+size/2),y=Math.floor(size/2-j*dx/span);
   if(x>=0&&x<size&&y>=0&&y<size){const k=y*size+x;pixels[k]=Math.max(pixels[k],levels[((j+n)%n)*n+((i+n)%n)])}
  }
 }
 const k=Math.min(rings.length-1,Math.floor(edge/dx+1e-9));
 return {size,pixels,edge,energy:edge<=lim?rings[k]/sum:null};
}
export function intensity(s,crop){
 const g=transform(s), out=sample(g,crop?40:Math.min(s.view,g.n*g.dx/2));
 if(s.inset)out.inset=sample(g,40);
 return out;
}
function needed(spec,edge){
 const half=spec.n*spec.dx/2;
 if(edge<=half)return spec;
 const m=Math.min(4096,2**Math.ceil(Math.log2(spec.m*edge*1.01/half))),n=Math.max(1024,m);
 return {...spec,m,n,dx:spec.dx*(m/spec.m)*(spec.n/n)};
}
const rounded=edge=>{
 const step=10**Math.floor(Math.log10(Math.max(edge,1)))/5;
 return Math.ceil(Math.max(edge,1)/step)*step;
};
export function gallery(specs,manual=null){
 const cache=new Map();
 function get(spec){
   if(!spec)return null;
   const key=JSON.stringify(spec);
   if(!cache.has(key))cache.set(key,transform(spec));
   return cache.get(key);
 }
 let grids=specs.map(spec=>get(manual&&spec?needed(spec,manual):spec));
 let edge=manual??rounded(1.08*Math.max(1,...grids.filter(Boolean).map(g=>g.r95)));
 if(!manual){
  // Keep every sampled domain large enough to cover the shared axes.
  let upgraded=new Map();
  grids=grids.map((g,i)=>{
   if(!g||g.n*g.dx/2>=edge)return g;
   const spec=needed(specs[i],edge),key=JSON.stringify(spec);
   if(!upgraded.has(key))upgraded.set(key,transform(spec));
   return upgraded.get(key);
  });
 }
 const available=Math.min(...grids.filter(Boolean).map(g=>g.n*g.dx/2));
 const clipped=edge>available;
 if(clipped)edge=available;
 const images=grids.map(g=>g?sample(g,edge):null);
 return {edge,clipped,images};
}
if(typeof self!=='undefined'&&typeof document==='undefined')self.onmessage=({data})=>{
 try{const out=gallery(data.specs,data.manual);self.postMessage(out,out.images.filter(Boolean).map(im=>im.pixels.buffer))}
 catch{self.postMessage(null)}
};
