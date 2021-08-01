import React, {Component} from 'react';
import {Text, View, Image,TouchableOpacity } from "react-native";

class EmployeeListItem extends Component {
    navigateTo = () =>{
        this.props.gotoEmpDetails()
    }
    render(){
        let Image_Http_URL = { uri: 'https://randomuser.me/api/portraits/men/1.jpg'};

        return(
            <TouchableOpacity style={{flexDirection:'row',height:50}} onPress={()=>{this.navigateTo()}}>
                <View style={{height:50,width:50,borderRadius:25}}>
                    <Image source={Image_Http_URL}/>
                </View>
                <View>
                    <View style={{flexDirection:'row', height:150}}>
                        <Text>Employee Name: </Text><Text>Leanne Graham</Text>
                    </View>
                    <View style={{flexDirection:'row', height:150}}>
                        <Text>Company Name: </Text><Text>Romaguera-Crona</Text>
                    </View>
                </View>
                
            </TouchableOpacity>
        )  
    }
    
}
export default EmployeeListItem;