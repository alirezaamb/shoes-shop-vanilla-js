import { El } from '../../../utils/create-element';
import { oneShipping } from '../oneShipping/oneShipping';

export function Shippings() {
  function addShipping() {
    window.location.href = '/checkout';
  }

  return El({
    element: 'div',
    className: 'mx-[24px] flex flex-col gap-10 mt-[50px]',
    children: [
      oneShipping(
        'Economy',
        'Estimated Ariival Dec 20-23',
        'icon-[fluent--box-checkmark-24-filled] text-white',
        '10',
        'economy',
        'checked'
      ),
      oneShipping(
        'REgular',
        'Estimated Ariival Dec 20-22',
        'icon-[f7--cube-box-fill] text-white',
        '15',
        'regular'
      ),

      oneShipping(
        'Cargo',
        'Estimated Ariival Dec 19-20',
        'icon-[material-symbols--local-shipping] bg-white',
        '20',
        'cargo'
      ),

      oneShipping(
        'Express',
        'Estimated Ariival Dec 18-19',
        'icon-[fa-solid--shipping-fast] text-white',
        '30',
        'express'
      ),

      // El({
      // element: "button",
      // className:
      // "bg-gray-200 w-[90%] rounded-[60px] text-[20px] m-auto w-[60px] h-[60px] font-semibold",
      // innerText: "Add New Address",
      // id: "btnAddToCard",
      // // onclick: addToOrders,
      // }),
      El({
        element: 'button',
        className:
          'bg-black text-white w-[90%] rounded-[60px] mt-[330px] text-[20px] m-auto h-[60px]',
        innerText: 'Apply',
        onclick: addShipping,
      }),
    ],
  });
}
