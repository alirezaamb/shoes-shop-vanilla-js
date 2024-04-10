import { El } from '../../utils/create-element';

export function quantity() {
  let counter = 0;

  function subtractButton() {
    const quantityCounter = document.getElementById('quantity-span');
    if (counter > 0) {
      counter--;
      quantityCounter.innerText = counter;
    }
  }

  function sumButton() {
    const quantityCounter = document.getElementById('quantity-span');
    if (counter < 3) {
      counter++;
      quantityCounter.innerText = counter;
    }
  }
  const element = El({
    element: 'div',
    className:
      'flex gap-8 mx-5 mt-3 border-b border-gray-300 pb-3 mx-5 bf-red-500',
    children: [
      El({
        element: 'span',
        innerText: 'Quantity',
        className: 'text-lg font-semibold',
      }),
      El({
        element: 'div',
        className: 'flex items-center gap-5 rounded-3xl bg-gray-300 ',
        children: [
          El({
            element: 'span',
            innerText: '-',
            onclick: subtractButton,
            className:
              'px-3 text-2xl cursor-pointer hover:bg-gray-600 hover:rounded-l-3xl',
            id: 'sub-button',
          }),
          El({
            element: 'span',
            innerText: 0,
            className: 'text-2xl',
            id: 'quantity-span',
          }),
          El({
            element: 'span',
            innerText: '+',
            onclick: sumButton,
            className:
              'px-3 text-2xl cursor-pointer hover:bg-gray-600 hover:rounded-r-3xl',
            id: 'sum-button',
          }),
        ],
      }),
    ],
  });

  return element;
}
