
//props is not keyword just variable convention
//props hold object , object has all properties what ever we passed from parent
const User = (props) => {
    console.log(props)
    return <div>
        <h3>Id : {props.id}</h3>
        <h3>Name : {props.userName}</h3>
        <h4>Email : {props.email}</h4>
        <h4>City : {props.address.city}</h4>
        <h4>Status : {props.status ? "Available" : "Not Available"}</h4>
    </div>
}
export { User }