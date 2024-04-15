import { El } from '../../../utils/create-element';

export function amountAndPayment() {
  function addToPayment() {
    window.location.href = '/paymentmethods';
  }

  return El({
    element: 'div',
    className: 'mx-[24px] mt-[50px] text-[20px] flex flex-col justify-center ',
    children: [
      El({
        element: 'div',
        className: 'flex m-5 justify-between gap-10 items-center',
        children: [
          El({
            element: 'span',
            className: 'text-gray-600',
            innerText: 'Amount',
          }),
          El({
            element: 'span',
            className: 'text-gray-700',
            innerText: '$585.00',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex m-5 justify-between items-center',
        children: [
          El({
            element: 'span',
            className: 'text-gray-600',
            innerText: 'Shipping',
          }),
          El({
            element: 'span',
            className: 'text-gray-700',
            innerText: '-',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex mx-5 my-10 justify-between items-center',
        children: [
          El({
            element: 'span',
            className: 'text-gray-600',
            innerText: 'Total',
          }),
          El({
            element: 'span',
            className: 'text-gray-700',
            innerText: '-',
          }),
        ],
      }),
      El({
        element: 'button',
        className:
          'bg-black text-white w-[90%] rounded-[60px] relative text-[14px] m-auto h-[60px]',
        innerText: 'Checkout',
        id: 'btnAddToCard',
        onclick: addToPayment,
        children: [
          El({
            element: 'img',
            className:
              ' text-white absolute w-[17px] h-[17px] end-[100px] top-[23px] ',
            src: 'src/assets/image/right.png',
          }),
        ],
      }),
    ],
  });
}
