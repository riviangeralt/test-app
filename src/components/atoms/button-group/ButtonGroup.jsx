import { Button, ButtonGroup as ButtonGroupBase } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CustomButtonGroup = (props) => {
  const { data, selectedValue, ...rest } = props;
  return (
    <ButtonGroupBase {...rest}>
      {data.map((item) => (
        <Button
          key={item.value}
          variant={
            selectedValue === item.value?.toString()
              ? "secondary"
              : "secondary-ghost"
          }
          value={item.value}
        >
          {item.label}
        </Button>
      ))}
    </ButtonGroupBase>
  );
};

CustomButtonGroup.propTypes = {
  data: PropTypes.array,
  selectedValue: PropTypes.string,
};

export default CustomButtonGroup;
