import React from "react";
import { createAppContainer, createDrawerNavigator, createStackNavigator } from "react-navigation";
import SplashScreen from "./Components/SplashScreen";
import Home from "./Components/Home";
import global from "./Components/Common/global";

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: global.white,
    borderBottomColor: global.white,
    borderBottomWidth: 0,
    shadowOpacity: 0,
    shadowOffset: {
      height: 0
    },
    shadowRadius: 0,
    elevation: 0
  },
  headerTintColor: global.white,
  headerTitleStyle: {
    fontSize: 12
  }
};

const AppNavigator = createStackNavigator(
  {
    SplashScreen: { screen: SplashScreen },
    Home: { screen: Home }
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: defaultNavigationOptions
  }
);

export const AppDrawerStack = createDrawerNavigator(
  { AppNavigator: AppNavigator },
  {
    drawerWidth: 300,
    drawerLockMode: "locked-closed"
    // contentComponent: props => <CustomSideMenu {...props} />
  }
);

export default createAppContainer(AppDrawerStack);
