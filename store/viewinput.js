import React from "react";
import {View,Text} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";

const ViewInput=()=>{
    var password = useSelector((state: RootState) => state.nameReducer.password);
return(
    <View style={{flex:1,justifyContent:"center"}}>
        <Text style={{textAlign:"center",fontSize:20}}>{password}</Text>
    </View>

)
}
export default ViewInput;