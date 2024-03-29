import { lazy } from "react";

export const Backtesting = lazy(() => import("./backtesting/Backtesting"));
export const BacktestingDetails = lazy(() => import("./backtesting-details/BacktestingDetails"));
export const Simulation = lazy(() => import("./simulation/Simulation"));