import { El } from '../../utils/create-element';

export function headerOrders() {
  const element = El({
    element: 'div',
    className: 'flex justify-between pt-4 mx-3 items-center bg-gray-100',
    children: [
      El({
        element: 'div',
        className: 'flex gap-4 items-center justify-center',
        children: [
          El({
            element: 'img',
            src: './src/assets/image/logo.svg',
            className: 'w-[15px] cursor-pointer',
            onclick: () => (window.location.href = 'home'),
          }),
          El({
            element: 'span',
            className: 'font-bold text-lg',
            innerText: 'My Cart',
          }),
        ],
      }),
      El({
        element: 'div',
        className: '',
        children: [
          El({
            element: 'span',
            className: 'icon-[carbon--search] text-2xl ',
            eventListener: [
              {
                event: 'click',
                callback: () => (window.location.href = '/search'),
              },
            ],
          }),
        ],
      }),
    ],
  });

  return element;
}