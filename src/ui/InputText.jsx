import styled from "styled-components";

const InputText = styled.input`
  border: 1px solid;
  border-color: var(--paleLight);
  border-radius: var(--border-radius-default);
  margin: 20px;
  padding: 10px 14px;

  &:focus {
    border-color: var(--accent);
    caret-color: var(--accent);
  }
`;

export default InputText;
