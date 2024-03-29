import { Button, Stack } from "@chakra-ui/react";
import { Input } from "src/components/atoms";

const AddPortfolioForm = () => {
  return (
    <Stack gap={6}>
      <Input label="Ticker or Stock++" />
      <Button variant={"solid"} width={"full"}>
        Save
      </Button>
    </Stack>
  );
};

export default AddPortfolioForm;
