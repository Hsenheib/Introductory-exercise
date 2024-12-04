//////////////////////EX1\\\\\\\\\\\\\\\\\\\\
const num = 123; 


const divisibleBy2 = num % 2 === 0;
const divisibleBy3 = num % 3 === 0;
const divisibleBy5 = num % 5 === 0;


const result = Number(divisibleBy2 && divisibleBy3 && divisibleBy5) * 3 +
               Number((divisibleBy2 && divisibleBy3) || 
                      (divisibleBy3 && divisibleBy5) || 
                      (divisibleBy2 && divisibleBy5)) * 2 +
               Number(divisibleBy2 || divisibleBy3 || divisibleBy5) * 1;


console.log(result);



//////////////////////EX2\\\\\\\\\\\\\\\\\\\\

const isPrime = (num) => {
    if (num < 2) return false; 
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; 
    }
    return true;
  };
  
  
  for (let i = 2; i < 237; i++) {
    if (isPrime(i)) {
      console.log(i); 
    }
  }
  


  //////////////////////EX3\\\\\\\\\\\\\\\\\\\\

  const numbers = [0, 1, 2, 0, 3, 0, 4, 5, 0, 6]; 


const zeroCount = numbers.reduce((count, num) => count + (num === 0 ? 1 : 0), 0);

console.log(`number zero in array ${zeroCount}`);