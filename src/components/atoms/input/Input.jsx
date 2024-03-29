import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as InputBase,
  InputGroup,
  InputLeftAddon,
  InputLeftElement,
  InputRightAddon,
  InputRightElement,
  Textarea,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { Controller } from "react-hook-form";

const Input = (props) => {
  const {
    leftIcon,
    rightIcon,
    leftAddon,
    rightAddon,
    label,
    inputType,
    name,
    control,
    error,
    rules,
    defaultValue = "",
    ...rest
  } = props;

  const RenderInput = inputType === "textarea" ? Textarea : InputBase;

  const SimpleInput = () => {
    return (
      <InputGroup>
        {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
        {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
        <RenderInput {...rest} autoComplete="off" />
        {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
        {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
      </InputGroup>
    );
  };

  return (
    <FormControl
      isInvalid={error && error[name] && error[name]?.message}
      width={rest.width || "100%"}
    >
      {label && (
        <FormLabel color="gray.600" fontWeight={400}>
          {label}
        </FormLabel>
      )}

      {control ? (
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={defaultValue}
          key={name}
          render={({ field }) => {
            return (
              <InputGroup>
                {leftAddon && <InputLeftAddon>{leftAddon}</InputLeftAddon>}
                {leftIcon && <InputLeftElement>{leftIcon}</InputLeftElement>}
                <RenderInput {...rest} {...field} autoComplete="off" />
                {rightIcon && (
                  <InputRightElement>{rightIcon}</InputRightElement>
                )}
                {rightAddon && <InputRightAddon>{rightAddon}</InputRightAddon>}
              </InputGroup>
            );
          }}
        />
      ) : (
        <SimpleInput />
      )}

      {error && error[name] && (
        <FormErrorMessage>{error[name]?.message}</FormErrorMessage>
      )}
    </FormControl>
  );
};

Input.propTypes = {
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  label: PropTypes.string,
  inputType: PropTypes.string,
  leftAddon: PropTypes.node,
  rightAddon: PropTypes.node,
  name: PropTypes.string,
  control: PropTypes.object,
  error: PropTypes.object,
  rules: PropTypes.object,
  defaultValue: PropTypes.string,
};

export default Input;
