import { getCartProduct } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { ProductCardOrders } from '../Card-orders/CardOrders';
import { notFoundPage } from '../NotFound/NotFound';

export function RenderActiveOrders() {
  const element = El({
    element: 'div',
    className: 'mb-32 flex flex-col gap-6 mx-3 my-3',
    id: 'renderOrder',
  });

  getCartProduct().then((products) => {
    console.log([...products].length);
    if ([...products].length > 0) {
      products.map((product) => {
        const CardOfProduct = ProductCardOrders(product);
        element.append(CardOfProduct);
      });
    } else {
      element.append(notFoundPage());
    }
  });

  return element;
}
