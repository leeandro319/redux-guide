import CartActionTypes from "./action--type"

export const addProductToCart = (payload) => {
  return {
    type: CartActionTypes.ADD_PRODUCT,
    payload
  }
}

export const removeProductToCart = (payload) => {
  return {
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
  }
}

export const increaseProductToCart = (payload) => {
  return {
    type: CartActionTypes.INCREASE_PRODUCT_QUANTITY,
    payload
  }
}

export const decreaseProductToCart = (payload) => {
  return {
    type: CartActionTypes.DECREASE_PRODUCT_QUANTITY,
    payload
  }
}