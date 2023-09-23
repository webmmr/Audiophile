import { Link } from "react-router-dom";
import DesktopLogo from "../assets/shared/desktop/logo.svg";

const linkStyle = {
  display: "flex",
  flex: "1",
};

function Logo() {
  return (
    <Link style={linkStyle} to="/">
      <img src={DesktopLogo} alt="Audiophile" />
    </Link>
  );
}

export default Logo;
