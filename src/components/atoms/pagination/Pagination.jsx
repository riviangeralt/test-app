import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";
import { Button, HStack, IconButton, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { useCallback, useEffect, useState } from "react";

const Pagination = (props) => {
  const { noOfPages = 1, handleChange, activePage = 1, total = 10 } = props;
  const [totalPages, setTotalPages] = useState([]);

  const handleActivePageChange = (page) => {
    handleChange && handleChange(page);
  };

  const generateOutput = useCallback((input, active) => {
    const output = [];
    if (active > 2) {
      output.push("...");
    }

    let start = Math.max(1, active - 1);
    let end = Math.min(input, active + 1);

    for (let i = start; i <= end; i++) {
      output.push(i);
    }

    if (active < input - 1) {
      output.push("...");
    }

    setTotalPages(output);
  }, []);

  useEffect(() => {
    generateOutput(noOfPages, activePage);
  }, [generateOutput, activePage, noOfPages]);

  return (
    <HStack justifyContent={"flex-end"} width={"100%"} gap={2}>
      <Text>Showing {activePage * 10 + 1 -10} - {total >= activePage * 10 ? activePage * 10 : total} of {total}</Text>
      <HStack>
        <IconButton
          size="sm"
          variant="outline"
          onClick={() => handleActivePageChange(1)}
          isDisabled={activePage === 1}
        >
          <ArrowLeftIcon fontSize={"10px"} />
        </IconButton>
        <IconButton
          size="sm"
          variant="outline"
          onClick={() => handleActivePageChange(activePage - 1)}
          isDisabled={activePage === 1}
        >
          <ChevronLeftIcon fontSize={"20px"} />
        </IconButton>

        {totalPages.map((ele, i) => (
          <Button
            size="sm"
            variant={activePage === ele ? "solid" : "outline"}
            onClick={() => handleActivePageChange(ele)}
            key={i}
            isDisabled={activePage === ele || ele === "..."}
          >
            {ele}
          </Button>
        ))}

        <IconButton
          size="sm"
          variant="outline"
          onClick={() => handleActivePageChange(activePage + 1)}
          isDisabled={activePage === noOfPages}
        >
          <ChevronRightIcon fontSize={"20px"} />
        </IconButton>
        <IconButton
          size="sm"
          variant="outline"
          onClick={() => handleActivePageChange(noOfPages)}
          isDisabled={activePage === noOfPages}
        >
          <ArrowRightIcon fontSize={"10px"} />
        </IconButton>
      </HStack>
    </HStack>
  );
};

Pagination.propTypes = {
  noOfPages: PropTypes.number,
  handleChange: PropTypes.func,
  activePage: PropTypes.number,
  total: PropTypes.number,
};

export default Pagination;
