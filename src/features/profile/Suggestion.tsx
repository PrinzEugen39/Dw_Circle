import { Box, Button, Card, Flex, HStack, Text } from "@chakra-ui/react";

export default function Suggestion() {
  return (
    <Card bg="whiteAlpha.200" p={4} minW="400px">
      <Text color="white">Suggested for you</Text>

      <HStack spacing={0} justifyContent={"space-between"} px={2}>
        <Box>
          <Flex flexDirection="column">
            <Text mt={3} fontSize="sm" fontWeight="semibold" color="white">
              Andri Subagja
            </Text>
            <Text fontSize="xs" color="whiteAlpha.600">
              @sigoblog
            </Text>
          </Flex>
        </Box>
        <Box>
          <Button
            colorScheme="whiteAlpha"
            color="white"
            size="xs"
            rounded="full"
            variant="outline"
            mt={8}
            w="fit-content"
          >
            Follow
          </Button>
        </Box>
      </HStack>

      <HStack spacing={0} justifyContent={"space-between"} px={2}>
        <Box>
          <Flex flexDirection="column">
            <Text mt={3} fontSize="sm" fontWeight="semibold" color="white">
              Heri Nozi
            </Text>
            <Text fontSize="xs" color="whiteAlpha.600">
              @ozi3
            </Text>
          </Flex>
        </Box>
        <Box>
          <Button
            colorScheme="whiteAlpha"
            color="white"
            size="xs"
            rounded="full"
            variant="outline"
            mt={8}
            w="fit-content"
          >
            Follow
          </Button>
        </Box>
      </HStack>
    </Card>
  );
}
