import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Avatar,
  HStack,
  IconButton,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { LogoIcon } from "src/assets";

const Navbar = (props) => {
  const { toggleSideMenu } = props;

  const handleLogoutClick = () => {
    localStorage.clear();
    window.location.href = "/";
  };
  return (
    <HStack
      borderBottom="1px solid #ededed"
      width="100%"
      height="100%"
      alignItems={"center"}
      justifyContent={"space-between"}
      p={3}
    >
      <HStack>
        <IconButton
          variant={"outline"}
          display={{
            sm: "block",
            lg: "none",
          }}
          onClick={toggleSideMenu}
        >
          <HamburgerIcon />
        </IconButton>
        <LogoIcon cursor={"pointer"} />
      </HStack>
      <Popover tabIndex={-1}>
        <PopoverTrigger>
          <Avatar
            size={"sm"}
            cursor={"pointer"}
            name={localStorage.getItem("io_un")}
            bg="brand.500"
            color={"white"}
          />
        </PopoverTrigger>
        <Portal>
          <PopoverContent
            mr={4}
            tabIndex={-1}
            outline={"none"}
            _focusVisible={{
              boxShadow: "none",
            }}
          >
            <PopoverBody px={0}>
              <HStack
                py={1}
                px={2}
                onClick={handleLogoutClick}
                cursor={"pointer"}
                _hover={{
                  bg: "gray.100",
                }}
              >
                <Text>Logout</Text>
              </HStack>
            </PopoverBody>
          </PopoverContent>
        </Portal>
      </Popover>
    </HStack>
  );
};

Navbar.propTypes = {
  toggleSideMenu: PropTypes.func,
};

export default Navbar;
