import { El } from '../../../utils/create-element';

export function oneCardInCheckout({ product }) {
  const { name, price, imageURL, id, colors, sizes, quantity, value } = product;
  let color = '';
  switch (colors) {
    case 'bg-red-500':
      color = 'red';
      break;
    case 'bg-blue-500':
      color = 'blue';
      break;
    case 'bg-[#1a1a1a]':
      color = 'black';
      break;
    case 'bg-yellow-700':
      color = 'brown';
      break;
    case 'bg-white-500':
      color = 'white';
      break;
  }

  const Element = El({
    element: 'div',
    value: value,
    className: ' h-[130px] mt-[24px] flex gap-3 w-full cart',
    id: 'parentcartt',
    children: [
      El({
        element: 'img',
        className: 'rounded-2xl w-[130px]',
        src: imageURL,
      }),

      El({
        element: 'div',
        className: 'flex flex-col justify-between relative ',
        children: [
          El({
            element: 'p',
            id: id,
            className:
              'font-bold text-[20px] whitespace-nowrap overflow-hidden overflow-ellipsis w-[200px] ',
            innerText: name,
          }),
          El({
            element: 'div',
            className: 'flex gap-4 ',
            children: [
              El({
                element: 'div',
                className: `w-7 ${colors} rounded-full`,
                innerText: '',
              }),

              El({
                element: 'div',
                className: 'text-[20px] text-gray-500',
                innerText: color,
              }),
              El({
                element: 'div',
                className: 'text-[20px] text-gray-500',
                innerText: '|',
              }),
              El({
                element: 'div',
                className: 'text-[20px] text-gray-500',
                innerText: 'size=',
              }),
              El({
                element: 'div',
                className: 'text-[20px] text-gray-500',
                innerText: sizes,
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex justify-between items-center',
            children: [
              El({
                element: 'p',
                className: 'font-semibold text-[25px]',
                innerText: `$ ${price}`,
              }),
              El({
                element: 'div',
                className: 'bg-gray-200 ml-[60px] flex gap-4 px-4 rounded-2xl',
                children: [
                  El({
                    element: 'span',
                    className: 'font-bold countCart',
                    id: 'span-countCart',
                    innerText: quantity,
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return Element;
}
