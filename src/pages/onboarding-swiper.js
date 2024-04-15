import { StartSlider } from '../templates/onboarding-page-three';
import { El } from '../utils/create-element';

export function SwiperPage() {
  return El({ element: 'div', className: '', children: [StartSlider()] });
}
