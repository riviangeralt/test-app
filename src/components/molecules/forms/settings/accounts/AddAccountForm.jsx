import { Button, Stack, useToast } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import {
  ioWebapiCreateAccountPost,
  ioWebapiUpdateAccountPut,
} from "src/api-client";
import { Form, Input } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import { formatObjPayload, isSuccessStatus } from "src/utils";

const AddAccountForm = (props) => {
  const { data, onClose, isEdit } = props;
  const methods = useForm({
    defaultValues: {
      ...data,
    },
  });

  const { query } = useFetch(
    isEdit ? ioWebapiUpdateAccountPut : ioWebapiCreateAccountPost,
    true
  );
  const toast = useToast();

  const onAddAccount = async (values) => {
    try {
      const queryRes = await query({
        ...formatObjPayload(values),
        user_id: parseInt(localStorage.getItem("io_uc")),
        broker_params: {},
      });
      if (isSuccessStatus(queryRes)) {
        onClose();
        toast({
          description:
            queryRes?.data?.message || "Account created successfully",
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error in onAddAccount", error);
    }
  };

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onAddAccount)}>
      <Stack gap={6}>
        <Input
          name="account_name"
          label="Account Name"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />

        <Input
          name="broker_name"
          label="Broker Name"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="broker_api_key"
          label="Broker API Key"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="broker_api_secret"
          label="Broker API Secret"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        {/* <Select
          name="fund_id"
          label="Fund"
          placeholder=""
          control={methods.control}
          error={methods.formState.errors}
          // rules={{ required: "This field is required" }}
          options={fundsList?.data?.map((ele) => ({
            label: ele.name,
            value: ele.fid,
          }))}
          maxMenuHeight={200}
        /> */}
        {/* <Input
          name="broker_paper_api_url"
          label="Paper API URL"
          placeholder=""
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="broker_paper_api_key"
          label="Paper API Key"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          name="broker_paper_api_secret"
          label="Paper API Secret"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        /> */}
        <Button type="submit" isLoading={methods.formState.isSubmitting}>
          Save
        </Button>
      </Stack>
    </Form>
  );
};

AddAccountForm.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default AddAccountForm;
