import Component from './Component.js'
import SelectedOptions from './SelectedOptions.js'
import formatPriceAddComma from '../utils/formatPrice.js'

export default class ProductDetailInfo extends Component {

    setOptionName(productName, optionData){
      const {id, name, price, stock} = optionData;
      if(stock === 0) {
        return `<option data-optionid=${id} name=${name} value=${price} data-stock=${stock} disabled> 
                  (품절) ${productName} ${name}
                </option>
               `
      }
      if(price === 0) {
        return `<option data-optionid=${id} name=${name} value=${price} data-stock=${stock}>
                   ${productName} ${name}
                </option>
                `
      }
      if(price > 0) {
        return `<option data-optionid=${id} name=${name} value=${price} data-stock=${stock}>
                   ${productName} ${name} (+$${formatPriceAddComma(price)}원)
                </option>
               `
      }
    }


    template(){
      const {id, name, price, productOptions} = this.props.detailData;
        
      return`
        <h2>${name}</h2>
        <div class="ProductDetail__price">${formatPriceAddComma(price)}</div>
        <select name="optionSelect">
          <option>선택하세요.</option>
          ${productOptions.map((data) => this.setOptionName(name, data)).join('')}
        </select>
        <div class="ProductDetail__selectedOptions"></div>
        `
    }

    mounted(){
      const $selectedOptions = this.$target.querySelector('.ProductDetail__selectedOptions');
      const $optionSelect = this.$target.querySelector('[name="optionSelect"]');
      new SelectedOptions($selectedOptions);
      $optionSelect.addEventListener('change',(e) => {
        const options = e.target.options;
        const selectedIndex = options.selectedIndex;
        console.log(options[selectedIndex]);
      })
    }
}
