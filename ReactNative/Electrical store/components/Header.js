// import Slider from "../components/Slider";
import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  SafeAreaView,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const Header = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }
  return (
    <SafeAreaView style={styles.header}>
      <View
        style={{
          marginLeft: 175,
          marginTop: 20,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TouchableCmp onPress={props.navigation.navigate("cart")}>
          <FontAwesome name="shopping-cart" size={50} color="orange" />

          {/* <Image
            style={styles.ship}
            source={require("../assets/image/shopping.png")}
          /> */}
        </TouchableCmp>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
  },
  img: {
    width: 80,
    height: 80,
  },
  ship: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});

export default Header;
