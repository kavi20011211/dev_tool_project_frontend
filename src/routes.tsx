import { RouteObject, NonIndexRouteObject } from "react-router-dom";
import { LayoutDashboardIcon } from "lucide-react";
import { View } from "./views";
import React from "react";

export interface RouteObjectDetails extends NonIndexRouteObject {
  icon:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  text: string;
  children?: RouteObjectDetails[];
  subRoutes?: boolean;
}

interface RouteDetails {
  icon:
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | undefined;
  text: string;
  children?: RouteObjectDetails[];
  subRoutes?: boolean;
}

export const routes: RouteObjectDetails[] = [
  {
    path: "/",
    text: "Dashboard",
    icon: React.createElement(LayoutDashboardIcon),
    element: React.createElement(View.DashboardPanelShifter),
  },
];

export const getAllRoutesV2 = (
  routes: RouteObjectDetails[] | undefined
): RouteObjectDetails[] => {
  if (!routes) return [];

  return routes.map((route) => ({
    ...route,
    children: getAllRoutesV2(route.children),
  }));
};

export const getAllRoutes = (): RouteObject[] => {
  return routes.map((route) => ({ ...route }));
};

export const getAllRouteDetails = (): RouteDetails[] => {
  return routes.map((route) => ({
    path: route.path ?? "",
    icon: route.icon,
    text: route.text,
    children: route.children,
    subRoutes: route.subRoutes,
  }));
};
