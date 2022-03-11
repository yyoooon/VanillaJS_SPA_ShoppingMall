import Component from './Component.js'
import formatPriceAddComma from '../utils/formatPrice.js'

export default class SelectedOptions extends Component {
   
  calculateTotalPrice(selectedOptionValues){
    const priceArr = Object.values(selectedOptionValues).map(({optionTotalPrice}) => Number(optionTotalPrice))
    return priceArr.reduce((a,b) => (Number(a)+Number(b)));
  }
 
    template(){
      const {productPrice, selectedOptions, selectedOptionsData} = this.props
        return`
        <h3>선택된 상품</h3>
        <ul>
          ${selectedOptions.map(({optionId, optionName, optionPrice, optionStock})=>`
              <li>
              ${optionName} ${formatPriceAddComma(Number(productPrice)+Number(optionPrice))}원 
                <div>
                  <input data-option-id=${optionId} name='option-input' type="number", data-option-price=${optionPrice} value=${selectedOptionsData[optionId]?.count} min="1" max="${optionStock}">개
                </div>
              </li>
          `).join('')}
        </ul>
        <div class="ProductDetail__totalPrice">${Object.keys(selectedOptionsData).length ? this.calculateTotalPrice(selectedOptionsData) : '0'}</div>
        <button class="OrderButton">주문하기</button>
        `
    }

    setEvent(){
      const $inputList = this.$target.querySelectorAll('[name="option-input"]');
      $inputList.length && Array.from($inputList).map(($input)=>{
        $input.addEventListener('change', (e) => {
          this.props.onChange(e);
        })
      })
    }
}
