function arrayStringify(a) {
  let string = '';
  for(let i = 0; i < a.length; i++){
    string += a[i];
  }
  return string;
}

const c1 = [1, 2, 3];
const c2 = [10, 9, 8, 7, 6, 5];
const c3 = [];

console.log(arrayStringify(c1));
console.log(arrayStringify(c2));
console.log(arrayStringify(c3));

module.exports = arrayStringify;

/*รหัส นศ.: 660610784

ชื่อ-สกุล : ภูริภัฏ อยู่สุวรรณ */