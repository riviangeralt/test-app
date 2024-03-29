import { Spinner, Stack } from "@chakra-ui/react";
import { useEffect } from "react";
import { ioWebapiFetchProfile } from "src/api-client";
import { Breadcrumb } from "src/components/atoms";
import { useFetch } from "src/components/hooks";
import { ProfileChangePasswordForm } from "src/components/molecules";
import {
  ProfileAddress,
  ProfilePersonalInformation,
} from "src/components/organisms";

const Profile = () => {
  const { query, data, isLoading } = useFetch(ioWebapiFetchProfile);
  const breadcrumbs = [
    {
      label: "Settings",
    },
    {
      label: "Profile",
    },
  ];

  useEffect(() => {
    query();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <Stack h="100%" w="100%" alignItems={"center"} justifyContent={"center"}>
        <Spinner color="brand.500" size="xl" />
      </Stack>
    );
  }

  return (
    <Stack gap={6}>
      <Breadcrumb list={breadcrumbs} />
      <ProfilePersonalInformation data={data} refreshData={query}/>
      <ProfileAddress data={data} refreshData={query}/>
      <ProfileChangePasswordForm />
    </Stack>
  );
};

export default Profile;
