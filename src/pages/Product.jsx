import { useNavigate, useParams } from "react-router-dom";
// import SingleProduct from "../ui/SingleProduct";
import { useGlobalContext } from "../context/useGlobalContext";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Overline from "../ui/Overline";
import Heading from "../ui/Heading";
import styled, { css } from "styled-components";

const StyledBack = styled.div`
  padding: 50px 0;
`;

const StyledGridContainer = styled.section`
  display: grid;
  padding: 80px 0;
  gap: 2rem;

  ${(props) =>
    props.columns === "equal" &&
    css`
      align-items: center;
      grid-template-columns: 1fr 1fr;
    `}

  ${(props) =>
    props.columns === "twoOne" &&
    css`
      grid-template-columns: 2fr 1fr;
    `}
    ${(props) =>
    props.columns === "oneTwo" &&
    css`
      grid-template-columns: 2.13fr 3fr;
    `}
`;

const StyledDiv = styled.div`
  padding: 125px;
`;

const StyledImage = styled.img`
  border-radius: var(--default);
  width: 100%;
`;

const StyledUl = styled.ul`
  padding: 0;
  margin-top: 30px;
`;

const StyledList = styled.li`
  list-style: none;
  margin-bottom: 10px;
`;
const StyledSpan = styled.span`
  color: var(--brand);
  margin-right: 15px;
  font-weight: 700;
`;

function Product() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const { isLoading, productsData, error } = useGlobalContext();

  if (isLoading) return <p>Loading...</p>;
  if (error) console.log(error);

  const product = productsData?.find((product) => product?.slug === slug);

  return (
    <>
      <Container>
        <StyledBack>
          <Button onClick={() => navigate(-1)} variation="link">
            Go back
          </Button>
        </StyledBack>
        <StyledGridContainer columns="equal">
          <StyledImage
            src={`../${product?.image?.desktop}`}
            alt={product?.name}
          />
          <StyledDiv>
            {product?.new && <Overline>New Product</Overline>}
            <Heading as="h2" color="dark">
              {product?.name}
            </Heading>
            <p>{product?.description}</p>

            <Button>Add to cart</Button>
          </StyledDiv>
        </StyledGridContainer>
        <StyledGridContainer columns="twoOne">
          <div
            style={{
              marginRight: "15%",
            }}
          >
            <Heading as="h3" color="dark">
              Features
            </Heading>
            <p>{product?.features}</p>
          </div>
          <div>
            <Heading as="h3" color="dark">
              In the box
            </Heading>
            <StyledUl>
              {product?.includes.map((item) => {
                return (
                  <StyledList key={item.id}>
                    <StyledSpan>{item.quantity}x</StyledSpan> {item.item}
                  </StyledList>
                );
              })}
            </StyledUl>
          </div>
        </StyledGridContainer>
        <StyledGridContainer columns="oneTwo">
          <div>
            <StyledImage
              src={`../${product?.gallery?.first?.desktop}`}
              style={{ marginBottom: "20px" }}
            />
            <StyledImage src={`../${product?.gallery?.second?.desktop}`} />
          </div>
          <div>
            <StyledImage src={`../${product?.gallery?.third?.desktop}`} />
          </div>
        </StyledGridContainer>
      </Container>
    </>
  );
}

export default Product;
