import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" />
          <Tab.Screen name="Settings"/>
        </Tab.Navigator>
      </NavigationContainer>
    );
  }