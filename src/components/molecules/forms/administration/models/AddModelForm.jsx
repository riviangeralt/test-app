import { Button, HStack, Stack, useToast } from "@chakra-ui/react";
import { Form, Input } from "src/components/atoms";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useFetch } from "src/components/hooks";
import { ioAdminCreateModelPost, ioAdminUpdateModelPut } from "src/api-client";
import { isSuccessStatus } from "src/utils";

const AddModelForm = (props) => {
  const { data, onClose, isEdit } = props;
  const toast = useToast();
  const methods = useForm({
    defaultValues: data,
  });

  const { query } = useFetch(
    isEdit ? ioAdminUpdateModelPut : ioAdminCreateModelPost,
    true
  );

  const onAddEditModel = async (values) => {
    try {
      const queryRes = await query({ ...values, params: {} });
      if (isSuccessStatus(queryRes)) {
        toast({
          description: `Model ${isEdit ? "updated" : "created"} successfully`,
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
        onClose();
      }
    } catch (error) {
      console.error("Error in onAddEditModel", error);
      const newError = Array.isArray(error.data.detail)
        ? error.data.detail
        : [];
      newError?.forEach((ele) => {
        methods.setError(ele?.loc?.[1], {
          message: ele?.msg,
        });
      });
    }
  };

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onAddEditModel)}>
      <Stack gap={6}>
        <Input
          label="Model"
          name="name"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          label="Description"
          inputType="textarea"
          resize="none"
          rows={4}
          name="description"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          label="Ruleset"
          name="ruleset"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          label="Version"
          name="version"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
        <Input
          label="Type"
          name="type_model"
          control={methods.control}
          error={methods.formState.errors}
          rules={{ required: "This field is required" }}
        />
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

AddModelForm.propTypes = {
  data: PropTypes.object,
  onClose: PropTypes.func,
  isEdit: PropTypes.bool,
};

export default AddModelForm;
