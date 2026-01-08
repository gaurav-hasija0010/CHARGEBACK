import { View, Text, StyleSheet, Pressable } from "react-native";
import { colors } from "../core/theme/colors";

type Props = {
  title: string;
  onBack?: () => void;
  onSave?: () => void;
};

export const Header = ({ title, onBack, onSave }: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onBack}>
      </Pressable>

      <Text style={styles.title}>{title}</Text>

      <Pressable onPress={onSave}>
        <Text style={[styles.action, { color: colors.accent }]}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    backgroundColor: colors.card,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  action: {
    fontSize: 16,
    color: colors.accent,
  },
});
