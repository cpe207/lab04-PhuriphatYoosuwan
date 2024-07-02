function primeNumber(a) {
  if(a <= 3) return "Yes";
  if(a % 2 === 0 || a % 3 === 0) return "NO";
  return "Yes";
}

const d1 = 10;
const d2 = 29;
const d3 = 2;

console.log(primeNumber(d1));
console.log(primeNumber(d2));
console.log(primeNumber(d3));

module.exports = primeNumber;

/*รหัส นศ.: 660610784

ชื่อ-สกุล : ภูริภัฏ อยู่สุวรรณ */