import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View, Image, Dimensions } from "react-native";

export default function HomePage({ navigation }) {
  const { width, height } = Dimensions.get('window');
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Image 
          source={require("../assets/flowers.jpg")} 
          style={{ 
            width: width - 100,
            height: 200,
            borderWidth: 5,
            borderColor: "black",
            overflow: "hidden",
          }} 
        />
        <Text style={{ textAlign: "center", fontSize:30 }} >Hello React Native</Text>
        <View style={{ marginVertical: 10 }}>
          <Button
            title="About Page"
            onPress={() => navigation.navigate("About", { fromPage: 'Home' })}
          ></Button>
        </View>
        <Button
          title="List Page"
          onPress={() => navigation.navigate("List", { fromPage: 'Home' })}
        ></Button>
        <StatusBar style="auto" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // paddingTop: 48,
  },
});
