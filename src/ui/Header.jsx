/* eslint-disable react/prop-types */

import styled, { css } from "styled-components";
import Container from "./Container";
import Logo from "./Logo";
import Menu from "./Menu";
import Modal from "./Modal";

import CartIcon from "../assets/shared/desktop/icon-cart.svg";

import { useSelector } from "react-redux";
import { getTotalCartQuantity } from "../features/cart/cartSlice";
import Cart from "../features/cart/Cart";
import Button from "./Button";
import Bar from "../assets/shared/tablet/icon-hamburger.svg";
import HorizontalRow from "./HorizontalRow";
import { useEffect, useState } from "react";
import Sidebar from "./Sidebar";
import { useLocation } from "react-router-dom";

const StyledHeader = styled.header`
  /* background-color: var(--dark); */
  background-color: transparent;

  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 auto;
  /* position: relative; */
  ${(props) =>
    props.hasbanner === "no" &&
    css`
      background-color: var(--dark);
    `};
`;

const StyledBadge = styled.span`
  display: inline-block;
  width: 20px;
  height: 20px;
  line-height: 20px;
  border-radius: 20px;
  text-align: center;
  background-color: var(--brand);
  font-size: 0.8rem;
  font-weight: 700;
  position: absolute;
  top: -30%;
  right: -12px;

  @media screen and (max-width: 575px) {
    right: -7px;
  }
`;

const MobileNavBar = styled.img`
  display: none;

  @media screen and (max-width: 767px) {
    display: block;
    margin-right: 2rem;
  }
`;

function Header({ hasbanner }) {
  const [showMobileNav, setShowMobileNav] = useState(false);
  const totalCartQuantity = useSelector(getTotalCartQuantity);

  const location = useLocation();

  useEffect(() => {
    setShowMobileNav(false);
  }, [location]);

  return (
    <StyledHeader hasbanner={hasbanner}>
      <Container>
        <HorizontalRow banner="yes">
          <MobileNavBar
            src={Bar}
            alt="Bar"
            onClick={() => setShowMobileNav((prev) => !prev)}
          />

          <Logo />
          <Menu />

          {/* <Link to="/cart">
              <img src={CartIcon} alt="cart" />
              {totalCartQuantity > 0 && (
                <StyledBadge>{totalCartQuantity}</StyledBadge>
              )}
            </Link> */}

          <Modal>
            <Modal.Open opens="cart">
              <Button variation="cart" type="button">
                <img
                  src={CartIcon}
                  alt="cart"
                  style={{
                    marginTop: "5px",
                  }}
                />
                {totalCartQuantity > 0 && (
                  <StyledBadge>{totalCartQuantity}</StyledBadge>
                )}
              </Button>
            </Modal.Open>
            <Modal.Window name="cart">
              <Cart />
            </Modal.Window>
          </Modal>
        </HorizontalRow>
        {showMobileNav && <Sidebar />}
      </Container>
    </StyledHeader>
  );
}

export default Header;
