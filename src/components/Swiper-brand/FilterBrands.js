import { El } from '../../utils/create-element';
import { ButtonFilter } from '../Button-Filter/ButtonFilter';

export function filterByBrands() {
  const element = El({
    element: 'div',
    className: 'flex flex-col gap-4 mt-3',
    children: [
      El({
        element: 'div',
        className: 'flex justify-between',
        children: [
          El({ element: 'p', className: '', innerText: 'Most Popular' }),
          El({ element: 'p', innerText: 'See All', className: '' }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex gap-3 overflow-x-scroll ',
        children: [
          ButtonFilter({
            text: 'All',
            value: 'ALL',
            // onClick: handleButtonClick,
          }),
          ButtonFilter({
            text: 'Nike',
            value: 'NIKE',
            // onClick: handleButtonClick,
          }),
          ButtonFilter({
            text: 'Adidas',
            value: 'ADIDAS',
            // onClick: handleButtonClick,
          }),
          ButtonFilter({
            text: 'Puma',
            value: 'PUMA',
            // onClick: handleButtonClick,
          }),
          ButtonFilter({
            text: 'Asics',
            value: 'ASICS',
            // onClick: handleButtonClick,
          }),
          ButtonFilter({
            text: 'Reebok',
            value: 'REEBOK',
            // onClick: handleButtonClick,
          }),
          ButtonFilter({
            text: 'New Balance',
            value: 'NEW BALANCE',
            // onClick: handleButtonClick,
          }),
          ButtonFilter({
            text: 'Converse',
            value: 'CONVERSE',
            // onClick: handleButtonClick,
          }),
        ],
      }),
    ],
  });

  return element;
}
