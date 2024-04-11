import { El } from '../../../utils/create-element';
import { ButtonFilterWishlist } from '../ButtonFilter-wishlist/ButtonFilter-wishlist';

export function SwiperBrandsWishlist() {
  const element = El({
    element: 'div',
    className: 'flex gap-3 overflow-x-scroll mt-4 hiddenScrollbar',
    children: [
      ButtonFilterWishlist({
        text: 'All',
      }),
      ButtonFilterWishlist({
        text: 'Nike',
      }),
      ButtonFilterWishlist({
        text: 'Adidas',
      }),
      ButtonFilterWishlist({
        text: 'Puma',
      }),
      ButtonFilterWishlist({
        text: 'Asics',
      }),
      ButtonFilterWishlist({
        text: 'Reebok',
      }),
      ButtonFilterWishlist({
        text: 'New Balance',
      }),
      ButtonFilterWishlist({
        text: 'Converse',
      }),
    ],
  });

  return element;
}
