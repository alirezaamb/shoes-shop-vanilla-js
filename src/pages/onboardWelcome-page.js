import { onboradingPageTwo } from '../templates/onboarding-page-two';

export function onboardingWelcome() {
  return El({ element: 'div', className: '', children: [onboradingPageTwo()] });
}
