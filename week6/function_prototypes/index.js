    function Employee(name,jobTitle,salary){
        this.name = name;
        this.jobTitle= jobTitle;
        this.salary =salary;
        this.status = "Full Time";

        this.printEmployeeForm = function(){
            console.log("Name:"+ this.name +", Job Title:"+this.jobTitle+", Salary:"+ this.salary+ ", Status:"+this.status);
        }
    }

    let employees =[];

    let emp1 = new Employee("Bob", "School Instructor", "$3000/hour");
    emp1.printEmployeeForm();
    emp1.status = "Part Time";
    emp1.printEmployeeForm();
    employees.push(emp1);

    let emp2 = new Employee("John", "Yoga Instructor", "$500/hour");
    emp2.printEmployeeForm();
    emp2.status = "Contract";
    emp2.printEmployeeForm();
    employees.push(emp2);

    let emp3 = new Employee("Scott", "Javascript Trainee", "$2500/month");
    emp3.printEmployeeForm();
    emp3.status = "Part Time";
    emp3.printEmployeeForm();
    employees.push(emp3);

    console.log(employees);

  