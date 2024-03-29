import { Stack, Text } from "@chakra-ui/react";
import { ResultIcon } from "src/assets";
import PropTypes from "prop-types";

const ResultError = (props) => {
  const { title, description } = props;
  return (
    <Stack alignItems={"center"} p={8} gap={0} height={'100%'} justifyContent={"center"}>
      <ResultIcon />
      <Text fontSize={20} fontWeight={500} mt={6}>{title}</Text>
      <Text textAlign={"center"}>{description}</Text>
    </Stack>
  );
};

ResultError.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
};

export default ResultError;
