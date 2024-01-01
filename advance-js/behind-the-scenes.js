const hobbies = ['sports', 'cooking'];

hobbies.push('reading');

console.log(hobbies);

const person = { age: 32, name: 'min' };

function getAdultYears(p) {
  console.log(p);
  p.age -= 18;
  return p.age;
  // return p.age - 18;
}

console.log(getAdultYears({ ...person }));
console.log(person);
