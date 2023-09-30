import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.ul`
  padding: 0;
  display: flex;
  gap: 2.125rem;
  margin-right: 3rem;

  @media screen and (max-width: 767px) {
    display: block;
    margin-right: 0;
  }
  @media screen and (max-width: 575px) {
    margin-right: 0;
  }
`;
const StyledList = styled.li`
  list-style: none;
  color: var(--light);

  @media screen and (max-width: 575px) {
    display: block;
  }
`;

function Menu() {
  return (
    <StyledMenu>
      <StyledList>
        <NavLink to="/" className="linkStyle">
          Home
        </NavLink>
      </StyledList>
      <StyledList>
        <NavLink to="/shop" className="linkStyle">
          Shop All
        </NavLink>
      </StyledList>
      <StyledList>
        <NavLink to="/category/headphones" className="linkStyle">
          Headphones
        </NavLink>
      </StyledList>
      <StyledList>
        <NavLink to="/category/earphones" className="linkStyle">
          Earphones
        </NavLink>
      </StyledList>
      <StyledList>
        <NavLink to="/category/speakers" className="linkStyle">
          Speakers
        </NavLink>
      </StyledList>
    </StyledMenu>
  );
}

export default Menu;
