import PRODUCT_INFO from "../../data/Dummy_Data_Productinfo";

import Product from "../../models/Products";
import {
  DELETE_PRODUCT,
  CREATE_PRODUCT,
  UPDATE_PRODUCT,
} from "../actions/products";
const initialStateinfo = {
  availableInfo: PRODUCT_INFO,
  userProducts: PRODUCT_INFO.filter((prod) => prod.ownerId === "c1"),
};

export default (state = initialStateinfo, action) => {
  switch (action.type) {
    case CREATE_PRODUCT:
      const newProduct = new Product(
        new Date().toString(),
        "c1",
        action.productData.title,
        action.productData.imageUrl,
        action.productData.price
      );
      return {
        ...state,
        availableInfo: state.availableInfo.concat(newProduct),
        userProducts: state.userProducts.concat(newProduct),
      };
    case UPDATE_PRODUCT:
      const productIndex = state.userProducts.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedProduct = new Product(
        action.pid,
        state.userProducts[productIndex].id,
        action.productData.title,
        action.productData.imageUrl,
        state.userProducts[productIndex].price
      );
      const updatedUserProducts = [...state.userProducts];
      updatedUserProducts[productIndex] = updatedProduct;
      const availableProductIndex = state.availableInfo.findIndex(
        (prod) => prod.id === action.pid
      );
      const updatedAvailableProducts = [...state.availableInfo];
      updatedAvailableProducts[availableProductIndex] = updatedProduct;
      return {
        ...state,
        availableInfo: updatedAvailableProducts,
        userProducts: updatedUserProducts,
      };
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.pid
        ),
        availableInfo: state.availableInfo.filter(
          (product) => product.id !== action.pid
        ),
      };
  }
  return state;
};
