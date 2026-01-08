import { Modal, View, Text, StyleSheet, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { colors } from "../../core/theme/colors";

type Props = {
  visible: boolean;
  value: Date;
  onClose: () => void;
  onChange: (date: Date) => void;
};

export const DatePickerModal = ({
  visible,
  value,
  onClose,
  onChange,
}: Props) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Start Date</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.done}>Done</Text>
            </Pressable>
          </View>

          {/* Picker */}
          <DateTimePicker
            value={value}
            mode="date"
            display="spinner"
            onChange={(_, selectedDate) => {
              if (selectedDate) {
                onChange(selectedDate);
              }
            }}
            style={styles.picker}
          />
        </View>
      </View>
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
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingBottom: 24,
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  done: {
    fontSize: 16,
    color: colors.accent,
  },
  picker: {
    backgroundColor: colors.card,
  },
});
