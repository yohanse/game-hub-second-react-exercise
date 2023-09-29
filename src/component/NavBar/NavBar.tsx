import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import ColorModeSwitch from "../ColorMode/ColorModeSwitch";

function NavBar() {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="40px"/>
      <ColorModeSwitch/>
    </HStack>
  );
}

export default NavBar;
