import"./styles-BpbWneWI.js";(function(){const s=(e,t)=>(t||document).querySelector(e),a=(e,t)=>Array.from((t||document).querySelectorAll(e));s("#year").textContent=new Date().getFullYear();const w=[{code:"UK",cc:"gb",name:"United Kingdom",note:"CAS guidance available"},{code:"US",cc:"us",name:"United States",note:"F-1 pathways"},{code:"CA",cc:"ca",name:"Canada",note:"Study permit routes"},{code:"AU",cc:"au",name:"Australia",note:"Subclass 500"},{code:"IE",cc:"ie",name:"Ireland",note:"EU study routes"},{code:"CN",cc:"cn",name:"China",note:"Scholarship options"},{code:"NZ",cc:"nz",name:"New Zealand",note:"Fern programmes"}],o=[{icon:"bi-file-text",kicker:"Step 1",title:"Submit your application",body:"Submit your company details and required agent verification documents using the education agent application form on this page.",meta:["Company & director details","References","Verification documents"]},{icon:"bi-shield-check",kicker:"Step 2",title:"Partner review & onboarding",body:"We review your submission and contact you with next steps. Approved partners receive onboarding guidance for portal access and workflow setup.",meta:["Compliance & quality check","Agreement signed","Portal access granted"]},{icon:"bi-signpost-split",kicker:"Step 3",title:"Submit students & track",body:"After onboarding, submit student profiles, upload documents, and track every case in real time using the agent portal.",meta:["CRM-style pipeline","Document checklists","Live application updates"]},{icon:"bi-award",kicker:"Step 4",title:"Ongoing support & training",body:"Partners receive updates, guidance, and training opportunities to improve counselling quality and the student experience.",meta:["Monthly training","Product updates","Dedicated B2B manager"]}],M=[{q:"How Do I Apply To Become An Agent?",a:"Use the education agent application form on this page to submit company details, director information, references, and agent verification documents."},{q:"Do You Work With Individual Counsellors Or Only Companies?",a:"We can consider both, depending on partner type and verification. Submit the form and we will advise the most suitable onboarding route."},{q:"Which Destinations Can I Recruit For?",a:"You can recruit for our targeted destinations: UK, USA, Canada, Australia, Ireland, China, and New Zealand. Availability depends on student profile and intake."},{q:"Do You Provide Visa Support?",a:"We provide visa-readiness guidance and checklist support for visa-required routes. For UK routes, we can provide CAS guidance where applicable. Final decisions are made by relevant authorities."},{q:"How Do I Track My Students?",a:"Approved partners use the agent portal with application tracking and structured stages to keep pipelines organised and reduce repeated follow-ups."},{q:"Is There A Minimum Number Of Students Required?",a:"Requirements vary by partner type. If you are new, we focus on quality, process, and compliance first."},{q:"How Long Does Approval Take?",a:"Approval times vary depending on how quickly verification documents are completed. Submitting complete information helps speed up review."},{q:"Do You Provide Training?",a:"Yes — approved partners can receive partner training and updates to support counselling quality and consistent processes."}],T=[{city:"London",address:"11 Beaufort Court, Admirals Way, Canary Wharf, London, E14 9XL",phone:"+44 (0) 20 3318 9380"},{city:"Manchester",address:"3rd Floor, Pleer House, 1 Fennel St, Manchester, M4 3DU",phone:"+44 (0) 7305 314412"},{city:"Milton Keynes",address:"Unit 23B, Lloyds Court, 33 North 10th Street, Milton Keynes, Buckinghamshire, MK9 3EH",phone:"+44 7359 323132"},{city:"Dhaka",address:"4th Floor, Cube Holdings Plot 07, Road 17, Block D Banani, Dhaka 1213, Bangladesh",phone:"+88 0140 709 3812"},{city:"Badda",address:"14 Floor, Tropical Molla Tower, 15/1-4 Bir Uttam Rafiqul Islam Ave, Middle Badda, Dhaka, Bangladesh",phone:"+88 0140 709 3812"},{city:"Sylhet",address:"Suite 914, 9th Floor, Al Hamra Shopping City Zindabazar, Sylhet",phone:"+88 0140 709 3816"}],B=[{n:"facebook",i:"bi-facebook"},{n:"linkedin",i:"bi-linkedin"},{n:"youtube",i:"bi-youtube"},{n:"instagram",i:"bi-instagram"},{n:"whatsapp",i:"bi-whatsapp"},{n:"tiktok",i:"bi-tiktok"},{n:"x",i:"bi-twitter-x"}],F=s("#siteHeader"),k=()=>F.classList.toggle("scrolled",window.scrollY>24);window.addEventListener("scroll",k,{passive:!0}),k(),a("[data-scroll]").forEach(e=>{e.addEventListener("click",()=>{const t=s(e.getAttribute("data-scroll"));t&&(window.scrollTo({top:t.offsetTop-70,behavior:"smooth"}),setTimeout(()=>{const i=t.querySelector("input");i&&i.focus({preventScroll:!0})},650))})});const v=s("#mobileMenu");s("#menuToggle").addEventListener("click",()=>{const e=v.style.display==="block";v.style.setProperty("display",e?"none":"block","important")});const b=s("#portalPop"),u=s("#accountBtn");u.addEventListener("click",e=>{e.stopPropagation();const t=b.classList.toggle("show");u.classList.toggle("active",t)}),document.addEventListener("click",e=>{!b.contains(e.target)&&e.target!==u&&(b.classList.remove("show"),u.classList.remove("active"))});const D=s("#authModal"),I=new bootstrap.Modal(D),l=s("#authForm"),S=s("#nameField");let g="signin";function L(e){g=e;const t=e==="signup";s("#authTitle").textContent=t?"Create your account":"Sign in to your account",s("#authSub").textContent=t?"Start your study-abroad journey with BHE UNI.":"Access applications, tracking and resources.",S.style.setProperty("display",t?"block":"none","important"),S.querySelector("input").required=t,s("#authSubmit").textContent=t?"Create account":"Sign in",s("#forgotLink").style.visibility=t?"hidden":"visible",s("#authSwitchText").textContent=t?"Already have an account? ":"Don't have an account? ",s("#authSwitch").textContent=t?"Sign in":"Sign up",l.reset(),l.classList.remove("was-validated")}a("[data-auth]").forEach(e=>e.addEventListener("click",()=>{b.classList.remove("show"),u.classList.remove("active"),v.style.setProperty("display","none","important"),L(e.getAttribute("data-auth")),I.show()})),s("#authSwitch").addEventListener("click",()=>L(g==="signup"?"signin":"signup")),s("#forgotLink").addEventListener("click",e=>e.preventDefault()),l.addEventListener("submit",e=>{if(e.preventDefault(),!l.checkValidity()){l.classList.add("was-validated");return}const t=Object.fromEntries(new FormData(l)),i=g==="signup";s("#authBody").innerHTML='<div class="text-center py-3"><span class="mx-auto d-grid" style="width:64px;height:64px;place-items:center;border-radius:999px;background:#ecfdf5;color:#0d9488;box-shadow:0 0 0 8px rgba(236,253,245,.6);"><i class="bi bi-check-circle-fill" style="font-size:34px;"></i></span><p class="mt-4" style="font-size:15px;color:#5b6b82;">'+(i?'Welcome aboard, <span class="fw-semi text-navy">'+(t.name||"student")+'</span>! Check <span class="fw-semi text-navy">'+t.email+"</span> to verify your account.":'Signed in as <span class="fw-semi text-navy">'+t.email+"</span>.")+'</p><button class="btn btn-brand w-100 py-3" data-bs-dismiss="modal">Continue to portal</button></div>',s("#authTitle").textContent=i?"Account created":"Welcome back",s("#authSub").textContent="You are all set to access the portal."});function P(e){return e===1?1:1-Math.pow(2,-10*e)}function U(e){const t=parseFloat(e.dataset.count),i=e.dataset.suffix||"",n=1700,p=performance.now();function m(R){const E=Math.min((R-p)/n,1),A=t*P(E);e.textContent=(t>=1e3?Math.round(A).toLocaleString():Math.round(A))+i,E<1?requestAnimationFrame(m):e.textContent=(t>=1e3?t.toLocaleString():t)+i}requestAnimationFrame(m)}function j(e){a(".bar",e).forEach((t,i)=>{setTimeout(()=>{t.style.height=t.dataset.h+"%"},i*80)})}const c=new IntersectionObserver(e=>{e.forEach(t=>{if(!t.isIntersecting)return;const i=t.target;i.classList.contains("reveal")&&i.classList.add("in"),i.dataset.countGroup&&a("[data-count]",i).forEach(U),i.id==="commissionBars"&&j(i),c.unobserve(i)})},{threshold:.18});a(".reveal").forEach(e=>c.observe(e)),a("#heroStats, #applyStats").forEach(e=>{e.dataset.countGroup="1",c.observe(e)}),c.observe(s("#commissionBars")),s("#destGrid").innerHTML=w.map((e,t)=>'<div class="col-6 col-sm-4 col-lg-3 reveal"><div class="dest-card"><div class="topbar"></div><div class="d-flex align-items-center justify-content-between pt-1"><span class="dest-flag"><img src="assets/flags/'+e.cc+'.png" alt="'+e.name+' flag" loading="lazy" /></span><i class="bi bi-arrow-up-right" style="font-size:18px;color:#cbd5e1;"></i></div><h3 class="font-display fw-semi mt-3" style="font-size:17px;color:var(--navy-900);">'+e.name+'</h3><p class="mt-1 mb-0 d-inline-flex align-items-center gap-1" style="font-size:12.5px;font-weight:500;color:#64748b;"><i class="bi bi-geo-alt-fill text-brand" style="font-size:13px;"></i> '+e.note+"</p></div></div>").join(""),a("#destGrid .reveal").forEach(e=>c.observe(e));const z=s('select[name="region"]');w.forEach(e=>{const t=document.createElement("option");t.value=e.name,t.textContent=e.name,z.appendChild(t)});const h=document.createElement("option");h.value="Multiple destinations",h.textContent="Multiple destinations",z.appendChild(h);let f=0,C=!0;const H=s("#stepLine"),q=s("#stepVisual"),N=[`<div class="w-100 p-2">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="fw-semibold text-navy" style="font-size:14.5px;"><i class="bi bi-folder2-open text-brand"></i> Verification Documents</span>
        <span class="badge bg-light text-navy border" style="font-size:11px;">3 Required</span>
      </div>
      <div class="d-flex flex-column gap-2">
        <div class="d-flex align-items-center justify-content-between p-3 bg-white rounded-3 border">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-file-earmark-pdf-fill text-danger" style="font-size:22px;"></i>
            <div>
              <div class="fw-medium text-navy" style="font-size:13px;line-height:1.2;">Trade_License.pdf</div>
              <div style="font-size:11px;color:#94a3b8;">1.8 MB</div>
            </div>
          </div>
          <i class="bi bi-check-circle-fill text-success" style="font-size:18px;"></i>
        </div>
        <div class="d-flex align-items-center justify-content-between p-3 bg-white rounded-3 border">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-file-earmark-pdf-fill text-danger" style="font-size:22px;"></i>
            <div>
              <div class="fw-medium text-navy" style="font-size:13px;line-height:1.2;">Director_Passport.pdf</div>
              <div style="font-size:11px;color:#94a3b8;">2.4 MB</div>
            </div>
          </div>
          <i class="bi bi-check-circle-fill text-success" style="font-size:18px;"></i>
        </div>
        <div class="d-flex align-items-center justify-content-between p-3 bg-white rounded-3 border" style="border-style:dashed!important; background:rgba(255,245,237,.3)!important;">
          <div class="d-flex align-items-center gap-2">
            <i class="bi bi-cloud-arrow-up-fill text-brand" style="font-size:22px;"></i>
            <div>
              <div class="fw-medium text-brand" style="font-size:13px;line-height:1.2;">Upload Reference Form</div>
              <div style="font-size:11px;color:#94a3b8;">Supporting letter from institution</div>
            </div>
          </div>
          <span class="spinner-border spinner-border-sm text-brand" role="status"></span>
        </div>
      </div>
    </div>`,`<div class="w-100 p-2">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="fw-semibold text-navy" style="font-size:14.5px;"><i class="bi bi-shield-check text-brand"></i> Compliance & Setup</span>
        <span class="badge bg-success text-white" style="font-size:11px;">Active Onboarding</span>
      </div>
      <div class="d-flex flex-column gap-3 p-3 bg-white rounded-3 border">
        <div>
          <div class="d-flex justify-content-between align-items-center mb-1" style="font-size:12px;">
            <span class="text-navy fw-medium">Configuring Agent Portal Profile</span>
            <span class="text-brand fw-semibold">80%</span>
          </div>
          <div class="progress" style="height:6px;border-radius:99px;">
            <div class="progress-bar bg-brand" role="progressbar" style="width: 80%; background-color: var(--brand-500)!important;" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>
        <div class="d-flex flex-column gap-2" style="font-size:13px;">
          <div class="d-flex align-items-center gap-2 text-success"><i class="bi bi-check-circle-fill"></i> Agency credentials verified</div>
          <div class="d-flex align-items-center gap-2 text-success"><i class="bi bi-check-circle-fill"></i> Partnership Agreement signed</div>
          <div class="d-flex align-items-center gap-2 text-muted"><span class="spinner-border spinner-border-sm text-brand" style="width:12px;height:12px;border-width:1.5px;"></span> Generating dedicated CRM pipeline...</div>
        </div>
      </div>
    </div>`,`<div class="w-100 p-2">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="fw-semibold text-navy" style="font-size:14.5px;"><i class="bi bi-grid-1x2 text-brand"></i> Application Tracker</span>
        <span class="badge bg-light text-brand border" style="font-size:11px;">Live CRM Pipeline</span>
      </div>
      <div class="row g-2">
        <div class="col-6">
          <div class="p-2 bg-white rounded-3 border h-100">
            <div class="text-uppercase fw-bold text-muted mb-2" style="font-size:9.5px;letter-spacing:.05em;">Submitted (2)</div>
            <div class="p-2 rounded bg-light mb-2 border-start border-3 border-primary" style="font-size:12px;">
              <div class="fw-medium text-navy">Amina Rahman</div>
              <div class="text-muted" style="font-size:10px;">Coventry Uni — UK</div>
            </div>
            <div class="p-2 rounded bg-light border-start border-3 border-primary" style="font-size:12px;">
              <div class="fw-medium text-navy">Sajid Islam</div>
              <div class="text-muted" style="font-size:10px;">York Uni — Canada</div>
            </div>
          </div>
        </div>
        <div class="col-6">
          <div class="p-2 bg-white rounded-3 border h-100">
            <div class="text-uppercase fw-bold text-muted mb-2" style="font-size:9.5px;letter-spacing:.05em;">Visa Success (1)</div>
            <div class="p-2 rounded border-start border-3 border-success" style="font-size:12px; background:#f0fdf4;">
              <div class="fw-medium text-success d-flex align-items-center justify-content-between">
                Tanvir Hasan <i class="bi bi-patch-check-fill text-success"></i>
              </div>
              <div class="text-muted" style="font-size:10px;">Uni of Florida — USA</div>
            </div>
          </div>
        </div>
      </div>
    </div>`,`<div class="w-100 p-2">
      <div class="d-flex align-items-center justify-content-between mb-3">
        <span class="fw-semibold text-navy" style="font-size:14.5px;"><i class="bi bi-chat-left-dots text-brand"></i> B2B Support Manager</span>
        <span class="d-inline-flex align-items-center gap-1 text-success" style="font-size:11px;font-weight:600;"><span style="width:6px;height:6px;border-radius:50%;display:inline-block;background-color:#14b8a6;"></span> Online</span>
      </div>
      <div class="p-3 bg-white rounded-3 border">
        <div class="d-flex align-items-center gap-2 mb-3">
          <div class="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center fw-bold" style="width:34px;height:34px;font-size:13px;background:var(--blue-grad)!important;">SJ</div>
          <div>
            <div class="fw-semibold text-navy" style="font-size:12.5px;line-height:1.2;">Sarah Jenkins</div>
            <div style="font-size:10px;color:#94a3b8;">Senior Partner Manager</div>
          </div>
        </div>
        <div class="p-2.5 rounded bg-light mb-2" style="font-size:12px; line-height:1.4; color:var(--navy-800); position:relative;">
          "Hey Partner! I've updated the commissions dashboard for your team. Ready for our monthly product training?"
        </div>
        <div class="text-end" style="font-size:10px;color:#94a3b8;">Read 2m ago</div>
      </div>
    </div>`];function y(e){f=e;const t=o[e];a("#stepBtns .step-btn").forEach((n,p)=>{n.classList.toggle("active",p===e),n.classList.toggle("done",p<e);const m=s(".step-dot i",n);m.className=p<e?"bi bi-check-lg":"bi "+o[p].icon}),H.style.width=e/(o.length-1)*100+"%",s("#stepIcon").className="bi "+t.icon,s("#stepIcon").style.fontSize="20px",s("#stepKicker").textContent=t.kicker+" of "+o.length,s("#stepTitle").textContent=t.title,s("#stepBody").textContent=t.body,s("#stepMeta").innerHTML=t.meta.map(n=>'<span class="meta-chip"><i class="bi bi-check text-brand"></i> '+n+"</span>").join(""),s("#stepBack").disabled=e===0;const i=s("#stepNext");i.innerHTML=e<o.length-1?'Next step <i class="bi bi-arrow-right"></i>':'Apply now <i class="bi bi-arrow-right"></i>',q&&(q.innerHTML=N[e])}function x(e){C=!1,y(Math.max(0,Math.min(o.length-1,e)))}a("#stepBtns .step-btn").forEach(e=>e.addEventListener("click",()=>x(parseInt(e.dataset.step,10)))),s("#stepBack").addEventListener("click",()=>x(f-1)),s("#stepNext").addEventListener("click",()=>{if(f<o.length-1)x(f+1);else{const e=s("#apply");window.scrollTo({top:e.offsetTop-70,behavior:"smooth"})}}),y(0),setInterval(()=>{C&&y((f+1)%o.length)},4200);const O=s("#faqList");O.innerHTML=M.map((e,t)=>'<div class="faq-item reveal'+(t===0?" open":"")+'" data-i="'+t+'"><button class="faq-q" type="button"><span class="faq-badge">'+String(t+1).padStart(2,"0")+'</span><span class="faq-q-text">'+e.q+'</span><span class="faq-toggle"><i class="bi '+(t===0?"bi-dash-lg":"bi-plus-lg")+'" style="font-size:22px;"></i></span></button><div class="faq-a"><div class="faq-a-inner"><p>'+e.a+"</p></div></div></div>").join(""),a(".faq-item").forEach(e=>{c.observe(e),s(".faq-q",e).addEventListener("click",()=>{const t=e.classList.contains("open");if(a(".faq-item").forEach(i=>{i.classList.remove("open"),s(".faq-toggle i",i).className="bi bi-plus-lg",s(".faq-toggle i",i).style.fontSize="22px"}),!t){e.classList.add("open");const i=s(".faq-toggle i",e);i.className="bi bi-dash-lg",i.style.fontSize="22px"}})}),s("#officeGrid").innerHTML=T.map(e=>'<div class="col-sm-6 col-lg-4"><h4 class="office-city">'+e.city+'</h4><p class="mt-3 mb-0" style="font-size:13.5px;line-height:1.6;color:rgba(255,255,255,.65);"><span class="fw-semi" style="color:rgba(255,255,255,.9);">Address:</span> '+e.address+'</p><p class="mt-3 mb-0" style="font-size:13.5px;color:rgba(255,255,255,.65);"><span class="fw-semi" style="color:rgba(255,255,255,.9);">Phone:</span> '+e.phone+'</p><p class="mt-2 mb-0" style="font-size:13.5px;color:rgba(255,255,255,.65);"><span class="fw-semi" style="color:rgba(255,255,255,.9);">Email:</span> <a href="mailto:ask@bheuni.io" class="footer-link">ask@bheuni.io</a></p></div>').join(""),s("#socialRow").innerHTML=B.map(e=>'<a href="#top" class="social-btn" aria-label="'+e.n+'"><i class="bi '+e.i+'" style="font-size:15px;"></i></a>').join("");const d=s("#applyForm");function r(e,t){const i=s('[data-err="'+e+'"]');i&&(i.textContent=t||"");const n=d.querySelector('[name="'+e+'"]');n&&n.classList.toggle("invalid",!!t)}d.addEventListener("submit",e=>{e.preventDefault();const t=Object.fromEntries(new FormData(d));let i=!0;!t.agency||t.agency.trim().length<2?(r("agency","Please enter your agency name"),i=!1):r("agency",""),/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(t.email||"")?r("email",""):(r("email","Enter a valid business email"),i=!1),t.region?r("region",""):(r("region","Select a target region"),i=!1),i&&(s("#successMsg").innerHTML='Thanks, <span class="fw-semi text-navy">'+t.agency+'</span>. Our B2B team will review your details for <span class="fw-semi text-navy">'+t.region+'</span> and reply to <span class="fw-semi text-navy">'+t.email+"</span> within two working days.",d.style.display="none",s("#applySuccess").style.display="block")}),s("#resetForm").addEventListener("click",()=>{d.reset(),["agency","email","region"].forEach(e=>r(e,"")),s("#applySuccess").style.display="none",d.style.display="block"})})();
