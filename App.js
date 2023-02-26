import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SplashScreen from 'expo-splash-screen';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';

SplashScreen.preventAutoHideAsync();
  setTimeout(SplashScreen.hideAsync, 2000);

const homeImage = require('./assets/Images/art.png')
const mileImage = require('./assets/Images/mile.png')
const pierImage = require('./assets/Images/pier.png')
const waterImage = require('./assets/Images/water.png')
const willisImage = require('./assets/Images/willis.png')


 function handleButtonPress(url) {
  return (
    WebBrowser.openBrowserAsync(url)
    );
  } 

  function renderButton(url) {
    return (
    <TouchableOpacity
      onPress={() => handleButtonPress(url)}
      style={styles.button}
    >
    <Text style={styles.text}>More Infomation</Text>    
    </TouchableOpacity>
    );
  }


function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}  source={homeImage}/>
      {renderButton('https://www.artic.edu/')}
    </View>
  );
}

function MagnificentMileScreen({}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}  source={mileImage}/>
      {renderButton('https://www.themagnificentmile.com/')}
    </View>
  );
}

function NavyPierScreen({}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}  source={pierImage}/>
      {renderButton('https://navypier.org/')}
    </View>
  );
}

function WaterTowerScreen({}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}  source={waterImage}/>
      {renderButton('https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html')}
    </View>
  );
}

function WillisTowerScreen({}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image}  source={willisImage}/>
      {renderButton('https://www.willistower.com/')}
    </View>
  );
}


const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Art Institute of Chicago" component={HomeScreen} />
        <Drawer.Screen name="Magnificent Mile" component={MagnificentMileScreen} />
        <Drawer.Screen name="Navy Pier" component={NavyPierScreen} />
        <Drawer.Screen name="Water Tower" component={WaterTowerScreen} />
        <Drawer.Screen name="Willis Tower" component={WillisTowerScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 240,
    height: 360,
  },
  button: {
    margin: 10,
    backgroundColor: '#00ccff',
    color: '#fff',
    borderRadius: 3,
    padding: 10,
    paddingRight: 30,
    paddingLeft: 30,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
});
