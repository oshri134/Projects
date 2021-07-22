import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Button,
} from "react-native";
import COLORS from "../../constants/Colors";
import { Feather } from "@expo/vector-icons";

let TouchableCmp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback;
}

const CartItem = (props) => {
  return (
    <View>
      <View style={styles.cartCard}>
        <Image
          source={{ uri: props.imageUrl }}
          style={{ height: 100, width: 100 }}
        />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}
        >
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            {props.title}
          </Text>

          <Text style={{ fontSize: 17, fontWeight: "bold" }}>
            ${props.finalPrice}
          </Text>
        </View>
        <TouchableCmp
          onPress={props.onRemove}
          style={{ marginRight: 20, alignItems: "center" }}
        >
          <Feather name="delete" size={24} color="black" />
        </TouchableCmp>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal: 20,
  },
  cartCard: {
    height: 100,
    elevation: 15,
    borderRadius: 10,
    backgroundColor: COLORS.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  actionBtn: {
    width: 80,
    height: 30,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingHorizontal: 5,
    flexDirection: "row",
    justifyContent: "center",
    alignContent: "center",
  },
});

export default CartItem;
