import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
} from "react-native";
import COLORS from "../../constants/Colors";

const EndOfPurchase = (props) => {
  return (
    <View>
      <Text style={styles.text}>Thanks for buying</Text>

      <View style={styles.button}>
        <Button
          state={styles.inButtom}
          title="Home"
          color={COLORS.white}
          onPress={() => props.navigation.navigate("Home")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 50,
    marginLeft: 10,
    marginTop: 300,
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

export default EndOfPurchase;
