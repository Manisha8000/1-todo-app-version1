import TodoItem from "./TodoItem";
import Styles from "./TodoItems.module.css";

const TodoItems = ({ todoItems, onDeleteClick}) => {
  return (
    <div className={Styles.itemsContainer}>
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoName={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />
      ))}
    </div>
  );
};

export default TodoItems;
