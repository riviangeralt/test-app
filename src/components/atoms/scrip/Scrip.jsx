import { Box, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Scrip = (props) => {
  const { label, ...rest } = props;
  return (
    <Box
      display={"inline-block"}
      p={"6px 12px"}
      bg="#FFCFB3"
      borderRadius={"8px 0"}
      width={"fit-content"}
      maxWidth={"fit-content"}
      {...rest}
    >
      <Text color={"gray.700"} fontSize={"17px"}>
        {label}
      </Text>
    </Box>
  );
};

Scrip.propTypes = {
  label: PropTypes.string,
};

export default Scrip;
