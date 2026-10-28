// let hari = prompt('hari apa ini')

// switch (hari) {

//     case "senin":
//     case "selasa":
//     case "rabu":
//     case "kamis":
//     case "jumat":
//         alert('hari kerja, jangan malas!!!');
//         break;

//     case "minggu":
//     case "sabtu":
//         alert('hari libur');
//         break;

//     default:
//         alert('hari tidak terdaftar');
//         break;
// }

//Looping 

//For
for(let a = 1; a <= 10; a++){
    console.log('hello world! ' + a);
}

//study case (looping (for))
for(let b = 1; b <= 10; b++) {
    if (b == 9){
        console.log('mobil grab ' + b + ' lagi di bengkel');
    } else if (b == 3){
        console.log('mobil grab ' + b + ' Rusak parah :(');
    } else {
        console.log('mobil grab ' + b + ' dalam keadaan baik')
    } 
}

for(let i = 1; i <= 100; i++) {
    if (i % 2 == 1) {
      console.log('hello world! ' + i);  
    }
} 

//While

let bus = 1; 

while(bus <= 10) {
    if (bus == 7){
        console.log('bus ' + bus + ' dalam keadaan rusak parah pake bgt');
    } else {
        console.log('bus ' + bus + ' dalam keadaan baik');
    }
    bus++
}

//do while
let kapal = 15;

do {
    console.log('kapal ' + kapal + ' dalam keadaan baik');
    kapal++
} while (kapal <= 10);