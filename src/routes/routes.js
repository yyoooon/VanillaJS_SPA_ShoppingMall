import ProductListPage from '../pages/ProductListPage.js';
import ProductDetailPage from '../pages/ProductDetailPage.js';
import CartPage from '../pages/CardPage.js';

const route = target => {
  const { pathname } = window.location;
  if (pathname === '/web') {
    new ProductListPage(target);
    return;
  }
  if (pathname.split('/')[2] === 'products') {
    const [, , , pageId] = pathname.split('/');
    new ProductDetailPage(target, { id: pageId });
    return;
  }
  if (pathname === '/web/cart') {
    new CartPage(target);
    return;
  }
  console.log('not found page');
};

export default route;
