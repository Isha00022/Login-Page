import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput,Button} from 'react-native';
import React,{useState} from 'react';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function App() {
  const [name,setName]= useState('User');
  const [person,setPerson]=useState({namee:'Isha',age:17});
  const clickhandler= () => {
    setName('Isha'),
    setPerson({namee:'Isha Gupta',age:19})
  };
  return (
    <View style={styles.container}>
      {/* <View style= {styles.header}> 
         <Text style={styles.boldText}>Hello World!</Text>
      </View>
      <View style={styles.body}>
          <Text style={styles.boldText}>Lorem ipsum dolor sit amet consectetur.</Text>
          <Text style={styles.boldText}>Lorem ipsum dolor sit amet consectetur.</Text>
          <Text style={styles.boldText}>Lorem ipsum dolor sit amet consectetur.</Text>
      </View> */}
       <View>
        <Text style={styles.boldText}>Hi {name}!</Text>
        {/* <Text>Hi my name is {person.namee} and I am {person.age} years old.</Text> */}
      </View>
      <View style={styles.form}>
       <View>
          <Text style={styles.letters}>Enter Name:</Text>
          <TextInput
            style={styles.input}
            placeholder='e.g. John Doe'
            onChangeText={(val) => setName(val)}
          />
       </View>
       <View>
          <Text style={styles.letters}>Email:</Text>
          <TextInput
            style={styles.input}
            placeholder='e.g. johndoe@gmail.com'
          />
       </View>
       <View>
          <Text style={styles.letters}>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder='e.g. eu76#o'
            textContentType={'password'}
            secureTextEntry={true}
          />
       </View>
     
       <View style={styles.buttonContainer}>
          <Button title='Submit' onPress={clickhandler}/>
       </View>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    borderColor:'pink',
    padding:20,
  },
  boldText: {
    fontWeight:'bold',
    fontSize:50,
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
    // fontWeight:'bold',
  },
  input:{
    borderWidth:1,
    borderColor:'grey',
    padding:8,
    borderRadius:8,
    width:300,
    margin:10,
    backgroundColor:'#f0c7d3',

  },
  buttonContainer:{
    marginTop:20,
    width:70,
    alignContent:'center'
  },
  letters:{
     fontSize:18,
  },
  form:{
     marginTop:60,
  },
  
});
