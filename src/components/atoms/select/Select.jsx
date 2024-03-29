import { FormControl, FormErrorMessage, FormLabel } from "@chakra-ui/react";
import { Select as SelectBase } from "chakra-react-select";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const Select = (props) => {
  const { label, name, control, error, defaultValue, rules, ...rest } = props;

  const selectStyles = {
    dropdownIndicator: (base) => ({
      ...base,
      color: "gray.700",
      bg: "transparent",
    }),
    indicatorSeparator: (base) => ({
      ...base,
      display: "none",
    }),
    option: (styles, { isDisabled, isFocused, isSelected }) => ({
      ...styles,
      backgroundColor: isSelected
        ? "brand.500"
        : isFocused && !isDisabled
        ? "brand.300"
        : isDisabled
        ? "transparent"
        : "transparent",
    }),
  };

  return (
    <>
      <FormControl isInvalid={error && error[name] && error[name]?.message}>
        {label && (
          <FormLabel color="gray.600" fontWeight={400}>
            {label}
          </FormLabel>
        )}
        <Controller
          name={name}
          control={control}
          defaultValue={defaultValue}
          rules={rules}
          render={({ field }) => {
            return (
              <SelectBase {...rest}
              autoFocus={false}
              autoComplete="off"
              chakraStyles={selectStyles} {...field} />
            );
          }}
        />
        {error && error[name] && (
          <FormErrorMessage>{error[name]?.message}</FormErrorMessage>
        )}
      </FormControl>
    </>
  );
};

Select.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  control: PropTypes.object,
  error: PropTypes.object,
  defaultValue: PropTypes.object,
  rules: PropTypes.object,
};

export default Select;
