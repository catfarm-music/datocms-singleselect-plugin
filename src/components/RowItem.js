import { useEffect, useState } from "react";

import styled from "styled-components";
import { theme, ifProp } from "styled-tools";
import TextareaAutosize from "react-textarea-autosize";

import { Icon } from "components/Icon";

const StyledRowItem = styled.div`
  border-radius: 8px 8px 0px 0px;
  background: ${ifProp("$selected", "#efefef", "white")};
  display: flex;
  align-items-center;
  padding: 1rem;
  border: 1px solid #ccc;
  justify-content: space-between;
  transition: background 0.15s;

  & > div:first-child {
    display: flex;
    flex-direction: column;

    & > span:first-child {
      color: #111;
      font-size: 16px;
    }

    & > span:last-child {
      color: #454545;
      font-size: 14px;
    }
  }

  & + & {
    border-radius: 0px 0px 8px 8px;
    border-top: none;
  }

  :hover {
    background: #efefef;
  }
`;

export const RowItem = ({ selected, onSelect, value, label }) => {
  return (
    <StyledRowItem $selected={selected} onClick={onSelect}>
      <div>
        <span>{label}</span>
        <span>{value}</span>
      </div>
      {selected && <Icon icon="checkmark" />}
    </StyledRowItem>
  )
};
