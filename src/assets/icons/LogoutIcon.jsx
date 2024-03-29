import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const LogoutIcon = (props) => {
  const { width = 4, height = 4, isFilled, ...rest } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={isFilled ? "brand.500" : "none"}
      {...rest}
    >
        <path fill="none" d="M0 0h24v24H0z"></path>
        <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z"></path>
    </Icon>
  );
};

LogoutIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default LogoutIcon;
