import Component from '../components/Component.js';
import Select from '../components/Select.js';
import SelectedOptions from '../components/SelectedOptions.js';
import formatPriceAddComma from '../utils/formatPrice.js';
import { request } from '../utils/api.js';

export default class ProductDetailPage extends Component {
  async setup() {
    const res = await request(`/products/${this.props.id}`);

    this.setState({
      productData: {
        ...res,
        productId: res.id,
        productName: res.name,
        productPrice: res.price,
      },
      selectedOption: {
        optionId: '',
        optionStock: 0,
        optionName: '',
        optionPrice: 0,
        count: 0,
        optionTotalPrice: 0,
      },
    });
  }

  calculateOptonTotalPrice(productPrice, optionPrice, count) {
    return (Number(productPrice) + Number(optionPrice)) * Number(count);
  }

  handleChangeSelect(selectedOption) {
    const { optionId, optionPrice } = selectedOption;
    const { productPrice } = this.state.productData;

    this.state.optionId !== optionId &&
      this.setState({
        selectedOption: {
          ...selectedOption,
          count: 1,
          optionTotalPrice: this.calculateOptonTotalPrice(
            productPrice,
            optionPrice,
            1,
          ),
        },
      });
  }

  handleChangeInput(e) {
    const { value } = e.target;
    const { optionPrice } = e.target.dataset;
    const { productPrice } = this.state.productData;

    this.setState({
      selectedOption: {
        ...this.state.selectedOption,
        count: value,
        optionTotalPrice: this.calculateOptonTotalPrice(
          productPrice,
          optionPrice,
          value,
        ),
      },
    });
  }

  handleSubmit() {
    const { productId } = this.state.productData;
    const { optionId, count } = this.state.selectedOption;

    if (!optionId) {
      return;
    }

    const storage = window.localStorage.getItem('products_cart');
    const productsCart = [
      ...(storage ? JSON.parse(storage) : []),
      {
        productId,
        optionId: optionId,
        quantity: count,
      },
    ];
    window.localStorage.setItem('products_cart', JSON.stringify(productsCart));
  }

  template() {
    if (!this.state) {
      return '';
    }

    const { productName, imageUrl, productPrice } = this.state.productData;
    return `
          <div class="ProductDetailPage">
            <h1>${productName} 상품 정보</h1>
            <div class="ProductDetail">
            <img src=${imageUrl}>
            <div class="ProductDetail__info">
              <h2>${productName} </h2>
              <div class="ProductDetail__price">${formatPriceAddComma(
                productPrice,
              )}</div>
              <div class="ProductDetail__selectContainer"></div>
              <div class="ProductDetail__selectedOptions"></div>
            </div>
          </div>
        `;
  }

  mounted() {
    if (!this.state) {
      return;
    }

    const $selectContainer = this.$target.querySelector(
      '.ProductDetail__selectContainer',
    );
    const $selectedOptions = this.$target.querySelector(
      '.ProductDetail__selectedOptions',
    );
    const { productData, selectedOption } = this.state;
    const { productPrice } = productData;

    new Select($selectContainer, {
      productData,
      onChange: this.handleChangeSelect.bind(this),
    });
    new SelectedOptions($selectedOptions, {
      productPrice,
      selectedOption,
      onChange: this.handleChangeInput.bind(this),
      onSubmit: this.handleSubmit.bind(this),
    });
  }
}
