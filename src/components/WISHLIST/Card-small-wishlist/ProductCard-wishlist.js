import { El } from '../../../utils/create-element';
import { Link } from '../../Link/Link';

export function productCardWishlist(product) {
  const element = Link({
    href: `/products/${product.id}`,
    children: [
      El({
        element: 'div',
        className: 'truncate cursor-pointer hover:bg-gray-300 rounded p-1',
        id: product.id,
        children: [
          El({
            element: 'div',
            className: 'relative',
            children: [
              El({
                element: 'img',
                className: 'w-[182px] h-[182px] rounded-3xl',
                src: product.imageURL,
              }),
              El({
                element: 'div',
                className:
                  'bg-gray-900 p-1 absolute top-3 right-5 rounded-full flex item-center justify-center',
                children: [
                  El({
                    element: 'span',
                    className: 'icon-[clarity--heart-solid] text-white  ',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'h2',
            innerText: product.name,
            className:
              'font-semibold whitespace-nowrap overflow-hidden overflow-ellipsis',
          }),
          El({
            element: 'div',
            className: 'flex items-center gap-2 py-1',
            children: [
              El({
                element: 'span',
                className: 'icon-[clarity--half-star-solid]',
              }),
              El({
                element: 'span',
                className:
                  'text-xs border-r-2 border-solid border-gray-300 pr-1',
                innerText: '4.6',
              }),
              El({
                element: 'span',
                innerText: '6.641 sold',
                className: 'text-xs text-gray-600 p-1 bg-gray-200 rounded',
              }),
            ],
          }),
          El({
            element: 'span',
            className: 'font-semibold',
            innerText: `$${product.price}.00`,
          }),
        ],
      }),
    ],
  });

  return element;
}
