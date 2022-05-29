import styles from "./list.module.css";
import { FaTrashAlt } from "react-icons/fa";
const List = ({ taskList, setTaskList }) => {
  const handleDelete = (e) => {
    const id = e.target.parentNode.id;
    const newTaskList = taskList.filter((task) => id !== task.id);
    setTaskList(newTaskList);
  };
  return (
    <div className={styles.taskList}>
      {taskList.map((task) => (
        <div className={styles.listItem} key={task.id} id={task.id}>
          <p>{task.content}</p>
          <button onClick={handleDelete} className={styles.deletebtn}>
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
