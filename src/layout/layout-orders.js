import { El } from '../utils/create-element';
import { footerOrders } from './footer/footer-orders';
import { headerOrders } from './header/header-orders';

export function LayoutOrders(main) {
  return El({
    Element: 'div',
    children: [
      headerOrders(),
      El({ element: 'main', className: 'container mx-auto', children: [main] }),
      footerOrders(),
    ],
  });
}
