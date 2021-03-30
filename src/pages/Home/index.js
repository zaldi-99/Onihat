// import React, { useEffect, useState } from 'react'
// import { StatusBar, StyleSheet, Text, View, FlatList } from 'react-native'
// import Header from '../../components/Header'
// import { colors } from '../../utils'

// const Home = ({navigation}) => {
//     return (
//         <View style={styles.container}>
//             <StatusBar barStyle="default" />
//             <Header />
//         </View>
//     )
// }

// export default Home

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#181A27'
//     }
// })

import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import Header from "../../components/Header";

export default Home = ({ navigation }) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api-mading.wannabestart.com/public/api/mading")
      .then((response) => response.json())
      .then((json) => setData(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="default" />
      <Header onPress={() => navigation.navigate("Information")} />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View>
              <ScrollView style={styles.contentWrapper}>
                <Text style={styles.dear}>DEAR : {item.dear}</Text>
                <Text style={{ fontSize: 18, color: "#f2f2f2" }}>
                  {item.negatif_post}
                </Text>
              </ScrollView>
            </View>
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#181A27",
  },
  contentWrapper: {
    marginHorizontal: 18,
    marginVertical: 10,
    backgroundColor: "#24263B",
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  dear: {
    fontSize: 20,
    color: "#5158A2",
    paddingBottom: 5,
    borderBottomColor: "#1F2136",
    borderBottomWidth: 3,
    marginBottom: 5,
  },
});
