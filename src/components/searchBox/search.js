import { El } from '../../utils/create-element';

export function SearchBox() {
  return El({
    element: 'div',
    className: 'relative w-full',
    children: [
      El({
        element: 'span',
        className:
          'icon-[carbon--search] absolute bottom-2 left-2 bg-gray-500 ',
      }),
      El({
        element: 'input',
        type: 'search',
        className: 'outline-black bg-gray-100 py-1 px-7 rounded block w-full',
        placeholder: 'Search',
      }),
    ],
  });
}
