import { View, Text, Pressable, StyleSheet } from 'react-native'


const Button = ({ label }) => {
    return (
        <View style={styles.buttonContainer}>
            <Pressable 
            style={styles.button}
            onPress= {() => {alert('Button pressed')}}
            >
                <Text style={styles.buttonLabel}>{label}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer : {
        width: 320,
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    button: {
        width:'100%',
        height:'100%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },
    buttonIcon: {
        paddingRight: 8,
    },
    buttonLabel: {
        color: '#fff',
        fontSize: 16,
    }

}) 

export default Button