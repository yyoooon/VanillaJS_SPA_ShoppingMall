import Component from './Component.js'

export default class SelectedOptions extends Component {
    template(){
        return`
        <h3>선택된 상품</h3>
        <ul>
          <li>
          커피잔 100개 번들 10,000원 <div><input type="number" value="1">개</div>
          </li>
          <li>
          커피잔 1000개 번들 15,000원 <div><input type="number" value="">개</div>
          </li>
        </ul>
        <div class="ProductDetail__totalPrice">175,000원</div>
        <button class="OrderButton">주문하기</button>
        `
    }
}
