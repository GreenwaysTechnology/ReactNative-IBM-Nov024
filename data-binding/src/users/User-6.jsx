import { Avatar } from "../avatar/Avatar"

const User = ({ id, userName, email, address: { city }, status, profilePic }) => <div>
    {/* <img src={profilePic} height={100} width={100} /> */}
    <Avatar profilePic={profilePic} />
    <h3>Id : {id}</h3>
    <h3>Name : {userName}</h3>
    <h4>Email : {email}</h4>
    <h4>City : {city}</h4>
    <h4>Status : {status ? "Available" : "Not Available"}</h4>
</div>

export { User }