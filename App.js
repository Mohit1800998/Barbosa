import React from "react";

const image1 = { uri: "https://img.freepik.com/premium-vector/barber-shop-logo-dark-background_23-2148420009.jpg" };
const image2 = { uri: "https://media.istockphoto.com/vectors/fashion-woman-accessory-proffessional-tools-vector-id1219335195?k=20&m=1219335195&s=612x612&w=0&h=9pWjXkMpz5pnVgko2BHvWtRycgUqfNyQeWN6TJK14rA=" }
import { ImageBackground, TouchableOpacity, StyleSheet, Text, ScrollView, StatusBar, SafeAreaView, Dimensions, View } from 'react-native';

const App = () => {
  const { width, height } = Dimensions.get('window');
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          style={{ flex: 1, backgroundColor: "black" }}
          horizontal={true}
          scrollEventThrottle={16}
          pagingEnabled={true}
        >
          <View style={{ width, height }}>
            <ImageBackground source={image1} style={styles.image}>
              <Text style={styles.text1}>Barbousa</Text>
              <View style={[{ color: "black", backgroundColor: "black" }]}>

              </View>
            </ImageBackground>
          </View>
          <View style={{ width, height:800 }}>
            <ImageBackground source={image2} style={styles.image}>
              <Text style={styles.text2}>BarBeauty</Text>
              <View style={[{ color: "black", backgroundColor: "black" }]}>

              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View>
          <TouchableOpacity style={{ backgroundColor: "white", alignItems: "center" }} >
            <Text style={{ color: "black", alignItems: "center", padding: 10, fontSize: 20, fontWeight: 'bold' }}>Let's Go</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};
// const App = () => (
//   <View style={styles.container}>
//     <ImageBackground source={image} style={styles.image}>
//       <Text style={styles.text}>Barbousa</Text>
//       <View style={[{ color: "black", backgroundColor: "black" }]}>
//         <TouchableOpacity style={{ backgroundColor: "white", alignItems: "center" }} >
//           <Text style={{ color: "black", alignItems: "center", padding: 10, fontSize: 20, fontWeight: 'bold' }}>Let's Go</Text>
//         </TouchableOpacity>
//       </View>
//     </ImageBackground>
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text1: {
    flex: 3,
    marginTop: 320,
    marginBottom: 300,
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    alignItems: "flex-start",
    textAlign: "center",
    backgroundColor: "black"
  },
  text2: {
    flex: 3,
    marginTop: 320,
    marginBottom: 380,
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    alignItems: "flex-start",
    textAlign: "center",
    backgroundColor: "pink"
  }
});

export default App; 