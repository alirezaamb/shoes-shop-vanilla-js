import { getWishlistProduct } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { ProductCard } from '../../Card-small/ProductCard';

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
      const productCards = ProductCard(product);
      Element.append(productCards);
    });
  });

  return Element;
}
