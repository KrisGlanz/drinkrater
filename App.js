import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as SplashScreen from 'expo-splash-screen';
import {useState} from 'react';
import * as WebBrowser from 'expo-web-browser';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ListView from 'deprecated-react-native-listview';


import Post from './Post';
import data from './data.json';


SplashScreen.preventAutoHideAsync();
setTimeout(SplashScreen.hideAsync, 2000);

const homeImage = require('./assets/Images/Tiki.jpg')
const bushwood = require('./assets/Images/bushwood.jpg')
const German_Beer = require('./assets/Images/German_Beer.jpg')

const dataSource = new ListView.DataSource({
  rowHasChanged: (r1,r2) => r1 !== r2,
});

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
    <Text style={styles.text}>Enter the Lounge!</Text>    
    </TouchableOpacity>
    );
  }


function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={homeImage} />
      {renderButton('https://www.threedotschicago.com/thebambooroom/')}
    </View>
  );
}

function BushwoodScreen({ }) {
  const [show, setShow] = useState(true);
  const [rate, setRate] = useState(rate);
  
  state = {
    dataSource: dataSource.cloneWithRows(data.posts),
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={bushwood} />
      <Text>Rate the drink from 1-5 Stars</Text>
      <TextInput
        style={styles.input}
        placeholder="How many stars?"
        onChangeText={newRate => {setRate(newRate); setShow(true);}}
        />
        <Pressable style={styles.button}
        onPress={() => {setRate((parseInt(rate) + 12)/4); setShow(false); }}>
        <Text style={styles.text}>Rate the drink</Text>
        </Pressable>
        <Text style={styles.displayText}>
        {show ? '' : "The current rating is now: " + rate + " Stars" }
      </Text>
      <ListView
        dataSource={this.state.dataSource}
        renderRow={post => <Post {...post} />}
        style={styles.list}
        contentContainerStyle={styles.content}/>
    </View>
  );
}

function GermanScreen({ }) {
  const [show, setShow] = useState(true);
  const [rate, setRate] = useState(rate);
  
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={German_Beer} />
      <Text>Rate the drink from 1-5 Stars</Text>
      <TextInput
        style={styles.input}
        placeholder="How many stars?"
        onChangeText={newRate => {setRate(newRate); setShow(true);}}
        />
        <Pressable style={styles.button}
        onPress={() => {setRate((parseInt(rate) + 12)/4); setShow(false); }}>
        <Text style={styles.text}>Rate the drink</Text>
        </Pressable>
        <Text style={styles.displayText}>
        {show ? '' : "The current rating is now: " + rate + " Stars" }
      </Text>
    </View>
  );
}



const Drawer = createDrawerNavigator();

function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'
        screenOptions={{
          headerStyle: {
            backgroundColor: '#00ccff',
          },
          drawerStyle : {
            backgroundColor: '#00ccff',
          }
        }}
      >
        <Drawer.Screen name="The Tiki Lounge" component={HomeScreen} />
        <Drawer.Screen name="Bushwood Beer" component={BushwoodScreen} />
        <Drawer.Screen name="German Beer" component={GermanScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebd6a0',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#563822'
  },
  image: {
    width: 300,
    height: 500,
    borderRadius: 20,
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
  input : {
    height: 70,
    width: 250,
    textAlign: 'center',
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
  },
  list: {
    backgroundColor: '#f0f3f4',
    paddingTop: 5,
    paddingBottom: 5,
    flex: 1
  },
});
