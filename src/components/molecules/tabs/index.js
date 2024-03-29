import { lazy } from "react";

export const DashboardTabs = lazy(() => import("./dashboard/DashboardTabs"));

export * from "./operations";
export * from './research'