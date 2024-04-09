import { El } from '../../../utils/create-element';

export function ButtonSize({ sizeCircle }) {
  const Element = El({
    element: 'button',
    className:
      'rounded-full text-gray-700 px-2 py-1  hover:text-white hover:bg-black',
    innerText: `${sizeCircle}`,
  });

  return Element;
}
