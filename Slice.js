// Slice mereturn array baru
// Slice(idxAwal, idxAkhir) => idxAkhir bersifat eksklusif yang berarti elemen dengan indeks endIndex tidak akan dimasukkan dalam potongan array
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

let country2 = country.map((element) => element.slice(-3));

let countryID = country.map((element) => {
  return element.toLowerCase().slice(0, 3);
});

console.log(country2);
console.log(countryID);

let words = "Sempurna";
let getFirstWord = words.slice(0, 1);
console.log(getFirstWord);
