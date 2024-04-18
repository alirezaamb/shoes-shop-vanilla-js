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
import { SuccesfulPage } from '../pages/succesful-page';
import { getCookie } from '../utils/cookie';

export const router = new Navigo('/');

const c = getCookie('email');
router
  .on('/login', () => {
    changePage(loginPage);
  })
  .on('/home', () => {
    if (c.length) {
      changePage(homePage);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shoes-adidas', () => {
    if (c.length) {
      changePage(homeAdidas);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shoes-nike', () => {
    if (c.length) {
      changePage(homeNike);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shoes-reebok', () => {
    if (c.length) {
      changePage(homeReebok);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shoes-newbalance', () => {
    if (c.length) {
      changePage(homeNewBalance);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shoes-asics', () => {
    if (c.length) {
      changePage(homeAsics);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shoes-puma', () => {
    if (c.length) {
      changePage(homePuma);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shoes-converse', () => {
    if (c.length) {
      changePage(homeConverse);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shoes-allbrands', () => {
    if (c.length) {
      changePage(homeAllBrands);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shoes-mostpopular', () => {
    if (c.length) {
      changePage(homeMostPopular);
    } else {
      changePage(loginPage);
    }
  })
  .on('/card-full-detail', () => {
    if (c.length) {
      changePage(cardFullDetail);
    } else {
      changePage(loginPage);
    }
  })
  .on('/products/:id', ({ data }) => {
    if (c.length) {
      changePage(Product, data);
    } else {
      changePage(loginPage);
    }
  })
  .on('/', () => {
    if (c.length) {
      changePage(homePage);
    } else {
      changePage(onBordingPageOne);
    }
  })
  .on('/onboradingpageTwo', () => {
    changePage(onboradingPageTwo);
  })
  .on('/wishlist', () => {
    if (c.length) {
      changePage(wishlistPage);
    } else {
      changePage(loginPage);
    }
  })
  .on('/search', () => {
    if (c.length) {
      changePage(SearchPage);
    } else {
      changePage(loginPage);
    }
  })
  .on('/swiper', () => {
    changePage(SwiperPage);
  })
  .on('/cart', () => {
    if (c.length) {
      changePage(cartPage);
    } else {
      changePage(loginPage);
    }
  })
  .on('/checkout', () => {
    if (c.length) {
      changePage(checkoutPage);
    } else {
      changePage(loginPage);
    }
  })
  .on('/shippingaddress', () => {
    if (c.length) {
      changePage(shippingAddressPage);
    } else {
      changePage(loginPage);
    }
  })
  .on('/chooseshipping', () => {
    if (c.length) {
      changePage(chooseShipping);
    } else {
      changePage(loginPage);
    }
  })
  .on('/paymentmethods', () => {
    if (c.length) {
      changePage(paymentMethodsPage);
    } else {
      changePage(loginPage);
    }
  })
  .on('/orders', () => {
    if (c.length) {
      changePage(OrderPage);
    } else {
      changePage(loginPage);
    }
  })
  .on('/succesful', () => {
    if (c.length) {
      changePage(SuccesfulPage);
    } else {
      changePage(loginPage);
    }
  });
