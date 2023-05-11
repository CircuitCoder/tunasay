const fs = require('fs');

const cont = fs.readFileSync('./tunasay.tmpl.js').toString('utf-8');
const raw = fs.readFileSync('./tunasay.js').toString('utf-8');

const rows = cont.trimEnd().split('\n');
arrays = [[], [], [], [], []];
for(const r of rows){
  const whiteStart = r.length - r.trimStart().length;
  const trimmed = r.trim();
  const commentStartMatch = trimmed.match(/^\/\*+\//g);
  const commentStart = commentStartMatch ? commentStartMatch[0].length : 0;
  const commentEndMatch = trimmed.match(/\/\*+\/$/g);
  const commentEnd = commentEndMatch ? commentEndMatch[0].length : 0;
  const contentLen = trimmed.length - commentStart - commentEnd;

  arrays[0].push(whiteStart);
  arrays[1].push(commentStart);
  arrays[2].push(contentLen);
  arrays[3].push(commentEnd);
}

const rawRows = raw.split('\n').map(r => r.trim());
const rawConcat = rawRows.slice(0, rawRows.length - 1).join('');

prefix = arrays.map(k => k.map(e => String.fromCharCode(e + 33)).join('')).join('');
console.log('Collected', rawConcat);
console.log('Prefix', prefix);
console.log('\n');
const tail = prefix + btoa(rawConcat);
console.log(tail);

let rawConsumed = 0;
let tailConsumed = 0;
const mapped = rows.map((r, i) => {
  const contentStart = arrays[0][i] + arrays[1][i];
  const contentLen = arrays[2][i];

  const consumeRaw = rawConcat.substring(rawConsumed, rawConsumed + contentLen);
  const consumeRawLen = consumeRaw.length;
  rawConsumed += consumeRawLen;

  let tailLen = contentLen - consumeRawLen - 3;
  if(tailLen < 0) tailLen = 0;
  const consumeTail = tail.substring(tailConsumed, tailConsumed + tailLen);
  const consumeTailLen = consumeTail.length;
  tailConsumed += consumeTailLen;
  let inner = consumeRaw;
  if(consumeTailLen > 0) inner += '`' + consumeTail + '`,';
  return r.substring(0, contentStart) + inner + ' '.repeat(contentLen - inner.length) + r.substring(contentStart + contentLen);
});
console.log(mapped.join('\n'));