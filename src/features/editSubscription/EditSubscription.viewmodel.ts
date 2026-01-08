import { useReducer } from "react";
import { reducer } from "./EditSubscription.reducer";
import { DEFAULT_EDIT_SUBSCRIPTION_STATE } from "./EditSubscription.state";

export const useEditSubscriptionViewModel = () => {
  return useReducer(reducer, DEFAULT_EDIT_SUBSCRIPTION_STATE);
};
