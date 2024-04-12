import { El } from '../../../utils/create-element';
import { RenderProductsWishlist } from '../Render-product-wishlist/RenderWishlistProduct';

export function ButtonFilterWishlist({ text }) {
  const buttonWishlist = El({
    element: 'button',
    innerText: text,
    className:
      'border-[2px] rounded-full font-semibold hover:bg-gray-700 hover:text-white border-black inline-block px-6 text-4 m-auto py-[5px] whitespace-nowrap ',
  });

  buttonWishlist.addEventListener('click', (e) => {
    const filterWishlistProducts = e.target.innerText.toLowerCase();
    const renderWishlist = document.getElementById('renderWishlist');
    if (renderWishlist != null) {
      renderWishlist.remove();
    }

    const wishlistCards = RenderProductsWishlist(filterWishlistProducts);
    const homeWishlist = document.getElementById('homeWishlist');

    homeWishlist.append(wishlistCards);
  });

  return buttonWishlist;
}
