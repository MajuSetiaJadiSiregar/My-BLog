const Validator = require('validator');
const isEmpty = require('is-empty');

/**
 * understanding libary isEmpty
 * jadi si libary isEmpty ini ngecheck apakah sebuah
 * inputan itu kosong atau tidak
 * kalau kosong dia akan mengembalikan suatu true
 * kalau berisi yah false...
 * nah ini bisa kita pastikan di file nya yang ada di folder
 * node_modules
 */
console.log(isEmpty('s'));
/**
 * understanding libary validator
 * nah si validator ini gunanya untuk memvaliadasi suatu
 * misalkan apakah suatu inputan email berupa email atau tidak
 * nah si validator ini lah yang melakukan itu
 * tipe data... yah hampir mirip lah kayak prop-Types nya react js
 */


const ValidateLoginInput = (data) => {

   let errors = {}
   let { email, password} = data;

   email = !isEmpty(email) ? email : '';
   password = !isEmpty(password) ? password : '';

   /**
    * cara baca nya
    * jika isEmpty emailnya true karena inputan email kosong maka...
    */
   if(Validator.isEmpty(email)) {
      /**
       * apa itu errors.email ...? hayo lo... kalau masi binggung coba cek 
       * materi objectnya ... 
       * yuk cek di dokumentasi cari baca object kosong
       */
      errors.email = 'Email is Required'
      /**
       * cara baca nya
       * jika tidak sama validator email nya sesaui dengan bentuk email maka..
       * logic nya gini => jika tampa negasi ==> kalau validatornya email sesuai
       * dengan string email dia akan mereturn true, nah kalau gak sesuai string
       * email maka return nya false donkk...
       * itulah kenapa dibuat negasi... karena false negasi nya true
       * kenapa harus true yah karna if dijakankan ketika kondisi nya true
       */
   } else if(!Validator.isEmail(email)) {
      errors.email = 'Enter a valid email'
   };

   if(Validator.isEmpty(password)){
      errors.password = 'Password is required'
   } else if(!Validator.isLength(password, { min : 6, max :50})) {
      errors.password = 'Password must be at least 6 characters';
   };

   return { errors, isValid : isEmpty(errors)};
};
module.exports = ValidateLoginInput;