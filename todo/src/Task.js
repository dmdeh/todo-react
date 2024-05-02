import React from "react";
import { CheckBox } from "./CheckBox";
import { TaskProps } from "./App";
import styled from "styled-components";

export function Task({ name, done }) {
  return (
    <StyledDiv>
      <CheckBox checked={done}/>
      <span>{name}</span>
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

  span {
    position: relative;
  }
`;
