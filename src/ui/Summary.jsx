/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import styled from "styled-components";
import { getCart } from "../features/cart/cartSlice";
import CartItem from "../features/cart/CartItem";
import Button from "./Button";

const StyledCartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const StyledCart = styled.div`
  /* padding: 1rem; */
  background-color: var(--white);
`;

const StyledList = styled.ul`
  padding: 0;
`;

function Summary({ onCloseModal }) {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  return (
    <StyledCart>
      {
        <StyledList>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </StyledList>
      }
      <Link to="/checkout">
        <Button color="dark" type="full" onClick={() => onCloseModal?.()}>
          Checkout & Pay
        </Button>
      </Link>
    </StyledCart>
  );
}

export default Summary;
