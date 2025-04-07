import { lazy } from "react";

export const DashboardPanelShifter = lazy(
  () => import("./dashboard-view/index")
);

export const View = { DashboardPanelShifter };
