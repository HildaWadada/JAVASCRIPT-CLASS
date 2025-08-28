class Student {
  constructor(name, age, studentID) {
    this.name = name;
    this.age = age;
    this.studentID = studentID;
  }

  study() {
    console.log(`${this.name} is studying...`);
  }

  takeExam() {
    console.log(`${this.name} is taking an exam.`);
  }
}

// Objects created from the Student class
const s1 = new Student("Alice", 20, "ST101");
const s2 = new Student("Bob", 22, "ST102");

s1.study();    // Alice is studying...
s2.takeExam(); // Bob is taking an exam.
