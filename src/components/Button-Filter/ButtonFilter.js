import { El } from '../../utils/create-element';
import { RenderProducts } from '../Render-Products/RenderProducts';

export function ButtonFilter({ text }) {
  const button = El({
    element: 'button',
    innerText: text,
    className:
      'border-[2px] rounded-full font-semibold hover:bg-gray-700 hover:text-white border-black inline-block px-6 text-4 m-auto py-[5px] whitespace-nowrap',
  });
  // bg-white text-black px-4 rounded-3xl focus:bg-[#343A40] focus:text-white border-[#343A40] border-2 border-solid

  button.addEventListener('click', (e) => {
    const filterProducts = e.target.innerText.toLowerCase();
    const render = document.getElementById('render');
    if (render != null) {
      render.remove();
    }
    const cards = RenderProducts(filterProducts);
    const home = document.getElementById('home');
    home.append(cards);

    // const buttons = document.querySelectorAll('.filter-button');
    // buttons.forEach((btn) => {
    //   btn.classList.remove('bg-[#343A40]', 'text-white');
    //   btn.classList.add('bg-white', 'text-black');
    // });

    // button.classList.remove('bg-white', 'text-black');
    // button.classList.add('bg-[#343A40]', 'text-white');

    // const handleClick = (clickedIndex) => {
    //   buttons.forEach((button, index) => {
    //   if (index === clickedIndex) {
    //   button.style.backgroundColor = '#343A40';
    //   button.style.color = 'white';
    //   } else {
    //   button.style.backgroundColor = 'white';
    //   button.style.color = '#343A40';
    //   }
    //   });
    //   };

    //   handleClick(0);

    //   buttons.forEach((button, index) => {
    //   button.addEventListener('click', () => {
    //   handleClick(index);
    //   });
    //   });
  });

  button.classList.add('filter-button');
  return button;
}
