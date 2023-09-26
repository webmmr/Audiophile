import TotalPrice from "../../ui/TotalPrice";
import Checkmark from "../../assets/checkout/icon-order-confirmation.svg";
import styled from "styled-components";
import Heading from "../../ui/Heading";
import { Link } from "react-router-dom";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utilities/helpers";
import CartSummaryItem from "../../ui/CartSummaryItem";
import { useDispatch } from "react-redux";
import { clearCart } from "../cart/cartSlice";

const StyledBox = styled.div`
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  background-color: var(--light);
  margin-bottom: 2rem;
  border-radius: var(--default);

  @media screen and (max-width: 575px) {
    grid-auto-flow: row;
    grid-template-columns: 1fr;
  }
`;

const StyledDetailBox = styled.div`
  height: 100%;
  padding: 2rem;
`;

const StyledTotalBox = styled.div`
  height: 100%;

  border-top-right-radius: var(--default);
  border-bottom-right-radius: var(--default);
  padding: 2rem;
  background-color: var(--dark);
  display: flex;
  flex-direction: column;

  justify-content: center;
  @media screen and (max-width: 575px) {
    text-align: center;
    border-top-right-radius: 0;
    border-bottom-left-radius: var(--default);
    border-bottom-right-radius: var(--default);
  }
`;

const StyledCopy = styled.p`
  margin: 0;
  border-top: 1px solid var(--darkGray);
  padding: 1rem;
  text-align: center;
`;

function ConfirmOrder() {
  const { cart, totalCartPrice, shipping, vat, grandTotal } = TotalPrice();
  const dispatch = useDispatch();

  return (
    <div>
      <img src={Checkmark} alt="Confirm " />
      <Heading
        as="h2"
        color="dark"
        style={{
          marginRight: "2rem",
          marginTop: "1rem",
        }}
      >
        Thank you for your order
      </Heading>
      <p>You will receive an email confirmation shortly</p>
      <StyledBox>
        <StyledDetailBox>
          {cart.map((item, index) => {
            if (index === 0)
              return <CartSummaryItem item={item} key={item.id} />;
          })}
          {cart.length > 1 ? (
            <StyledCopy> and {cart.length - 1} other items</StyledCopy>
          ) : (
            ""
          )}
          {/* {<CartSummaryItem cart={cart} />} */}
        </StyledDetailBox>
        <StyledTotalBox>
          <Heading
            as="h6"
            color="darkGray"
            style={{
              marginBottom: "1rem",
            }}
          >
            Grand Total
          </Heading>
          <Heading color="light" as="h6">
            {formatCurrency(grandTotal)}
          </Heading>
        </StyledTotalBox>
      </StyledBox>
      <Link to="/">
        <Button type="full" onClick={() => dispatch(clearCart())}>
          Back to Home
        </Button>
      </Link>
    </div>
  );
}

export default ConfirmOrder;
