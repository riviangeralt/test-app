import { ChevronDownIcon, Search2Icon } from "@chakra-ui/icons";
import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import { FilterIcon } from "src/assets";
import { Input } from "src/components/atoms";

const PortfolioFilterForm = () => {
  return (
    <Grid
      templateColumns={{
        lg: "repeat(5, 1fr)",
        sm: "repeat(2, 1fr)",
      }}
      gap={4}
    >
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
      <GridItem
        colStart={{
          lg: 4,
          sm: 1,
        }}
        colEnd={{
          lg: 6,
          sm: 4,
        }}
        justifyContent={"flex-end"}
        display="flex"
        gap={4}
      >
        <Button variant="solid">Add Portfolio</Button>
        <Button
          variant={"outline-secondary"}
          rightIcon={<ChevronDownIcon fontSize={"1.6rem"} />}
        >
          Action
        </Button>
      </GridItem>
    </Grid>
  );
};

export default PortfolioFilterForm;
