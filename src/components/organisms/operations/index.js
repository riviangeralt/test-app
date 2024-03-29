import { lazy } from "react";

export const PortfolioReviewSummary = lazy(() => import("./portfolio/PortfolioReviewSummary"));
export const PortfolioDetailsSummary = lazy(() => import("./portfolio/PortfolioDetailsSummary"));
export const CashDeployed = lazy(() => import("./portfolio/CashDeployed"));
export const StocksChart = lazy(() => import("./portfolio/StocksChart"));