import { StartSlider } from '../templates/swiper';
import { El } from '../utils/create-element';

export function SwiperPage() {
  return El({ element: 'div', className: '', children: [StartSlider()] });
}
