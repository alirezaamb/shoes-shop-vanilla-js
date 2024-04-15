import { Modal } from '../components/CART/Modal/Modal';
import { OverlayModal } from '../components/CART/Overlay/OverlayModal';
import { RenderProductsCart } from '../components/CART/Render-products-cart/RenderCartProducts';
import { TotalPrice } from '../components/CART/Total-price/TotalPrice';
import { El } from '../utils/create-element';

export function Cart() {
  const element = El({
    element: 'div',
    className: '',
    children: [
      El({ element: 'div', children: [RenderProductsCart()], id: 'homeCart' }),
      OverlayModal(),
      TotalPrice(),
      El({ element: 'div', id: 'modalBody' }),
    ],
  });

  return element;
}
