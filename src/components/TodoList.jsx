import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoListComps = ({ todoItemsList }) => {
  return (
    <div className={`${styles["todoList"]}`}>
      {todoItemsList.map((item) => (
        <TodoItem TodoName={item.name} TodoDate={item.date}></TodoItem>
      ))}
    </div>
  );
};

export default TodoListComps;
