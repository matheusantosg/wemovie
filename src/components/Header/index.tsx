import { useState } from 'react'
import { Link } from 'react-router-dom'
import Bag from '../../assets/Cart.svg'
import { Container, Content, Logo, Cart, TextCart, NumberItens, Icon } from './styles'
import { useCart } from '../../hooks/useCart'

export const Header = () => {
  const { cart } = useCart();
  const cartSize = cart.length;
  
  return (
    <Container>
      <Content>
        <Logo><Link to="/">WeMovies</Link></Logo>
          <Cart>
            <Link to='carrinho'>
              <TextCart>Meu Carrinho <br /> <NumberItens>{cartSize === 1 ? `${cartSize} item` : `${cartSize} itens`}</NumberItens></TextCart>
              <Icon src={Bag} />
            </Link>
          </Cart>
      </Content>
    </Container>
  )
}