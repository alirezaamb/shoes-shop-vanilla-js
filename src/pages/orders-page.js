import { LayoutOrders } from '../layout/layout-orders';
import { orders } from '../templates/Orders';
import { El } from '../utils/create-element';

export function OrderPage() {
  document.title = 'order page';

  const element = El({
    element: 'div',
    className: 'mx-3 mt-3 ',
    children: [LayoutOrders(orders())],
  });
  return element;
}
