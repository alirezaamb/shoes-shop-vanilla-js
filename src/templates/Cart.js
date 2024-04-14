import { RenderProductsCart } from '../components/CART/Render-products-cart/RenderCartProducts';
import { El } from '../utils/create-element';

export function Cart() {
  const element = El({
    element: 'div',
    className: '',
    children: [RenderProductsCart()],
  });

  return element;
}
