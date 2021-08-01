import React, {Component} from 'react';
import { FlatList, Text, View } from 'react-native';
import EmployeeListItem from '../components/EmployeeListItem';
import NetworkManager from '../network/NetworkManager';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
export default class EmployeeHomeScreen extends Component{
    state = {
        isDataLoading : false,
        employeeList: [
            {id:1,name:"Albert",companyName:"abc"},
            {id:1,name:"Albert",companyName:"abc"},
            {id:1,name:"Albert",companyName:"abc"},
            {id:1,name:"Albert",companyName:"abc"},
            {id:1,name:"Albert",companyName:"abc"},
            {id:1,name:"Albert",companyName:"abc"}
    ]
    }
    gotoEmpDetails = () =>{
        this.props.navigation.navigate('EmployeeDetails')
    }
    componentDidMount(){
        // this.setState({isDataLoading : true})        
        // this.setState({employeeList:data[0],isDataLoading:false})
        // console.log(data[0])
    }
    render(){
        let data = NetworkManager.getEmployeeData()

        return(
            <View style = {{flex:1}}>
                <Text>Employee List</Text>
                <FlatList
                    style = {{flex:1}}
                    data={this.state.employeeList}
                    keyExtractor={item=>item.id}
                    renderItem={({item}) => {
                        return(
                            <EmployeeListItem emp={item} gotoDetails = {gotoEmpDetails}/>
                        )
                    }}
                />
            </View>
        )
    }
}