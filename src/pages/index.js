import { lazy } from "react";

export const Error = lazy(() => import("./error/Error"));
export const Dashboard = lazy(() => import("./dashboard/Dashboard"));

export * from "./operations";
export * from "./catalog";
export * from "./administration";
export * from "./research";
export * from "./auth";
export * from "./settings";