/* Radix-2 FFT on a zero-padded circular pupil. Worker keeps form responsive. */
export function intensity(s,crop){
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
 let sum=0,peak=0,energy=0;
 for(let y=0;y<n;y++)for(let x=0;x<n;x++){const i=y*n+x,q=real[i]**2+imag[i]**2;sum+=q;peak=Math.max(peak,q);
  if(Math.min(y,n-y)*dx<=40&&Math.min(x,n-x)*dx<=40)energy+=q}
 const size=360;
 function sample(cropped){
  const edge=cropped?40:Math.min(s.view,n*dx/2),pixels=new Uint8Array(size*size);
  for(let y=0;y<size;y++)for(let x=0;x<size;x++){
   const i=Math.round((x+.5-size/2)*2*edge/(size*dx)),j=Math.round((size/2-y-.5)*2*edge/(size*dx));
   if(Math.abs(i)<n/2&&Math.abs(j)<n/2){const w=((j+n)%n)*n+((i+n)%n);pixels[y*size+x]=Math.round(255*((real[w]**2+imag[w]**2)/peak)**.55)}
  }
  return {size,pixels,edge,energy:40<n*dx/2?energy/sum:null};
 }
 const result=sample(crop);
 if(s.inset)result.inset=sample(true);
 return result;
}

if(typeof self!=='undefined'&&typeof document==='undefined')self.onmessage=({data})=>{
 try{const out=intensity(data.spec,data.crop);self.postMessage(out,out.inset?[out.pixels.buffer,out.inset.pixels.buffer]:[out.pixels.buffer])}
 catch{self.postMessage(null)}
};
