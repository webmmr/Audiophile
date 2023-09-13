import styled, { css } from "styled-components";

const type = {
  full: css`
    width: 100%;
    margin-top: 1.5rem;
  `,
};

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

  cart: css`
    padding: 0;

    border: none;
    background: transparent;
  `,

  update: css`
    color: var(--dark);

    padding: 0.2rem 0.6rem;
    border: none;
    background: var(--paleLight);
    font-weight: 500;
    font-size: 1.2rem;

    &:hover {
      background-color: var(--brand);
    }
  `,

  remove: css`
    color: var(--dark);
    opacity: 0.5;
    padding: 0;
    text-transform: capitalize;
    border: none;
    background: transparent;
    font-weight: 500;
    text-decoration: underline;
    font-size: 0.95rem;

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
  opacity: 1;
  font-size: 0.825rem;
  line-height: 25px;

  &:hover {
    cursor: pointer;
  }

  ${(props) => variations[props.variation]}
  ${(props) => type[props.type]}
`;

Button.defaultProps = {
  variation: "primary",
  type: "normal",
};

export default Button;
