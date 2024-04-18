import { El } from '../utils/create-element';

export function onBordingPageOne() {
  const Element = El({
    element: 'div',
    className: '',
    children: [
      El({
        element: 'div',
        className: 'flex gap-[12px] justify-center items-center mt-[350px]',
        children: [
          El({
            element: 'img',
            src: './src/assets/image/logo-onboarding.png',
            className: 'w-[59px] h-[59px]',
          }),
          El({
            element: 'span',
            innerText: 'Shoea',
            className: 'font-bold text-[60px]',
          }),
        ],
      }),
      El({
        element: 'div',
        className:
          'm-auto items-center h-[60px] w-[60px] animate-spin rounded-full border-[7px] mt-[300px] border-solid border-current border-e-transparent text-surface motion-reduce:animate-[spin_1s_linear_infinite] text-black',
        children: [
          El({
            element: 'span',
            className:
              '!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 m-auto !p-0 ![clip:rect(0,0,0,0)]',
          }),
        ],
      }),
    ],
  });

  setTimeout(() => {
    window.location.href = '/onboradingpageTwo';
  }, '3000');
  return Element;
}
