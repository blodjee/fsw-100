let employees = [];

class Employee {
    constructor(name, jobTitle, salary, status = "Full Time") {
        this.name = name;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.status =status;
        employees.push(this)
    }

    printEmployeeForm() {
        console.log(
            `Name: ${this.name}, Job Title: ${this.jobTitle}, Salary: ${this.salary}, Status: ${this.status}`
        );
    }
}

const jack = new Employee("jack", "Vii school Instructor", "$3000/hour", "part time");
const bob = new Employee("bob", "Vii school Instructor", "$3000/hour");
const cindy = new Employee("cindy", "Vii school Instructor", "$3000/hour");

jack.printEmployeeForm();
bob.printEmployeeForm();
cindy.printEmployeeForm();
console.log(employees);
