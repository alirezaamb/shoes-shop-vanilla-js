// import { log } from "console";
import { El } from '../../utils/create-element';
export function headerBack(name, icon) {
  return El({
    element: 'div',
    innerText: '',
    className:
      'h-[56px] flex items-center mb-3 mt-[10px] justify-between mr-[24px]',
    children: [
      El({
        element: 'div',
        className: 'flex items-center justify-center',
        children: [
          El({
            element: 'span',
            className:
              'w-[32px] h-[32px] mx-[24px] icon-[ic--sharp-arrow-back] mt-[21px] cursor-pointer',
            eventListener: [
              {
                event: 'click',
                callback: () => {
                  window.history.back();
                },
              },
            ],
          }),

          El({
            element: 'div',
            className:
              'font-bold text-[20px] pr-[100px] mt-[12px] whitespace-nowrap pt-1 ',
            innerText: name,
          }),
        ],
      }),

      El({
        element: 'a',
        // href: "/homepage",
        className: '',
        children: [
          El({
            element: 'span',
            className: `w-[32px] h-[32px] ${icon} mt-[21px] cursor-pointer `,
          }),
        ],
      }),
    ],
  });
}
