import { Button, Stack, useToast } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { ioWebapiUpdateProfile } from "src/api-client";
import { Form, Input } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import { isSuccessStatus, regex } from "src/utils";

const PersonalInformationForm = (props) => {
  const { data, onClose } = props;
  const methods = useForm({
    defaultValues: {
      first_name: data?.first_name,
      last_name: data?.last_name,
      email: data?.email,
      phone: data?.phone,
    },
  });
  const toast = useToast();
  const { query } = useFetch(ioWebapiUpdateProfile, true);

  const onSubmit = async (values) => {
    try {
      const queryRes = await query({
        ...values,
      });
      if (isSuccessStatus(queryRes)) {
        onClose();
        toast({
          description: "User updated successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error in onSubmit", error);
    }
  };

  return (
    <Form onSubmit={methods.handleSubmit(onSubmit)} methods={methods}>
      <Stack gap={6}>
        <Input
          name="first_name"
          label="First Name"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="last_name"
          label="Last Name"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="email"
          label="Email"
          control={methods.control}
          error={methods.formState.errors}
          rules={{
            required: "This field is required",
            validate: (val) =>
              regex.isValidEmail.test(val) ? null : "Enter a valid email",
          }}
        />
        <Input
          name="phone"
          label="Phone Number"
          control={methods.control}
          error={methods.formState.errors}
          rules={{
            required: "This field is required",
          }}
        />
        <Button type="submit" isLoading={methods.formState.isSubmitting}>
          Save
        </Button>
      </Stack>
    </Form>
  );
};

PersonalInformationForm.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
};

export default PersonalInformationForm;
