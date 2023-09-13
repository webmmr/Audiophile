/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import styled, { css } from "styled-components";
import useOutsideClick from "../hooks/useOutsideClick";

const StyledModal = styled.div`
  /* position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
  background-color: var(--white);
  border-radius: var(--default);
  transition: all 0.5s;

  ${(props) =>
    props.variation === "cart" &&
    css`
      padding: 2rem;
      position: fixed;
      top: 12%;
      right: 8%;
      transform: translate(-12%, 8%);
    `}
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);

  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.5s;
`;

const ModalContext = createContext();

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");

  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: openWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openWindowName) });
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openName) return null;

  if (name === openName)
    return createPortal(
      <Overlay>
        <StyledModal ref={ref} variation="cart">
          <div>{cloneElement(children, { onCloseModal: close })}</div>
        </StyledModal>
      </Overlay>,
      document.body
    );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
