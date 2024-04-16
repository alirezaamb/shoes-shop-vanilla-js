import { El } from '../../../utils/create-element';

export function oneCardInCheckout({ product }) {
  const { name, price, imageURL, id, colors, sizes, quantity, value } = product;

  const Element = El({
    element: 'div',
    value: value,
    className:
      ' h-[130px] mt-6 mr-10 flex gap-1 w-full cart flex justify-between',
    id: 'parentcartt',
    children: [
      El({
        element: 'img',
        className: 'rounded-2xl w-[130px]',
        src: imageURL,
      }),
      El({
        element: 'div',
        className: 'flex flex-col justify-start',
        children: [
          El({
            element: 'p',
            id: id,
            className: 'font-bold text-xl line-clamp-1 w-48 ',
            innerText: name,
          }),
          El({
            element: 'div',
            className: 'flex gap-4 items-center justify-center ',
            children: [
              El({
                element: 'div',
                className: `w-5 h-5 rounded-full`,
                style: `background-color:${colors}`,
              }),

              El({
                element: 'div',
                className: 'text-xl text-gray-500',
                innerText: colors,
              }),
              El({
                element: 'div',
                className: 'text-xl text-gray-500',
                innerText: '|',
              }),
              El({
                element: 'div',
                className: 'text-xl text-gray-500',
                innerText: `size= ${sizes}`,
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
