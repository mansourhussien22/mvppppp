
window.MR3Utils = {
  qs:(s,r=document)=>r.querySelector(s),
  qsa:(s,r=document)=>Array.from(r.querySelectorAll(s)),
  toast(message){const host=document.getElementById("toastHost"); if(!host) return alert(message); const el=document.createElement("div"); el.className="toast"; el.textContent=message; host.appendChild(el); setTimeout(()=>el.remove(),2500);},
  money:n=>Number(n||0).toLocaleString(document.documentElement.lang||"ar",{style:"currency",currency:"EGP"})
};
