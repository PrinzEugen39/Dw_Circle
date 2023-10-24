import { Button, Card, Flex, HStack, Text } from "@chakra-ui/react";


export default function Suggestion() {
  return (
    <Card bg="whiteAlpha.200" p={4} minW="400px">
        <Text color="white">Suggested for you</Text>

        <HStack spacing={0}>
          <Flex flexDirection="column">
            <Text mt={3} fontSize="lg" fontWeight="semibold" color="white">
              Andri Subagja
            </Text>
            <Text fontSize="xs" color="whiteAlpha.600">
              @sigoblog
            </Text>
          </Flex>
          <Flex justifyContent="flex-end">
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
          </Flex>
        </HStack>
      </Card>
  )
}
