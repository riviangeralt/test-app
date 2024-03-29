import { Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { Suspense, useState } from "react";
import { EditIcon } from "src/assets";
import { AddressModal } from "src/components/molecules";
import PropTypes from "prop-types";

const ProfileAddress = (props) => {
  const { data, refreshData } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    refreshData();
  };

  const cityState = [data?.data?.city, data?.data?.state]
    .filter(Boolean)
    .join(", ");

  return (
    <>
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(3, 1fr)"
        gap={4}
        border={"1px solid rgba(171, 171, 171, 0.24)"}
        p={4}
        borderRadius={4}
      >
        <GridItem
          colSpan={{
            lg: 2,
            sm: 2,
          }}
        >
          <Heading fontSize={"20px"} color="gray.700">
            Address
          </Heading>
        </GridItem>
        <GridItem colSpan={1} textAlign={"right"}>
          <Button
            variant="secondary"
            borderRadius={"full"}
            leftIcon={<EditIcon stroke="#0A68E7" />}
            onClick={handleModalOpen}
          >
            Edit
          </Button>
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <Text fontSize={14} color={"gray.600"}>
            House No.
          </Text>
          <Text color="gray.700">-</Text>
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <Text fontSize={14} color={"gray.600"}>
            Street
          </Text>
          <Text color="gray.700">{data?.data?.address || "-"}</Text>
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <Text fontSize={14} color={"gray.600"}>
            City/State
          </Text>
          <Text color="gray.700">{cityState || "-"}</Text>
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <Text fontSize={14} color={"gray.600"}>
            Country
          </Text>
          <Text color="gray.700">{data?.data?.country || "-"}</Text>
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <Text fontSize={14} color={"gray.600"}>
            Postal Code
          </Text>
          <Text color="gray.700">{data?.data?.zip || "-"}</Text>
        </GridItem>
      </Grid>
      <Suspense fallback="">
        {isModalOpen && (
          <AddressModal
            isOpen={isModalOpen}
            onClose={handleModalClose}
            data={data}
          />
        )}
      </Suspense>
    </>
  );
};

ProfileAddress.propTypes = {
  data: PropTypes.object,
  refreshData: PropTypes.func,
};

export default ProfileAddress;
