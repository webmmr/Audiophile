import { Link } from "react-router-dom";
import styled from "styled-components";
import Facebook from "../assets/shared/desktop/icon-facebook.svg";
import Instagram from "../assets/shared/desktop/icon-instagram.svg";
import Twitter from "../assets/shared/desktop/icon-twitter.svg";

const StyledMenu = styled.ul`
  padding: 0;
  display: flex;
  justify-content: flex-end;
`;
const StyledList = styled.li`
  list-style: none;
  margin-left: 1.125rem;
  color: var(--light);
`;

function Social() {
  return (
    <StyledMenu>
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
