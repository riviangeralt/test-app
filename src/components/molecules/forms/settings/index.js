import { lazy } from "react";

export const ProfileChangePasswordForm = lazy(() => import("./profile/ProfileChangePasswordForm"));
export const AccountsFilterForm = lazy(() => import("./accounts/AccountsFilterForm"));
export const AddAccountForm = lazy(() => import("./accounts/AddAccountForm"));
export const PersonalInformationForm = lazy(() => import("./profile/PersonalInformationForm"));
export const AddressForm = lazy(() => import("./profile/AddressForm"));