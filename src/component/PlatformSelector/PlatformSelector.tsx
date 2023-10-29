import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatform from "../../hooks/usePlatform";
import { PlatForm } from "../../hooks/useGame";

interface Props {
  onSelectedPlatform: (platform: PlatForm | null) => void;
  selectedPlatform: PlatForm | null;
}

export const PlatformSelector = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error, isLoading } = usePlatform();
  if (error) return;
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || "platform"}
      </MenuButton>
      <MenuList>
        {data.map((paltform) => (
          <MenuItem key={paltform.id} onClick={() => onSelectedPlatform(paltform)}>
            {paltform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
