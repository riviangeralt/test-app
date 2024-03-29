import { lazy } from "react";

export const BacktestingChart = lazy(() => import("./backtesting/BacktestingChart"));
export const BacktestingDetailsGraphChart = lazy(() => import("./backtesting/BacktestingDetailsGraphChart"));
export const SimulationChart = lazy(() => import("./simulation/SimulationChart"));