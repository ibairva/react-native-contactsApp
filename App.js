import 'react-native-gesture-handler';
import React, {Component} from 'react';
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import myReducer from "./src/reducers/myReducer";
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Header from './src/components/header';
import GetDataHome from './src/components/GetDataHome';
import PostScreen from './src/components/PostScreen';
import { Icon } from 'react-native-elements';
import rootSaga from './src/sagas/saga';



const sagaMiddleware = createSagaMiddleware();

const store = createStore(myReducer, applyMiddleware(sagaMiddleware));

// const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

sagaMiddleware.run(rootSaga);

// function MyStack() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Home" component={GetDataHome} />
//       <Stack.Screen name="AddContact" component={PostScreen} />
//     </Stack.Navigator>
//   );
// }
function MyTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
        name="Home" 
        component={GetDataHome} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name='home' color={color} size={size} />
          ),
        }} />

      <Tab.Screen 
        name="AddContact" 
        component={PostScreen}
        options={{
        tabBarIcon: ({ color, size }) => (
          <Icon name='contacts' color={color} size={size} />
        ),
      }} />
    </Tab.Navigator>
  );
}


class App extends Component {

    render(){     
      return (
      <>
      <Provider store={store}>
      <Header />
          <NavigationContainer>
            {/* <MyStack /> */}
            <MyTab />
          </NavigationContainer>   
      </Provider>
    </>
      );
    }
}
export default App;

