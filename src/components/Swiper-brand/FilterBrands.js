import { El } from '../../utils/create-element';
import { ButtonFilter } from '../Button-Filter/ButtonFilter';

export function filterByBrands() {
  function fullPageOfFilter() {
    window.location.href = '/shoes-mostpopular';
  }

  const element = El({
    element: 'div',
    className: 'flex flex-col gap-4 mt-3 hiddenScrollbar',
    children: [
      El({
        element: 'div',
        className: 'flex justify-between',
        children: [
          El({
            element: 'p',
            className: 'font-bold text-xl',
            innerText: 'Most Popular',
          }),
          El({
            element: 'p',
            innerText: 'See All',
            className: 'font-medium',
            onclick: fullPageOfFilter,
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-3 overflow-x-scroll hiddenScrollbar',
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
      }),
    ],
  });

  return element;
}
