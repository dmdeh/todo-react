import { styled } from "styled-components";
import { TaskForm } from "./TaskForm";
import { Task } from "./Task";

function App() {
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
  margin: 20px auto;
`;

export default App;
