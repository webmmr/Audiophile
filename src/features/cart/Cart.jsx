/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import EmptyCart from "./EmptyCart";
import { clearCart, getCart } from "./cartSlice";
import styled from "styled-components";
import CartItem from "./CartItem";
import Heading from "../../ui/Heading";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";

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

function Cart({ onCloseModal }) {
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (cart.length === 0) return <EmptyCart onCloseModal={onCloseModal} />;

  return (
    <StyledCart>
      <StyledCartHeader>
        <Heading as="h5" color="dark">
          Cart ({cart.length})
        </Heading>
        <Link>
          <Button
            variation="remove"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Remove all
          </Button>
        </Link>
      </StyledCartHeader>
      {
        <StyledList>
          {cart.map((item) => (
            <CartItem item={item} key={item.id} />
          ))}
        </StyledList>
      }
      <Link to="/checkout">
        <Button color="dark" type="full" onClick={() => onCloseModal?.()}>
          Checkout
        </Button>
      </Link>
    </StyledCart>
  );
}

export default Cart;
