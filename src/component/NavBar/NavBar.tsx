import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.jpg";
import ColorModeSwitch from "../ColorMode/ColorModeSwitch";
import { SearchInput } from "../SearchInput/SearchInput";

interface Props{
  onSearch: (serachValue: string) => void;
}
function NavBar({onSearch}: Props) {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="40px"/>
      <SearchInput onSearch={onSearch}></SearchInput>
      <ColorModeSwitch/>
    </HStack>
  );
}

export default NavBar;
