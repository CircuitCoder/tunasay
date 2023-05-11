const fs = require('fs');
const cont = fs.readFileSync('./tunasay.output.js').toString('utf-8');
const rows = cont.trimEnd().split('\n');
spaces = [];
contents = [];
for(const r of rows){
    const whiteLen = r.length - r.trimStart().length;
    spaces.push(whiteLen);
    const contentLen = r.trim().length;
    contents.push(contentLen);
}
const f = cont.split(/^\s*`/mg)[0].replaceAll(/^\s+/mg, '').replaceAll(/\s*$/mg, '').replaceAll('\n', '');
console.log(f);
prefix = [spaces, contents].map(k => k.map(e => String.fromCharCode(e + 33)).join('')).join('');
console.log('Prefix', prefix);
console.log(
    prefix + btoa(f)
);