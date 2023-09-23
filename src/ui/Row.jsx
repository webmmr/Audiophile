import styled, { css } from "styled-components";

const Row = styled.div`
  display: flex;
  padding: 40px 0;

  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    gap: 5rem;
    text-align: center;
  }
`;

export default Row;
