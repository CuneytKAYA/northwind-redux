import * as actionTypes from "./actionTypes";

export function getProductsSuccess(categories) {
  return {
    type: actionTypes.GET_PRODUCTS_SUCCES,
    payload: categories,
  };
}

export function createProductSuccess(product) {
  //POST
  return {
    type: actionTypes.CREATE_PRODUCT_SUCCESS,
    payload: product,
  };
}
export function updateProductSuccess(product) {
  //PUT
  return {
    type: actionTypes.UPDATE_PRODUCT_SUCCESS,
    payload: product,
  };
}

export function saveProductApi(product) {
  return fetch("http://localhost:3000/products/" + (product.id || ""), {
    method: product.id ? "PUT" : "POST",
    body: JSON.stringify(product),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function saveProduct(product) {
  return function (dispatch) {
    return saveProductApi(product)
      .then((savedProduct) => {
        product.id
          ? dispatch(updateProductSuccess(savedProduct))
          : dispatch(createProductSuccess(savedProduct));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export async function handleResponse(response) {
  if (response.ok) {
    return response.json();
  }

  const error = await response.text();
  throw new Error(error);
}
export function handleError(error) {
  console.error("Bir hata olustu.");
  throw error;
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
