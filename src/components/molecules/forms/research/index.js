import { lazy } from "react";

export const BacktestingForm = lazy(() => import("./backtesting/BacktestingForm"));
export const SimulationForm = lazy(() => import("./simulation/SimulationForm"));
export const GenerateRiskSetForm = lazy(() => import("./simulation/GenerateRiskSetForm"));