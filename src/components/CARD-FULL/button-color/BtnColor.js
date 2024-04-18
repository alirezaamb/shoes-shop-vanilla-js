import { El } from '../../../utils/create-element';

// export function ButtonColor({ colorCircle, colorCheck }) {
//   const element = El({
//     element: 'span',
//     className: `rounded-full p-4 ${colorCircle} relative cursor-pointer`,
//     children: [
//       El({
//         element: 'span',
//         className: `hover:icon-[ic--baseline-check] hover:${colorCheck} absolute start-2 top-2 w-[30px] h-[30px]`,
//       }),
//     ],
//   });
//   return element;
// }

export function ButtonColor({ colorCircle }) {
  const Element = El({
    element: 'div',
    children: [
      El({
        element: 'input',
        className: 'peer hidden',
        id: `color${colorCircle}`,
        name: 'color',
        value: colorCircle,
        type: 'radio',
      }),
      El({
        element: 'label',
        className: `flex items-center justify-center relative select-none cursor-pointer rounded-full  border-gray-300 font-bold peer-checked:border-[6px] peer-checked:border-gray-700 w-8 h-8`,
        restAttrs: {
          for: `color${colorCircle}`,
          style: `background-color:${colorCircle}`,
        },
        children: [
          El({
            element: 'span',
            className: `hover:icon-[ic--baseline-check] w-4 h-4`,
            restAttrs: {
              for: `color${colorCircle}`,
              style: `color: #ccc`,
            },
          }),
        ],
      }),
    ],
  });
  return Element;
}
