import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Row from "./Row";

import CartIcon from "../assets/shared/desktop/icon-cart.svg";

const StyledHeader = styled.header`
  /* background-color: var(--dark); */
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  /* position: relative; */

  ${(props) =>
    props.hasBanner === "no" &&
    css`
      background-color: var(--dark);
    `}
`;

function Header({ hasBanner }) {
  return (
    <StyledHeader hasBanner={hasBanner}>
      <Container>
        <Row banner="yes">
          <Logo />
          <Menu />
          <Link to="/cart">
            <img src={CartIcon} alt="cart" />
          </Link>
        </Row>
      </Container>
    </StyledHeader>
  );
}

export default Header;
