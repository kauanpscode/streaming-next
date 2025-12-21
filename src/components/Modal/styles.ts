import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalBody = styled.div`
  background: #1a1a1a;
  border-radius: 8px;
  max-width: 70vh;
  width: 90%;
  position: relative;
  color: white;
  max-height: 90vh;
  overflow-y: auto;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: #1a1a1a;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 100%;
`;

