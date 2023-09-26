import { useLoaderData, useParams } from "react-router-dom";

import Heading from "../ui/Heading";
import styled from "styled-components";

import ProductCategory from "../ui/ProductCategory";
import Container from "../ui/Container";

const StyledHeader = styled.header`
  background-color: var(--dark);
  text-align: center;
  padding: 215px 0 100px;
  margin-top: -125px;

  @media screen and (max-width: 575px) {
    padding: 175px 0 60px;
  }
`;

function Category() {
  const { category } = useParams();

  const productsData = useLoaderData();

  const catProducts = productsData?.filter(
    (product) => product?.category === category
  );

  return (
    <>
      <StyledHeader>
        <Heading as="h2">{category}</Heading>
      </StyledHeader>
      <Container>
        <ProductCategory catProducts={catProducts} />
      </Container>
    </>
  );
}

export default Category;
