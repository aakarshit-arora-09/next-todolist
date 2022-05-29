import { useState } from "react";
import styles from "./addtaskform.module.css";
const AddTaskForm = ({ taskList, setTaskList }) => {
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setTaskList([...taskList, { id: String(Date.now()), content: newTask }]);
    setNewTask("");
  };
  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={styles.input}
        type="text"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
        placeholder="Add New Task"
      />
      <button type="submit" className={styles.btn}>
        +
      </button>
    </form>
  );
};

export default AddTaskForm;
