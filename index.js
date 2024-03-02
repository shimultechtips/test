// Class
class Person {
    dob = "05-05-2001";
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

let person1 = new Person("shimul", 22);
console.log(person1);

class Men extends Person {
    constructor(name, age, sex) {
        super(name, age);
        this.sex = sex;
    }
}

let personMen = new Men("shimul", 22, "male");
console.log(personMen);