import { Link } from "react-router-dom";
import DesktopLogo from "../assets/shared/desktop/logo.svg";
import styled from "styled-components";

const StyledLogo = styled.div`
  display: flex;
  flex: 1;
  @media screen and (max-width: 575px) {
    justify-content: center;
  }
`;

const linkStyle = {
  marginTop: "7px",
};

function Logo() {
  return (
    <StyledLogo>
      <Link to="/">
        <img src={DesktopLogo} alt="Audiophile" style={linkStyle} />
      </Link>
    </StyledLogo>
  );
}

export default Logo;
