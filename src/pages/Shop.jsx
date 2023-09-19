import styled from "styled-components";
import Container from "../ui/Container";
import { Link, useLoaderData } from "react-router-dom";
import Heading from "../ui/Heading";
import { formatCurrency } from "../utilities/helpers";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

const StyledProductGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1.5rem;
  padding: 150px 0;
`;

const StyledProduct = styled.div`
  padding: 1rem;
  border-radius: var(--default);
  background-color: var(--light);
  text-align: center;
  margin-bottom: 2rem;
`;

const StyledImage = styled.img`
  border-radius: var(--default);
  margin-bottom: 2rem;
  width: 100%;
`;

const StyledPrice = styled.p`
  margin: 1rem 0;
`;

function Shop() {
  const products = useLoaderData();
  const dispatch = useDispatch();

  function handleAddItem(product) {
    const newItem = {
      id: product.id,
      name: product.name,
      forCart: product.image.forCart,
      price: product.price,
      quantity: 1,
      totalPrice: product.price * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <Container>
      <StyledProductGrid>
        {products.map((product) => {
          const {
            id,
            category,
            name,
            price,
            image: { desktop, tablet, mobile, forCart },
            slug,
          } = product;

          return (
            <StyledProduct key={id}>
              <StyledImage src={desktop} alt={name} />
              <Link to={`/product/${slug}`}>
                <Heading color="dark" as="h6">
                  {name}
                </Heading>
              </Link>
              <StyledPrice>{formatCurrency(price)}</StyledPrice>
              <Link to={`/category/${category}`}>
                <Button
                  variation="link"
                  style={{
                    marginTop: "0",
                  }}
                >
                  {category}
                </Button>
              </Link>
              <div>
                <Button onClick={() => handleAddItem(product)}>
                  Add to Cart
                </Button>
              </div>
            </StyledProduct>
          );
        })}
      </StyledProductGrid>
    </Container>
  );
}

export default Shop;
