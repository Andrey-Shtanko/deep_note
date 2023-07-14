import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import {ChartComponent} from "./components/chart.component";

export default function App() {
  return (
    <View style={styles.container}>
      <ChartComponent/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
