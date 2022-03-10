import Component from '../components/Component.js'
import ProductDetailInfo from '../components/ProductDetailInfo.js'
import {request} from '../utils/api.js'

export default class ProductDetailPage extends Component {
    async setup() {
        const res = await request(`/products/${this.props.id}`);
        this.setState({detailData:res});
    }

    template() {
        if(!this.state) {
            return ''
        }

        const {name, imageUrl} = this.state.detailData;

        return `
          <div class="ProductDetailPage">
            <h1>${name} 상품 정보</h1>
            <div class="ProductDetail">
            <img src=${imageUrl}>
            <div class="ProductDetail__info"></div>
            </div>
          </div>
        `;
    }

    mounted() {
        const $ProductDetail__info = this.$target.querySelector('.ProductDetail__info');
        $ProductDetail__info && new ProductDetailInfo($ProductDetail__info, this.state);
    } 
}
