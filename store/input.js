import React,{useEffect, useState} from "react";
import {View,Text,TextInput,TouchableOpacity} from "react-native";
import { useDispatch } from "react-redux";
import { setPassword } from "./mainSlice";
const Input=({navigation})=>{
    const [value, setValue] = useState("");
    const dispatch = useDispatch();
   
return(
    <View style={{flex:1,justifyContent:"space-evenly"}}>
        <Text style={{textAlign:"center",fontSize:25}}>Redux Example </Text>
        <View>
        <TextInput
                placeholder="Enter"
                underlineColor="transparent"
                style={{backgroundColor:"red",margin:5}}
                theme={{ colors: { primary: 'transparent',underlineColor:'transparent', secondary: 'transparent'}}}
                onChangeText={(value) => { setValue(value) }}/>
                <TouchableOpacity style={{margin:5, padding:10,backgroundColor:"yellow"}}
                onPress={()=>{
                    dispatch(setPassword(value));
                    navigation.navigate("ViewInput");
                }}>
                    <Text style={{textAlign:"center"}}>
                        click
                    </Text>
                </TouchableOpacity>
                <Text>@example</Text>
                </View>
    </View>

)
}
export default Input;