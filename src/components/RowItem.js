import { useEffect, useState } from "react";

import styled from "styled-components";
import { theme, ifProp } from "styled-tools";
import TextareaAutosize from "react-textarea-autosize";

import { Icon } from "components/Icon";

const StyledRowItem = styled.div`
  border-radius: 8px 8px 0px 0px;
  background: ${ifProp("$selected", "#efefef", "white")}
  display: flex;
  align-items-center;
  padding: 1rem;
  border: 1px solid #ccc;
  justift-content: space-between;

  & + & {
    border-radius: 0px 0px 8px 8px;
  }

  :hover {
    background: #efefef;
  }
`;

export const RowItem = ({ selected, onSelect }) => {
  return (
    <StyledRowItem $selected={selected}>
      <div>
        <span>Label</span>
        <span>Value</span>
      </div>
      {true && <Icon icon="checkmark" />}
    </StyledRowItem>
  )
};
