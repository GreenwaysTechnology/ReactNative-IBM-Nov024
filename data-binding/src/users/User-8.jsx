import { UserDetails } from "./UserDetails"

const User = ({ id = 0, userName = 'Your Name', email = 'Your email', address: { city = "Your City" }, status = false, profilePic = '' }) => <div>
    <UserDetails id={id}
        userName={userName}
        email={email}
        city={city}
        status={status}
        profilePic={profilePic} />
</div>



export { User }