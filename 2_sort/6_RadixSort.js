function getDigit(num, i) {
    return Math.floor(Math.abs(num) / 10 ** i) % 10;
}

// console.log(getDigit(1234, 0)); 
// console.log(getDigit(1234, 1));
// console.log(getDigit(1234, 2));
// console.log(getDigit(1234, 3));
// console.log(getDigit(1234, 4));

function digitCount(num) {
    if (num === 0) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

/* 
    原來log_10可以用在這！例如100就會被回2，101則是2.???
    用floor砍掉後，再加一就好！
*/ 

// console.log(digitCount(123)); // 3
// console.log(digitCount(1)); // 1
// console.log(digitCount(1234)); // 4

function mostDigits(nums) {
    let maxDigits = 0;
    for (let n of nums){
        maxDigits = Math.max(maxDigits, digitCount(n));
    }
    return maxDigits
}

// console.log(mostDigits([123,0,13433,23,1])); // 5

/*
    實際操作 radix sort
*/
function radixSort(nums) {
    let maxDigitCount = mostDigits(nums);
    for (let k = 0; k < maxDigitCount; k++){
        // make buckets
        let digitBuckets = Array.from({length:10}, () => [])
        for (let i = 0; i < nums.length; i++){
            digitBuckets[getDigit(nums[i], k)].push(nums[i]); // 將num存進其對應的k的位數的位置
        }
        nums = [].concat(...digitBuckets); // 這招好強！直接合成
    }
    return nums
}

console.log(radixSort([23,345,5467,1,243,3]));


/*
    想要記起來的後續
*/
let digitBuckets = Array.from({length:10}, () => [])
// 這句蠻值得學習的！
nums = [].concat(...digitBuckets);
// 這招也好強！