import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, View, Text, Button } from 'react-native'

//create Stack Object
const Stack = createNativeStackNavigator()


//Screen 
const HomeScreen = (props) => {

    return <View style={styles.container}>
        <Text>Home Screen</Text>
        <Button title="GoToProfile" onPress={() => {
            props.navigation.navigate('Profile')
        }} />
    </View>
}
const ProfileScreen = () => {
    return <View style={styles.container}>
        <Text>Profile Screen</Text>
    </View>
}

function App() {

    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
    </NavigationContainer>

}

export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center'
    }
})