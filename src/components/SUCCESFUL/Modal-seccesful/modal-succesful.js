import { El } from '../../../utils/create-element';

export function ModalSuccesful() {
  const element = El({
    element: 'div',
    className:
      'absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 w-3/4 h-1/2 bg-white flex flex-col items-center gap-3 rounded-3xl',
    children: [
      El({
        element: 'img',
        src: './src/assets/image/confirm.jpg',
        className: '',
      }),
      El({
        element: 'h3',
        innerText: 'Order succesful!',
        className: 'font-bold text-2xl',
      }),
      El({ element: 'p', innerText: 'You have succesfully made order' }),
      El({
        element: 'button',
        innerText: 'View Order',
        className: 'bg-black text-white w-3/4 py-3 rounded-3xl',
        eventListener: [
          {
            event: 'click',
            callback: () => {
              window.location.href = '/orders';
            },
          },
        ],
      }),
      El({
        element: 'button',
        innerText: 'View E-recipt',
        className: 'bg-gray-300 text-black w-3/4 py-3 rounded-3xl',
      }),
    ],
  });

  return element;
}
