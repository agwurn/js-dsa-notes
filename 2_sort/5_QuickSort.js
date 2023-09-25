function findPivot(arr, start=0, end=arr.length - 1){

    function swap(arr, a, b) {
        let temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp
    }

    let pv = arr[start];
    let swapInd = start;

    for(let i = start + 1; i <= end; i++){
        if (pv > arr[i]){
            swapInd++;
            swap(arr, i, swapInd);
        }
    }
    swap(arr, start, swapInd);
    return swapInd;
}

// console.log(findPivot([4,8,2,1,5,7,6,3]));

function quickSort(arr, left = 0, right = arr.length - 1){
    
    if (left < right){
        
        let pivot = findPivot(arr, left, right);
        
        quickSort(arr, left, pivot - 1);
        quickSort(arr, pivot + 1, right);   
    }
    return arr;
}

const a = quickSort([4,8,2,1,5,7,6,3])
console.log(a)