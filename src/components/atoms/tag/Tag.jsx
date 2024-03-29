import { Box } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Tag = (props) => {
  const { label, ...rest } = props;
  return (
    <Box
      py={1}
      pr={3}
      pl={5}
      borderRadius={"20px"}
      width="fit-content"
      position="relative"
      _before={{
        position: "absolute",
        content: "''",
        left: 2,
        top:'50%',
        transform: "translateY(-50%)",
        width: 2,
        height: 2,
        borderRadius: "100%",
        display: "block",
        bg: rest.color,
      }}
      {...rest}
    >
      {label}
    </Box>
  );
};

Tag.propTypes = {
  label: PropTypes.string,
};

export default Tag;
