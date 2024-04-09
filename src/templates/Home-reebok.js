import { RenderProducts } from '../components/Render-Products/RenderProducts';
import { El } from '../utils/create-element';

export function homeReebok() {
  const Element = El({
    element: 'div',
    children: [
      El({
        element: 'div',
        className: 'flex items-center font-semibold gap-3 pt-4',
        children: [
          El({
            element: 'a',
            href: '/home',
            children: [
              El({ element: 'span', className: 'icon-[formkit--arrowleft]' }),
            ],
          }),
          El({ element: 'h3', className: '', innerText: 'Reebok' }),
        ],
      }),
      El({
        element: 'div',
        className: '',
        children: [RenderProducts('reebok')],
      }),
    ],
  });

  return Element;
}
