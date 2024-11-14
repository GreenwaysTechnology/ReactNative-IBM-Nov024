import { Avatar } from "../avatar/Avatar"

const UserDetails = ({ id = 0, userName = 'Your Name', email = 'Your email', city = "Your City", status = false, profilePic = '' }) => <div>
    <Avatar profilePic={profilePic} />
    <h3>Id : {id}</h3>
    <h3>Name : {userName}</h3>
    <h4>Email : {email}</h4>
    <h4>City : {city}</h4>
    <h4>Status : {status ? "Available" : "Not Available"}</h4>
</div>

export { UserDetails }