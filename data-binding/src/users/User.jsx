import { UserDetails } from "./UserDetails"

const User = props => <div>
    {/* ... is Spread Notation: pass every property */}
    <UserDetails {...props} />
</div>



export { User }