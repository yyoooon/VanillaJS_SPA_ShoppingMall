export default class Component {
  $target;
  props;
  state;
  constructor($target, props) {
    this.$target = $target;
    this.props = props;
    this.setup();
    this.render();
    this.setEvent();
  }

  setup() {
    return;
  }

  mounted() {
    return;
  }

  template() {
    return '';
  }

  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }

  setEvent() {
    return;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.render();
  }

  addEventToTarget(
    eventType,
    selector,
    callback,
  ) {
    const children = [...Array.from(this.$target.querySelectorAll(selector))];

    const isTarget = (target) => {
      if (target instanceof HTMLElement) {
        return children.includes(target) || target.closest(selector);
      }
    };

    this.$target.addEventListener(eventType, event => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
}



// (필수) 상품의 옵션을 선택하면, 선택된 상품을 보여주는 영역에 추가합니다.
// (필수) 이미 선택된 상품은 다시 선택해도 선택된 상품에 추가되지 않아야 합니다.
// (필수) 선택된 옵션들의 총 가격을 계산해서 위의 이미지처럼 렌더링합니다.
// 옵션별 가격은 상품 가격 + 옵션 가격을 합친 값입니다.
// 각 옵션별 가격은 수량만큼 곱해야 합니다.
// 선택된 상품의 input에서 수량을 변경하면 수량이 변경되어야 합니다.
// 선택한 옵션의 개수를 변경 시, option의 stock을 넘을 수 없게 해야합니다.
// 해당 input에 숫자가 아닌 값을 넣은 경우 무시하도록 합니다.
// (필수) 주문하기 버튼을 누르면 localStorage에 아래 형태의 데이터로 상품들을 추가하고, /cart 페이지로 이동합니다. 
// 이때 localStorage에 담는 키 이름은 반드시 products_cart 라는 이름으로 하도록 합니다.
