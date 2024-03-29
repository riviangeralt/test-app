import {
  Box,
  Button,
  Checkbox,
  Grid,
  GridItem,
  HStack,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import { Datepicker, Form, Input } from "src/components/atoms";
import PropTypes from "prop-types";
import { getPreviousDay } from "src/utils";
import { useFetch } from "src/components/hooks";
import { ioWebapiSearchStockpp } from "src/api-client";
import { useEffect } from "react";

const BacktestingForm = (props) => {
  const { handleSubmit } = props;

  const { query, data } = useFetch(ioWebapiSearchStockpp);

  const { state } = useLocation();
  const methods = useForm({
    defaultValues: {
      ticker: state?.ticker || "",
    },
  });

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
    <Form methods={methods} onSubmit={methods.handleSubmit(handleSubmit)}>
      <Box p={4} border="1px solid rgba(171, 171, 171, 0.24)" borderRadius={4}>
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
              name="ticker"
              error={methods.formState.errors}
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
              name="start_date"
              error={methods.formState.errors}
              rules={{ required: "This field is required" }}
              maxDate={getPreviousDay(new Date())}
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
              name="end_date"
              error={methods.formState.errors}
              rules={{ required: "This field is required" }}
              maxDate={getPreviousDay(new Date())}
            />
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
  );
};

BacktestingForm.propTypes = {
  handleSubmit: PropTypes.func,
};

export default BacktestingForm;
