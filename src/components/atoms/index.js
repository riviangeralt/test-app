import { lazy } from "react";

export const Card = lazy(() => import("./card/Card"));
export const Breadcrumb = lazy(() => import("./breadcrumb/Breadcrumb"));
export const Pagination = lazy(() => import("./pagination/Pagination"));
export const Scrip = lazy(() => import("./scrip/Scrip"));
export const Tag = lazy(() => import("./tag/Tag"));
export const Input = lazy(() => import("./input/Input"));
export const Select = lazy(() => import("./select/Select"));
export const Datepicker = lazy(() => import("./datepicker/Datepicker"));
export const Form = lazy(() => import("./form/Form"));
export const ResultError = lazy(() => import("./result-error/ResultError"));
export const Table = lazy(() => import("./table/Table"));
export const CardV2 = lazy(() => import("./card-v2/CardV2"));
export const CustomButtonGroup = lazy(() => import("./button-group/ButtonGroup"));

// theme
export { default as Button } from "./button/Button";
export { default as ThemedTable } from "./table/ThemedTable";
export { default as ThemedTextarea } from "./input/ThemedTextarea";
export { default as ThemedInput } from "./input/ThemedInput";
export { default as Modal } from "./modal/Modal";