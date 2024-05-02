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
    setTasks((prev) => [...prev, { name: name, done: false }]);
  }

  function removeTask(index) {
    setTasks((prev) => prev.filter((el, idx) => idx !== index));
  }

  function updateTaskComplete(index, isComplete) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[index].done = isComplete;
      return newTasks;
    });
  }

  return (
    <Main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task, index) => (
        <Task
          key={index}
          {...task}
          onRemove={() => removeTask(index)}
          onComplete={(isComplete) => updateTaskComplete(index, isComplete)}
        />
      ))}
    </Main>
  );
}

const Main = styled.div`
  max-width: 300px;
  margin: 50px auto;
  background-color: #17171f;
  color: white;
`;

export default App;
