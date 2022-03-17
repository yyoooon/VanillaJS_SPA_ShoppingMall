import Component from '../components/Component.js';
import { request } from '../utils/api.js';

export default class CartPage extends Component {
  async setup() {
    const storage = JSON.parse(window.localStorage.getItem('products_cart'));
    const productData = {};

    for (let i = 0; i < storage.length; i++) {
      const { productId, optionId } = storage[i];
      const res = await request(`/products/${productId}`);
      productData[productId][optionId] = res.productOptions;
    }

    this.setState({ productData });
  }
  template() {
    console.log(this.state);
    return `
    <h1>장바구니</h1>
    <div class="Cart">
      <ul>
        <li class="Cart__item">
          <img
            src="https://grepp-cloudfront.s3.ap-northeast-2.amazonaws.com/programmers_imgs/assignment_image/cafe_coffee_cup.png"
          />
          <div class="Cart__itemDesription">
            <div>커피잔 100개 번들 10,000원 10개</div>
            <div>100,000원</div>
          </div>
      </ul>
      <div class="Cart__totalPrice">총 상품가격 175,000원</div>
      <button class="OrderButton">주문하기</button>
    </div>
    `;
  }
}
