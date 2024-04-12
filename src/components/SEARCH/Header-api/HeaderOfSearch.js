import { El } from '../../../utils/create-element';

export function HeaderOfApi({ input, numberOfitemFound }) {
  const element = El({
    element: 'div',
    className: 'flex justify-between mx-1 mt-4',
    id: 'headerOfApi',
    children: [
      El({
        element: 'div',
        className: 'flex gap-2',
        children: [
          El({
            element: 'span',
            className: 'font-semibold',
            innerText: 'Result for',
          }),
          El({
            element: 'span',
            innerText: `"${input}"`,
            className: 'font-bold',
          }),
        ],
      }),
      El({
        element: 'div',
        className: '',
        children: [
          El({
            element: 'span',
            className: 'font-semibold',
            innerText: numberOfitemFound,
          }),
          El({
            element: 'span',
            className: 'font-semibold',
            innerText: ' found',
          }),
        ],
      }),
    ],
  });

  return element;
}
