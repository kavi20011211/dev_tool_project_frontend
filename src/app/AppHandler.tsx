import Error404 from "@/layout/Error404";
import Loader from "@/layout/Loader";
import { getAllRoutesV2, routes } from "@/routes";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const postRoutes = createBrowserRouter([
  {
    path: "/",
    loader: Loader,
    errorElement: <Error404 />,
    children: getAllRoutesV2(routes),
  },
]);

const preRoutes = createBrowserRouter([
  {
    path: "/",
    loader: Loader,
    errorElement: <Error404 />,
  },
]);
const AppHandler = () => {
  return <RouterProvider router={postRoutes} />;
};

export default AppHandler;
