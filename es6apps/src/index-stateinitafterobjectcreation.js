class Employee {
    //state
    id
    name
    salary
    constructor(id = 0, name = 'Subramanian', salary = 1000) {
        this.id = id
        this.name = name
        this.salary = salary
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
console.log(`salary ${emp.salary}`)
console.log(`totalSalary ${emp.calculateSalary()}`)

emp = new Employee(2, 'Ram', 2400)
console.log(`id ${emp.id}`)
console.log(`name ${emp.name}`)
console.log(`salary ${emp.salary}`)
console.log(`totalSalary ${emp.calculateSalary()}`)

//reinitalize the value
emp.id = 900
emp.name = 'Raja'
emp.salary = 8000

console.log(`id ${emp.id}`)
console.log(`name ${emp.name}`)
console.log(`salary ${emp.salary}`)
console.log(`totalSalary ${emp.calculateSalary()}`)