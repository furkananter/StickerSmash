import { Ionicons } from '@expo/vector-icons';
import { View, StyleSheet ,TouchableOpacity} from 'react-native'


const CircleButton = ({onPress}) => {
  return (
    <View style={styles.circleButtonContainer}>
        <TouchableOpacity onPress={onPress} style={styles.circleButton}>
            <Ionicons name="add" size={38} color="black" />
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  circleButtonContainer: {
    width: 84,
    height: 84,
    marginHorizontal: 60,
    borderWidth: 4,
    borderColor: '#ffd33d',
    borderRadius: 42,
    padding: 3,
  },
  circleButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 42,
    backgroundColor: '#fff',
  },
});

export default CircleButton