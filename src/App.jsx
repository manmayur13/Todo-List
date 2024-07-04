import Heading from "./Components/Heading";
import AddTodo from "./Components/AddTodo";
import Todoitem1 from "./Components/Todoitem1";
import Todoitem2 from "./Components/Tododitem2";
import "./App.css";

function App() {
  return (
    <center className="todo-container">
      <Heading></Heading>

      <AddTodo></AddTodo>
      <div className="todo-items">
        <Todoitem1></Todoitem1>
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
