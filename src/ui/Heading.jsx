import styled, { css } from "styled-components";

const Heading = styled.h1`
  text-transform: uppercase;
  font-weight: 700;

  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 3.5rem;

      line-height: 3.625rem;
      letter-spacing: 2px;

      @media screen and (max-width: 575px) {
        font-size: 2.25rem;
        line-height: 2.5rem;
      }
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.5rem;
      line-height: 2.75rem;
      letter-spacing: 1.5px;

      @media screen and (max-width: 767px) {
        font-size: 2.25rem;
      }
      @media screen and (max-width: 575px) {
        font-size: 1.75rem;
      }
    `}

    ${(props) =>
    props.as === "h3" &&
    css`
      font-size: 2rem;
      line-height: 2.25rem;
      letter-spacing: 1.15px;
    `}

    ${(props) =>
    props.as === "h4" &&
    css`
      font-size: 1.75rem;
      letter-spacing: 2px;
    `}

    ${(props) =>
    props.as === "h5" &&
    css`
      font-size: 1.5rem;
      letter-spacing: 1.7px;
    `}

    ${(props) =>
    props.as === "h6" &&
    css`
      font-size: 1.125rem;
      letter-spacing: 1.3px;
      @media screen and (max-width: 767px) {
        font-size: 0.9375rem;
        margin-top: 1rem;
      }
    `}

    ${(props) =>
    props.color === "dark" &&
    css`
      color: var(--dark);
    `}
    
    ${(props) =>
    props.color === "light" &&
    css`
      color: var(--light);
    `}

    /* ${(props) =>
    props.color === "paleLight" &&
    css`
      color: var(--paleLight);
    `} */

    ${(props) =>
    props.color === "darkGray" &&
    css`
      color: var(--darkGray);
    `}

    ${(props) =>
    props.color === "brand" &&
    css`
      color: var(--brand);
    `}

    ${(props) =>
    props.type === "subTitle" &&
    css`
      color: var(--brand);
      font-size: 0.8125rem;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 1rem;
    `}
`;

Heading.defaultProps = {
  color: "light",
};

export default Heading;
