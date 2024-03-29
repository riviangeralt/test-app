import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Button,
  Grid,
  GridItem,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { FilterIcon } from "src/assets";
import { Input } from "src/components/atoms";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const StockFilterForm = (props) => {
  const { data } = props;
  const navigate = useNavigate();
  const handleBacktest = () =>
    navigate(`/research/backtesting/${data[0]?.version}`, {
      state: {
        ticker: data[0]?.ticker,
      },
    });

  const handleSimulate = () =>
    navigate(`/research/simulation/${data[0]?.version}`, {
      state: {
        ticker: data[0]?.ticker,
      },
    });

  return (
    <Grid templateColumns="repeat(5, 1fr)" gap={4}>
      <GridItem colSpan={2}>
        <HStack gap={4}>
          <Input placeholder="Search" rightIcon={<Search2Icon />} />
          <Button
            variant={"outline-secondary"}
            leftIcon={<FilterIcon width={6} height={6} />}
          >
            Filter
          </Button>
        </HStack>
      </GridItem>
      <GridItem colStart={4} colEnd={6} textAlign={"end"}>
        <Menu>
          <MenuButton
            as={Button}
            variant={"outline-secondary"}
            rightIcon={<ChevronDownIcon fontSize={"1.6rem"} />}
            marginLeft={"auto"}
            isDisabled={data.length === 0}
          >
            Action
          </MenuButton>
          <MenuList>
            <MenuItem onClick={handleBacktest}>Backtest</MenuItem>
            <MenuItem onClick={handleSimulate}>Simulate</MenuItem>
          </MenuList>
        </Menu>
      </GridItem>
    </Grid>
  );
};

StockFilterForm.propTypes = {
  data: PropTypes.array,
};

export default StockFilterForm;
