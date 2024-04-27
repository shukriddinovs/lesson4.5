let name1 = prompt("ismingizni kiriting").toLocaleLowerCase();
let letter = prompt("harf kiriting").toLocaleLowerCase();

let check = name1.includes(letter);

if (check) {
    console.log("siz kiritgan"  +  letter  +  " harif mavjud ");
    
}else{
    console.log("siz kiritgan  "  +  letter  +  " harif mavjud emas ");
}
