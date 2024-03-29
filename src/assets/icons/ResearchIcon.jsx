import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const ResearchIcon = (props) => {
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
        d="M21 21L17.5 17.5M20 10.5C20 15.7467 15.7467 20 10.5 20C5.25329 20 1 15.7467 1 10.5C1 5.25329 5.25329 1 10.5 1C15.7467 1 20 5.25329 20 10.5Z"
        stroke={isFilled ? "#EF0A0A" : "#5D5C63"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 10V14"
        stroke={isFilled?"#FFF":"#5D5C63"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 8V14"
        stroke={isFilled?"#FFF":"#5D5C63"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 6V14"
        stroke={isFilled?"#FFF":"#5D5C63"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Icon>
  );
};

ResearchIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default ResearchIcon;
