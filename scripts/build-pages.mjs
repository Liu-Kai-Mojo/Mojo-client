import fs from 'node:fs';
import path from 'node:path';
const root=process.cwd();
const out=path.join(root,'dist');
fs.rmSync(out,{recursive:true,force:true});
fs.mkdirSync(out,{recursive:true});
const skip=new Set(['.git','node_modules','dist','package.json','package-lock.json','.gitignore']);
function copy(src,dst){for(const e of fs.readdirSync(src,{withFileTypes:true})){if(skip.has(e.name))continue;const a=path.join(src,e.name),b=path.join(dst,e.name);if(e.isDirectory()){fs.mkdirSync(b,{recursive:true});copy(a,b)}else fs.copyFileSync(a,b)}}
copy(root,out);
console.log(`Build prepared: ${out}`);
