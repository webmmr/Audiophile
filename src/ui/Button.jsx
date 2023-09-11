import styled, { css } from "styled-components";

const variations = {
  primary: css`
    color: var(--light);
    background-color: var(--brand);
    border-color: var(--brand);

    &:hover {
      background-color: var(--accent);
      border-color: var(--accent);
    }
  `,

  secondary: css`
    color: var(--dark);
    background-color: transparent;
    border-color: var(--dark);

    &:hover {
      color: var(--light);
      background-color: var(--dark);
    }
  `,

  dark: css`
    color: var(--light);
    background-color: var(--dark);
    border-color: var(--dark);

    &:hover {
      background-color: var(--darkGray);
    }
  `,

  shop: css`
    color: var(--dark);
    opacity: 0.5;
    background-color: transparent;
    border-color: transparent;
    margin-top: 15px;

    &:hover {
      color: var(--brand);
      opacity: 1;
    }
  `,

  link: css`
    color: var(--dark);
    opacity: 0.5;
    padding: 0;
    text-transform: none;
    border: none;
    background: transparent;
    font-weight: 500;

    &:hover {
      color: var(--brand);
      opacity: 1;
    }
  `,
};

const Button = styled.button`
  border-radius: 0;
  text-transform: uppercase;
  border: 1px;
  border-style: solid;
  padding: 14px 32px;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.825rem;
  line-height: 25px;

  ${(props) => variations[props.variation]}
`;

Button.defaultProps = {
  variation: "primary",
};

export default Button;
