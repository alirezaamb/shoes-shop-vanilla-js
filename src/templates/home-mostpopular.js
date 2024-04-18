import { ButtonFilter } from '../components/Button-Filter/ButtonFilter';
import { RenderProducts } from '../components/Render-Products/RenderProducts';
import { El } from '../utils/create-element';

export function homeMostPopular() {
  function swiperBrands() {
    return El({
      element: 'div',
      className: 'flex gap-3 overflow-x-scroll ',
      children: [
        ButtonFilter({
          text: 'All',
        }),
        ButtonFilter({
          text: 'Nike',
        }),
        ButtonFilter({
          text: 'Adidas',
        }),
        ButtonFilter({
          text: 'Puma',
        }),
        ButtonFilter({
          text: 'Asics',
        }),
        ButtonFilter({
          text: 'Reebok',
        }),
        ButtonFilter({
          text: 'New Balance',
        }),
        ButtonFilter({
          text: 'Converse',
        }),
      ],
    });
  }

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
          El({ element: 'h3', className: '', innerText: 'Most Popular' }),
        ],
      }),
      swiperBrands(),
      El({
        element: 'div',
        className: '',
        id: 'home',
        children: [RenderProducts('all')],
      }),
    ],
  });

  return Element;
}
