import { El } from '../../../utils/create-element';
import { TotalPrice } from '../../CART/Total-price/TotalPrice';

export function oneCardInCheckout({ product }) {
  const { name, imageURL, id, colors, sizes, quantity, value, totalPrice } =
    product;

  const Element = El({
    element: 'div',
    value: value,
    className:
      ' h-[130px] mt-6  flex gap-1 w-full cart flex justify-around items-center',
    id: 'parentcartt',
    children: [
      El({
        element: 'img',
        className: 'rounded-2xl w-[130px]',
        src: imageURL,
      }),
      El({
        element: 'div',
        className: 'flex flex-col justify-start items-between gap-4',
        children: [
          El({
            element: 'p',
            id: id,
            className: 'font-bold text-lg line-clamp-1 w-48 ',
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
                className: 'text-lg text-gray-500',
                innerText: colors,
              }),
              El({
                element: 'div',
                className: 'text-lg text-gray-500',
                innerText: '|',
              }),
              El({
                element: 'div',
                className: 'text-lg text-gray-500',
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
                className: 'font-semibold text-xl',
                innerText: `$ ${totalPrice}`,
              }),
              El({
                element: 'div',
                className:
                  'bg-gray-100 ml-[60px] flex gap-4 px-4 rounded-full text-lg',
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
