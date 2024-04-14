import { layoutCart } from '../layout/layout-cart';
import { Cart } from '../templates/Cart';
import { El } from '../utils/create-element';

export function cartPage() {
  return El({
    element: 'div',
    className: 'bg-gray-100',
    children: [layoutCart(Cart())],
  });
}
