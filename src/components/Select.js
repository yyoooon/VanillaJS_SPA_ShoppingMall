import Component from './Component.js';
import formatPriceAddComma from '../utils/formatPrice.js';

export default class Select extends Component {
  setOptionName(optionData) {
    const { productName } = this.props.productData;
    const { id, name, price, stock } = optionData;
    if (stock === 0) {
      return `<option disabled> 
                  (품절) ${productName} ${name}
                </option>
               `;
    }

    return `<option data-option-id=${id} data-option-name=${name} data-option-price=${price} data-option-stock=${stock}>
                       ${
                         price === 0
                           ? `${productName} ${name}`
                           : price > 0
                           ? `${productName} ${name} (+$${formatPriceAddComma(
                               price,
                             )}원)`
                           : ''
                       }
                   </option>
                `;
  }

  template() {
    const { productOptions } = this.props.productData;

    return `
        <select name="optionSelect">
          <option>선택하세요.</option>
          ${productOptions
            .map(optionData => this.setOptionName(optionData))
            .join('')}
        </select>
        `;
  }

  setEvent() {
    const $optionSelect = this.$target.querySelector('[name="optionSelect"]');
    $optionSelect.addEventListener('change', e => {
      const options = e.target.options;
      const selectedIndex = options.selectedIndex;
      const selectedOption = options[selectedIndex];
      const { optionId, optionStock, optionName, optionPrice } =
        selectedOption.dataset;

      selectedIndex !== 0 &&
        this.props.onChange({
          optionId,
          optionStock,
          optionName,
          optionPrice,
        });
    });

    this.removeParentNode();
  }
}
