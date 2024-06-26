import { debounce } from 'lodash';
import { El } from '../../../utils/create-element';
import { getLocal, setLocal } from '../../../utils/local-storage';
import { getProductBySearch } from '../../../api/get/get';
import { productCardWishlist } from '../../WISHLIST/Card-small-wishlist/ProductCard-wishlist';
import { HeaderOfApi } from '../Header-api/HeaderOfSearch';

export function SearchBoxForSearchPage() {
  function InputValue() {
    const inputValue = document.getElementById('searchInputPage').value;

    if (inputValue.trim() != '') {
      setLocal('recentSearch', [inputValue, ...getLocal('recentSearch')]);
    }
    renderBySearch();
  }

  function renderBySearch() {
    const inputValue = document.getElementById('searchInputPage').value;
    const headerOfResult = document.getElementById('headerOfResult');
    const cardsBody = document.getElementById('searchCards');
    cardsBody.innerText = '';
    headerOfResult.innerHTML = '';
    getProductBySearch(inputValue).then((products) => {
      if (products && Array.isArray(products)) {
        const countOfProducts = products.length;
        if (countOfProducts == 0) {
          const notfoundpage = document.getElementById('notfoundpage');
          notfoundpage.classList.remove('hidden');
        } else {
          notfoundpage.classList.add('hidden');
        }

        headerOfResult.append(
          HeaderOfApi({ input: inputValue, numberOfitemFound: countOfProducts })
        );

        products.map((product) => {
          const searchCard = productCardWishlist(product);
          cardsBody.append(searchCard);
        });
      }

      const headerOfRecentSearch = document.getElementById(
        'headerOfRecentSearch'
      );
      const renderOfSearchHistory = document.getElementById(
        'renderOfSearchHistory'
      );
      if (inputValue != '') {
        headerOfRecentSearch.classList.add('hidden');
        renderOfSearchHistory.classList.add('hidden');
        headerOfResult.classList.remove('hidden');
        cardsBody.classList.remove('hidden');
      } else {
        headerOfRecentSearch.classList.remove('hidden');
        renderOfSearchHistory.classList.remove('hidden');

        headerOfResult.classList.add('hidden');
        cardsBody.classList.add('hidden');
      }
    });
  }

  const element = El({
    element: 'div',
    className: 'relative w-full',
    children: [
      El({
        element: 'span',
        className:
          'icon-[carbon--search] absolute bottom-4 left-2 bg-gray-500 ',
      }),
      El({
        element: 'input',
        type: 'search',
        id: 'searchInputPage',
        eventListener: [
          {
            event: 'keyup',
            callback: debounce(InputValue, 1000),
          },
        ],

        className:
          'outline-black bg-gray-100 py-3 px-7 rounded-xl block w-full',
        placeholder: 'Search',
      }),
      El({
        element: 'span',
        className:
          'icon-[mage--filter-fill] absolute bottom-4 right-2 bg-black',
      }),
    ],
  });

  return element;
}
