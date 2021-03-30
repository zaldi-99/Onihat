import React from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Header from "../../components/Header";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      dear: "",
      negatif_post: "",
      rapinam: "hate tokyo",
    };
  }

  async onFetchMading() {
    const data = {
      dear: this.state.dear,
      negatif_post: this.state.negatif_post,
      rapinam: this.state.rapinam,
    };
    try {
      let response = await fetch(
        "https://api-mading.wannabestart.com/public/api/mading",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (response.status >= 201) {
        alert("Succesfull Post Data");
      }
    } catch (errors) {
      alert(errors);
    }
  }

  onPressSubmitButton() {
    this.onFetchMading();
    // alert('Berhasil Submit');
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="default" />
        <Header />

        {/* Content */}
        <View style={styles.form}>
          <TextInput
            autoFocus={true}
            onChangeText={(text) => this.setState({ dear: text })}
            placeholder="Dear, "
            style={styles.styleDear}
          ></TextInput>
          <TextInput
            onChangeText={(text) => this.setState({ negatif_post: text })}
            placeholder="What's on your mind"
            multiline={true}
            style={styles.stylePesan}
          ></TextInput>
          <TouchableOpacity
            onPress={this.onPressSubmitButton.bind(this)}
            style={styles.button}
          >
            <Text style={{ color: "white" }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A27",
  },
  form: {
    marginHorizontal: 18,
    backgroundColor: "#24263B",
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 15,
  },
  styleDear: {
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    margin: 10,
    paddingBottom: 5,
    color: "white",
  },
  stylePesan: {
    paddingHorizontal: 5,
    paddingBottom: 5,
    marginHorizontal: 10,
    marginBottom: 5,
    color: "white",
  },
  button: {
    backgroundColor: "#1B3BBB",
    paddingHorizontal: 12,
    paddingVertical: 11,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});
