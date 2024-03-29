import {
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  HStack,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ioAdminCreateStockppPost,
  ioAdminUpdateStockppPut,
} from "src/api-client";
import { Form, Input, Select, CustomButtonGroup } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import {
  dynamicConstantStaticList,
  extractValue,
  isSuccessStatus,
  yesOrNoStaticList,
} from "src/utils";

const AddStockForm = (props) => {
  const { isNotForm, isEdit, data, onClose, modelList } = props;
  const toast = useToast();
  const methods = useForm({
    defaultValues: {
      ...data,
      ...data?.params,
      passive_threshold: data?.params?.passive_threshold?.[0] || "",
      max_daily_deployment: data?.params?.max_daily_deployment?.[0] || "",
      passive_threshold_input: data?.params?.passive_threshold?.[1] || "",
      max_daily_deployment_input: data?.params?.max_daily_deployment?.[1] || "",
      model: modelList?.find((model) => model.value === data?.id_model),
      status: data?.status || "draft",
    },
  });
  const [formData, setFormData] = useState({
    re_entry: [],
    ...data?.params,
  });

  const { query } = useFetch(
    isEdit ? ioAdminUpdateStockppPut : ioAdminCreateStockppPost,
    true
  );

  const ordersPermittedList = [
    {
      label: "Limit",
      value: "limit",
    },
    {
      label: "Stoploss",
      value: "stoploss",
    },
    {
      label: "Market",
      value: "market",
    },
    {
      label: "Trailing Stoploss",
      value: "trailing_stoploss",
    },
  ];

  const duringVolatilityList = [
    {
      label: "Pause Trading",
      value: "pause_trading",
    },
    {
      label: "Notify Manager",
      value: "notify_manager",
    },
    {
      label: "Manage Automatically",
      value: "manage_automatically",
    },
    {
      label: "Ignore",
      value: "ignore",
    },
  ];

  const onAddEditStock = async (values) => {
    try {
      const payload = extractValue(values);
      const {
        ticker,
        model: id_model,
        passive_threshold_input,
        max_daily_deployment_input,
        spp_id,
        status,
        ...rest
      } = payload;
      const addUpatePayload = {
        ticker,
        id_model,
        version: values.model.version,
        status: status || "draft",
        user_id: parseInt(localStorage.getItem("io_uc")),
        params: {
          ...rest,
          passive_threshold: [
            rest.passive_threshold,
            parseInt(passive_threshold_input),
          ],
          max_daily_deployment: [
            rest.max_daily_deployment,
            parseInt(max_daily_deployment_input),
          ],
        },
        spp_id,
      };

      const queryRes = await query(addUpatePayload);
      if (isSuccessStatus(queryRes)) {
        onClose();
        toast({
          description: queryRes?.data?.message,
          status: "success",
          duration: 4000,
          isClosable: true,
          position: "top-right",
        });
      }
    } catch (error) {
      console.error("Error in onAddEditStock", error);
    }
  };

  const handleChange = (name, value) => {
    methods.setValue(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Form methods={methods} onSubmit={methods.handleSubmit(onAddEditStock)}>
      <Grid
        templateColumns={{
          lg: "repeat(6, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        columnGap={4}
        rowGap={2}
      >
        {!isNotForm && (
          <>
            <GridItem
              w="100%"
              colSpan={{
                lg: 2,
                sm: 6,
              }}
            >
              <Input
                label="Ticker"
                name="ticker"
                error={methods.formState.errors}
                rules={{ required: "This field is required" }}
                control={methods.control}
              />
            </GridItem>
            <GridItem
              w="100%"
              colSpan={{
                lg: 2,
                sm: 6,
              }}
            >
              <Select
                label="Model"
                placeholder=""
                control={methods.control}
                name="model"
                error={methods.formState.errors}
                rules={{ required: "This field is required" }}
                options={modelList}
              />
            </GridItem>
          </>
        )}
        <GridItem
          w="100%"
          colSpan={{
            lg: 6,
            sm: 6,
          }}
        >
          <Text fontSize={"20px"} color={"gray.700"} fontWeight={"bold"}>
            Stock++ Params
          </Text>
          <Text fontSize={"17px"} color={"gray.600"} fontWeight={500}>
            Position Management Params
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          colSpan={{
            lg: 2,
            sm: 6,
          }}
        >
          <HStack justifyContent={"space-between"}>
            <Text color="gray.600" fontSize={"0.8rem"}>
              Max Drawdawn
            </Text>
            <Text color="gray.700" fontWeight={600}>
              {formData.max_drawdown || 0}%
            </Text>
          </HStack>
          <Slider
            onChangeEnd={(e) => handleChange("max_drawdown", e)}
            defaultValue={formData.max_drawdown || 0}
            isDisabled={isNotForm}
          >
            <SliderTrack>
              <SliderFilledTrack bg="blue.500" />
            </SliderTrack>
            <SliderThumb bg={"blue.500"} />
          </Slider>
        </GridItem>
        <GridItem
          w="100%"
          colStart={{
            lg: 1,
            sm: 1,
          }}
          colSpan={{
            lg: 2,
            sm: 6,
          }}
        >
          <Text color="gray.600" fontSize={"0.8rem"} mb={2}>
            Passive Threshold
          </Text>
          <HStack gap={4}>
            <CustomButtonGroup
              data={dynamicConstantStaticList}
              selectedValue={methods.getValues("passive_threshold")}
              isAttached
              onClick={(e) => handleChange("passive_threshold", e.target.value)}
              isDisabled={isNotForm}
            />
            <Input
              rightAddon={"%"}
              control={methods.control}
              error={methods.formState.errors}
              rules={{ required: "This field is required" }}
              name="passive_threshold_input"
              type="number"
              isDisabled={isNotForm}
            />
          </HStack>
        </GridItem>
        <GridItem
          w="100%"
          colSpan={{
            lg: 2,
            sm: 6,
          }}
          colStart={{
            lg: 3,
            sm: 1,
          }}
        >
          <Text color="gray.600" fontSize={"0.8rem"} mb={2}>
            Max daily deployment
          </Text>
          <HStack gap={4}>
            <CustomButtonGroup
              data={dynamicConstantStaticList}
              selectedValue={methods.getValues("max_daily_deployment")}
              isAttached
              onClick={(e) =>
                handleChange("max_daily_deployment", e.target.value)
              }
              isDisabled={isNotForm}
            />
            <Input
              rightAddon={"%"}
              control={methods.control}
              error={methods.formState.errors}
              rules={{ required: "This field is required" }}
              name="max_daily_deployment_input"
              type="number"
              isDisabled={isNotForm}
            />
          </HStack>
        </GridItem>
        <GridItem w="100%" colSpan={6}>
          <Text fontSize={"17px"} color={"gray.600"} fontWeight={500}>
            Trading Params
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          colSpan={{
            lg: 2,
            sm: 6,
          }}
        >
          <Text color="gray.600" fontSize={"0.8rem"} mb={2}>
            Re-entry Permitted
          </Text>
          <HStack gap={4}>
            <CustomButtonGroup
              data={yesOrNoStaticList}
              selectedValue={formData?.re_entry[0] || null}
              isAttached
              onClick={(e) =>
                handleChange("re_entry", [
                  e.target.value,
                  formData?.re_entry[1],
                ])
              }
              isDisabled={isNotForm}
            />
            <CustomButtonGroup
              data={[
                { label: "Automatic", value: "automatic" },
                { label: "Manual", value: "manual" },
              ]}
              selectedValue={formData?.re_entry[1] || null}
              isAttached
              onClick={(e) =>
                handleChange("re_entry", [
                  formData?.re_entry[0],
                  e.target.value,
                ])
              }
              isDisabled={isNotForm}
            />
          </HStack>
        </GridItem>
        <GridItem
          w="100%"
          colSpan={{
            lg: 1,
            sm: 6,
          }}
        >
          <HStack gap={4}>
            <Stack gap={0}>
              <Text color="gray.600" fontSize={"0.8rem"} mb={2}>
                Premarket Trading
              </Text>
              <HStack gap={4}>
                <CustomButtonGroup
                  data={yesOrNoStaticList}
                  selectedValue={formData.premarket_trading}
                  isAttached
                  onClick={(e) =>
                    handleChange("premarket_trading", e.target.value)
                  }
                  isDisabled={isNotForm}
                />
              </HStack>
            </Stack>
            <Stack gap={0}>
              <Text
                color="gray.600"
                fontSize={"0.8rem"}
                mb={2}
                whiteSpace={"nowrap"}
              >
                After Hours Trading
              </Text>
              <HStack gap={4}>
                <CustomButtonGroup
                  data={yesOrNoStaticList}
                  selectedValue={formData.after_hours_trading}
                  isAttached
                  onClick={(e) =>
                    handleChange("after_hours_trading", e.target.value)
                  }
                  isDisabled={isNotForm}
                />
              </HStack>
            </Stack>
          </HStack>
        </GridItem>
        <GridItem
          w="100%"
          colSpan={{
            lg: 2,
            sm: 6,
          }}
        >
          <Text color="gray.600" fontSize={"0.8rem"} mb={2}>
            Orders Permitted
          </Text>
          <HStack gap={4}>
            <CustomButtonGroup
              data={ordersPermittedList}
              selectedValue={formData.orders_permitted}
              isAttached
              onClick={(e) => handleChange("orders_permitted", e.target.value)}
              flexWrap={{
                lg: "nowrap",
                sm: "wrap",
              }}
              isDisabled={isNotForm}
            />
          </HStack>
        </GridItem>
        <GridItem
          w="100%"
          colStart={1}
          colSpan={{
            lg: 2,
            sm: 6,
          }}
        >
          <Text color="gray.600" fontSize={"0.8rem"} mb={2}>
            Automatic Options Rollover
          </Text>
          <HStack gap={4}>
            <CustomButtonGroup
              data={yesOrNoStaticList}
              selectedValue={formData.auto_options_rollover}
              isAttached
              onClick={(e) =>
                handleChange("auto_options_rollover", e.target.value)
              }
              isDisabled={isNotForm}
            />
          </HStack>
        </GridItem>
        <GridItem w="100%" colSpan={6}>
          <Text fontSize={"17px"} color={"gray.600"} fontWeight={500}>
            Volatility Params
          </Text>
        </GridItem>
        <GridItem
          w="100%"
          colSpan={{
            lg: 3,
            sm: 6,
          }}
        >
          <Text color="gray.600" fontSize={"0.8rem"} mb={2}>
            During Volatility
          </Text>
          <HStack gap={4}>
            <CustomButtonGroup
              data={duringVolatilityList}
              selectedValue={formData.during_volatility}
              isAttached
              onClick={(e) => handleChange("during_volatility", e.target.value)}
              flexWrap={{
                lg: "nowrap",
                sm: "wrap",
              }}
              isDisabled={isNotForm}
            />
          </HStack>
        </GridItem>
        {!isNotForm && (
          <GridItem colSpan={6} textAlign="end">
            <ButtonGroup ml="auto">
              {methods.getValues("status") !== "published" && (
                <Button
                  variant="secondary"
                  onClick={() =>
                    onAddEditStock({
                      ...methods.getValues(),
                      status: "published",
                    })
                  }
                  isLoading={methods.formState.isSubmitting}
                >
                  Publish
                </Button>
              )}

              <Button variant="solid" type="submit" isLoading={methods.formState.isSubmitting}>
                Save
              </Button>
            </ButtonGroup>
          </GridItem>
        )}
      </Grid>
    </Form>
  );
};

AddStockForm.propTypes = {
  isNotForm: PropTypes.bool,
  isEdit: PropTypes.bool,
  onClose: PropTypes.func,
  data: PropTypes.object,
  modelList: PropTypes.array,
};

export default AddStockForm;
