import { El } from '../../../utils/create-element';
import { getLocal } from '../../../utils/local-storage';

export function amountAndPayment() {
  function addToPayment() {
    window.location.href = '/paymentmethods';
  }

  const element = El({
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
            element: 'div',
            children: [
              El({
                element: 'span',
                className: 'text-gray-700',
                innerText: '$',
              }),
              El({
                element: 'span',
                className: 'text-gray-700',
                innerText: '0',
                id: 'amountOfPaying',
              }),
            ],
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
            element: 'div',
            children: [
              El({
                element: 'span',
                className: 'text-gray-700',
                innerText: '$',
              }),
              El({
                element: 'span',
                className: 'text-gray-700',
                innerText: '-',
                id: 'amountOfShipping',
              }),
            ],
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
            element: 'div',
            children: [
              El({
                element: 'span',
                className: 'text-gray-700',
                innerText: '$',
              }),
              El({
                element: 'span',
                className: 'text-gray-700',
                innerText: '-',
                id: 'finalPriceOfEverything',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'button',
        className:
          'bg-black text-white w-[90%] rounded-[60px] relative text-[14px] m-auto h-[60px] mb-5',
        innerText: 'Continue to Payment',
        id: 'btnAddToCard',
        onclick: addToPayment,
        children: [
          El({
            element: 'img',
            className: ' text-white absolute w-4 h-4 right-14 top-[23px] ',
            src: 'src/assets/image/right.png',
          }),
        ],
      }),
    ],
  });

  setTimeout(() => {
    const amountOfPaying = document.getElementById('amountOfPaying');
    const getPriceFromLocalStorage = getLocal('totalPriceOfCart');
    amountOfPaying.innerText = getPriceFromLocalStorage;
    const amountOfShipping = document.getElementById('amountOfShipping');
    const getPriceOFShippingFromLocalStorage = getLocal('shippingType');
    amountOfShipping.innerText = getPriceOFShippingFromLocalStorage.price;
    const finalPriceOfEverything = document.getElementById(
      'finalPriceOfEverything'
    );
    const sum =
      parseInt(getPriceFromLocalStorage) +
      parseInt(getPriceOFShippingFromLocalStorage.price);
    finalPriceOfEverything.innerText = sum;
  }, 0);

  return element;
}
