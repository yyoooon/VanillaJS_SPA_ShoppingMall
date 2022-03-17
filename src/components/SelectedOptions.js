import Component from './Component.js';
import formatPriceAddComma from '../utils/formatPrice.js';

export default class SelectedOptions extends Component {
  setup() {
    this.state = this.props;
  }

  template() {
    const { productPrice, selectedOption } = this.state;
    const {
      optionId,
      optionName,
      optionPrice,
      optionStock,
      count,
      optionTotalPrice,
    } = selectedOption;
    return `
        <h3>선택된 상품</h3>
        <ul>
          ${
            optionId &&
            `
          <li>
          ${optionName} ${formatPriceAddComma(
              Number(productPrice) + Number(optionPrice),
            )}원 
            <div>
              <input data-option-id=${optionId} name='option-input' type="number", data-option-price=${optionPrice} value=${count} min="1" max="${optionStock}">개
            </div>
          </li>
          `
          }
        </ul>
        <div class="ProductDetail__totalPrice">${optionTotalPrice}</div>
        <button class="OrderButton">주문하기</button>
        `;
  }

  setEvent() {
    const $input = this.$target.querySelector('[name="option-input"]');
    $input &&
      $input.addEventListener('change', e => {
        this.props.onChange(e);
      });
    const $button = this.$target.querySelector('.OrderButton');
    $button.addEventListener('click', this.props.onSubmit);
  }
}
