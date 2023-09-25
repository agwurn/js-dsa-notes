/*
    Bubble sort 
    (loop)藉由從頭到尾比對左右 {
        (loop)從第一個比到還沒排序好的{
            遇到順序錯的兩個就swap，
            這樣最大值一路推到最右邊就安定好。
        }
    }

    並且重複上述這個過程，直到最大、第二大、第三大...被推到最右邊
*/
/*
    第一次嘗試，但問題是他第二層都重新檢查了一次已經排好的了
*/
function bubbleSort1(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// a = bubbleSort1([2,4,1,5,0]);
// console.log(a)

/*
    第二次嘗試
*/
function bubbleSort2(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// a = bubbleSort2([2,4,1,5,0]);
// console.log(a)

/*
    第三次嘗試，把i倒過來，讓程式碼更簡潔
*/
function bubbleSort3(arr) {
  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// a = bubbleSort3([2,4,1,5,0]);
// console.log(a)

/*
    TODO:
    第四次嘗試，優化版！只要發現都沒有swap，就代表排好了就可以結束了。
*/
function bubbleSort4(arr) {
  let hasSwap;

  for (var i = arr.length; i > 0; i--) {
    for (var j = 0; j < i - 1; j++) {
      hasSwap = false;
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        hasSwap = true;
      }
    }
    if (!hasSwap) {
      break;
    }
  }
  return arr;
}

let a = bubbleSort4([2, 4, 1, 5, 0]);
console.log(a);
