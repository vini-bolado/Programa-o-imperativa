let nome = "  coco  "

console.log(nome + " tem " + nome.length + " caracteres.");

console.log("Variável no início: " + nome + "Variável depois do .trim(): " + nome.trim());

let novoNome = nome.trim();
console.log(novoNome.split(" "));

console.log(nome.slice(2, 8));

let coco123 = ["Nami", "Chun-li"];
console.log(coco123);
console.log(coco123[1]);

coco123.push("Oni");
console.log(coco123);

let coco1 = "";
coco1 = "Pereba";

coco123.push(coco1);
console.log(coco123);

coco1 = "Amendoa";

coco123.push(coco1);
console.log(coco123);

let ultimaGata = coco123.pop();
console.log(coco123, ultimaGata);

let primeiraGata = coco123.shift();
console.log(coco123, primeiraGata);

coco123.unshift(ultimaGata);
console.log(coco123);

let gatitas = coco123.join(" ❤️ ");
console.log(gatitas);

let gatitas02 = coco123.join();
console.log(gatitas02);

console.log(coco123.lastIndexOf("mont"));
console.log(coco123.indexOf("vida"));

console.log(coco123.includes("xitsu"));