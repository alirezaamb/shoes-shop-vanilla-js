import { El } from '../../../utils/create-element';

export function notFoundPage() {
  return El({
    element: 'div',
    id: 'notfoundpageForOrders',
    className: 'flex flex-col justify-center items-center mt-12',
    children: [
      El({
        element: 'img',
        width: 200,
        src: 'src/assets/image/notfound.png',
      }),
      El({
        element: 'span',
        className: 'font-bold text-[25px]',
        innerText: "You don't have an order yet ",
      }),
      El({
        element: 'span',
        className: ' text-4 mx-[30px] text-center text-gray-600 mt-5',
        innerText: "You don't have an active orders at this time",
      }),
    ],
  });
}
