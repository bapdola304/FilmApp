import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { Body } from 'native-base';
import StarComponent from './Star.component'
class ListFilmComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, title: 'Avengers: Endgame', img: require('../assets/images/1.jpg') },
                { id: 2, title: 'Spider-Man: Far from Home', img: require('../assets/images/2.jpg') },
                { id: 3, title: 'Alita: Battle Angel', img: require('../assets/images/3.jpg') }
            ]
        };

    }
    render() {
        return (
            <Body style={{ marginTop: 20 }}>
                <Image source={this.props.data.img} style={{ width: 250, height: 370, borderRadius : 10 }} />
                <View>
                    <View style = {{flexDirection : 'row', justifyContent : 'center', marginTop : 20}}>
                        <Text style = {{color : '#fff', fontWeight : '500', fontSize : 16}}>{this.props.data.title}</Text>
                        <View style = {{flexDirection : 'row', justifyContent : 'center', marginLeft : 10}}>
                            <StarComponent />
                            <StarComponent />
                            <StarComponent />
                            <StarComponent />
                            <StarComponent />
                        </View>
                    </View>
                    <Text style = {{marginTop : 10, color : '#7B7C85', fontWeight : '500'}}>Bret Easton Ellis</Text>
                </View>
            </Body>
        );
    }
}

export default ListFilmComponent
