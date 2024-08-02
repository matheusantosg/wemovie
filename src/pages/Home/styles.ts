import styled from "styled-components";

export const Container = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1024px) {
    max-width: 95%
  }
`

export const Department = styled.ul`
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const Product = styled.li`
  background-color: var(--white);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 338px;
  height: 324px;
  margin: 24px auto;

  border-radius: 4px;
  padding: 16px;
`

export const ProductImage = styled.img`
  max-width: 147px;
`

export const ProductName = styled.h3`
  font-size: 12px;
  font-weight: 700;
  color: var(--black);
`

export const ProductPrice = styled.p`
  font-weight: 700;
  color: var(--black);
`

export const ImageButton = styled.img`
  margin-right: 3px;
`

export const TextButton = styled.p`
  margin-right: 12px;
`

export const ButtonBuy = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: var(--blue);
  border-radius: 4px;
  border: none;

  padding: 8px;
  
  height: 40px;
  width: 100%;

  color: var(--white);
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;

  &.product-added {
    background-color: var(--green);
  }
`