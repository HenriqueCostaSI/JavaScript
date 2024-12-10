//Ele intera sobre os valores
for (let letra of "Cod3r") {
  console.log(letra);
}

const assuntosEcma = ["Map", "Set", "Promise"];
for (let i in assuntosEcma) {
  console.log(i);
}

for (let assunto of assuntosEcma) {
  console.log(assunto); //
}

const assuntosMap = new Map([
  ["Map", { abordado: true }],
  ["Set", { abordado: true }],
  ["Promise", { abordado: false }],
]);

for (let assunto of assuntosMap) {
  console.log(assunto); //[Map] { "Map" => { abordado: true } }
}

for (let chave of assuntosMap.keys()) {
  console.log(chave); //Map Set Promise
}

for (let valor of assuntosMap.values()) {
  console.log(valor); //{ abordado: true } { abordado: true } { abordado: false }
}

for (let [ch, vl] of assuntosMap.entries()) {
  console.log(ch, vl); //Map { abordado: true } Set { abordado: true } Promise { abordado: false }
}

const s = new Set(["a", "b", "c"]);
for (let letra of s) {
  console.log(letra); //a b c
}
