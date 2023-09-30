import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  --brand : #d87d4a;
  --accent: #fbaf85;
  --dark: #101010;
  --darkGray: #4C4C4C;
  --paleLight: #f1f1f1;
  --light: #fafafa;
  --lighter: #f2f2f2;
  --white: #fff;
  --black: #000;


  --default: 0.5rem;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  transition: background-color 0.3s, border 0.3s;
}

body {
  font-family: 'Manrope', sans-serif;
  color: var(--dark);
  background-color: var(--light);
  min-height: 100vh;
  line-height: 25px;
}

a {
  text-decoration: none;
}

a:hover {
  color: var(--brand) !important;
}

a:hover span {
  color: var(--dark);
}



.linkStyle  {
  text-decoration: none;
  color: var(--light);
  text-transform: uppercase;
  font-weight: 700;
  display: inline-block;
  padding: 0.6rem;
};

footer .linkStyle {
  margin-left: -1rem;
  margin-right: 1rem;
}

@media screen and (max-width: 767px) {
  footer .linkStyle {
  margin: 0;
}
}


.linkStyle.active {
  color: var(--brand);
}

p {
  margin: 30px 0;
}

input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    border-color: var(--brand);
    cursor: pointer;
  } 
  
  input[type="radio"] + label {
  
    cursor: pointer;
  }


  input[type="radio"]:checked + label::after {
    position: absolute;
    content: "";
    width: 16px;
    height: 16px;
    border-radius: 16px;
    background-color: var(--brand);
    top: 50%;
    left: 0;
    transform: translate(135%, -8px);
  }

  @media screen and (max-width: 767px) {
  header ul {
      display: none !important;
    }

  }

  

footer p {
  color: var(--light);
}

.loader {
  width: 45px;
  aspect-ratio: 0.75;
  --c: no-repeat linear-gradient(var(--brand) 0 0);
  background:
    var(--c) 0% 50%,
    var(--c) 50% 50%,
    var(--c) 100% 50%;
  background-size: 20% 60%;
  animation: loading 1s infinite linear;
}

@keyframes loading {
  20% {
    background-position:
      0% 0%,
      50% 50%,
      100% 50%;
  }
  40% {
    background-position:
      0% 100%,
      50% 0%,
      100% 50%;
  }
  60% {
    background-position:
      0% 50%,
      50% 100%,
      100% 0%;
  }
  80% {
    background-position:
      0% 50%,
      50% 50%,
      100% 100%;
  }
}




`;

export default GlobalStyles;
