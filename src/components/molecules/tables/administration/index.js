import { lazy } from "react";

export const AdminModelsListTable = lazy(() => import("./models/AdminModelsListTable"));
export const AdminStockListTable = lazy(() => import("./stock/AdminStockListTable"));
export const AdminUsersListTable = lazy(() => import("./users/AdminUsersListTable"));