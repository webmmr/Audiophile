/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Container from "./Container";
import Button from "./Button";
import Overline from "./Overline";
import Heading from "./Heading";

const StyledBack = styled.div`
  padding: 50px 0;
`;

const StyledGridContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 80px 0;
  margin: 80px 0 0;
`;

const StyledDiv = styled.div`
  padding: 125px;
`;

const StyledImage = styled.img`
  border-radius: var(--default);
  width: 100%;
`;

function SingleProduct({ product }) {
  const {
    name,
    image: { desktop, tablet, mobile },
    description,
  } = product;

  console.log(product);
  console.log(name);

  const navigate = useNavigate();

  return (
    <Container>
      <StyledBack>
        <Button onClick={() => navigate(-1)} variation="link">
          Go back
        </Button>
      </StyledBack>
      {/* <StyledGridContainer>
        <StyledImage src={`../${desktop}`} alt={name} />
        <StyledDiv>
          {product?.new && <Overline>New Product</Overline>}
          <Heading as="h2" color="dark">
            {name}
          </Heading>
          <p>{description}</p>

          <Button>Add to cart</Button>
        </StyledDiv>
      </StyledGridContainer> */}
    </Container>
  );
}

export default SingleProduct;
