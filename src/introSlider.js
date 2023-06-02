import React, { useState } from 'react';
import { StyleSheet, View ,Text,Image, TouchableOpacity} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import styles from './universalStyle';

 
export default function App({ navigation })  {
    setTimeout(function() {
        navigation.navigate('IntroSliderTwo')
      }, 1000*3);

  return (

    <View style={styles.introFirst}>
    <View  style={styles.IntorButton}>
    <Text style={styles.logo}>Logo</Text>
    <Text style={styles.introText}>Ipsum</Text>
    
    </View>
    </View>
    );
}

