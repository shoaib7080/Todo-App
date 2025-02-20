import "bootstrap/dist/css/bootstrap.min.css";
import ApName from "./components/AppName";
import AppTodo from "./components/AppToDo";
import "./App.css";
import TodoListComps from "./components/TodoList";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      date: "04/11/24",
    },
    {
      name: "Buy Bread",
      date: "05/11/24",
    },
    {
      name: "Buy Buns",
      date: "06/11/24",
    },
  ];
  return (
    <center className="todo-cont">
      <ApName></ApName>
      <AppTodo></AppTodo>
      <TodoListComps todoItemsList={todoItems}></TodoListComps>
    </center>
  );
}

export default App;
