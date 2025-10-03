// Coding Challenge 06

class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    describe() {
        return `Name: ${this.name} \t|\t Department: ${this.department}`
    }
}

class Manager extends Employee {
    constructor(name, department, teamSize) {
        super(name, department);
        this.teamSize = teamSize;
    }

    describe() {
        return `${this.name} manages ${this.teamSize} people`
    }
}