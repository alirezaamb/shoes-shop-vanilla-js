import { ButtonFilter } from '../components/Button-Filter/ButtonFilter';
import { RenderProducts } from '../components/Render-Products/RenderProducts';
import { El } from '../utils/create-element';

export function homeMostPopular() {
  document.title = 'Popular';

  function swiperBrands() {
    return El({
      element: 'div',
      className: 'flex gap-3 overflow-x-scroll ',
      children: [
        ButtonFilter({
          text: 'All',
          className: 'bg-[#343A40] text-white',
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
    className: 'flex flex-col gap-3',
    children: [
      El({
        element: 'div',
        className: 'flex items-center font-semibold gap-3 pt-4 pl-3',
        children: [
          El({
            element: 'a',
            href: '/home',
            children: [
              El({ element: 'span', className: 'icon-[formkit--arrowleft]' }),
            ],
          }),
          El({
            element: 'h3',
            className: 'font-bold text-xl',
            innerText: 'Most Popular',
          }),
        ],
      }),
      El({ element: 'div', className: 'pl-4', children: [swiperBrands()] }),
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
