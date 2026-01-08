import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  FlatList,
  Image,
} from "react-native";

import { colors } from "../../core/theme/colors";
import { CATEGORY_ICONS } from "../../core/icons/categories";

const CATEGORIES = [
  { key: "Subscription" },
  { key: "Utility" },
  { key: "Card Payment" },
  { key: "Loan" },
  { key: "Rent" },
];

type Props = {
  visible: boolean;
  selected: string;
  onSelect: (category: string) => void;
  onClose: () => void;
};

export const CategoryPickerModal = ({
  visible,
  selected,
  onSelect,
  onClose,
}: Props) => {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.sheet}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Category</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.done}>Done</Text>
            </Pressable>
          </View>

          {/* List */}
          <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.key}
            renderItem={({ item }) => (
              <Pressable
                style={styles.row}
                onPress={() => {
                  onSelect(item.key);
                  onClose();
                }}
              >
                <View style={styles.left}>
                  {/*  IMAGE ICON */}
                  <Image
                    source={CATEGORY_ICONS[item.key]}
                    style={styles.icon}
                  />

                  <Text style={styles.text}>{item.key}</Text>
                </View>

                {selected === item.key && (
                  <Text style={styles.check}>✓</Text>
                )}
              </Pressable>
            )}
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
    maxHeight: "70%",
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
  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  /*  IMAGE STYLE */
  icon: {
    width: 22,
    height: 22,
    resizeMode: "contain",
  },
  text: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  check: {
    fontSize: 16,
    color: colors.accent,
    fontWeight: "600",
  },
});
