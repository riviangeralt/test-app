import { Button, Stack, useToast } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { ioWebapiUpdateProfile } from "src/api-client";
import { Form, Input } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import { isSuccessStatus } from "src/utils";

const AddressForm = (props) => {
  const { data, onClose } = props;
  const methods = useForm({
    defaultValues: {
      organization: data?.data?.organization,
      address: data?.data?.address,
      city: data?.data?.city,
      state: data?.data?.state,
      country: data?.data?.country,
      zip: data?.data?.zip,
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
          name="organization"
          label="Organization"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="address"
          label="Address"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="city"
          label="City"
          control={methods.control}
          error={methods.formState.errors}
          rules={{
            required: "This field is required",
          }}
        />
        <Input
          name="zip"
          label="Zip"
          control={methods.control}
          error={methods.formState.errors}
          rules={{
            required: "This field is required",
          }}
        />
         <Input
          name="state"
          label="State"
          control={methods.control}
          error={methods.formState.errors}
          rules={{
            required: "This field is required",
          }}
        />
         <Input
          name="country"
          label="Country"
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

AddressForm.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
};

export default AddressForm;
