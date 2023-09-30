import FooterImage from "../assets/shared/desktop/image-best-gear.jpg";
import styled from "styled-components";
import Container from "./Container";
import Heading from "./Heading";
import Logo from "./Logo";
import Menu from "./Menu";
import Social from "./Social";
import { useLocation } from "react-router-dom";
import HorizontalRow from "./HorizontalRow";

const StyledBestSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 120px 0;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 80px 0;
  }
`;

const StyledBestSectionContent = styled.div`
  margin-right: 15%;

  @media screen and (max-width: 767px) {
    padding: 3rem 2rem 0;
    margin: 0;
    text-align: center;
  }
`;

const StyleImg = styled.img`
  border-radius: var(--default);
  width: 100%;

  @media screen and (max-width: 767px) {
    order: -1;
  }
`;

const StyledSpan = styled.span`
  color: var(--brand);
`;

const StyledFooter = styled.footer`
  background-color: var(--dark);
`;

const StyledFooterContent = styled.section`
  padding: 60px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: end;

  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
    padding: 20px 0;
  }

  @media screen and (max-width: 575px) {
    text-align: center;
    padding: 0 2rem;
  }
`;

const CopyrightSection = styled.div`
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 575px) {
    flex-direction: column;
  }
`;

const StyledLine = styled.span`
  background-color: var(--brand);
  height: 4px;
  width: 150px;
  display: block;

  @media screen and (max-width: 575px) {
    margin: 0 auto;
  }
`;

const Footer = () => {
  const location = useLocation();

  const isCheckoutPage = location.pathname === "/checkout";

  return (
    <>
      {!isCheckoutPage && (
        <Container>
          <StyledBestSection>
            <StyledBestSectionContent>
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
            </StyledBestSectionContent>
            <StyleImg src={FooterImage} alt="Footer Image" />
          </StyledBestSection>
        </Container>
      )}
      <StyledFooter>
        <Container>
          <StyledLine></StyledLine>
          <HorizontalRow variation="vertical">
            <Logo />
            <Menu />
          </HorizontalRow>
          <StyledFooterContent>
            <p>
              Audiophile is an all in one stop to fulfill your audio needs. We
              are a small team of music lovers and sound specialists who are
              devoted to helping you get the most out of personal audio. Come
              and visit our demo facility - we’re open 7 days a week.
            </p>
            <Social />
          </StyledFooterContent>
          <CopyrightSection>
            <p>Copyright 2021. All Rights Reserved</p>
            <Social screen="tablet" />
          </CopyrightSection>
        </Container>
      </StyledFooter>
    </>
  );
};

export default Footer;
