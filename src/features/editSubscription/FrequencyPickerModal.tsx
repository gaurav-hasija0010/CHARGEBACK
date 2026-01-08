import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
} from "react-native";
import { colors } from "../../core/theme/colors";
import { Frequency } from "./EditSubscription.state";

const OPTIONS = ["Weekly", "Monthly", "Annually"] as const;

type Props = {
  visible: boolean;
  value: string;
  onClose: () => void;
  onSelect: (v: Frequency) => void;
};

export const FrequencyPickerModal = ({
  visible,
  value,
  onClose,
  onSelect,
}: Props) => {
  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Frequency</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.done}>Done</Text>
            </Pressable>
          </View>

          {OPTIONS.map((opt) => (
            <Pressable
              key={opt}
              style={styles.row}
              onPress={() => {
                onSelect(opt);
                onClose();
              }}
            >
              <Text style={styles.text}>{opt}</Text>
              {value === opt && <Text style={styles.check}>✓</Text>}
            </Pressable>
          ))}
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
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
  done: {
    fontSize: 16,
    color: colors.accent,
  },
  row: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 16,
  },
  check: {
    color: colors.accent,
    fontWeight: "600",
  },
});
