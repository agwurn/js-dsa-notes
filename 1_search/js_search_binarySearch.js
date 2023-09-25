function binarySearch(arr, target){
    // add whatever parameters you deem necessary - good luck!
    let l = 0;
    let r = arr.length - 1;
    
    while (l <= r){
        let m = parseInt((l + r) / 2);
        if (arr[m] == target){
            return m;
        } else if (arr[m] > target) {
            r = m - 1;
        } else {
            l = m + 1;
        }
    }
    
    return -1
}

let a = binarySearch([1,2,3,4,5],2) // 1
let b = binarySearch([1,2,3,4,5],3) // 2
let c = binarySearch([1,2,3,4,5],5) // 4
let d = binarySearch([1,2,3,4,5],6) // -1

console.log(a,b,c,d)