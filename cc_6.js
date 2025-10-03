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

let emp1 = new Employee('Jamie Brown', 'Investment Banking');
let emp2 = new Employee('Henry Cavil', 'Accounting');
let emp3 = new Employee('Bob Ross', 'Private Equity');