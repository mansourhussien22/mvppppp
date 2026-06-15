
const fs=require('fs');
const required=['index.html','login.html','dashboard.html','assets/css/style.css','assets/js/app.js','assets/js/auth.js','vercel.json'];
let ok=true;
for (const f of required){ if(!fs.existsSync(f)){ console.error('Missing '+f); ok=false; } }
JSON.parse(fs.readFileSync('vercel.json','utf8'));
console.log(ok?'MR3 static project check passed':'MR3 static project check failed');
process.exit(ok?0:1);
