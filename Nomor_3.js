//fungsi untuk menggabungkan 2 array
function merge(a, b) {
    let c = a;
    let count = a.length + b.length;
    let j = 0
    for (let i = a.length; i < count; i++) {
        c[i] = b[j];
        j++;
    }
    return c;
}

//fungsi untuk menyortir array yang telah tergabung
function bubbleSort(arr) {
    let temp = '';
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//hasil array yang belum urut
console.log(merge([1, 2, 5, 7], [3, 4, 8]));

//hasil array yang sudah urut
console.log(bubbleSort(merge([1, 2, 5, 7], [3, 4, 8])));

//hasil jika dicoba menggunakan array kosong
console.log(bubbleSort(merge([], [3, 4, 8])));
console.log(bubbleSort(merge([1, 2, 5, 7], [])));