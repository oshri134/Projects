import "react-native-gesture-handler";
import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import COLORS from "../../constants/Colors";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { CreditCardInput } from "react-native-credit-card-input";

const CheckoutPrudact = (props) => {
  return (
    <SafeAreaView
      style={{ paddingHorizontal: 20, flex: 1, backgroundColor: COLORS.white }}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ flexDirection: "row", marginTop: 40 }}>
          <Text
            style={{ fontWeight: "bold", fontSize: 22, color: COLORS.dark }}
          >
            Check out
          </Text>
        </View>

        <View style={{ marginTop: 20 }}>
          <View style={styles.inputContainer}>
            <TextInput placeholder="First name" style={styles.input} />
          </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Last Name"
              style={styles.input}
              secureTextEntry
            />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Email" style={styles.input} email />
          </View>
          <View style={styles.inputContainer}>
            <TextInput placeholder="Address" style={styles.input} />
          </View>

          <View
            style={{
              marginVertical: 20,
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.line}></View>
            <Text style={{ marginHorizontal: 5, fontWeight: "bold" }}>
              Card
            </Text>
            <View style={styles.line}></View>
          </View>
          <View>
            <View style={styles.container}>
              <CreditCardInput
                autoFocus
                requireName={true}
                requireCVC={true}
                requirePostalCode={true}
                validColor="black"
                invalidColor="red"
                placeholderColor="darkgray"
                labelStyle={{ color: "black", fontSize: 12 }}
                inputStyle={{ color: "black", fontSize: 16 }}
                onFocus={this._onFocus}
                onChange={this._onChange}
              />
            </View>
          </View>

          <TouchableHighlight
            style={styles.ship}
            onPress={() => {
              props.navigation.navigate("end");
            }}
          >
            <View style={styles.btnPrimary}>
              <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 18 }}>
                Buy
              </Text>
            </View>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  inputContainer: { flexDirection: "row", marginTop: 20 },
  input: {
    color: COLORS.light,
    paddingLeft: 30,
    borderBottomWidth: 1,
    borderColor: COLORS.light,
    borderBottomWidth: 0.5,
    flex: 1,
    fontSize: 18,
  },
  inputIcon: { marginTop: 15, position: "absolute" },
  btnPrimary: {
    backgroundColor: COLORS.primary,
    height: 50,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
  container: {
    flex: 1,
    marginTop: 5,
    backgroundColor: "white",
  },
  btnSecondary: {
    height: 50,
    borderWidth: 1,
    borderColor: "#a5a5a5",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    flex: 1,
    flexDirection: "row",
  },
  btnImage: { width: 20, height: 20, marginLeft: 5 },

  line: { height: 1, width: 30, backgroundColor: "#a5a5a5" },
});

export default CheckoutPrudact;
