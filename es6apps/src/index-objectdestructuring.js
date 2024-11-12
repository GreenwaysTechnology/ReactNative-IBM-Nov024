// function printEmployee(employee) {
//     console.log(`Id ${employee.id}`)
//     console.log(`name ${employee.name}`)
//     console.log(`City ${employee.address.city}`)
// }

//with destructuring
// function printEmployee(employee) {
//     const { id, name, address: { city } } = employee
//     console.log(`Id ${id}`)
//     console.log(`name ${name}`)
//     console.log(`City ${city}`)
// }
function printEmployee({ id, name, address: { city } }) {
    console.log(`Id ${id}`)
    console.log(`name ${name}`)
    console.log(`City ${city}`)
}

printEmployee({ id: 1, name: 'Subramanian', address: { city: 'Coimbatore' } })