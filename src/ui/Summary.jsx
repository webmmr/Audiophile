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

const StyledInputSubmit = styled.input`
  width: 100%;
  margin-top: 1.5em;
  color: var(--light);
  background-color: var(--brand);
  border-color: var(--brand);
  border-radius: 0;
  text-transform: uppercase;
  border: 1px;
  border-style: solid;
  padding: 0.8rem 2rem;
  font-weight: 700;
  opacity: 1;
  font-size: 0.825rem;
  line-height: 25px;

  &:hover {
    cursor: pointer;
  }
`;

function Summary() {
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

      {/* <StyledInputSubmit type="submit" value="Continue & Pay" /> */}

      <StyledInputSubmit type="submit" value="Continue & Pay" />
      <Modal>
        <Modal.Open opens="confirm">
          <StyledInputSubmit type="submit" value="Continue & Pay" />
        </Modal.Open>

        <Modal.Window name="confirm">
          <ConfirmOrder />
        </Modal.Window>
      </Modal>
    </>
  );
}

export default Summary;
