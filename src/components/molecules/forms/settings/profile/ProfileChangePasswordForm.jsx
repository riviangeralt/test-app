import { Button, HStack, useToast } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { ioAdminUpdatePasswordPut } from "src/api-client";
import { Form, Input } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import { isSuccessStatus } from "src/utils";

const ProfileChangePasswordForm = () => {
  const methods = useForm({
    reValidateMode: "onBlur",
  });
  const toast = useToast();

  const { query } = useFetch(ioAdminUpdatePasswordPut, true);

  const onChangePassword = async (values) => {
    try {
      const queryRes = await query(values);
      if (isSuccessStatus(queryRes)) {
        toast({
          description: "Password updated successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
        methods.reset()
      }
    } catch (error) {
      console.error("Error in onChangePassword", error);
    }
  };

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onChangePassword)}>
      <HStack
        w={{
          lg: "50%",
          sm: "full",
        }}
        alignItems={
          Object.keys(methods.formState.errors).length > 0
            ? "center"
            : "flex-end"
        }
        gap={4}
        flexWrap={{
          lg: "nowrap",
          sm: "wrap",
        }}
      >
        <Input
          name="old_password"
          label="Old Password"
          type="password"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="new_password"
          type="password"
          label="New Password"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        
        <Button
          w={{
            lg: "xs",
            sm: "full",
          }}
          type="submit"
          isLoading={methods.formState.isSubmitting}
        >
          Submit
        </Button>
      </HStack>
    </Form>
  );
};

export default ProfileChangePasswordForm;
