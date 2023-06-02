import React, { useEffect, useState } from 'react';
import { StyleSheet, View ,Text,Image, TouchableOpacity, FlatList} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
import styles from './universalStyle';
import Constants from 'expo-constants';


 
export default function App({ navigation })  {



    const data = [
        { id: 1, title: 'Slide 1' },
        { id: 2, title: 'Slide 2' },
         ];
    
  
      const renderItem = ({ item, index }) => {
        return (
            <View style={{marginBottom:10}}>
            
            <View style={styles.introFirst2}>
            <View style={{marginHorizontal:10,alignItems:'center'}}>
            <Text style={styles.heading}>Klinic - </Text>
            <Text style={styles.subHeading}>
            No appoiments or vedio calls required.
            </Text>
            <View style={{width:'60%'}}>
            <Text style={styles.subText}>start a visity quickly and discreetly when ever work best for you and get the treatement</Text>
            </View>
            </View>
           
           
            </View>


            <View>
            {index === data.length - 1 && (
                <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{ backgroundColor: 'green', padding: 20, marginTop: 10,borderRadius:10,width:'90%' }} onPress={() => navigation.navigate('Login')}>
                  <Text style={{ color: 'white', textAlign: 'center' }}>Getting Started</Text>
                </TouchableOpacity>
                </View>
              )}
              {index !== data.length - 1 && (
               
                <TouchableOpacity style={styles.skipBtn} onPress={() => navigation.navigate('Login')}>
                <Text  style={styles.skipText}>Skip</Text>
                </TouchableOpacity>
                
            )}
            </View>
            </View>

        );
      };

  return (

    <>
    <View style={styles.introFirst1}>
    <View  style={styles.IntorButton}>
    <Text style={styles.logo}>Logo</Text>
    <Text style={styles.introText}>Ipsum</Text>
    </View>
    {/** indicater */}
    <View style={styles.activeIndicater}>
        <View style={styles.active}></View>
        <View style={[styles.notActive,styles.centerActive]}></View>
        <View style={styles.notActive}></View>
    </View>
    
  

    {/**contant */}

 


    </View>

    <View style={styles.body}>
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  </View>

    
    </>
    );
}

