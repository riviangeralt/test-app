import { lazy } from "react";

export const BacktestingDetailsSummary = lazy(() => import("./backtesting/BacktestingDetailsSummary"));
export const BacktestingDetailsActivityFlow = lazy(() => import("./backtesting/BacktestingDetailsActivityFlow"));
export const BacktestingDetailsRisks = lazy(() => import("./backtesting/BacktestingDetailsRisks"));