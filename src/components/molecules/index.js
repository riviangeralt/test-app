import { lazy } from "react";

// components
export const Navbar = lazy(() => import("./navbar/Navbar"));
export const SideMenu = lazy(() => import("./sidemenu/SideMenu"));

// folders
export * from "./tables";
export * from "./forms";
export * from "./tabs";
export * from "./modals";
export * from "./charts";