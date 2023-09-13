import styled from "styled-components";

const InputRadio = styled.label`
  border: 1px solid;
  border-color: var(--paleLight);
  border-radius: var(--default);
  display: block;
  padding: 1rem 1.5rem 1rem 3.5rem;
  color: var(--dark);
  font-size: 1rem;
  margin-bottom: 1.8rem;
  position: relative;

  &::before {
    position: absolute;
    content: "";
    width: 30px;
    height: 30px;
    border-radius: 30px;
    border: 1px solid var(--paleLight);
    top: 50%;
    left: 0;
    transform: translate(50%, -15px);
  }
`;

export default InputRadio;
