import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image
} from 'react-native';
import { Header } from 'react-native-elements';
import Constants from 'expo-constants';
import dictionary from './database';
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
     text:'',
      word: [],
      type: [],
      defination: [],
    };
  }

  render() {
    return (
      <View>
        <Header
          centerComponent={{
            text: 'Pocket Dictionary',
            style: { fontSize: 23, color: 'white' },
          }}
        />
        <TextInput
          style={styles.input}
          onChangeText={(text) => {
            this.setState({
                    text: text,
                     word:'loading....' ,
                     category:'getting...',
                     defination:'finding.....'
            });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.opacity}
          onPress={() => {
            this.setState({
                         word: dictionary[this.state.text]['word'],
              defination: dictionary[this.state.text]['definition'],
              category: dictionary[this.state.text]['lexicalCategory']
            });
          }}>
          <Text>Search</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20 ,color:'blue'}}> Word:  {this.state.word}</Text>
        <Text style={{ fontSize: 20 ,color:'blue'}}>Type:   {this.state.category}</Text>
        <Text style={{ fontSize: 20 ,color:'blue'}}>Defination:-</Text>{' '}
        <Text style={{ fontSize: 20, color: 'red' }}>
          {this.state.defination}
        </Text>
          <Text style={styles.buton}> {this.state.word}</Text>
      <Image style={styles.img} source={require('./abcd.png')} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  input: {
    width: '80%',
    height: 40,
    marginTop: 40,
    borderWidth: 4,
    alignSelf: 'center',
    outline: 'none',
    textAlign: 'center',
  },
  opacity: {
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 40,
    backgroundColor: 'blue',
    width: 100,
    marginLeft: 100,
    marginTop: 10,
  },
  buton:{
    justifyContent:'center',
    borderRadius:40,
    textAlign:'center',
    fontSize:21,
    color:'white',
    backgroundColor:'green',
    width:'30%',
    marginLeft:120
  },
  img:{
    width:30,
    height:30,
     marginLeft:70,
     marginTop:-30
  }
});
