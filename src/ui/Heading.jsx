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
    `}

  ${(props) =>
    props.as === "h2" &&
    css`
      font-size: 2.5rem;
      line-height: 2.75rem;
      letter-spacing: 1.5px;
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
`;

Heading.defaultProps = {
  color: "light",
};

export default Heading;
