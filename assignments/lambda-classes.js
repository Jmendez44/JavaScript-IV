// CODE here for your Lambda Classes

class Person {
    constructor(pAttributes) {
        this.name = pAttributes.name;
        this.age = pAttributes.age;
        this.location = pAttributes.location;
        this.gender = pAttributes.gender;
    }
    speak() {
        return `Hello my name is ${this.name} I am from ${this.location}`;
    }
}


class Instructor extends Person {
    constructor(iAttributes) {
        super(iAttributes);
        this.specialty = iAttributes.specialty;
        this.favLanguage = iAttributes.favLanguage;
        this.catchPhrase = iAttributes.catchPhrase;
    }
    demo(subject) {
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        return `${student.name} recieves a perfect score on ${subject}`;
    }
}


class Student extends Person {
    constructor(sAttributes) {
        super(sAttributes)
        this.previousBackground = sAttributes.previousBackground;
        this.className = sAttributes.className;
        this.favSubjects = sAttributes.favSubjects;
    }
    listSubjects() {
        return this.favSubjects;
    }
}


