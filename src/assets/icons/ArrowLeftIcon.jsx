import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ArrowLeftIcon = (props) => {
  const { width = 140, height = 10,  ...rest } = props;
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
        d="M0 6L10 11.7735V0.226497L0 6ZM140 5H9V7H140V5Z"
        fill="#ABABAB"
        fillOpacity="0.4"
      />
    </Icon>
  );
};

ArrowLeftIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default ArrowLeftIcon;
