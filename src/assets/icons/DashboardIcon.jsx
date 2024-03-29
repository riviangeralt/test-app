import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const DashboardIcon = (props) => {
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
        d="M1 3C1 1.89543 1.89543 1 3 1H7C8.10457 1 9 1.89543 9 3V7C9 8.10457 8.10457 9 7 9H3C1.89543 9 1 8.10457 1 7V3Z"
        stroke={isFilled ? "brand.500" : "#5D5C63"}
        strokeWidth="1.5"
      />
      <path
        d="M21 5C21 7.20914 19.2091 9 17 9C14.7909 9 13 7.20914 13 5C13 2.79086 14.7909 1 17 1C19.2091 1 21 2.79086 21 5Z"
        stroke={isFilled ? "brand.500" : "#5D5C63"}
        strokeWidth="1.5"
      />
      <path
        d="M9 17C9 19.2091 7.20914 21 5 21C2.79086 21 1 19.2091 1 17C1 14.7909 2.79086 13 5 13C7.20914 13 9 14.7909 9 17Z"
        stroke={isFilled ? "brand.500" : "#5D5C63"}
        strokeWidth="1.5"
      />
      <path
        d="M13 15C13 13.8954 13.8954 13 15 13H19C20.1046 13 21 13.8954 21 15V19C21 20.1046 20.1046 21 19 21H15C13.8954 21 13 20.1046 13 19V15Z"
        stroke={isFilled ? "brand.500" : "#5D5C63"}
        strokeWidth="1.5"
      />
    </Icon>
  );
};

DashboardIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default DashboardIcon;