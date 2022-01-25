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

var numArray = [15,20,6,9,7,1]
function checkPrimeArray(a){
    for(i = 0; i < a.length; i++){
        console.log(checkPrime(a[i]))
    }
}
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

/*let isPrime;
isPrime = checkPrime(10);
console.log(isPrime)
isPrime = checkPrime(73);
console.log(isPrime)*/

checkPrimeArray(numArray)

//challenge 3

const vowelChecker = function(x){
    var vowels = ["a", "e", "i", "o", "u", ""];
    for(var i = 0; i < x.length; i++)
    if(x === vowels[i]){
        return console.log("this is a vowel");
    } else{
        console.log("this is not a vowel")
    }
}
console.log(true || false)