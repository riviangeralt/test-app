import { lazy } from "react";

export const Stock = lazy(() => import("./stock/Stock"));
export const CatalogStockDetails = lazy(() => import("./stock-details/CatalogStockDetails"));