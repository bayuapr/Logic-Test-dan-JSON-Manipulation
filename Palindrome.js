function Palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return 'not palindrome';
      }
    }
    return  'palindrome';
   }

console.log(Palindrome("Radar"));
console.log(Palindrome("Malam"));
console.log(Palindrome("Kasur ini rusak"));
console.log(Palindrome("Ibu Ratna antar ubi"));
console.log(Palindrome("Malas"));
console.log(Palindrome("Makan nasi goreng"));
console.log(Palindrome("Balonku ada lima"));









//



//

function nearest_Fibonacci(arr)
{
    const num = arr.reduce((a, b) => a + b, 0); 
    if (num == 0) {
        console.log(0);
        return;
    }

    let first = 0, second = 1;

    let third = first + second;

    while (third <= num) {

        first = second;

        second = third;

        third = first + second;
    }

    let ans = (Math.abs(third - num) >= Math.abs(second - num))? second: third;

    return`output = ${ans-num}` ;
}

let N = [15, 1, 3];
console.log(nearest_Fibonacci(N));

//


//
