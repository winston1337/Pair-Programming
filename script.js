let greeting = "hello world";
console.log(greeting)

//challenge 1 (easy 1)

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

//challenge 2 (easy 2)

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

//challenge 3 (medium 1)

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





//challenge 4 (medium 2)

function compare (a, b) {
    var y = a.split("").sort().join(""),
        z = b.split("").sort().join("");
    console.log(z === y
        ? a + " and " + b + " are anagrams!"
        : a + " and " + b + " are not anagrams."
    );
}
compare ("iceman", "cinema")






//challenge 5 (medium 3)
function gcd_two_numbers(x, y) {
    if ((typeof x !== 'number') || (typeof y !== 'number')) 
      return false;
    x = Math.abs(x);
    y = Math.abs(y);
    while(y) {
      var t = y;
      y = x % y;
      x = t;
    }
    return x;
  }
  
  console.log(gcd_two_numbers(12, 13));
  console.log(gcd_two_numbers(9, 3));



//challenge 6 (medium 4)
let car = {
    make: 'Toyota',
    model: 'Supra',
    color: 'Magma Red',
    mileage: 237,
    previousOwners: ["Mark", "Tim", "Harold"],
    modifications: {
        mod1: "wheels",
        mod2: "lowering",
        mod3: "speakers"
    },
    driveToWork: () => {
        alert(`Old mileage is ${car.mileage}`);
        car.mileage = car.mileage + 30;
        console.log(`You drove to work, your new mileage is${car.mileage}`);
    }
    
}







//challenge 7 (hard 1)


function solution(S) {
    S = S.split("");
    var stack = [];
    for (var i = 0; i < S.length; i++) {
      var c = S[i];
      if (c == '{' || c == '(' || c == '[')
        stack.push(c);
      else if (c == '}' || c == ')' || c == ']') {
        var t = stack.pop() + c;
        if (t != "{}" && t != "()" && t != "[]")
          return 0;
      }
      else 
        return 0;
    }
  
    if (stack.length > 0)
      return 0;
  
    return 1;
  }
  console.log(solution("(hello)"))