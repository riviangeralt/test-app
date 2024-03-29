import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const DeleteIcon = (props) => {
  const { width = 4, height = 4, isFilled, ...rest } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 22"
      fill="none"
      {...rest}
    >
      <path
        d="M3 7V17C3 19.2091 4.79086 21 7 21H13C15.2091 21 17 19.2091 17 17V7M12 10V16M8 10L8 16M14 4L12.5937 1.8906C12.2228 1.3342 11.5983 1 10.9296 1H9.07037C8.40166 1 7.7772 1.3342 7.40627 1.8906L6 4M14 4H6M14 4H19M6 4H1"
        stroke={isFilled ? "#EF0A0A" : "#28303F"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Icon>
  );
};

DeleteIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default DeleteIcon;
