import { View, StyleSheet, Text } from "react-native";

export const HomeScreen = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to my portfolio.</Text>
      <Text style={styles.baseText}> Here, I’ll share things I find useful and interesting🌱</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(133,121,42,0.26)',
    alignItems: 'center',
    justifyContent: 'center',

  },

  title: {
    color: 'rgb(91,133,90)',
    fontSize: 40,
    fontFamily: 'Avenir Next',
    fontWeight: 'bold',
    textAlign: 'right'
  },

  baseText: {
    color: 'rgb(0,0,0)',
    fontSize: 20,
    fontWeight: '1000',
    fontFamily: 'Avenir Next',
    marginBottom: 150,
    maxWidth: 320,
    textAlign: 'right'
  }
});