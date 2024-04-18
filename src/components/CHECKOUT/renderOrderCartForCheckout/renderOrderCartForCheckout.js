import { getCartProduct } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { oneCardInCheckout } from '../oneCardInCheckout/oneCardInCheckout';

export function renderOrderCartForCheckout() {
  const Element = El({
    element: 'div',
    className:
      'flex flex-wrap gap-[6px] m-[24px] mb-[80px] items-center justify-center pb-[100px] m-auto',
    id: 'render',
  });

  getCartProduct().then((carts) => {
    carts.map((product) => {
      const productCard = oneCardInCheckout({ product });
      Element.append(productCard);
    });
  });

  return Element;
}
