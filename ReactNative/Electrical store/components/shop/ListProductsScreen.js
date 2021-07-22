import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  Dimensions,
  TouchableHighlight,
} from "react-native";

const { width } = Dimensions.get("screen");
const ListProductsScreen = (props) => {
  // const ListProductsScreen = ({image}) => {

  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === "android" && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  useEffect(() => {
    console.log("props onViewInfo", props.onViewInfo);
  });

  return (
    <TouchableOpacity
      style={styles.div}
      // OnPress={props.onViewInfo}
      onPress={props.onViewInfo}
      useForeground
    >
      <Image
        style={styles.image}
        resizeMode="contain"
        source={{ uri: props.imageUrl }}
      />
      <View
        style={{
          height: width / 2 - 20 - 90,
          backgroundColor: "transparent",
          width: width / 2 - 20 - 10,
        }}
      />
      <Text style={{ fontWeight: "bold", fontSize: 22, textAlign: "center" }}>
        {props.title}
      </Text>

      <Text style={{ fontSize: 20, color: "green" }}>${props.price}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  imageBanner: {
    height: width / 2,
    width: width - 40,
    borderRadius: 10,
    marginHorizontal: 20,
  },
  divCategorie: {
    backgroundColor: "red",
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    padding: 10,
  },
  titleCatg: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  image: {
    width: width / 2 - 20 - 10,
    height: width / 2 - 20 - 30,
    backgroundColor: "transparent",
    position: "absolute",
    top: -45,
  },
  div: {
    width: width / 2 - 20,
    padding: 10,
    borderRadius: 10,
    marginTop: 55,
    marginBottom: 5,
    marginLeft: 10,
    alignItems: "center",
    elevation: 8,
    shadowOpacity: 0.3,
    shadowRadius: 50,
    backgroundColor: "white",
  },
});

export default ListProductsScreen;
