import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const QubearIcon = (props) => {
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
        d="M21 11C21 16.5228 16.5228 21 11 21C5.47715 21 1 16.5228 1 11C1 5.47715 5.47715 1 11 1C16.5228 1 21 5.47715 21 11Z"
        stroke={isFilled ? "#EF0A0A" : "#28303F"}
        strokeWidth="1.5"
      />
      <path
        d="M16 11C16 13.7614 13.7614 16 11 16C8.23858 16 6 13.7614 6 11C6 8.23858 8.23858 6 11 6C13.7614 6 16 8.23858 16 11Z"
        stroke={isFilled ? "#fff" : "#28303F"}
        strokeWidth="1.5"
      />
      <circle cx="11" cy="11" r="1" fill={isFilled ? "#FFF" : "#28303F"} />
    </Icon>
  );
};

QubearIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default QubearIcon;
