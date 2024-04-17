import { getCartProduct } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { ProductCardOrders } from '../Card-orders/CardOrders';

export function RenderActiveOrders() {
  const element = El({
    element: 'div',
    className: 'mb-32 flex flex-col gap-6 mx-3 my-3',
    id: 'renderOrder',
  });

  getCartProduct().then((products) => {
    products.map((product) => {
      const CardOfProduct = ProductCardOrders(product);
      element.append(CardOfProduct);
    });
  });

  return element;
}
