import Component from './Component.js';
import formatPriceAddComma from '../utils/formatPrice.js';

export default class SelectedOptions extends Component {
  template() {
    const { productPrice, selectedOption, selectedOptionData } = this.props;
    const { optionId, optionName, optionPrice, optionStock } = selectedOption;
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
              <input data-option-id=${optionId} name='option-input' type="number", data-option-price=${optionPrice} value=${
              selectedOptionData.count
            } min="1" max="${optionStock}">개
            </div>
          </li>
          `
          }
        </ul>
        <div class="ProductDetail__totalPrice">${
          selectedOptionData.optionTotalPrice
        }</div>
        <button class="OrderButton">주문하기</button>
        `;
  }

  setEvent() {
    const $input = this.$target.querySelector('[name="option-input"]');
    $input &&
      $input.addEventListener('change', e => {
        this.props.onChange(e);
      });
  }
}
