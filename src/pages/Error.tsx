import { Box, Heading, Text } from '@chakra-ui/react';
import { NavBar } from '../components';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const Error = () => {
  const error = useRouteError();
  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oh no...</Heading>
        <Text>
          {isRouteErrorResponse(error)
            ? "This page doesn't exist"
            : 'An unexpected error occured.'}
        </Text>
      </Box>
    </>
  );
};

export default Error;
