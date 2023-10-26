import {
  AbsoluteCenter,
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Stack,
  StackDivider,
  Text,
  chakra,
} from "@chakra-ui/react";
import { useThreads } from "../../../hooks/useThread";
import Spinner from "../../../components/Spinner";
import { BiMessageAltDetail } from "react-icons/bi";
import { useNavigate, useParams } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { useReplies } from "../../../hooks/useReplies";
import {
  ReplyInterface,
  ThreadReplyInterface,
} from "../../../types/RepliesItemsProps";

export default function ThreadReplies() {
  const navigate = useNavigate();
  const { threadData, isLoading } = useThreads();
  const { replyData, isLoading: replyLoading } = useReplies();

  const { id } = useParams();

  // Filter the threadData
  const filteredThreadData = threadData
    ? threadData.filter(
        (thread: ThreadReplyInterface) => thread.id === Number(id)
      )
    : [];

  const filteredReplyData = replyData
    ? replyData.filter(
        (reply: ReplyInterface) => reply.thread_id.id === Number(id)
      )
    : [];

  const { image, content, user_id, created_at, numOfLikes, numOfReplies } =
    filteredThreadData[0] || {};

  const options = {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
    hour: "2-digit" as const,
    minute: "2-digit" as const,
  };
  let formattedDate;
  if (created_at) {
    const unformattedDate = new Date(created_at);
    formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      unformattedDate
    );
  }

  if (isLoading || replyLoading) return <Spinner />;

  return (
    <Box>
      <Box color={"gray.100"}>
        <Box display={"flex"} width={"100%"} justifyContent={"space-between"}>
          <Heading size="xl" pb={8}>
            Thread Replies
          </Heading>
          <Button onClick={() => navigate(-1)}>Back</Button>
        </Box>
        <HStack>
          <Box>
            <HStack>
              <Avatar
                name="avatar"
                src={user_id.profile_picture}
                size="sm"
                mr="3"
                _hover={{
                  cursor: "pointer",
                }}
              />

              <Box>
                <Text
                  fontWeight="semibold"
                  _hover={{
                    cursor: "pointer",
                  }}
                >
                  {user_id.full_name}
                </Text>
              </Box>
              <Text color="gray.600">&bull;</Text>
              <Box>
                <chakra.time fontSize="2xs" color="gray.400">
                  {formattedDate}
                </chakra.time>
              </Box>
            </HStack>
            <Box ms="3rem">
              <Box mt="0.5rem">
                <Image
                  boxSize="300px"
                  objectFit="cover"
                  src={image}
                  alt="Dan Abramov"
                  rounded="md"
                />
              </Box>

              <Box my="2">
                <Text fontSize="0.86rem">{content}</Text>
              </Box>
              <Box>
                <HStack fontSize="xs">
                  <HStack>
                    <BsHeart />
                    <Text>{numOfLikes}</Text>
                  </HStack>

                  <HStack>
                    <BiMessageAltDetail />
                    <Text>{numOfReplies} Replies</Text>
                  </HStack>
                </HStack>
              </Box>
            </Box>
          </Box>
        </HStack>

        <Box position="relative" padding="10">
          <Divider />
          <AbsoluteCenter bg="gray.800" px="4">
            Replies
          </AbsoluteCenter>
        </Box>
      </Box>
      <Box color={"gray.100"}>
        <Stack
          borderRadius="xl"
          bgColor="gray.700"
          maxW="80%"
          mx="auto"
          flex="1"
          py="5"
          divider={
            <StackDivider w="85%" alignSelf="center" borderColor="gray.500" />
          }
        >
          {filteredReplyData.map((reply: ReplyInterface) => (
            <Box key={reply.id} px="12" pt="3">
              <Box display="flex" gap="8px">
                <Avatar
                  name="avatar"
                  src={reply.user_id.profile_picture}
                  size="sm"
                  mr="3"
                  _hover={{
                    cursor: "pointer",
                  }}
                />
                <Text fontWeight="semibold" fontSize="lg">
                  {reply.user_id.full_name}
                </Text>
              </Box>
              <Box px={12} py={5}>
                {reply.image && (
                  <Image
                    src={reply.image}
                    boxSize="200px"
                    objectFit="cover"
                    alt="Dan Abramov"
                    rounded="md"
                    mb={3}
                  />
                )}
                <Text fontSize="sm">{reply.content}</Text>
              </Box>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
}
