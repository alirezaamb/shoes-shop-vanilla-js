import { getProducts } from '../../api/get/get';
import { El } from '../../utils/create-element';
import { ProductCard } from '../Card-small/ProductCard';

export function RenderProducts(filter) {
  // console.log('first');
  if (!filter) {
    filter = 'all';
  }
  let Element = El({
    element: 'div',
    className: 'grid grid-cols-2 mb-10 mt-5',
  });
  // console.log(filter);
  getProducts(filter).then((products) => {
    products.map((product) => {
      // console.log(product)
      const productCards = ProductCard(product);
      Element.append(productCards);
    });
  });

  return Element;
}
