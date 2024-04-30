import { styled } from "styled-components";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import React, { useEffect, useState } from "react";

// eslint-disable-next-line @typescript-eslint/no-redeclare
export interface TaskProps {
  name: string;
  done: boolean;
}

export function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(name: string) {
    setTasks((prev: TaskProps[]) => {
      return [...prev, { name: name, done: false }];
    });
  }

  return (
    <Main>
      <TaskForm onAdd={addTask} />
      {tasks.map((task: TaskProps) => (
        <Task {...task} />
      ))}
    </Main>
  );
}

const Main = styled.div`
  max-width: 300px;
  margin: 50px auto;
`;

export default App;
