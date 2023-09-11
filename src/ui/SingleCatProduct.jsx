import styled, { css } from "styled-components";
import Row from "./Row";
import Overline from "./Overline";
import Heading from "./Heading";
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledImage = styled.img`
  border-radius: var(--default);
  width: 100%;
  ${(props) =>
    props.reverseOrder &&
    css`
      order: 2;
    `}
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

function SingleCatProduct({ name, description, slug, image, isNew, index }) {
  const { desktop, tablet, mobile } = image;

  const reverseOrder = (index + 1) % 2 === 0;

  return (
    <StyledGridContainer>
      <StyledImage
        src={`../${desktop}`}
        alt={name}
        reverseOrder={reverseOrder}
      />
      <StyledDiv>
        {isNew && <Overline>New Product</Overline>}
        <Heading as="h2" color="dark">
          {name}
        </Heading>
        <p>{description}</p>
        <Link to={`/product/${slug}`}>
          <Button>Shop Now</Button>
        </Link>
      </StyledDiv>
    </StyledGridContainer>
  );
}

export default SingleCatProduct;
