
(function(){
 const KEY="mr3-db-v1";
 const seed={products:[
  {name:"Panadol Extra",stock:42,price:38,expiry:"2027-05-01"},
  {name:"Vitamin C",stock:18,price:55,expiry:"2026-11-20"},
  {name:"Omega 3",stock:9,price:160,expiry:"2027-01-10"}
 ],sales:[],customers:[{name:"عميل نقدي",phone:""}],suppliers:[{name:"مورد رئيسي",phone:""}]};
 window.MR3DB={
  load(){try{return JSON.parse(localStorage.getItem(KEY))||seed}catch(e){return seed}},
  save(db){localStorage.setItem(KEY,JSON.stringify(db))},
  reset(){localStorage.setItem(KEY,JSON.stringify(seed));return seed}
 };
 if(!localStorage.getItem(KEY)) MR3DB.save(seed);
})();
