import { useEffect, useState } from "react";
import cartButton from '../../assets/cart-button.svg'
import { Loader } from "../../components/Loader";
import { api } from '../../services/api';
import { Container, Department, Product, ProductImage, ProductName, ProductPrice, ImageButton, TextButton, ButtonBuy } from "./styles";
import { formatPrice } from '../../util/format';
import { useCart } from '../../hooks/useCart';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

interface ProductFormatted extends Product {
  priceFormatted: string;
}

interface CartItemsAmount {
  [key: number]: number;
}

interface ApiResponse {
  products: Product[];
}

export const Home = () => {
  const [products, setProducts] = useState<ProductFormatted[]>([]);
  const [removeLoader, setRemoveLoader] = useState(false);
  const { addProduct, cart } = useCart();

  const cartItemsAmount = cart.reduce((sumAmount, product) => {
    const newSumAmount = {...sumAmount}
    newSumAmount[product.id] = product.amount

    return newSumAmount
  }, {} as CartItemsAmount)

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get<ApiResponse>('movies')
      const { products } = response.data
      const data = products.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price)
      }))

      setProducts(data)
      setRemoveLoader(true)
    }
    setTimeout(() => {
      loadProducts();
    }, 1000)
  }, []);

  
  function handleAddProduct(id: number) {
    addProduct(id)
  }

  return (
    <Container>
      <Department>
        {products && 
          products.map((product) => (
            <Product key={product.id}>
              <ProductImage src={product.image} alt={product.title}/>
              <ProductName>{product.title}</ProductName>
              <ProductPrice>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(product.price)}</ProductPrice>
              <ButtonBuy className={cartItemsAmount[product.id] > 0 ? 'product-added' : ''} onClick={() => handleAddProduct(product.id)}>
                <ImageButton src={cartButton} />
                <TextButton>{cartItemsAmount[product.id] || 0}</TextButton>
                Adicionar ao carrinho
              </ButtonBuy>
            </Product>
          ))
        }
      </Department>
      {!removeLoader && <Loader />}
    </Container>
  )
}