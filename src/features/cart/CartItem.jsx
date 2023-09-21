/* eslint-disable react/prop-types */
import styled from "styled-components";

import { formatCurrency } from "../../utilities/helpers";
import Heading from "../../ui/Heading";
import UpdateQuantity from "../../ui/UpdateQuantity";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

const StyledItem = styled.li`
  padding: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  margin-right: 4rem;
  min-width: 15rem;
`;

const StyledImg = styled.img`
  border-radius: var(--default);
  margin-right: 1rem;
  width: 90px;
`;

const StylePrice = styled.p`
  padding: 0.25rem 0;
  margin: 0;
  font-weight: 400;
`;

function CartItem({ item }) {
  const { id, name, forCart, totalPrice, quantity } = item;

  const lastIndex = name.lastIndexOf(" ");

  const productName = name.substring(0, lastIndex);

  const dispatch = useDispatch();

  return (
    <StyledItem>
      <StyledDiv>
        <StyledImg src={`../${forCart}`} alt={name} />
        <div>
          <Heading as="h6" color="dark">
            {productName}
          </Heading>
          <StylePrice>{formatCurrency(totalPrice)}</StylePrice>
        </div>
      </StyledDiv>

      <UpdateQuantity id={id} curQuantity={quantity} />
      <Button
        color="dark"
        variation="update"
        type="small"
        style={{
          borderRadius: "20px",
          marginLeft: "5px",
        }}
        onClick={() => dispatch(deleteItem(id))}
      >
        &times;
      </Button>
    </StyledItem>
  );
}

export default CartItem;
