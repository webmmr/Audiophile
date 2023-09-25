import styled from "styled-components";

const Container = styled.div`
  width: 1290px;
  margin: 0 auto;

  @media screen and (max-width: 767px) {
    width: 690px;
  }

  @media screen and (max-width: 575px) {
    width: 550px;
  }

  @media screen and (max-width: 400px) {
    width: 375px;
  }
`;

export default Container;
