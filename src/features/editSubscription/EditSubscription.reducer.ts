import { EditSubscriptionIntent } from "./EditSubscription.intent";
import {
  EditSubscriptionState,
  DEFAULT_EDIT_SUBSCRIPTION_STATE,
} from "./EditSubscription.state";

export const reducer = (
  state: EditSubscriptionState,
  intent: EditSubscriptionIntent
): EditSubscriptionState => {
  switch (intent.type) {
    case "SET_APP":
      return { ...state, app: intent.payload };

    case "SET_AMOUNT":
      return { ...state, amount: intent.payload };

    case "SET_CATEGORY":
      return { ...state, category: intent.payload };

    case "SET_DATE":
      return { ...state, startDate: intent.payload };

    case "SET_FREQUENCY":
      return { ...state, frequency: intent.payload };

    case "TOGGLE_ACTIVE":
      return { ...state, isActive: !state.isActive };

    case "RESET":
      return { ...DEFAULT_EDIT_SUBSCRIPTION_STATE }; 

    default:
      return state;
  }
};
