import { LayoutWishlist } from '../layout/layout-wishlist';
import { Wishlist } from '../templates/wishlist';
import { El } from '../utils/create-element';

export function wishlistPage() {
  const Element = El({
    element: 'div',
    className: '',
    children: [LayoutWishlist(Wishlist())],
  });
  return Element;
}
