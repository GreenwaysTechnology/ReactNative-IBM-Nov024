import { Text, StyleSheet } from "react-native";

export const Welcome = props => {
    return <Text style={styles.label}>{props.message}  React Native </Text>
}

const styles = StyleSheet.create({
    label: {
        color: 'blue',
        fontWeight: 'bold',
        fontSize: 20
    }
})