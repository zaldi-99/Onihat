import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";
import { colors } from "../../utils";
import Icon from "react-native-vector-icons/MaterialIcons";

const Information = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <TouchableOpacity
        style={{ marginTop: 20 }}
        onPress={() => navigation.goBack()}
      >
        <Image
          source={require("../../assets/Logo-Onihat-Big.png")}
          style={styles.imageWrapper}
        />
      </TouchableOpacity>
      <View>
        <View>
          <Text style={styles.desc}>
            This is a application for users who want to pour out all their
            positive and negative thoughts, everything that has been told is
            anonymous so there is no need to worry that your personal data will
            not be known by anyone
          </Text>
          <View
            style={{
              height: 10,
              borderTopWidth: 3,
              width: 100,
              alignSelf: "center",
              marginTop: 15,
              borderTopColor: "purple",
            }}
          ></View>
          <Text
            style={{
              alignSelf: "center",
              textAlign: "center",
              fontSize: 20,
              color: "purple",
              marginTop: 25,
            }}
          >
            IF YOU HAVE ANY SUGGESTION {"\n"}
            CONTACT US ON EMAIL{" "}
          </Text>
          <TouchableOpacity style={styles.button}>
            <Icon name="email" size={20} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 200 }}>
          <Text
            style={{ textAlign: "center", color: "purple", fontWeight: "bold" }}
          >
            THIS APPLICATION IS PRODUCED AND PUBLISHED BY {"\n"}
            Wanna Be Start
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A27",
  },
  imageWrapper: {
    width: 260,
    height: 75,
    alignSelf: "center",
    marginTop: 20,
  },
  desc: {
    width: "75%",
    alignSelf: "center",
    textAlign: "center",
    fontSize: 18,
    color: "purple",
    marginTop: 20,
  },
  button: {
    backgroundColor: "purple",
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 35,
  },
});
