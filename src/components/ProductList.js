import Component from './Component.js'
import {push} from '../routes/router.js'

export default class ProductList extends Component {

    template(){
        const {ProductData} = this.props;
        return`
          ${ProductData.map(({id, name, imageUrl, price})=>`
            <li data-id=${id} class="Product">
              <img src=${imageUrl}>
              <div class="Product__info">
                <div>${name}</div>
                <div>${price}</div>
              </div>
            </li>
          `).join('')}
        `
    }

    mounted() {
        this.$target.addEventListener('click', (e) => {
            const {target} = e;
            const item = target.closest('.Product');
            const {id} = item.dataset;
            push(`/web/products/${id}`);
        })
    }
}
