import { Button, HStack, Stack, useToast } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { ioAdminCreateUserPost, ioAdminUpdateUserPut } from "src/api-client";
import { Form, Input, Select } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import {
  regex,
  extractValue,
  userTypeStaticList,
  isSuccessStatus,
} from "src/utils";

const AddUserForm = (props) => {
  const { onClose, data, isEdit } = props;
  const methods = useForm({
    defaultValues: {
      ...data,
      user_type:
        userTypeStaticList.find((item) => item.value === data?.user_type) || "",
    },
  });
  const toast = useToast();
  const { query } = useFetch(
    isEdit ? ioAdminUpdateUserPut : ioAdminCreateUserPost,
    true
  );

  const onAddUpdateUser = async (values) => {
    try {
      const queryRes = await query(extractValue(values));
      if (isSuccessStatus(queryRes)) {
        toast({
          description: `User ${isEdit ? "updated" : "created"} successfully`,
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
        onClose();
      }
    } catch (error) {
      console.error("Error in onAddUpdateUser", error);
    }
  };

  return (
    <Form onSubmit={methods.handleSubmit(onAddUpdateUser)} methods={methods}>
      <Stack gap={6}>
        <Input
          label="First Name"
          name="first_name"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          label="Last Name"
          name="last_name"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          label="Email"
          name="email"
          control={methods.control}
          error={methods.formState.errors}
          rules={{
            required: "This field is required",
            validate: (val) =>
              regex.isValidEmail.test(val) ? null : "Enter a valid email",
          }}
        />
        <Input
          label="Phone"
          name="phone"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Select
          label="User Type"
          name="user_type"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
          placeholder=""
          options={userTypeStaticList}
          isSearchable={false}
        />
        <Input
          label="Organization"
          name="organization"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        {!isEdit && (
          <Input
            label="Password"
            type="password"
            name="password"
            control={methods.control}
            error={methods.formState.errors}
            rules={{ required: "This field is required" }}
          />
        )}

        <HStack width={"full"}>
          <Button variant={"secondary"} width={"full"}>
            Publish
          </Button>
          <Button
            variant={"solid"}
            width={"full"}
            type="submit"
            isLoading={methods.formState.isSubmitting}
          >
            Save
          </Button>
        </HStack>
      </Stack>
    </Form>
  );
};

AddUserForm.propTypes = {
  onClose: PropTypes.func,
  data: PropTypes.object,
  isEdit: PropTypes.bool,
};

export default AddUserForm;
