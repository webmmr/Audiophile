import styled, { css } from "styled-components";

const Overline = styled.p`
  font-size: 14px;
  letter-spacing: 10px;
  line-height: 19px;
  text-transform: uppercase;

  ${(props) =>
    props.color === "brand" &&
    css`
      color: var(--brand);
    `}
  ${(props) =>
    props.color === "light" &&
    css`
      color: var(--light);
    `}

    @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

Overline.defaultProps = {
  color: "brand",
};

export default Overline;
