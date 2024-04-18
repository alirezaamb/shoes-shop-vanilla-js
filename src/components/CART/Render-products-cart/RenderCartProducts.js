import { getCartProduct } from '../../../api/get/get';
import { El } from '../../../utils/create-element';
import { ProductCardCart } from '../Card-small-cart/ProductCard-cart';

export function RenderProductsCart() {
  const element = El({
    element: 'div',
    className: 'mb-32 flex flex-col gap-6 mx-3 my-3',
    id: 'renderCart',
  });
  // let arrayPrice = [];
  getCartProduct().then((products) => {
    products.map((product) => {
      const productCard = ProductCardCart(product);
      element.append(productCard);
    });
    const arrayPrice = products
      .map((item) => item.totalPrice)
      .reduce((a, b) => a + b, 0);
    // totalOfAllItems.innerText = arrayPrice;
    const totalOfAllItems = document.getElementById('totalOfAllItems');
    totalOfAllItems.innerText = +arrayPrice;
  });

  return element;
}
