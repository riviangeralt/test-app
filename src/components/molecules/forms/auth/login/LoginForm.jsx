import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { Link } from "react-router-dom";
import { LogoIcon } from "src/assets";
import { Form, Input } from "src/components/atoms";
import { regex } from "src/utils";

const LoginForm = (props) => {
  const { methods, onSubmit } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword(!showPassword);

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onSubmit)}>
      <Box
        boxShadow={{
          lg: "0 4px 12px 0 rgba(0, 0, 0, 0.1), 0 -4px 8px 0 rgba(0, 0, 0, 0.1)",
          sm: "none",
        }}
        borderRadius={"md"}
        bg={"white"}
      >
        <Stack
          justifyContent={"center"}
          gap={6}
          px={5}
          py={10}
          alignItems={"center"}
        >
          <LogoIcon width={"150px"} height={"40px"} />
          <Text color={"gray.600"} textAlign={"center"}>
            Please login with Username and Password
          </Text>
          <Input
            label="Username"
            name="username"
            control={methods.control}
            rules={{
              required: "Email is required",
              validate: (val) =>
                regex.isValidEmail.test(val) ? null : "Enter a valid email",
            }}
            error={methods.formState.errors}
          />
          <HStack w="100%" position={"relative"}>
            <Text pos="absolute" top={0} right={0} color="blue.500" zIndex={1}>
              <Link to="/auth/forgot-password">Forgot Password?</Link>
            </Text>
            <Input
              label="Password"
              name="password"
              control={methods.control}
              rules={{ required: "Password is required" }}
              error={methods.formState.errors}
              type={showPassword ? "text" : "password"}
              rightIcon={
                showPassword ? (
                  <ViewIcon onClick={togglePassword} cursor={"pointer"} />
                ) : (
                  <ViewOffIcon cursor={"pointer"} onClick={togglePassword} />
                )
              }
            />
          </HStack>
          <Button
            type="submit"
            isLoading={methods.formState.isSubmitting}
            width={"full"}
          >
            Login
          </Button>
        </Stack>
      </Box>
    </Form>
  );
};

LoginForm.propTypes = {
  methods: PropTypes.object,
  onSubmit: PropTypes.func,
};

export default LoginForm;
