import Navigo from 'navigo';
import { changePage } from '../utils/change-page';
// import { loginForm } from '../templates/login';
import { loginPage } from '../pages/login-page';
import { homePage } from '../pages/home-page';
import { homeAdidas } from '../templates/Home-adidas';
import { homeReebok } from '../templates/Home-reebok';
import { homeNewBalance } from '../templates/Home-newbalance';
import { homeAsics } from '../templates/Home-asics';
import { homePuma } from '../templates/Home-puma';
import { homeConverse } from '../templates/Home-converse';
import { homeAllBrands } from '../templates/Home-allBrands';
import { homeNike } from '../templates/Home-nike';
import { homeMostPopular } from '../templates/home-mostpopular';
import { cardFullDetail } from '../templates/Card-full-detail';
import { Product } from '../templates/Selected-product';
import { onBordingPageOne } from '../templates/onboarding-page-one';
import { onboradingPageTwo } from '../templates/onboarding-page-two';
import { wishlistPage } from '../pages/wishlist-apge';
import { SearchPage } from '../pages/search-page';
import { SwiperPage } from '../pages/onboarding-swiper';
import { cartPage } from '../pages/cart-page';
import { checkoutPage } from '../templates/orders/checkout';
import { shippingAddressPage } from '../templates/orders/shippingAddress';
import { chooseShipping } from '../templates/orders/chooseShipping';
import { paymentMethodsPage } from '../templates/orders/paymentMethods';
import { OrderPage } from '../pages/orders-page';
export const router = new Navigo('/');

router
  .on('/login', () => {
    changePage(loginPage);
  })
  .on('/home', () => {
    changePage(homePage);
  })
  .on('/shoes-adidas', () => {
    changePage(homeAdidas);
  })
  .on('/shoes-nike', () => {
    changePage(homeNike);
  })
  .on('/shoes-reebok', () => {
    changePage(homeReebok);
  })
  .on('/shoes-newbalance', () => {
    changePage(homeNewBalance);
  })
  .on('/shoes-asics', () => {
    changePage(homeAsics);
  })
  .on('/shoes-puma', () => {
    changePage(homePuma);
  })
  .on('/shoes-converse', () => {
    changePage(homeConverse);
  })
  .on('/shoes-allbrands', () => {
    changePage(homeAllBrands);
  })
  .on('/shoes-mostpopular', () => {
    changePage(homeMostPopular);
  })
  .on('/card-full-detail', () => {
    changePage(cardFullDetail);
  })
  .on('/products/:id', ({ data }) => {
    changePage(Product, data);
  })
  .on('/', () => {
    changePage(onBordingPageOne);
  })
  .on('/onboradingpageTwo', () => {
    changePage(onboradingPageTwo);
  })
  .on('/wishlist', () => {
    changePage(wishlistPage);
  })
  .on('/search', () => {
    changePage(SearchPage);
  })
  .on('/swiper', () => {
    changePage(SwiperPage);
  })
  .on('/cart', () => {
    changePage(cartPage);
  })
  .on('/checkout', () => {
    changePage(checkoutPage);
  })
  .on('/shippingaddresspage', () => {
    changePage(shippingAddressPage);
  })
  .on('/chooseshipping', () => {
    changePage(chooseShipping);
  })
  .on('/paymentmethods', () => {
    changePage(paymentMethodsPage);
  })
  .on('/orders', () => {
    changePage(OrderPage);
  });
