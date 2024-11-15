import { TODOS } from "./mock-data/todos"

//using traditionl if..else
// const Item = props => {
//   const { name, status } = props.todo
//   if (status) {
//     return <li>{name} ✔</li>
//   } else {
//     return <li>{name}</li>
//   }
// }

// const Item = props => {
//   const { name, status } = props.todo
//   return <li>
//     {status ? `${name} ✔` : name}
//   </li>
// }

// const Item = ({ todo: { name, status } }) => {
//   // const { name, status } = props.todo
//   // console.log(props)
//   return <li>
//     {status ? `${name} ✔` : name}
//   </li>

// }
const CompletedItem = ({ name }) => <span>{name} ✔</span>

const Item = ({ todo: { name, status } }) => {
  // const { name, status } = props.todo
  // console.log(props)
  return <li>
    {status ? <CompletedItem name={name} /> : name}
  </li>

}

const TodoList = props => {
  return <>
    <ul>
      {
        props.todos.map(todo => {
          return <>
            <Item todo={todo} />
          </>
        })
      }
    </ul>
  </>
}


function App() {
  return <TodoList todos={TODOS} />
}
export default App