import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ViewIcon = (props) => {
  const { width = 4, height = 4, isFilled, ...rest } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill={isFilled ? "brand.500" : "none"}
      {...rest}
    >
      <path
        d="M11 1V3M20 4L18.5 5.5M1.99997 4L3.49997 5.5M11 21C14.6042 21 17.8134 18.6545 19.8772 16.6789C21.3743 15.2458 21.3743 12.7542 19.8772 11.3211C17.8134 9.34551 14.6042 7 11 7C7.3958 7 4.18661 9.34551 2.12281 11.3211C0.625731 12.7542 0.625732 15.2458 2.12281 16.6789C4.18661 18.6545 7.3958 21 11 21ZM14 14C14 15.6569 12.6568 17 11 17C9.34312 17 7.99997 15.6569 7.99997 14C7.99997 12.3431 9.34312 11 11 11C12.6568 11 14 12.3431 14 14Z"
        stroke="#28303F"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Icon>
  );
};

ViewIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default ViewIcon;
