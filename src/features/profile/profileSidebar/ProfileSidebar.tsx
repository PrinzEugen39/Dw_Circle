import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  HStack,
  Stack,
  Text,
} from "@chakra-ui/react";
import Suggestion from "./Suggestion";
import DevelopedBy from "./DevelopedBy";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/type/RootState";
import { Link } from "react-router-dom";

export default function ProfileSidebar() {
  const user = useSelector((state: RootState) => state?.auth);

  return (
    <Box display="flex" flexDirection="column" gap={5}>
      <Card bg="whiteAlpha.200" px={4} py="2" minW="400px">
        <Box
          pos="relative"
          h="70px"
          mt={3}
          rounded="xl"
          bg="linear-gradient(to top, #96fbc4 0%, #f9f586 100%)"
        >
          <Box
            pos="absolute"
            bottom={-6}
            left={4}
            p={1}
            bg="blackAlpha.800"
            rounded="full"
          >
            <Avatar size="md" src={user?.profile_picture} />
          </Box>
        </Box>
        <Flex justify="right" mt={-6}>
          <Link to="/profile">
            <Button
              colorScheme="whiteAlpha"
              color="white"
              size="xs"
              rounded="full"
              variant="outline"
              mt={8}
              w="fit-content"
            >
              Edit Profile
            </Button>
          </Link>
        </Flex>

        <Stack spacing={0}>
          <Text mt={3} fontSize="lg" fontWeight="semibold" color="white">
            😁 {user?.full_name}
          </Text>
          <Text fontSize="xs" color="whiteAlpha.600">
            @{user?.username}
          </Text>
          <Text fontSize="sm" color="whiteAlpha.800">
            {user?.profile_description}
          </Text>
          <HStack fontSize="sm">
            <HStack>
              <Text color="whiteAlpha.800">{user?.numfollowing}</Text>
              <Text color="whiteAlpha.600">Following</Text>
            </HStack>
            <HStack>
              <Text color="whiteAlpha.800">{user?.numfollowers}</Text>
              <Text color="whiteAlpha.600">Followers</Text>
            </HStack>
          </HStack>
        </Stack>
      </Card>
      <Suggestion />
      <DevelopedBy />
    </Box>
  );
}
