import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Login from "./components/Login";
import Users from "./components/Users";
import Chat from "./components/Chat";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Users: {
      screen: Users
    },
    Chat: {
      screen: Chat
    }
  },
  {
    initialRouteName: "Login",
    navigationOptions: {
      headerTitle: "Chat!"
    }
  }
);

const AppContainer = createAppContainer(RootStack);
