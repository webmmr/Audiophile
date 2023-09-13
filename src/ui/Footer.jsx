import Row from "./Row";
import FooterImage from "../assets/shared/desktop/image-best-gear.jpg";
import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";
import Logo from "./Logo";
import Menu from "./Menu";
import Social from "./Social";
import { useLocation } from "react-router-dom";

const StyledBestSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 120px 0;
`;

const StyleImg = styled.img`
  border-radius: var(--default);
  width: 100%;
`;

const StyledSpan = styled.span`
  color: var(--brand);
`;

const StyledFooter = styled.footer`
  padding: 60px 0;
  background-color: var(--dark);
`;

const StyledFooterContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;
`;

const Footer = () => {
  const location = useLocation();

  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      {!isCheckoutPage && (
        <Container>
          <StyledBestSection>
            <div
              style={{
                marginRight: "15%",
              }}
            >
              <Heading as="h2" color="dark">
                Bringing you the <StyledSpan>Best</StyledSpan> audio gear
              </Heading>
              <p
                style={{
                  marginTop: "30px",
                }}
              >
                Located at the heart of New York City, Audiophile is the premier
                store for high end headphones, earphones, speakers, and audio
                accessories. We have a large showroom and luxury demonstration
                rooms available for you to browse and experience a wide range of
                our products. Stop by our store to meet some of the fantastic
                people who make Audiophile the best place to buy your portable
                audio equipment.
              </p>
            </div>
            <StyleImg src={FooterImage} alt="Footer Image" />
          </StyledBestSection>
        </Container>
      )}
      <StyledFooter>
        <Container>
          <Row>
            <Logo />
            <Menu />
          </Row>
          <StyledFooterContent>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <Social />
          </StyledFooterContent>
          <Row>
            <p>Copyright 2021. All Rights Reserved</p>
          </Row>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
