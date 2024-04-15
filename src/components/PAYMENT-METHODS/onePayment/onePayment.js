import { El } from '../../../utils/create-element';

export function onePayment(name, classIcon, price, value) {
  function radioLocation(e) {
    // console.log("Clicked location: " + this.value);
    // const namee =
    // e.target.closest("#parentlocation").children[0].children[1].children[0]
    // .innerText;
    // const Addresss =
    // e.target.closest("#parentlocation").children[0].children[1].children[1]
    // .innerText;
    // console.log(namee, Addresss);
    // setTimeout(shippingAddress(), 0);
    // console.log(document.getElementById("addressLocation"));
    // document.getElementById("addressLocation").innerText = Addresss;
    // document.getElementById("nameLocation").innerText = namee; document.getElementById("addressLocation").innerText = Addresss;
    // sendToAnotherFunction(namee, Addresss);
  }
  // function sendToAnotherFunction(namee, Addresss) {
  // // Call the other function here with namee and Addresss as parameters
  // // For example:
  // shippingAddress(namee, Addresss);
  // }

  return El({
    element: 'div',
    className: 'flex gap-3 items-center justify-between pl-5',
    id: 'parentlocation',
    children: [
      El({
        element: 'div',
        className: 'flex gap-6',
        children: [
          El({
            element: 'span',
            className: `${classIcon} w-[40px] h-[40px] m-auto `,
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
            ],
          }),
        ],
      }),

      El({
        element: 'div',
        className: 'flex items-center justify-center gap-5',
        children: [
          El({
            element: 'span',
            innerText: `${price}`,
            className: 'font-bold text-[20px] whitespace-nowrap',
          }),
          El({
            element: 'input',
            type: 'radio',
            name: 'option',
            value: value,
            className: 'checked:bg-black w-5 h-5',
            onclick: radioLocation,
          }),
        ],
      }),
    ],
  });
}
