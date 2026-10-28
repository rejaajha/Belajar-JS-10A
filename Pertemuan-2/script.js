//String

let myName = 'Reza';
let alamat = 'Jaksel'
let a = 5;
let b = 6;

console.log(myName);
console.log(a + b); // kalo angakanya di kali pasti jadi tipe data number
// console.log("nama saya " + myName + " dan alamat saya " + alamat); // bisa gini
// console.log(`nama saya ${myName} dan alamat saya ${alamat}`); // bisa gini pake (``) tapi variable ditandai dgn ${} tanpa (+)
console.log("nanti sore angkatan gw\nmau main bola\tsama yang lain")

// Boolean
let isTrue = true;
console.log(typeof(isTrue));

// null & undefined
let varOne = null;
let varTwo ;
console.log(varOne);
console.log(varTwo);

//array
let array = ['spagetti', 'ayam geprek', 'telur dadar'];
array.push('nasi goreng');
array.push('nasi uduk');
array.unshift("pizza");


console.log(array);

console.log(`nama saya ${myName} saya tinggal di ${alamat} saya suka makan ${array[1]} dan saya kurang suka makan ${array[0]}`);

// latihan
let makanan = ['ayam', 'pizza', 'babi'];
// document.write(`makanan yang saya suka adalah ${makanan[0]}, dan ${makanan[1]} adalah salah satu makanan yang saya suka juga, INGATT!!! makan ${makanan[2]} itu HARAMMMM, dan pada saat idul adha, keluargaku akan memasak ${makanan[3]} dan ${makanan[4]} untuk dijadikan sop/rendang.`);
// latihan
makanan.push('kambing'); //nambah di akhir
makanan.pop(); //hapus yang di akhir
makanan.unshift('sapi');//nambah di awal
makanan.shift()//hapus di awal
console.log(makanan.slice(2))
console.log(makanan);

console.log('_______________________________________________');
//object 

let myData = {
    name : "azzam",
    address : "Jl.Merdeka",
    age : 16, 
    food : ['ayam', 'spagetti', 'nasi goreng']
}

console.log(myData.address);
console.log(myData.food)

let work = {
    job1 : 'OB',
    job2 : 'Sekretaris',
    job3 : 'Kuli',
    job4 : 'tukang kayu',
    job5 : 'guru',
    job6 : 'designer',
    job7 : 'penjahit'
}

// document.write(work.job7);

console.log(5 * undefined)

let angka = parseInt(prompt('tulis angka 1-10000000'));
alert('angka anda adalah ' + typeof(angka));



