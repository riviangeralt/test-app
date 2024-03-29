import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const FilterIcon = (props) => {
  const { width = 4, height = 4, isFilled } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={isFilled ? "brand.500" : "none"}
    >
      <path
        d="M3 8H21"
        stroke="#5D5C63"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6 12H18"
        stroke="#5D5C63"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M8 16H16"
        stroke="#5D5C63"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </Icon>
  );
};

FilterIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default FilterIcon;
