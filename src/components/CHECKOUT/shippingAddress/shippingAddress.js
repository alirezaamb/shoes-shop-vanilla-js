import { El } from '../../../utils/create-element';
import { getLocal } from '../../../utils/local-storage';
import { oneLocation } from '../../SHIPPING-ADDRESS/oneLocation/oneLocation';

export function shippingAddress() {
  function goToAddress() {
    window.location.href = '/shippingaddress';
  }

  setTimeout(() => {
    const getAddress = getLocal('shippingAddress');
    const titleOfAddress = getAddress[0];
    const detailsOfAddress = getAddress[1];
    const titleLocation = document.getElementById('titleLocation');
    const detailLocation = document.getElementById('detailLocation');
    titleLocation.innerText = titleOfAddress;
    detailLocation.innerText = detailsOfAddress;
  }, 0);

  setTimeout(oneLocation, 0);
  return El({
    element: 'div',
    className: 'mx-[24px] pl-5',
    children: [
      El({
        element: 'div',
        className: 'font-bold text-[25px] mb-[35px]',
        innerText: 'Shipping Address',
      }),
      El({
        element: 'div',
        className: 'flex gap-3 items-center',
        children: [
          El({
            element: 'div',
            className:
              ' bg-gray-300 rounded-full px-2 py-2 flex items-center justify-center ',
            children: [
              El({
                element: 'span',
                className: 'icon-[el--map-marker-alt] w-[60px] h-[60px]  ',
              }),
            ],
          }),

          El({
            element: 'div',
            className: 'mr-7 flex flex-col gap-3',
            children: [
              El({
                element: 'div',
                className: 'font-bold text-[20px]',
                id: 'titleLocation',
                innerText: 'Home',
              }),
              El({
                element: 'div',
                className: 'text-[14px] whitespace-nowrap',
                id: 'detailLocation',
                innerText: '61480 Sunbrook Park PC 5679',
              }),
            ],
          }),
          El({
            element: 'span',
            onclick: goToAddress,

            className: 'icon-[eva--edit-2-fill] w-8 h-8 cursor-pointer',
          }),
        ],
      }),
    ],
  });
}
