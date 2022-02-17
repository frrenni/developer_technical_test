let a = "9.86-A5.321";
let regex = /\d+/g;
let temp = a.match(regex);
let result = temp.join("")
console.log(result);

let arr = result.split("");
let count = 1;
let j = 0;
for (let i = arr.length; i > -1; i--) {
    count = count * ((10 * (arr.length + 1)) / (arr.length + 1));
    arr[i] = (arr[i] * count) / 100;
}
for (let k = 0; k < arr.length - 1; k++) {
    console.log(arr[k]);
}