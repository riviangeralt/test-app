import { lazy } from "react";

export const BacktestingResultTable = lazy(() => import("./backtesting/BacktestingResultTable"));
export const BacktestingDetailsTransactionTable = lazy(() => import("./backtesting/BacktestingDetailsTransactionTable"));
export const SimulationSummaryTable = lazy(() => import("./simulation/SimulationSummaryTable"));
export const BacktestingDetailsActivityTable = lazy(() => import("./backtesting/BacktestingDetailsActivityTable"));