import { lazy } from "react";

export const AdminModels = lazy(() => import("./models/AdminModels"));
export const AdminUsers = lazy(() => import("./users/AdminUsers"));
export const AdminStock = lazy(() => import("./stock/AdminStock"));