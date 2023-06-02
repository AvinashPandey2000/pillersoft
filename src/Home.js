import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

export default function Home() {
    const DATA = [
        {
          id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
          title: 'First Item',
        },
        {
          id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
          title: 'Second Item',
        },
        {
          id: '58694a0f-3da1-471f-bd96-145571e29d72',
          title: 'Third Item',
        },
      ];
      const Item = ({title}) => (
        <View style={{backgroundColor:'#408000',marginHorizontal:10,marginVertical:10,width:350,borderRadius:5}}>
        <View style={{alignItems:'center'}}>
            <View style={{backgroundColor:'#00ccff',marginVertical:10,width:'95%',height:400,borderRadius:10}}>
            </View>
        </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:10,alignItems:'center'}}>

            <View style={{flexDirection:'row'}}>
            <Ionicons name="ios-location-outline" size={24} color="#ccffff" />
            <Text style={{marginLeft:10, color:'#ccffff'}}>San , fransisi ,CA</Text>
            </View>
           
            <TouchableOpacity style={{borderWidth:1,backgroundColor:'#00ccff',padding:5,borderColor:'white',borderRadius:5}}>
            <Text>Connect</Text>
            </TouchableOpacity>
            </View>

            <Text style={{color:'white',fontSize:18,marginHorizontal:10,marginVertical:10}}>Wonderfull building near London big bang withour window...</Text>

            <View style={{flexDirection:'row'}}>
            <View style={{width:60,backgroundColor:'#00ccff',borderColor:'white',height:60,borderRadius:50,borderWidth:1,marginHorizontal:10}}>
            </View>
            <View style={{justifyContent:'center',marginLeft:10,flex:1}}>
                <Text style={{color:'white'}}>Olivia redman</Text>
                <Text  style={{color:'#99ffff'}}>2 minutes ago</Text>
            </View>

            <View style={{marginRight:10}}>
            <EvilIcons name="heart" size={24} color="white" />
            <Ionicons name="paper-plane-outline" size={24} color="white" />
            <EvilIcons name="comment" size={24} color="white" />
            </View>

            
            </View>
        </View>
      );
      
      
    const [selectedOption, setSelectedOption] = useState('Popular');

    const handleOptionSelect = (option) => {
      setSelectedOption(option);
    };
  
    const renderUI = () => {
      if (selectedOption === 'Popular') {
        return (
            <FlatList
            data={DATA}
            renderItem={({item}) => <Item title={item.title} />}
            keyExtractor={item => item.id}
            horizontal
          />

        );
      } else if (selectedOption === 'Latest') {
        return <Text>Latest UI</Text>;
      } else if (selectedOption === 'Following') {
        return <Text>Following UI</Text>;
      }
    };

  return (
    <SafeAreaView style={{flex:1}}>
    {/**Header */}
    <View style={{flexDirection:'row',justifyContent:'space-between',marginHorizontal:20,marginVertical:20}}>
    <View  style={{borderWidth:1,borderRadius:50,padding:10}}>
    <Image source={require('../assets/image/Menu.png')}/>
    </View>
   
    <Text style={{fontWeight:'bold',fontSize:18}}>Activity</Text>
    <View style={{flexDirection:'row'}}>
    <AntDesign name="search1" size={24} color="black" />
    <Ionicons name="notifications-outline" size={24} color="black" />
    </View>
    </View>

 {/*List */}
 <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <TouchableOpacity onPress={() => handleOptionSelect('Popular')}>
          <Text style={[{ fontSize: 18 },selectedOption === 'Popular' && styles.selectedOptionText]}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionSelect('Latest')}>
          <Text style={[{ fontSize: 18 },selectedOption === 'Latest' && styles.selectedOptionText]}>Latest</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleOptionSelect('Following')}>
          <Text style={[{ fontSize: 18 },selectedOption === 'Following' && styles.selectedOptionText]}>Following</Text>
        </TouchableOpacity>
 </View>
      {renderUI()}


    </SafeAreaView>
  );
}

const styles=StyleSheet.create({
    selectedOptionText:{
        fontWeight:'bold',
        fontSize:20
    }
})