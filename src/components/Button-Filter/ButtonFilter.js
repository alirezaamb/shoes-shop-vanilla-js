import { El } from '../../utils/create-element';

// export function ButtonFilter({ text, className = '', ...rest }) {
//   return El({
//     element: 'button',
//     innerText: text,
//     className:
//       'rounded-3xl text-center px-4 bg-white text-[#343A40] border-[#343A40] border border-solid' +
//       className,
//     ...rest,
//   });
// }

export function ButtonFilter({ text }) {
  const button = El({
    element: 'button',
    innerText: text,
    className:
      'bg-white text-black px-4 rounded-3xl focus:bg-[#343A40] focus:text-white border-[#343A40] border-2 border-solid',
  });

  button.addEventListener('click', (e) => {
    console.log(e.target.innerText.toUpperCase());
    const buttons = document.querySelectorAll('.filter-button');
    buttons.forEach((btn) => {
      btn.classList.remove('bg-[#343A40]', 'text-white');
      btn.classList.add('bg-white', 'text-black');
    });
    button.classList.remove('bg-white', 'text-black');
    button.classList.add('bg-[#343A40]', 'text-white');
  });

  button.classList.add('filter-button');

  return button;
}

// export function ButtonFilter({ text }) {
//   const button = document.createElement('button');
//   button.textContent = text;
//   button.classList.add(
//     'bg-white',
//     'text-black',
//     'px-4',
//     'rounded-3xl',
//     'focus:bg-[#343A40]',
//     'focus:text-white',
//     'border-[#343A40]',
//     'border-2',
//     'border-solid'
//   );

//   // Event listener to handle button clicks
//   button.addEventListener('click', () => {
//     // Deselect all buttons
//     const buttons = element.querySelectorAll('.filter-button');
//     buttons.forEach((btn) => {
//       btn.classList.remove('bg-[#343A40]', 'text-white');
//       btn.classList.add('bg-white', 'text-black');
//     });

//     // Select the clicked button
//     button.classList.remove('bg-white', 'text-black');
//     button.classList.add('bg-[#343A40]', 'text-white');
//   });

//   // Add a class for easier selection
//   button.classList.add('filter-button');

//   return button;
// }
