import { Modal } from '../components/CART/Modal/Modal';
import { OverlayModal } from '../components/CART/Overlay/OverlayModal';
import { RenderProductsCart } from '../components/CART/Render-products-cart/RenderCartProducts';
import { TotalPrice } from '../components/CART/Total-price/TotalPrice';
import { El } from '../utils/create-element';
import { setLocal } from '../utils/local-storage';

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

  const data = ['Home', '61480 Sunbrook Park PC 5679'];
  setLocal('shippingAddress', data);

  const dataShipping = {
    name: '',
    address: '',
    price: ' 0',
    hidden: 'hidden',
    show: 'show',
  };
  setLocal('shippingType', dataShipping);

  return element;
}
