const fs = require('fs');

let cont = fs.readFileSync('./tunasay.tmpl.js').toString('utf-8');
const raw = fs.readFileSync('./tunasay.js').toString('utf-8');
const joined = raw.replaceAll(/^\s+/mg, '').replaceAll(/\s+$/mg, '').replaceAll('\n', '');

let consumed = 0;
while(true) {
  const match = cont.match(/`[^`]*`/g);
  if(!match) {
    if(consumed >= joined.length) break;
    throw new Error('Not enough space');
  }
  const c = match[0].length;
  const s = joined.substring(consumed, consumed + c);
  cont = cont.replace(match[0], s + ' '.repeat(c - s.length));
  consumed += c;
}
console.log(cont);