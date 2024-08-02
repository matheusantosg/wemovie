import styled from "styled-components";

export const Container = styled.div`
  max-width: 1080px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin: 0 auto;
  padding: 64px 24px;
  
  background-color: var(--white);
  border-radius: 4px;

  @media (max-width: 1024px) {
    max-width: 95%
  }

  @media (max-width: 600px) {
    padding: 16px;
  }
  
  footer {
    width: 100%;
    margin-top: 24px;
    padding-top: 24px;
    display: flex;
    justify-content: space-between;
    border-top: 1px solid var(--title);
    align-items: center;

    a  {
      text-decoration: none;
    }

    button {
      width: 174px;
      height: 34px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      background: var(--blue);
      color:  var(--white);
      border: 0;
      border-radius: 4px;
      font-weight: 700;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: var(--blue);
      }
    }

    
    @media (max-width: 600px) {
      flex-direction: column;

      a {
        order: 2;
        display: flex;
        width: 100%;
      }

      button {
        width: 100%;
      }

      > div {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 16px;
      }
    }
  }
`

export const Content = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  a {
    width: 173px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: var(--blue);
    border-radius: 4px;

    font-size: 12px;
    font-weight: 700;
    color: var(--white);
    text-decoration: none;
  }
`

export const Title = styled.h2`
  color: var(--bg-navy);
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 24px;
`

export const Image = styled.img`
  max-width: 447px;
  margin-bottom: 24px;
`

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: var(--title);
    text-align: left;
    padding: 12px;
  }

  tbody td {

    &:first-of-type {
      width: 100px;
    }

    &:last-of-type {
     text-align: right;
    }

    padding: 12px;
  }

  img {
    /* width: 100px; */
    height: 100px;
  }

  strong {
    color: var(--bg-navy);
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #D9D9D9;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 62px;
      text-align: center;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;
  }
`;

export const IconTrash = styled.img`
  max-width: 24px;
  height: 24px;
`

export const IconQuantity = styled.img`
  max-width: 18px;
`

export const Total = styled.div`
  display: flex;
  align-items: center;

  span {
    color: var(--title);
    font-size: 14px;
    font-weight: 700;
  }

  strong {
    font-size: 24px;
    margin-left: 30px;
  }
`;

export const ProductList = styled.ul`
  width: 100%;
  list-style: none;
  padding: 0;

  li[data-productid="product"] {
    height: 82px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .product-image {
    min-width: 65px;
    width: 65px;
    margin-right: 16px;

    img {
      max-width: 100%;
    }
  }

  .product-name-and-quantity {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    margin-right: 16px;

    h3 {
      color: var(--bg-navy);
      font-weight: 700;
      font-size: 14px;
      margin-bottom: 16px;
    }

    div {
      display: flex;
      align-items: center;

      input {
        border: 1px solid #D9D9D9;
        border-radius: 4px;
        color: #666;
        padding: 6px;
        width: 59px;
        height: 26px;
        margin: 0 5px;
        text-align: center;
      }

      button {
        background: none;
        border: 0;
      }
    }
  }

  .product-prices {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .price-primary-trash {
      display: flex;

      span {
        display: block;
        font-size: 16px;
        font-weight: 700;
        margin-right: 5px;
      }
  
      button {
        background: none;
        border: 0;
      }
    }
  }

  .product-subtotal {
    display: flex;
    flex-direction: column;

    span:first-of-type {
      color: var(--title);
      font-weight: 700;
      font-size: 12px;
    }

    span:last-of-type {
      color: var(--black);
      font-weight: 700;
      font-size: 16px;
    }
  }
`
