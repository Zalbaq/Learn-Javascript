// filter() Mereturn array baru
let country = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIOPIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];

let countryLand = country.filter((country) => country.includes("LAND")); // => includes untuk mengecek apakah terdapat kata land pada array country
console.log(countryLand);

let countryEndByia = country.filter((country) => country.endsWith("IA")); // => endsWith untuk mengecek apakah terdapat kata dalam country yang diakhiri kata ia
console.log(countryEndByia);

let countriesHaveFiveLetters = country.filter((country) => country.length == 5); // => length untuk mengecek panjang dari item country
console.log(countriesHaveFiveLetters);

let logNamesCountry = country.filter((country) => country.length > 5);
console.log(logNamesCountry);