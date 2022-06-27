# VanillaJS_SPA_ShoppingMall
[프로그래머스 과제 연습 - 커피 주문 페이지 만들기](https://programmers.co.kr/skill_check_assignments/199)

### 상품 목록 페이지
<img width="60%" alt="image" src="https://user-images.githubusercontent.com/81611808/175917636-c2e0df71-8ff6-49f3-9129-2e8b59e8d6d7.png">
✅ 위의 디자인에 따라 상품 목록을 렌더링 합니다.

✅ 목록에서 상품 카드를 클릭하면 상품 상세 페이지로 이동합니다.

</br>

### 상품 상세 페이지
<img width="60%" alt="image" src="https://user-images.githubusercontent.com/81611808/175917982-73787f1d-ac68-4b64-b5de-1caf6ced0c25.png">

productId에 해당하는 상품을 불러오고, 상품 정보를 렌더링 합니다.(url - `/web/products/:productId`)

#### 옵션 리스트 렌더링 요구 사항
✅ 상품 옵션가가 0인 경우, `${상품이름} ${옵션이름}`의 형식으로 전체 옵션 이름을 렌더링 합니다.

✅ 상품 옵션가가 0보다 큰 경우, `${상품이름} ${옵션이름} (+${옵션가격}원)`의 형식으로 전체 옵션 이름을 렌더링 합니다.

✅ 재고가 0인 상품의 경우, 
   - `(품절) ${상품이름} ${옵션이름}`의 형식으로 전체 옵션이름을 렌더링 합니다.
   - option에 disabled attribute를 지정하여 선택되지 않게 합니다.

✅ 옵션 가격을 렌더링하는 경우 가격 부분에 3자리마다 콤마(,)를 찍도록 합니다.

✅ 상품의 옵션을 선택하면, 선택된 상품을 보여주는 영역에 추가합니다

</br>

#### 상품&옵션 선택 창 렌더링 요구사항
✅ 이미 선택된 상품은 다시 선택해도 선택된 상품에 추가되지 않아야 합니다.

✅ 선택된 옵션들의 총 가격을 계산해서 위의 이미지처럼 렌더링합니다.
   - 옵션별 가격은 상품 가격 + 옵션 가격을 합친 값입니다.
   - 각 옵션별 가격은 수량만큼 곱해야 합니다.
   
✅ 선택된 상품의 input에서 수량을 변경하면 수량이 변경되어야 합니다.
   - 선택한 옵션의 개수를 변경 시, option의 stock을 넘을 수 없게 해야합니다.
   - 해당 input에 숫자가 아닌 값을 넣은 경우 무시하도록 합니다.

✅ 주문하기 버튼을 누르면 localStorage에 아래 형태의 데이터로 상품들을 추가하고, /cart 페이지로 이동합니다.

✅ 이때 localStorage에 담는 키 이름은 반드시 products_cart 라는 이름으로 하도록 합니다.

<img width="30%" alt="image" src="https://user-images.githubusercontent.com/81611808/175921069-a9679e09-6b08-4a03-a819-ba4bb06f39e9.png">
