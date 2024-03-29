import { useEffect, useState } from "react";
import {
  RouterProvider,
  createBrowserRouter
} from "react-router-dom";
import { ProtectedLayout, UnprotectedLayout } from "src/components/layout";
import {
  Accounts,
  AdminModels,
  AdminStock,
  AdminUsers,
  Backtesting,
  BacktestingDetails,
  CatalogStockDetails,
  Dashboard,
  Error,
  Login,
  PortfolioDetails,
  PortfolioReview,
  Portfolios,
  Profile,
  Simulation,
  Stock,
} from "src/pages";
import { checkUserType } from "src/utils";

const routes = () => {
  return [
    {
      path: "auth",
      element: <UnprotectedLayout />,
      children: [{ path: "login", element: <Login />, visible: true }],
      visible: true,
    },
    {
      path: "/",
      element: <ProtectedLayout />,
      errorElement: <ProtectedLayout error={<Error />} />,
      children: [
        {
          path: "",
          element: <Dashboard />,
          visible: true,
        },
        {
          path: "operations",
          children: [
            {
              path: "portfolios",
              element: <Portfolios />,
              visible: true,
            },
            {
              path: "portfolio/:portfolioId",
              element: <PortfolioDetails />,
              visible: true,
            },
            {
              path: "portfolio/review/:portfolioId",
              element: <PortfolioReview />,
              visible: true,
            },
          ],
          visible: true,
        },
        {
          path: "catalog",
          children: [
            {
              path: "stock",
              element: <Stock />,
              visible: true,
            },
            {
              path: "stock/:stockId",
              element: <CatalogStockDetails />,
              visible: true,
            },
          ],
          visible: true,
        },
        {
          path: "research",
          children: [
            {
              path: "backtesting/:stockId",
              element: <Backtesting />,
              visible: true,
            },
            {
              path: "backtest-details/:bId",
              element: <BacktestingDetails />,
              visible: true,
            },
            {
              path: "simulation/:stockId",
              element: <Simulation />,
              visible: true,
            },
            {
              path: "backtesting",
              element: <Backtesting />,
              visible: true,
            },
            {
              path: "simulation",
              element: <Simulation />,
              visible: true,
            },
          ],
          visible: true,
        },
        {
          path: "administration",
          children: [
            {
              path: "stock",
              element: <AdminStock />,
              visible: checkUserType('admin'),
            },
            {
              path: "models",
              element: <AdminModels />,
              visible: checkUserType('admin'),
            },
            {
              path: "users",
              element: <AdminUsers />,
              visible: checkUserType('admin'),
            },
          ],
          visible: checkUserType('admin'),
        },
        {
          path: "settings",
          children: [
            {
              path: "profile",
              element: <Profile />,
              visible: true,
            },
            {
              path: "accounts",
              element: <Accounts />,
              visible: true,
            },
          ],
          visible: true,
        },
        {
          path: "*",
          element: <Error />,
          visible: true,
        },
      ],
      visible: true,
    },
    {
      path: "*",
      element: <Error />,
      visible: true,
    },
  ];
};

const Routing = () => {
  const [newRoutes, setNewRoutes] = useState(routes());

  const filterVisibleComponent = (array) => {
    const filteredApp = array.filter((ele) => ele.visible);
    const withAppName = filteredApp.map((ele) => {
      return {
        ...ele,
        ...(ele?.children?.length > 0
          ? { children: filterVisibleComponent(ele?.children) }
          : null),
        ...(ele?.errorElement ? { errorElement: ele.errorElement } : null),
        element: ele.element,
      };
    });
    return withAppName;
  };

  const filterRoutes = async () => {
    const res = await routes(localStorage.getItem("io_ut"));
    const filteredRoutes = filterVisibleComponent(res);
    setNewRoutes(filteredRoutes);
  };

  useEffect(() => {
    filterRoutes();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const router = createBrowserRouter(newRoutes);

  return <RouterProvider router={router} />;
};

export default Routing;
