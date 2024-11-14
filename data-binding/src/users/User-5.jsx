const User = ({ id, userName, email, address: { city }, status }) => <div>
    <h3>Id : {id}</h3>
    <h3>Name : {userName}</h3>
    <h4>Email : {email}</h4>
    <h4>City : {city}</h4>
    <h4>Status : {status ? "Available" : "Not Available"}</h4>
</div>

export { User }