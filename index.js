// Class
class Person {
    dob = "05-05-2001"; // Object Property Outside Constructor.
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("shimul", 22);
console.log(person1);

// Extended Class
class Men extends Person {
    constructor(name, age, sex) { // Parent Class's Parameters + New Parameters
        super(name, age); // Parent Class's Parameters
        this.sex = sex;
    }
}

let personMen = new Men("shimul", 22, "male");
console.log(personMen);