//A program to test whether a given number is a prime number
function isPrime(n){
    if(n <= 1){
        console.log(`${n} is not a prime number`);
        return false;
    }
    //check from 2 to n-1
    for(var i = 2; i < n ; i++){
        if(n%i == 0){
            console.log(`${n} is not a prime number`);
            return false;
        }
    }
    console.log(`${n} is a prime number`);
}

testNumber = 6;
const result = isPrime(testNumber);