import {
  Modal,
  View,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
  FlatList,
  Image,
} from "react-native";
import { useMemo, useState } from "react";
import { colors } from "../../core/theme/colors";
import { APP_ICONS } from "../../core/icons/appicons";

const APPS = [
  "Netflix",
  "Spotify",
  "New York Times",
  "Hulu",
  "Apple",
  "Amazon",
];

type Props = {
  visible: boolean;
  selected?: string | null;
  onSelect: (app: string) => void;
  onClose: () => void;
};

export const AppPickerModal = ({
  visible,
  selected,
  onSelect,
  onClose,
}: Props) => {
  const [query, setQuery] = useState("");

  const filteredApps = useMemo(() => {
    if (!query) return APPS;
    return APPS.filter((app) =>
      app.toLowerCase().includes(query.toLowerCase())
    );
  }, [query]);

  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View style={styles.overlay}>
        <View style={styles.sheet}>

          
          {/* HEADER */}
          <View style={styles.header}>
            <Text style={styles.title}>App</Text>
            <Pressable onPress={onClose}>
              <Text style={styles.done}>Done</Text>
            </Pressable>
          </View>
          

          {/* SEARCH */}
          <TextInput
            placeholder="Search"
            placeholderTextColor={colors.textSecondary}
            style={styles.search}
            value={query}
            onChangeText={setQuery}
          />

          {/* LIST */}
          <FlatList
            data={filteredApps}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <Pressable
                style={styles.row}
                onPress={() => {
                  onSelect(item);
                  onClose();
                }}
              >
                <View style={styles.left}>
                  {/* 🔹 APP ICON */}
                  <Image
                    source={APP_ICONS[item]}
                    style={styles.icon}
                  />

                  <Text style={styles.rowText}>{item}</Text>
                </View>

                {selected === item && (
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
    maxHeight: "85%",
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
  search: {
    margin: 16,
    padding: 12,
    borderRadius: 10,
    backgroundColor: "#F2F2F7",
    fontSize: 16,
    color: colors.textPrimary,
  },
  row: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: colors.divider,
  },
  left: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  icon: {
    width: 26,
    height: 26,
    resizeMode: "contain",
  },
  rowText: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  check: {
    color: colors.accent,
    fontSize: 16,
    fontWeight: "600",
  },
});
