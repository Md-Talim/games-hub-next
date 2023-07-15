import { Outlet } from 'react-router-dom';
import { NavBar } from '../components';
import { Box } from '@chakra-ui/react';

const RootLayout = () => {
  return (
    <Box maxHeight="100vh">
      <NavBar />
      <Outlet />
    </Box>
  );
};

export default RootLayout;
