import { El } from '../../utils/create-element';

export function headerWishlist() {
  const Element = El({
    element: 'div',
    className: 'flex justify-between mt-4 mx-3 items-center',
    children: [
      El({
        element: 'div',
        className: ' flex items-center justify-center gap-2',
        children: [
          El({
            element: 'a',
            href: '/home',
            children: [
              El({ element: 'span', className: 'icon-[formkit--arrowleft]' }),
            ],
          }),
          El({
            element: 'span',
            innerText: 'My Wishlist',
            className: 'font-bold text-xl',
          }),
        ],
      }),
      El({
        element: 'div',
        className: '',
        children: [
          El({ element: 'span', className: 'icon-[carbon--search] text-2xl ' }),
        ],
      }),
    ],
  });
  return Element;
}
