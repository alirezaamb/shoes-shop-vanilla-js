import { getCartProduct } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { ProductCardCart } from '../Card-small-cart/ProductCard-cart';

export function RenderProductsCart() {
  const element = El({
    element: 'div',
    className: 'mb-32 flex flex-col gap-6 mx-3 my-3',
    id: 'renderCart',
  });

  getCartProduct().then((products) =>
    products.map((product) => {
      const productCard = ProductCardCart(product);
      element.append(productCard);
    })
  );

  return element;
}
