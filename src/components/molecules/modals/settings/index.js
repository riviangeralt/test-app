import { lazy } from "react";

export const AddAccountModal = lazy(() => import("./accounts/AddAccountModal"));
export const PersonalInformationModal = lazy(() => import("./profile/PersonalInformationModal"));
export const DeleteAccountModal = lazy(() => import("./accounts/DeleteAccountModal"));
export const AddressModal = lazy(() => import("./profile/AddressModal"));