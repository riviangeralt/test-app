import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Suspense, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { ioWebapiSearchStockpp } from "src/api-client";
import { Datepicker, Form, Input, Select } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import { GenerateRiskSetModal } from "src/components/molecules";
import { getPreviousDay } from "src/utils";

const SimulationForm = (props) => {
  const { handleSubmit } = props;
  const { query, data } = useFetch(ioWebapiSearchStockpp);

  const { state } = useLocation();
  const methods = useForm({
    defaultValues: {
      ticker: state?.ticker || "",
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => setIsModalOpen(false);

  const handleCheckBoxChange = (e) => {
    const { name, checked } = e.target;
    methods.setValue(name, checked);
  };

  useEffect(() => {
    if (state?.ticker) {
      query({ tickers: state?.ticker || "" });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Form methods={methods} onSubmit={methods.handleSubmit(handleSubmit)}>
        <Box
          p={4}
          border="1px solid rgba(171, 171, 171, 0.24)"
          borderRadius={4}
        >
          <Grid templateColumns="repeat(5, 1fr)" gap={4}>
            <GridItem
              w="100%"
              colSpan={{
                lg: 1,
                sm: 5,
              }}
            >
              <Input
                label="Ticker"
                control={methods.control}
                error={methods.formState.errors}
                name="ticker"
                rules={{ required: "This field is required" }}
                isDisabled={!!state?.ticker}
              />
            </GridItem>
            <GridItem
              w="100%"
              colSpan={{
                lg: 1,
                sm: 5,
              }}
            >
              <Datepicker
                label="Start Date"
                control={methods.control}
                error={methods.formState.errors}
                name="start_date"
                rules={{ required: "This field is required" }}
                minDate={getPreviousDay(new Date())}
              />
            </GridItem>
            <GridItem
              w="100%"
              colSpan={{
                lg: 1,
                sm: 5,
              }}
            >
              <Datepicker
                label="End Date"
                control={methods.control}
                error={methods.formState.errors}
                name="end_date"
                rules={{ required: "This field is required" }}
                minDate={methods.watch("start_date")}
              />
            </GridItem>
            <GridItem
              colStart={{
                lg: 1,
              }}
              colSpan={{
                lg: 2,
                sm: 5,
              }}
              display="flex"
              alignItems="flex-end"
              gap={4}
            >
              <Input label="Risk Set" />
              <Button variant="secondary" onClick={handleModalOpen}>
                Generate
              </Button>
            </GridItem>
            <GridItem
              colStart={{
                lg: 1,
              }}
              colSpan={{
                lg: 2,
                sm: 5,
              }}
              display="flex"
              alignItems="flex-end"
              gap={4}
            >
              <Select
                label="Market Data"
                placeholder=""
                isSearchable={false}
                control={methods.control}
                error={methods.formState.errors}
                name="market_data"
              />
              <Button variant="secondary">Generate</Button>
            </GridItem>
            <GridItem colStart={1} colSpan={2}>
              <HStack gap={4} flexWrap={"wrap"}>
                {data?.data?.[state?.ticker]?.map((spp) => (
                  <Checkbox
                    colorScheme="brand"
                    key={spp.spp_id}
                    onChange={handleCheckBoxChange}
                    name={`${spp.ticker}${spp.version}`}
                  >
                    {`${spp.ticker}${spp.version}`}
                  </Checkbox>
                ))}
                <Button
                  size={"sm"}
                  type="submit"
                  isLoading={methods.formState.isSubmitting}
                >
                  Start
                </Button>
              </HStack>
            </GridItem>
          </Grid>
        </Box>
      </Form>
      <Suspense fallback={""}>
        {isModalOpen && (
          <GenerateRiskSetModal
            onClose={handleModalClose}
            isOpen={isModalOpen}
          />
        )}
      </Suspense>
    </>
  );
};

SimulationForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default SimulationForm;
