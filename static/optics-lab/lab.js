import {defaults,geometry,sag,trace,psfSpec} from './model.js';
const D={
en:{lab:'Virtual Optics Lab',collection:'Simulation catalog',intro:'Explore how optical systems form images through interactive experiments.',basic:'Basic simulator',seidel:'Seidel aberrations',desc:'Trace light through a two-surface lens, compare the five Seidel coefficients and see how a point of light forms an image.',open:'Open simulator',back:'← All simulators',focus:'Move screen to paraxial plane',reset:'Reset',raytitle:'Ray tracing · meridional plane',bartitle:'Seidel coefficients · total (µm)',note:'The PSF uses a uniform circular pupil and scalar diffraction with primary Seidel aberrations. Changing wavelength does not automatically change the refractive indices.',f1:'Surface 1 shape',f2:'Surface 2 shape',R1:'|R₁| (mm)',R2:'|R₂| (mm)',t:'Thickness (mm)',edge:'Lens radius (mm)',a:'Aperture radius (mm)',n1:'Index before lens',ng:'Lens index',n3:'Index after lens',field:'Field angle (rad)',far:'Distant object',s:'Object distance (mm)',screen:'Screen from surface 2 (mm)',zone:'Draw rays from',rays:'Number of rays',nm:'Wavelength (nm)',crop:'Compare at ±40 µm',detail:'Show each surface’s contribution',pos:'Positive radius',plane:'Flat',neg:'Negative radius',all:'Entire aperture',center:'Center',edgezone:'Edge',height:'Height (mm)',distance:'Distance from surface 1 (mm)',screenLegend:'Screen',names:['Spherical','Coma','Astigmatism','Petzval','Distortion'],surf1:'Surface 1',surf2:'Surface 2',total:'Total',para:'Paraxial plane',screenPsf:'Screen plane',both:'Screen at paraxial plane',loading:'Calculating…',limits:'This plane is outside the paraxial approximation for the exit pupil.',sample:'This phase requires more sampling. Reduce the aperture or move the screen closer to the paraxial plane.',failed:'Could not compute the PSF for this setting.',energy:'Energy within the ±40 µm square',invalid:'Use valid numeric values within the displayed ranges.',shape:'The aperture must fit inside the lens, and the two surfaces must not intersect.',noFocus:'There is no real paraxial image within the screen range.'},
es:{lab:'Laboratorio virtual de óptica',collection:'Catálogo de simuladores',intro:'Explora cómo los sistemas ópticos forman imágenes con experimentos interactivos.',basic:'Simulador básico',seidel:'Aberraciones de Seidel',desc:'Traza rayos a través de una lente de dos superficies, compara los cinco coeficientes de Seidel y observa la imagen de un punto de luz.',open:'Abrir simulador',back:'← Todos los simuladores',focus:'Pantalla al plano paraxial',reset:'Restaurar',raytitle:'Trazado de rayos · plano meridional',bartitle:'Coeficientes de Seidel · total (µm)',note:'La PSF usa una pupila circular uniforme y difracción escalar con aberraciones primarias de Seidel. Al cambiar la longitud de onda, los índices de refracción no se ajustan automáticamente.',f1:'Forma cara 1',f2:'Forma cara 2',R1:'|R₁| (mm)',R2:'|R₂| (mm)',t:'Espesor (mm)',edge:'Radio físico (mm)',a:'Radio de apertura (mm)',n1:'Índice antes de la lente',ng:'Índice de la lente',n3:'Índice después de la lente',field:'Campo (rad)',far:'Objeto lejano',s:'Distancia al objeto (mm)',screen:'Pantalla desde cara 2 (mm)',zone:'Mostrar rayos de',rays:'Número de rayos',nm:'Longitud de onda (nm)',crop:'Comparar en ±40 µm',detail:'Ver aportes de cada cara',pos:'Radio positivo',plane:'Plana',neg:'Radio negativo',all:'Toda la apertura',center:'Centro',edgezone:'Borde',height:'Altura (mm)',distance:'Distancia desde cara 1 (mm)',screenLegend:'Pantalla',names:['Esférica','Coma','Astigmatismo','Petzval','Distorsión'],surf1:'Cara 1',surf2:'Cara 2',total:'Total',para:'Plano paraxial',screenPsf:'Plano de la pantalla',both:'Pantalla en el plano paraxial',loading:'Calculando…',limits:'Este plano queda fuera de la aproximación paraxial de la pupila de salida.',sample:'La fase necesita más muestreo. Reduce la apertura o acerca la pantalla al plano paraxial.',failed:'No se pudo calcular la PSF para estos valores.',energy:'Energía dentro del cuadrado de ±40 µm',invalid:'Introduce valores numéricos válidos dentro de los rangos indicados.',shape:'La apertura debe caber en la lente y las dos caras no deben cruzarse.',noFocus:'No hay una imagen paraxial real dentro del recorrido de la pantalla.'},
fr:{lab:'Laboratoire virtuel d’optique',collection:'Catalogue de simulateurs',intro:'Explorez la formation des images par les systèmes optiques à travers des expériences interactives.',basic:'Simulateur de base',seidel:'Aberrations de Seidel',desc:'Tracez des rayons à travers une lentille à deux surfaces, comparez les cinq coefficients de Seidel et observez l’image d’un point lumineux.',open:'Ouvrir le simulateur',back:'← Tous les simulateurs',focus:'Placer l’écran au plan paraxial',reset:'Réinitialiser',raytitle:'Tracé des rayons · plan méridien',bartitle:'Coefficients de Seidel · total (µm)',note:'La PSF repose sur une pupille circulaire uniforme et la diffraction scalaire avec les aberrations primaires de Seidel. Les indices de réfraction ne sont pas ajustés automatiquement avec la longueur d’onde.',f1:'Forme de la face 1',f2:'Forme de la face 2',R1:'|R₁| (mm)',R2:'|R₂| (mm)',t:'Épaisseur (mm)',edge:'Rayon de la lentille (mm)',a:'Rayon d’ouverture (mm)',n1:'Indice avant la lentille',ng:'Indice de la lentille',n3:'Indice après la lentille',field:'Angle de champ (rad)',far:'Objet à l’infini',s:'Distance de l’objet (mm)',screen:'Écran depuis la face 2 (mm)',zone:'Afficher les rayons',rays:'Nombre de rayons',nm:'Longueur d’onde (nm)',crop:'Comparer à ±40 µm',detail:'Voir la contribution des faces',pos:'Rayon positif',plane:'Plane',neg:'Rayon négatif',all:'Toute l’ouverture',center:'Centraux',edgezone:'Marginaux',height:'Hauteur (mm)',distance:'Distance depuis la face 1 (mm)',screenLegend:'Écran',names:['Sphérique','Coma','Astigmatisme','Petzval','Distorsion'],surf1:'Face 1',surf2:'Face 2',total:'Total',para:'Plan paraxial',screenPsf:'Plan de l’écran',both:'Écran dans le plan paraxial',loading:'Calcul en cours…',limits:'Ce plan dépasse le domaine de l’approximation paraxiale de la pupille de sortie.',sample:'La phase nécessite plus d’échantillons. Réduisez l’ouverture ou rapprochez l’écran du plan paraxial.',failed:'Impossible de calculer la PSF avec ces paramètres.',energy:'Énergie dans le carré de ±40 µm',invalid:'Saisissez des valeurs numériques valides dans les plages indiquées.',shape:'L’ouverture doit être comprise dans la lentille et les faces ne doivent pas se croiser.',noFocus:'Il n’y a pas d’image paraxiale réelle dans la plage de l’écran.'}
};
const $=x=>document.querySelector(x), param=new URLSearchParams(location.search);
const lang=Object.hasOwn(D,param.get('lang'))?param.get('lang'):'en',T=D[lang];
const entries=[{id:'seidel-basic',title:'seidel',description:'desc',level:'basic'}];
const selected=entries.find(x=>x.id===param.get('sim'));
const href=id=>'?lang='+lang+(id?'&sim='+id:'');
document.documentElement.lang=lang;
document.querySelectorAll('[data-t]').forEach(el=>el.textContent=T[el.dataset.t]);
document.querySelectorAll('nav a').forEach(a=>{const l=a.lang;a.href='?lang='+l+(selected?'&sim='+selected.id:'');if(l===lang)a.setAttribute('aria-current','true')});
$('#home').href=lang==='en'?'/':'/'+lang+'/';
$('.back').href=href();
document.title=(selected?T.seidel+' | ':'')+T.lab+' | Kebin Contreras';
for(const e of entries){const a=document.createElement('article');a.className='card';a.innerHTML='<p class="eyebrow">'+T[e.level]+'</p><h2>'+T[e.title]+'</h2><p>'+T[e.description]+'</p><a href="'+href(e.id)+'">'+T.open+' →</a>';$('#cards').append(a)}
if(selected){$('#catalog').hidden=true;$('#simulator').hidden=false;start()}
function start(){
 const bounds={R1:[1,500,.01],R2:[1,500,.01],t:[.1,40,.01],edge:[.1,25,.1],a:[.1,25,.1],n1:[1,2.5,.00001],ng:[1,2.5,.00001],n3:[1,2.5,.00001],s:[1,10000,1],field:[-.2,.2,.001],screen:[.1,1000,.001],rays:[3,41,1],nm:[400,700,1]};
 const opts={f1:[[1,'pos'],[0,'plane'],[-1,'neg']],f2:[[1,'pos'],[0,'plane'],[-1,'neg']],zone:[['all','all'],['center','center'],['edge','edgezone']]};
 const order=['f1','R1','f2','R2','t','edge','n1','ng','n3','a','far','s','field','screen','zone','rays','nm','crop','detail'];
 const form=$('#controls'), fields={};let worker=null,job=0;
 for(const id of order){
  const label=document.createElement('label');const control=document.createElement(opts[id]?'select':'input');control.id=id;
  if(opts[id])for(const [v,k] of opts[id]){const o=document.createElement('option');o.value=v;o.textContent=T[k];control.append(o)}
  else if(typeof defaults[id]==='boolean'){control.type='checkbox';label.className='check';label.append(control)}
  else{control.type='number';control.min=bounds[id][0];control.max=bounds[id][1];control.step=id==='rays'||id==='nm'?'1':'any';control.inputMode=id==='rays'||id==='nm'?'numeric':'decimal'}
  label.append(T[id]);if(control.type!=='checkbox')label.append(control);
  form.append(label);fields[id]=control;
 }
 function reset(){for(const id of order){const f=fields[id];if(f.type==='checkbox')f.checked=defaults[id];else f.value=id==='screen'?defaults[id].toFixed(5):defaults[id]}update()}
 function read(){
  const p={};
  for(const id of order){const f=fields[id];p[id]=f.type==='checkbox'?f.checked:id==='zone'?f.value:f.value===''?NaN:Number(f.value)}
  fields.s.disabled=p.far;fields.R1.disabled=!p.f1;fields.R2.disabled=!p.f2;
  for(const [id,[lo,hi]] of Object.entries(bounds)){if(!fields[id].disabled&&(!Number.isFinite(p[id])||p[id]<lo||p[id]>hi||(fields[id].step==='1'&&!Number.isInteger(p[id]))))throw Error(T.invalid)}
  const g=geometry(p);
  if(p.a>p.edge||p.edge>=Math.min(Math.abs(g.r1),Math.abs(g.r2))||p.t+sag(g.r2,p.edge)-sag(g.r1,p.edge)<=0)throw Error(T.shape);
  return {p,g};
 }
 function error(msg){const e=$('#error');e.hidden=!msg;e.textContent=msg}
 function update(){
  job++;if(worker){worker.terminate();worker=null}const seq=job;
  const host=$('#psfs');host.replaceChildren();$('#detail').replaceChildren();
  let p,g;try{({p,g}=read());error('')}catch(e){error(e.message);$('#rayplot').replaceChildren();$('#bars').replaceChildren();return}
  drawRay(p,g);drawBars(g);
  if(p.detail)$('#detail').innerHTML='<table><thead><tr><th>µm</th><th>'+T.surf1+'</th><th>'+T.surf2+'</th><th>'+T.total+'</th></tr></thead><tbody>'+T.names.map((name,i)=>'<tr><th>'+name+'</th>'+[g.faces[0][i],g.faces[1][i],g.total[i]].map(v=>'<td>'+num(v)+'</td>').join('')+'</tr>').join('')+'</tbody></table>';
  const atFocus=Math.abs(g.q-p.screen)<.001;
  const planes=atFocus?[[T.both,g.q]]:[[T.para,g.q],[T.screenPsf,p.screen]];
  const queue=[];
  for(const [title,z] of planes){
    const box=document.createElement('figure'),caption=document.createElement('figcaption'),inner=document.createElement('div');caption.textContent='PSF · '+title+' · '+p.nm+' nm';box.append(caption,inner);host.append(box);
    const spec=psfSpec(p,g,z);
    if(!spec)inner.textContent=T.limits;else if(spec.m>4096)inner.textContent=T.sample;else{inner.textContent=T.loading;queue.push([spec,inner])}
  }
  function next(){if(seq!==job||!queue.length)return;const [spec,inner]=queue.shift();
   try{worker=new Worker('./diffraction.js',{type:'module'});
    function done(data){if(seq!==job)return;worker.terminate();worker=null;if(data)paintPsf(inner,data,p);else inner.textContent=T.failed;next()}
    worker.onmessage=e=>done(e.data);worker.onerror=()=>done(null);worker.postMessage({spec,crop:p.crop});
   }catch{inner.textContent=T.failed;next()}
  }
  next();
 }
 $('#focus').addEventListener('click',()=>{try{const {g}=read();if(!Number.isFinite(g.q)||g.q<.1||g.q>1000)throw Error(T.noFocus);fields.screen.value=g.q.toFixed(5);update()}catch(e){error(e.message)}});
 $('#reset').addEventListener('click',reset);
 form.addEventListener('change',update);form.addEventListener('submit',e=>{e.preventDefault();document.activeElement?.blur()});
 form.addEventListener('keydown',e=>{if(e.key==='Enter'&&e.target.type==='number'){e.preventDefault();e.target.blur()}});
 reset();
}
const num=v=>new Intl.NumberFormat(lang,{maximumSignificantDigits:4}).format(v);
function node(name,attrs,txt){const e=document.createElementNS('http://www.w3.org/2000/svg',name);for(const [k,v] of Object.entries(attrs))e.setAttribute(k,v);if(txt!==undefined)e.textContent=txt;return e}
function drawRay(p,g){
 const svg=$('#rayplot');svg.replaceChildren();svg.setAttribute('aria-label',T.raytitle);const add=(...args)=>svg.append(node(...args));
 const left=Math.max(-g.s,Math.min(-10,sag(g.r1,p.edge)-2,-Math.min(.25*(p.t+p.screen),60)));
 const end=p.t+p.screen,right=Math.max(end+Math.max(2,.07*end),p.t+sag(g.r2,p.edge)+2);
 let fractions=Array.from({length:p.rays},(_,i)=>-1+2*i/(p.rays-1));
 if(p.zone==='center')fractions=fractions.map(x=>x*.3);
 if(p.zone==='edge'){const n=Math.max(2,Math.floor(p.rays/2));fractions=Array.from({length:2*n},(_,i)=>i<n?-.75-.25*(n-1-i)/(n-1):.75+.25*(i-n)/(n-1))}
 const rs=fractions.map(f=>trace(f*p.a,p,g,left));
 const yMax=1.16*Math.max(p.edge,...rs.flat().map(a=>Math.abs(a[1])));
 const X=x=>61+(x-left)*522/(right-left),Y=y=>153-y*126/yMax;
 const l=(x1,y1,x2,y2,stroke,dash)=>add('line',{x1,y1,x2,y2,stroke,...(dash?{'stroke-dasharray':dash}:{})});
 l(61,153,583,153,'#92a5a2','4 4');l(61,279,583,279,'#92a5a2');l(61,27,61,279,'#92a5a2');
 for(let i=0;i<=5;i++){const q=left+(right-left)*i/5;l(X(q),279,X(q),284,'#92a5a2');add('text',{x:X(q),y:302,'text-anchor':'middle'},num(q))}
 for(let i=-2;i<=2;i++){const q=i*yMax/2;l(56,Y(q),61,Y(q),'#92a5a2');add('text',{x:50,y:Y(q)+4,'text-anchor':'end'},num(q))}
 const hs=Array.from({length:101},(_,i)=>-p.edge+2*p.edge*i/100),pts=(a)=>a.map(([z,h])=>X(z)+','+Y(h)).join(' ');
 add('polygon',{points:pts(hs.map(h=>[sag(g.r1,h),h]).concat([...hs].reverse().map(h=>[p.t+sag(g.r2,h),h]))),fill:'#d4eaf2',stroke:'#385c6e','stroke-width':1.6});
 l(X(end),27,X(end),279,'#a75e37','5 4');
 for(const ray of rs){
  add('polyline',{points:pts(ray.slice(0,2)),fill:'none',stroke:'#7996ac','stroke-opacity':.8});
  if(ray.length>2)add('polyline',{points:pts(ray.slice(1)),fill:'none',stroke:'#007e70','stroke-width':1.35});
  const [z,h]=ray.at(-1);
  add('circle',{cx:X(z),cy:Y(h),r:ray.length===4?2:2.5,fill:ray.length===4?'#a75e37':'#a12d4e'});
 }
 if(g.q>0&&g.q+p.t<right&&Math.abs(g.yi)<yMax)add('circle',{cx:X(g.q+p.t),cy:Y(g.yi),r:4,fill:'#792e62'});
 add('text',{x:325,y:329,'text-anchor':'middle'},T.distance);
 add('text',{transform:'translate(15 153) rotate(-90)','text-anchor':'middle'},T.height);
 add('text',{x:X(end)-4,y:19,'text-anchor':'end'},T.screenLegend);
}
function drawBars(g){
 const svg=$('#bars');svg.replaceChildren();svg.setAttribute('aria-label',T.bartitle);const add=(...args)=>svg.append(node(...args));
 const m=Math.max(.01,...g.total.map(Math.abs)),lo=Math.min(0,...g.total)-.33*m,hi=Math.max(0,...g.total)+.33*m,X=v=>138+282*(v-lo)/(hi-lo);
 add('line',{x1:X(0),x2:X(0),y1:15,y2:260,stroke:'#93a8a3'});
 g.total.forEach((v,i)=>{const y=33+48*i,xx=X(v),zero=X(0);
  add('text',{x:130,y:y+5,'text-anchor':'end'},T.names[i]);
  add('rect',{x:Math.min(zero,xx),y:y-10,width:Math.abs(xx-zero),height:20,rx:2,fill:v>=0?'#007e70':'#a75e37'});
  add('text',{x:xx+(v>=0?6:-6),y:y+5,'text-anchor':v>=0?'start':'end'},num(v));
 });
 add('text',{x:X(0),y:284,'text-anchor':'middle'},'0 µm');
}
function paintPsf(inner,b,p){
 const c=document.createElement('canvas');c.width=c.height=b.size;c.setAttribute('role','img');c.setAttribute('aria-label',inner.previousElementSibling.textContent);
 const ctx=c.getContext('2d'),out=ctx.createImageData(b.size,b.size),nm=p.nm;
 const rgb=p.crop?[255,255,255]:nm<450?[164,106,246]:nm<495?[76,153,250]:nm<570?[69,224,145]:nm<590?[245,224,90]:nm<620?[253,174,107]:[255,106,104];
 for(let i=0;i<b.pixels.length;i++){const q=b.pixels[i]/255;for(let j=0;j<3;j++)out.data[4*i+j]=Math.round(q*rgb[j]);out.data[4*i+3]=255}
 ctx.putImageData(out,0,0);
 if(!p.crop){const m=b.size/2;ctx.strokeStyle='#ffffff95';ctx.beginPath();ctx.moveTo(m-5,m);ctx.lineTo(m+5,m);ctx.moveTo(m,m-5);ctx.lineTo(m,m+5);ctx.stroke()}
 const axis=document.createElement('div');axis.className='psf-axis';axis.innerHTML='<span>−'+num(b.edge)+' µm</span><span>0</span><span>+'+num(b.edge)+' µm</span>';
 inner.replaceChildren(c,axis);
 if(p.crop&&b.energy!==null){const line=document.createElement('p');line.textContent=T.energy+': '+num(100*b.energy)+' %';inner.append(line)}
}
