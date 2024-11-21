import { View, Text, StyleSheet } from "react-native";


function App() {
    console.log('app')
    return <View style={styles.container}>
        <Text style={styles.label}>Welcome to React Native</Text>
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    label: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})