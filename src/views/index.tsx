import { lazy } from "react";

export const Dashboard = lazy(() => import("./dashboard-view/index"));

export const View = { Dashboard };
