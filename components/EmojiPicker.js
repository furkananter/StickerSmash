import { Modal, View, Text, Pressable, StyleSheet } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

const EmojiPicker = ({isVisible, onClose, children}) => {
  return (
    <Modal animationType='slide' transparent={true} visible={isVisible} >
        <View style={styles.modalContent}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>Choose a Sticker</Text>
                <Pressable onPress={onClose}>
                    <MaterialIcons name="close" size={24} color="black" />
                </Pressable>
            </View>
            {children}
        </View>
    </Modal>
  )
}

export default EmojiPicker