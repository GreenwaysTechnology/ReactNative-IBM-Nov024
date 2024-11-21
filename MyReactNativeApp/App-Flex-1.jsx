import { StyleSheet, View } from "react-native";

const App = () => {
    return <View style={styles.container}>
        <View style={{ flex: 1, backgroundColor: 'red' }} />
        <View style={{ flex: 2, backgroundColor: 'yellow' }} />
        <View style={{ flex: 2, backgroundColor: 'blue' }} />
        <View style={{ flex: 3, backgroundColor: 'green' }} />
        <View style={{ flex: 3, backgroundColor: 'yellow' }} />
    </View>
}
export default App;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'pink'
    }
})