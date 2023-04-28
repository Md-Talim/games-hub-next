import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';

interface Props {
  onSelectItem: (order: string) => void;
  selectedItem: string;
}

const SortSelector = ({ onSelectItem, selectedItem }: Props) => {
  const sortOrders = [
    { value: '', label: 'Relevence' },
    { value: '-added', label: 'Date Added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release Date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average Rating' },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === selectedItem
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />} fontWeight='normal'>
        Sort By:{' '}
        <Text as={'span'} fontWeight='bold'>
          {currentSortOrder?.label || 'Relevance'}
        </Text>
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem onClick={() => onSelectItem(order.value)} key={order.value}>
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
