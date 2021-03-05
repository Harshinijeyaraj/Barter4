import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import WelcomeScreen from './components/WelcomeScreen'
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator}from 'react-navigation-tabs';

import TraderScreen from './screens/TraderScreen';
import BuyerScreen from './screens/BuyerScreen';



export default function App() {
  return (
   <WelcomeScreen/>
  );
}

const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TraderScreen},
  Search: {screen: BuyerScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "Trader"){
        return(
          <Image
          source={require("./assets/trader.jpg")}
          style={{width:40, height:40}}
        />
        )

      }
      else if(routeName === "Buy"){
        return(
          <Image
          source={require("./assets/buy.jpg")}
          style={{width:40, height:40}}
        />)

      }
    }
  })
}
);

const switchNavigator = createSwitchNavigator({
LoginScreen:{screen: LoginScreen},
TabNavigator:{screen: TabNavigator}
})

const AppContainer =  createAppContainer(switchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});