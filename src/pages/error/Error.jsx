import { Heading, Stack, Text } from "@chakra-ui/react";

const Error = () => {
  return (
    <Stack
      height={"100%"}
      width="100%"
      justifyContent="center"
      alignItems="center"
    >
      <Heading as={"h4"}>404</Heading>
      <Text fontSize="xl" fontWeight={"bold"}>Page not found</Text>
      <Text fontSize="md" textAlign={"center"}>
        The page you are looking for might have been removed, had its name<br/>
        changed or is temporarily unavailable.
      </Text>
    </Stack>
  );
};

export default Error;
