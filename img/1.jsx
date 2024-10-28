import React, { useState } from "react";

const ProductDetail = () => {
  // 받은 데이터를 변수로 설정
  const productData = {
    id: 5,
    productName: "Hack Your Life 개발자 노트북 파우치",
    price: 36000,
    stockCount: 230,
    thumbnailImg: "asset/img/5/thumbnailImg.jpg",
    option: [
      {
        id: 1,
        optionName: "13인치",
        additionalFee: 0,
      },
      {
        id: 2,
        optionName: "15인치",
        additionalFee: 1000,
      },
    ],
    discountRate: 19,
    shippingFee: 1500,
    detailInfoImage: [
      "asset/detail/5/detail1.png",
      "asset/detail/5/detail2.png",
    ],
    viewCount: 0,
    pubDate: "2022-02-28",
    modDate: "2022-02-28",
  };

  // 옵션에 따라 가격을 변경하는 상태
  const [selectedOption, setSelectedOption] = useState(productData.option[0]);
  const finalPrice =
    productData.price -
    (productData.price * productData.discountRate) / 100 +
    selectedOption.additionalFee;

  return (
    <div>
      {/* 썸네일 이미지 */}
      <img src={productData.thumbnailImg} alt={productData.productName} />

      {/* 상품 이름 */}
      <h1>{productData.productName}</h1>

      {/* 할인된 가격 표시 */}
      <p>정가: {productData.price}원</p>
      <p>
        할인가: {finalPrice}원 (할인율: {productData.discountRate}%)
      </p>

      {/* 옵션 선택 */}
      <div>
        <label>옵션 선택:</label>
        <select
          onChange={(e) =>
            setSelectedOption(productData.option[e.target.value])
          }
        >
          {productData.option.map((opt, index) => (
            <option key={opt.id} value={index}>
              {opt.optionName} (+{opt.additionalFee}원)
            </option>
          ))}
        </select>
      </div>

      {/* 배송비 */}
      <p>배송비: {productData.shippingFee}원</p>

      {/* 상세 이미지 */}
      <div>
        {productData.detailInfoImage.map((image, index) => (
          <img key={index} src={image} alt={`detail ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ProductDetail;
