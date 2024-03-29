import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Suspense, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Navbar, SideMenu } from "src/components/molecules";

const LogoutComp = () => {
  useEffect(() => {
    localStorage.clear();
  }, []);
  return <Navigate to="/auth/login" />;
};

const Layout = (props) => {
  const { error } = props;
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

  const toggleSideMenu = () => {
    setIsSideMenuOpen(!isSideMenuOpen);
  };

  const token = localStorage.getItem("io_at");
  const isTokenExpired = localStorage.getItem("io_ed") <= new Date().getTime();

  return token && !isTokenExpired ? (
    <Box minH="100vh">
      <Box maxH={"60px"} height={"60px"} width={"100%"}>
        {/* navbar */}
        <Navbar toggleSideMenu={toggleSideMenu} />
      </Box>

      <Box
        maxW={{
          lg: "calc(100% - 280px)",
          sm: "auto",
        }}
        background={"#fff"}
        maxH={"calc(100vh - 60px)"}
        height={"calc(100vh - 60px)"}
        width={{
          lg: 280,
          sm: isSideMenuOpen ? 280 : 0,
        }}
        float={"left"}
        opacity={{
          lg: 1,
          sm: isSideMenuOpen ? 1 : 0,
        }}
        pointerEvents={{
          lg: "auto",
          sm: isSideMenuOpen ? "auto" : "none",
        }}
        transition={"all 0.3s"}
        position={{
          lg: "relative",
          sm: "absolute",
        }}
        zIndex={10}
      >
        {/* sidebar */}
        <SideMenu />
      </Box>

      <Box
        overflow="auto"
        p={4}
        maxW={{
          lg: "calc(100% - 280px)",
          sm: "100%",
        }}
        float="right"
        width="100%"
        height={"calc(100vh - 60px)"}
        maxH={"calc(100vh - 60px)"}
      >
        <Suspense fallback={"Loading"}>{error ? error : <Outlet />}</Suspense>
      </Box>
    </Box>
  ) : (
    <LogoutComp />
  );
};

Layout.propTypes = {
  error: PropTypes.node,
};

export default Layout;
