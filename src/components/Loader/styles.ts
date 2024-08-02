import styled, { keyframes } from "styled-components";

export const Rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`

export const Container = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 40px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const LoadSvg = styled.img`
  width: 83px;
  animation: ${Rotate} 2s linear infinite;
`