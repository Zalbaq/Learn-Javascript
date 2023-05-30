// reduce digunakan untuk mereduce nilai array menjadi nilai tunggal
// reduce(FungsiReducer, nilaiAwal)
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let numbersMultBy2 = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(numbersMultBy2);

// accumulator dugunakan untuk menampung nilai yang telah diakumulasikan
// currentValue yaitu nilai indeks saat ini
