import React from "react";
import { useState } from "react";
import styled from "styled-components";

export function TaskForm() {
  const [taskName, setTaskName] = useState("");

  return (
    <StyledForm>
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
  padding: 5px;
  display: flex;

  input[type="text"] {
    background: none;
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
