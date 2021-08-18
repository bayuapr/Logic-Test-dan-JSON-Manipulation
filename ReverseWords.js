function reverse_Word (str) {
  return str.split(' ').map(function(word) {
    return word.split('').reverse().join('');
  }).join(' ');
}

console.log(reverse_Word("I am A Great human"));