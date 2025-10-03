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

let mng1 = new Manager('John Cena', 'Investment Banking', 167);
let mng2 = new Employee('Gary Gills', 'Accounting', 120);
let mng3 = new Employee('Rocky Ray', 'Private Equity', 81);


class Company {
    constructor(name) {
        this.name = name;
        this.employees = [];
    }

    addEmployee(employee) {
        this.employees.push(employee);
    }

    listEmployees() {
        console.log('-----Employee Information-----')
        for (let e of this.employees) {
            console.log(e.describe());
        }
    }
}

let co = new Comapny('SHK Partners');
co.addEmployee(emp1);
co.addEmployee(emp2);
co.addEmployee(emp3);
co.addEmployee(mng1);
co.addEmployee(mng2);
co.addEmployee(mng3);
co.listEmployees();