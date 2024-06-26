import { El } from '../../utils/create-element';

export function footerCart() {
  function goToHome() {
    window.location.href = '/home';
  }
  function gotoOrders() {
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
          El({
            element: 'span',
            className: 'icon-[carbon--home] w-6 h-6',
            onclick: goToHome,
          }),
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
            className: 'icon-[solar--bag-5-bold] w-6 h-6',
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
            onclick: gotoOrders,
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
