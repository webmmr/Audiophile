import { useDispatch } from "react-redux";
import { decreaseItem, increaseItem } from "../features/cart/cartSlice";
import Button from "./Button";
import styled from "styled-components";

const StyledUpdateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  color: var(--dark);

  padding: 0.4rem 0.8rem;
  border: none;
  background: var(--paleLight);
  font-weight: 700;
  font-size: 1rem;
`;

// eslint-disable-next-line react/prop-types
function UpdateQuantity({ id, curQuantity }) {
  const dispatch = useDispatch();

  return (
    <StyledUpdateContainer>
      <Button
        variation="update"
        type="small"
        onClick={() => dispatch(decreaseItem(id))}
      >
        -
      </Button>
      <StyledSpan>{curQuantity}</StyledSpan>
      <Button
        variation="update"
        type="small"
        onClick={() => dispatch(increaseItem(id))}
      >
        +
      </Button>
    </StyledUpdateContainer>
  );
}

export default UpdateQuantity;
