import { lazy } from "react";

export const StockListTable = lazy(() => import("./stock/StockListTable"));
export const SimulationListTable = lazy(() => import("./stock/SimulationListTable"));
export const BacktestListTable = lazy(() => import("./stock/BacktestListTable"));