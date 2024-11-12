class Employee {
    //state
    id = 0
    name = 'Subramanian'
    salary = 1000
    //methods
    calculateSalary() {
        return this.salary * 2
    }
    calculateLeave = () => {
        return 10
    }
}
//create instance
//let is keyword
//emp is just reference variable
//new  is operator
//Employee() is constructor call(function call)
let emp = new Employee()
console.log(`id ${emp.id}`)
console.log(`name ${emp.name}`)
console.log(`id ${emp.salary}`)
console.log(`totalSalary ${emp.calculateSalary()}`)

