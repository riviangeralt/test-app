import { Button, Stack } from "@chakra-ui/react";
import { Select } from "src/components/atoms";

const AddToPortfolioForm = () => {
  return (
    <Stack gap={6}>
      <Select label="Select Account" placeholder="" isSearchable={false} />
      <Select label="Select Portfolio" placeholder="" isSearchable={false} />
      <Button variant={"solid"} width={"full"}>
        Save
      </Button>
    </Stack>
  );
};

export default AddToPortfolioForm;
