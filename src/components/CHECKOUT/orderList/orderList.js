import { El } from '../../../utils/create-element';
import { renderOrderCartForCheckout } from '../renderOrderCartForCheckout/renderOrderCartForCheckout';

export function orderList() {
  return El({
    element: 'div',
    className: 'mx-[24px] mt-10',
    children: [
      El({
        element: 'div',
        className: 'font-bold text-[25px] mb-[35px]',
        innerText: 'Order List',
      }),

      El({
        element: 'div',
        className: 'font-bold text-[25px] mb-[35px]',
        children: [renderOrderCartForCheckout()],
      }),
    ],
  });
}
