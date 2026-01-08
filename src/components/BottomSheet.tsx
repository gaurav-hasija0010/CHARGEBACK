import { Modal, View, StyleSheet, Pressable } from "react-native";
import { colors } from "../core/theme/colors";

type Props = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export const AppBottomSheet = ({ visible, onClose, children }: Props) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      onRequestClose={onClose}
    >
      <Pressable style={styles.overlay} onPress={onClose}>
        <View style={styles.sheet}>
          {children}
        </View>
      </Pressable>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  sheet: {
    backgroundColor: colors.card,
    padding: 16,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
});
