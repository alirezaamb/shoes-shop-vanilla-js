import { El } from '../../utils/create-element';

export function Button({ text, className = '', ...rest }) {
  return El({
    element: 'button',
    innerText: text,
    className:
      'rounded-lg text-center block w-[80%] p-2 bg-black text-white hover:bg-gray-600 ' +
      className,
    ...rest,
  });
}
