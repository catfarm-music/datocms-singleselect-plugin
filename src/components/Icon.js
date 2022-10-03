import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

import { getFilters } from "utils/hexToCssFilter";

const StyledImg = styled.img`
  transition: filter 200ms;
  width: ${prop("size")}px;
  height: ${prop("size")}px;

  ${prop("filter")};

  transition: 200ms transform;
`;

const StyledSkeleton = styled.div`
  width: ${prop("size")}px;
  height: ${prop("size")}px;
  opacity: 0;
`;

export const Icon = ({ icon, ...props }) => {
  const [src, setSrc] = useState();

  useEffect(() => {
    import(`icons/${icon}.svg`).then((result) => {
      setSrc(result.default);
    });
  }, [icon]);

  const { filter } = getFilters("#2AC24B")

  return src ? <StyledImg src={src} alt={icon} filter={filter} {...props} /> : <StyledSkeleton {...props} />;
};

Icon.defaultProps = {
  size: 20,
};
