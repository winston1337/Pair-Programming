let greeting = "hello world";
console.log(greeting)

//challenge 1

function splitOddEven(numbers){
    let odd = [];
    let even = [];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
          // number is even
          even.push(numbers[i]);
}else{
    odd.push(numbers[i]);
}
    }


const returnObject = {
    odd, even
};

return returnObject; }
console.log(splitOddEven([0,2,3,4,5,6,7,8,9,]));

//challenge 2

var numArray = [1,2,3,4,5,6,7,8,9]
function checkPrime(num1) {
    if (num1 <=1) {
        return false;
    } else {
        for (let i = 2; i < num1; i++){
            if (num1 % i == 0) {
                return false;
            }
        }
        return true;
    }
}
let isPrime;
isPrime = checkPrime(13);
console.log(isPrime)
isPrime = checkPrime(73);
console.log(isPrime)