import { getProductById } from '../api/get/get';
import { El } from '../utils/create-element';
import { cardFullDetail } from './Card-full-detail';

export function Product(data) {
  const productId = data.id;
  // console.log()
  getProductById(productId).then((product) => {
    // console.log(product);
    element
      .querySelector('#product-details')
      .append(cardFullDetail({ product }));
  });
  const element = El({
    element: 'div',
    children: [El({ element: 'div', id: 'product-details' })],
  });

  return element;
}
