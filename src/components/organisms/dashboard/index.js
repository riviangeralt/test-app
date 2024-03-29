import { lazy } from "react";

export const DashboardSummary = lazy(() => import("./DashboardSummary"));
export const DashboardPortfolioSummary = lazy(() => import("./DashboardPortfolioSummary"));
export const DashboardAccountPerformance = lazy(() => import("./DashboardAccountPerformance"));
export const DashboardActivePassive = lazy(() => import("./DashboardActivePassive"));
export const DashboardHoldingActivity = lazy(() => import("./DashboardHoldingActivity"));
export const DashboardPortfolioSuggestions = lazy(() => import("./DashboardPortfolioSuggestions"));
export const DashboardTopGainers = lazy(() => import("./DashboardTopGainers"));
export const DashboardAttribution = lazy(() => import("./DashboardAttribution"));
export const DashboardReturns = lazy(() => import("./DashboardReturns"));