let DATA=null, REGISTRY=null, CURRENT_SET=null, state=null;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
const nums=['①','②','③','④','⑤'];

function storeKey(){return 'letsstudy:'+CURRENT_SET;}
function freshState(){return {mcq:{},essay:{},grades:{}};}
function loadState(){state=JSON.parse(localStorage.getItem(storeKey())||'null')||freshState();state.mcq||={};state.essay||={};state.grades||={};}
function save(){localStorage.setItem(storeKey(),JSON.stringify(state));$('#saveState').textContent='저장됨';renderDashboard();}
function esc(v=''){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function mcqScore(){return DATA.mcq.reduce((n,q)=>n+(Number(state.mcq[q.id])===q.answer?1:0),0);}
function essayAverage(){const gs=Object.values(state.grades);return gs.length?Math.round(gs.reduce((a,g)=>a+Number(g.score||0),0)/gs.length):null;}

function applyMeta(){
  const m=DATA.meta||{};
  document.title=(m.title||'Let\'s Study')+' · Let\'s Study';
  $('#brandSubject').textContent=m.subject||'문제풀이';
  $('#heroEyebrow').textContent=[m.subject,m.level].filter(Boolean).join(' · ')||'문제 세트';
  $('#heroTitle').textContent=m.title||'문제 세트';
  $('#heroDesc').textContent=m.description||'문제를 풀고 바로 채점하세요.';
}
function renderSetSelect(){
  const s=$('#setSelect');
  s.innerHTML=REGISTRY.sets.map(x=>`<option value="${esc(x.id)}" ${x.id===CURRENT_SET?'selected':''}>${esc(x.subject)} · ${esc(x.title)}</option>`).join('');
  s.onchange=()=>selectSet(s.value);
}
async function selectSet(id){
  const meta=REGISTRY.sets.find(x=>x.id===id)||REGISTRY.sets[0];
  CURRENT_SET=meta.id;
  const r=await fetch(meta.file,{cache:'no-store'});
  if(!r.ok)throw new Error('문제 세트를 불러오지 못했습니다.');
  DATA=await r.json();loadState();applyMeta();renderSetSelect();renderDashboard();renderMcq();renderEssay();renderResults();
  const u=new URL(location.href);u.searchParams.set('set',CURRENT_SET);history.replaceState(null,'',u);
}
function renderDashboard(){
  const m=DATA.mcq.length,e=DATA.essay.length,answered=Object.keys(state.mcq).length,written=Object.values(state.essay).filter(x=>String(x).trim()).length,graded=Object.keys(state.grades).length,avg=essayAverage();
  $('#dashboard').innerHTML=[['객관식 응답',`${answered}/${m}`],['객관식 현재 정답',`${mcqScore()}/${m}`],['서술형 작성',`${written}/${e}`],['AI 채점',graded?`${graded}/${e} · ${avg}점`:`0/${e}`]].map(([a,b])=>`<div class="stat-card"><small>${a}</small><b>${b}</b></div>`).join('');
}
function renderMcq(){
  const view=$('#mcqView');
  if(!DATA.mcq.length){view.innerHTML='<div class="empty">이 세트에는 객관식 문항이 없습니다.</div>';return;}
  view.innerHTML=DATA.mcq.map(q=>{const selected=state.mcq[q.id];return `<article class="card" id="mcq-${q.id}"><div class="unit">${esc(q.unit||'')}</div><div class="question">${q.id}. ${esc(q.q)}</div>${q.options.map((o,i)=>`<label class="choice" data-index="${i}"><input type="radio" name="m${q.id}" value="${i}" ${Number(selected)===i?'checked':''}> <span>${nums[i]||((i+1)+'.')} ${esc(o)}</span></label>`).join('')}<div class="toolbar"><button class="btn primary" data-grade-mcq="${q.id}">바로 채점</button></div><div class="feedback hidden" id="mcqfb-${q.id}"></div></article>`;}).join('');
  $$('input[type=radio]').forEach(el=>el.addEventListener('change',e=>{const id=Number(e.target.name.slice(1));state.mcq[id]=Number(e.target.value);save();}));
  $$('[data-grade-mcq]').forEach(b=>b.addEventListener('click',()=>gradeMcq(Number(b.dataset.gradeMcq))));
}
function gradeMcq(id){
  const q=DATA.mcq.find(x=>x.id===id),card=$(`#mcq-${id}`),selected=state.mcq[id],labels=[...card.querySelectorAll('.choice')],fb=$(`#mcqfb-${id}`);
  labels.forEach(x=>x.classList.remove('correct','wrong'));labels[q.answer]?.classList.add('correct');fb.classList.remove('hidden');
  if(selected===undefined){fb.innerHTML=`<strong class="bad">미응답</strong> · 정답 ${nums[q.answer]||q.answer+1}<br>${esc(q.explanation||'')}`;return;}
  if(Number(selected)===q.answer)fb.innerHTML=`<strong class="good">정답</strong> · ${esc(q.explanation||'')}`;
  else{labels[Number(selected)]?.classList.add('wrong');fb.innerHTML=`<strong class="bad">오답</strong> · 정답 ${nums[q.answer]||q.answer+1}<br>${esc(q.explanation||'')}`;}
}
function renderEssay(){
  const view=$('#essayView');
  if(!DATA.essay.length){view.innerHTML='<div class="empty">이 세트에는 서술형 문항이 없습니다.</div>';return;}
  view.innerHTML=`<div class="notice">AI 채점은 배포 서버에 <code>OPENAI_API_KEY</code>가 설정되어 있을 때 작동합니다. 답안과 채점 기록은 이 브라우저에 세트별로 저장됩니다.</div>`+DATA.essay.map(q=>`<article class="card" id="essay-${q.id}"><div class="unit">${esc(q.unit||'')}</div><div class="question">${q.id}. ${esc(q.q)}</div><div class="conditions"><b>&lt;조건&gt;</b><br>${esc(q.cond||'없음')}</div><textarea class="answer-box" data-answer="${q.id}" placeholder="내 답안을 작성하세요.">${esc(state.essay[q.id]||'')}</textarea><div class="toolbar"><button class="btn primary" data-ai-grade="${q.id}">AI 채점</button><button class="btn ghost" data-clear="${q.id}">답안 지우기</button></div><div class="grade-panel ${state.grades[q.id]?'':'hidden'}" id="grade-${q.id}">${state.grades[q.id]?gradeHtml(state.grades[q.id]):''}</div></article>`).join('');
  $$('[data-answer]').forEach(t=>t.addEventListener('input',e=>{state.essay[Number(e.target.dataset.answer)]=e.target.value;save();}));
  $$('[data-ai-grade]').forEach(b=>b.addEventListener('click',()=>gradeEssay(Number(b.dataset.aiGrade),b)));
  $$('[data-clear]').forEach(b=>b.addEventListener('click',()=>{const id=Number(b.dataset.clear);if(confirm('이 답안을 지울까요?')){state.essay[id]='';delete state.grades[id];save();renderEssay();}}));
}
function gradeHtml(g){
  const cls=g.score>=80?'score-good':g.score>=50?'score-mid':'score-bad';
  return `<div class="grade-head"><span class="grade-score ${cls}">${g.score}점</span><span class="verdict">${esc(g.verdict)}</span></div><p><b>평가</b><br>${esc(g.feedback)}</p><p><b>충족한 요소</b></p><div class="pillbox">${(g.met||[]).map(x=>`<span class="pill good">${esc(x)}</span>`).join('')||'<span class="pill">없음</span>'}</div><p><b>보완할 요소</b></p><div class="pillbox">${(g.missed||[]).map(x=>`<span class="pill bad">${esc(x)}</span>`).join('')||'<span class="pill good">없음</span>'}</div><p><b>최소 수정 답안</b></p><div class="improved">${esc(g.improved_answer)}</div>`;
}
async function gradeEssay(id,button){
  const answer=String(state.essay[id]||'').trim();if(!answer){alert('답안을 먼저 작성하세요.');return;}
  const old=button.innerHTML;button.disabled=true;button.innerHTML='<span class="spinner"></span> 채점 중…';
  try{
    const r=await fetch('/api/grade',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({set_id:CURRENT_SET,question_id:id,answer})});
    const data=await r.json();if(!r.ok)throw new Error(data.error||'채점에 실패했습니다.');
    state.grades[id]=data;save();const panel=$(`#grade-${id}`);panel.innerHTML=gradeHtml(data);panel.classList.remove('hidden');panel.scrollIntoView({behavior:'smooth',block:'nearest'});
  }catch(e){alert(e.message);}finally{button.disabled=false;button.innerHTML=old;}
}
function unitStats(){
  const out={};DATA.mcq.forEach(q=>{out[q.unit]||={mcq:[0,0],essay:[]};out[q.unit].mcq[1]++;if(Number(state.mcq[q.id])===q.answer)out[q.unit].mcq[0]++;});
  DATA.essay.forEach(q=>{out[q.unit]||={mcq:[0,0],essay:[]};if(state.grades[q.id])out[q.unit].essay.push(Number(state.grades[q.id].score));});return out;
}
function renderResults(){
  if(!DATA)return;const ea=essayAverage(),stats=unitStats(),m=DATA.mcq.length,e=DATA.essay.length;
  $('#resultsView').innerHTML=`<div class="results-grid"><div class="result-card"><div>객관식</div><div class="big">${mcqScore()} / ${m}</div><div>현재 선택 기준</div></div><div class="result-card"><div>서술형 AI 채점 평균</div><div class="big">${ea===null?'—':ea+'점'}</div><div>${Object.keys(state.grades).length} / ${e}문항 채점</div></div></div><article class="card"><div class="question">단원별 현황</div><table class="unit-table"><thead><tr><th>단원</th><th>객관식</th><th>서술형</th></tr></thead><tbody>${Object.entries(stats).map(([u,s])=>`<tr><td>${esc(u||'기타')}</td><td>${s.mcq[0]}/${s.mcq[1]}</td><td>${s.essay.length?Math.round(s.essay.reduce((a,b)=>a+b,0)/s.essay.length)+'점 평균':'미채점'}</td></tr>`).join('')}</tbody></table></article><article class="card"><div class="question">데이터 관리</div><p class="small">현재 문제 세트의 답안과 채점 기록만 초기화합니다.</p><button class="btn secondary" id="resetAll">현재 세트 초기화</button></article>`;
  $('#resetAll').onclick=()=>{if(confirm('현재 문제 세트의 답안과 채점 기록을 모두 삭제할까요?')){localStorage.removeItem(storeKey());loadState();renderDashboard();renderMcq();renderEssay();renderResults();}};
}
function switchView(v){$$('.view').forEach(x=>x.classList.add('hidden'));$$('.tab').forEach(x=>x.classList.toggle('active',x.dataset.view===v));$(`#${v}View`).classList.remove('hidden');if(v==='results')renderResults();window.scrollTo({top:0,behavior:'smooth'});}
$$('.tab').forEach(b=>b.addEventListener('click',()=>switchView(b.dataset.view)));

async function init(){
  const rr=await fetch('/sets/index.json',{cache:'no-store'});REGISTRY=await rr.json();
  const requested=new URL(location.href).searchParams.get('set');
  await selectSet(REGISTRY.sets.some(x=>x.id===requested)?requested:REGISTRY.sets[0].id);
}
init().catch(e=>{document.body.innerHTML=`<main class="shell"><div class="card"><h2>문제 세트를 불러오지 못했습니다.</h2><p>${esc(e.message)}</p></div></main>`;});
