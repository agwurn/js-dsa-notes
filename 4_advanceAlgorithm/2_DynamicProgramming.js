function fib(n) {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(5));
/*
                      fib(5)
               fib(4)      + fib(3)
         fib(3)   +  fib(2)
   fib(1) + fib(2)
*/

// memo-ized solution
function fib2(n, memo = []) {
  if (memo[n] !== undefined) return memo[n];

  if (n <= 2) return 1;
  let res = fib2(n - 1, memo) + fib2(n - 2, memo);
  memo[n] = res;

  return res;
}
console.log(fib2(10));

//tabulated version
function fib3(n) {
  if (n <= 2) return 1;

  let fibNums = [0, 1, 1];
  for (let i = 3; i <= n; i++) {
    fibNums[i] = fibNums[i - 1] + fibNums[i - 2];
  }

  return fibNums[n];
}
console.log(fib3(10))