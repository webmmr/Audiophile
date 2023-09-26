import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";

import Container from "../ui/Container";
import Button from "../ui/Button";
import Overline from "../ui/Overline";
import Heading from "../ui/Heading";
import styled, { css } from "styled-components";
import { getData } from "../services/apiShop";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSlice";

import UniqueCats from "../ui/UniqueCats";
import { useState } from "react";

const StyledBack = styled.div`
  padding: 50px 0;

  @media screen and (max-width: 575px) {
    padding: 30px 0;
  }
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

      @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        padding: 0 0 50px;
      }
    `}
  ${(props) =>
    props.columns === "three" &&
    css`
      text-align: center;
      grid-template-columns: 1fr 1fr 1fr;

      @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;
      }
    `}

  ${(props) =>
    props.columns === "twoOne" &&
    css`
      grid-template-columns: 2fr 1fr;

      @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        padding: 0 50px;
      }
    `}

    ${(props) =>
    props.columns === "oneTwo" &&
    css`
      grid-template-columns: 2.13fr 3fr;

      @media screen and (max-width: 575px) {
        grid-template-columns: 1fr;
        padding: 50px;
      }
    `}
`;

const StyledDiv = styled.div`
  padding: 125px;

  @media screen and (max-width: 575px) {
    padding: 50px;
  }
`;

const StyledButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

const StyledImage = styled.img`
  border-radius: var(--default);
  width: 100%;
  background-color: var(--paleLight);
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
const StyledCats = styled.section`
  padding: 300px 0 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 575px) {
    flex-direction: column;
    padding: 0 0 60px;
  }
`;

const StyledUpdateContainer = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSpan2 = styled.span`
  color: var(--dark);

  padding: ${(props) => (props.iscart ? "0.4rem 0.8rem" : "0.8rem 1.6rem")};
  border: none;
  background: var(--paleLight);
  font-weight: 700;
  font-size: 1rem;
`;

function SingleProduct() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productData = useLoaderData();

  const [curQuantity, setCurQuantity] = useState(1);

  const product = productData?.find((product) => product?.slug === slug);

  const { id, name, price, image, description, others } = product;

  const { desktop, tablet, mobile, forCart } = image;

  function handleAddItem() {
    const newItem = {
      id,
      name,
      forCart,
      price,
      quantity: curQuantity,
      totalPrice: price * curQuantity,
    };

    dispatch(addItem(newItem));
  }

  return (
    <>
      <Container>
        <StyledBack>
          <Button onClick={() => navigate(-1)} variation="link">
            Go back
          </Button>
        </StyledBack>
        <StyledGridContainer columns="equal">
          <StyledImage src={`../${desktop}`} alt={name} />
          <StyledDiv>
            {product?.new && <Overline>New Product</Overline>}
            <Heading as="h2" color="dark">
              {name}
            </Heading>
            <p>{description}</p>
            <div>
              <StyledButtonContainer>
                {/* <UpdateQuantity initQuantity="1" id={id} isCart={false} /> */}
                <StyledUpdateContainer>
                  <Button
                    variation="update"
                    type="big"
                    onClick={() => setCurQuantity((prev) => prev - 1)}
                    disabled={curQuantity === 1}
                  >
                    -
                  </Button>
                  <StyledSpan2>{curQuantity}</StyledSpan2>
                  <Button
                    variation="update"
                    type="big"
                    onClick={() => setCurQuantity((prev) => prev + 1)}
                  >
                    +
                  </Button>
                </StyledUpdateContainer>
                <Button onClick={handleAddItem}>Add to cart</Button>
              </StyledButtonContainer>
            </div>
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
        <Heading
          as="h4"
          color="dark"
          style={{
            textAlign: "center",
          }}
        >
          you may also like
        </Heading>
        <StyledGridContainer columns="three">
          {others.map((item) => {
            return (
              <div key={item.slug}>
                <StyledImage src={`../${item.image.desktop}`} alt={item.name} />
                <Heading
                  color="dark"
                  as="h5"
                  style={{
                    margin: "1.5rem 0",
                  }}
                >
                  {item.name}
                </Heading>
                <Link to={`/product/${item.slug}`}>
                  <Button>See Product</Button>
                </Link>
              </div>
            );
          })}
        </StyledGridContainer>
        <StyledCats>
          <UniqueCats productData={productData} />
        </StyledCats>
      </Container>
    </>
  );
}

export async function loader() {
  const allProducts = await getData();

  return allProducts;
}

export default SingleProduct;
