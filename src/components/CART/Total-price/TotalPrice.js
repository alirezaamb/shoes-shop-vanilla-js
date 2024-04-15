import { El } from '../../../utils/create-element';

export function TotalPrice() {
  const element = El({
    element: 'div',
    className:
      'flex fixed bottom-12 z-10 bg-white w-full items-center justify-around rounded-t-3xl py-5 gap-16',
    children: [
      El({
        element: 'div',
        className: 'flex flex-col',
        children: [
          El({
            element: 'span',
            className: 'text-xs text-gray-400',
            innerText: 'Total price',
          }),
          El({
            element: 'span',
            className: 'font-bold text-lg',
            innerText: '$580.00',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex relative',
        children: [
          El({
            element: 'button',
            className:
              'bg-black text-white rounded-3xl px-20 py-3 hover:bg-gray-700',
            innerText: 'checkout',
          }),
          El({
            element: 'span',
            className:
              'icon-[heroicons-solid--arrow-narrow-right] text-white absolute right-12 top-[18px]',
          }),
        ],
      }),
    ],
  });

  return element;
}
