import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context/useGlobalContext";

import Heading from "../ui/Heading";
import styled from "styled-components";

import ProductCategory from "../ui/ProductCategory";
import Container from "../ui/Container";
import Loader from "../ui/Loader";

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

  const { isLoading, productsData, error } = useGlobalContext();

  if (isLoading) return <Loader />;
  if (error) console.log(error);

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
