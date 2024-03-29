import { Search2Icon } from "@chakra-ui/icons";
import { Button, Grid, GridItem } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { Input } from "src/components/atoms";
import { AddAccountModal } from "src/components/molecules";
import PropTypes from "prop-types";

const AccountsFilterForm = (props) => {
  const { refreshData } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    refreshData({ page: 1, size: 10 });
  };

  return (
    <>
      <Grid
        templateColumns={{
          lg: "repeat(5, 1fr)",
          sm: "repeat(2, 1fr)",
        }}
        gap={4}
      >
        <GridItem colSpan={2}>
          <Input placeholder="Search" rightIcon={<Search2Icon />} />
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
        >
          <Button variant="solid" onClick={handleModalOpen}>
            Add Account
          </Button>
        </GridItem>
      </Grid>
      <Suspense fallback={""}>
        {isModalOpen && (
          <AddAccountModal isOpen={isModalOpen} onClose={handleModalClose} />
        )}
      </Suspense>
    </>
  );
};

AccountsFilterForm.propTypes = {
  refreshData: PropTypes.func,
};

export default AccountsFilterForm;
