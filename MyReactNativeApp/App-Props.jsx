import { View, Text, StyleSheet } from "react-native";
import { Welcome } from "./components/Welcome";


function App() {
    return <View style={styles.container}>
        <Welcome message='Welcome'/>
        <Welcome message='Hello'/>
        <Welcome message='Hai'/>

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