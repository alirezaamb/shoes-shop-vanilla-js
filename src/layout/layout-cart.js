import { El } from '../utils/create-element';
import { headerCart } from './header/header-Cart';

export function layoutCart(main) {
  const element = El({
    element: 'div',
    className: '',
    children: [
      headerCart(),
      El({ element: 'main', className: 'container mx-auto', children: [main] }),
    ],
  });

  return element;
}
