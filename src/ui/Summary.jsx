/* eslint-disable react/prop-types */

import styled from "styled-components";
import CartSummaryItem from "./CartSummaryItem";
import TotalPrice from "./TotalPrice";
import Heading from "./Heading";
import { formatCurrency } from "../utilities/helpers";
import Modal from "./Modal";
import Button from "./Button";
import ConfirmOrder from "../features/checkout/ConfirmOrder";

const StyledPriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
`;

function Summary({ onCloseModal }) {
  const { cart, totalCartPrice, shipping, vat, grandTotal } = TotalPrice();

  return (
    <>
      {cart.map((item) => {
        return <CartSummaryItem item={item} key={item.id} />;
      })}

      <StyledPriceDiv>
        <Heading as="h6" color="darkGray">
          Total
        </Heading>
        <Heading color="dark">{formatCurrency(totalCartPrice)}</Heading>
      </StyledPriceDiv>

      <StyledPriceDiv>
        <Heading as="h6" color="darkGray">
          Shipping
        </Heading>
        <Heading color="dark">{formatCurrency(shipping)}</Heading>
      </StyledPriceDiv>

      <StyledPriceDiv>
        <Heading as="h6" color="darkGray">
          Vat (Included)
        </Heading>
        <Heading color="dark">{formatCurrency(vat)}</Heading>
      </StyledPriceDiv>

      <StyledPriceDiv>
        <Heading as="h6" color="dark">
          Grand Total
        </Heading>
        <Heading color="brand">{formatCurrency(grandTotal)}</Heading>
      </StyledPriceDiv>

      <Modal>
        <Modal.Open opens="confirm">
          <Button color="dark" type="full">
            Continue & Pay
          </Button>
        </Modal.Open>

        <Modal.Window name="confirm">
          <ConfirmOrder />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default Summary;
