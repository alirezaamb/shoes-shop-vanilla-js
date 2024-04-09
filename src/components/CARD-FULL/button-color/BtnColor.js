import { El } from '../../../utils/create-element';

export function ButtonColor({ colorCircle, colorCheck }) {
  const element = El({
    element: 'span',
    className: `rounded-full p-4 ${colorCircle} relative`,
    children: [
      El({
        element: 'span',
        className: `active:icon-[ic--baseline-check] active:${colorCheck} absolute start-2 top-2 w-[30px] h-[30px]`,
      }),
    ],
  });
  return element;
}
