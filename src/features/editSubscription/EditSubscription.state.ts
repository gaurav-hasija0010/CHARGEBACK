export type Frequency = "Weekly" | "Monthly" | "Annually";

export const DEFAULT_EDIT_SUBSCRIPTION_STATE = {
  app: "Choose an app",
  amount: 0,
  category: "Subscription",
  startDate: new Date(),
  frequency: "Monthly" as Frequency,
  remindBeforeDays: 2,
  isActive: true,
};

export interface EditSubscriptionState {
  app: string | null;
  amount: number;
  category: string;
  startDate: Date;
  frequency: Frequency;
  remindBeforeDays: number;
  isActive: boolean;
}