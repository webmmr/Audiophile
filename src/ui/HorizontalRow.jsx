import styled, { css } from "styled-components";

const HorizontalRow = styled.div`
  display: flex;
  padding: 40px 0;

  justify-content: space-between;
  align-items: center;

  ${(props) =>
    props.variation === "vertical" &&
    css`
      @media screen and (max-width: 767px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 2rem;
        padding: 40px 0 20px;
      }

      @media screen and (max-width: 575px) {
        align-items: center;
        text-align: center;
      }
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

export default HorizontalRow;
