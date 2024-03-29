import { Button, Checkbox, Stack } from "@chakra-ui/react";
import { Input } from "src/components/atoms";

const GenerateRiskSetForm = () => {
  return (
    <Stack gap={6}>
      <Input label="Drawdown %" />
      <Input label="Volatility" />
      <Checkbox size="lg" colorScheme="brand">Geo Political</Checkbox>
      <Checkbox size="lg" colorScheme="brand">Blackswan Events</Checkbox>
      <Button>Generate</Button>
    </Stack>
  );
};

export default GenerateRiskSetForm;
