import { List } from "./list/List";

function App() {

  const subjects = ['React', 'ReactNative', 'Javascript', 'Mobile', 'Devops', 'Cloud']
  return <>
    <List subjects={subjects} />
  </>
}
export default App;