import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button} from 'react-native-elements';
import Spacer from '../components/Spacer';

const SignupScreen = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return(
        <View style={styles.container}>  
            <Spacer>
                <Text h3 style={{textAlign: 'center'}}>Sign Up for NNH</Text> 
            </Spacer>
            <Spacer>
                <Input 
                label="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                autoCorrect={false}
                />
            </Spacer>
            <Spacer>
                <Input 
                secureTextEntry
                label="Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false} />
            </Spacer>
            <Spacer>
                <Button title = "Sign Up" />
            </Spacer>
            <Button
                title="Go to Signin"
                onPress={() => navigation.navigate('Signin')}
            />
              <Button 
                title="Go to main flow"
                onPress={() => navigation.navigate('mainFlow')}
            />
        </View>
    );
};

SignupScreen.navigationOptions = () => {
    return {
        headerShown: false,
    };
};


const styles = StyleSheet.create({
    container: {
        borderWidth: 5, 
        borderColor: 'red',
        flex: 1,
        justifyContent: 'center', 
        marginBottom: 200
    }
});

export default SignupScreen;