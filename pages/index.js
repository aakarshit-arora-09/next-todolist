import { useState, useEffect } from "react";
import TitleBar from "../components/TitleBar";
import List from "../components/List";
import AddTaskForm from "../components/AddTaskForm";

export default function Home() {
  const [taskList, setTaskList] = useState([]); //hook for list of tasks

  //get data from local storage when component mounts
  useEffect(() => {
    const newTaskList = JSON.parse(localStorage.getItem("taskList"));
    if (newTaskList) {
      setTaskList(newTaskList);
    }
  }, []);

  //set data to local storage when list changes
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
