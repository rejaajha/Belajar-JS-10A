//operator unary

let a = 5;

a++
console.log(a);

//Conditional

let lauk = 'ayam semur';

if (lauk == 'ayam semur'){
    console.log('makan pagi dengan ayam semur');
}else{
    console.log('ayam pagi bukan dengan ayam semur');
}

// let inputUser = prompt('masukan ekstrakulikuler pilihan anda : panahan,futsal,taekwondo');
// if (inputUser == 'panahan'){
//     alert('anda memilih ekskul panahan')
// } else if (inputUser == 'futsal'){
//     alert('anda memilih ekskul futsal')
// } else if (inputUser == 'taekwondo'){
//     alert('anda memilih ekskul taekwondo')
// }

let angka = prompt('masukkan angka berapapun :');

if (angka % 2 === 0){
    alert("angka genap");
} else if (angka % 2 === 1 ){
    alert("angka ganjil");
} else {
    alert('anda tidak memasukkan angka');
}