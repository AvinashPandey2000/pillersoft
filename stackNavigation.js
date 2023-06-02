import { StyleSheet, Text, View } from 'react-native';
import IntroSlider from './src/introSlider';
import {SafeAreaView} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import IntroSliderTwo from './src/introSlidertwo';
import Login from './src/login';
import Home from './src/Home';

export default function StackNavigation() {
  
const Stack = createNativeStackNavigator();
  return (
    // <SafeAreaView style={styles.container}>
    //  <IntroSlider/>
    // </SafeAreaView>
    <Stack.Navigator>
      <Stack.Screen name="IntroSlider" component={IntroSlider} options={{ headerShown: false,}} />
      <Stack.Screen name="IntroSliderTwo" component={IntroSliderTwo} options={{ headerShown: false,}} />
      <Stack.Screen name="Login" component={Login} options={{ headerShown: false,}} />
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false,}} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
