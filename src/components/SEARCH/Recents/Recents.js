import { renderRecentSearchItems } from '../../../templates/Search';
import { El } from '../../../utils/create-element';
import { getLocal, setLocal } from '../../../utils/local-storage';

// export function renderLocalStorage(recentSearchArray) {
//   console.log(recentSearchArray);
//   return recentSearchArray.map((item) => Recent(item));
// }

function deleteOneOfTheRecentSearch(e) {
  const parentElement = e.target.previousElementSibling.innerText;
  const getLocalFunction = getLocal('recentSearch');
  const restOfTheHistory = getLocalFunction.filter(
    (item) => item !== parentElement
  );
  setLocal('recentSearch', restOfTheHistory);

  const renderOfSearchHistory = document.getElementById(
    'renderOfSearchHistory'
  );

  renderOfSearchHistory.innerText = '';

  renderOfSearchHistory.append(...renderRecentSearchItems(restOfTheHistory));
}

export function Recent(name) {
  const element = El({
    element: 'div',
    className: '',
    children: [
      //   El({
      //     //recent & clear all
      //     element: 'div',
      //     className: 'flex content-between justify-between mx-1 mt-3 mb-2',
      //     children: [
      //       El({
      //         element: 'span',
      //         innerText: 'Recent',
      //         className: 'font-semibold',
      //       }),
      //       El({
      //         element: 'span',
      //         innerText: 'Clear All',
      //         className: 'font-semibold',
      //       }),
      //     ],
      //   }),
      El({
        element: 'div',
        className: 'border-t border-solid border-gray-200',
        children: [
          El({
            element: 'div',
            className: 'flex content-center justify-between mt-2',
            children: [
              El({
                element: 'span',
                innerText: name,
                className: 'text-gray-600 parent',
              }),
              El({
                element: 'span',
                innerText: 'x',
                eventListener: [
                  {
                    event: 'click',
                    callback: deleteOneOfTheRecentSearch,
                  },
                ],
                className:
                  'icon-[solar--close-square-line-duotone] text-xl text-gray-600',
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return element;
}
