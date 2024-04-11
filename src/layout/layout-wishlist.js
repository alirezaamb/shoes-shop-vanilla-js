import { El } from '../utils/create-element';
import { headerWishlist } from './header/header-wishlist';

export function LayoutWishlist(main) {
  return El({
    Element: 'div',
    children: [
      headerWishlist(),
      El({ element: 'main', className: 'container mx-auto', children: [main] }),
    ],
  });
}
