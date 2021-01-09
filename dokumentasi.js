/**
 * apa itu destructing pada object ??
 * destructing adalah suatu konsep untuk memecah menjadi yang lebih
 * kecil
 * object dan array bisa kita destructing
 */
/**
 * contoh kalau mengakses property object tampa destructing
 */
const users = {
   name : 'Maju',
   username : 'maju_cool',
   email : 'maju@mernstack',
   detail : {
      title : 'Programmer'
   }
};

let Name = users.name;
let Email = users.email;

console.log(Name, Email);

/**
 * contoh kalau mengakses property object tampa destructing
 */
const { name, email } = users;
console.log(`${name}, ${email}`);

/**
 * spread operator
 */
const makanan = {
   mentah : 'terigu',
   bungkus : 'plastik',
   rasa : 'coklat'
};

const newMakanan = {
   mentahs : 'Tepung',
   bungkuss : 'Baja',
   rasas : 'Kenangan'
};

const state = { ...makanan, ...newMakanan};

console.log(state);

/**
 * understanding object kosong
 */
const objectKosong = {};
objectKosong.tambah = 'tambah donk';
console.log(objectKosong)