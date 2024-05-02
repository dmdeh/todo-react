import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import { useEffect, useState } from "react";
import styled from "styled-components";

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    setTasks(tasks || []);
  }, []);

  function addTask(name) {
    setTasks((prev) => {
      return [...prev, { name: name, done: false }];
    });
  }

  function removeTask(index) {}

  function updateTaskComplete(index, isComplete) {}

  function renameTask(index, newName) {}

  return (
    <Main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task key={index} {...task}
        />
      ))}
    </Main>
  );
}

const Main = styled.div`
  max-width: 300px;
  margin: 50px auto;
`;

export default App;
