import { User } from "./users/User";

// function App() {
//     return <>
//         {User(1, 'Subramanian Murugan', 'subu@gmail.com', { city: 'Coimbatore' }, true)}
//         {User(2, 'Murugan', 'murugan@gmail.com', { city: 'Chennai' }, false)}
//     </>
// }

function App() {
    return <>
           <User id={1} email='subu@gmail.com' userName='Subramanian Murugan'  address={{ city: 'Coimbatore' }} status={true} />
           <User id={1} email='subu@gmail.com' userName='Subramanian Murugan'  address={{ city: 'Coimbatore' }} status={true} />
           <User id={1} email='subu@gmail.com' userName='Subramanian Murugan'  address={{ city: 'Coimbatore' }} status={true} />
           <User id={1} email='subu@gmail.com' userName='Subramanian Murugan'  address={{ city: 'Coimbatore' }} status={true} />
    </>

}
export default App;