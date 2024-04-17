import { getOrderProduct } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { ProductCardOrders } from '../Card-orders/CardOrders';

export function RenderCompletedOrders() {
  const element = El({
    element: 'div',
    className: 'mb-32 flex flex-col gap-3 mx-3 my-3',
    id: 'renderOrder',
  });

  getOrderProduct().then((products) => {
    products.map((product) => {
      const CardOfProduct = ProductCardOrders(product);
      element.append(CardOfProduct);
    });
  });

  return element;
}
