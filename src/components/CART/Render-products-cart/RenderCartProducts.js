import { getCartProduct } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { ProductCardCart } from '../Card-small-cart/ProductCard-cart';

export function RenderProductsCart() {
  const element = El({ element: 'div', className: '', id: 'renderCart' });

  getCartProduct().then((products) =>
    products.map((product) => {
      const productCard = ProductCardCart(product);
      element.append(productCard);
    })
  );

  return element;
}