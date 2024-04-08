import { El } from '../../utils/create-element';

export function BrandBox({ name, logo }) {
  return El({
    element: 'div',
    className: 'flex flex-col items-center mt-3',
    children: [
      El({
        element: 'div',
        className:
          'bg-gray-300 rounded-full inline py-3 px-4 hover:bg-gray-400 cursor-pointer',
        children: [El({ element: 'span', className: `${logo}` })],
      }),
      El({
        element: 'p',
        innerText: `${name}`,
        className: 'font-semibold text-sm cursor-pointer',
      }),
    ],
  });
}
