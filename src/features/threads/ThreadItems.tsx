import { Avatar, Box, HStack, Image, Text, chakra } from "@chakra-ui/react";
import { BiMessageAltDetail } from "react-icons/bi";
import { BsHeart, BsHeartFill } from "react-icons/bs";
import { ThreadItemsProps } from "../../types/ThreadItemsProps";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ThreadItems({
  id,
  username,
  userphoto,
  content,
  image,
  date,
  likes,
  replies,
}: ThreadItemsProps) {
  const [like, setLike] = useState<boolean>(false);

  function handleClick() {
    setLike(!like);
  }

  const unformattedDate = new Date(date);

  const options = {
    year: "numeric" as const,
    month: "long" as const,
    day: "numeric" as const,
    hour: "2-digit" as const,
    minute: "2-digit" as const,
  };

  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(
    unformattedDate
  );

  return (
    <HStack>
      <Box px="1rem">
        <HStack>
          <Avatar
            name={content}
            src={userphoto}
            size="sm"
            mr="3"
            _hover={{
              cursor: "pointer",
            }}
          />

          <Box>
            <Text
              fontWeight="medium"
              _hover={{
                cursor: "pointer",
              }}
            >
              {username}
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
          {image && (
            <Box mt="0.5rem">
              <Image
                boxSize="300px"
                objectFit="cover"
                src={image}
                alt="Dan Abramov"
                rounded="md"
              />
            </Box>
          )}
          <Box my="2">
            <Text fontSize="0.86rem">{content}</Text>
          </Box>
          <Box>
            <HStack fontSize="xs">
              <HStack onClick={handleClick}>
                {like ? <BsHeartFill /> : <BsHeart />}
                <Text>{likes}</Text>
              </HStack>
              <Link to={`/threads/${id}`}>
                <HStack>
                  <BiMessageAltDetail />
                  <Text>{replies} Replies</Text>
                </HStack>
              </Link>
            </HStack>
          </Box>
        </Box>
      </Box>
    </HStack>
  );
}
