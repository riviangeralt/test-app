import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { Fragment } from "react";
import { ArrowLeftIcon, ArrowRightIcon, StraighLineIcon } from "src/assets";

const BacktestingDetailsActivityFlow = () => {
  const arr = [
    {
      left: "01-June-2023",
      symbol: "$",
      right: "Cash: $100,000",
      color: "orange",
    },
    {
      left: "Buy AAPL",
      symbol: "B",
      right: "24/03/2023",
      color: "green",
    },
    {
      left: "26/03/2023",
      symbol: "S",
      right: "Sell TSLA",
      color: "red",
    },
  ];

  const FlowCard = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props;
    return (
      <Box
        bg="gray.500"
        p={4}
        borderRadius={8}
        whiteSpace="nowrap"
        maxW="200px"
        w="150px"
        textAlign="center"
      >
        {children}
      </Box>
    );
  };

  const CenterCircle = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children, ...rest } = props;
    return (
      <Box
        width={10}
        height={10}
        borderRadius={"full"}
        bg={rest.bg}
        color={rest.color}
        boxShadow={"0 0 0 4px"}
        display="flex"
        alignItems="center"
        justifyContent="center"
        mx="4px"
      >
        <Text color="#FFF"> {children}</Text>
      </Box>
    );
  };

  return (
    <Stack alignItems="center" gap={0} mt={4}>
      {arr.map((item, index) => {
        return (
          <Fragment key={index}>
            <HStack alignItems="center" gap={0}>
              <FlowCard>{item.left}</FlowCard>
              <ArrowLeftIcon />
              <CenterCircle
                color={`${item.color}.300`}
                bg={`${item.color}.500`}
              >
                {item.symbol}
              </CenterCircle>
              <ArrowRightIcon />
              <FlowCard>{item.right}</FlowCard>
            </HStack>
            {index !== arr.length - 1 && <StraighLineIcon my="-4px" />}
          </Fragment>
        );
      })}
    </Stack>
  );
};

export default BacktestingDetailsActivityFlow;
