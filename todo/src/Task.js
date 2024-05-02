import React, { useState } from "react";
import { CheckBox } from "./CheckBox";
import styled from "styled-components";

export function Task({ name, done, onRemove, onComplete }) {
  const [editMode, setEditMode] = useState(false);

  return (
    <StyledDiv className={"task " + (done ? "done" : "")}>
      <CheckBox checked={done} onClick={() => onComplete(!done)} />
      {!editMode && (
        <div className="task-name" onClick={() => setEditMode((prev) => !prev)}>
          <span>{name}</span>
        </div>
      )}
      <button className="trash" onClick={onRemove}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
        </svg>
      </button>{" "}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  background-color: #30313d;
  border-radius: 10px;
  padding: 10px 9px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  transition: opacity .3s linear;
  
  .task-done {
    opacity: 0.3;
  }

  .task-name {
    flex-grow: 1;
    span {
      position: relative;
    }
  }
  
  &.done {
    opacity: 0.3;
  }

  .trash {
    background: none;
    border: none;
    display: flex;
    cursor: pointer;
    svg {
      fill: #888;
      height: 14px;
    }
  }
`;
