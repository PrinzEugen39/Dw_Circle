import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  IconButton,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";

export default function UserProfile() {
  const user = useSelector((state: RootState) => state?.auth);

  return (
    <Box maxW="480px">
      <FormControl isRequired mb="20px">
        <FormLabel>Username: </FormLabel>
        <Input type="text" name="userName" defaultValue={user?.username} />
      </FormControl>
      <FormControl isRequired mb="20px">
        <FormLabel>Full name: </FormLabel>
        <Input type="text" name="fullName" defaultValue={user?.full_name} />
      </FormControl>
      <FormControl isRequired mb="20px">
        <FormLabel>Status: </FormLabel>
        <Textarea name="bio" defaultValue={user?.profile_description} />
      </FormControl>
      <FormControl isRequired mb="20px">
        <FormLabel>Profile picture: </FormLabel>
        <Box position="relative" display="inline-block">
          <IconButton
            variant="filled"
            colorScheme="green"
            aria-label="Send email"
            icon={<EditIcon />}
            position="absolute"
            top={0}
            left={0}
            opacity={0}
            _hover={{ opacity: 1, zIndex: "10" }}
          />

          <Avatar
            src={user.profile_picture}
            boxSize="180px"
            objectFit="cover"
            rounded="full"
          />
        </Box>
      </FormControl>
      <Button type="submit" mt="20px">
        Submit
      </Button>
    </Box>
  );
}
