import {
  AbsoluteCenter,
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Image,
  Input,
  InputGroup,
  Stack,
  StackDivider,
  Text,
  chakra,
} from "@chakra-ui/react";
import Spinner from "../../../components/Spinner";
import { BiMessageAltDetail } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { BsHeart } from "react-icons/bs";
import { ChatIcon } from "@chakra-ui/icons";
import { useCreateReply } from "../../../hooks/useCreateReply";
import { useThreadReplies } from "../../../hooks/useThreadsReplies";
import { ReplyInterface } from "../../../types/RepliesItemsProps";

export default function ThreadReplies() {
  const navigate = useNavigate();
  const { threadReply, isLoading } = useThreadReplies();
  const { form, handleChange, handleReply } = useCreateReply();
  
  if (isLoading) return <Spinner />;
  console.log(threadReply);

  const options = {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
    hour: "2-digit" as const,
    minute: "2-digit" as const,
  };
  let formattedDate;

  if (threadReply.created_at) {
    const unformattedDate = new Date(threadReply.created_at);
    formattedDate = new Intl.DateTimeFormat("en-US", options).format(
      unformattedDate
    );
  }


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
                src={threadReply.user_id.profile_picture}
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
                  {threadReply.user_id.full_name}
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
                  src={threadReply.image}
                  alt="Dan Abramov"
                  rounded="md"
                />
              </Box>

              <Box my="2">
                <Text fontSize="0.86rem">{threadReply.content}</Text>
              </Box>
              <Box>
                <HStack fontSize="xs">
                  <HStack>
                    <BsHeart />
                    <Text>10</Text>
                  </HStack>

                  <HStack>
                    <BiMessageAltDetail />
                    <Text>{threadReply.replies.length} Replies</Text>
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
          <Box display={"flex"} mx={"8"}>
            <InputGroup>
              <Input
                type="text"
                placeholder=""
                name="content"
                borderRightRadius="none"
                borderRight="none"
                borderColor="gray.500"
                onChange={handleChange}
              />
            </InputGroup>
            <Button
              bgColor="green.500"
              borderLeftRadius="none"
              _hover={{ cursor: "pointer" }}
              onClick={() => handleReply.mutate(form)}
            >
              <ChatIcon color="gray.100" ms="2" />
              <Text mx="2">Send Reply</Text>
            </Button>
          </Box>
          {threadReply.replies.map((reply: ReplyInterface) => (
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
              <Box px={12} py={3}>
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
