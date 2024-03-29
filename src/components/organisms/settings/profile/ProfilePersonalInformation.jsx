import { Button, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { EditIcon } from "src/assets";
import PropTypes from "prop-types";
import { Suspense, useState } from "react";
import { PersonalInformationModal } from "src/components/molecules";

const ProfilePersonalInformation = (props) => {
  const { data, refreshData } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModalOpen = () => setIsModalOpen(true);
  const handleModalClose = () => {
    setIsModalOpen(false);
    refreshData();
  }

  const userFullName = [data?.data?.first_name, data?.data?.last_name].filter(Boolean).join(" ");

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
            Personal Information
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
            Full Name
          </Text>
          <Text color="gray.700">
            {userFullName || "-"}
          </Text>
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <Text fontSize={14} color={"gray.600"}>
            Email
          </Text>
          <Text color="gray.700">{data?.data?.email || "-"}</Text>
        </GridItem>
        <GridItem
          colSpan={{
            lg: 1,
            sm: 3,
          }}
        >
          <Text fontSize={14} color={"gray.600"}>
            Mobile Number
          </Text>
          <Text color="gray.700">{data?.data?.phone || "-"}</Text>
        </GridItem>
      </Grid>
      <Suspense fallback=''>
      {isModalOpen && (
        <PersonalInformationModal
          isOpen={isModalOpen}
          onClose={handleModalClose}
          data={data?.data}
        />
      )}
      </Suspense>
    </>
  );
};

ProfilePersonalInformation.propTypes = {
  data: PropTypes.object,
  refreshData: PropTypes.func,
};

export default ProfilePersonalInformation;
