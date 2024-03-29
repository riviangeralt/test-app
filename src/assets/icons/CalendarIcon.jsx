import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CalendarIcon = (props) => {
  const { width = 4, height = 4, isFilled } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 22"
      fill={isFilled ? "brand.500" : "none"}
    >
      <path
        d="M1 8V17C1 19.2091 2.79086 21 5 21H15C17.2091 21 19 19.2091 19 17V8M1 8V6.5C1 4.29086 2.79086 2.5 5 2.5H15C17.2091 2.5 19 4.29086 19 6.5V8M1 8H19M14 1V4M6 1V4"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Icon>
  );
};

CalendarIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default CalendarIcon;
