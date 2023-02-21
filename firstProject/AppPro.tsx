import { StyleSheet, Text, useColorScheme, View } from "react-native"

function AppPro(): JSX.Element {
    const isDarkMode = useColorScheme() === 'light';
    return (
        <View style={styles.container}>
            <Text style={isDarkMode ? styles.darkText : styles.whiteText}>Hello World</Text>
            <Text>Hello</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    whiteText: {
        color: '#ffffff'
    },
    darkText: {
        color: 'black'
    }
});

export default AppPro;