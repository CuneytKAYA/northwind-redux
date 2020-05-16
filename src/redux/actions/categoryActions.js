import * as actionTypes from "./actionTypes";

/*Kategori değiştiren aksiyon methodu*/
export function changeCategory(category) {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: category,
  };
}

export function getCategoriesSuccess(categories) {
  return {
    type: actionTypes.GET_CATEGORIES_SUCCES,
    payload: categories,
  };
}

export function getCategories() {
  //API ye baglanacagiz(asenkton operation)
  //dispatch:yakala,ele gecir
  return function (dispatch) {
    let url = "http://localhost:3000/categories";

    return fetch(url)
      .then((response) => response.json())
      .then((response) => dispatch(getCategoriesSuccess(response)));
  };
}
