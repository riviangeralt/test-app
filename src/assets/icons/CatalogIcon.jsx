import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const CatalogIcon = (props) => {
  const { width = 4, height = 4, isFilled } = props;

  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill={isFilled ? "brand.500" : "none"}
    >
      <path
        d="M10 4.05337V18.3025M3.7 6.25464C4.8392 6.45067 6.11 6.77657 7.3 7.28788M3.7 10.2546C4.27554 10.3537 4.88467 10.4859 5.5 10.6584M2.7949 1.01127C4.79143 1.26195 7.47382 1.93632 9.38514 3.42445C9.75248 3.71045 10.2475 3.71045 10.6149 3.42445C12.5262 1.93632 15.2086 1.26195 17.2051 1.01127C18.1932 0.887209 19 1.80402 19 2.93518V14.2C19 15.3311 18.1932 16.2483 17.2051 16.3723C15.2086 16.623 12.5262 17.2974 10.6149 18.7855C10.2475 19.0715 9.75248 19.0715 9.38514 18.7855C7.47382 17.2974 4.79143 16.623 2.7949 16.3723C1.80678 16.2483 1 15.3311 1 14.2V2.93518C1 1.80402 1.80678 0.887209 2.7949 1.01127Z"
        stroke={isFilled ? "#fff" : "#5D5C63"}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </Icon>
  );
};

CatalogIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
};

export default CatalogIcon;
