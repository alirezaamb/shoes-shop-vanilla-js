import { RenderProductsWishlist } from '../components/WISHLIST/Render-product-wishlist/RenderWishlistProduct';
import { SwiperBrandsWishlist } from '../components/WISHLIST/Swiper-wishlist/FilterBrands-wishlist';
import { El } from '../utils/create-element';

export function Wishlist() {
  const Element = El({
    element: 'div',
    className: 'mx-3 flex flex-col gap-3',
    children: [
      SwiperBrandsWishlist(),
      El({
        element: 'div',
        id: 'homeWishlist',
        children: [RenderProductsWishlist('all')],
      }),
    ],
  });
  return Element;
}
