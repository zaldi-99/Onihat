import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
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
      <View style={{ justifyContent: "space-between", flex: 1 }}>
        {/* deskripsi */}
        <View>
          <Text style={styles.desc}>
            This is a application for users who want to pour out all their
            positive and negative thoughts, everything that has been told is
            anonymous so there is no need to worry that your personal data will
            not be known by anyone
          </Text>
          <View style={styles.underline}></View>

          {/* contact */}
          <View>
            <Text style={styles.contact}>
              IF YOU HAVE ANY SUGGESTION {"\n"}
              CONTACT US ON EMAIL{" "}
            </Text>
            <TouchableOpacity style={styles.button}>
              <Icon name="email" size={35} />
            </TouchableOpacity>
          </View>
        </View>
        {/* copyright */}
        <View style={{ bottom: 100 }}>
          <Text style={styles.copyright}>
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
    color: "#B04DBF",
    marginTop: 25,
  },
  underline: {
    height: 10,
    borderTopWidth: 3,
    width: 100,
    alignSelf: "center",
    marginTop: 15,
    borderTopColor: "#B04DBF",
  },
  contact: {
    alignSelf: "center",
    textAlign: "center",
    fontSize: 20,
    color: "#B04DBF",
    marginTop: 25,
  },
  button: {
    backgroundColor: "#B04DBF",
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginHorizontal: 35,
  },
  copyright: {
    textAlign: "center",
    color: "#B04DBF",
    fontWeight: "bold",
    marginTop: 20,
  },
});
