import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>My name is <b>Philomina </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#D77EE4',
    alignItems: 'center',
    justifyContent: 'center',
    text:{
    fontSize:24,
    fontWeight: 'bold',
  }
  },
});
