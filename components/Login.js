import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native'
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
class Login extends Component {
    render() {
        return (
            <View>
                <Image source={logo} style={styles.img} />

                <View style={styles.container}>
                    <Form>
                        <Item floatingLabel>
                            <Label>Username</Label>
                            <Input />
                        </Item>
                        <Item floatingLabel last>
                            <Label>Password</Label>
                            <Input />
                        </Item>
                    </Form>
                    <View style={styles.wrap}>
                        <View style={styles.wrapcheckbox}>
                            <CheckBox />
                            <Text style={styles.text}>Keep me signed in</Text>
                        </View>
                        <View style={styles.forgotpass}>
                            <Text style={styles.text}>Forgot password</Text>
                        </View>
                    </View>
                    <Button
                        onPress={() => alert('submit')}
                        title="Login"
                        color="#48d9d9"
                        accessibilityLabel="Learn more about this purple button"
                    />
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        paddingTop: 80,
        paddingLeft: 30,
        paddingRight: 30,

    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderBottomWidth: 2,
        borderBottomColor: 'red',
        width: 300
    },
    textInput: {
        // height: 60,
        // paddingLeft: 6,
        // width: 300,
        marginTop: 10,
        marginBottom: 20
    },
    text: {
        fontFamily: 'Roboto',
        fontSize: 18,
        fontWeight: 'bold'
    },
    img: {
        width: '100%'
    },
    wrap : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingBottom : 20

    },
    wrapcheckbox : {
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems : 'center',
    },
    forgotpass : {
        marginRight : 0,
        alignItems : 'center',
        color : '#48d9d9'
    }
})
export default Login;