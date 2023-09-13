/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";
import { Link } from "react-router-dom";

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

  return (
    <StyledCat>
      <StyledImage src={thumbnail} alt={name} />

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
