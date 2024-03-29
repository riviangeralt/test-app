const authRoutes = {
  IO_GENERATE_TOKEN_POST: {
    URL: "/auth/token",
    METHOD: "POST",
  },
};

// webapi routes
const portfolioRoutes = {
  IO_WEBAPI_FETCH_ALL_PORTFOLIOS: {
    URL: "/webapi/portfolio/readall",
    METHOD: "GET",
  },
  IO_WEBAPI_FETCH_PORTFOLIO_DETAILS: {
    URL: "/webapi/portfolio/read",
    METHOD: "GET",
  },
  IO_WEBAPI_CREATE_PORTFOLIO: {
    URL: "/webapi/portfolio/create",
    METHOD: "POST",
  },
  IO_WEBAPI_ADD_PORTFOLIO_HOLDING: {
    URL: "/webapi/portfolio/holding/add",
    METHOD: "POST",
  },
  IO_WEBAPI_FETCH_PORTFOLIO_HOLDINGS: {
    URL: "/webapi/portfolio/holdings/read/all",
    METHOD: "GET",
  },
};

const catalogRoutes = {
  IO_WEBAPI_FETCH_ALL_STOCKPP: {
    URL: "/webapi/catalog/stockpp/readall",
    METHOD: "GET",
  },
  IO_WEBAPI_FETCH_STOCKPP_DETAILS: {
    URL: "/webapi/catalog/stockpp/read",
    METHOD: "GET",
  },
  IO_WEBAPI_SEARCH_STOCKPP: {
    URL: "/webapi/catalog/search/stockpp",
    METHOD: "GET",
  }
};

const backtestRoutes = {
  IO_WEBAPI_RUN_BACKTEST: {
    URL: "/webapi/backtest/run",
    METHOD: "POST",
  },
  IO_WEBAPI_FETCH_BACKTEST: {
    URL: "/webapi/backtest/readall",
    METHOD: "GET",
  },
  IO_WEBAPI_FETCH_BACKTEST_DETAILS: {
    URL: "/webapi/backtest/read",
    METHOD: "GET",
  },
};

const simulationRoutes = {
  IO_WEBAPI_RUN_SIMULATION: {
    URL: "/webapi/simulation/run",
    METHOD: "POST",
  },
  IO_WEBAPI_SIMULATION_MARKETDATA_GENERATE: {
    URL: "/webapi/simulation/marketdata/generate",
    METHOD: "POST",
  },
  IO_WEBAPI_SIMULATION_RISKDATA_READ: {
    URL: "/webapi/simulation/riskdata/read",
    METHOD: "POST",
  },
  IO_WEBAPI_FETCH_SIMULATION: {
    URL: "/webapi/simulation/readall",
    METHOD: "GET",
  },
  IO_WEBAPI_SIMULATION_RISKDATA_GENERATE: {
    URL: "/webapi/simulation/riskdata/generate",
    METHOD: "POST",
  },
};

const profileRoutes = {
  IO_WEBAPI_FETCH_PROFILE: {
    URL: "/webapi/profile/read/",
    METHOD: "GET",
  },
  IO_WEBAPI_UPDATE_PROFILE: {
    URL: "/webapi/profile/update",
    METHOD: "PUT",
  }
}

const listAccountRoutes = {
  IO_WEBAPI_FETCH_ACCOUNT_PORTFOLIOS: {
    URL: "/account/portfolio/read",
    METHOD: "GET",
  },
};

// admin routes

const userRoutes = {
  IO_ADMIN_FETCH_ALL_USERS: {
    URL: "/admin/user/read/all",
    METHOD: "GET",
  },
  IO_ADMIN_FETCH_USER_DETAILS: {
    URL: "/admin/user/read",
    METHOD: "GET",
  },
  IO_ADMIN_CREATE_USER: {
    URL: "/admin/user/create",
    METHOD: "POST",
  },
  IO_ADMIN_UPDATE_USER: {
    URL: "/admin/user/update",
    METHOD: "PUT",
  },
  IO_ADMIN_DELETE_USER: {
    URL: "/admin/user/delete",
    METHOD: "DELETE",
  },
  IO_ADMIN_UPDATE_PASSWORD: {
    URL: "/admin/user/update-password",
    METHOD: "PUT",
  }
};

const accountRoutes = {
  IO_WEBAPI_FETCH_ALL_ACCOUNTS: {
    URL: "/webapi/account/read/all",
    METHOD: "GET",
  },
  IO_WEBAPI_FETCH_ACCOUNT_DETAILS: {
    URL: "/webapi/account/read",
    METHOD: "GET",
  },
  IO_WEBAPI_CREATE_ACCOUNT: {
    URL: "/webapi/account/create",
    METHOD: "POST",
  },
  IO_WEBAPI_UPDATE_ACCOUNT: {
    URL: "/webapi/account/update",
    METHOD: "PUT",
  },
  IO_WEBAPI_DELETE_ACCOUNT: {
    URL: "/webapi/account/delete",
    METHOD: "DELETE",
  },
};

const fundsRoutes = {
  IO_ADMIN_FETCH_ALL_FUNDS: {
    URL: "/admin/fund/read/all",
    METHOD: "GET",
  },
  IO_ADMIN_FETCH_FUND_DETAILS: {
    URL: "/admin/fund/read",
    METHOD: "GET",
  },
  IO_ADMIN_CREATE_FUND: {
    URL: "/admin/fund/create",
    METHOD: "POST",
  },
  IO_ADMIN_UPDATE_FUND: {
    URL: "/admin/fund/update",
    METHOD: "PUT",
  },
  IO_ADMIN_DELETE_FUND: {
    URL: "/admin/fund/delete",
    METHOD: "DELETE",
  },
};

const modelsRoutes = {
  IO_ADMIN_FETCH_ALL_MODELS: {
    URL: "/admin/model/read/all",
    METHOD: "GET",
  },
  IO_ADMIN_FETCH_MODEL_DETAILS: {
    URL: "/admin/model/read",
    METHOD: "GET",
  },
  IO_ADMIN_CREATE_MODEL: {
    URL: "/admin/model/create",
    METHOD: "POST",
  },
  IO_ADMIN_UPDATE_MODEL: {
    URL: "/admin/model/update",
    METHOD: "PUT",
  },
  IO_ADMIN_DELETE_MODEL: {
    URL: "/admin/model/delete",
    METHOD: "DELETE",
  },
};

const stockppRoutes = {
  IO_ADMIN_FETCH_ALL_STOCKPP: {
    URL: "/admin/stockpp/read/all",
    METHOD: "GET",
  },
  IO_ADMIN_FETCH_STOCKPP_DETAILS: {
    URL: "/admin/stockpp/read",
    METHOD: "GET",
  },
  IO_ADMIN_CREATE_STOCKPP: {
    URL: "/admin/stockpp/create",
    METHOD: "POST",
  },
  IO_ADMIN_UPDATE_STOCKPP: {
    URL: "/admin/stockpp/update",
    METHOD: "PUT",
  },
  IO_ADMIN_DELETE_STOCKPP: {
    URL: "/admin/stockpp/delete",
    METHOD: "DELETE",
  },
};

const routes = {
  ...authRoutes,
  ...portfolioRoutes,
  ...catalogRoutes,
  ...backtestRoutes,
  ...simulationRoutes,
  ...listAccountRoutes,
  ...userRoutes,
  ...accountRoutes,
  ...fundsRoutes,
  ...modelsRoutes,
  ...stockppRoutes,
  ...profileRoutes
};

export default routes;