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
} from "react-native";

import Colors from "../../constants/Colors";

const HomeProductsScreen = (props) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <View style={styles.product}>
      <TouchableCmp onPress={props.onViewDetail} useForeground>
        <View>
          <Image style={styles.image} source={{ uri: props.image }} />
        </View>
      </TouchableCmp>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 200 / 2,
    borderColor: "black",
    borderWidth: 3,
    alignItems: "center",
    margin: 30,
  },

  title: {
    fontSize: 25,
    marginLeft: 30,

    alignItems: "center",
  },
});

export default HomeProductsScreen;
