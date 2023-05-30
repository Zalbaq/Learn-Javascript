let arr = [1, 2, 3, 4, 5];
arr.forEach((index, element, arr) => {
  console.log(index, element);
});

// Method forEach tidak mereturn array baru
// Pada forEach urutan parameter nya adalah element, index, array
