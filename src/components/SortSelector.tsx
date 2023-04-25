import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

const SortSelector = () => {
  const sortOrders = [
    { value: '', label: 'Relevence' },
    { value: 'added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: 'released', label: 'Release Date' },
    { value: 'metacritic', label: 'Popularity' },
    { value: 'rating', label: 'Average Rating' },
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By: Relevence
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem key={order.value}>{order.label}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
