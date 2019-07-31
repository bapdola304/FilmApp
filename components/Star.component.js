import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';

class StarComponent extends Component {
  render() {
    return (
        <Image source = {require('../assets/images/star_filled.png')} style={{ width: 18, height: 18,marginRight : 5 }} />
    );
  }
}

export default StarComponent;
