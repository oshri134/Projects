import React from "react";
import HOME_CATEGORYS from "../../data/Dummy_Data_Home";
import {
  View,
  FlatList,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableHighlight,
} from "react-native";
import { useSelector } from "react-redux";
import { SliderBox } from "react-native-image-slider-box";
import HomeProductsScrenn from "../../components/shop/HomeProductsScrenn";
import AppLoading from "expo-app-loading";
import Header from "../../components/Header";
import {
  useFonts,
  Montserrat_300Light,
  Montserrat_800ExtraBold,
} from "@expo-google-fonts/montserrat";
import MapView, { Marker } from "react-native-maps";
import { FontAwesome } from "@expo/vector-icons";
let TouchableCmp = TouchableOpacity;

if (Platform.OS === "android" && Platform.Version >= 21) {
  TouchableCmp = TouchableNativeFeedback;
}
let images = [
  "https://www.linkpicture.com/q/pic1.jpeg",
  "https://i.postimg.cc/Hskgt7d0/2.jpg",
  "https://i.postimg.cc/yYbwXQfB/omid-armin-qj-AUQD3-APSQ-unsplash.jpg",
];

const ProductsHome = (props) => {
  let [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <ScrollView style={styles.home}>
        <View>
          <SliderBox
            autoplay
            circleLoop
            images={images}
            inactiveDotColor="#90A4AE"
            dotColor="#FFEE58"
            resizeMode={"cover"}
            sliderBoxHeight={200}
          />
        </View>
        <TouchableHighlight
          style={styles.ship}
          onPress={() => {
            props.navigation.navigate("cart");
          }}
        >
          <FontAwesome name="shopping-cart" size={50} color="orange" />
        </TouchableHighlight>
        <View>
          <Text style={styles.header}>Our products</Text>
        </View>
        <FlatList
          data={HOME_CATEGORYS}
          horizontal
          keyExtractor={(item, index) => item.id}
          renderItem={(itemData) => (
            <HomeProductsScrenn
              image={itemData.item.imageUrl}
              title={itemData.item.title}
              onViewDetail={() => {
                props.navigation.navigate("list", {
                  productId: itemData.item.id,
                });
              }}
            />
          )}
        />

        <View>
          <Text style={styles.header}>New products</Text>
        </View>

        <View>
          <Text style={styles.header}>Best sell</Text>
        </View>

        <View>
          <Text style={styles.header}>Where are we</Text>
        </View>

        <View>
          <Text style={styles.textMap}>Ben Yehoda 17 Tel Aviv </Text>
        </View>
        <View style={styles.mapSize}>
          <MapView
            style={styles.mapSizeC}
            initialRegion={{
              latitude: 32.07153833599049,
              longitude: 34.77307981460264,
              latitudeDelta: 0.0022,
              longitudeDelta: 0.0421,
            }}
          >
            <Marker
              coordinate={{
                latitude: 32.07153833599049,
                longitude: 34.77307981460264,
              }}
              pinColor={"purple"}
              title={"Electrical store"}
              description={"Ben Yehoda 17 Tel Aviv"}
            />
          </MapView>
        </View>
      </ScrollView>
    );
  }
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
    marginTop: 50,
    marginBottom: 30,
    fontSize: 50,
    fontFamily: "Montserrat_800ExtraBold",
  },
  container: {
    flex: 1,
  },
  home: {
    backgroundColor: "#ffffff",
  },
  mapSize: {
    height: 400,
  },
  mapSizeC: {
    height: 300,
  },
  textMap: {
    textAlign: "center",
    marginBottom: 50,
    fontFamily: "Montserrat_300Light",
    fontSize: 20,
  },
});

ProductsHome.navigationOptions = {
  headerTitle: "Home",
};

export default ProductsHome;
