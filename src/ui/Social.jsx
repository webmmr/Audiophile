/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";

const StyledMenu = styled.ul`
  ${(props) =>
    props.screen === "desktop" &&
    css`
      padding: 0;
      display: flex;
      justify-content: flex-end;

      @media screen and (max-width: 767px) {
        display: none !important;
      }
    `}

  ${(props) =>
    props.screen === "tablet" &&
    css`
      padding: 0;
      display: flex;
      justify-content: flex-end;

      @media (min-width: 768px) {
        display: none !important;
      }
    `}
`;

StyledMenu.defaultProps = {
  screen: "desktop",
};

const StyledList = styled.li`
  list-style: none;
  margin-left: 1.125rem;
  color: var(--light);
`;

function Social({ screen }) {
  return (
    <StyledMenu screen={screen}>
      <StyledList>
        <Link to="/">
          <img src={Facebook} alt="FB" />
        </Link>
      </StyledList>
      <StyledList>
        <Link to="/">
          <img src={Instagram} alt="IG" />
        </Link>
      </StyledList>
      <StyledList>
        <Link to="/">
          <img src={Twitter} alt="TW" />
        </Link>
      </StyledList>
    </StyledMenu>
  );
}

export default Social;
