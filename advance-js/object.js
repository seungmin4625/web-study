class Job {
  constructor(jobTitle, place, salary) {
    this.title = jobTitle;
    this.location = place;
    this.salary = salary;
  }

  describe() {
    console.log(
      `I'm a ${this.title}, I work in ${this.location} and I earn ${this.salary}.`
    );
  }
}

const developer = new Job("Developer", "New York", 50000);
developer.describe();

const input = ["Seungmin", "Park"];
const [first, last] = input;
console.log(first, last);

const { salary: mySalary } = developer;
console.log(mySalary);
