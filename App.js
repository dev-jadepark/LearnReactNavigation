import React, {Children} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import {TouchableOpacity, View, Text} from 'react-native';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈',
            //Header 블록에 대한 스타일
            headerStyle: {
              backgroundColor: '#29b6f6',
            },
            //Hader의 텍스트, 버튼들 색상
            headerTintColor: '#ffffff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20,
            },
          }}
        />
        {/* <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={({route}) => ({
            title: `상세정보 - ${route.params.id}`,
          })}
        /> */}
        {/* <Stack.Screen name="Detail" component={DetailScreen} /> */}
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{
            headerBackVisible: false,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
