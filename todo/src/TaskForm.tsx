import React, { useState } from "react";
import styled from "styled-components";

interface onAdd {
  // 컴포넌트의 props를 정의하는 곳에서 선언
  onAdd: (name: string) => void;
}

export function TaskForm({ onAdd }: onAdd) {
  const [taskName, setTaskName] = useState("");

  function handleSubmit(event: any) {
    event.preventDefault();
    onAdd(taskName);
    setTaskName("");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={(event) => setTaskName(event.target.value)}
        placeholder="Your next task..."
      />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  border: 3px solid #30313d;
  border-radius: 10px;
  padding: 10px;
  display: flex;

  input[type="text"] {
    background: none;
    color: white;
    border: 0px;
    padding: 0px 10px;
    display: block;
    width: 100px;
  }

  button {
    background-color: #51dafb;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
  }
`;
