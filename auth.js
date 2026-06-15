
(function(){
 const SKEY="mr3-session-v1";
 const users=[
  {email:"admin@example.com",username:"admin",password:"Admin@123456",role:"ADMIN",name:"Admin"},
  {email:"user@example.com",username:"user",password:"User@123456",role:"USER",name:"User"}
 ];
 window.MR3Auth={
  session(){try{return JSON.parse(localStorage.getItem(SKEY)||sessionStorage.getItem(SKEY)||"null")}catch(e){return null}},
  logout(){localStorage.removeItem(SKEY);sessionStorage.removeItem(SKEY);location.replace("login.html")},
  login(identifier,password,remember){const u=users.find(x=>(x.email===identifier||x.username===identifier)&&x.password===password); if(!u) return null; const s={email:u.email,name:u.name,role:u.role,at:Date.now()}; (remember?localStorage:sessionStorage).setItem(SKEY,JSON.stringify(s)); return s;}
 };
 window.MR3Login={init(){const form=document.getElementById("loginForm"); if(!form) return; const err=document.getElementById("loginError"); const btn=document.getElementById("togglePassword"); const pass=document.getElementById("password"); if(btn) btn.onclick=()=>pass.type=pass.type==="password"?"text":"password"; form.onsubmit=e=>{e.preventDefault(); const s=MR3Auth.login(document.getElementById("identifier").value.trim(),pass.value,document.getElementById("remember").checked); if(!s){err.textContent="بيانات الدخول غير صحيحة";return} location.replace("dashboard.html#home")};}};
})();
