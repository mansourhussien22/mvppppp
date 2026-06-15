
window.MR3Theme={init(){const set=()=>{document.documentElement.dataset.theme=localStorage.getItem("mr3-theme")==="dark"?"dark":"light"};set();document.querySelectorAll("[data-theme-toggle]").forEach(b=>b.onclick=()=>{localStorage.setItem("mr3-theme",document.documentElement.dataset.theme==="dark"?"light":"dark");set();});}};
