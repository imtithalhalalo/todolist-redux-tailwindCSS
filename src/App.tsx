import { Provider } from "react-redux"
import store from "./app/store"
import Todo from "./components/Todo"
import Dropdown from "./components/Dropdown"

function App() {

  const handleAddItem = () => {
    
  }
  return (
    <Provider store={store}>

      
      <Todo />
      
    </Provider>
    
  )
}

export default App
