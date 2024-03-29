import { lazy } from "react";

export const TransactionTable = lazy(() => import("./portfolios/TransactionTable"));
export const PortfolioListTable = lazy(() => import("./portfolios/PortfolioListTable"));
export const HoldingListTable = lazy(() => import("./portfolios/HoldingListTable"));