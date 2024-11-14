
const User = () => {
    //variables
    const id = 1
    const userName = 'Subramanian Murugan'
    const email = 'sasubramanian_m@hotmail.com'
    const address = {
        city: 'Coimbatore'
    }
    const status = true

    return <div>
        <h1>User info</h1>
        <h3>Id : {id}</h3>
        <h3>Name : {userName}</h3>
        <h4>Email : {email}</h4>
        <h4>City : {address.city}</h4>
        <h4>Status : {status ? "Available" : "Not Available"}</h4>
    </div>

}
export { User }