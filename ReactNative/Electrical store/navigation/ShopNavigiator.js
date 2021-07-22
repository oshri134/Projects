import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { Platform, StyleSheet } from "react-native";
import HomeProducts from "../screens/shop/HomeProducts";
import ListProducts from "../screens/shop/ListProducts";
import InfoProduct from "../screens/shop/InfoProduct";

import Colors from "../constants/Colors";
import CartProduct from "../screens/shop/CartProudact";
import CheckoutPrudact from "../screens/shop/CheckoutPrudact";
import EndOfPurchase from "../screens/shop/EndOfPurchase";

const ProductsNavigator = createStackNavigator(
  {
    Home: HomeProducts,
    list: ListProducts,
    info: InfoProduct,
    cart: CartProduct,
    checkout: CheckoutPrudact,
    end: EndOfPurchase,
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? Colors.primary : "",
      },
      headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
    },
  }
);

export default createAppContainer(ProductsNavigator);
