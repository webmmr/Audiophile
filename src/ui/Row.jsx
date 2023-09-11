import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  padding: 40px 0;

  ${(props) =>
    props.type === "horizontal" &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === "vertical" &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}

    ${(props) =>
    props.banner === "yes" &&
    css`
      background: transparent;
      border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    `}
    
    ${(props) =>
    props.banner === "no" &&
    css`
      background: var(--dark);
    `}
`;

Row.defaultProps = {
  type: "horizontal",
};

export default Row;
