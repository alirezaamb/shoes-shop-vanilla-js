import { El } from '../../../utils/create-element';

export function promoCode() {
  return El({
    element: 'div',
    className: 'mx-[24px] mt-[60px]',
    children: [
      El({
        element: 'div',
        className: 'text-[25px] mb-[30px] font-bold',
        innerText: 'Promo Code',
      }),
      El({
        element: 'div',
        className: 'flex justify-between items-center',
        children: [
          El({
            element: 'p',
            className: 'ml-5 text-gray-400',
            innerText: 'Enter Promo Code',
          }),
          El({
            element: 'div',
            className:
              'bg-black rounded-full w-[50px] h-[50px] flex items-center items-center',
            children: [
              El({
                element: 'span',
                className: 'text-white text-lg m-auto rounded-full',
                innerText: '+',
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
