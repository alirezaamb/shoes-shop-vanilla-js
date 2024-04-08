import { getProducts } from '../../api/get/get';
import { El } from '../../utils/create-element';
import { ProductCard } from '../Card-small/ProductCard';

// const products = await getProducts();
export function RenderProducts() {
  const Element = El({
    element: 'div',
    className: 'grid grid-cols-2 mb-10 mt-5 ',
  });
  getProducts().then((products) => {
    products.forEach((product) => {
      const productCard = ProductCard(product);
      Element.append(productCard);
    });
  });
  return Element;
}
