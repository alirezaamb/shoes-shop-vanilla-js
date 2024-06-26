import { El } from '../utils/create-element';

export function onboradingPageTwo() {
  const Element = El({
    element: 'div',
    className:
      'bg-[url(./src/assets/image/background-onboarding-two.png)] w-full h-[902px]',
    children: [
      El({
        element: 'p',
        className: 'pt-[600px] ml-[32px] text-white text-[30px] font-bold',
        innerText: 'Welcome to 👋',
      }),
      El({
        element: 'p',
        className: ' ml-[32px] text-white text-[60px] font-extrabold',
        innerText: 'Shoea',
      }),
      El({
        element: 'p',
        className: ' ml-[32px] text-white text-[14px] pr-[20px]',
        innerText:
          'The best sneakers & shoes e-commerse app of the century for your fashion needs!',
      }),
    ],
  });

  setTimeout(() => {
    window.location.href = '/swiper';
  }, '3000');

  return Element;
}
