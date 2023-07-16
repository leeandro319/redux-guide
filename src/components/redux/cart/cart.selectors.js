export const selectProductsCount = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce((total, product) => total + product.quantity, 0);
}

export const selectProductsTotalPrice = (rootReducer) => {
  return rootReducer.cartReducer.products.reduce((acc, current) => acc + current.price * current.quantity, 0);
}