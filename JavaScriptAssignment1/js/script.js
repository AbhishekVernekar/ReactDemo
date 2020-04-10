function test_prime(n) {
if (n === 1) {
    console.log('Not a prime number')
    return false;
  } else if (n === 2) {
    console.log('A prime number')
    return true;
  } else {
    for (var x = 2; x < n; x++) {
      if (n % x === 0) {
        console.log('Not a prime number')
        return false;
      }
    }
    console.log('A prime number')
    return true;
  }
}
console.log(test_prime(32));