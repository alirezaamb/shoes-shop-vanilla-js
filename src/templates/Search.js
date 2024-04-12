import { notFoundPage } from '../components/SEARCH/NotFound/NotFound';
import { Recent } from '../components/SEARCH/Recents/Recents';
import { SearchBoxForSearchPage } from '../components/SEARCH/SearchBox-search/SearchBox';
import { El } from '../utils/create-element';
import { getLocal, setLocal } from '../utils/local-storage';

export function renderRecentSearchItems(input) {
  if ([...input].length > 0) {
    return input.map((item) => Recent(item));
  } else {
    return [];
  }
}

function clearAllHistory() {
  setLocal('recentSearch', []);
  const renderOfSearchHistory = document.getElementById(
    'renderOfSearchHistory'
  );
  renderOfSearchHistory.innerText = '';
}

function headerOfrecentSearch() {
  return El({
    //recent & clear all
    element: 'div',
    className: 'flex content-between justify-between mx-1 mt-3 mb-2',
    children: [
      El({
        element: 'span',
        innerText: 'Recent',
        className: 'font-semibold',
      }),
      El({
        element: 'span',
        innerText: 'Clear All',
        className: 'font-semibold',
        eventListener: [
          {
            event: 'click',
            callback: clearAllHistory,
          },
        ],
      }),
    ],
  });
}

export function Search() {
  const LocalRecentSearch = getLocal('recentSearch');
  const element = El({
    element: 'div',
    children: [
      SearchBoxForSearchPage(),
      El({
        element: 'div',
        children: [headerOfrecentSearch()],
        id: 'headerOfRecentSearch',
      }),
      El({ element: 'div', id: 'headerOfResult' }),
      El({
        element: 'div',
        id: 'renderOfSearchHistory',
        children: [...renderRecentSearchItems(LocalRecentSearch)],
      }),
      notFoundPage(),
      El({
        element: 'div',
        className: 'grid grid-cols-2 mb-10 mt-5',
        id: 'searchCards',
      }),
    ],
  });
  return element;
}
