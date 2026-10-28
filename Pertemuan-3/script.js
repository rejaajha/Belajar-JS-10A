//konversi tipe data

let angka = 100;
let konverAngka = String(angka);

console.log(konverAngka+konverAngka);
console.log(typeof(konverAngka));

let tahun = '2026';
let konversiTahun = Number(tahun);

console.log(konversiTahun + 4);
console.log(tahun);

//nilai falsy

console.log(Boolean(false)); // false
console.log(Boolean(0)); // false
console.log(Boolean('')); // false (string kosong)
console.log(Boolean(null)); // false                      //Selain Ini nilainya truth
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN)); // false
console.log(Boolean(false)) // false

//Nilai truthy 
console.log(Boolean('reza')); //true
console.log(Boolean(1));//true
console.log(Boolean(true));//true

//operator aritmatika
let a = 10;
let b = 3;

let penjumlahan = a + b;
console.log('Penjumlahan (10 + 3) =', penjumlahan); // 13

let pengurangan = a - b;
console.log('Pengurangan (10 - 3)', pengurangan); //7

let perkalian = a * b;
console.log('Perkalian (10 * 3) ', perkalian); // 30

let pembagian = a / b;
console.log('Pembagian (10/3) =', pembagian); // 3.3333333333333335

let modulus = a % b;
console.log('Modulus / Sisa Bagi (10 % 3)' , modulus); // 1

let pangkat = a ** b;
console.log('Perpangkatan (10 ** 3) =', pangkat); // 1000

console.log("------------------------------------------------------------------------------------------------------------")

//operator penugasan

let x = 10;
console.log('nilai awal x =', x)

x += 10;
console.log('nilai x setelah penugasan', x);

x -= 5;
console.log('nilai x setelah penugasan', x);

x *= 2;
console.log('nilai x setelah penugasan', x);     //maksudnya value terakhir x di operasikan lagi

x /= 3;
console.log('nilai x setelah penugasan', x);

x %= 5;
console.log('nilai x setelah penugasan', x);

console.log('-----------------------------------------------------------------------')

//operator perbandingan

let c = 10;
let d = 10;
let e = 5;

//lebih dari
console.log('Lebih dari > :', (c > e));
//lebih dari sama dengan
console.log('lebih dari sama dengan >= :', (c >= c)); //yang nilainya sama dengan atau lebih dari

console.log('c == d :', c == d); // true (nilai sama)
console.log('c === d :', c === d); // false (tipe berbeda)
console.log('c != e :', c != e); // true
console.log('c !== d :', c !== d); // false
console.log('c > e :', c > e); // true
console.log('c < e :', c < e); // false
console.log('c >= 10 :', c >= 10 ) ; // true
console.log('e <= 5 :', e <= 5 ) ; // true



