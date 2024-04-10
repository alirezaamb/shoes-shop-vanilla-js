import { El } from '../../../utils/create-element';

// export function ButtonSize({ sizeCircle }) {
//   const Element = El({
//     element: 'button',
//     className:
//       'rounded-full text-gray-700 px-2 py-1  hover:text-white hover:bg-black',
//     innerText: `${sizeCircle}`,
//   });

//   return Element;
// }

export function ButtonSize({ sizeCircle }) {
  const Element = El({
    element: 'div',
    children: [
      El({
        element: 'input',
        className: 'peer hidden',
        id: `size${sizeCircle}`,
        name: 'size',
        value: sizeCircle,
        type: 'radio',
      }),
      El({
        element: 'label',
        className:
          'select-none cursor-pointer rounded-full border-2 border-gray-300 py-1 px-2 font-bold text-gray-300 peer-checked:bg-black peer-checked:text-white peer-checked:border-none',
        restAttrs: {
          for: `size${sizeCircle}`,
        },
        innerText: sizeCircle,
      }),
    ],
  });

  return Element;
}
