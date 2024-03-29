import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CardV2 = (props) => {
  const { label, value, description, returns, icon } = props;
  return (
    <Box p={4} borderRadius={4} bg="rgba(171, 171, 171, 0.24)">
      <HStack justifyContent={"space-between"}>
        <Stack gap={0}>
          <Text fontSize={"14px"} color={"gray.600"}>
            {label || "-"}
          </Text>
          <Heading fontSize={"24px"} color={"gray.700"} fontWeight={600}>
            {value || 0}
          </Heading>
          <Text fontSize={"14px"} color={"gray.600"}>
            {description || "-"} : {returns || 0}%
          </Text>
        </Stack>
        <Box w="50px" h="50px" bg="rgba(255, 255, 255, 1)" borderRadius={4}>
          {icon || <></>}
        </Box>
      </HStack>
    </Box>
  );
};

CardV2.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  description: PropTypes.string,
  returns: PropTypes.string,
  icon: PropTypes.element,
};

export default CardV2;
