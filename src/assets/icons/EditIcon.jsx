import { Icon } from "@chakra-ui/react";
import PropTypes from "prop-types";

const EditIcon = (props) => {
  const { width = 4, height = 4, isFilled, stroke, ...rest } = props;
  return (
    <Icon
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 22"
      fill='none'
      {...rest}
    >

        <path
          d="M21 11V17C21 19.2091 19.2091 21 17 21H5C2.79086 21 1 19.2091 1 17V5C1 2.79086 2.79086 1 5 1H11M14.6864 3.02275C14.6864 3.02275 14.6864 4.45305 16.1167 5.88334C17.547 7.31364 18.9773 7.31364 18.9773 7.31364M8.15467 14.9896L11.1583 14.5605C11.5916 14.4986 11.9931 14.2978 12.3025 13.9884L20.4076 5.88334C21.1975 5.09341 21.1975 3.81268 20.4076 3.02275L18.9773 1.59245C18.1873 0.802517 16.9066 0.802517 16.1167 1.59245L8.01164 9.69746C7.70217 10.0069 7.50142 10.4084 7.43952 10.8417L7.01044 13.8453C6.91508 14.5128 7.4872 15.0849 8.15467 14.9896Z"
          stroke={stroke?stroke:isFilled ? '#EF0A0A':"#28303F"}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
    </Icon>
  );
};

EditIcon.propTypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  isFilled: PropTypes.bool,
  stroke: PropTypes.string,
};

export default EditIcon;
