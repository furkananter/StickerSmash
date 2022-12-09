import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet , Pressable } from 'react-native'

const CircleButton = ({onPress}) => {
  return (
    <View style={styles.CircleButtonContainer}>
        <Pressable onPress={onPress} style={styles.button}>
            <Ionicons name="add" size={24} color="black" />
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    CircleButtonContainer: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})

export default CircleButton