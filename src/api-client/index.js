import { getQueryParamString } from "src/utils";
import ioApiClient from "./axios";
import routes from "./routes";

export const ioGenerateTokenPost = async (body) => {
  return ioApiClient({
    method: routes.IO_GENERATE_TOKEN_POST.METHOD,
    url: routes.IO_GENERATE_TOKEN_POST.URL,
    data: body,
  });
};

// admin user routes
export const ioAdminFetchAllUsers = async (searchObj = null) => {
  let queryStr;

  if (searchObj) {
    queryStr = getQueryParamString(searchObj);
  }
  return ioApiClient({
    method: routes.IO_ADMIN_FETCH_ALL_USERS.METHOD,
    url: `${routes.IO_ADMIN_FETCH_ALL_USERS.URL}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioAdminFetchUserDetails = async (body) => {
  const { user_id } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_FETCH_USER_DETAILS.METHOD,
    url: `${routes.IO_ADMIN_FETCH_USER_DETAILS.URL}/${user_id}`,
  });
};

export const ioAdminCreateUserPost = async (body) => {
  return ioApiClient({
    method: routes.IO_ADMIN_CREATE_USER.METHOD,
    url: routes.IO_ADMIN_CREATE_USER.URL,
    data: body,
  });
};

export const ioAdminUpdateUserPut = async (body) => {
  return ioApiClient({
    method: routes.IO_ADMIN_UPDATE_USER.METHOD,
    url: `${routes.IO_ADMIN_UPDATE_USER.URL}/${body.user_id}`,
    data: body,
  });
};

export const ioAdminDeleteUserDelete = async (body) => {
  const { user_id } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_DELETE_USER.METHOD,
    url: `${routes.IO_ADMIN_DELETE_USER.URL}/${user_id}`,
  });
};

export const ioAdminUpdatePasswordPut = async (body) => {
  return ioApiClient({
    method: routes.IO_ADMIN_UPDATE_PASSWORD.METHOD,
    url: `${routes.IO_ADMIN_UPDATE_PASSWORD.URL}`,
    data: body,
  });
}

// admin models routes
export const ioAdminFetchAllModels = async (searchObj = null) => {
  let queryStr;
  if (searchObj) {
    queryStr = getQueryParamString(searchObj);
  }
  return ioApiClient({
    method: routes.IO_ADMIN_FETCH_ALL_MODELS.METHOD,
    url: `${routes.IO_ADMIN_FETCH_ALL_MODELS.URL}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioAdminFetchModelDetails = async (body) => {
  const { mid } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_FETCH_MODEL_DETAILS.METHOD,
    url: `${routes.IO_ADMIN_FETCH_MODEL_DETAILS.URL}/${mid}`,
  });
};

export const ioAdminCreateModelPost = async (body) => {
  return ioApiClient({
    method: routes.IO_ADMIN_CREATE_MODEL.METHOD,
    url: routes.IO_ADMIN_CREATE_MODEL.URL,
    data: body,
  });
};

export const ioAdminUpdateModelPut = async (body) => {
  const { mid, ...rest } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_UPDATE_MODEL.METHOD,
    url: `${routes.IO_ADMIN_UPDATE_MODEL.URL}/${mid}`,
    data: rest,
  });
};

export const ioAdminDeleteModelDelete = async (body) => {
  const { mid } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_DELETE_MODEL.METHOD,
    url: `${routes.IO_ADMIN_DELETE_MODEL.URL}/${mid}`,
  });
};

// admin account routes
export const ioWebapiFetchAllAccounts = async (searchObj = null) => {
  let queryStr;
  if (searchObj) {
    queryStr = getQueryParamString(searchObj);
  }
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_ALL_ACCOUNTS.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_ALL_ACCOUNTS.URL}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioWebapiFetchAccountDetails = async (body) => {
  const { aid } = body;
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_ACCOUNT_DETAILS.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_ACCOUNT_DETAILS.URL}/${aid}`,
  });
};

export const ioWebapiCreateAccountPost = async (body) => {
  return ioApiClient({
    method: routes.IO_WEBAPI_CREATE_ACCOUNT.METHOD,
    url: routes.IO_WEBAPI_CREATE_ACCOUNT.URL,
    data: body,
  });
};

export const ioWebapiUpdateAccountPut = async (body) => {
  const { acc_id, ...rest } = body;
  return ioApiClient({
    method: routes.IO_WEBAPI_UPDATE_ACCOUNT.METHOD,
    url: `${routes.IO_WEBAPI_UPDATE_ACCOUNT.URL}/${acc_id}`,
    data: rest,
  });
};

export const ioWebapiDeleteAccountDelete = async (body) => {
  const { acc_id } = body;
  return ioApiClient({
    method: routes.IO_WEBAPI_DELETE_ACCOUNT.METHOD,
    url: `${routes.IO_WEBAPI_DELETE_ACCOUNT.URL}/${acc_id}`,
  });
};

// admin funds routes

export const ioAdminFetchAllFunds = async (searchObj = null) => {
  let queryStr;
  if (searchObj) {
    queryStr = getQueryParamString(searchObj);
  }
  return ioApiClient({
    method: routes.IO_ADMIN_FETCH_ALL_FUNDS.METHOD,
    url: `${routes.IO_ADMIN_FETCH_ALL_FUNDS.URL}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioAdminFetchFundDetails = async (body) => {
  const { fid } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_FETCH_FUND_DETAILS.METHOD,
    url: `${routes.IO_ADMIN_FETCH_FUND_DETAILS.URL}/${fid}`,
  });
};

export const ioAdminCreateFundPost = async (body) => {
  return ioApiClient({
    method: routes.IO_ADMIN_CREATE_FUND.METHOD,
    url: routes.IO_ADMIN_CREATE_FUND.URL,
    data: body,
  });
};

export const ioAdminUpdateFundPut = async (body) => {
  const { fid, ...rest } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_UPDATE_FUND.METHOD,
    url: `${routes.IO_ADMIN_UPDATE_FUND.URL}/${fid}`,
    data: rest,
  });
};

export const ioAdminDeleteFundDelete = async (body) => {
  const { fid } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_DELETE_FUND.METHOD,
    url: `${routes.IO_ADMIN_DELETE_FUND.URL}/${fid}`,
  });
};

// admin stockpp routes

export const ioAdminFetchAllStockpp = async (searchObj = null) => {
  let queryStr;
  if (searchObj) {
    queryStr = getQueryParamString(searchObj);
  }
  return ioApiClient({
    method: routes.IO_ADMIN_FETCH_ALL_STOCKPP.METHOD,
    url: `${routes.IO_ADMIN_FETCH_ALL_STOCKPP.URL}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioAdminFetchStockppDetails = async (body) => {
  const { spp_id } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_FETCH_STOCKPP_DETAILS.METHOD,
    url: `${routes.IO_ADMIN_FETCH_STOCKPP_DETAILS.URL}/${spp_id}`,
  });
};

export const ioAdminCreateStockppPost = async (body) => {
  return ioApiClient({
    method: routes.IO_ADMIN_CREATE_STOCKPP.METHOD,
    url: routes.IO_ADMIN_CREATE_STOCKPP.URL,
    data: body,
  });
};

export const ioAdminUpdateStockppPut = async (body) => {
  const { spp_id, ...rest } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_UPDATE_STOCKPP.METHOD,
    url: `${routes.IO_ADMIN_UPDATE_STOCKPP.URL}/${spp_id}`,
    data: rest,
  });
};

export const ioAdminDeleteStockppDelete = async (body) => {
  const { spp_id } = body;
  return ioApiClient({
    method: routes.IO_ADMIN_DELETE_STOCKPP.METHOD,
    url: `${routes.IO_ADMIN_DELETE_STOCKPP.URL}/${spp_id}`,
  });
};

// webapi portfolios routes
export const ioWebapiFetchAllPortfolios = async (searchObj = null) => {
  let queryStr;
  if (searchObj) {
    queryStr = getQueryParamString(searchObj);
  }
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_ALL_PORTFOLIOS.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_ALL_PORTFOLIOS.URL}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioWebapiFetchPortfolioDetails = async (body) => {
  const { pid } = body;
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_PORTFOLIO_DETAILS.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_PORTFOLIO_DETAILS.URL}/${pid}`,
  });
};

export const ioWebapiCreatePortfolioPost = async (body) => {
  return ioApiClient({
    method: routes.IO_WEBAPI_CREATE_PORTFOLIO.METHOD,
    url: routes.IO_WEBAPI_CREATE_PORTFOLIO.URL,
    data: body,
  });
};

export const ioWebapiAddHoldingPost = async (body) => {
  return ioApiClient({
    method: routes.IO_WEBAPI_ADD_HOLDING.METHOD,
    url: routes.IO_WEBAPI_ADD_HOLDING.URL,
    data: body,
  });
};

export const ioWebapiFetchAllPortfolioHoldings = async () => {
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_PORTFOLIO_HOLDINGS.METHOD,
    url: routes.IO_WEBAPI_FETCH_PORTFOLIO_HOLDINGS.URL,
  });
};

// webapi stockpp routes
export const ioWebapiFetchAllStockpp = async (searchObj = null) => {
  let queryStr;
  if (searchObj) {
    queryStr = getQueryParamString(searchObj);
  }
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_ALL_STOCKPP.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_ALL_STOCKPP.URL}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioWebapiFetchStockppDetails = async (body) => {
  const { spp_id } = body;
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_STOCKPP_DETAILS.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_STOCKPP_DETAILS.URL}/${spp_id}`,
  });
};

// webapi backtest routes
export const ioWebapiRunBacktestPost = async (body) => {
  return ioApiClient({
    method: routes.IO_WEBAPI_RUN_BACKTEST.METHOD,
    url: routes.IO_WEBAPI_RUN_BACKTEST.URL,
    data: body,
  });
};

export const ioWebapiFetchBacktest = async (body) => {
  const { spp_id, ...rest } = body;
  let queryStr;
  if (rest) {
    queryStr = getQueryParamString(rest);
  }
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_BACKTEST.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_BACKTEST.URL}/${spp_id}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioWebapiFetchAllBacktestDetails = async (body) => {
  const {bid, ...rest} = body;
  let queryStr;
  if (rest) {
    queryStr = getQueryParamString(rest);
  }
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_BACKTEST_DETAILS.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_BACKTEST_DETAILS.URL}${bid?`/${bid}`:''}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

// webapi simulation routes
export const ioWebapiRunSimulationPost = async (body) => {
  return ioApiClient({
    method: routes.IO_WEBAPI_RUN_SIMULATION.METHOD,
    url: routes.IO_WEBAPI_RUN_SIMULATION.URL,
    data: body,
  });
};

export const ioWebapiSimulationMarketdataGeneratePost = async (body) => {
  return ioApiClient({
    method: routes.IO_WEBAPI_SIMULATION_MARKETDATA_GENERATE.METHOD,
    url: routes.IO_WEBAPI_SIMULATION_MARKETDATA_GENERATE.URL,
    data: body,
  });
};

export const ioWebapiSimulationRiskdataReadPost = async (body) => {
  return ioApiClient({
    method: routes.IO_WEBAPI_SIMULATION_RISKDATA_READ.METHOD,
    url: routes.IO_WEBAPI_SIMULATION_RISKDATA_READ.URL,
    data: body,
  });
};

export const ioWebapiFetchSimulation = async (body) => {
  const {spp_id, ...rest} = body;
  let queryStr;
  if (rest) {
    queryStr = getQueryParamString(rest);
  }
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_SIMULATION.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_SIMULATION.URL}/${spp_id}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioWebapiSimulationRiskdataGeneratePost = async (body) => {
  return ioApiClient({
    method: routes.IO_WEBAPI_SIMULATION_RISKDATA_GENERATE.METHOD,
    url: routes.IO_WEBAPI_SIMULATION_RISKDATA_GENERATE.URL,
    data: body,
  });
};

// webapi list account routes
export const ioWebapiFetchAccountPortfolios = async (body) => {
  const { aid, ...rest } = body;
  let queryStr;
  if (rest) {
    queryStr = getQueryParamString(rest);
  }
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_ACCOUNT_PORTFOLIOS.METHOD,
    url: `${routes.IO_WEBAPI_FETCH_ACCOUNT_PORTFOLIOS.URL}/${aid}${
      queryStr ? `?${queryStr}` : ""
    }`,
  });
};

export const ioWebapiSearchStockpp = async (body) => {
  let queryStr;
  if (body) {
    queryStr = getQueryParamString(body);
  }
  return ioApiClient({
    method: routes.IO_WEBAPI_SEARCH_STOCKPP.METHOD,
    url: `${routes.IO_WEBAPI_SEARCH_STOCKPP.URL}${
      queryStr ? `?${queryStr}` : ""
    }`,
  })
}

export const ioWebapiFetchProfile = async () => {
  return ioApiClient({
    method: routes.IO_WEBAPI_FETCH_PROFILE.METHOD,
    url: routes.IO_WEBAPI_FETCH_PROFILE.URL,
  });
}

export const ioWebapiUpdateProfile = async (body) => {
  return ioApiClient({
    method: routes.IO_WEBAPI_UPDATE_PROFILE.METHOD,
    url: routes.IO_WEBAPI_UPDATE_PROFILE.URL,
    data: body,
  });
}