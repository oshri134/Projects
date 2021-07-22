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
import React from "react";
import COLORS from "../../constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItem } from "../../store/actions/cart";
import CartItem from "../../components/shop/CartProductsScreen";

const CartProudact = (props) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((rootStore) => rootStore.cart);
  return (
    <ScrollView>
      {/* {cartItems?.map((currCartItem) => (
        // <View key={currCartItem.cartItemId}>
        //   <Text>{JSON.stringify(currCartItem)}</Text>
        //   <Button
        //     title="Remove"
        //     onPress={() => dispatch(removeCartItem(currCartItem.cartItemId))}
        //   />
        // </View> */}
      <FlatList
        data={cartItems}
        keyExtractor={(item) => item.cartItemId}
        renderItem={(itemData) => (
          <CartItem
            finalPrice={itemData.item.finalPrice_Shipping}
            title={itemData.item.title}
            imageUrl={itemData.item.imageUrl}
            deletable
            onRemove={() => {
              dispatch(removeCartItem(itemData.item.cartItemId));
            }}
          />
        )}
      />
      <View style={styles.total}>
        <Text style={styles.text}>Total price:</Text>
      </View>
      <View>
        <View style={styles.button}>
          <Button
            // style={{ fontWeight: "bold", fontSize: 40 }}
            state={styles.inButtom}
            title="Checkout"
            onPress={() => {
              props.navigation.navigate("checkout");
            }}
            color={COLORS.white}
          />
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  total: {
    marginLeft: 150,
    marginTop: 40,
    marginBottom: 40,
  },
  text: {
    fontSize: 30,
  },
  inButtom: {},
  button: {
    backgroundColor: COLORS.green,
    width: 200,
    height: 80,
    marginLeft: 120,

    justifyContent: "center",
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default CartProudact;
