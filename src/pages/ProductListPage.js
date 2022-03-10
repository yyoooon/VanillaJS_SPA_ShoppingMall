import Component from '../components/Component.js'
import ProductList from '../components/ProductList.js'
import {request} from '../utils/api.js'

export default class ProductListPage extends Component {
    async setup() {
        const res = await request('/products');
        this.setState({ProductData:res});
    }

    template() {
        if(!this.state) {
            return ''
        }

        return `
          <div class="ProductListPage">
            <h1>상품목록</h1>
            <ul data-component='product-list'></ul>
          </div>
          `;
    }

    mounted() {
        const $productList = this.$target.querySelector('[data-component="product-list"]');
        $productList && new ProductList($productList, this.state);
    }
}
