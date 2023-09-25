function selectionSort(arr){
    for (let i = 0; i < arr.length; i++) {
        let lowestIndex = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[lowestIndex]) {
                lowestIndex = j;
            }
        }
        if (lowestIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[lowestIndex];
            arr[lowestIndex] = temp;
        }
    }
    return arr
}

let a = selectionSort([5,3,2,1,4])
console.log(a)


/*
[5, 3, 2, 1, 4] 
 ^             //min = 5
[5, 3, 2, 1, 4]
    ^          //min = 3
[5, 3, 2, 1, 4]
       ^       //min = 2
[5, 3, 2, 1, 4]
          ^    //min = 1
[5, 3, 2, 1, 4]
             ^ //min still = 1 

swap left and minimum ! 
[1, 3, 2, 5, 4]
 ^        ^

then 1 is locked, restart from next value 
[1, 3, 2, 5, 4] 
    ^          //min = 3
*/