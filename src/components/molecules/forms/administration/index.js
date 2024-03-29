import { lazy } from "react";

export const AdminModelFilterForm = lazy(() => import("./models/AdminModelFilterForm"));
export const AdminStockFilterForm = lazy(() => import("./stock/AdminStockFilterForm"));
export const AdminUsersFilterForm = lazy(() => import("./users/AdminUsersFilterForm"));
export const AddModelForm = lazy(() => import("./models/AddModelForm"));
export const AddStockForm = lazy(() => import("./stock/AddStockForm"));
export const AddUserForm = lazy(() => import("./users/AddUserForm"));