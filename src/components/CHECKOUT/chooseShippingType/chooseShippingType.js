import { El } from '../../../utils/create-element';

export function chooseShippingType() {
  function goToShipping() {
    window.location.href = '/chooseshipping';
  }

  return El({
    element: 'div',
    id: '',
    className: 'mx-[24px]',
    children: [
      El({
        element: 'p',
        className: 'mb-[35px] font-bold text-[25px]',
        innerText: 'Choose Shipping',
      }),
      El({
        element: 'div',
        className: 'flex gap-10 items-center ml-5 justify-between ',
        children: [
          El({
            element: 'div',
            className: ' flex justify-between items-center gap-6',
            children: [
              El({
                element: 'span',
                className: 'icon-[mdi--local-shipping] w-7 h-7',
              }),
              El({
                element: 'p',
                className: 'text-[20px] font-bold',
                innerText: 'Choose Shipping Type',
              }),
            ],
          }),
          El({
            onclick: goToShipping,
            element: 'span',
            className: 'icon-[ooui--next-ltr] w-7 h-7',
          }),
        ],
      }),
    ],
  });
}
