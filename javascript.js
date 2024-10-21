// Pratybos-1
// 1.
let num=55;
// 1.a.
let text=num.toString();
// 1.b.
console.log(text);

// 2.
let x = 15;
console.log(x++);
console.log(x++);
console.log(x++);
console.log(x++);

// 3.
let y=10;
console.log(y--);
console.log(y--);
console.log(y--);
console.log(y--);

// 4.
const skaicius = "15";
console.log(skaicius);
console.log(typeof Number (skaicius));

const skaiciusDU = "12";
console.log(skaiciusDU);
console.log(typeof parseInt(skaiciusDU, 10));

const skaiciusTrys = "10";
console.log(skaiciusTrys);
console.log(typeof +skaiciusTrys);

// 5.
let treciaA = 9;
// 5.a.
let treaciaB = treciaA + 2;
// 5.b.
console.log(treaciaB);

// Pratybos-2
// 1.
let pirmoUgis = 10;
let pirmoSvoris = 1;
let antroUgis = 20;
let antroSvoris = 1;
let petroKMI=pirmoSvoris/pirmoUgis;
let jonoKMI=antroSvoris/antroUgis;
// 2.
console.log(`Petro KMI yra ${petroKMI}, Jono KMI yra ${jonoKMI}. Petro KMI yra didesnis nei Jono.`)
// 1.
let a=5;
let b=9;
let c=Math.sqrt((a*a)+(b*b));
console.log(`Stačiakampio trikampio su statinėmis a ${a} ir b ${b} įžambinė c lygi ${c}`);

// 2.
let C=39;
let F=C*1.8+32;
console.log(F);
console.log(typeof F);