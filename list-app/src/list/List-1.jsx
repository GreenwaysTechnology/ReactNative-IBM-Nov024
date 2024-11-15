
const List = (props) => {
    return <div>
        <h1>List</h1>
        <ul>
            {
                props.subjects.map(subject => {
                    return <li>{subject}</li>
                })
            }
        </ul>
    </div>
}
export { List }