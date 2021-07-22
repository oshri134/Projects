import React from "react";
import { createStore, combineReducers } from "redux";
import { DefaultTheme } from "@react-navigation/native";
import { Provider } from "react-redux";
import ShopNavigator from "./navigation/ShopNavigiator";
import Header from "./components/Header";
import { StyleSheet, View } from "react-native";
import { store } from "./store";

export default function App() {
  return (
    <Provider store={store} styles>
      <ShopNavigator />
    </Provider>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#4783b8",
  },
});
