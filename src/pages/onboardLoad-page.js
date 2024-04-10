import { onBordingPageOne } from '../templates/onboarding-page-one';
import { El } from '../utils/create-element';

export function onboardingLoading() {
  return El({ element: 'div', className: '', children: [onBordingPageOne()] });
}
