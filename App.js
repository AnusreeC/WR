import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import EmployeeHomeScreen from './app/src/screens/EmployeeHomeScreen';
export default class App extends React.Component{
    render(){
        return(
            <NavigationContainer>
                <EmployeeHomeScreen/>
            </NavigationContainer>
        )
    }
}
