import {
  Breadcrumb as BreadcrumbBase,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import PropTypes from "prop-types";

const Breadcrumb = (props) => {
  const { list, separator } = props;

  if (list.length === 0) return <></>;

  return (
    <BreadcrumbBase
      separator={separator}
      flexWrap={"wrap"}
      __css={{
        "& ol": {
          flexWrap: "wrap",
        },
      }}
    >
      {list.map((item, index) => {
        const isFirst = index === 0;
        const isLast = index === list.length - 1;
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink
              color={isFirst ? "#919191" : isLast ? "#323a48" : "#8e939b"}
              as={"span"}
            >
              {item.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
    </BreadcrumbBase>
  );
};

Breadcrumb.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ),
  separator: PropTypes.string,
};

export default Breadcrumb;
