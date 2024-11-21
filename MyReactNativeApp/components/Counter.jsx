import { useState } from "react";
import { Text, StyleSheet, Button } from "react-native";

const Counter = props => {
    const [counter, setCounter] = useState(0)
    const onIncrement = () => {
        setCounter(counter + 1)
    }
    return <>
        <Text style={styles.label}>Counter : {counter}</Text>
        <Button title="Increment" color="#841584" onPress={onIncrement} />
    </>
}
export { Counter }

const styles = StyleSheet.create({
    label: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})