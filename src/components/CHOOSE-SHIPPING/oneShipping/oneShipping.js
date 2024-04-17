import { El } from '../../../utils/create-element';
import { setLocal } from '../../../utils/local-storage';

export function oneShipping(name, address, classIcon, price, value, checked) {
  function radioLocation(e) {
    console.log('Clicked location: ' + this.value);
    const namee =
      e.target.closest('#parentlocation').children[0].children[1].children[0]
        .innerText;
    const datee =
      e.target.closest('#parentlocation').children[0].children[1].children[1]
        .innerText;

    const pricee =
      e.target.closest('#parentlocation').children[1].children[1].innerText;

    // let arrTypeOfShipping = [namee, datee, pricee];

    // setLocal('shippingType', arrTypeOfShipping);

    const data = {
      name: namee,
      address: datee,
      price: pricee,
      show: 'hidden',
      hidden: '',
      icon: classIcon,
    };
    setLocal('shippingType', data);
  }

  return El({
    element: 'div',
    className: 'flex gap-3 items-center justify-between  ',
    id: 'parentlocation',
    children: [
      El({
        element: 'div',
        className: 'flex gap-2',
        children: [
          El({
            element: 'div',
            className: 'ml-7 bg-black rounded-full w-[60px] h-[60px] relative',
            children: [
              El({
                element: 'span',
                className: `${classIcon} w-[25px] h-[25px] m-auto absolute bottom-[17px] end-[17px]`,
              }),
            ],
          }),

          El({
            element: 'div',
            className: 'mr-7 flex flex-col gap-2',
            children: [
              El({
                element: 'div',
                className: 'font-bold text-[20px]',
                innerText: name,
              }),
              El({
                element: 'div',
                className: 'text-[14px] whitespace-nowrap',
                innerText: address,
              }),
            ],
          }),
        ],
      }),

      El({
        element: 'div',
        innerText: ``,
        className: 'flex',
        children: [
          El({
            element: 'span',
            innerText: `$`,
            className: 'font-bold text-[20px] whitespace-nowrap',
          }),

          El({
            element: 'span',
            innerText: `${price}`,
            className: 'font-bold text-[20px] whitespace-nowrap',
          }),
        ],
      }),

      El({
        element: 'input',
        type: 'radio',
        name: 'option',
        value: value,
        checked: checked,
        className: 'checked:bg-black w-5 h-5 radio-button',
        onclick: radioLocation,
      }),
    ],
  });
}
