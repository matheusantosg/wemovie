import { Link } from 'react-router-dom';
import { useCart } from '../../hooks/useCart';
import { useWindowSize } from '../../hooks/useMedia';
import { formatPrice } from '../../util/format';
import {
  Container,
  Content,
  Title,
  Image,
  ProductTable,
  ProductList,
  Total,
  IconTrash,
  IconQuantity,
} from './styles';
import empty from '../../assets/empty.svg';
import trash from '../../assets/trash.svg';
import plus from '../../assets/plus.svg';
import minus from '../../assets/minus.svg';

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  amount: number;
}

export const Cart = () => {
  const { cart, removeProduct, updateProductAmount } = useCart();
  const { width } = useWindowSize();
  const isMobile = Number(width) < 600;

  const cartFormatted = cart.map((product) => ({
    ...product,
    priceFormatted: formatPrice(product.price),
    subTotal: formatPrice(product.price * product.amount),
  }));
  const total = formatPrice(
    cart.reduce((sumTotal, product) => {
      return sumTotal + product.price * product.amount;
    }, 0)
  );

  function handleProductIncrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount + 1 });
  }

  function handleProductDecrement(product: Product) {
    updateProductAmount({ productId: product.id, amount: product.amount - 1 });
  }

  function handleRemoveProduct(productId: number) {
    removeProduct(productId);
  }

  function handlePurchaseProducts() {
    localStorage.removeItem('@WeMovies:cart');
    window.location.href = '/purchase';
  }
  // if (typeof window !== 'undefined')
    return (
      <Container>
        {cart.length > 0 ? (
          <>
            {!isMobile ? (
              <ProductTable>
                <thead>
                  <tr>
                    <th>PRODUTO</th>
                    <th aria-label='product image' />
                    <th>QTD</th>
                    <th>SUBTOTAL</th>
                    <th aria-label='delete icon' />
                  </tr>
                </thead>
                <tbody>
                  {cartFormatted.map((product) => (
                    <tr key={product.id} data-productid='product'>
                      <td>
                        <img src={product.image} alt={product.title} />
                      </td>
                      <td>
                        <strong>{product.title}</strong>
                        <span>{product.priceFormatted}</span>
                      </td>
                      <td>
                        <div>
                          <button
                            type='button'
                            data-productid='decrement-product'
                            disabled={product.amount <= 1}
                            onClick={() => handleProductDecrement(product)}
                          >
                            <IconQuantity src={minus} alt='Remover' />
                          </button>
                          <input
                            type='text'
                            data-productid='product-amount'
                            readOnly
                            value={product.amount}
                          />
                          <button
                            type='button'
                            data-productid='increment-product'
                            onClick={() => handleProductIncrement(product)}
                          >
                            <IconQuantity src={plus} alt='Adicionar' />
                          </button>
                        </div>
                      </td>
                      <td>
                        <strong>{product.subTotal}</strong>
                      </td>
                      <td>
                        <button
                          type='button'
                          data-productid='remove-product'
                          onClick={() => handleRemoveProduct(product.id)}
                        >
                          <IconTrash src={trash} alt='Remover produto' />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </ProductTable>
            ) : (
              <ProductList>
                {cartFormatted.map((product) => (
                  <li key={product.id} data-productid='product'>
                    <div className='product-image'>
                      <img src={product.image} alt={product.title} />
                    </div>
                    <div className='product-name-and-quantity'>
                      <h3>{product.title}</h3>
                      <div>
                        <button
                          type='button'
                          data-productid='decrement-product'
                          disabled={product.amount <= 1}
                          onClick={() => handleProductDecrement(product)}
                        >
                          <IconQuantity src={minus} alt='Remover' />
                        </button>
                        <input
                          type='text'
                          data-productid='product-amount'
                          readOnly
                          value={product.amount}
                        />
                        <button
                          type='button'
                          data-productid='increment-product'
                          onClick={() => handleProductIncrement(product)}
                        >
                          <IconQuantity src={plus} alt='Adicionar' />
                        </button>
                      </div>
                    </div>
                    <div className='product-prices'>
                      <div className='price-primary-trash'>
                        <span>{product.priceFormatted}</span>
                        <button
                          type='button'
                          data-productid='remove-product'
                          onClick={() => handleRemoveProduct(product.id)}>
                          <IconTrash src={trash} alt='Remover produto' />
                        </button>
                      </div>
                      <div className='product-subtotal'>
                        <span>SUBTOTAL</span>
                        <span>{product.priceFormatted}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ProductList>
            )}
            <footer>
              <Link to={'/purchase'}>
                <button onClick={handlePurchaseProducts} type='button'>Finalizar pedido</button>
              </Link>

              <Total>
                <span>TOTAL</span>
                <strong>{total}</strong>
              </Total>
            </footer>
          </>
        ) : (
          <>
            <Title>Parece que não há nada por aqui :( </Title>
            <Content>
              <Image src={empty} alt='carrinho vazio' />
              <Link to='/carrinho'>Recarregar página</Link>
            </Content>
          </>
        )}
      </Container>
    );
};
