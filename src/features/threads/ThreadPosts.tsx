import {
  Avatar,
  Box,
  Button,
  Flex,
  FormControl,
  HStack,
  IconButton,
  Input,
  Stack,
  StackDivider,
} from "@chakra-ui/react";
import { BiImageAdd } from "react-icons/bi";
import ThreadItems from "./ThreadItems";
import { ThreadPostsProps } from "../../types/ThreadItemsProps";
import Spinner from "../../components/Spinner";
import { useThreads } from "../../hooks/useThread";
import { useCreateThread } from "../../hooks/useCreateThread";

export default function ThreadPosts() {
  const { threadData, isLoading } = useThreads();
  const { form, handleChange, handlePost } = useCreateThread();

  if (isLoading) return <Spinner />;

  return (
    <Flex direction="column" color={"gray.100"}>
      <form encType="multipart/form-data" onSubmit={() => handlePost.mutate(form)}>
        <FormControl>
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
              name="content"
              onChange={handleChange}
            />
            <IconButton aria-label="Search database" icon={<BiImageAdd />} />
            <Button colorScheme="green" type="submit">
              Post
            </Button>
          </HStack>
        </FormControl>
      </form>

      <Stack
        flex="1"
        py="5"
        divider={
          <StackDivider w="95%" alignSelf="center" borderColor="gray.600" />
        }
      >
        {threadData?.map((thread: ThreadPostsProps) =>
          thread.user_id ? (
            <Box key={thread.id} py="3">
              <ThreadItems
                id={thread.id}
                username={thread.user_id.full_name}
                userphoto={thread.user_id.profile_picture}
                content={thread.content}
                image={thread.image}
                date={thread.created_at}
                likes={thread.numOfLikes}
                replies={thread.numOfReplies}
              />
            </Box>
          ) : null
        )}
      </Stack>
    </Flex>
  );
}
