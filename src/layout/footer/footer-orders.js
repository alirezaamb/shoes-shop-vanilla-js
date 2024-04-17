import { El } from '../../utils/create-element';

export function footerOrders() {
  function goToHome() {
    window.location.href = '/home';
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
            className: 'icon-[carbon--home] ',
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
          El({ element: 'span', className: 'icon-[carbon--shopping-bag]' }),
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
          El({ element: 'span', className: 'icon-[bi--cart-dash-fill]' }),
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
          El({ element: 'span', className: 'icon-[carbon--wallet]' }),
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
          El({ element: 'span', className: 'icon-[carbon--user-profile]' }),
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
