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

  padding: ${(props) => (props.isCart ? "0.4rem 0.8rem" : "0.8rem 1.6rem")};
  border: none;
  background: var(--paleLight);
  font-weight: 700;
  font-size: 1rem;
`;

// eslint-disable-next-line react/prop-types
function UpdateQuantity({ id, initQuantity, isCart }) {
  const totalQuantity = useSelector(getTotalSingleProductQuantity(id));

  const dispatch = useDispatch();

  return (
    <StyledUpdateContainer>
      <Button
        variation="update"
        type={isCart}
        onClick={() => dispatch(decreaseItem(id))}
      >
        -
      </Button>
      <StyledSpan isCart={isCart}>{totalQuantity || initQuantity}</StyledSpan>
      <Button
        variation="update"
        type={isCart}
        onClick={() => dispatch(increaseItem(id))}
      >
        +
      </Button>
    </StyledUpdateContainer>
  );
}

export default UpdateQuantity;
