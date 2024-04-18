import { LayoutSearch } from '../layout/layout-search';
import { Search } from '../templates/Search';
import { El } from '../utils/create-element';

export function SearchPage() {
  document.title = 'search page';

  const element = El({
    element: 'div',
    className: 'mx-3 mt-3',
    children: [LayoutSearch(Search())],
  });
  return element;
}
