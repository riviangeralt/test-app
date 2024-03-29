import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { SingleDatepicker } from "chakra-dayzed-datepicker";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";
import { CalendarIcon } from "src/assets";

const Datepicker = (props) => {
  const { label, name, control, error, rules, defaultValue, ...rest } = props;

  const datepickerStyles = {
    dayOfMonthBtnProps: {
      defaultBtnProps: {
        _hover: {
          background: "brand.500",
          color: "#FFF",
        },
      },
      selectedBtnProps: {
        background: "brand.700",
        color: "#FFF",
      },
    },
    popoverCompProps: {
      popoverContentProps: {
        border: "none",
        borderRadius: 10,
      },
      popoverBodyProps: {
        padding: 0,
      },
    },
  };

  return (
    <FormControl isInvalid={error && error[name] && error[name]?.message}>
      {label && (
        <FormLabel color="gray.600" fontWeight={400}>
          {label}
        </FormLabel>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        defaultValue={defaultValue}
        render={({ field }) => {
          return (
            <InputGroup>
              <SingleDatepicker
                date={field.value}
                onDateChange={field.onChange}
                usePortal
                propsConfigs={datepickerStyles}
                {...rest}
                {...field}
              />
              <InputRightElement>
                <CalendarIcon />
              </InputRightElement>
            </InputGroup>
          );
        }}
      />
      {error && error[name] && (
        <FormErrorMessage>{error[name]?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

Datepicker.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.object,
  error: PropTypes.object,
  rules: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default Datepicker;
