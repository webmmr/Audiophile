/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import { Link, useLocation } from "react-router-dom";

const StyledCat = styled.div`
  background-color: var(--light);
  margin: 0 15px;
  border-radius: var(--default);
  padding: 30px;
  text-align: center;
`;

const StyledImage = styled.img`
  width: 300px;
  margin: -150px 0 -30px 0;
`;

function SingleCat({ name, image }) {
  const { thumbnail } = image;

  // determine the page, the category image path is altering depending on that
  const location = useLocation();
  const isProductPage = location.pathname.startsWith("/product/");

  return (
    <StyledCat>
      <StyledImage
        src={isProductPage ? `../${thumbnail}` : thumbnail}
        alt={name}
      />

      <Heading as="h6" color="dark">
        {name}
      </Heading>
      <Link to={`/category/${name}`}>
        <Button variation="shop">
          Shop{" "}
          <span
            style={{
              marginLeft: "5px",
            }}
          >
            <img src={arrow} alt="arr" />
          </span>
        </Button>
      </Link>
    </StyledCat>
  );
}

export default SingleCat;
