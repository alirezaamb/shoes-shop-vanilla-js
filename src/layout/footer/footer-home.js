import { El } from '../../utils/create-element';

export function footerHome() {
  function goToCart() {
    window.location.href = '/cart';
  }

  function gotoOrder() {
    window.location.href = '/orders';
  }
  const el = El({
    element: 'div',
    className: 'flex w-full justify-around fixed bottom-0  bg-white py-2',
    children: [
      El({
        element: 'div',
        className: 'flex flex-col items-center cursor-pointer',
        children: [
          El({ element: 'span', className: 'icon-[ion--home-sharp] w-6 h-6 ' }),
          El({
            element: 'span',
            innerText: 'Home',
            className: 'text-xs font-semibold',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex flex-col items-center cursor-pointer',
        children: [
          El({
            element: 'span',
            className: 'icon-[carbon--shopping-bag] w-6 h-6',
            onclick: goToCart,
          }),
          El({
            element: 'span',
            innerText: 'Cart',
            className: 'text-xs font-semibold',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex flex-col items-center cursor-pointer',
        children: [
          El({
            element: 'span',
            className: 'icon-[carbon--shopping-cart] w-6 h-6',
            onclick: gotoOrder,
          }),
          El({
            element: 'span',
            innerText: 'Orders',
            className: 'text-xs font-semibold',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex flex-col items-center cursor-pointer',
        children: [
          El({ element: 'span', className: 'icon-[carbon--wallet] w-6 h-6' }),
          El({
            element: 'span',
            innerText: 'Wallet',
            className: 'text-xs font-semibold',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex flex-col items-center cursor-pointer',
        children: [
          El({
            element: 'span',
            className: 'icon-[carbon--user-profile] w-6 h-6',
          }),
          El({
            element: 'span',
            innerText: 'Profile',
            className: 'text-xs font-semibold',
          }),
        ],
      }),
    ],
  });

  return el;
}
