import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import universalStyle from "./universalStyle";
import { Feather } from "@expo/vector-icons";
import Checkbox from 'expo-checkbox';

export default function Login({navigation}) {
  const [password, setPassword] = useState("");
  const [hidePassword, setHidePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setHidePassword(!hidePassword);
  };
  const [isChecked, setChecked] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignItems: "center" }}>
        <View style={[universalStyle.IntorButton, { marginTop: "20%" }]}>
          <Text style={universalStyle.logo}>Logo</Text>
          <Text style={universalStyle.introText}>Ipsum</Text>
        </View>
      </View>

      <View style={{ marginTop: "20%" }}>
        <Text style={styles.heading}>Log In</Text>
        <TextInput
          style={styles.input}
          placeholder="Email/PhoneNumber"
          // onChangeText={onChangeText}
          // value={text}
        />
        <View
          style={[
            { flexDirection: "row", justifyContent: "space-between" },
            styles.input,
          ]}
        >
          <TextInput placeholder="Password" secureTextEntry={hidePassword} />
          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Text>
              {hidePassword ? (
                <Feather name="eye-off" size={24} color="black" />
              ) : (
                <Feather name="eye" size={24} color="black" />
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{flexDirection:"row",justifyContent:"space-between",marginVertical:10,marginHorizontal:20}}>
      <View style={{flexDirection:"row"}}>
      {/**checkob */}
      <Checkbox
      style={{marginRight:10}}
      value={isChecked}
      onValueChange={setChecked}
      color={isChecked ? '#4630EB' : undefined}
    />
      <Text>Remenber me</Text>
      </View>
      <Text >Forget Password ?</Text>
      </View>


      <View style={{alignItems:"center",marginTop:30}}>
      <TouchableOpacity style={{borderRadius:10,borderWidth:1,width: '80%', alignItems:"center",padding:20,backgroundColor:'green'}} onPress={() => navigation.navigate('Home')}>
      <Text style={{color:'white', fontWeight:"bold",fontSize:20}}>Log In</Text>
      </TouchableOpacity>
      </View>

      <TouchableOpacity style={{flexDirection:"row",marginTop:20,justifyContent:"center"}} >
      <Text style={{fontSize:18}}>Don't have a account ? </Text>
      <Text style={{color:'blue',fontSize:18}}>Register Now</Text>
      </TouchableOpacity>

      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 1,
    marginHorizontal: 20,
    marginVertical: 10,
  },
  heading: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: "20%",
  },
});
