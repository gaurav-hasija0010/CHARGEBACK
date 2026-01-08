import { View, Text, StyleSheet, Pressable, Image } from "react-native";
import { colors } from "../core/theme/colors";
import { UTILITY_ICONS } from "../core/icons/utilityicons";

type Props = {
  label: string;
  value?: string;
  onPress?: () => void;
  showChevron?: boolean;
  leftIcon?: any;
};

export const ListRow = ({
  label,
  value,
  onPress,
  showChevron = false,
  leftIcon,
}: Props) => {
  return (
    <Pressable onPress={onPress} style={styles.row}>
      <Text style={styles.label}>{label}</Text>

      <View style={styles.right}>
        {leftIcon && (
          <Image source={leftIcon} style={styles.leftIcon} />
        )}

        {value && <Text style={styles.value}>{value}</Text>}

        {showChevron && (
          <Image
            source={UTILITY_ICONS.chevron}
            style={styles.chevronIcon}
          />
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  label: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  right: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
  },
  value: {
    fontSize: 16,
    color: colors.textSecondary,
  },
  leftIcon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
    marginRight: 4,
  },
  chevronIcon: {
    width: 14,
    height: 14,
    resizeMode: "contain",
    marginLeft: 4,
  },
});
