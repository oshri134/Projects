import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { useSelector } from "react-redux";
import PROUDATS from "../../data/Dummy_Data_Products";
import React from "react";
import ListProductsScreen from "../../components/shop/ListProductsScreen";
import { FontAwesome } from "@expo/vector-icons";

const ListProducts = (props) => {
  const productId = props.navigation.getParam("productId");
  const selectedProducts = [
    useSelector((state) =>
      state.products.availableProducts.find((prod) => prod.id === productId)
    ),
  ];

  const products = PROUDATS.filter((currProduct) =>
    selectedProducts.some(
      (currSelectedProduct) => currSelectedProduct.id === currProduct.id
    )
  );
  const { width } = Dimensions.get("screen");
  return (
    <ScrollView>
      <FlatList
        data={products}
        keyExtractor={(item, index) => {
          item.id;
        }}
        numColumns={2}
        renderItem={(itemData) => (
          <ListProductsScreen
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            price={itemData.item.price}
            onViewInfo={() => {
              props.navigation.navigate("info", {
                productTitle: itemData.item.title,
              });
            }}
          />
        )}
      />
    </ScrollView>
  );
};

ListProducts.navigationOptions = {
  headerTitle: "list",
};
export default ListProducts;

// {
//   /* <FlatList
// data={products}
// keyExtractor={item => item.id}
// renderItem={itemData => (
//   <ProductItem
//     image={itemData.item.imageUrl}
//     title={itemData.item.title}
//     price={itemData.item.price}
//     onSelect={() => {
//       selectItemHandler(itemData.item.id, itemData.item.title); */
// }
