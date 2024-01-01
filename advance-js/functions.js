function greetUser(userName) {
  console.log(`Hi ${userName}!`);
}

greetUser('Seungmin');

function sumUp(...numbers) {
  let result = 0;

  for (const number of numbers) {
    result += number;
  }

  return result;
}

const inputNumbers = [1, 5, 10, 11, 20, 31];

console.log(sumUp(...inputNumbers));
console.dir(sumUp);
