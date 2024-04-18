import { El } from '../../../utils/create-element';
import { RenderProductsWishlist } from '../Render-product-wishlist/RenderWishlistProduct';

export function ButtonFilterWishlist({ text, className = '' }) {
  const buttonWishlist = El({
    element: 'button',
    innerText: text,
    className: `border-[2px] rounded-full font-semibold hover:bg-gray-700 hover:text-white border-black inline-block px-6 text-4 m-auto py-[5px] whitespace-nowrap filter-button ${className}`,
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

    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach((btn) => {
      btn.classList.remove('bg-[#343A40]', 'text-white');
      btn.classList.add('bg-white', 'text-black');
    });

    buttonWishlist.classList.remove('bg-white', 'text-black');
    buttonWishlist.classList.add('bg-[#343A40]', 'text-white');

    const handleClick = (clickedIndex) => {
      buttons.forEach((button, index) => {
        if (index === clickedIndex) {
          button.style.backgroundColor = '#343A40';
          button.style.color = 'white';
        } else {
          button.style.backgroundColor = 'white';
          button.style.color = '#343A40';
        }
      });
    };

    handleClick(0);

    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        handleClick(index);
      });
    });
  });

  buttonWishlist.classList.add('filter-button');
  return buttonWishlist;
}
