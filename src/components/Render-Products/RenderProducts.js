import { getProducts } from '../../api/get/get';
import { El } from '../../utils/create-element';
import { ProductCard } from '../Card-small/ProductCard';

export function RenderProducts(filter) {
  // console.log('first');
  if (!filter) {
    filter = 'all';
  }

  const Element = El({
    element: 'div',
    id: 'render',
    className: 'grid grid-cols-2 mb-10 mt-5',
  });
  // console.log(filter);
  getProducts(filter).then((products) => {
    // console.log(products);
    products.map((product) => {
      const productCards = ProductCard(product);
      Element.append(productCards);
    });
  });
  console.log(Element);
  return Element;
}
