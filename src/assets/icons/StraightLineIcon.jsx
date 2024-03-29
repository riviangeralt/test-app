import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const StraightLineIcon = (props) => {
  const { width = '2px', height = '60px', isFilled, ...rest } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 2 60"
      fill="none"
      {...rest}
    >
      <path
        d="M1 1.81794e-06L1 60"
        stroke={isFilled ? "#EF0A0A" : "#ABABAB"}
        strokeOpacity="0.4"
        strokeWidth="2"
      />
    </Icon>
  );
};

StraightLineIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default StraightLineIcon;
