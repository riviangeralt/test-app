import { Heading, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";

const Card = (props) => {
  const { label, value, ...rest } = props;
  return (
    <Stack
      p={4}
      bg={rest.bg || 'gray.500'}
      borderRadius={'8px'}
      height={"100%"}
      width={"100%"}
      gap={0}
      justifyContent={'center'}
      {...rest}
    >
      <Text fontSize={"14px"} color={"gray.600"}>
        {label}
      </Text>
      <Heading
        fontSize={"24px"}
        color={rest.color || "gray.700"}
        fontWeight={600}
      >
        {value}
      </Heading>
    </Stack>
  );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Card;
