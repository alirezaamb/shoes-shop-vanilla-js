import { El } from '../../../utils/create-element';
import { setLocal } from '../../../utils/local-storage';
import { shippingAddress } from '../../CHECKOUT/shippingAddress/shippingAddress';

export function oneLocation(
  name,
  address,
  value,
  checked,
  defaultWord = '',
  classNameForDefaultWord = ''
) {
  function radioLocation(e) {
    const namee =
      e.target.closest('#parentlocation').children[0].children[1].children[0]
        .innerText;
    const Addresss =
      e.target.closest('#parentlocation').children[0].children[1].children[1]
        .innerText;
    let arr = [namee, Addresss];

    setLocal('shippingAddress', arr);
    shippingAddress(namee, Addresss);
  }

  return El({
    element: 'div',
    className: 'flex gap-3 items-center justify-between w-full',
    id: 'parentlocation',
    children: [
      El({
        element: 'div',
        className: 'flex gap-2',
        children: [
          El({
            element: 'div',
            className:
              'ml-7 bg-gray-300 rounded-full w-[60px] h-[60px] relative',
            children: [
              El({
                element: 'span',
                className:
                  'icon-[el--map-marker-alt] w-[40px] h-[40px] m-auto absolute bottom-[10px] end-[10px]',
              }),
            ],
          }),

          El({
            element: 'div',
            className: 'mr-7 flex flex-col gap-3',
            children: [
              El({
                element: 'div',
                className: 'flex gap-3 items-center',
                children: [
                  El({
                    element: 'div',
                    className: 'font-bold text-[20px] ',
                    innerText: name,
                  }),
                  El({
                    element: 'span',
                    className: `${classNameForDefaultWord}`,
                    innerText: defaultWord,
                  }),
                ],
              }),
              El({
                element: 'div',
                className: 'text-sm whitespace-nowrap',
                innerText: address,
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: '',
        children: [
          El({
            element: 'input',
            type: 'radio',
            name: 'option',
            value: value,
            checked: checked,
            className:
              'checked:bg-black w-5 h-5 radio-button border-none outline-none bg-red-500 accent-black',
            onclick: radioLocation,
          }),
        ],
      }),
    ],
  });
}
