import { StatusBar } from "expo-status-bar";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable
} from "react-native";

export default function ListPage({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style = {{
              padding: 16,
              paddingVertical: 40, 
              backgroundColor: "lightblue",
              margin: 2, 
              flex: 1,
            }}
          >
            <Text
              style={{
                fontSize: 20,
              }}
            >
              {item.title}
            </Text>
            <Pressable
              onPress={() => navigation.navigate("About", { title: item.title })}
            >
              <Text style={{ padding: 16, fontSize: 20, backgroundColor: "grey", margin: 2 }}>
                Go to Detail
            </Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
}

const data = [
  {
    id: "1",
    title: "Item 1",
  },
  {
    id: "2",
    title: "Item 2",
  },
  {
    id: "3",
    title: "Item 3",
  },
  {
    id: "4",
    title: "Item 4",
  },
  {
    id: "5",
    title: "Item 5",
  },
  {
    id: "6",
    title: "Item 6",
  },
  {
    id: "7",
    title: "Item 7",
  },
  {
    id: "8",
    title: "Item 8",
  },
  {
    id: "9",
    title: "Item 9",
  },
  {
    id: "10",
    title: "Item 10",
  },
  {
    id: "11",
    title: "Item 11",
  },
  {
    id: "12",
    title: "Item 12",
  },
  {
    id: "13",
    title: "Item 13",
  },
  {
    id: "14",
    title: "Item 14",
  },
  {
    id: "15",
    title: "Item 15",
  },
  {
    id: "16",
    title: "Item 16",
  },
  {
    id: "17",
    title: "Item 17",
  },
  {
    id: "18",
    title: "Item 18",
  },
  {
    id: "19",
    title: "Item 19",
  },
  {
    id: "20",
    title: "Item 20",
  },
  {
    id: "21",
    title: "Item 21",
  },
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
    // paddingTop: 48,
  },
});
