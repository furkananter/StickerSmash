import { AntDesign } from '@expo/vector-icons'
import { View, Text, Pressable, StyleSheet } from 'react-native'

const Button = ({ label, theme, onPress }) => {
    if (theme === 'primary') {
        return(
                <View style = {[styles.buttonContainer, { borderWidth: 4, borderColor: "#ffd33d", borderRadius: 18 }]} >
                <Pressable
                    style={[styles.button, {backgroundColor: '#fff'}]}
                    onPress={onPress}
                >
                    <AntDesign
                        name="camerao"
                        size={24}
                        color="#25292e"
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, { color: "#25292e" }]}>{label}</Text>
                </Pressable>
            </View >
            )
        }

        return(
            <View style={styles.buttonContainer}>
                <Pressable style={styles.button} onPress={onPress}>
                    <Text style={styles.buttonLabel}>{label}</Text>
                </Pressable>
            </View>
        )
        
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: 320,
        height: 58,
        padding: 3,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    button: {
        width: '100%',
        borderRadius: 10,
        height: '100%',
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