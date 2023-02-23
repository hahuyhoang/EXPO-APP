import {
  Dimensions,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

const Home = () => {
  const customData = [
    {
      id: 1,
      name: "WEALTHFRONT",
      description: "Persional Saving",
      image:
        "https://play-lh.googleusercontent.com/5S8jg7ib715oTaXjOl0ZwtUarz6mszRJXu6Z9sCusXWP1nULo33HxJWFDYq_1BvLRA",
      money: "9,102",
    },
    {
      id: 2,
      name: "BANK OF AMERICA",
      description: "BofA Checkings",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgtCABoe9E-0I18DIcS-DtsV71oQ0cpZbRWA&usqp=CAU",
      money: "910,2",
    },
    {
      id: 3,
      name: "ROBINHOOD",
      description: "Robinhood Cash",
      image:
        "https://assets.materialup.com/uploads/e28ab279-b02b-483a-9521-669782128e6f/0x0ss-85.jpg",
      money: "191,02",
    },
    {
      id: 4,
      name: "COINBASE PRO",
      description: "Coinbase USD",
      image: "https://paganresearch.io/images/coinbase.png",
      money: "191,02",
    },
    {
      id: 5,
      name: "BITCOIN",
      description: "BITCOIN USD",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/800px-Bitcoin.svg.png",
      money: "19100,02",
    },
  ];
  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={{ marginTop: 1 }}
      className="bg-white h-16 items-center pl-4 flex-row justify-between"
    >
      <View className="flex-row items-center">
        <Image
          source={{ uri: item.image }}
          className="w-11 h-11 rounded-full"
        />
        <View className="pl-4">
          <Text className="text-xs text-gray-500">{item.name}</Text>
          <Text className="text-lg">{item.description}</Text>
        </View>
      </View>
      <View className="pr-3">
        <Text className="text-lg">${item.money}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* text header */}
      <View style={styles.header}>
        <Text className="font-semibold text-white mt-3 text-xl">Home</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.main}>
        {/* chart */}
        <View style={styles.chartView} className="bg-slate-900">
          <View>
            <Text>hi</Text>
          </View>
        </View>
        {/* cash */}
        <View>
          <View className="bg-white h-16 justify-center pl-4 rounded-t-sm rounded-r-sm">
            <Text className="font-semibold text-xl">Cash</Text>
          </View>
          <View>
            <FlatList
              data={customData}
              renderItem={renderItem}
              keyExtractor={(item) => `${item.id}`}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  header: {
    backgroundColor: "#497bd0",
    alignItems: "center",
    height: windowHeight / 12,
    justifyContent: "center",
  },
  main: {
    marginHorizontal: 10,
    marginBottom: 70,
  },
  chartView: {
    marginTop: 10,
    height: windowHeight / 2.5,
    marginBottom: 10,
  },
});
