import { lazy } from "react";

export const Portfolios = lazy(() => import("./portfolios/Portfolios"));
export const PortfolioDetails = lazy(() => import("./portfolio-details/PortfolioDetails"));
export const PortfolioReview = lazy(() => import("./portfolio-review/PortfolioReview"));
