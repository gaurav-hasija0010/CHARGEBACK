import {
  ScrollView,
  View,
  StyleSheet,
  Text,
  Alert,
  Switch,
  Image,
} from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from "../../components/Header";
import { ListRow } from "../../components/ListRow";
import { colors } from "../../core/theme/colors";
import { useEditSubscriptionViewModel } from "./EditSubscription.viewmodel";
import { AppPickerModal } from "./AppPickerModal";
import { CategoryPickerModal } from "./CategoryPickerModal";
import { FrequencyPickerModal } from "./FrequencyPickerModal";
import { AmountPickerModal } from "./AmountPickerModal";
import { DatePickerModal } from "./DatePickerModal";
import { CATEGORY_ICONS } from "../../core/icons/categories";
import { APP_ICONS } from "../../core/icons/appicons";
import { DeleteConfirmModal } from "./DeleteConfirmModal";
import { UTILITY_ICONS } from "../../core/icons/utilityicons";


export const EditSubscriptionScreen = () => {
  const [state, dispatch] = useEditSubscriptionViewModel();

  const [showAppPicker, setShowAppPicker] = useState(false);
  const [showCategoryPicker, setShowCategoryPicker] = useState(false);
  const [showAmount, setShowAmount] = useState(false);
  const [showFrequency, setShowFrequency] = useState(false);
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [showDelete, setShowDelete] = useState(false);


  return (

    <SafeAreaView style={styles.safeArea}>

      <View style={styles.container}>
        <Header
          title="Edit Subscription"
          onBack={() => { }}
          onSave={() =>
            Alert.alert("Saved", "Subscription updated successfully")
          }
        />

        <ScrollView contentContainerStyle={styles.content}>
          {/* 🔹 APP SUMMARY CARD */}
          <View style={styles.appCard}>
            <View style={styles.appIcon}>
              {state.app && APP_ICONS[state.app] ? (
                <Image
                  source={APP_ICONS[state.app]}
                  style={styles.appImage}
                />
              ) : (
                <Image
                  source={UTILITY_ICONS.chooseapp}
                  style={styles.chooseAppImage}
                />
              )}
            </View>


            <View>
              <Text style={styles.appName}>{state.app}</Text>
              <Text style={styles.appPrice}>
                ${state.amount.toFixed(2)}
              </Text>
            </View>
          </View>

          {/* 🔹 APP / AMOUNT / CATEGORY */}
          <View style={styles.card}>
            <ListRow
              label="App"
              value={state.app ?? "Select"}
              showChevron
              onPress={() => setShowAppPicker(true)}
            />

            <ListRow
              label="Amount"
              value={`$${state.amount.toFixed(2)}`}
              showChevron
              onPress={() => setShowAmount(true)}
            />
            <ListRow
              label="Category"
              value={state.category}
              leftIcon={CATEGORY_ICONS[state.category]}
              showChevron
              onPress={() => setShowCategoryPicker(true)}
            />

          </View>

          {/*  DATE / FREQUENCY / REMIND / ACTIVE */}
          <View style={styles.card}>
            <ListRow
              label="Start Date"
              value={state.startDate.toDateString()}
              showChevron
              onPress={() => setShowDatePicker(true)}
            />

            <ListRow
              label="Frequency"
              value={state.frequency}
              showChevron
              onPress={() => setShowFrequency(true)}
            />

            <ListRow
              label="Remind Me"
              value={`${state.remindBeforeDays} days before`}
            />

            {/* ACTIVE TOGGLE */}
            <View style={styles.toggleRow}>
              <Text style={styles.toggleLabel}>Active</Text>
              <Switch
                value={state.isActive}
                onValueChange={() =>
                  dispatch({ type: "TOGGLE_ACTIVE" })
                }
                trackColor={{ false: "#E5E5EA", true: "#34C759" }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>

          {/*  DELETE */}
          <View style={styles.deleteCard} onTouchEnd={() => setShowDelete(true)}>
            <Text
              style={styles.deleteText}

            >
              Delete
            </Text>
          </View>

        </ScrollView>

        {/*  MODALS */}
        <AppPickerModal
          visible={showAppPicker}
          selected={state.app}
          onClose={() => setShowAppPicker(false)}
          onSelect={(app) =>
            dispatch({ type: "SET_APP", payload: app })
          }
        />

        <CategoryPickerModal
          visible={showCategoryPicker}
          selected={state.category}
          onClose={() => setShowCategoryPicker(false)}
          onSelect={(category) =>
            dispatch({ type: "SET_CATEGORY", payload: category })
          }
        />

        <AmountPickerModal
          visible={showAmount}
          value={state.amount}
          onClose={() => setShowAmount(false)}
          onChange={(v) =>
            dispatch({ type: "SET_AMOUNT", payload: v })
          }
        />

        <FrequencyPickerModal
          visible={showFrequency}
          value={state.frequency}
          onClose={() => setShowFrequency(false)}
          onSelect={(v) =>
            dispatch({ type: "SET_FREQUENCY", payload: v })
          }
        />

        <DatePickerModal
          visible={showDatePicker}
          value={state.startDate}
          onClose={() => setShowDatePicker(false)}
          onChange={(date) =>
            dispatch({ type: "SET_DATE", payload: date })
          }
        />

        <DeleteConfirmModal
          visible={showDelete}
          onCancel={() => setShowDelete(false)}
          onDelete={() => {
            setShowDelete(false);
            dispatch({ type: "RESET" }); 
          }}
        />

      </View>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 40,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  content: {
    padding: 16,
  },

  /* APP CARD */
  appCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  appIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,

    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  appIconText: {
    color: "#E50914",
    fontSize: 24,
    fontWeight: "700",
  },
  appImage: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
  appName: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  appPrice: {
    fontSize: 14,
    color: colors.textSecondary,
    marginTop: 2,
  },

  /* CARD */
  card: {
    backgroundColor: colors.card,
    borderRadius: 16,
    marginBottom: 16,
    overflow: "hidden",
  },

  /* TOGGLE */
  toggleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  toggleLabel: {
    fontSize: 16,
    color: colors.textPrimary,
  },

  /* DELETE */
  deleteCard: {
    backgroundColor: colors.card,
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
  },
  deleteText: {
    color: "#FF3B30",
    fontSize: 16,
    fontWeight: "600",
  },
  chooseAppImage: {
    width: 22,
    height: 22,
    resizeMode: "contain",

  },

});
