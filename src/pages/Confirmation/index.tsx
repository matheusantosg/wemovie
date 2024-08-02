import { Container, Content, Title, Image } from "./styles";
import purchase from '../../assets/purchase.svg'
import { Link } from "react-router-dom";

export const Confirmation = () => {
  return (
    <Container>
      <Title>Compra realizada com sucesso! </Title>
      <Content>
        <Image src={purchase} alt='Compra finalizada!' />
        <Link to='/'>Voltar</Link>
      </Content>
    </Container>
  )
}