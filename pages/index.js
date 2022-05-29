import { useState, useEffect } from "react";
import TitleBar from "../components/TitleBar";
import List from "../components/List";
import AddTaskForm from "../components/AddTaskForm";

export default function Home() {
  const [taskList, setTaskList] = useState([]);
  const [idCounter, setIdCounter] = useState(1);

  return (
    <div className="App">
      <TitleBar taskList={taskList} />
      <AddTaskForm
        taskList={taskList}
        setTaskList={setTaskList}
        idCounter={idCounter}
        setIdCounter={setIdCounter}
      />
      <List taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}
