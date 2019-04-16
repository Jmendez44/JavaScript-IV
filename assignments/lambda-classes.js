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

    listSubjects(s1, s2, s3) {
        return `${s1}, ${s2}, ${s3}`
    }

    PRAssignment(subject) {
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject) {
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor {
    constructor(pmAttributes) {
        super(pmAttributes);
        this.gradClassName = pmAttributes.gradClassName;
        this.favInstructor = pmAttributes.favInstructor;
    }
    standUp(channel) {
        return `${this.name} announces to ${channel}, @channel standy times!`;
    }
    debugsCode(student, subject) {
        return `${this.name} debugs ${student.name}'s code on ${subject}`;
    }
}




const josh = new Instructor ({
    name: 'Josh',
    specialty: 'front end'
})

const jay = new Student({
    name: 'Jay',
    location: 'New Jersey',
    age: 27,
    gender: 'male',
    favLanguage: 'JS',
    specialty: 'front-end',
    catchPhrase: 'Support the homies'
})

const mikaela = new ProjectManager ({
    name: 'mikaela'
})


//instructors
console.log(josh.demo('javascript'));
console.log(josh.grade(jay, 'javascript'));

// students
console.log(jay.PRAssignment('Javascript'));
console.log(jay.sprintChallenge( 'javascript'));


//PM
console.log(mikaela.standUp('web17'));
console.log(mikaela.debugsCode(jay, 'javascript'));