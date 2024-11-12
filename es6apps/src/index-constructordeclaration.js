class Employee {
    //state
    id
    name
    salary
    constructor() {
        this.id = 0
        this.name = 'Subramanian'
        this.salary = 1000
    }

    //methods
    calculateSalary() {
        return this.salary * 2
    }
    calculateLeave = () => {
        return 10
    }
}
let emp = new Employee()
console.log(`id ${emp.id}`)
console.log(`name ${emp.name}`)
console.log(`id ${emp.salary}`)
console.log(`totalSalary ${emp.calculateSalary()}`)

