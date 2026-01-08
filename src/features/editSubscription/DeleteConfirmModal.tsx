import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { colors } from "../../core/theme/colors";

type Props = {
  visible: boolean;
  onCancel: () => void;
  onDelete: () => void;
};

export const DeleteConfirmModal = ({
  visible,
  onCancel,
  onDelete,
}: Props) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          <Text style={styles.title}>Delete Subscription</Text>
          <Text style={styles.subtitle}>
            Are you sure you want to delete this subscription?
          </Text>

          <Pressable style={styles.deleteBtn} onPress={onDelete}>
            <Text style={styles.deleteText}>Delete</Text>
          </Pressable>

          <Pressable style={styles.cancelBtn} onPress={onCancel}>
            <Text style={styles.cancelText}>Cancel</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "rgba(0,0,0,0.35)",
  },
  sheet: {
    backgroundColor: colors.card,
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    textAlign: "center",
    color: colors.textPrimary,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    textAlign: "center",
    color: colors.textSecondary,
    marginBottom: 16,
  },
  deleteBtn: {
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#FF3B30",
    marginBottom: 10,
  },
  deleteText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
  cancelBtn: {
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: "#F2F2F7",
  },
  cancelText: {
    fontSize: 16,
    textAlign: "center",
    color: colors.textPrimary,
  },
});
