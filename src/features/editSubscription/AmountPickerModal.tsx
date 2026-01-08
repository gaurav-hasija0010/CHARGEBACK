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
  value: number;
  onClose: () => void;
  onChange: (value: number) => void;
};

const KEYS = ["1","2","3","4","5","6","7","8","9","0"];

export const AmountPickerModal = ({
  visible,
  value,
  onClose,
  onChange,
}: Props) => {
  const append = (n: string) => {
    const next = Number(`${value}${n}`);
    onChange(next);
  };

  const clear = () => onChange(0);

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Amount</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.done}>Done</Text>
            </Pressable>
          </View>

          {/* Display */}
          <View style={styles.display}>
            <Text style={styles.dollar}>$</Text>
            <Text style={styles.amount}>{value}</Text>
          </View>

          {/* Keypad */}
          <View style={styles.keypad}>
            {KEYS.map((k) => (
              <Pressable
                key={k}
                style={styles.key}
                onPress={() => append(k)}
              >
                <Text style={styles.keyText}>{k}</Text>
              </Pressable>
            ))}

            <Pressable style={[styles.key, styles.clear]} onPress={clear}>
              <Text style={styles.keyText}>C</Text>
            </Pressable>
          </View>
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
  display: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 16,
  },
  dollar: {
    fontSize: 28,
    marginRight: 4,
  },
  amount: {
    fontSize: 28,
    fontWeight: "600",
  },
  keypad: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 12,
  },
  key: {
    width: 80,
    height: 48,
    borderRadius: 8,
    backgroundColor: "#F2F2F7",
    justifyContent: "center",
    alignItems: "center",
  },
  clear: {
    backgroundColor: "#FFD1D1",
  },
  keyText: {
    fontSize: 18,
    fontWeight: "500",
  },
});
