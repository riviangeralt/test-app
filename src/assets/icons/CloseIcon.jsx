import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CloseIcon = (props) => {
  const { width = 4, height = 4, isFilled } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 13 15"
      fill="none"
    >
      <path
        d="M2.87109 0.78125L6.28906 6.23047L9.70703 0.78125H11.9043L7.41211 7.82227L12.0117 15H9.79492L6.28906 9.44336L2.7832 15H0.566406L5.16602 7.82227L0.673828 0.78125H2.87109Z"
        fill={isFilled ? "#EF0A0A" : "#FFF"}
      />
    </Icon>
  );
};

CloseIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default CloseIcon;
