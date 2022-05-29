import { useState, useEffect } from "react";
import TitleBar from "../components/TitleBar";
import List from "../components/List";
import AddTaskForm from "../components/AddTaskForm";

export default function Home() {
  const [taskList, setTaskList] = useState([]);

  useEffect(() => {
    const newTaskList = JSON.parse(localStorage.getItem("taskList"));
    if (newTaskList) {
      setTaskList(newTaskList);
    }
  }, []);

  useEffect(() => {
    if (taskList.length) {
      localStorage.setItem("taskList", JSON.stringify(taskList));
    }
  }, [taskList]);

  return (
    <div className="App">
      <TitleBar taskList={taskList} />
      <AddTaskForm taskList={taskList} setTaskList={setTaskList} />
      <List taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
