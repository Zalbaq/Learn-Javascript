//! PERLU DIINGAT BERBEDA DENGAN FILTER FIND HANYA MENCARI ELEMEN PERTAM YANG MEMENUHI KONDISI
let ages = [34, 21, 12, 64, 44, 54, 22, 87];

let younger = ages.find((age) => age < 50);
console.log(younger);

let names = ["ihza", "Nurkhafidh", "Al-baihaqi", "Hibatin", "Wafiroh"];

let result = names.find((name) => name.length > 5);
console.log(result);
let foundName = names.find((name) => {
  return name == "Hibatin";
});
console.log(foundName);
