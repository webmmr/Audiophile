import { useDispatch, useSelector } from "react-redux";
import {
  decreaseItem,
  getTotalSingleProductQuantity,
  increaseItem,
} from "../features/cart/cartSlice";
import Button from "./Button";
import styled from "styled-components";

const StyledUpdateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan = styled.span`
  color: var(--dark);

  padding: 0.2rem 0.6rem;
  border: none;
  background: var(--paleLight);
  font-weight: 700;
  font-size: 1rem;
`;

function UpdateQuantity({ id, initQuantity }) {
  const totalQuantity = useSelector(getTotalSingleProductQuantity(id));

  const dispatch = useDispatch();

  return (
    <StyledUpdateContainer>
      <Button variation="update" onClick={() => dispatch(decreaseItem(id))}>
        -
      </Button>
      <StyledSpan>{totalQuantity || initQuantity}</StyledSpan>
      <Button variation="update" onClick={() => dispatch(increaseItem(id))}>
        +
      </Button>
    </StyledUpdateContainer>
  );
}

export default UpdateQuantity;
