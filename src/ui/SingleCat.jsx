/* eslint-disable react/prop-types */
import styled from "styled-components";
import Heading from "./Heading";
import Button from "./Button";
import arrow from "../assets/shared/desktop/icon-arrow-right.svg";

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
    </StyledCat>
  );
}

export default SingleCat;
