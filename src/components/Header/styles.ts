import styled from 'styled-components'

export const Container = styled.header`
  background-color: transparent;
`

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1080px;
  height: 88px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 16px;
`

export const Logo = styled.h1`
  font-size: 20px;
  line-height: 27.24px;
  color: var(--white);
  cursor: pointer;

  a {
    text-decoration: none;
    color: var(--white);
  }
`

export const Cart = styled.div`
  a {
    text-decoration: none;
    color: var(--white);
    display: flex;
    align-items: center;
    height: 40px;
    cursor: pointer;
  }
`

export const TextCart = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: var(--white);
  text-align: right;

  @media (max-width: 1024px) {
    font-size: 0;
  }
`

export const NumberItens = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: var(--title);
`

export const Icon = styled.img`
  margin-left: 16px;
  height: 100%;
  object-fit: contain;
`