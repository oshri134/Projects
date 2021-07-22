import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  FlatList,
  ScrollView,
  productTitle,
  Dimensions,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import COLORS from "../../constants/Colors";
import { SafeAreaView } from "react-navigation";
import PRODUCT_INFO from "../../data/Dummy_Data_Productinfo";
import * as cartActions from "../../store/actions/cart";
import { color } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const InfoProduct = (props) => {
  const dispatch = useDispatch();
  // const navigation = useNavigation();
  const productTitle = props.navigation.getParam("productTitle");

  const fullProduct = useSelector((state) =>
    PRODUCT_INFO.find((prod) => prod.title === productTitle)
  );

  useEffect(() => {
    console.log("fullProduct", fullProduct);
  });

  const addToCart = () => {
    dispatch(cartActions.addCartItem(fullProduct));
    props.navigation.navigate("cart");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      <View styles={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: fullProduct.imageUrl }} />
      </View>
      <View style={styles.detailsContainer}>
        <View
          style={{
            marginLeft: 20,
            marginTop: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>
            {fullProduct.title}
          </Text>
          <View style={styles.priceTag}>
            <Text
              style={{
                marginLeft: 15,
                color: COLORS.white,
                fontWeight: "bold",
                fontSize: 16,
              }}
            >
              ${fullProduct.price}
            </Text>
          </View>
        </View>

        <View style={styles.reviews}>
          <Text
            style={{
              fontSize: 15,
              justifyContent: "space-between",
              marginTop: 20,
              fontStyle: "italic",
            }}
          >
            "{fullProduct.reviews}"
          </Text>

          <View style={styles.paragraph}>
            <Text>{fullProduct.explanatoryParagraph}</Text>
          </View>
          <View style={styles.kg}>
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>
              Weight : {fullProduct.dimensionsAndWeight}{" "}
            </Text>
          </View>
        </View>
        <View style={styles.shipping}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>
            Shipping : {fullProduct.shipping}$
          </Text>
        </View>
        <Text style={styles.totalPrice}>
          Total Price :{fullProduct.finalPrice_Shipping}$
        </Text>
        <View></View>
        <View style={styles.button}>
          <Button
            state={styles.inButtom}
            title="Add to cart"
            color={COLORS.white}
            onPress={addToCart}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

InfoProduct.navigationOptions = {
  headerTitle: "info",
};

const styles = StyleSheet.create({
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.45,
    marginTop: 20,
  },

  image: {
    width: "70%",
    height: 400,
    marginLeft: 60,
    resizeMode: "contain",
  },
  detailsContainer: {
    flex: 0.55,
    backgroundColor: COLORS.light,
    marginHorizontal: 7,
    marginBottom: -400,
    borderRadius: 20,
    marginTop: 5,
    paddingTop: 1,
  },
  paragraph: {
    marginTop: 20,
  },
  title: {
    // marginBottom: 5,
    // marginRight: 3,
  },

  reviews: {
    marginBottom: 3,
    marginRight: 2,
  },

  priceTag: {
    backgroundColor: COLORS.green,
    width: 80,
    height: 40,
    justifyContent: "center",
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  kg: {
    marginEnd: 5,
    paddingTop: 2,
  },

  shipping: {
    marginEnd: 1,
    paddingTop: 1,
    marginLeft: 140,
    marginBottom: 1,
  },
  totalPrice: {
    marginLeft: 120,
    color: COLORS.red,
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 2,
  },
  button: {
    backgroundColor: COLORS.green,
    width: 150,
    height: 40,
    marginLeft: 130,

    justifyContent: "center",
    borderBottomRightRadius: 50,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default InfoProduct;
