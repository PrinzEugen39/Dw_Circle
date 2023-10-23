import { Avatar, Box, HStack, Image, Text, chakra } from "@chakra-ui/react";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsHeartFill } from "react-icons/bs";
import { ThreadItemsProps } from "../../types/ThreadItemsProps";

export default function ThreadItems({
  avatar,
  date,
  message,
  name,
  replies,
  image,
}: ThreadItemsProps) {
  return (
    <HStack>
      <Box px="1rem">
        <HStack>
          <Avatar
            name={name}
            src={avatar}
            size="sm"
            mr="3"
            _hover={{
              cursor: "pointer",
            }}
          />
          <Text
            fontWeight="medium"
            _hover={{
              cursor: "pointer",
            }}
          >
            {name}
          </Text>
          <chakra.time fontSize="2xs" color="gray.400">
            {date}
          </chakra.time>
        </HStack>
        <Box ms="3rem">
          <Box mt="0.5rem" >
            <Image
              boxSize="300px"
              objectFit="cover"
              src={image}
              alt="Dan Abramov"
              rounded="md"
            />
            
          </Box>
          <Box my="2">
            <Text fontSize="0.86rem">{message}</Text>
          </Box>
          <Box>
            <HStack fontSize="xs">
              <HStack>
                <BsHeartFill />
                <Text>2</Text>
              </HStack>
              <HStack>
                <BiMessageAltDetail />
                <Text>{replies} Replies</Text>
              </HStack>
            </HStack>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
}
