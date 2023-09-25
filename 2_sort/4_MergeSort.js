function merge(arr1, arr2){
    let a = 0;
    let b = 0;
    let result = [];
    while (a < arr1.length && b < arr2.length){
       
        if(arr1[a] < arr2[b]){
            result.push(arr1[a]);
            a++;
        } else {
            result.push(arr2[b]);
            b++;
        }
    }
    while(a < arr1.length){
        result.push(arr1[a]);
        a++;
    }
    while(b < arr2.length){
        result.push(arr2[b]);
        b++;
    }
    return result;
}

// let a = merge([1,2,5],[3,4,6,7]);
// console.log(a)

function mergeSort(arr){
    if (arr.length <= 1) return arr;

    let m = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, m));
    let right = mergeSort(arr.slice(m));

    return merge(left, right);
}

let a =mergeSort([2,4,5,1,3,7,6,8]);
console.log(a)

/*
    這是一個遞迴
    會先一路從left = mergeSort(左半)切割到只剩一個元素
    再從他開始得到right後，兩者做合併
    再回去上一層的left = mergeSort(上一層左半)
    接著跑上一層的right = mergeSort(上一層的右半)
    再一路合成回去
*/