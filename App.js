
// import React from 'react';
// import { StyleSheet, Text, View, TouchableOpacity, Button, Image } from 'react-native'
// import {ImagePicker, Permissions, Constants} from 'expo';
// export default class App extends React.Component {
//   state = {
//     image: null
//   };
//   sendImage = () => {
//     console.log(this.state.image);
//     let photo = {
//       name : 'image.jpg',
//       type : 'image/jpg',
//       uri : this.state.image
//     }
//     var formData = new FormData();
//         formData.append('file', photo);
//     fetch('http://192.168.80.6:8080/recognizeFace',{
//       method: 'POST',
//       headers: {
//         'Content-Type': 'multipart/form-data',
//       },
//       body: formData
//       }).then(response => {
//         return response.json();
//       }).then(response => console.log(response))
//       .catch(err => {
//         console.log('err: ' + err)
//     });
//   }
//   render() {
//     let { image } = this.state;

//     return (
//       <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//         <Button
//           title="Pick an image from camera roll"
//           onPress={this._pickImage}
//         />
//         <Button onPress = {this.sendImage} title = "send"></Button>
//         {image &&
//           <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
//       </View>
//     );
//   }

//   componentDidMount() {
//     this.getPermissionAsync();
//   }

//   getPermissionAsync = async () => {
//     if (Constants.platform.android) {
//       const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
//       if (status !== 'granted') {
//         alert('Sorry, we need camera roll permissions to make this work!');
//       }
//     }
//   }

//   _pickImage = async () => {
//     let result = await ImagePicker.launchImageLibraryAsync({
//       mediaTypes: ImagePicker.MediaTypeOptions.All,
//       allowsEditing: true,
//       aspect: [4, 3],
//     });

//     console.log(result);

//     if (!result.cancelled) {
//       this.setState({ image: result.uri, data : result });
//     }
//   };
// }
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import AppNavigator from './navigation/Navigator'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
     <AppNavigator />
    );
  }
}

export default App;
