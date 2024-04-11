import { getWishlistProduct } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { productCardWishlist } from '../Card-small-wishlist/ProductCard-wishlist';

export function RenderProductsWishlist(filter) {
  if (!filter) {
    filter = 'all';
  }

  const Element = El({
    element: 'div',
    id: 'renderWishlist',
    className: 'grid grid-cols-2 mb-10 mt-5',
  });
  //   console.log(getWishlistProduct());
  getWishlistProduct(filter).then((products) => {
    products.map((product) => {
      const productCards = productCardWishlist(product);
      Element.append(productCards);
    });
  });

  return Element;
}
