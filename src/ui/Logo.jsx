import { Link } from "react-router-dom";
import DesktopLogo from "../assets/shared/desktop/logo.svg";

function Logo() {
  return (
    <Link>
      <img src={DesktopLogo} alt="Audiophile" />
    </Link>
  );
}

export default Logo;
