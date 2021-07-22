import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

import productsReducer from "../store/reducers/productsHome";
import infoProducts from "../store/reducers/productsInfo";
import allProducts from "../store/reducers/productList";
import orderProducts from "../store/reducers/order";
import { cartItemsReducer } from "../store/reducers/cart";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  products: productsReducer,
  productsAll: allProducts,
  info: infoProducts,
  order: orderProducts,
  cart: cartItemsReducer,
});

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// export const store = createStore(
//   rootReducer,
//   composeEnhancers(applyMiddleware(thunk))
// )
