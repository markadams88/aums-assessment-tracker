// AUMS Assessment Tracker
"use strict";
const LOGO="data:image/png;base64,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";
// ================= config, client and state =================
const CFG=window.AUMS_CONFIG||{};
const STATIC=window.STATIC;const DATA=STATIC;
const sb=(CFG.url&&CFG.anonKey&&window.supabase)?window.supabase.createClient(CFG.url,CFG.anonKey):null;
const MOD={};STATIC.modules.forEach(m=>MOD[m.code]=m);
const KEY='aums-tracker-ui-v1';
let S={stab:'home',ttab:'report',aid:null,cls:'all',sAid:null,recAid:null,tStudent:null,bankMod:'C&M 00',bankLes:'all',editing:null,authTab:'signup',view:location.hash==='#staff'?'staff':'student',busy:false,recovery:false};
try{const saved=JSON.parse(localStorage.getItem(KEY)||'null');if(saved)Object.assign(S,saved,{editing:null,tStudent:null,busy:false,recovery:false,view:location.hash==='#staff'?'staff':'student'});}catch(e){}
function save(){try{localStorage.setItem(KEY,JSON.stringify({stab:S.stab,ttab:S.ttab,aid:S.aid,cls:S.cls,sAid:S.sAid,bankMod:S.bankMod,authTab:S.authTab}))}catch(e){}}
// DB cache
let ROLE=null,ME=null,LOADED=false;
let DB={classes:[],students:[],assessments:[],resp:{},agg:{},done:new Set(),doneAll:{}};
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const pct=(g,m)=>m?Math.round(100*g/m):null;
const avg=a=>a.length?a.reduce((x,y)=>x+y,0)/a.length:null;
const median=a=>{if(!a.length)return null;const b=[...a].sort((x,y)=>x-y),h=b.length>>1;return b.length%2?b[h]:(b[h-1]+b[h])/2};
function st(p){if(p==null)return 'plain';return p>=70?'good':p>=50?'warn':'bad'}
const ST_LABEL={good:'Secure',warn:'Developing',bad:'Priority',plain:'No data'};
const SICON={good:'<svg viewBox="0 0 10 10"><path d="M1.5 5.2 4 7.6 8.6 2.4" fill="none" stroke="currentColor" stroke-width="1.9"/></svg>',warn:'<svg viewBox="0 0 10 10"><rect x="1" y="4" width="8" height="2.2" rx="1" fill="currentColor"/></svg>',bad:'<svg viewBox="0 0 10 10"><path d="M5 1 9.4 8.8H.6Z" fill="currentColor"/></svg>',plain:''};
const chip=(p,txt)=>`<span class="chip ${st(p)}">${SICON[st(p)]}${txt??ST_LABEL[st(p)]}</span>`;
const pc=p=>p==null?'–':p+'%';
function classes(){return DB.classes}
function students(){return DB.students}
function stu(id){return DB.students.find(s=>s.id===id)}
function initials(n){return (n||'?').split(/\s+/).map(w=>w[0]).slice(0,2).join('').toUpperCase()}
function assessments(){return [...DB.assessments].sort((x,y)=>(x.date||'').localeCompare(y.date||'')||x.id.localeCompare(y.id))}
function asm(id){return assessments().find(a=>a.id===id)||assessments()[0]}
function respMap(aid){return DB.resp[aid]||{}}
function sidsIn(cls){return students().filter(s=>cls==='all'||s.cls===cls).map(s=>s.id)}
function submitted(aid,cls){const r=respMap(aid);return sidsIn(cls).filter(id=>r[id])}
function lessonKey(k){const [code,n]=k.split('-');return {code,n:+n,name:MOD[code]?.lessons?.[+n-1]||('Lesson '+n)}}
function lessonLabel(k,short){const L=lessonKey(k);return short?`${L.code} L${L.n}`:`${L.code} L${L.n} · ${L.name}`}
function modLabel(code){const m=MOD[code];return m?`${code} ${m.name}`:code}
function keyName(k){return k.includes('-')?lessonKey(k).name:(MOD[k]?.name||k)}
function keyCode(k){return k.includes('-')?lessonLabel(k,true):k}
function qlab(p){return p.q+(p.p?`(${p.p})`:'')}
function fmDate(d){try{return new Date(d+'T12:00').toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}catch(e){return d}}
// class comparison: teachers compute from real rows, students get anonymous class totals
function classGroup(a,cls,by){
  if(ROLE==='teacher')return groupStats(a,submitted(a.id,cls),by);
  const ag=DB.agg[a.id]||{};const out={};
  a.parts.forEach(p=>{const k=by==='lesson'?(p.lessons[0]||null):p.module;if(!k)return;const x=ag[p.id];out[k]=out[k]||{k,got:0,max:0,parts:[]};out[k].parts.push(p);if(x&&x.n){out[k].got+=x.t;out[k].max+=x.n*p.marks}});
  Object.values(out).forEach(o=>o.pct=pct(o.got,o.max));return out}
function classAvg(a,cls){
  if(ROLE==='teacher'){const s=submitted(a.id,cls);return s.length?avg(s.map(id=>score(a,id))):null}
  const ag=DB.agg[a.id];if(!ag)return null;let t=0,any=false;a.parts.forEach(p=>{const x=ag[p.id];if(x&&x.n){t+=x.t/x.n;any=true}});return any?t:null}
function classCount(a,cls){if(ROLE==='teacher')return submitted(a.id,cls).length;const ag=DB.agg[a.id];return ag?Math.max(0,...Object.values(ag).map(x=>x.n)):0}
function isDone(sid,qid){return sid===ME?.id?DB.done.has(qid):!!(DB.doneAll[sid]&&DB.doneAll[sid].has(qid))}

// stats
function partStats(a,sids){const r=respMap(a.id);return a.parts.map(p=>{let g=0,n=0;sids.forEach(id=>{const x=r[id]?.ans?.[p.id];if(x){g+=x.s;n++}});return {p,got:g,max:n*p.marks,n,pct:pct(g,n*p.marks)}})}
function groupStats(a,sids,by){const out={};const r=respMap(a.id);
  a.parts.forEach(p=>{const k=by==='lesson'?(p.lessons[0]||null):p.module;if(!k)return;out[k]=out[k]||{k,got:0,max:0,parts:[]};out[k].parts.push(p);
    sids.forEach(id=>{const x=r[id]?.ans?.[p.id];if(x){out[k].got+=x.s;out[k].max+=p.marks}})});
  Object.values(out).forEach(o=>o.pct=pct(o.got,o.max));return out}
function score(a,sid){const x=respMap(a.id)[sid];if(!x)return null;return a.parts.reduce((t,p)=>t+(x.ans[p.id]?.s||0),0)}
function sortLessons(keys){return keys.sort((a,b)=>{const A=lessonKey(a),B=lessonKey(b);return A.code.localeCompare(B.code)||A.n-B.n})}
function hasLessons(a){return a.parts.some(p=>p.lessons.length)}
function reasonTotals(a,sids){const r=respMap(a.id);const t={},who={};sids.forEach(id=>{const x=r[id];if(!x)return;a.parts.forEach(p=>Object.entries(x.ans[p.id]?.r||{}).forEach(([k,v])=>{t[k]=(t[k]||0)+v;(who[k]=who[k]||new Set).add(id)}))});return {t,who}}
function reasonsForParts(a,sids,parts){const r=respMap(a.id);const t={};sids.forEach(id=>parts.forEach(p=>Object.entries(r[id]?.ans?.[p.id]?.r||{}).forEach(([k,v])=>t[k]=(t[k]||0)+v)));return Object.entries(t).sort((x,y)=>y[1]-x[1])}
function priorities(a,sids){const g=groupStats(a,sids,hasLessons(a)?'lesson':'module');
  return Object.values(g).filter(o=>o.max).map(o=>{const lost=o.max-o.got;const below=sids.filter(id=>{const s=groupStats(a,[id],hasLessons(a)?'lesson':'module')[o.k];return s&&s.max&&s.pct<50});return Object.assign(o,{lost,below,why:reasonsForParts(a,sids,o.parts)[0]})}).sort((x,y)=>y.lost-x.lost)}
function weakLessons(a,sid){const x=respMap(a.id)[sid];if(!x)return [];const g={};
  a.parts.forEach(p=>{const k=p.lessons[0]||p.module;const r=x.ans[p.id];if(!r)return;g[k]=g[k]||{k,got:0,max:0,parts:[],conf:[]};g[k].got+=r.s;g[k].max+=p.marks;g[k].parts.push(p);g[k].conf.push(r.c)});
  return Object.values(g).map(o=>Object.assign(o,{pct:pct(o.got,o.max),lost:o.max-o.got})).sort((a,b)=>a.pct-b.pct||b.lost-a.lost)}
function openFor(sid){const s=stu(sid);return assessments().filter(a=>s&&a.classes.includes(s.cls)&&a.status!=='draft')}
function myAssessments(sid){return assessments().filter(a=>respMap(a.id)[sid])}

// question bank
const BANK=STATIC.bank.map((b,i)=>Object.assign({i},b));
function bankFor(code,n,limit,excludeDone=true,sid){let pool=BANK.filter(b=>b.mod===code);
  let exact=n?pool.filter(b=>(b.les||[]).includes(n)):[];let rest=pool.filter(b=>!exact.includes(b));
  const rank=b=>(b.spec==='H640'?0:1)+(b.used?2:0)+(excludeDone&&isDone(sid,b.id)?5:0);
  exact.sort((a,b)=>rank(a)-rank(b)||a.i-b.i);rest.sort((a,b)=>rank(a)-rank(b)||a.i-b.i);
  return {items:[...exact,...rest].slice(0,limit),exact:exact.length,pool:pool.length}}
function bankSrc(b){return b.spec==='H640'?`${b.series} · ${b.paper} · ${b.q}`:`${b.paper} · ${b.series} · ${b.q}`}
function bankSpec(b){return b.spec==='H640'?'OCR MEI H640':'Legacy MEI'}
function qItem(b,sid,interactive=true,showUsed=false){const done=isDone(sid,b.id);
  return `<div class="q ${done?'done':''}">${interactive?`<input type="checkbox" id="rq-${b.id}" data-act="done" data-sid="${sid}" data-q="${b.id}" ${done?'checked':''} aria-label="Mark ${esc(bankSrc(b))} as done">`:'<span></span>'}<div><div class="src"><span class="sp">${bankSpec(b)}</span> · ${esc(bankSrc(b))}${b.marks?` · ${b.marks} marks`:''}${showUsed&&b.used?` · used in ${esc(b.used)}`:''}</div><div class="d mj">${esc(b.desc)}</div>${typeof hasQ==='function'&&hasQ(b.id)?`<div class="qa">${sheetBtns([b.id],bankSrc(b).replace(/ · /g,' '),true)}</div>`:''}</div></div>`}

// ---------- past-paper PDFs ----------
// QIDX (qindex.js): bank id -> {q:[file,[[page,x0,y0,x1,y1],...]], m:[file,crops], mm:'full'|'shared'}
const QX=window.QIDX||{};
const hasQ=id=>!!QX[id]?.q, hasM=id=>!!QX[id]?.m;
let PDFLIB_P=null;
function loadPdfLib(){if(window.PDFLib)return Promise.resolve();if(PDFLIB_P)return PDFLIB_P;
  PDFLIB_P=new Promise((res,rej)=>{const s=document.createElement('script');s.src='pdf-lib.min.js';s.onload=res;s.onerror=()=>{PDFLIB_P=null;rej(new Error('pdf-lib'))};document.head.appendChild(s)});return PDFLIB_P}
const SRC_CACHE={};
async function paperBytes(name){
  if(window.__PAPER_BASE)return fetch(window.__PAPER_BASE+encodeURIComponent(name)).then(r=>{if(!r.ok)throw new Error('fetch '+name);return r.arrayBuffer()});
  const {data,error}=await sb.storage.from('papers').download(name);if(error||!data)throw new Error('papers '+name+' '+(error?.message||''));return data.arrayBuffer()}
async function srcDoc(name){if(!SRC_CACHE[name])SRC_CACHE[name]=paperBytes(name).then(b=>PDFLib.PDFDocument.load(b)).catch(e=>{delete SRC_CACHE[name];throw e});return SRC_CACHE[name]}
const ascii=s=>String(s||'').replace(/[–—]/g,'-').replace(/[‘’]/g,"'").replace(/[“”]/g,'"').replace(/\$[^$]*\$/g,m=>m.slice(1,-1).replace(/\\[a-zA-Z]+/g,'').replace(/[{}^_]/g,'')).replace(/[^\x20-\x7E]/g,'');
function qLabel(b){return b.spec==='H640'?`H640 ${b.paper} ${b.series} ${b.q}`:`${b.paper} ${b.series} ${b.q}`}
async function makeSheet(ids,kind,title){
  ids=[...new Set(ids)].filter(id=>kind==='q'?hasQ(id):QX[id]);
  if(!ids.length){toast(kind==='q'?'No question papers for these yet':'No mark schemes for these yet');return}
  toast(kind==='q'?'Making your question sheet…':'Making the mark scheme…');
  try{await loadPdfLib()}catch(e){toast("Couldn't load the PDF maker. Check your connection.");return}
  const {PDFDocument,StandardFonts,rgb}=PDFLib;
  const out=await PDFDocument.create();const F=await out.embedFont(StandardFonts.Helvetica),FB=await out.embedFont(StandardFonts.HelveticaBold);
  const PURPLE=rgb(97/255,0,100/255),GREY=rgb(.42,.42,.46),M=36;
  let page=null,y=0,W=0,H=0,land=false,pno=0;
  const newPage=(l)=>{land=!!l;W=land?841.89:595.28;H=land?595.28:841.89;page=out.addPage([W,H]);pno++;y=H-M;
    page.drawText('AUMS Maths',{x:M,y:18,size:7.5,font:FB,color:PURPLE});page.drawText(ascii(`${kind==='q'?'Questions':'Mark scheme'} - ${title}`).slice(0,90),{x:M+52,y:18,size:7.5,font:F,color:GREY});
    page.drawText(`Page ${pno}`,{x:W-M-30,y:18,size:7.5,font:F,color:GREY});
    page.drawText('Past paper material (c) OCR. For use by AUMS students only.',{x:M,y:9,size:6,font:F,color:GREY})};
  // title block, in the orientation of the first item
  let firstLand=false;if(kind==='m'){const e0=QX[ids[0]];if(e0?.m){const c=e0.m[1][0];firstLand=c&&(c[3]-c[1])>600}}
  newPage(firstLand);
  page.drawRectangle({x:0,y:H-64,width:W,height:64,color:PURPLE});
  page.drawText(ascii(kind==='q'?'Practice questions':'Mark scheme'),{x:M,y:H-32,size:18,font:FB,color:rgb(1,1,1)});
  page.drawText(ascii(`${title} - ${ids.length} question${ids.length>1?'s':''} - ${new Date().toLocaleDateString('en-GB',{day:'numeric',month:'long',year:'numeric'})}`).slice(0,110),{x:M,y:H-50,size:9.5,font:F,color:rgb(1,1,1)});
  y=H-84;
  if(kind==='q'){const tot=ids.reduce((t,id)=>t+(+(BANK.find(b=>b.id===id)||{}).marks||0),0);
    page.drawText(ascii(`Answer in your book or on paper. Show your working.${tot?` Total for the current-spec questions: ${tot} marks.`:''}`),{x:M,y,size:9,font:F,color:GREY});y-=18}
  let n=0;
  for(const id of ids){n++;const b=BANK.find(x=>x.id===id);const e=QX[id];const ent=kind==='q'?e.q:e.m;
    let note='';
    if(kind==='m'&&!ent)note='No mark scheme for this paper in the bank yet.';
    else if(kind==='m'&&e.mm==='full')note=`The mark scheme below is for the whole paper. Find question ${b.q.replace('Q','')}.`;
    else if(kind==='m'&&e.mm==='shared')note='This section also covers the question next to it.';
    if(kind==='q'&&/^\[Comprehension\]/.test(b.desc||''))note='This question uses the article from the pre-release insert.';
    if(kind==='q'&&e.q&&/insert/i.test(b.desc||''))note=note||'Part of this question was answered on an insert.';
    // work out size of first crop to keep the label with it
    let crops=[];if(ent){const d=await srcDoc(ent[0]);crops=ent[1].map(c=>({d,c}))}
    const wantLand=kind==='m'?(crops.length?(crops[0].c[3]-crops[0].c[1])>600:land):false;
    const label=ascii(`${n}. ${qLabel(b)}${b.marks?` - ${b.marks} marks`:''}`);
    const labH=note?30:18;
    const fit=(c)=>{const cw=c[3]-c[1],ch=c[4]-c[2];const s=Math.min(1,(W-2*M)/cw);return {s,w:cw*s,h:ch*s}};
    if(wantLand!==land)newPage(wantLand);
    const f0=crops.length?fit(crops[0].c):{h:0};
    if(y-labH-Math.min(f0.h,H*0.35)<M+20)newPage(wantLand);
    page.drawRectangle({x:M,y:y-14,width:W-2*M,height:16,color:rgb(.96,.93,.96)});
    page.drawRectangle({x:M,y:y-14,width:3,height:16,color:PURPLE});
    page.drawText(label.slice(0,95),{x:M+8,y:y-9.5,size:9,font:FB,color:PURPLE});
    y-=labH-(note?0:0);
    if(note){page.drawText(ascii(note),{x:M+8,y:y+3,size:8,font:F,color:GREY})}
    y-=4;
    for(const {d,c} of crops){const [pi,x0,y0,x1,y1]=c;const sp=d.getPage(pi);const ph=sp.getHeight();
      let {s,w,h}=fit(c);const avail=H-2*M-30;if(h>avail){s*=avail/h;w=(x1-x0)*s;h=avail}
      if(y-h<M+16)newPage(land);
      const ep=await out.embedPage(sp,{left:x0,bottom:ph-y1,right:x1,top:ph-y0});
      page.drawPage(ep,{x:M+(W-2*M-w)/2,y:y-h,width:w,height:h});y-=h+6}
    y-=14}
  const bytes=await out.save();const blob=new Blob([bytes],{type:'application/pdf'});const url=URL.createObjectURL(blob);
  const a=document.createElement('a');a.href=url;a.download=ascii(`AUMS ${kind==='q'?'questions':'mark scheme'} - ${title}`).replace(/[\\/:*?"<>|]/g,'').slice(0,80)+'.pdf';document.body.appendChild(a);a.click();a.remove();
  setTimeout(()=>URL.revokeObjectURL(url),60000);toast('PDF ready')}
function sheetBtns(ids,title,small){ids=ids.filter(hasQ);if(!ids.length)return '';const cls=small?'btn sec xs':'btn sec sm';const t=esc(title);
  return `<span class="pbtns"><button class="${cls}" data-act="qpdf" data-kind="q" data-ids="${ids.join(',')}" data-title="${t}">${IC.pages} Questions PDF</button><button class="${cls}" data-act="qpdf" data-kind="m" data-ids="${ids.join(',')}" data-title="${t}">${IC.check||IC.pages} Mark scheme</button></span>`}

// ---------- combined results across chosen assessments ----------
// S.cmbSel: Set of assessment ids switched on (null = all). S.cmbOpen: Set of topic codes expanded. S.topicSel: Set of topic/lesson keys ticked for export.
function cmbAssessments(pool){const on=S.cmbSel;return on?pool.filter(a=>on.has(a.id)):pool}
function cmbToggles(pool){const on=S.cmbSel;S.cmbPool=pool.map(a=>a.id);
  return `<div class="tgl" role="group" aria-label="Assessments to include">${pool.map(a=>{const p=!on||on.has(a.id);return `<button type="button" class="tg" data-act="cmbtog" data-aid="${a.id}" aria-pressed="${p}">${p?'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" aria-hidden="true"><path d="M5 12l5 5 9-10"/></svg>':''}<span>${esc(a.id)}</span></button>`}).join('')}
  <span class="tgx"><button type="button" class="linkbtn" data-act="cmball">All</button> · <button type="button" class="linkbtn" data-act="cmbnone">None</button></span></div>`}
// add up got/max for each topic (and lesson) over the chosen assessments
function cmbStats(as,statFn){const T={};
  as.forEach(a=>{const gm=statFn(a,'module'),gl=statFn(a,'lesson');
    Object.values(gm).forEach(o=>{const t=T[o.k]=T[o.k]||{k:o.k,got:0,max:0,in:[],les:{}};if(o.max){t.got+=o.got;t.max+=o.max;t.in.push(a.id)}});
    Object.values(gl).forEach(o=>{const code=o.k.split('-')[0];const t=T[code]=T[code]||{k:code,got:0,max:0,in:[],les:{}};const l=t.les[o.k]=t.les[o.k]||{k:o.k,got:0,max:0,in:[]};if(o.max){l.got+=o.got;l.max+=o.max;l.in.push(a.id)}})});
  Object.values(T).forEach(t=>{t.pct=pct(t.got,t.max);Object.values(t.les).forEach(l=>l.pct=pct(l.got,l.max))});return T}
const modOrder=c=>{const i=STATIC.modules.findIndex(m=>m.code===c);return i<0?999:i};
// cols: [{name, stat:(a,by)=>groupStats-like}] first col is the main one
function combinedCard({pool,cols,sid,isT,title,hint}){
  if(!pool.length)return '';
  const as=cmbAssessments(pool);
  const data=cols.map(c=>cmbStats(as,c.stat));const main=data[0];
  let keys=Object.keys(main).filter(k=>main[k].max);
  const sort=S.cmbSort||'sol';
  keys.sort(sort==='weak'?(x,y)=>main[x].pct-main[y].pct:(x,y)=>modOrder(x)-modOrder(y));
  const tot=keys.reduce((o,k)=>{o.g+=main[k].got;o.m+=main[k].max;return o},{g:0,m:0});
  S.topicSel=S.topicSel||new Set();S.cmbOpen=S.cmbOpen||new Set();
  const tick=(k,lab)=>`<input type="checkbox" data-act="tsel" data-k="${esc(k)}" ${S.topicSel.has(k)?'checked':''} aria-label="Pick ${esc(lab)} for export">`;
  const rowsHtml=keys.map(k=>{const t=main[k];const m=MOD[k];const open=S.cmbOpen.has(k);const lk=sortLessons(Object.keys(t.les).filter(x=>t.les[x].max));
    let r=`<tr class="${S.topicSel.has(k)?'picked':''}"><td class="ck">${tick(k,m?.name||k)}</td><td>${lk.length?`<button type="button" class="exp" data-act="cmbopen" data-k="${esc(k)}" aria-expanded="${open}" aria-label="Show lessons">${open?'▾':'▸'}</button>`:'<span class="exp0"></span>'}<span class="strong">${esc(m?.name||k)}</span>${m?.fm?'<span class="fm">FM</span>':''} <span class="xs muted">${esc(k)}</span></td>
      ${data.map(d=>cellTd(d[k]&&d[k].max?d[k].pct:null)).join('')}
      <td class="r small">${t.got}/${t.max}</td><td class="small">${t.in.map(x=>`<span class="chip plain">${esc(x)}</span>`).join(' ')}</td></tr>`;
    if(open)r+=lk.map(l=>{const o=t.les[l];const L=lessonKey(l);return `<tr class="sub ${S.topicSel.has(l)?'picked':''}"><td class="ck">${tick(l,L.name)}</td><td style="padding-left:34px" class="small">L${L.n} ${esc(L.name)}</td>${data.map(d=>{const x=d[k]?.les?.[l];return cellTd(x&&x.max?x.pct:null)}).join('')}<td class="r xs muted">${o.got}/${o.max}</td><td class="xs muted">${o.in.join(', ')}</td></tr>`}).join('');
    return r}).join('');
  // export bar
  const per=+(S.cmbPer||3);
  const picked=[...S.topicSel].filter(k=>{const c=k.split('-')[0];return main[c]});
  const ids=[...new Set(picked.flatMap(k=>{const L=k.includes('-')?lessonKey(k):null;return bankFor(L?L.code:k,L?L.n:null,per,!isT,sid).items.map(b=>b.id)}))];
  const weak=keys.filter(k=>main[k].pct<70);
  const bar=`<div class="selbar ${picked.length?'on':''}"><div><b>${picked.length}</b> topic${picked.length===1?'':'s'} or lesson${picked.length===1?'':'s'} picked${picked.length?` · ${ids.filter(hasQ).length} questions`:''}</div>
    <div class="row" style="gap:8px;flex-wrap:wrap;align-items:center"><label class="fl inl"><span>Per topic</span><select id="cmb-per">${[2,3,4,6].map(n=>`<option ${n===per?'selected':''}>${n}</option>`).join('')}</select></label>
    ${weak.length?`<button class="btn sec sm" data-act="tselweak" data-keys="${esc(weak.join('|'))}">Tick all under 70%</button>`:''}
    ${picked.length?sheetBtns(ids,isT?'Topic questions':'My topic questions')+`<button class="btn sec sm" data-act="tclear">Clear</button>`:''}</div></div>`;
  return `<div class="card cmb"><div class="card-h"><div><h2>${title}</h2><p class="hint">${hint} ${as.length?`Using ${as.length} of ${pool.length} assessment${pool.length===1?'':'s'}.`:''}</p></div>
    <div class="filters"><label class="fl"><span>Order</span><select id="cmb-sort"><option value="sol" ${sort==='sol'?'selected':''}>Scheme of learning</option><option value="weak" ${sort==='weak'?'selected':''}>Weakest first</option></select></label></div></div>
    <div class="card-b"><div class="xs strong muted up" style="margin-bottom:6px">Assessments to include</div>${cmbToggles(pool)}
    ${!as.length?'<div class="empty" style="margin-top:14px">Switch on at least one assessment.</div>':`
    <div class="band" style="margin:14px 0"><div class="metric"><span class="lab">Combined</span><span class="val" style="color:var(--${st(pct(tot.g,tot.m))})">${pct(tot.g,tot.m)}%</span><span class="sub">${tot.g} of ${tot.m} marks</span></div><div class="metric"><span class="lab">Topics</span><span class="val">${keys.length}</span><span class="sub">in these papers</span></div><div class="metric"><span class="lab">Under 70%</span><span class="val">${weak.length}</span><span class="sub">topics</span></div></div>
    ${bar}
    <div class="tw"><table class="tbl cmbt"><thead><tr><th class="ck"><span class="sr">Pick</span></th><th>SoL topic</th>${cols.map(c=>`<th class="c">${esc(c.name)}</th>`).join('')}<th class="r">Marks</th><th>Assessed in</th></tr></thead><tbody>${rowsHtml}</tbody></table></div>
    <p class="xs muted" style="margin-top:10px">Tick topics or lessons (open a topic with ▸ to see its lessons), then make one PDF of past-paper questions for all of them.${isT?'':' Questions you have already ticked as done are left out.'}</p>`}</div></div>`;
}

// ================= icons =================
const I=(d,extra='')=>`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" ${extra}>${d}</svg>`;
const IC={
  home:I('<path d="M3 10.5 12 3l9 7.5"/><path d="M5 9.5V21h14V9.5"/><path d="M10 21v-6h4v6"/>'),
  edit:I('<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M13.5 6.5l4 4"/>'),
  results:I('<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M8 16v-4M12 16V8M16 16v-6"/>'),
  trend:I('<path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/>'),
  book:I('<path d="M4 5a2 2 0 0 1 2-2h13v16H6a2 2 0 0 0-2 2z"/><path d="M4 21V5"/><path d="M9 8h6"/>'),
  report:I('<path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><path d="M14 3v6h6"/><path d="M8 17v-3M12 17v-6M16 17v-2"/>'),
  layers:I('<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>'),
  users:I('<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20a6.5 6.5 0 0 1 13 0"/><path d="M16 4.5a3.5 3.5 0 0 1 0 7"/><path d="M18 14a6 6 0 0 1 3.5 6"/>'),
  plan:I('<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1"/><path d="m9 13 2 2 4-4"/>'),
  settings:I('<path d="M4 7h10M18 7h2M4 17h4M12 17h8"/><circle cx="16" cy="7" r="2"/><circle cx="10" cy="17" r="2"/>'),
  bank:I('<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>'),
  out:I('<path d="M10 4H5v16h5"/><path d="M15 8l4 4-4 4"/><path d="M19 12H9"/>'),
  info:I('<circle cx="12" cy="12" r="9"/><path d="M12 11v5M12 8h.01"/>'),
  copy:I('<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h3"/>'),
  plus:I('<path d="M12 5v14M5 12h14"/>'),
  target:I('<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="4"/><circle cx="12" cy="12" r="0.5"/>'),
  pages:I('<path d="M6 3h9l4 4v14H6z"/><path d="M9 12h6M9 16h6"/>'),
  globe:I('<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>'),
  list:I('<path d="M9 6h11M9 12h11M9 18h11"/><path d="M4 6h.01M4 12h.01M4 18h.01"/>'),
};

// ================= charts =================
const Z={bad:'var(--bad-z)',warn:'var(--warn-z)',good:'var(--good-z)'};
function tip(title,body){return esc(title)+(body?'||'+esc(body):'')}

// Score ring: score arc, potential arc behind, class-average tick
function scoreRing(score,total,pot,avgv){
  const r=72,c=2*Math.PI*r,cx=90,cy=90,sw=15;
  const f=v=>Math.max(0,Math.min(1,v/total));
  const ang=f(avgv)*2*Math.PI-Math.PI/2;
  const t1=[cx+(r-sw/2-5)*Math.cos(ang),cy+(r-sw/2-5)*Math.sin(ang)],t2=[cx+(r+sw/2+5)*Math.cos(ang),cy+(r+sw/2+5)*Math.sin(ang)];
  return `<svg class="ring" viewBox="0 0 180 180" role="img" aria-label="Score ${score} out of ${total}">
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--surface-2)" stroke-width="${sw}"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--line)" stroke-width="1" />
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--pot)" stroke-width="${sw}" stroke-dasharray="${c*f(pot)} ${c}" transform="rotate(-90 ${cx} ${cy})"/>
  <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="var(--mark)" stroke-width="${sw}" stroke-linecap="round" stroke-dasharray="${c*f(score)} ${c}" transform="rotate(-90 ${cx} ${cy})"/>
  ${avgv!=null?`<line x1="${t1[0]}" y1="${t1[1]}" x2="${t2[0]}" y2="${t2[1]}" stroke="var(--ink)" stroke-width="3" stroke-linecap="round"/>`:''}
  <text x="${cx}" y="${cy+4}" text-anchor="middle" font-size="42" font-weight="800" fill="var(--ink)" letter-spacing="-1.5">${score}</text>
  <text x="${cx}" y="${cy+26}" text-anchor="middle" font-size="13" font-weight="600" fill="var(--muted)">out of ${total} · ${pct(score,total)}%</text></svg>`;
}

// Paper strip: one square per mark, grouped by question part
function paperStrip(a,x){
  return `<div class="strip">${a.parts.map(p=>{const r=x.ans[p.id]||{s:0};const flag=(r.c==='A'||r.c==='B')&&r.s/p.marks<0.5;
    return `<div class="qg" data-tip="${tip(`Q${qlab(p)} · ${p.topic}`,`${r.s} of ${p.marks} marks · confidence ${r.c||'–'}${flag?' · felt confident but lost most marks':''}`)}"><div class="sq">${Array.from({length:p.marks},(_,i)=>`<i class="${i<r.s?'':'l'}"></i>`).join('')}</div><span class="ql">${qlab(p)}</span><span class="qc ${flag?'flag':''}">${r.c||'–'}</span></div>`}).join('')}</div>
  <div class="legend"><span><i class="sw" style="background:var(--mark)"></i>Mark gained</span><span><i class="sw" style="box-shadow:inset 0 0 0 1.5px var(--bar-bad)"></i>Mark lost</span><span><i class="sw" style="background:var(--surface-2);box-shadow:inset 0 0 0 1px var(--line)"></i>Your confidence (A to D)</span><span><i class="sw" style="background:var(--bad-t)"></i>Confident, but lost most marks</span></div>`;
}
const scaleRow=`<div class="scale"><span style="left:0;transform:none">0%</span><span style="left:50%">50%</span><span style="left:70%">70%</span><span style="left:100%;transform:translateX(-100%)">100%</span></div>`;
// Bullet rows: value bar on status zones, optional comparison tick
function bulletRows(items,{marker='Class average'}={}){
  return `<div class="brs">${items.map(it=>`<div class="br" data-tip="${tip(it.name,`${it.detail||''}${it.m!=null?` · ${marker} ${it.m}%`:''}`)}"><div class="top"><div class="nm">${it.name}${it.sub?`<small>${it.sub}</small>`:''}</div><div class="v" style="color:var(--${st(it.v)})">${pc(it.v)}</div></div><div class="trk"><div class="b ${st(it.v)}" style="width:${Math.max(it.v,1)}%"></div>${it.m!=null?`<div class="m" style="left:${it.m}%"></div>`:''}</div></div>`).join('')}</div>${scaleRow}`;
}
// Dot rows: cohort bar plus one dot per class
const KCOL=['var(--k1)','var(--k2)','var(--k3)'];
function dotRows(items,cls){
  return `<div class="brs">${items.map(it=>`<div class="br"><div class="top"><div class="nm">${it.name}${it.sub?`<small>${it.sub}</small>`:''}</div><div class="v" style="color:var(--${st(it.v)})" data-tip="${tip(it.name,'All classes '+pc(it.v))}">${pc(it.v)}</div></div><div class="trk"><div class="b soft" style="width:${Math.max(it.v,1)}%"></div>${it.dots.map((d,i)=>d.v==null?'':`<div class="d" style="left:${d.v}%;background:${KCOL[i%3]}" data-tip="${tip(d.cls,pc(d.v)+' · '+it.plain)}"></div>`).join('')}</div></div>`).join('')}</div>${scaleRow}`;
}
// Confidence quadrant
function quadrant(q,{teacher=false}={}){
  const cell=(k,title,desc,cls)=>`<div class="qd ${cls}"><h4>${title}<span>${q[k].n}</span></h4><p>${desc}</p><div class="qs">${q[k].items.slice(0,teacher?6:20).map(s=>`<b data-tip="${tip(s.t,s.d)}">${esc(s.l)}</b>`).join('')}</div></div>`;
  return `<div class="quad"><span></span><div class="xl">Secure, 70% or more</div><div class="xl">Lost marks, under 70%</div>
  <div class="yl">Confident (A or B)</div>${cell('cs','Strengths',teacher?'Ratings where students felt confident and were right.':'You felt confident and you were right.','good')}${cell('cl','Blind spots',teacher?'Felt confident but lost marks. Check method, not just answers.':'You felt confident but lost marks. Check the method, not just the answer.','alert')}
  <div class="yl">Unsure (C or D)</div>${cell('us','Hidden strengths',teacher?'Unsure, but secured the marks anyway.':'You were unsure but got the marks. Trust yourself more.','')}${cell('ul','Known gaps',teacher?'Unsure and lost marks. Students know these need work.':'You knew these needed work. Start your practice here.','')}</div>`;
}
function classify(a,ids){const r=respMap(a.id);const q={cs:{n:0,items:[]},cl:{n:0,items:[]},us:{n:0,items:[]},ul:{n:0,items:[]}};const per={};
  ids.forEach(id=>a.parts.forEach(p=>{const x=r[id]?.ans?.[p.id];if(!x||!x.c)return;const conf=x.c==='A'||x.c==='B',sec=x.s/p.marks>=0.7;const k=(conf?'c':'u')+(sec?'s':'l');q[k].n++;per[k]=per[k]||{};per[k][p.id]=(per[k][p.id]||0)+1}));
  Object.keys(q).forEach(k=>{q[k].items=Object.entries(per[k]||{}).sort((x,y)=>y[1]-x[1]).map(([pid,n])=>{const p=a.parts.find(z=>z.id===pid);return {l:'Q'+qlab(p)+(ids.length>1?` ×${n}`:''),t:`Q${qlab(p)} · ${p.topic}`,d:ids.length>1?`${n} student ratings`:p.detail}})});return q}

// Histogram of scores
function histogram(scores,total){
  const bw=total>60?5:4,nbAll=Math.ceil(total/bw);const allBins=Array(nbAll).fill(0);scores.forEach(s=>allBins[Math.min(nbAll-1,Math.floor(s/bw))]++);
  let first=Math.max(0,allBins.findIndex(c=>c>0)-1),last=nbAll-1;if(first<0)first=0;
  const bins=allBins.slice(first,last+1),nb=bins.length;
  const W=440,H=250,m={l:30,r:12,t:46,b:44},pw=W-m.l-m.r,ph=H-m.t-m.b;
  const ymax=Math.max(2,Math.ceil(Math.max(...bins)/2)*2);const lo0=first*bw,hi0=Math.min(total,(last+1)*bw);
  const X=v=>m.l+(v-lo0)/(hi0-lo0)*pw,Y=c=>m.t+ph-c/ymax*ph;const w=pw/nb;
  let g=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Distribution of scores"><defs><linearGradient id="hg" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#920088"/><stop offset="1" stop-color="#610064"/></linearGradient></defs>`;
  [0,ymax/2,ymax].forEach(v=>{g+=`<line x1="${m.l}" x2="${W-m.r}" y1="${Y(v)}" y2="${Y(v)}" stroke="${v?'var(--line)':'var(--line-2)'}" ${v?'stroke-dasharray="2 4"':''}/><text x="${m.l-8}" y="${Y(v)+4}" font-size="12" text-anchor="end" fill="var(--muted)">${v}</text>`});
  bins.forEach((c,i)=>{const x=m.l+i*w+2,bw2=w-4,y=Y(c);const lo=(first+i)*bw,hi=Math.min(total,lo+bw-1);const r=Math.min(5,bw2/2);
    if(c)g+=`<path d="M${x},${m.t+ph} V${y+r} q0,-${r} ${r},-${r} H${x+bw2-r} q${r},0 ${r},${r} V${m.t+ph} Z" fill="url(#hg)"/><text x="${x+bw2/2}" y="${y-6}" font-size="13" font-weight="800" text-anchor="middle" fill="var(--ink)">${c}</text>`;
    g+=`<rect x="${x}" y="${m.t}" width="${bw2}" height="${ph}" fill="transparent" data-tip="${tip(`${lo} to ${hi} marks`,`${c} student${c===1?'':'s'}`)}"/>`;
    if(nb<=9||i%2===0)g+=`<text x="${x+bw2/2}" y="${H-m.b+17}" font-size="11.5" font-weight="600" text-anchor="middle" fill="var(--ink-2)">${lo}-${hi}</text>`});
  const mean=avg(scores),med=median(scores);const mx=X(mean),dx=X(med);
  const leftFirst=mx<dx;// put the smaller on the left with end anchor
  const lab=(x,y,txt,col,anc)=>`<text x="${x}" y="${y}" font-size="12" font-weight="800" text-anchor="${anc}" fill="${col}">${txt}</text>`;
  g+=`<line x1="${dx}" x2="${dx}" y1="${m.t-14}" y2="${m.t+ph}" stroke="var(--ink)" stroke-width="2"/>`+lab(dx+(leftFirst?4:-4),m.t-20,`Median ${Math.round(med*10)/10}`,'var(--ink)',leftFirst?'start':'end');
  g+=`<line x1="${mx}" x2="${mx}" y1="${m.t-14}" y2="${m.t+ph}" stroke="var(--orange)" stroke-width="2" stroke-dasharray="5 3"/>`+lab(mx+(leftFirst?-4:4),m.t-20,`Mean ${Math.round(mean*10)/10}`,'#D8301A',leftFirst?'end':'start');
  g+=`<text x="${m.l+pw/2}" y="${H-6}" font-size="11.5" text-anchor="middle" fill="var(--muted)">Score out of ${total}</text>`;
  return g+'</svg>';
}
// Facility columns: width = marks available, height = facility
function columns(ps,overall){
  const W=900,H=300,m={l:40,r:60,t:24,b:52},pw=W-m.l-m.r,ph=H-m.t-m.b,gap=4,M=ps.reduce((t,s)=>t+s.p.marks,0),u=(pw-gap*(ps.length-1))/M;
  const Y=v=>m.t+ph-v/100*ph;
  let g=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="Facility by question">`;
  g+=`<rect x="${m.l}" y="${Y(100)}" width="${pw}" height="${Y(70)-Y(100)}" fill="var(--good-z)"/><rect x="${m.l}" y="${Y(70)}" width="${pw}" height="${Y(50)-Y(70)}" fill="var(--warn-z)"/><rect x="${m.l}" y="${Y(50)}" width="${pw}" height="${Y(0)-Y(50)}" fill="var(--bad-z)"/>`;
  [0,50,70,100].forEach(v=>{g+=`<line x1="${m.l}" x2="${m.l+pw}" y1="${Y(v)}" y2="${Y(v)}" stroke="${v?'var(--line-2)':'var(--ink-2)'}" ${v&&v<100?'stroke-dasharray="3 3"':''} stroke-width="1"/><text x="${m.l-8}" y="${Y(v)+4}" font-size="11" text-anchor="end" fill="var(--muted)">${v}%</text>`});
  let x=m.l;
  ps.forEach(s=>{const w=s.p.marks*u,y=Y(s.pct||0),col=`var(--bar-${st(s.pct)})`;const r=Math.min(5,w/2);
    g+=`<path d="M${x},${Y(0)} V${y+r} q0,-${r} ${r},-${r} H${x+w-r} q${r},0 ${r},${r} V${Y(0)} Z" fill="${col}"/>`;
    if(w>=15)g+=`<text x="${x+w/2}" y="${y-6}" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink-2)">${s.pct}</text>`;
    g+=`<text x="${x+w/2}" y="${Y(0)+16}" font-size="11" font-weight="700" text-anchor="middle" fill="var(--ink-2)">${s.p.q}${s.p.p}</text><text x="${x+w/2}" y="${Y(0)+30}" font-size="9.5" text-anchor="middle" fill="var(--muted)">${s.p.marks}</text>`;
    g+=`<rect x="${x}" y="${m.t}" width="${w}" height="${ph}" fill="transparent" data-tip="${tip(`Q${qlab(s.p)} · ${s.p.topic}`,`${s.p.detail} · ${s.pct}% facility · ${s.got}/${s.max} marks`)}"/>`;x+=w+gap});
  if(overall!=null){g+=`<line x1="${m.l}" x2="${m.l+pw+6}" y1="${Y(overall)}" y2="${Y(overall)}" stroke="var(--brand)" stroke-width="2" stroke-dasharray="6 4"/><text x="${m.l+pw+9}" y="${Y(overall)-2}" font-size="11" font-weight="700" fill="var(--brand)">Paper</text><text x="${m.l+pw+9}" y="${Y(overall)+11}" font-size="12" font-weight="800" fill="var(--brand)">${overall}%</text>`}
  g+=`<text x="${m.l-8}" y="${Y(0)+30}" font-size="9.5" text-anchor="end" fill="var(--muted)">marks</text>`;
  return g+'</svg>';
}
// Small multiple line chart
function smallMult(series,labels){
  const W=280,H=132,m={l:30,r:34,t:10,b:22},pw=W-m.l-m.r,ph=H-m.t-m.b,n=labels.length;
  const X=i=>n===1?m.l+pw/2:m.l+i*pw/(n-1),Y=v=>m.t+ph-v/100*ph;
  let g=`<svg viewBox="0 0 ${W} ${H}" role="img">`;
  g+=`<rect x="${m.l}" y="${Y(100)}" width="${pw}" height="${Y(70)-Y(100)}" fill="var(--good-z)"/><rect x="${m.l}" y="${Y(70)}" width="${pw}" height="${Y(50)-Y(70)}" fill="var(--warn-z)"/><rect x="${m.l}" y="${Y(50)}" width="${pw}" height="${Y(0)-Y(50)}" fill="var(--bad-z)"/>`;
  [0,50,70,100].forEach(v=>{g+=`<text x="${m.l-6}" y="${Y(v)+3.5}" font-size="9.5" text-anchor="end" fill="var(--muted)">${v}</text>`});
  g+=`<line x1="${m.l}" x2="${m.l+pw}" y1="${Y(0)}" y2="${Y(0)}" stroke="var(--line-2)"/>`;
  labels.forEach((l,i)=>{g+=`<text x="${X(i)}" y="${H-6}" font-size="10" font-weight="600" text-anchor="middle" fill="var(--muted)">${esc(l)}</text>`});
  series.forEach(s=>{const pts=s.pts.map((v,i)=>v==null?null:[X(i),Y(v),v,i]).filter(Boolean);if(!pts.length)return;
    if(s.area&&pts.length>1)g+=`<path d="M${pts[0][0]},${Y(0)} ${pts.map(p=>'L'+p[0]+','+p[1]).join(' ')} L${pts[pts.length-1][0]},${Y(0)} Z" fill="${s.color}" fill-opacity=".1"/>`;
    if(pts.length>1)g+=`<polyline fill="none" stroke="${s.color}" stroke-width="2.25" stroke-linejoin="round" stroke-linecap="round" ${s.dash?'stroke-dasharray="4 3"':''} points="${pts.map(p=>p[0]+','+p[1]).join(' ')}"/>`;
    pts.forEach((p,j)=>{const last=j===pts.length-1;g+=`<circle cx="${p[0]}" cy="${p[1]}" r="${last?4.5:3}" fill="${s.dash?'var(--surface)':s.color}" stroke="${s.dash?s.color:'var(--surface)'}" stroke-width="${s.dash?2:1.5}"/><circle cx="${p[0]}" cy="${p[1]}" r="12" fill="transparent" data-tip="${tip(s.name,labels[p[3]]+': '+p[2]+'%')}"/>`;
      if(last&&s.label)g+=`<text x="${p[0]+8}" y="${p[1]+4}" font-size="11" font-weight="800" fill="${s.color}">${p[2]}</text>`});
  });
  return g+'</svg>';
}
function statusLegend(){return `<div class="legend"><span><i class="sw" style="background:var(--bar-good)"></i>Secure, 70% and above</span><span><i class="sw" style="background:var(--bar-warn)"></i>Developing, 50 to 69%</span><span><i class="sw" style="background:var(--bar-bad)"></i>Priority, below 50%</span></div>`}
function cellTd(p,extra=''){if(p==null)return `<td class="cell t-none"><span>·</span></td>`;return `<td class="cell t-${st(p)}" ${extra}><span>${p}%</span></td>`}
function hbars(items){const mx=Math.max(1,...items.map(i=>i.v));return `<div class="brs">${items.map(it=>`<div class="br" data-tip="${tip(it.name,it.detail||'')}"><div class="top"><div class="nm" style="font-weight:500">${esc(it.name)}</div><div class="v">${it.vt??it.v}</div></div><div class="trk plain" style="background:var(--surface-2);box-shadow:inset 0 0 0 1px var(--line)"><div class="b" style="width:${Math.max(1,100*it.v/mx)}%;background:var(--brand-2)"></div></div></div>`).join('')}</div>`}

// ================= student views =================
function authView(){
  const y12=classes().filter(c=>!c.archived);
  let form;
  if(S.recovery){form=`<h2>Choose a new password</h2><p class="lead">Enter a new password for your account.</p>
   <form id="newpw" novalidate><div class="field"><label for="np-pw">New password</label><input id="np-pw" type="password" autocomplete="new-password"><small>At least 8 characters.</small></div>
   <div id="np-err" class="err" role="alert" style="margin-bottom:10px"></div><button class="btn" type="submit">Save password</button></form>`}
  else if(S.authTab==='signin'){form=`<h2>Sign in</h2><p class="lead">Use your school email and the password you chose.</p>
   <form id="signin" novalidate><div class="field"><label for="si-email">School email</label><input id="si-email" type="email" autocomplete="email" placeholder="firstname.surname26@aums.ac.uk"></div>
   <div class="field"><label for="si-pw">Password</label><input id="si-pw" type="password" autocomplete="current-password"></div>
   <div id="si-err" class="err" role="alert" style="margin-bottom:10px"></div><button class="btn" type="submit" ${S.busy?'disabled':''}>${S.busy?'Signing in…':'Sign in'}</button></form>
   <p class="small muted" style="margin-top:14px;text-align:center"><button class="linkbtn" data-act="forgot">Forgotten your password?</button></p>`}
  else{form=`<h2>Create your account</h2><p class="lead">You only need to do this once.</p>
   <form id="signup" novalidate>
    <div class="field"><label for="su-name">Full name</label><input id="su-name" type="text" autocomplete="name"></div>
    <div class="field"><label for="su-email">School email</label><input id="su-email" type="email" placeholder="firstname.surname26@aums.ac.uk" autocomplete="email"></div>
    <div class="field"><label for="su-cls">Maths class</label><select id="su-cls"><option value="">Choose your class</option>${y12.map(c=>`<option value="${esc(c.id)}">${esc(c.id)}</option>`).join('')}</select></div>
    <div class="field"><label for="su-pw">Password</label><input id="su-pw" type="password" autocomplete="new-password"><small>At least 8 characters.</small></div>
    <div id="su-err" class="err" role="alert" style="margin-bottom:10px"></div>
    <button class="btn" type="submit" ${S.busy?'disabled':''}>${S.busy?'Creating your account…':'Create account'}</button></form>`}
  return `<div class="auth"><div class="brandp"><img src="${LOGO}" alt="Aston University Mathematics School">
   <h1>See where every mark went, and <em>what to do next.</em></h1>
   <p>Record your assessments question by question and the tracker builds a picture of your maths across the whole course.</p>
   <div class="feat">
    <div>${IC.results}<span><b>Every lesson, every assessment</b>Your results are mapped to the lessons in our scheme of learning, so you can see exactly what to revisit.</span></div>
    <div>${IC.book}<span><b>Practice picked for you</b>Past-paper questions from OCR MEI for the lessons you found hardest, with textbook and Integral references.</span></div>
    <div>${IC.trend}<span><b>Progress over time</b>Watch topics move from Priority to Secure as the year goes on.</span></div>
   </div></div>
   <div class="formp"><div class="box">${S.recovery?'':`<div class="tabsx"><button aria-pressed="${S.authTab!=='signin'}" data-act="authtab" data-k="signup">Create account</button><button aria-pressed="${S.authTab==='signin'}" data-act="authtab" data-k="signin">Sign in</button></div>`}${form}<p class="small muted" style="margin-top:18px;text-align:center">Staff? <a class="linkbtn" href="#staff">Teacher sign in</a></p></div></div></div>`;
}
function studentPage(me){
  if(S.stab==='home')return sHome(me);if(S.stab==='record')return sRecord(me);if(S.stab==='results')return sResults(me,S.sAid);if(S.stab==='progress')return sProgress(me);if(S.stab==='bank')return bankBrowser(false);return sPractice(me);
}
function sHome(me){
  const todo=openFor(me.id).filter(a=>!respMap(a.id)[me.id]&&a.status!=='closed');const mine=myAssessments(me.id);const last=mine[mine.length-1];
  let h=`<div class="ph"><div><div class="eyebrow">Mathematics · ${esc(me.cls||'No class yet')}</div><h1>Hi ${esc(me.name.split(' ')[0])}</h1><p class="desc">${last?'Here is where you are and what to focus on next.':'Record your first assessment to get your personalised report.'}</p></div></div>`;
  todo.forEach(a=>{h+=`<div class="note" style="border-left-color:var(--brand-2)">${IC.edit.replace('<svg','<svg style="color:var(--brand-2)"')}<div style="flex:1"><b>${esc(a.name)}</b> is open for you to record.<div class="xs muted">${a.parts.length} question parts · ${a.total} marks · about 5 minutes with your marked paper</div></div><button class="btn sm" data-act="record" data-aid="${a.id}">Record results</button></div>`});
  if(!last)return h+`<div class="empty">Your report appears here once you've recorded an assessment.</div>`;
  const x=respMap(last.id)[me.id];const sc=score(last,me.id);const alloc=a_alloc(last,x);const cav=classAvg(last,me.cls);
  const w=weakLessons(last,me.id);const cg=classGroup(last,me.cls,hasLessons(last)?'lesson':'module');
  {const comb=cmbStats(mine,(a,by)=>groupStats(a,[me.id],by));const ks=Object.keys(comb).filter(k=>comb[k].max);const tg=ks.reduce((t,k)=>t+comb[k].got,0),tm=ks.reduce((t,k)=>t+comb[k].max,0);
   const secure=ks.filter(k=>comb[k].pct>=70).length;const diff=cav!=null?Math.round(10*(sc-cav))/10:null;const pp=pct(sc,last.total);
   h+=`<div class="band"><div class="metric"><span class="lab">${esc(last.id)} score</span><span class="val">${pp}%</span><span class="sub">${sc} of ${last.total} marks</span><div class="meter"><i style="width:${pp}%"></i></div></div>
   <div class="metric"><span class="lab">Against ${esc(me.cls)}</span><span class="val" style="color:var(--${diff==null?'ink':diff>=0?'good':'bad'})!important">${diff==null?'–':(diff>0?'+':'')+diff}</span><span class="sub">marks ${diff==null?'':diff>=0?'above':'below'} the class average</span></div>
   <div class="metric"><span class="lab">All assessments</span><span class="val">${pct(tg,tm)}%</span><span class="sub">${mine.length} recorded · ${tg} of ${tm} marks</span></div>
   <div class="metric"><span class="lab">Secure topics</span><span class="val">${secure}<small> / ${ks.length}</small></span><span class="sub">at 70% or more overall</span></div>
   <div class="metric"><span class="lab">Practice done</span><span class="val">${DB.done.size}</span><span class="sub">past-paper questions ticked off</span></div></div>`;}
  h+=`<div class="grid c-5-7"><div class="card"><div class="card-h"><div><h2>${esc(last.name.split(':')[0])} result</h2><p class="hint">${esc(last.name.split(':')[1]||'')}</p></div><button class="btn sec sm" data-act="results" data-aid="${last.id}">Full report</button></div><div class="card-b">${ringBlock(sc,last.total,sc+alloc,cav,me.cls)}</div></div>
  <div class="card"><div class="card-h"><div><h2>Work on these first</h2><p class="hint">Your three lowest lessons. The black line is the ${me.cls} average.</p></div><button class="btn sec sm" data-act="stab" data-k="practice">Practice questions</button></div><div class="card-b">${bulletRows(w.slice(0,3).map(o=>({name:esc(keyName(o.k)),sub:esc(o.k.includes('-')?`${lessonKey(o.k).code} ${MOD[lessonKey(o.k).code].name} · lesson ${lessonKey(o.k).n}`:o.k),v:o.pct,m:cg[o.k]?.pct,detail:`${o.got} of ${o.max} marks`})))}</div></div></div>`;
  {const comb=cmbStats(mine,(a,by)=>groupStats(a,[me.id],by)),cc=cmbStats(mine,(a,by)=>classGroup(a,me.cls,by));const ks=Object.keys(comb).filter(k=>comb[k].max).sort((x,y)=>modOrder(x)-modOrder(y));
   if(ks.length)h+=`<div class="card mt"><div class="card-h"><div><h2>Your topics so far</h2><p class="hint">Every mark on each SoL topic across all ${mine.length} of your assessments. The black line is the ${esc(me.cls)} average.</p></div><button class="btn sec sm" data-act="stab" data-k="progress">See progress</button></div><div class="card-b">${bulletRows(ks.map(k=>({name:esc(MOD[k]?.name||k),sub:esc(k)+' · '+comb[k].in.join(', '),v:comb[k].pct,m:cc[k]?.max?cc[k].pct:null,detail:`${comb[k].got} of ${comb[k].max} marks`})))}</div></div>`;}
  return h;
}
function a_alloc(a,x){return Math.min(a.total-a.parts.reduce((t,p)=>t+(x.ans[p.id]?.s||0),0),a.parts.reduce((t,p)=>t+Object.values(x.ans[p.id]?.r||{}).reduce((u,v)=>u+v,0),0))}
function ringBlock(sc,total,pot,cav,clsName){
  return `<div class="ringwrap">${scoreRing(sc,total,Math.min(total,pot),cav)}<div class="ringkey">
   <div><i class="sw" style="background:var(--mark);width:14px;height:14px"></i><b>${sc}/${total}</b><span class="muted">Your score</span></div>
   <div><i class="sw" style="background:var(--pot);width:14px;height:14px"></i><b>${Math.min(total,pot)}/${total}</b><span class="muted">Potential, with the marks you put down to exam technique</span></div>
   ${cav!=null?`<div><i class="sw tick" style="margin:0 6px"></i><b>${Math.round(cav)}/${total}</b><span class="muted">${clsName} average</span></div>`:''}</div></div>`;
}
// ---------- record ----------
let DRAFT=null;
function startDraft(a,sid){const ex=respMap(a.id)[sid];DRAFT={aid:a.id,ans:{},r:{},refl:{hw:'',help:'',rev:'',use:''}};
  a.parts.forEach(p=>{DRAFT.ans[p.id]=ex?{s:ex.ans[p.id].s,c:ex.ans[p.id].c}:{s:null,c:null}});
  if(ex){DRAFT.refl=Object.assign(DRAFT.refl,ex.refl||{});a.parts.forEach(p=>Object.entries(ex.ans[p.id]?.r||{}).forEach(([k,v])=>DRAFT.r[k]=(DRAFT.r[k]||0)+v))}}
function sRecord(me){
  const open=openFor(me.id).filter(a=>a.status!=='closed');
  if(!open.length)return `<div class="empty">No assessments are open for ${me.cls} right now.</div>`;
  const a=asm(S.recAid&&open.find(x=>x.id===S.recAid)?S.recAid:open[0].id);
  if(!DRAFT||DRAFT.aid!==a.id)startDraft(a,me.id);
  const has=!!respMap(a.id)[me.id];
  let h=`<div class="ph"><div><div class="eyebrow">Record results</div><h1>${esc(a.name)}</h1><p class="desc">Have your marked paper in front of you. It takes about five minutes.${has?' You have already submitted this, so saving again replaces your earlier entry.':''}</p></div>
  ${open.length>1?`<div class="filters"><label class="fl"><span>Assessment</span><select id="rec-aid">${open.map(x=>`<option value="${x.id}" ${x.id===a.id?'selected':''}>${esc(x.name)}</option>`).join('')}</select></label></div>`:''}</div>
  <nav class="steps" aria-label="Sections"><a href="#s1"><b>1</b>Marks and confidence</a><a href="#s2"><b>2</b>Where the marks went</a><a href="#s3"><b>3</b>Reflection</a></nav><div class="stack">`;
  h+=`<div class="card" id="s1"><div class="card-h"><div><h2>1. Marks and confidence for each question</h2><p class="hint">Confidence: <b>A</b> I could explain this to others · <b>B</b> I've got this but I'm not perfect yet · <b>C</b> I've basically got the hang of it · <b>D</b> I need support.</p></div></div><div style="margin-top:14px">`;
  a.parts.forEach(p=>{const d=DRAFT.ans[p.id];const L=p.lessons[0]?lessonLabel(p.lessons[0]):modLabel(p.module);
    h+=`<div class="qrow ${d.s!=null&&d.c?'done':''}" id="qr-${p.id}"><div class="qn">${p.q}${p.p?`<small>(${p.p})</small>`:''}</div><div><div class="tp">${esc(p.topic)}${MOD[p.module]?.fm?'<span class="fm">FM</span>':''}</div><div class="dt">${esc(p.detail)}</div><div class="ls">${esc(L)}</div></div>
    <div class="ctl"><div class="stepper"><button type="button" data-act="step" data-p="${p.id}" data-d="-1" aria-label="One mark fewer">−</button><input id="sc-${p.id}" inputmode="numeric" value="${d.s??''}" data-p="${p.id}" data-max="${p.marks}" aria-label="Marks for question ${qlab(p)}" placeholder="–"><span class="of">/ ${p.marks}</span><button type="button" data-act="step" data-p="${p.id}" data-d="1" aria-label="One mark more">+</button></div>
    <div class="conf" role="group" aria-label="Confidence for question ${qlab(p)}">${'ABCD'.split('').map(c=>`<button type="button" aria-pressed="${d.c===c}" data-act="conf" data-p="${p.id}" data-c="${c}">${c}</button>`).join('')}</div></div></div>`});
  h+=`</div></div><div class="card" id="s2"><div class="card-h"><div><h2>2. Where did the lost marks go?</h2><p class="hint">Put the number of marks you lost next to each habit that applies. These are tracked across the year so you can see if they're improving.</p></div></div><div class="card-b"><div class="rsn">`;
  STATIC.reasons.forEach((r,i)=>{h+=`<div class="rs"><label for="rs-${i}">${esc(r)}</label><div class="stepper"><button type="button" data-act="rstep" data-i="${i}" data-d="-1" aria-label="Fewer">−</button><input id="rs-${i}" inputmode="numeric" value="${DRAFT.r[i]||''}" data-ri="${i}" aria-label="Marks lost" placeholder="0"><button type="button" data-act="rstep" data-i="${i}" data-d="1" aria-label="More">+</button></div></div>`});
  h+=`</div></div></div><div class="card" id="s3"><div class="card-h"><div><h2>3. Reflection</h2><p class="hint">Short answers are fine. Your teacher reads these.</p></div></div><div class="card-b"><div class="grid c2" style="gap:4px 22px">
  ${[['help','Would you like more help? If so, with what?'],['rev','How will you improve your revision?'],['hw','Which practice questions will you do first?'],['use','What has been useful about this?']].map(([k,l])=>`<div class="field"><label for="rf-${k}">${l}</label><textarea id="rf-${k}" data-rf="${k}">${esc(DRAFT.refl[k]||'')}</textarea></div>`).join('')}</div></div>
  <div class="dock"><div class="k"><span>Parts done</span><b id="sum-done"></b></div><div class="k"><span>Score</span><b id="sum-score"></b></div><div class="k"><span>Lost marks explained</span><b id="sum-alloc"></b></div><div class="k"><span>Potential</span><b id="sum-pot"></b></div><span style="flex:1"></span><span id="rec-err" class="err" role="alert"></span><button class="btn" data-act="submit">Save results</button></div></div></div>`;
  setTimeout(updSums,0);
  return h;
}
function updSums(){if(!DRAFT)return;const a=asm(DRAFT.aid);const tot=a.parts.reduce((t,p)=>t+(DRAFT.ans[p.id].s||0),0),lost=a.total-tot,alloc=Object.values(DRAFT.r).reduce((t,v)=>t+(+v||0),0),done=a.parts.filter(p=>DRAFT.ans[p.id].s!=null&&DRAFT.ans[p.id].c).length;
  const q=id=>document.getElementById(id);if(!q('sum-score'))return;q('sum-done').textContent=`${done}/${a.parts.length}`;q('sum-score').textContent=`${tot}/${a.total}`;q('sum-alloc').textContent=`${alloc}/${lost}`;q('sum-pot').textContent=`${Math.min(a.total,tot+alloc)}/${a.total}`;
  a.parts.forEach(p=>{const r=q('qr-'+p.id);if(r)r.classList.toggle('done',DRAFT.ans[p.id].s!=null&&!!DRAFT.ans[p.id].c)})}
async function submitDraft(){
  const a=asm(DRAFT.aid),err=document.getElementById('rec-err');
  const miss=a.parts.filter(p=>DRAFT.ans[p.id].s==null||DRAFT.ans[p.id].c==null);
  if(miss.length){err.textContent=`Add a mark and a confidence for ${miss.length===a.parts.length?'every question':'Q'+miss.map(qlab).join(', Q')}.`;document.getElementById('qr-'+miss[0].id)?.scrollIntoView({behavior:'smooth',block:'center'});return}
  const tot=a.parts.reduce((t,p)=>t+DRAFT.ans[p.id].s,0),lost=a.total-tot,alloc=Object.values(DRAFT.r).reduce((t,v)=>t+(+v||0),0);
  if(alloc>lost){err.textContent=`You've explained ${alloc} marks but only lost ${lost}.`;return}
  const ans={};a.parts.forEach(p=>ans[p.id]={s:DRAFT.ans[p.id].s,c:DRAFT.ans[p.id].c,r:{}});
  const firstLost=a.parts.find(p=>ans[p.id].s<p.marks)||a.parts[0];Object.entries(DRAFT.r).forEach(([k,v])=>{if(+v)ans[firstLost.id].r[k]=+v});
  const btn=document.querySelector('[data-act=submit]');if(btn){btn.disabled=true;btn.textContent='Saving…'}
  const {error}=await sb.from('submissions').upsert({assessment_id:a.id,student_id:ME.id,answers:ans,reflection:DRAFT.refl,updated_at:new Date().toISOString()});
  if(error){err.textContent=a.status!=='open'?'This assessment has been closed by your teacher.':'Your results could not be saved. Check your internet connection and try again.';if(btn){btn.disabled=false;btn.textContent='Save results'}console.error(error);return}
  DRAFT=null;await loadData();S.sAid=a.id;S.stab='results';save();toast('Results saved');render();window.scrollTo(0,0);
}
// ---------- results ----------
function focusBlock(o,sid,interactive,n=4){
  const L=o.k.includes('-')?lessonKey(o.k):null;const code=L?L.code:o.k;const m=MOD[code];const recs=bankFor(code,L?L.n:null,n,true,sid);
  const tb=[...new Set(o.parts.map(p=>p.textbook).filter(Boolean))];
  return `<div class="focus"><div class="fh"><div><h3>${esc(keyName(o.k))}</h3><div class="mod">${esc(modLabel(code))}${L?` · lesson ${L.n} of ${m.lessons.length}`:''}</div></div>${chip(o.pct,o.pct+'%')}</div>
  <div class="fb"><div class="where"><div class="wl">
   <div>${IC.pages}<span><b>Where you lost marks</b>${o.parts.map(p=>`Q${qlab(p)} ${esc(p.detail)}`).join('<br>')}</span></div>
   ${tb.length?`<div>${IC.book}<span><b>Textbook</b>${tb.map(esc).join('<br>')}</span></div>`:''}
   ${m?.integral?`<div>${IC.globe}<span><b>Online</b>${esc(m.integral.replace('Integral: ','Integral, '))}</span></div>`:''}
   ${L?`<div>${IC.list}<span><b>Class notebook</b>${esc(m.name)}, lesson ${L.n}: ${esc(L.name)}</span></div>`:''}
  </div></div><div class="qs">${recs.items.length>1?`<div class="qs-h">${sheetBtns(recs.items.map(b=>b.id),keyName(o.k))}</div>`:''}${recs.items.map(b=>qItem(b,sid,interactive)).join('')||'<p class="small muted" style="padding:10px 0">No past-paper questions tagged to this yet.</p>'}</div></div></div>`;
}
function sResults(me,aid,readOnly=false){
  const mine=myAssessments(me.id);
  if(!mine.length)return `<div class="empty">No results yet. Record an assessment first.</div>`;
  const a=mine.find(x=>x.id===aid)||mine[mine.length-1];const x=respMap(a.id)[me.id];
  const sc=score(a,me.id),alloc=a_alloc(a,x);const cav=classAvg(a,me.cls);
  const byL=hasLessons(a);const w=weakLessons(a,me.id);const cg=classGroup(a,me.cls,byL?'lesson':'module');const dev=w.filter(o=>o.pct<70).slice(0,3);
  let h=`<div class="ph"><div><div class="eyebrow">${readOnly?esc(me.name)+' · '+me.cls:'My results'}</div><h1>${esc(a.name)}</h1><p class="desc">Recorded ${fmDate(x.t||a.date)}</p></div>${mine.length>1?`<div class="filters"><label class="fl"><span>Assessment</span><select id="res-aid">${mine.map(m=>`<option value="${m.id}" ${m.id===a.id?'selected':''}>${esc(m.name)}</option>`).join('')}</select></label></div>`:''}</div>`;
  h+=`<div class="grid c-5-7"><div class="card"><div class="card-h"><div><h2>Score</h2></div></div><div class="card-b">${ringBlock(sc,a.total,sc+alloc,cav,me.cls)}</div></div>
  <div class="card"><div class="card-h"><div><h2>Your paper at a glance</h2><p class="hint">Each square is one mark. The letter under each question is how confident you felt.</p></div></div><div class="card-b">${paperStrip(a,x)}</div></div></div>`;
  // lessons
  const rows=Object.values(studentGroup(a,me.id,byL?'lesson':'module'));const byMod={};rows.forEach(o=>{const c=o.k.includes('-')?lessonKey(o.k).code:o.k;(byMod[c]=byMod[c]||[]).push(o)});
  h+=`<div class="grid c-7-5 mt"><div class="card"><div class="card-h"><div><h2>${byL?'Lesson by lesson':'Topic by topic'}</h2><p class="hint">Mapped to the Year 12 scheme of learning. The bar is you, the black line is the ${me.cls} average.</p></div></div><div class="card-b">${Object.keys(byMod).sort().map(c=>`<div class="grp">${esc(modLabel(c))}${MOD[c]?.fm?'<span class="fm">FM</span>':''}</div>${bulletRows(byMod[c].sort((p,q)=>p.k.localeCompare(q.k)).map(o=>({name:esc(o.k.includes('-')?`L${lessonKey(o.k).n} ${lessonKey(o.k).name}`:MOD[o.k]?.name),v:o.pct,m:cg[o.k]?.pct,detail:`${o.got} of ${o.max} marks · Q${o.parts.map(qlab).join(', Q')}`})))}`).join('')}</div></div>
  <div class="stack"><div class="card"><div class="card-h"><div><h2>Confidence check</h2><p class="hint">How sure you felt against the marks you got.</p></div></div><div class="card-b">${quadrant(classify(a,[me.id]))}</div></div>
  <div class="card"><div class="card-h"><div><h2>Exam technique</h2><p class="hint">Marks you put down to each habit.</p></div></div><div class="card-b">${(()=>{const t={};a.parts.forEach(p=>Object.entries(x.ans[p.id]?.r||{}).forEach(([k,v])=>t[k]=(t[k]||0)+v));const arr=Object.entries(t).sort((p,q)=>q[1]-p[1]);return arr.length?hbars(arr.map(([k,v])=>({name:STATIC.reasons[k],v,vt:v+(v===1?' mark':' marks')}))):'<div class="empty">No lost marks explained.</div>'})()}</div></div></div></div>`;
  h+=`<div class="card mt"><div class="card-h"><div><h2>What to work on, and where to find it</h2><p class="hint">Your lessons under 70%, lowest first. Tick questions off as you do them, your teacher can see what you've completed.</p></div></div><div class="card-b">${dev.length?dev.map(o=>focusBlock(o,me.id,!readOnly)).join(''):'<div class="empty">Nothing under 70%. Try the Level 2 and 3 questions on Integral for any topic.</div>'}</div></div>`;
  if(x.refl&&(x.refl.help||x.refl.rev))h+=`<div class="card mt"><div class="card-h"><div><h2>Reflection</h2></div></div><div class="card-b"><div class="grid c2" style="gap:12px 24px">${[['help','More help with'],['rev','Revision plan'],['hw','Practice first'],['use','Useful']].filter(([k])=>x.refl[k]).map(([k,l])=>`<div><div class="xs strong muted" style="letter-spacing:.08em;text-transform:uppercase">${l}</div><p style="margin-top:3px">${esc(x.refl[k])}</p></div>`).join('')}</div></div></div>`;
  return h;
}
function studentGroup(a,sid,by){return groupStats(a,[sid],by)}
// ---------- progress ----------
function sProgress(me){
  const as=assessments().filter(a=>respMap(a.id)[me.id]);const mine=as;const labels=as.map(a=>a.id);
  const mods=[...new Set(as.flatMap(a=>a.parts.map(p=>p.module)))].sort((x,y)=>STATIC.modules.findIndex(m=>m.code===x)-STATIC.modules.findIndex(m=>m.code===y));
  let h=`<div class="ph"><div><div class="eyebrow">Progress over time</div><h1>How each topic is going</h1><p class="desc">Topics come back in later assessments, so each line shows whether learning has stuck.</p></div></div>`;
  if(mine.length<2)h+=`<div class="note">${IC.info}<div><b>Your trends build up after each assessment.</b> With one assessment you see a single point per topic.</div></div>`;
  h+=combinedCard({pool:as,cols:[{name:'You',stat:(a,by)=>groupStats(a,[me.id],by)},{name:me.cls+' avg',stat:(a,by)=>classGroup(a,me.cls,by)}],sid:me.id,isT:false,title:'Your combined results by topic',hint:'All your marks on each topic added up across the assessments you switch on. The charts below follow the same switches.'})+'<div class="mt"></div>';
  {const f=cmbAssessments(as);if(!f.length)return h;as.length=0;as.push(...f);labels.length=0;labels.push(...f.map(a=>a.id))}
  h+=`<div class="card"><div class="card-h"><div><h2>Topics</h2><p class="hint">Your percentage each time the topic was assessed, against the ${me.cls} average.</p></div></div><div class="card-b"><div class="sm">`;
  mods.forEach(code=>{const you=as.map(a=>{const g=groupStats(a,[me.id],'module')[code];return g&&g.max?g.pct:null});const cl=as.map(a=>{const g=classGroup(a,me.cls,'module')[code];return g&&g.max?g.pct:null});
    if(you.every(v=>v==null))return;const lastV=[...you].reverse().find(v=>v!=null);
    h+=`<div class="smc"><div class="hd"><div><h3>${esc(MOD[code]?.name||code)}${MOD[code]?.fm?'<span class="fm">FM</span>':''}</h3><div class="cd">${code} · ${esc(MOD[code]?.ref||'')}</div></div>${chip(lastV,lastV+'%')}</div>${smallMult([{name:me.cls+' average',color:'var(--muted)',pts:cl,dash:true},{name:'You',color:'var(--k1)',pts:you,area:true,label:true}],labels)}</div>`});
  h+=`</div><div class="legend"><span><i class="sw line" style="background:var(--k1)"></i>You</span><span><i class="sw line" style="background:repeating-linear-gradient(90deg,var(--muted) 0 4px,transparent 4px 7px)"></i>${me.cls} average</span><span><i class="sw" style="background:var(--good-z);box-shadow:inset 0 0 0 1px var(--line)"></i>Secure zone</span><span><i class="sw" style="background:var(--bad-z);box-shadow:inset 0 0 0 1px var(--line)"></i>Priority zone</span></div></div></div>`;
  const keys=sortLessons([...new Set(mine.flatMap(a=>a.parts.flatMap(p=>p.lessons[0]?[p.lessons[0]]:[])))]);
  if(keys.length)h+=`<div class="card mt"><div class="card-h"><div><h2>Lesson by lesson</h2><p class="hint">Your percentage on each lesson every time it has been assessed.</p></div></div><div class="card-b tw"><table class="tbl"><thead><tr><th>Lesson</th>${mine.map(a=>`<th class="c">${a.id}</th>`).join('')}</tr></thead><tbody>${keys.map(k=>`<tr><td><span class="strong">${esc(lessonKey(k).name)}</span> <span class="xs muted">${lessonLabel(k,true)}</span></td>${mine.map(a=>{const g=groupStats(a,[me.id],'lesson')[k];return cellTd(g&&g.max?g.pct:null)}).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  return h;
}
// ---------- practice ----------
function sPractice(me){
  const mine=myAssessments(me.id);if(!mine.length)return `<div class="empty">Record an assessment and your practice questions will appear here.</div>`;
  const agg={};mine.forEach(a=>weakLessons(a,me.id).forEach(o=>{agg[o.k]=agg[o.k]||{k:o.k,got:0,max:0,parts:[]};agg[o.k].got+=o.got;agg[o.k].max+=o.max;agg[o.k].parts.push(...o.parts)}));
  const list=Object.values(agg).map(o=>Object.assign(o,{pct:pct(o.got,o.max)})).filter(o=>o.pct<70).sort((a,b)=>a.pct-b.pct);
  const doneCount=me.id===ME?.id?DB.done.size:(DB.doneAll[me.id]?.size||0);
  let h=`<div class="ph"><div><div class="eyebrow">Practice questions</div><h1>Your practice list</h1><p class="desc">OCR MEI past-paper questions for the lessons you've found hardest across all your assessments. Current specification first.</p></div><div class="band" style="margin:0;min-width:220px"><div class="metric"><span class="lab">Completed</span><span class="val">${doneCount}</span></div><div class="metric"><span class="lab">Lessons</span><span class="val">${list.length}</span></div></div></div>`;
  if(!list.length)return h+`<div class="empty">Everything is at 70% or above. Ask your teacher for extension questions.</div>`;
  const allIds=list.flatMap(o=>{const L=o.k.includes('-')?lessonKey(o.k):null;return bankFor(L?L.code:o.k,L?L.n:null,6,true,me.id).items.map(b=>b.id)});
  if(allIds.some(hasQ))h+=`<div class="card" style="margin-bottom:18px"><div class="card-b row" style="justify-content:space-between;gap:12px;flex-wrap:wrap"><div><b>Print your whole practice list</b><div class="small muted">The real exam questions as a PDF, with the matching mark scheme as a separate PDF so you can check your answers after.</div></div>${sheetBtns(allIds,'My practice list')}</div></div>`;
  return h+list.map(o=>focusBlock(o,me.id,true,6)).join('');
}

// ================= teacher views =================
function tFilters(showAid=true){const as=assessments();
  return `<div class="filters">${showAid?`<label class="fl"><span>Assessment</span><select id="t-aid">${as.map(a=>`<option value="${a.id}" ${a.id===S.aid?'selected':''}>${esc(a.name)}</option>`).join('')}</select></label>`:''}<label class="fl"><span>Class</span><select id="t-cls"><option value="all">All classes</option>${classes().map(c=>`<option value="${c.id}" ${c.id===S.cls?'selected':''}>${c.id}</option>`).join('')}</select></label></div>`}
const grpName=()=>S.cls==='all'?'all classes':S.cls;
function tReport(){
  const a=asm(S.aid);if(!a)return noAssess();S.aid=a.id;const all=sidsIn(S.cls),sub=submitted(a.id,S.cls);
  let h=`<div class="ph"><div><div class="eyebrow">Assessment report</div><h1>${esc(a.name)}</h1><p class="desc">${grpName()} · ${a.parts.length} question parts · ${a.total} marks · sat w/c ${fmDate(a.date)}</p></div>${tFilters()}</div>`;
  if(!sub.length)return h+`<div class="empty">No results recorded yet for this group.</div>`;
  const scores=sub.map(id=>score(a,id)).sort((x,y)=>x-y);const mean=avg(scores),med=median(scores);const q1=scores[Math.floor(scores.length*.25)],q3=scores[Math.floor(scores.length*.75)];
  const byL=hasLessons(a);const pr=priorities(a,sub);const weakest=[...pr].sort((x,y)=>x.pct-y.pct)[0];
  h+=`<div class="band">
   <div class="metric"><span class="lab">Submitted</span><span class="val">${sub.length}<small> / ${all.length}</small></span><span class="sub">${all.length-sub.length?`${all.length-sub.length} still to record`:'Everyone has recorded'}</span><div class="meter"><i style="width:${100*sub.length/all.length}%"></i></div></div>
   <div class="metric"><span class="lab">Mean score</span><span class="val">${(Math.round(mean*10)/10)}<small> / ${a.total}</small></span><span class="sub">${pct(mean,a.total)}% of available marks</span></div>
   <div class="metric"><span class="lab">Median</span><span class="val">${med}<small> / ${a.total}</small></span><span class="sub">Middle half scored ${q1} to ${q3}</span></div>
   <div class="metric"><span class="lab">Range</span><span class="val">${scores[0]}<small> to </small>${scores[scores.length-1]}</span><span class="sub">Lowest and highest</span></div>
   <div class="metric"><span class="lab">Weakest ${byL?'lesson':'topic'}</span><span class="val txt">${esc(keyName(weakest.k))}</span><span class="sub">${keyCode(weakest.k)} · ${weakest.pct}% of marks gained</span></div></div>`;
  // focus + distribution
  const totalLost=pr.reduce((t,o)=>t+o.lost,0);const top=pr.slice(0,6);let cum=0;const top3=pr.slice(0,3).reduce((t,o)=>t+o.lost,0);
  h+=`<div class="grid c-7-5"><div class="card"><div class="card-h"><div><h2>Where to focus teaching time</h2><p class="hint">${byL?'Lessons':'Topics'} ranked by total marks lost across ${grpName()}. A big lesson that everyone half-knows outranks a one-mark slip.</p></div></div><div class="card-b">
   <div class="headline">The top three ${byL?'lessons':'topics'} account for <b>${pct(top3,totalLost)}%</b> of all the marks ${grpName()} lost on this paper.</div>
   ${top.map((o,i)=>{cum+=o.lost;return `<div class="rk"><div class="n">${i+1}</div><div><div class="t">${esc(keyName(o.k))} <span class="xs muted">${keyCode(o.k)}</span></div><div class="why">${o.below.length} student${o.below.length===1?'':'s'} under 50% · Q${o.parts.map(qlab).join(', Q')}${o.why?` · most common reason: ${esc(STATIC.reasons[o.why[0]].split(',')[0].split(' (')[0])}`:''}</div></div><div class="bar-col"><div class="hb"><i style="width:${100*o.lost/top[0].lost}%"></i></div><div class="hb-l">${o.lost} marks lost · ${pct(cum,totalLost)}% cumulative</div></div><div class="pc">${chip(o.pct,o.pct+'%')}</div></div>`}).join('')}
  </div></div>
  <div class="card"><div class="card-h"><div><h2>Score distribution</h2><p class="hint">Number of students in each band of marks.</p></div></div><div class="card-b chart">${histogram(scores,a.total)}
   <div class="tw" style="margin-top:14px"><table class="tbl"><thead><tr><th>Class</th><th class="r">Submitted</th><th class="r">Mean</th><th class="r">Median</th></tr></thead><tbody>${classes().filter(c=>S.cls==='all'||c.id===S.cls).map(c=>{const s=submitted(a.id,c.id).map(id=>score(a,id));if(!s.length)return '';return `<tr><td class="strong">${c.id}</td><td class="r">${s.length}/${sidsIn(c.id).length}</td><td class="r">${Math.round(avg(s)*10)/10}</td><td class="r">${median(s)}</td></tr>`}).join('')}</tbody></table></div></div></div></div>`;
  // columns
  const ps=partStats(a,sub);const overall=pct(ps.reduce((t,s)=>t+s.got,0),ps.reduce((t,s)=>t+s.max,0));
  h+=`<div class="card mt"><div class="card-h"><div><h2>Facility by question</h2><p class="hint">Percentage of available marks gained on each part. Bar width shows the marks available, so the big questions take up more room. Hover for detail.</p></div></div><div class="card-b chart"><div class="chart-scroll">${columns(ps,overall)}</div>${statusLegend()}</div></div>`;
  // lessons dot plot + classes table
  const cls=classes().filter(c=>submitted(a.id,c.id).length&&(S.cls==='all'||c.id===S.cls));
  const g=groupStats(a,sub,byL?'lesson':'module');const gc=cls.map(c=>groupStats(a,submitted(a.id,c.id),byL?'lesson':'module'));
  const byMod={};Object.values(g).forEach(o=>{const c=o.k.includes('-')?lessonKey(o.k).code:o.k;(byMod[c]=byMod[c]||[]).push(o)});
  h+=`<div class="grid c-7-5 mt"><div class="card"><div class="card-h"><div><h2>${byL?'SoL lessons':'SoL topics'}, by class</h2><p class="hint">Grey bar is ${grpName()}, each dot is a class. Background shading marks the Priority, Developing and Secure zones.</p></div></div><div class="card-b">${Object.keys(byMod).sort().map(c=>`<div class="grp">${esc(modLabel(c))}${MOD[c]?.fm?'<span class="fm">FM</span>':''}</div>${dotRows(byMod[c].sort((p,q)=>p.k.localeCompare(q.k)).map(o=>({name:esc(o.k.includes('-')?`L${lessonKey(o.k).n} ${lessonKey(o.k).name}`:MOD[o.k]?.name),plain:keyName(o.k),sub:`Q${o.parts.map(qlab).join(', Q')}`,v:o.pct,dots:gc.map((x,i)=>({cls:cls[i].id,v:x[o.k]?.pct}))})))}`).join('')}
   <div class="legend"><span><i class="sw" style="background:var(--line-2);height:6px"></i>${grpName()}</span>${cls.map((c,i)=>`<span><i class="sw dot" style="background:${KCOL[i%3]}"></i>${c.id}</span>`).join('')}</div></div></div>`;
  const mods=[...new Set(a.parts.map(p=>p.module))].sort();
  const {t,who}=reasonTotals(a,sub);const arr=Object.entries(t).sort((x,y)=>y[1]-x[1]).slice(0,8);
  h+=`<div class="stack"><div class="card"><div class="card-h"><div><h2>Classes side by side</h2><p class="hint">Facility on each SoL topic.</p></div></div><div class="card-b tw"><table class="tbl"><thead><tr><th>Class</th>${mods.map(m=>`<th class="c" data-tip="${tip(modLabel(m))}">${m}</th>`).join('')}</tr></thead><tbody>${cls.map(c=>{const gg=groupStats(a,submitted(a.id,c.id),'module');return `<tr><td class="strong">${c.id}</td>${mods.map(m=>cellTd(gg[m].pct,`data-tip="${tip(c.id+' · '+modLabel(m),gg[m].got+'/'+gg[m].max+' marks')}"`)).join('')}</tr>`}).join('')}<tr><td class="strong">${grpName()}</td>${mods.map(m=>{const gg=groupStats(a,sub,'module');return cellTd(gg[m].pct)}).join('')}</tr></tbody></table><div class="xs muted" style="margin-top:10px">${mods.map(m=>`<b>${m}</b> ${esc(MOD[m]?.name)}`).join(' · ')}</div></div></div>
   <div class="card"><div class="card-h"><div><h2>Exam technique</h2><p class="hint">Marks students put down to each habit.</p></div></div><div class="card-b">${arr.length?hbars(arr.map(([k,v])=>({name:STATIC.reasons[k],v,vt:`${v} <span class="xs muted">· ${who[k].size} students</span>`,detail:`${v} marks · ${who[k].size} students`}))):'<div class="empty">No reasons recorded.</div>'}</div></div></div></div>`;
  {const r=respMap(a.id);const miss=all.filter(id=>!r[id]);
    h+=`<div class="grid c-7-5 mt"><div class="card"><div class="card-h"><div><h2>Confidence check</h2><p class="hint">Every student rating (one per question part) placed by how confident they felt and whether they secured 70% of the marks. Chips show the questions that appear most.</p></div></div><div class="card-b">${quadrant(classify(a,sub),{teacher:true})}</div></div>
    <div class="card"><div class="card-h"><div><h2>Still to record</h2><p class="hint">${miss.length?`${miss.length} student${miss.length===1?'':'s'} in ${grpName()} with no ${esc(a.id)} results.`:'Everyone has recorded results.'}</p></div>${miss.length?`<button class="btn sec sm" data-act="copy" data-what="missing">${IC.copy}Copy emails</button>`:''}</div><div class="card-b tw">${miss.length?`<table class="tbl"><tbody>${miss.map(id=>{const s=stu(id);return `<tr><td><span class="strong">${esc(s.name)}</span><div class="xs muted">${esc(s.email)}</div></td><td class="r"><span class="chip plain">${s.cls}</span></td></tr>`}).join('')}</tbody></table>`:''}</div></div></div>`}
  return h;
}
function tTime(){
  const as0=assessments().filter(a=>Object.keys(respMap(a.id)).length);
  const mods=[...new Set(as0.flatMap(a=>a.parts.map(p=>p.module)))].sort((x,y)=>STATIC.modules.findIndex(m=>m.code===x)-STATIC.modules.findIndex(m=>m.code===y));
  let h=`<div class="ph"><div><div class="eyebrow">Trends over time</div><h1>Every topic, every assessment</h1><p class="desc">How each SoL topic has gone each time it has been assessed, for ${grpName()}.</p></div>${tFilters(false)}</div>`;
  if(!as0.length)return h+`<div class="empty">Trends appear once students start recording results.</div>`;
  if(as0.length<2)h+=`<div class="note">${IC.info}<div><b>Only one assessment has results so far.</b> Each column fills in as assessments come back, and topics revisited in later papers show whether learning has stuck.</div></div>`;
  {const cl=S.cls==='all'?classes().filter(c=>sidsIn(c.id).length):[];
   const cols=[{name:S.cls==='all'?'All':S.cls,stat:(a,by)=>groupStats(a,submitted(a.id,S.cls),by)}].concat(cl.map(c=>({name:c.id,stat:(a,by)=>groupStats(a,submitted(a.id,c.id),by)})));
   h+=combinedCard({pool:as0,cols,sid:'_',isT:true,title:'Combined results by SoL topic',hint:`Every mark on each topic added up across the assessments you switch on, for ${grpName()}. The rest of this page follows the same switches.`})+'<div class="mt"></div>';}
  const as=cmbAssessments(as0);if(!as.length)return h;
  h+=`<div class="card"><div class="card-h"><div><h2>Topic facility by assessment</h2><p class="hint">Percentage of available marks gained. A dot means the topic wasn't in that paper.</p></div></div><div class="card-b tw"><table class="tbl"><thead><tr><th>SoL topic</th>${as.map(a=>`<th class="c">${a.id}</th>`).join('')}<th class="r">Change</th></tr></thead><tbody>${mods.map(m=>{const v=as.map(a=>{const g=groupStats(a,submitted(a.id,S.cls),'module')[m];return g&&g.max?g.pct:null});const f=v.find(x=>x!=null),l=[...v].reverse().find(x=>x!=null),n=v.filter(x=>x!=null).length;const d=n>1?l-f:null;
    return `<tr><td><span class="strong">${esc(MOD[m]?.name||m)}</span>${MOD[m]?.fm?'<span class="fm">FM</span>':''} <span class="xs muted">${m}</span></td>${v.map(cellTd).join('')}<td class="r strong">${d==null?'<span class="muted">–</span>':`<span style="color:${d>=5?'var(--good)':d<=-5?'var(--bad)':'var(--muted)'}">${d>0?'▲ +':d<0?'▼ ':''}${d}</span>`}</td></tr>`}).join('')}</tbody></table></div></div>`;
  const cl=classes().filter(c=>sidsIn(c.id).length&&(S.cls==='all'||c.id===S.cls));
  h+=`<div class="card mt"><div class="card-h"><div><h2>Topic trends by class</h2><p class="hint">One chart per topic. Hover a point for the value.</p></div></div><div class="card-b"><div class="sm">${mods.map(m=>{const series=cl.map((c,i)=>({name:c.id,color:KCOL[i%3],pts:as.map(a=>{const g=groupStats(a,submitted(a.id,c.id),'module')[m];return g&&g.max?g.pct:null})}));const coh=as.map(a=>{const g=groupStats(a,submitted(a.id,S.cls),'module')[m];return g&&g.max?g.pct:null});const lv=[...coh].reverse().find(v=>v!=null);
    return `<div class="smc"><div class="hd"><div><h3>${esc(MOD[m]?.name||m)}${MOD[m]?.fm?'<span class="fm">FM</span>':''}</h3><div class="cd">${m}</div></div>${chip(lv,lv+'%')}</div>${smallMult(series,as.map(a=>a.id))}</div>`}).join('')}</div>
   <div class="legend">${cl.map((c,i)=>`<span><i class="sw line" style="background:${KCOL[i%3]}"></i>${c.id}</span>`).join('')}</div></div></div>`;
  const rows=STATIC.reasons.map((r,i)=>({r,v:as.map(a=>reasonTotals(a,submitted(a.id,S.cls)).t[i]||0)})).filter(o=>o.v.some(Boolean));const mx=Math.max(1,...rows.flatMap(o=>o.v));
  h+=`<div class="card mt"><div class="card-h"><div><h2>Exam technique over time</h2><p class="hint">Marks lost to each habit in each assessment. Longer bar, more marks.</p></div></div><div class="card-b tw"><table class="tbl"><thead><tr><th>Habit</th>${as.map(a=>`<th class="r">${a.id}</th>`).join('')}</tr></thead><tbody>${rows.map(o=>`<tr><td class="small">${esc(o.r)}</td>${o.v.map(x=>`<td class="r" style="white-space:nowrap">${x?`<span class="strong">${x}</span><span class="minibar"><i style="width:${100*x/mx}%"></i></span>`:'<span class="muted">·</span>'}</td>`).join('')}</tr>`).join('')}</tbody></table></div></div>`;
  return h;
}
function tLessons(){
  let h=`<div class="ph"><div><div class="eyebrow">SoL coverage</div><h1>Year 12 scheme of learning</h1><p class="desc">The 2026-27 time plan, what has been assessed so far, and how each lesson went.</p></div>${tFilters(false)}</div>`;
  const as=assessments().filter(a=>Object.keys(respMap(a.id)).length);
  [...new Set(STATIC.modules.map(m=>m.window))].forEach(w=>{const ms=STATIC.modules.filter(m=>m.window===w);
    h+=`<div class="card mt"><div class="card-h"><div><h2>${w==='PA1'?'Taught before PA1':'Taught before '+esc(w)}</h2><p class="hint">${ms.length} topics</p></div></div><div class="card-b tw"><table class="tbl"><thead><tr><th>Topic</th><th>Chapter</th><th class="r">Weeks</th><th>Assessed in</th><th class="c">Latest</th></tr></thead><tbody>${ms.map(m=>{const inA=as.filter(a=>a.parts.some(p=>p.module===m.code));const last=inA[inA.length-1];const g=last?groupStats(last,submitted(last.id,S.cls),'module')[m.code]:null;
      let row=`<tr><td><span class="strong">${esc(m.name)}</span>${m.fm?'<span class="fm">FM</span>':''} <span class="xs muted">${m.code}</span></td><td class="small muted">${esc(m.ref)}</td><td class="r">${m.weeks||''}</td><td>${inA.map(a=>`<span class="chip brand">${a.id}</span>`).join(' ')||'<span class="xs muted">Not yet</span>'}</td>${g?cellTd(g.pct):'<td></td>'}</tr>`;
      const a=inA.find(x=>x.parts.some(p=>p.module===m.code&&p.lessons.length));
      if(m.lessons&&a){const gl=groupStats(a,submitted(a.id,S.cls),'lesson');row+=m.lessons.map((ln,i)=>{const k=`${m.code}-${i+1}`,o=gl[k];const low=o?submitted(a.id,S.cls).filter(id=>{const s=groupStats(a,[id],'lesson')[k];return s&&s.pct<50}).length:0;
        return `<tr><td style="padding-left:28px" class="small">L${i+1} ${esc(ln)}</td><td class="xs muted" colspan="2">${o?'Q'+o.parts.map(qlab).join(', Q')+' in '+a.id:'Not assessed yet'}</td><td class="xs">${o?`${low} under 50%`:''}</td>${o?cellTd(o.pct):'<td></td>'}</tr>`}).join('')}
      return row}).join('')}</tbody></table></div></div>`});
  return h;
}
function noAssess(){return `<div class="ph"><div><div class="eyebrow">Getting started</div><h1>No assessments yet</h1><p class="desc">Set one up under Classes and assessments.</p></div></div>`}
function tStudents(){
  if(S.tStudent){const s=stu(S.tStudent);return `<button class="btn sec sm" data-act="tback" style="margin-bottom:16px">← Back to all students</button>`+sResults(s,S.aid,true)}
  const a=asm(S.aid);if(!a)return noAssess();const sub=submitted(a.id,S.cls);const byL=hasLessons(a);
  let h=`<div class="ph"><div><div class="eyebrow">Students</div><h1>${esc(a.name.split(':')[0])} by student</h1><p class="desc">Each cell is a student's percentage on a ${byL?'lesson':'topic'}. Lowest total first. Click a name to open that student's report.</p></div>${tFilters()}</div>`;
  const keys=byL?sortLessons([...new Set(a.parts.map(p=>p.lessons[0]))]):[...new Set(a.parts.map(p=>p.module))].sort();
  const rows=sub.map(id=>({id,s:stu(id),sc:score(a,id),g:groupStats(a,[id],byL?'lesson':'module')})).sort((x,y)=>x.sc-y.sc);
  const mods=[...new Set(keys.map(k=>k.includes('-')?lessonKey(k).code:k))];
  h+=`<div class="card"><div class="card-b tw"><table class="heat"><thead><tr><th style="text-align:left">Student</th><th style="text-align:left">Score</th>${keys.map(k=>`<th class="rot"><div data-tip="${tip(byL?lessonLabel(k):modLabel(k))}">${esc(byL?lessonLabel(k,true):k)}</div></th>`).join('')}</tr></thead><tbody>${rows.map(r=>`<tr class="click" data-act="tstudent" data-sid="${r.id}"><td class="nm"><b>${esc(r.s.name)}</b> <span class="xs muted">${r.s.cls}</span></td><td class="sc"><span class="strong">${r.sc}</span><span class="xs muted">/${a.total}</span><span class="minibar"><i style="width:${100*r.sc/a.total}%"></i></span></td>${keys.map(k=>{const o=r.g[k];if(!o||!o.max)return '<td class="h x">·</td>';return `<td class="h t-${st(o.pct)}" data-tip="${tip(r.s.name,(byL?lessonLabel(k):modLabel(k))+': '+o.got+'/'+o.max+' marks')}">${o.pct}</td>`}).join('')}</tr>`).join('')}</tbody></table>
  ${statusLegend().replace('class="legend"','class="legend" style="margin-top:18px"')}
  <div class="xs muted" style="margin-top:10px;line-height:1.7">${keys.map(k=>`<b>${esc(byL?lessonLabel(k,true):k)}</b> ${esc(keyName(k))}`).join(' · ')}</div></div></div>`;
  return h;
}
function planData(){const a=asm(S.aid);const sub=submitted(a.id,S.cls);const pr=priorities(a,sub).filter(o=>o.max);
  return {a,sub,whole:[...pr].sort((x,y)=>x.pct-y.pct).slice(0,3),groups:[...pr].filter(o=>o.below.length).sort((x,y)=>y.below.length-x.below.length).slice(0,6)}}
function kc(o){return o.k.includes('-')?lessonKey(o.k):{code:o.k,n:null}}
function tPlan(){
  if(!asm(S.aid))return noAssess();const {a,sub,whole,groups}=planData();
  let h=`<div class="ph"><div><div class="eyebrow">Revision plan</div><h1>Starters and homework from ${esc(a.id)}</h1><p class="desc">Built from ${grpName()}'s results. Copy it straight into your starter and Link Back planning.</p></div><div class="row" style="align-items:flex-end">${tFilters()}<button class="btn" data-act="copy" data-what="plan">${IC.copy}Copy plan</button></div></div>`;
  if(!sub.length)return h+`<div class="empty">No results yet.</div>`;
  h+=`<div class="card"><div class="card-h"><div><h2>Whole-class starters</h2><p class="hint">The three lowest ${hasLessons(a)?'lessons':'topics'}, with two past-paper questions each. Questions already used in a Link Back or starter are pushed down the list.</p></div>${sheetBtns(whole.flatMap(o=>{const K=kc(o);return bankFor(K.code,K.n,2,false,'_').items.map(q=>q.id)}),a.name+' starters')}</div><div class="card-b">${whole.map((o,i)=>{const K=kc(o);const b=bankFor(K.code,K.n,2,false,'_').items;return `<div class="rk" style="grid-template-columns:28px minmax(0,1fr) 64px;align-items:start"><div class="n">${i+1}</div><div><div class="t">${esc(keyName(o.k))} <span class="xs muted">${keyCode(o.k)}</span></div>${b.map(q=>qItem(q,'_',false,true)).join('')}</div><div class="pc">${chip(o.pct,o.pct+'%')}</div></div>`}).join('')}</div></div>`;
  h+=`<div class="card mt"><div class="card-h"><div><h2>Targeted homework groups</h2><p class="hint">Students under 50% on a ${hasLessons(a)?'lesson':'topic'}, with three questions to set. A student can be in more than one group.</p></div></div><div class="card-b"><div class="grid c2">${groups.map(o=>{const K=kc(o);const b=bankFor(K.code,K.n,3,false,'_').items;return `<div class="focus" style="margin:0"><div class="fh"><div><h3>${esc(keyName(o.k))}</h3><div class="mod">${esc(keyCode(o.k))} · ${o.pct}% overall</div></div><span class="chip brand">${o.below.length} students</span></div><div style="padding:14px 20px 4px"><div class="xs strong muted" style="letter-spacing:.08em;text-transform:uppercase;margin-bottom:6px">Students</div><div class="row" style="gap:6px">${o.below.map(id=>`<span class="chip plain">${esc(stu(id).name)}</span>`).join('')}</div>${o.why?`<p class="xs muted" style="margin-top:10px">Most common reason: ${esc(STATIC.reasons[o.why[0]])}</p>`:''}</div><div class="qs"><div class="qs-h">${sheetBtns(b.map(q=>q.id),keyName(o.k)+' homework')}</div>${b.map(q=>qItem(q,'_',false,true)).join('')}</div></div>`}).join('')}</div></div></div>`;
  return h;
}
function planText(){const {a,whole,groups}=planData();const L=o=>o.k.includes('-')?lessonLabel(o.k):modLabel(o.k);
  let t=`Revision plan from ${a.name} (${grpName()})\n\nWhole-class starters\n`;
  whole.forEach((o,i)=>{t+=`${i+1}. ${L(o)} (${o.pct}%)\n`;bankFor(kc(o).code,kc(o).n,2,false,'_').items.forEach(b=>t+=`   - ${bankSpec(b)} ${bankSrc(b)}: ${b.desc}\n`)});
  t+=`\nTargeted homework groups\n`;groups.forEach(o=>{t+=`\n${L(o)}: ${o.below.map(id=>stu(id).name).join(', ')}\n`;bankFor(kc(o).code,kc(o).n,3,false,'_').items.forEach(b=>t+=`   - ${bankSpec(b)} ${bankSrc(b)}: ${b.desc}\n`)});return t}
function tSetup(){
  let h=`<div class="ph"><div><div class="eyebrow">Set up</div><h1>Classes and assessments</h1><p class="desc">The two things teachers set up. Students choose their class when they create an account.</p></div></div>`;
  h+=`<div class="card"><div class="card-h"><div><h2>Classes</h2><p class="hint">Students pick from this list when they sign up. Add Year 13 classes here when you're ready.</p></div></div><div class="card-b tw"><table class="tbl"><thead><tr><th>Class</th><th>Year</th><th>Teacher</th><th class="r">Students signed up</th><th>Shown at sign-up</th></tr></thead><tbody>${classes().map(c=>`<tr><td class="strong">${esc(c.id)}</td><td>Year ${c.year||12}</td><td>${esc(c.teacher||'')}</td><td class="r">${sidsIn(c.id).length}</td><td><label class="row small" style="gap:6px"><input type="checkbox" data-act="archive" data-c="${esc(c.id)}" ${c.archived?'':'checked'}> ${c.archived?'Hidden':'Shown'}</label></td></tr>`).join('')}</tbody></table>
  <form id="newclass" class="row" style="margin-top:18px;align-items:flex-end" novalidate><label class="fl"><span>Class name</span><input id="nc-name" type="text" placeholder="13MA1"></label><label class="fl"><span>Year</span><select id="nc-y"><option value="12">Year 12</option><option value="13" selected>Year 13</option></select></label><label class="fl"><span>Teacher</span><input id="nc-t" type="text" value="Mr Adams"></label><button class="btn" type="submit">${IC.plus}Add class</button><span id="nc-err" class="err"></span></form></div></div>`;
  h+=`<div class="card mt"><div class="card-h"><div><h2>Assessments</h2><p class="hint">Each question part is tagged to a SoL topic and lesson. That tagging is what drives every report. Students can only record results while an assessment is open.</p></div><button class="btn" data-act="newasm">${IC.plus}New assessment</button></div><div class="card-b tw"><table class="tbl"><thead><tr><th>Assessment</th><th>Date</th><th class="r">Parts</th><th class="r">Marks</th><th>Classes</th><th class="r">Results</th><th>Status</th><th></th></tr></thead><tbody>${assessments().map(a=>`<tr><td><span class="strong">${esc(a.name)}</span></td><td>${a.date?fmDate(a.date):''}</td><td class="r">${a.parts.length}</td><td class="r">${a.total}</td><td class="small">${a.classes.map(esc).join(', ')}</td><td class="r">${Object.keys(respMap(a.id)).length}</td><td><select data-act="status" data-aid="${esc(a.id)}" aria-label="Status of ${esc(a.id)}"><option value="draft" ${a.status==='draft'?'selected':''}>Draft (hidden)</option><option value="open" ${a.status==='open'?'selected':''}>Open for entry</option><option value="closed" ${a.status==='closed'?'selected':''}>Closed</option></select></td><td class="r"><button class="btn sec sm" data-act="viewasm" data-aid="${esc(a.id)}">View parts</button></td></tr>`).join('')}</tbody></table>${S.editing?asmEditor():''}</div></div>`;
  const nocls=students().filter(s=>!s.cls||!classes().some(c=>c.id===s.cls));
  h+=`<div class="card mt"><div class="card-h"><div><h2>Students</h2><p class="hint">${students().length} student accounts. Change a class here if someone picked the wrong one.${nocls.length?` <b style="color:var(--bad)">${nocls.length} without a class.</b>`:''}</p></div></div><div class="card-b tw"><table class="tbl"><thead><tr><th>Student</th><th>Email</th><th>Class</th></tr></thead><tbody>${[...students()].sort((x,y)=>(x.cls||'').localeCompare(y.cls||'')||x.name.localeCompare(y.name)).map(s=>`<tr><td class="strong">${esc(s.name)}</td><td class="small muted">${esc(s.email)}</td><td><select data-act="movecls" data-sid="${s.id}" aria-label="Class for ${esc(s.name)}"><option value="">No class</option>${classes().map(c=>`<option value="${esc(c.id)}" ${c.id===s.cls?'selected':''}>${esc(c.id)}</option>`).join('')}</select></td></tr>`).join('')||'<tr><td colspan="3" class="muted">No students have signed up yet.</td></tr>'}</tbody></table></div></div>`;
  return h;
}
function asmEditor(){
  const e=S.editing;const ro=e.readonly;
  const modOpts=v=>STATIC.modules.map(m=>`<option value="${m.code}" ${m.code===v?'selected':''}>${m.code} ${esc(m.name)}</option>`).join('');
  const lesOpts=(mod,v)=>`<option value="">Topic level only</option>`+(MOD[mod]?.lessons||[]).map((l,i)=>`<option value="${mod}-${i+1}" ${v===`${mod}-${i+1}`?'selected':''}>L${i+1} ${esc(l)}</option>`).join('');
  return `<div style="margin-top:22px;border-top:1px solid var(--line);padding-top:18px"><h3 style="font-size:15px;margin-bottom:12px">${ro?esc(e.name):'New assessment'}</h3>
  ${ro?'':`<div class="row" style="margin-bottom:14px;align-items:flex-end"><label class="fl" style="flex:2 1 260px"><span>Name</span><input id="na-name" type="text" value="${esc(e.name)}" placeholder="PA2: Algebra & Statistics"></label><label class="fl"><span>Date</span><input id="na-date" type="date" value="${e.date}"></label><div class="fl"><span>Classes</span><div class="row" style="min-height:38px">${classes().map(c=>`<label class="row small" style="gap:5px"><input type="checkbox" data-na-cls="${c.id}" ${e.classes.includes(c.id)?'checked':''}> ${c.id}</label>`).join('')}</div></div></div>`}
  <div class="tw"><table class="tbl"><thead><tr><th>Q</th><th>Part</th><th>Topic</th><th>Details</th><th class="r">Marks</th><th>SoL topic</th><th>SoL lesson</th><th>Textbook practice</th></tr></thead><tbody>${e.parts.map((p,i)=>ro?`<tr><td class="strong">${p.q}</td><td>${p.p}</td><td>${esc(p.topic)}</td><td class="small">${esc(p.detail)}</td><td class="r">${p.marks}</td><td class="small">${esc(modLabel(p.module))}</td><td class="small">${p.lessons.map(k=>esc(lessonLabel(k))).join('<br>')}</td><td class="small">${esc(p.textbook||'')}</td></tr>`:`<tr><td><input style="width:50px" data-pe="${i}" data-f="q" value="${esc(p.q)}" aria-label="Question"></td><td><input style="width:50px" data-pe="${i}" data-f="p" value="${esc(p.p)}" aria-label="Part"></td><td><input data-pe="${i}" data-f="topic" value="${esc(p.topic)}" aria-label="Topic"></td><td><input data-pe="${i}" data-f="detail" value="${esc(p.detail)}" aria-label="Details"></td><td><input style="width:64px" type="number" min="1" data-pe="${i}" data-f="marks" value="${p.marks}" aria-label="Marks"></td><td><select data-pe="${i}" data-f="module" aria-label="SoL topic">${modOpts(p.module)}</select></td><td><select data-pe="${i}" data-f="lesson" aria-label="SoL lesson">${lesOpts(p.module,p.lessons[0])}</select></td><td><input data-pe="${i}" data-f="textbook" value="${esc(p.textbook||'')}" aria-label="Textbook"></td></tr>`).join('')}</tbody></table></div>
  ${ro?`<button class="btn sec sm" data-act="closeed" style="margin-top:12px">Close</button>`:`<div class="row" style="margin-top:12px"><button class="btn sec sm" data-act="addpart">${IC.plus}Add a question part</button><span style="flex:1"></span><span id="na-err" class="err"></span><button class="btn sec" data-act="closeed">Cancel</button><button class="btn" data-act="saveasm">Save and open for entry</button></div>`}</div>`;
}
function tBank(){return bankBrowser(true)}
function bankBrowser(isT){
  const counts={};BANK.forEach(b=>{if(b.mod)counts[b.mod]=(counts[b.mod]||0)+1});
  if(!S.bankMod||!counts[S.bankMod])S.bankMod=Object.keys(counts).sort()[0];S.bankLes=S.bankLes||'all';S.bankSpec=S.bankSpec||'all';S.sel=S.sel||new Set();
  const m=MOD[S.bankMod];let items=BANK.filter(b=>b.mod===S.bankMod);if(S.bankLes!=='all')items=items.filter(b=>(b.les||[]).includes(+S.bankLes));
  if(S.bankSpec==='H640')items=items.filter(b=>b.spec==='H640');else if(S.bankSpec==='old')items=items.filter(b=>b.spec!=='H640');
  items.sort((x,y)=>(x.spec==='H640'?0:1)-(y.spec==='H640'?0:1)||x.i-y.i);
  const h640=BANK.filter(b=>b.spec==='H640'&&b.mod).length,leg=BANK.filter(b=>b.spec!=='H640'&&b.mod).length,withPdf=BANK.filter(b=>hasQ(b.id)).length,withMs=BANK.filter(b=>hasM(b.id)).length;
  const sel=[...S.sel];const shown=items.filter(b=>hasQ(b.id));const allOn=shown.length&&shown.every(b=>S.sel.has(b.id));
  const row=b=>{const on=S.sel.has(b.id);const ok=hasQ(b.id);return `<div class="q ${on?'picked':''}">${ok?`<input type="checkbox" data-act="bsel" data-q="${b.id}" ${on?'checked':''} aria-label="Add ${esc(bankSrc(b))} to the sheet">`:'<span></span>'}<div><div class="src"><span class="sp">${bankSpec(b)}</span> · ${esc(bankSrc(b))}${b.marks?` · ${b.marks} marks`:''}${isT&&b.used?` · used in ${esc(b.used)}`:''}${ok?'':' · <span class="muted">paper not in the bank yet</span>'}${ok&&!hasM(b.id)?' · <span class="muted">no mark scheme</span>':''}</div><div class="d mj">${esc(b.desc)}</div>${ok?`<div class="qa">${sheetBtns([b.id],bankSrc(b).replace(/ · /g,' '),true)}</div>`:''}</div></div>`};
  return `<div class="ph"><div><div class="eyebrow">Question bank</div><h1>${isT?'Past-paper questions by SoL topic':'Find past-paper questions'}</h1><p class="desc">${isT?'Tick questions to build a starter, homework or test. The PDF uses the real exam paper, and the mark scheme comes as a separate PDF.':'Pick a topic, tick the questions you want and print them. Check your answers with the mark scheme PDF after.'}</p></div></div>
  ${isT?`<div class="band"><div class="metric"><span class="lab">Tagged to the SoL</span><span class="val">${(h640+leg).toLocaleString()}</span><span class="sub">questions</span></div><div class="metric"><span class="lab">Question PDFs</span><span class="val">${withPdf.toLocaleString()}</span><span class="sub">cut from the exam papers</span></div><div class="metric"><span class="lab">Mark schemes</span><span class="val">${withMs.toLocaleString()}</span><span class="sub">cut from the published schemes</span></div><div class="metric"><span class="lab">SoL topics covered</span><span class="val">${Object.keys(counts).length}</span><span class="sub">of ${STATIC.modules.length}</span></div></div>`:''}
  <div class="selbar ${sel.length?'on':''}"><div><b>${sel.length}</b> question${sel.length===1?'':'s'} picked${sel.length?` from ${new Set(BANK.filter(b=>S.sel.has(b.id)).map(b=>b.mod)).size} topic${new Set(BANK.filter(b=>S.sel.has(b.id)).map(b=>b.mod)).size===1?'':'s'}`:''}${(()=>{const mk=BANK.filter(b=>S.sel.has(b.id)).reduce((t,b)=>t+(+b.marks||0),0);return mk?` · ${mk} mark${mk===1?'':'s'} on the current-spec questions`:''})()}</div><div class="row" style="gap:8px;flex-wrap:wrap">${sel.length?sheetBtns(sel,isT?'Question sheet':'My questions')+`<button class="btn sec sm" data-act="bclear">Clear</button>`:'<span class="small muted">Tick questions below. Your ticks stay when you change topic, so you can build one sheet from several topics.</span>'}</div></div>
  <div class="card"><div class="card-h"><div><h2>${esc(modLabel(S.bankMod))}</h2><p class="hint">${items.length} questions${S.bankLes!=='all'?' matched to this lesson':''}.</p></div><div class="filters"><label class="fl"><span>SoL topic</span><select id="bk-mod">${STATIC.modules.filter(x=>counts[x.code]).map(x=>`<option value="${x.code}" ${x.code===S.bankMod?'selected':''}>${x.code} ${esc(x.name)} (${counts[x.code]})</option>`).join('')}</select></label>${m?.lessons?`<label class="fl"><span>Lesson</span><select id="bk-les"><option value="all">All lessons</option>${m.lessons.map((l,i)=>`<option value="${i+1}" ${S.bankLes==String(i+1)?'selected':''}>L${i+1} ${esc(l)}</option>`).join('')}</select></label>`:''}<label class="fl"><span>Papers</span><select id="bk-spec"><option value="all" ${S.bankSpec==='all'?'selected':''}>All</option><option value="H640" ${S.bankSpec==='H640'?'selected':''}>Current spec (H640)</option><option value="old" ${S.bankSpec==='old'?'selected':''}>Legacy MEI</option></select></label>${shown.length?`<button class="btn sec sm" data-act="bselall" data-on="${allOn?0:1}">${allOn?'Untick all':'Tick all shown'}</button>`:''}</div></div><div class="card-b">${items.slice(0,S.bankMore?1000:60).map(row).join('')}${items.length>60&&!S.bankMore?`<button class="btn sec sm" data-act="bmore" style="margin-top:12px">Show all ${items.length}</button>`:''}</div></div>`;
}


// ================= data loading =================
async function fetchAll(make){let out=[],from=0;const size=1000;for(;;){const {data,error}=await make().range(from,from+size-1);if(error)throw error;out=out.concat(data||[]);if(!data||data.length<size)break;from+=size}return out}
function mapStudent(p){return {id:p.id,name:p.full_name||p.email,email:p.email,cls:p.class_id}}
function mapAsm(a){return {id:a.id,name:a.name,date:a.date,total:a.total,status:a.status,classes:a.classes||[],parts:a.parts||[]}}
function buildResp(rows){const r={};rows.forEach(x=>{(r[x.assessment_id]=r[x.assessment_id]||{})[x.student_id]={ans:x.answers||{},refl:x.reflection||null,t:(x.updated_at||'').slice(0,10)}});return r}
async function loadData(){
  const cls=await sb.from('classes').select('*').order('id');DB.classes=cls.data||[];
  if(ROLE==='teacher'){
    const [profs,asms,subs,done]=await Promise.all([fetchAll(()=>sb.from('profiles').select('*').eq('role','student').order('full_name')),fetchAll(()=>sb.from('assessments').select('*')),fetchAll(()=>sb.from('submissions').select('*')),fetchAll(()=>sb.from('practice_done').select('student_id,question_id'))]);
    DB.students=profs.map(mapStudent);DB.assessments=asms.map(mapAsm);DB.resp=buildResp(subs);DB.doneAll={};done.forEach(d=>{(DB.doneAll[d.student_id]=DB.doneAll[d.student_id]||new Set).add(d.question_id)});
  }else{
    const [asms,subs,agg,done]=await Promise.all([fetchAll(()=>sb.from('assessments').select('*')),fetchAll(()=>sb.from('submissions').select('*').eq('student_id',ME.id)),sb.rpc('class_summary'),fetchAll(()=>sb.from('practice_done').select('question_id').eq('student_id',ME.id))]);
    DB.students=[mapStudent(ME)];DB.assessments=asms.map(mapAsm);DB.resp=buildResp(subs);DB.agg={};(agg.data||[]).forEach(x=>{(DB.agg[x.assessment_id]=DB.agg[x.assessment_id]||{})[x.part_id]={t:parseFloat(x.total),n:x.n}});
    DB.done=new Set(done.map(d=>d.question_id));
  }
  if(!S.aid||!DB.assessments.some(a=>a.id===S.aid)){const as=assessments();S.aid=as.length?as[as.length-1].id:null}
  LOADED=true;
}
async function loadAnon(){const {data}=await sb.from('classes').select('*').order('id');DB.classes=data||[]}
async function startSession(session){
  if(!session){ROLE=null;ME=null;LOADED=false;await loadAnon();render();return}
  const {data,error}=await sb.from('profiles').select('*').eq('id',session.user.id).maybeSingle();
  if(error||!data){ROLE=null;ME=null;await sb.auth.signOut();await loadAnon();render();return}
  if(!ME||ME.id!==data.id){S.stab='home';S.sAid=null;S.recAid=null;S.tStudent=null;DRAFT=null;S.cmbSel=null;S.topicSel=new Set();S.sel=new Set();S.cmbOpen=new Set()}
  ME=data;ROLE=data.role;
  if(ROLE!=='teacher'&&S.view==='staff'){await sb.auth.signOut();ROLE=null;ME=null;await loadAnon();render();setErr('tl-err','That account is not a staff account.');return}
  try{await loadData()}catch(e){console.error(e);document.getElementById('root').innerHTML=`<div class="content"><div class="empty">Couldn't load your data. Check your internet connection and refresh the page.</div></div>`;return}
  render();
}
function setErr(id,msg){const e=document.getElementById(id);if(e)e.textContent=msg}

// ================= shell =================
function teacherLogin(){
  return `<div class="auth"><div class="brandp"><img src="${LOGO}" alt="Aston University Mathematics School">
   <h1>Staff area.<br><em>Reports and planning.</em></h1>
   <p>Assessment reports, trends over time, SoL coverage and revision planning for the Maths department. Students can't see this area.</p>
   <div class="feat"><div>${IC.report}<span><b>Assessment reports</b>Question, lesson and class analysis for every assessment.</span></div><div>${IC.plan}<span><b>Revision planning</b>Starters and homework groups built from the results.</span></div></div></div>
   <div class="formp"><div class="box"><div class="eyebrow">Staff only</div><h2>Teacher sign in</h2><p class="lead">Sign in with your staff account.</p>
   <form id="tlogin" novalidate><div class="field"><label for="tl-email">Email</label><input id="tl-email" type="email" autocomplete="username" placeholder="name@aums.ac.uk"></div><div class="field"><label for="tl-pw">Password</label><input id="tl-pw" type="password" autocomplete="current-password"></div>
   <div id="tl-err" class="err" role="alert" style="margin-bottom:10px"></div><button class="btn" type="submit" ${S.busy?'disabled':''}>${S.busy?'Signing in…':'Sign in'}</button></form>
   <p class="small muted" style="margin-top:18px;text-align:center">Not a teacher? <a class="linkbtn" href="#">Go to the student sign in</a></p></div></div></div>`;
}
function navBtn(act,k,cur,icon,label,badge){return `<button data-act="${act}" data-k="${k}" ${cur===k?'aria-current="page"':''}>${icon}<span class="lbl">${label}</span>${badge?`<span class="badge">${badge}</span>`:''}</button>`}
function sidebar(){
  let nav='',me='';
  if(ROLE!=='teacher'){const s=stu(ME.id);const todo=openFor(s.id).filter(a=>!respMap(a.id)[s.id]&&a.status==='open').length;
    nav=`<div class="sec">My maths</div>${navBtn('stab','home',S.stab,IC.home,'Overview')}${navBtn('stab','record',S.stab,IC.edit,'Record results',todo)}${navBtn('stab','results',S.stab,IC.results,'My results')}${navBtn('stab','progress',S.stab,IC.trend,'Progress')}${navBtn('stab','practice',S.stab,IC.book,'Practice')}${navBtn('stab','bank',S.stab,IC.bank,'Question bank')}`;
    me=`<div class="me"><div class="avatar">${initials(s.name)}</div><div><div class="n">${esc(s.name)}</div><div class="r">${esc(s.cls||'No class')}</div></div><button data-act="signout" aria-label="Sign out" title="Sign out">${IC.out}</button></div>`;
  }else{
    nav=`<div class="sec">Analysis</div>${navBtn('ttab','report',S.ttab,IC.report,'Assessment report')}${navBtn('ttab','time',S.ttab,IC.trend,'Trends over time')}${navBtn('ttab','students',S.ttab,IC.users,'Students')}${navBtn('ttab','lessons',S.ttab,IC.layers,'SoL coverage')}
    <div class="sec">Action</div>${navBtn('ttab','plan',S.ttab,IC.plan,'Revision plan')}
    <div class="sec">Admin</div>${navBtn('ttab','setup',S.ttab,IC.settings,'Classes and assessments')}${navBtn('ttab','bank',S.ttab,IC.bank,'Question bank')}`;
    me=`<div class="me"><div class="avatar">${initials(ME.full_name||ME.email)}</div><div><div class="n">${esc(ME.full_name||ME.email)}</div><div class="r">Teacher</div></div><button data-act="signout" aria-label="Sign out" title="Sign out">${IC.out}</button></div>`;
  }
  return `<aside class="side"><div class="logo"><img src="${LOGO}" alt="Aston University Mathematics School"><div class="prod">Assessment Tracker</div></div><nav class="nav" aria-label="Main">${nav}</nav>${me}</aside>`;
}
function render(){
  const root=document.getElementById('root');
  if(!sb){root.innerHTML=`<div class="content"><div class="empty">The tracker isn't connected to its database yet. Add the Supabase details to config.js.</div></div>`;return}
  if(S.recovery||!ME){root.innerHTML=`<div class="main" style="min-height:100%">${S.view==='staff'&&!S.recovery?teacherLogin():authView()}</div>`;return}
  if(!LOADED){root.innerHTML=`<div class="content"><div class="empty">Loading…</div></div>`;return}
  const body=ROLE!=='teacher'?studentPage(stu(ME.id)):({report:tReport,time:tTime,lessons:tLessons,students:tStudents,plan:tPlan,setup:tSetup,bank:tBank}[S.ttab]||tReport)();
  root.innerHTML=`<div class="app">${sidebar()}<div class="main"><main class="content" id="main">${body}</main></div></div>`;
  typeset(document.getElementById('main'));
}
function typeset(el){const go=()=>{const t=el.querySelectorAll('.mj');if(t.length&&window.MathJax?.typesetPromise)MathJax.typesetPromise([...t]).catch(()=>{})};if(window.MathJax?.typesetPromise)go();else setTimeout(()=>{if(window.MathJax?.typesetPromise)go()},1500)}
function toast(t){const d=document.createElement('div');d.className='toast';d.textContent=t;document.body.appendChild(d);setTimeout(()=>d.remove(),2400)}
function copy(text,msg){const done=()=>toast(msg);try{navigator.clipboard.writeText(text).then(done,fallback)}catch(e){fallback()}
  function fallback(){const ta=document.createElement('textarea');ta.value=text;document.body.appendChild(ta);ta.select();try{document.execCommand('copy');done()}catch(e){toast('Select and copy the text')}ta.remove()}}
const top0=()=>window.scrollTo(0,0);
async function refresh(msg){await loadData();if(msg)toast(msg);render()}

document.addEventListener('click',async e=>{
  const t=e.target.closest('[data-act]');if(!t)return;const act=t.dataset.act;
  if(act==='done'||act==='archive'||act==='status'||act==='movecls'||act==='bsel')return;
  if(act==='qpdf'){if(t.disabled)return;t.disabled=true;try{await makeSheet(t.dataset.ids.split(','),t.dataset.kind,t.dataset.title||'Practice')}catch(err){console.error(err);toast("Couldn't make the PDF. Try again.")}t.disabled=false;return}
  if(act==='cmbtog'){const all=S.cmbPool||[];const on=S.cmbSel?new Set(S.cmbSel):new Set(all);const id=t.dataset.aid;on.has(id)?on.delete(id):on.add(id);S.cmbSel=on.size===all.length?null:on;const y=window.scrollY;render();window.scrollTo(0,y);return}
  if(act==='cmball'||act==='cmbnone'){S.cmbSel=act==='cmball'?null:new Set();const y=window.scrollY;render();window.scrollTo(0,y);return}
  if(act==='cmbopen'){S.cmbOpen=S.cmbOpen||new Set();const k=t.dataset.k;S.cmbOpen.has(k)?S.cmbOpen.delete(k):S.cmbOpen.add(k);const y=window.scrollY;render();window.scrollTo(0,y);return}
  if(act==='tselweak'){S.topicSel=S.topicSel||new Set();t.dataset.keys.split('|').forEach(k=>S.topicSel.add(k));const y=window.scrollY;render();window.scrollTo(0,y);return}
  if(act==='tclear'){S.topicSel=new Set();const y=window.scrollY;render();window.scrollTo(0,y);return}
  if(act==='tsel')return;
  if(act==='bclear'){S.sel=new Set()}
  else if(act==='bselall'){const on=t.dataset.on==='1';document.querySelectorAll('[data-act="bsel"]').forEach(x=>{on?S.sel.add(x.dataset.q):S.sel.delete(x.dataset.q)})}
  else if(act==='bmore'){S.bankMore=true}
  else
  if(act==='authtab'){S.authTab=t.dataset.k}
  else if(act==='stab'){S.stab=t.dataset.k;top0()}
  else if(act==='ttab'){S.ttab=t.dataset.k;S.tStudent=null;S.editing=null;top0()}
  else if(act==='signout'){await sb.auth.signOut();DRAFT=null;S.tStudent=null;toast('Signed out');return}
  else if(act==='forgot'){const em=(document.getElementById('si-email')?.value||'').trim().toLowerCase();if(!/^[^@\s]+@aums\.ac\.uk$/.test(em)){setErr('si-err','Type your school email above first, then press "Forgotten your password?" again.');return}
    const {error}=await sb.auth.resetPasswordForEmail(em,{redirectTo:location.origin+location.pathname});setErr('si-err',error?"The reset email couldn't be sent just now. Ask your maths teacher for help.":'Check your school email for a link to reset your password.');return}
  else if(act==='record'){S.recAid=t.dataset.aid;S.stab='record';top0()}
  else if(act==='results'){S.sAid=t.dataset.aid;S.stab='results';top0()}
  else if(act==='step'||act==='rstep'){const a=asm(DRAFT.aid);
    if(act==='step'){const p=a.parts.find(x=>x.id===t.dataset.p);const cur=DRAFT.ans[p.id].s;DRAFT.ans[p.id].s=Math.max(0,Math.min(p.marks,(cur??(+t.dataset.d>0?-1:1))+ +t.dataset.d));document.getElementById('sc-'+p.id).value=DRAFT.ans[p.id].s}
    else{const i=t.dataset.i;DRAFT.r[i]=Math.max(0,(+DRAFT.r[i]||0)+ +t.dataset.d);document.getElementById('rs-'+i).value=DRAFT.r[i]||''}
    updSums();return}
  else if(act==='conf'){DRAFT.ans[t.dataset.p].c=t.dataset.c;t.parentNode.querySelectorAll('button').forEach(b=>b.setAttribute('aria-pressed',b===t));updSums();return}
  else if(act==='submit'){submitDraft();return}
  else if(act==='tstudent'){S.tStudent=t.dataset.sid;top0()}
  else if(act==='tback'){S.tStudent=null}
  else if(act==='copy'){if(t.dataset.what==='plan')copy(planText(),'Plan copied');else{const a=asm(S.aid);const r=respMap(a.id);copy(sidsIn(S.cls).filter(id=>!r[id]).map(id=>stu(id).email).join('; '),'Email addresses copied')}return}
  else if(act==='newasm'){S.editing={name:'',date:new Date().toISOString().slice(0,10),classes:classes().filter(c=>!c.archived).map(c=>c.id),parts:[{q:'1',p:'',topic:'',detail:'',marks:4,module:'A&S 02',lessons:[],textbook:''}]}}
  else if(act==='viewasm'){const a=asm(t.dataset.aid);S.editing=Object.assign(JSON.parse(JSON.stringify(a)),{readonly:true})}
  else if(act==='closeed'){S.editing=null}
  else if(act==='addpart'){readEditor();const l=S.editing.parts[S.editing.parts.length-1];S.editing.parts.push({q:String((+l.q||0)+1),p:'',topic:'',detail:'',marks:4,module:l.module,lessons:[],textbook:''})}
  else if(act==='saveasm'){readEditor();const ed=S.editing,err=document.getElementById('na-err');
    if(!ed.name.trim()){err.textContent='Give the assessment a name.';return}
    if(ed.parts.some(p=>!p.topic.trim()||!(p.marks>0))){err.textContent='Every part needs a topic and marks.';return}
    const ids=ed.parts.map(p=>p.q+p.p);if(new Set(ids).size!==ids.length){err.textContent='Two parts have the same question and part number.';return}
    const id=ed.name.split(':')[0].trim().replace(/\s+/g,'')||('A'+Date.now());
    if(assessments().some(a=>a.id===id)){err.textContent=`There's already an assessment called ${id}. Start the name differently.`;return}
    const row={id,name:ed.name.trim(),date:ed.date||null,classes:ed.classes,status:'open',parts:ed.parts.map(p=>({id:p.q+p.p,q:p.q,p:p.p,topic:p.topic,detail:p.detail,marks:+p.marks,module:p.module,lessons:p.lessons,textbook:p.textbook})),total:ed.parts.reduce((s,p)=>s+ +p.marks,0)};
    const {error}=await sb.from('assessments').insert(row);if(error){err.textContent='Could not save: '+error.message;return}
    S.editing=null;await refresh('Assessment saved and opened for entry');return}
  else return;
  save();render();
});
function readEditor(){const ed=S.editing;if(!ed||ed.readonly)return;const n=document.getElementById('na-name');if(n)ed.name=n.value;const d=document.getElementById('na-date');if(d)ed.date=d.value;
  ed.classes=[...document.querySelectorAll('[data-na-cls]')].filter(x=>x.checked).map(x=>x.dataset.naCls);
  document.querySelectorAll('[data-pe]').forEach(x=>{const p=ed.parts[+x.dataset.pe],f=x.dataset.f;if(f==='lesson')p.lessons=x.value?[x.value]:[];else if(f==='marks')p.marks=+x.value;else p[f]=x.value})}
document.addEventListener('change',async e=>{const t=e.target;
  if(t.dataset.act==='done'){const q=t.dataset.q;t.closest('.q').classList.toggle('done',t.checked);
    const r=t.checked?await sb.from('practice_done').upsert({student_id:ME.id,question_id:q}):await sb.from('practice_done').delete().eq('student_id',ME.id).eq('question_id',q);
    if(r.error){toast("Couldn't save that. Try again.");t.checked=!t.checked;t.closest('.q').classList.toggle('done',t.checked)}else{t.checked?DB.done.add(q):DB.done.delete(q)}return}
  if(t.dataset.act==='tsel'){S.topicSel=S.topicSel||new Set();t.checked?S.topicSel.add(t.dataset.k):S.topicSel.delete(t.dataset.k);const y=window.scrollY;render();window.scrollTo(0,y);return}
  if(t.id==='cmb-per'||t.id==='cmb-sort'){if(t.id==='cmb-per')S.cmbPer=+t.value;else S.cmbSort=t.value;const y=window.scrollY;render();window.scrollTo(0,y);return}
  if(t.dataset.act==='bsel'){S.sel=S.sel||new Set();t.checked?S.sel.add(t.dataset.q):S.sel.delete(t.dataset.q);const y=window.scrollY;render();window.scrollTo(0,y);return}
  if(t.dataset.act==='status'){const {error}=await sb.from('assessments').update({status:t.value}).eq('id',t.dataset.aid);if(error){toast("Couldn't change the status");return}await refresh('Status updated');return}
  if(t.dataset.act==='archive'){const {error}=await sb.from('classes').update({archived:!t.checked}).eq('id',t.dataset.c);if(error){toast("Couldn't update the class");return}await refresh();return}
  if(t.dataset.act==='movecls'){const {error}=await sb.from('profiles').update({class_id:t.value||null}).eq('id',t.dataset.sid);if(error){toast("Couldn't move the student");return}await refresh('Class updated');return}
  if(t.id==='t-aid'){S.aid=t.value;S.tStudent=null}
  else if(t.id==='t-cls'){S.cls=t.value}
  else if(t.id==='rec-aid'){S.recAid=t.value;DRAFT=null}
  else if(t.id==='res-aid'){S.sAid=t.value}
  else if(t.id==='bk-mod'){S.bankMod=t.value;S.bankLes='all';S.bankMore=false}
  else if(t.id==='bk-les'){S.bankLes=t.value}
  else if(t.id==='bk-spec'){S.bankSpec=t.value}
  else if(t.dataset.pe!==undefined&&t.dataset.f==='module'){readEditor();S.editing.parts[+t.dataset.pe].lessons=[]}
  else return;
  save();render();
});
document.addEventListener('input',e=>{const t=e.target;if(!DRAFT)return;
  if(t.dataset.p&&t.id.startsWith('sc-')){const v=t.value.trim();const mx=+t.dataset.max;DRAFT.ans[t.dataset.p].s=v===''?null:Math.max(0,Math.min(mx,parseInt(v)||0));if(v!==''&&String(DRAFT.ans[t.dataset.p].s)!==v)t.value=DRAFT.ans[t.dataset.p].s;updSums()}
  else if(t.dataset.ri!==undefined){DRAFT.r[t.dataset.ri]=Math.max(0,parseInt(t.value)||0);updSums()}
  else if(t.dataset.rf){DRAFT.refl[t.dataset.rf]=t.value}
});
function busy(on){S.busy=on}
document.addEventListener('submit',async e=>{e.preventDefault();const f=e.target;const v=id=>(document.getElementById(id)?.value||'').trim();
  if(f.id==='signup'){const name=v('su-name'),email=v('su-email').toLowerCase(),pw=document.getElementById('su-pw').value,cls=v('su-cls');
    if(name.split(/\s+/).length<2)return setErr('su-err','Enter your first name and surname.');
    if(!/^[^@\s]+@aums\.ac\.uk$/.test(email))return setErr('su-err','Use your school email ending @aums.ac.uk.');
    if(!cls)return setErr('su-err','Choose your maths class.');
    if(pw.length<8)return setErr('su-err','Your password needs at least 8 characters.');
    f.querySelector('button').disabled=true;f.querySelector('button').textContent='Creating your account…';
    const {data,error}=await sb.auth.signUp({email,password:pw,options:{data:{full_name:name,class_id:cls}}});
    if(error){f.querySelector('button').disabled=false;f.querySelector('button').textContent='Create account';const m=(error.message||'').toLowerCase();
      return setErr('su-err',m.includes('registered')||m.includes('exists')?'There is already an account with that email. Use Sign in instead.':m.includes('database')?'Use your school email ending @aums.ac.uk.':m.includes('rate')?'Too many sign-ups at once. Wait a minute and try again.':'Something went wrong: '+error.message)}
    if(!data.session){S.authTab='signin';render();setErr('si-err','Account created. Check your school email to confirm it, then sign in.');return}
    toast(`Account created. You're in ${cls}.`);return}
  if(f.id==='signin'){const email=v('si-email').toLowerCase(),pw=document.getElementById('si-pw').value;if(!email||!pw)return setErr('si-err','Enter your email and password.');
    f.querySelector('button').disabled=true;const {error}=await sb.auth.signInWithPassword({email,password:pw});
    if(error){f.querySelector('button').disabled=false;return setErr('si-err',"That email and password don't match. Check them and try again.")}return}
  if(f.id==='tlogin'){const em=v('tl-email').toLowerCase()||CFG.staffEmail,pw=document.getElementById('tl-pw').value;if(!pw)return setErr('tl-err','Enter your password.');f.querySelector('button').disabled=true;
    const {error}=await sb.auth.signInWithPassword({email:em,password:pw});
    if(error){f.querySelector('button').disabled=false;const i=document.getElementById('tl-pw');i.value='';i.focus();return setErr('tl-err',"That email and password don't match.")}return}
  if(f.id==='newpw'){const pw=document.getElementById('np-pw').value;if(pw.length<8)return setErr('np-err','Your password needs at least 8 characters.');
    const {error}=await sb.auth.updateUser({password:pw});if(error)return setErr('np-err','Could not save the new password: '+error.message);S.recovery=false;toast('Password saved');const {data}=await sb.auth.getSession();startSession(data.session);return}
  if(f.id==='newclass'){const n=v('nc-name').toUpperCase(),y=+v('nc-y'),tt=v('nc-t');
    if(!n)return setErr('nc-err','Give the class a name.');if(classes().some(c=>c.id===n))return setErr('nc-err','That class already exists.');
    const {error}=await sb.from('classes').insert({id:n,year:y,teacher:tt||'Mr Adams'});if(error)return setErr('nc-err','Could not add the class: '+error.message);
    await refresh(`${n} added`)}
});
const tipEl=document.getElementById('tip');
document.addEventListener('mouseover',e=>{const t=e.target.closest('[data-tip]');if(!t||!t.dataset.tip){tipEl.classList.remove('on');return}const [a,b]=t.dataset.tip.split('||');tipEl.innerHTML=b?`<b>${esc(a)}</b><br>${esc(b)}`:esc(a);tipEl.classList.add('on')});
document.addEventListener('mousemove',e=>{if(!tipEl.classList.contains('on'))return;const w=tipEl.offsetWidth,h=tipEl.offsetHeight;let x=e.clientX+14,y=e.clientY+16;if(x+w>innerWidth-8)x=e.clientX-w-12;if(y+h>innerHeight-8)y=e.clientY-h-12;tipEl.style.left=x+'px';tipEl.style.top=y+'px'});
document.addEventListener('mouseout',e=>{if(!e.relatedTarget||!e.relatedTarget.closest?.('[data-tip]'))tipEl.classList.remove('on')});
window.addEventListener('hashchange',()=>{S.view=location.hash==='#staff'?'staff':'student';if(!ME)render()});
window.addEventListener('load',()=>{const m=document.getElementById('main');if(m)typeset(m)});
(async function init(){
  if(!sb){render();return}
  render();
  let lastUid=null;
  sb.auth.onAuthStateChange((event,session)=>{
    if(event==='PASSWORD_RECOVERY'){S.recovery=true;S.view='student';render();return}
    const uid=session?.user?.id||null;if(event==='TOKEN_REFRESHED'||(event==='INITIAL_SESSION'&&uid===lastUid&&uid))return;
    if(uid===lastUid&&event!=='INITIAL_SESSION'&&event!=='SIGNED_OUT')return;lastUid=uid;
    setTimeout(()=>startSession(session),0);
  });
})();

