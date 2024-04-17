import { El } from '../../../utils/create-element';

export function ProductCardOrders(product) {
  const element = El({
    element: 'div',
    className:
      'truncate cursor-pointer rounded-3xl flex bg-white shadow-sm items-center',
    children: [
      El({
        element: 'div',
        className: 'flex',
        children: [
          El({
            element: 'img',
            src: product.imageURL,
            className: 'w-32 h-32 m-5 rounded-3xl',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex flex-col m-5 gap-3',
        children: [
          El({
            element: 'div',
            className: 'flex content-between items-center',
            children: [
              El({
                element: 'h2',
                className: 'font-semibold  truncate w-[200px]',
                innerText: product.name,
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex gap-3 items-center content-center',
            children: [
              El({
                element: 'div',
                className: 'flex gap-1 items-center ',
                children: [
                  El({
                    element: 'span',
                    className: 'w-4 h-4 rounded-full',
                    style: `background-color:${product.colors}`,
                  }),
                  El({
                    element: 'span',
                    innerText: product.colors,
                    className:
                      'border-solid border-gray-300 border-r  text-gray-500 text-xs pr-3',
                  }),
                ],
              }),

              El({
                element: 'span',
                innerText: `size=${product.sizes}`,
                className:
                  'text-gray-500 text-xs border-solid border-gray-300 border-r pr-3',
              }),
              El({
                element: 'span',
                innerText: `Qty=${product.quantity}`,
                className: 'text-gray-500 text-xs ',
              }),
            ],
          }),
          El({
            element: 'span',
            innerText: 'In Delivery',
            className: 'bg-gray-200 rounded px-2 py-1 w-fit',
          }),
          El({
            element: 'div',
            className:
              'flex items-center justify-between content-center  gap-1',
            children: [
              El({
                element: 'span',
                className: 'text-gray-900 font-bold text-xl',
                innerText: `$${product.totalPrice.toFixed(2)}`,
              }),
              El({
                element: 'span',
                className: 'bg-black text-white rounded-3xl px-3 py-1 ',
                innerText: 'Leave Review',
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return element;
}
