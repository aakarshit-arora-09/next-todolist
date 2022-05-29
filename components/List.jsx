import styles from "./list.module.css";
import { FaTrashAlt } from "react-icons/fa";
const List = ({ taskList, setTaskList }) => {
  const handleDelete = (e) => {
    const id = e.target.id;
    const newTaskList = taskList.filter((task) => id !== task.id);
    setTaskList(newTaskList);
    if (newTaskList.length === 0) {
      localStorage.setItem("taskList", JSON.stringify(newTaskList));
    }
  };
  const handleChange = (e) => {
    const newid = e.target.parentElement.id;
    const newcontent = e.target.value;
    const newTaskList = taskList.map((task) => {
      if (task.id === newid) {
        return { id: newid, content: newcontent };
      } else {
        return task;
      }
    });
    setTaskList(newTaskList);
  };
  return (
    <div className={styles.taskList}>
      {taskList.map((task) => (
        <div className={styles.listItem} key={task.id} id={task.id}>
          <input
            className={styles.taskcontent}
            type="text"
            value={task.content}
            onInput={(e) => handleChange(e)}
          />
          <button
            onClick={handleDelete}
            className={styles.deletebtn}
            id={task.id}
          >
            <FaTrashAlt />
          </button>
        </div>
      ))}
    </div>
  );
};

export default List;
