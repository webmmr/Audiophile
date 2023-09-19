import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledMenu = styled.ul`
  padding: 0;
  display: flex;
  gap: 2.125rem;
`;
const StyledList = styled.li`
  list-style: none;
  color: var(--light);
`;

const linkStyle = {
  textDecoration: "none",
  color: "#f1f1f1",
  textTransform: "uppercase",
  fontWeight: "700",
  padding: "1rem",
};

function Menu() {
  return (
    <StyledMenu>
      <StyledList>
        <Link to="/" style={linkStyle}>
          Home
        </Link>
        <Link to="/shop" style={linkStyle}>
          Shop All
        </Link>
        <Link to="/category/headphones" style={linkStyle}>
          Headphones
        </Link>
        <Link to="/category/earphones" style={linkStyle}>
          Earphones
        </Link>
        <Link to="/category/speakers" style={linkStyle}>
          Speakers
        </Link>
      </StyledList>
    </StyledMenu>
  );
}

export default Menu;
