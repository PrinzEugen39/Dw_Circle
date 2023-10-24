import { BiImageAdd } from "react-icons/bi";
import {
  Heading,
  Avatar,
  IconButton,
  Input,
  Button,
  HStack,
  Flex,
  Stack,
  StackDivider,
  Box,
} from "@chakra-ui/react";

import { chatData } from "../../mocks/thread";
import ThreadItems from "./ThreadItems";

export default function Thread() {
  return (
    <>
      <Heading color={"gray.100"} size="xl" pb={8}>
        Home
      </Heading>
      <Posts />
    </>
  );
}

function Posts() {
  return (
    <Flex direction="column" color={"gray.100"}>
      <HStack maxW={"6xl"} justifyContent={"center"} gap={5}>
        <Avatar
          size="sm"
          name="Dan Abrahmov"
          src="https://bit.ly/dan-abramov"
        />
        <Input
          variant="flushed"
          placeholder="What's on your mind"
          maxW="25rem"
        />
        <IconButton aria-label="Search database" icon={<BiImageAdd />} />
        <Button colorScheme="green">Post</Button>
      </HStack>

      <Stack
        flex="1"
        py="5"
        divider={
          <StackDivider w="95%" alignSelf="center" borderColor="gray.600" />
        }
      >
        {chatData.map((thread) => (
          <Box key={thread.id} py="3">
            <ThreadItems
              avatar={thread.avatar}
              date={thread.date}
              message={thread.message}
              name={thread.name}
              replies={thread.replies}
              image={thread.image}
            />
          </Box>
        ))}
      </Stack>
    </Flex>
  );
}
