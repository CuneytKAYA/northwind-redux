import * as actionTypes from "./actionTypes";

export function getProductsSuccess(categories) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCES,
    payload: categories,
  };
}

export function getProducts(categoryId) {
  //API ye baglanacagiz(asenkton operation)
  //dispatch:yakala,ele gecir
  return function (dispatch) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }

    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getProductsSuccess(response)));
  };
}
