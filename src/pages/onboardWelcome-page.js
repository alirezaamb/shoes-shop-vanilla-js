import { onboradingPageTwo } from '../templates/onboarding-page-two';

export function onboardingWelcome() {
  document.title = 'onboarding';

  return El({ element: 'div', className: '', children: [onboradingPageTwo()] });
}
