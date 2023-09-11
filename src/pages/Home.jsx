import { useGlobalContext } from "../context/useGlobalContext";
import styled from "styled-components";

import bannerBackgroundImage from "../assets/home/desktop/image-hero.jpg";
import zx9Image from "../assets/home/desktop/image-speaker-zx9.png";
import zx7BackgroundImage from "../assets/home/desktop/image-speaker-zx7.jpg";
import yx1Image from "../assets/home/desktop/image-earphones-yx1.jpg";

import pattern from "../assets/home/desktop/pattern-circles.svg";

import Container from "../ui/Container";

import Overline from "../ui/Overline";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import SingleCat from "../ui/SingleCat";
import Row from "../ui/Row";
import Loader from "../ui/Loader";

const StyledBanner = styled.section`
  background-image: url(${bannerBackgroundImage});
  background-size: cover;
  background-position: center center;
  min-height: 55rem;
  padding: 100px 0;
  display: flex;
  align-items: center;
  margin-top: -125px;
`;

const StyledCats = styled.section`
  padding: 300px 0 150px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledZX9 = styled.section`
  background-image: url(${pattern});
  background-size: 100%;
  background-position: -13vw;
  background-repeat: no-repeat;
  background-color: var(--brand);
  border-radius: var(--default);
  overflow: hidden;
  padding-top: 100px;
  margin-bottom: 50px;
`;

const StyledZX9Image = styled.img`
  max-width: 30%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: -50px;
`;

const StyledZX9Div = styled.div`
  width: 40%;
`;

const StyledZX7 = styled.section`
  background-image: url(${zx7BackgroundImage});
  background-size: cover;
  background-position: center right;
  border-radius: var(--default);
  padding: 100px;
`;

const Styledyx1Image = styled.img`
  border-radius: var(--default);
  width: 100%;
`;

const StyledDiv = styled.div`
  width: 48%;
  margin: 1%;
  border-radius: var(--default);
  background-color: var(--light);
`;

function Home() {
  const { isLoading, error, productsData } = useGlobalContext();

  if (isLoading) return <Loader />;
  if (error) console.log(error);

  let newArrayForCats;

  if (!isLoading && productsData) {
    console.log(productsData);

    const uniqueCategories = {};

    productsData.forEach((item) => {
      const { category, categoryImage } = item;

      if (!uniqueCategories[category]) {
        uniqueCategories[category] = categoryImage;
      }
    });

    newArrayForCats = Object.keys(uniqueCategories).map((category) => ({
      category,
      categoryImage: uniqueCategories[category],
    }));
  }

  return (
    <>
      <StyledBanner>
        <Container>
          <Overline color="light">New Product</Overline>
          <Heading
            as="h1"
            style={{
              margin: "25px 0",
            }}
          >
            XX99 Mark II <br />
            Headphones
          </Heading>
          <p
            style={{
              color: "#f1f1f1",
              paddingRight: "50%",
              fontWeight: "500",
              lineHeight: "1.6rem",
              marginBottom: "50px",
            }}
          >
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Button>See Product</Button>
        </Container>
      </StyledBanner>

      <Container>
        <StyledCats>
          {newArrayForCats?.map((item) => {
            return (
              <SingleCat
                name={item.category}
                image={item.categoryImage}
                key={item.category}
              />
            );
          })}
        </StyledCats>

        <StyledZX9>
          <Row>
            <StyledZX9Image src={zx9Image} alt="ZX9 Speaker" />
            <StyledZX9Div>
              <Heading
                as="h1"
                style={{
                  margin: "25px 0",
                }}
              >
                ZX9 <br />
                Speaker
              </Heading>
              <p
                style={{
                  color: "#f1f1f1",
                  fontWeight: "500",
                  paddingRight: "25%",
                  lineHeight: "1.6rem",
                  marginBottom: "50px",
                }}
              >
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <Button variation="dark">See Product</Button>
            </StyledZX9Div>
          </Row>
        </StyledZX9>

        <StyledZX7>
          <Heading
            as="h4"
            color="dark"
            style={{
              margin: "25px 0",
            }}
          >
            ZX7 <br />
            Speaker
          </Heading>

          <Button variation="secondary">See Product</Button>
        </StyledZX7>
        <Row>
          <StyledDiv
            style={{
              marginLeft: "0",
            }}
          >
            <Styledyx1Image src={yx1Image} alt="YX1 Earphone" />
          </StyledDiv>
          <StyledDiv
            style={{
              marginRight: "0",
              padding: "129px ",
            }}
          >
            <Heading
              as="h4"
              color="dark"
              style={{
                margin: "25px 0",
              }}
            >
              YX1 Earphone
            </Heading>

            <Button variation="secondary">See Product</Button>
          </StyledDiv>
        </Row>
      </Container>
    </>
  );
}

export default Home;
