import { View, StyleSheet } from "react-native";
import { Counter } from "./components/Counter";


function App() {
    return <View style={styles.container}>
        <Counter />
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})