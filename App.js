import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Times from './src/Page/Times';
import Home from './src/Page/Home';
import Sorteado from './src/Page/Sorteado';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    
     
       <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name= 'Home' component={Home} options={{headerShown: false}}/>
                <Stack.Screen name= 'Times' component={Times} options={{headerShown: false}}/>
                <Stack.Screen name= 'Sorteado' component={Sorteado} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
      
    
  );
}

/* <StatusBar style={{color: "#FFF"}} />
options={{title: 'Finalizar Pedido', headerStyle:{backgroundColor: '#c0c0c0' }, headerTintColor: '#000'}}
*/
