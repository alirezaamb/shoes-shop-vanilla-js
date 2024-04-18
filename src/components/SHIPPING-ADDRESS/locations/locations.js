import { El } from '../../../utils/create-element';
import { oneLocation } from '../oneLocation/oneLocation';

export function locations() {
  function addAddress() {
    window.location.href = '/checkout';
  }

  return El({
    element: 'div',
    className:
      'mx-[24px] flex flex-col gap-10 mt-[50px] flex flex-col items-center',
    children: [
      oneLocation('Home', '61480 Sunbrook Park PC 5679', 'home', 'checked'),
      oneLocation('Office', '6993 Meadow Valley Terra', 'office'),

      oneLocation('Apartment', '21833 Clyde Gallagher.', 'apartment'),

      oneLocation("Parent's House", '5259 Blue Bill Park. PC 4627', 'parent'),

      El({
        element: 'button',
        className:
          'bg-gray-200 w-[90%] rounded-[60px] text-[20px]  w-[60px] py-3 font-semibold',
        innerText: 'Add New Address',
        id: 'btnAddToCard',
      }),
      El({
        element: 'button',
        className:
          'bg-black text-white w-full rounded-3xl mt-[210px] text-[20px]  py-3',
        innerText: 'Apply',
        onclick: addAddress,
      }),
    ],
  });
}
