import { User } from "./users/User";

function App() {
    const profilePic = 'https://imgur.com/1bX5QH6.jpg'
    return <>
        <User id={1} profilePic={profilePic} email='subu@gmail.com' userName='Subramanian Murugan' address={{ city: 'Coimbatore' }} status={true} />
    </>
}
export default App;