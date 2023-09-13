import styled from "styled-components";

const InputText = styled.input`
  border: 1px solid;
  border-color: var(--paleLight);
  border-radius: var(--default);
  width: 100%;
  padding: 1rem 1.5rem;
  color: var(--dark);
  font-size: 1rem;
  margin-bottom: 1.8rem;

  &:focus {
    border-color: var(--accent);
    caret-color: var(--accent);
  }
`;

export default InputText;
