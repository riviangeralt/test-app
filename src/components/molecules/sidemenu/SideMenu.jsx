import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Stack,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import {
  AdministratorIcon,
  CatalogIcon,
  DashboardIcon,
  OperationsIcon,
  QubearIcon,
  ResearchIcon,
  SettingsIcon,
} from "src/assets";

const SideMenu = () => {
  const { pathname } = useLocation();

  const userType = localStorage.getItem("io_ut");

  const menuList = [
    {
      label: "Dashboard",
      hasChildren: false,
      path: "/",
      icon: <DashboardIcon isFilled={pathname === "/"} />,
      visible: true,
    },
    {
      label: "Catalog",
      hasChildren: true,
      icon: <CatalogIcon isFilled={pathname.includes("catalog")} />,
      children: [
        {
          label: "Stock++",
          path: "/catalog/stock",
        },
        {
          label: "Baskets",
          path: "/catalog/baskets",
        },
        {
          label: "Indices",
          path: "/catalog/indices",
        },
      ],
      visible: true,
    },
    {
      label: "Research",
      hasChildren: true,
      icon: <ResearchIcon isFilled={pathname.includes("research")} />,
      children: [
        {
          label: "Watchlist",
          path: "/research/watchlist",
        },
        {
          label: "Backtesting",
          path: "/research/backtesting",
        },
        {
          label: "Simulation",
          path: "/research/simulation",
        },
        {
          label: "Screener",
          path: "/research/screener",
        },
      ],
      visible: true,
    },
    {
      label: "Operations",
      hasChildren: true,
      icon: <OperationsIcon isFilled={pathname.includes("operations")} />,
      children: [
        {
          label: "Portfolios",
          path: "/operations/portfolios",
        },
        {
          label: "Funds",
          path: "/operations/funds",
        },
        {
          label: "SMAs",
          path: "/operations/smas",
        },
      ],
      visible: true,
    },
    {
      label: "QUBEAR",
      hasChildren: false,
      path: "/qubear",
      icon: <QubearIcon isFilled={pathname === "/qubear"} />,
      visible: true,
    },
    {
      label: "Settings",
      hasChildren: true,
      icon: <SettingsIcon isFilled={pathname.includes("/settings")} />,
      children: [
        {
          label: "Profile",
          path: "/settings/profile",
        },
        {
          label: "Accounts",
          path: "/settings/accounts",
        },
      ],
      visible: true,
    },
    {
      label: "Administration",
      hasChildren: true,
      icon: (
        <AdministratorIcon isFilled={pathname.includes("administration")} />
      ),
      children: [
        {
          label: "Models",
          path: "/administration/models",
        },
        {
          label: "Stock++",
          path: "/administration/stock",
        },
        {
          label: "Indices",
          path: "/administration/indices",
        },
        {
          label: "Users",
          path: "/administration/users",
        },
        {
          label: "Funds",
          path: "/administration/funds",
        },
      ],
      visible: userType === "admin",
    },
  ].filter((item) => item.visible);

  return (
    <Stack
      borderRight={"1px solid #ededed"}
      width="100%"
      height="100%"
      paddingRight={4}
      maxH={"100%"}
      overflow="auto"
      className="scrollbar-override"
    >
      <Accordion allowMultiple>
        {menuList.map((item) => {
          const isActive = item.hasChildren
            ? pathname.includes(item.label.toLowerCase())
            : item.path === pathname;
          return (
            <AccordionItem border={"none"} key={item.label}>
              <AccordionButton
                alignItems={"center"}
                border={"none"}
                background={isActive ? "brand.300" : "#ffffff"}
                _hover={{
                  background: isActive ? "brand.300" : "gray.500",
                }}
                borderRightRadius={40}
                padding={3}
                paddingLeft={6}
                position={"relative"}
                _before={{
                  content: "''",
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  height: "80%",
                  width: isActive ? 2 : "0",
                  borderRightRadius: 30,
                  background: "brand.500",
                  transform: "translateY(-50%)",
                }}
                color={isActive ? "brand.500" : "gray.600"}
                as={item.hasChildren ? "button" : Link}
                to={item.path}
                tabIndex={-1}
              >
                {item.icon || <DashboardIcon />}
                <Box as="span" flex="1" textAlign="left" pl={2}>
                  {item.label}
                </Box>
                {item.hasChildren ? <AccordionIcon /> : null}
              </AccordionButton>

              {item.hasChildren ? (
                <AccordionPanel pb={0}>
                  {item.children.map((child, index) => {
                    const isChildActive = pathname === child.path;
                    return (
                      <Box
                        key={index}
                        padding={2}
                        pl={8}
                        cursor={"pointer"}
                        color={isChildActive ? "brand.500" : "#64636a"}
                        as={Link}
                        to={child.path}
                        display={"block"}
                        tabIndex={-1}
                      >
                        {child.label}
                      </Box>
                    );
                  })}
                </AccordionPanel>
              ) : null}
            </AccordionItem>
          );
        })}
      </Accordion>
    </Stack>
  );
};

export default SideMenu;
