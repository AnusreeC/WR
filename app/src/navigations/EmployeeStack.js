import { createStackNavigator } from '@react-navigation/stack';
import EmployeeHomeScreen from '../Screen/EmployeeHomeScreen';
import EmployeeDetailsScreen from '../screens/EmployeeDetailsScreen';

const Stack = createStackNavigator();

function eHomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="EmployeeHome" component={EmployeeHomeScreen} />
      <Stack.Screen name="EmployeeDetails" component={EmployeeDetailsScreen} />
    </Stack.Navigator>
  );
}