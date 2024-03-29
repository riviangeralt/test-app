import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ArrowRightIcon = (props) => {
  const { width = 140, height = 10, ...rest } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 140 10"
      fill="none"
      {...rest}
    >
      <path
        xmlns="http://www.w3.org/2000/svg"
        d="M140 6L130 0.226497V11.7735L140 6ZM131 5H0V7H131V5Z"
        fill="#ABABAB"
        fillOpacity="0.4"
      />
    </Icon>
  );
};

ArrowRightIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default ArrowRightIcon;
