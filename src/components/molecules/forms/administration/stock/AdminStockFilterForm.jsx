import { Search2Icon } from "@chakra-ui/icons";
import { Button, Grid, GridItem, HStack } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { FilterIcon } from "src/assets";
import { Input } from "src/components/atoms";
import { AddStockModal } from "src/components/molecules";
import PropTypes from "prop-types";

const AdminStockFilterForm = (props) => {
  const { refreshData } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    refreshData({ page: 1, size: 10 });
  }

  return (
    <>
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem
          colSpan={{
            lg: 2,
            sm: 5,
          }}
        >
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
          colEnd={6}
          textAlign={"end"}
        >
          <Button
            variant={"solid"}
            marginLeft={"auto"}
            onClick={handleModalOpen}
            width={{
              sm: "100%",
              lg: "auto",
            }}
          >
            Add Stock++
          </Button>
        </GridItem>
      </Grid>
      <Suspense fallback="">
        {isModalOpen && (
          <AddStockModal isOpen={isModalOpen} onClose={handleModalClose} />
        )}
      </Suspense>
    </>
  );
};

AdminStockFilterForm.propTypes = {
  refreshData: PropTypes.func,
};

export default AdminStockFilterForm;
