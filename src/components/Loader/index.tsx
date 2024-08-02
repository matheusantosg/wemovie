import loader from '../../assets/loader.svg'
import {Container, LoadSvg} from './styles'

export const Loader = () => {
  return (
    <Container>
      <LoadSvg src={loader} alt='Loading' />
    </Container>
  )
}