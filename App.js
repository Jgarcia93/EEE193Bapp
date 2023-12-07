import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ListScreen from './Screens/ListScreen';
import MapScreen from './Screens/MapScreen';
import UsersScreen from './Screens/UsersScreen';
import { STContext } from './STContext';
import { useState, useEffect } from 'react';

const Tab = createBottomTabNavigator();

export default function App() {
  const [fetchTimerID, setFetchTimerID] = useState(null);
  const [receptacleData, setReceptacleData] = useState([]);
  useEffect(() => {
      timerID = setInterval(() => {
        fetch("https://eee193bst.pythonanywhere.com/api/receptacle/latestAll",
        {
            method: 'GET',
            headers:  {   
                          'X-API-KEY': 'D0EOEoDhPoh3XHGK'
                      },
        })
          .then(resp => { 
            if (resp.status === 200)
              return resp.json(); 
            else throw('Error fetching receptacle data: ' + resp.status);
          })
          .then(jsonResp => { 
            setReceptacleData(jsonResp);
            console.log(jsonResp); 
          })
          .catch(error => { console.log('Could not complete API Key validation: ' + error); })
      },3000);
      setFetchTimerID(timerID);
  },[]);

  return (
    <STContext.Provider value={{receptacleData}}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="List" component={ListScreen} />
          <Tab.Screen name="Map" component={MapScreen} />
          <Tab.Screen name="Users" component={UsersScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </STContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
