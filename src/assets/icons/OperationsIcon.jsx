import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const OperationsIcon = (props) => {
  const { width = 4, height = 4, isFilled } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill={isFilled ? "brand.500" : "none"}
    >
      <path
        d="M5 1H17C19.2091 1 21 2.79086 21 5V17C21 19.2091 19.2091 21 17 21H5C2.79086 21 1 19.2091 1 17V5C1 2.79086 2.79086 1 5 1Z"
        stroke={isFilled ? "#EF0A0A" : "#5D5C63"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle
        cx="11"
        cy="11"
        r="6"
        stroke={isFilled ? "#FFF" : "#5D5C63"}
        strokeWidth="1.5"
      />
      <path
        d="M11 11L10 17"
        stroke={isFilled ? "#FFF" : "#5D5C63"}
        strokeWidth="1.5"
      />
      <path
        d="M7 7.5L11 11L16.5 9.5"
        stroke={isFilled ? "#FFF" : "#5D5C63"}
        strokeWidth="1.5"
      />
    </Icon>
  );
};

OperationsIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default OperationsIcon;
