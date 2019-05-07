let arr = [], arr2 = [];
let sum = 0;
for(let i = 0; i < 12*5; i++){
    arr.push(parseInt(1000*(Math.pow(1+0.41/100, i))));
    sum += arr[i];
    arr2.push(sum);
    console.log(arr[i]);
}

// console.log(arr2.join('\n'))

