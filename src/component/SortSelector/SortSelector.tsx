import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectedSortOrder: (sortOrder: string) => void;
}
export const SortSelector = ({ onSelectedSortOrder }: Props) => {
  const sortOrder: { value: string; label: string }[] = [
    { value: "", label: "Relavance" },
    { value: "name", label: "Name" },
    { value: "-added", label: "Date added" },
    { value: "-released", label: "Release date" },
    { value: "metacritic", label: "Popularity" },
    { value: "-rating", label: "Rating" },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order
      </MenuButton>
      <MenuList>
        {sortOrder.map((order, index) => (
          <MenuItem
            key={index}
            onClick={() => onSelectedSortOrder(order.value)}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};
