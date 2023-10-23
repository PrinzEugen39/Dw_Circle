import { Box, Button, Heading, List, ListItem, Stack } from "@chakra-ui/react";
import { BiHomeCircle } from "react-icons/bi";
import { NavLink } from "react-router-dom";

export default function Sidebar() {
  return (
    <Box position="fixed" minW="max-content">
      <Box>
        <Heading color={"green.400"} pb={8}>
          Circle
        </Heading>
      </Box>
      <List color="white" fontSize="1rem" spacing={4}>
        <Box display={"flex"} alignItems="center">
          <BiHomeCircle />
          <ListItem ms={3}>
            <NavLink to="/">Home.</NavLink>
          </ListItem>
        </Box>
        <Box display={"flex"} alignItems="center">
          <BiHomeCircle />
          <ListItem ms={3}>
            <NavLink to="/">Search.</NavLink>
          </ListItem>
        </Box>
        <Box display={"flex"} alignItems="center">
          <BiHomeCircle />
          <ListItem ms={3}>
            <NavLink to="/">Follows.</NavLink>
          </ListItem>
        </Box>
        <Box display={"flex"} alignItems="center">
          <BiHomeCircle />
          <ListItem ms={3}>
            <NavLink to="/">Profile.</NavLink>
          </ListItem>
        </Box>
      </List>
      <Stack pt="10">
        <Button rounded="full" color="white" colorScheme="green" w="200px">
          Create Post
        </Button>
      </Stack>
    </Box>
  );
}
