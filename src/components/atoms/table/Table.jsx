import {
  Skeleton,
  Table as TableBase,
  TableContainer
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { ResultError } from "..";

const Table = (props) => {
  const { isLoading, noDataAvailable, children } = props;

  if (noDataAvailable) {
    return (
      <ResultError
        title="No data available"
        description="We're sorry, no data found."
      />
    );
  }

  return (
    <>
      <TableContainer
        className="scrollbar-override"
        position={"relative"}
        minH={isLoading ? "500px" : "100%"}
        h="100%"
        overflowY={"auto"}
      >
        {isLoading && (
          <Skeleton
            position={"absolute"}
            top={0}
            left={0}
            width={"100%"}
            height={"100%"}
            zIndex={1}
            pointerEvents={"none"}
            cursor="not-allowed"
            opacity={0.5}
          />
        )}
        <TableBase variant="simple" pointerEvents={isLoading ? "none" : ""} userSelect={isLoading ? "none" : ""}>
          {children}
        </TableBase>
      </TableContainer>
    </>
  );
};

Table.propTypes = {
  isLoading: PropTypes.bool,
  noDataAvailable: PropTypes.bool,
  children: PropTypes.node,
};

export default Table;
