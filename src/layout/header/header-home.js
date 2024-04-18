import { El } from '../../utils/create-element';

export function headerHome() {
  function goToWishlistPage() {
    window.location.href = '/wishlist';
  }

  const el = El({
    element: 'div',
    className: 'flex justify-between items-center px-2 py-3',
    children: [
      El({
        element: 'div',
        className: 'flex items-center gap-2 ',
        children: [
          El({
            element: 'img',
            src: './src/assets/image/profile-photo.jpg',
            className: 'w-12 h-12 rounded-full',
          }),
          El({
            element: 'div',
            className: 'flex flex-col flex-start',
            children: [
              El({
                element: 'p',
                innerText: 'Good morning 👋',
                className: 'text-gray-400 text-sm font-medium',
              }),
              El({
                element: 'h3',
                className: 'font-semibold',
                innerText: 'Alireza Amb',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-2',
        children: [
          El({
            element: 'span',
            className: 'icon-[ph--bell-light] h-6 w-6 hover:bg-gray-500',
          }),
          El({
            element: 'span',
            className:
              'icon-[ph--heart-light] h-6 w-6 hover:bg-gray-500 cursor-pointer ',
            onclick: goToWishlistPage,
          }),
        ],
      }),
    ],
  });

  return el;
}
