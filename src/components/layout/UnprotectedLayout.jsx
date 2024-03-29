import { Box, Skeleton } from "@chakra-ui/react";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import BackgroundImage from 'src/assets/images/background.jpeg'

const UnprotectedLayout = () => {
  return (
    <Box
      minH={"100vh"}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      bgImage={`url(${BackgroundImage})`}
      bgSize={"cover"}
      bgRepeat={"no-repeat"}
      bgPosition={"center"}
    >
      <Box
        w={{
          lg: "30%",
          sm: "100%",
        }}
        p={{
          lg: 4,
          md: 4,
          sm: 0,
        }}
      >
        <Suspense
          fallback={
            <Skeleton
              w={{
                lg: "400px",
                sm: "100%",
              }}
              h={{
                lg: "424px",
                sm: "100%",
              }}
            />
          }
        >
          <Outlet />
        </Suspense>
      </Box>
    </Box>
  );
};

export default UnprotectedLayout;
