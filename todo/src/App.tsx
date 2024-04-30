import { styled } from "styled-components";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";
import React from "react";

export function App() {
  return (
    <Main>
      <TaskForm />
      <Task />
      <Task />
      <Task />
      <Task />
      <Task />
    </Main>
  );
}

const Main = styled.div`
  max-width: 300px;
  margin: 50px auto;
`;

export default App;
