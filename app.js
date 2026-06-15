
(function(){
 const sections=[
  ["home","الرئيسية","Home"],["dashboard","لوحة التحكم","Dashboard"],["products","الأصناف","Products"],["inventory","المخزون","Inventory"],["sales","فواتير البيع","Sales"],["purchases","فواتير الشراء","Purchases"],["returns","المرتجعات","Returns"],["customers","العملاء","Customers"],["suppliers","الموردون","Suppliers"],["payments","المدفوعات","Payments"],["reports","التقارير","Reports"],["settings","الإعدادات","Settings"]
 ];
 function title(sec){const isAr=(localStorage.getItem("mr3-lang")||"ar")==="ar";const row=sections.find(s=>s[0]===sec)||sections[0];return isAr?row[1]:row[2]}
 function render(sec){
  const db=MR3DB.load(); const c=document.getElementById("appContent"); if(!c) return;
  document.getElementById("pageTitle").textContent=title(sec); document.getElementById("currentSection").textContent="MR3 System";
  if(sec==="home"||sec==="dashboard"){
   c.innerHTML=`<div class="grid">
    <div class="stat-card"><span>Products</span><strong>${db.products.length}</strong></div>
    <div class="stat-card"><span>Total Stock</span><strong>${db.products.reduce((a,p)=>a+Number(p.stock||0),0)}</strong></div>
    <div class="stat-card"><span>Customers</span><strong>${db.customers.length}</strong></div>
    <div class="stat-card"><span>Suppliers</span><strong>${db.suppliers.length}</strong></div>
   </div><section class="card-panel"><h2>MR3 System is running successfully</h2><p>Static deployment ready for Vercel. Login, theme, language, and local browser database are working.</p></section>${productsTable(db)}`;
  } else if(sec==="products"||sec==="inventory"){
   c.innerHTML=`<section class="card-panel"><h2>${title(sec)}</h2><p>Basic product data is loaded from browser storage.</p></section>${productsTable(db)}`;
  } else if(sec==="settings"){
   c.innerHTML=`<section class="card-panel"><h2>Settings</h2><p>You can reset local demo data.</p><button class="danger-button" id="resetDb">Reset demo data</button></section>`;
   setTimeout(()=>document.getElementById("resetDb").onclick=()=>{MR3DB.reset();MR3Utils.toast("Data reset");render("home")});
  } else {
   c.innerHTML=`<section class="card-panel"><h2>${title(sec)}</h2><p>This module page is ready and connected to the MR3 layout. Add the original module logic here when backend/data files are available.</p></section>`;
  }
  document.querySelectorAll(".nav-button").forEach(b=>b.classList.toggle("active",b.dataset.sec===sec));
 }
 function productsTable(db){return `<div class="table-wrap"><table><thead><tr><th>Product</th><th>Stock</th><th>Price</th><th>Expiry</th></tr></thead><tbody>${db.products.map(p=>`<tr><td>${p.name}</td><td>${p.stock}</td><td>${MR3Utils.money(p.price)}</td><td>${p.expiry}</td></tr>`).join("")}</tbody></table></div>`}
 window.MR3App={init(){
  if(!MR3Auth.session()) {location.replace("login.html");return}
  const nav=document.getElementById("sideNav"); nav.innerHTML=sections.map(s=>`<button class="nav-button" data-sec="${s[0]}"><span>${(localStorage.getItem("mr3-lang")||"ar")==="ar"?s[1]:s[2]}</span><span>›</span></button>`).join("");
  nav.onclick=e=>{const b=e.target.closest(".nav-button");if(b){location.hash=b.dataset.sec;render(b.dataset.sec);closeMenu()}};
  document.querySelectorAll("#logoutButtonSide,#logoutButtonTop").forEach(b=>{b.textContent="تسجيل الخروج";b.onclick=MR3Auth.logout});
  document.getElementById("businessNameMini").textContent="Pharmacy POS";
  document.getElementById("profileButtonTop").textContent=(MR3Auth.session().name||"U").slice(0,1);
  const menu=document.getElementById("menuToggle"),side=document.getElementById("sidebar"),scrim=document.getElementById("mobileScrim");
  function openMenu(){side.classList.add("open");scrim.classList.add("show")} window.closeMenu=function(){side.classList.remove("open");scrim.classList.remove("show")}
  if(menu) menu.onclick=openMenu; if(scrim) scrim.onclick=closeMenu;
  window.onhashchange=()=>render((location.hash||"#home").slice(1)); render((location.hash||"#home").slice(1));
 }};
})();
