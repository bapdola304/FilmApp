import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList } from 'react-native';
const { width, height } = Dimensions.get('screen');
import { Container, Header, Content, Tab, Tabs } from 'native-base';
import ListFilmComponent from '../components/ListFilm.component';
// import Carousel from "react-native-carousel-control";
import Carousel from 'react-native-anchor-carousel';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, title: 'Avengers: Endgame', img: require('../assets/images/1.jpg') },
                { id: 2, title: 'Spider-Man: Far from Home', img: require('../assets/images/2.jpg') },
                { id: 3, title: 'Alita: Battle Angel', img: require('../assets/images/3.jpg') }
            ]
        };
        this._carousel = {}
    }
    renderItem = ({item, index}) => {
        return (
            <ListFilmComponent  data = {item}/>)
    };

    render() {
        const tabOptions = {
            tabStyle: { backgroundColor: '#3D3D4B',  elevation : 0},
            activeTabStyle: { backgroundColor: '#3D3D4B' }
        }
        return (
            <Container style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.textTitle}>YOUR FILMS</Text>
                </View>
                <Container>
                    <Tabs tabBarUnderlineStyle={{ backgroundColor: '#FDF051'}} locked={true}>
                        <Tab heading="Tab1" {...tabOptions} style={{ backgroundColor: '#3D3D4B'}}>
                            <Carousel style={styles.carousel}
                                data={this.state.data}
                                renderItem={this.renderItem}
                                itemWidth={width/1.4}
                                ref={(c) => {
                                    this._carousel = c;
                                }}
                            />
                        </Tab>
                        <Tab heading="Tab2" {...tabOptions} style={{ backgroundColor: '#3D3D4B' }}>
                            <Text>tab2</Text>
                        </Tab>
                        <Tab heading="Tab3" {...tabOptions} style={{ backgroundColor: '#3D3D4B' }}>
                            <Text>tab3</Text>
                        </Tab>
                    </Tabs>
                </Container>
            </Container>
        );
    }
}
HomeScreen.navigationOptions = {
    title: '',
    header: null
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#3D3D4B",
        height: '100%',
        paddingHorizontal: 10
    },
    header: {
        marginTop: '10%'
    },
    textTitle: {
        fontSize: 30,
        color: '#fff',
        fontWeight: 'bold',
    }
});
export default HomeScreen;
