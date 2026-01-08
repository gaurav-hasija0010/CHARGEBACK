import { Frequency } from "./EditSubscription.state";

export type EditSubscriptionIntent =
  | { type: "SET_APP"; payload: string }
  | { type: "SET_AMOUNT"; payload: number }
  | { type: "SET_CATEGORY"; payload: string }
  | { type: "SET_DATE"; payload: Date }
  | { type: "SET_FREQUENCY"; payload: Frequency }
  | { type: "TOGGLE_ACTIVE" }
  | { type: "RESET" }; 