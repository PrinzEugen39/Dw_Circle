import { useSelector } from "react-redux";
import { RootState } from "../../store/type/RootState";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  IconButton,
  Image,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { EditIcon } from "@chakra-ui/icons";

export default function UserProfile() {
  const [editProfile, setEditProfile] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state?.auth);

  return (
    <Box maxW="480px">
      <FormControl display="flex" alignItems="center" my="20px">
        <Checkbox
          size="lg"
          colorScheme="purple"
          isChecked={editProfile}
          onChange={() => setEditProfile((edit) => !edit)}
        />
        <FormLabel ml="10px" mb="0">
          Edit Profile
        </FormLabel>
      </FormControl>

      <FormControl isRequired mb="20px" isDisabled={!editProfile}>
        <FormLabel>Username: </FormLabel>
        <Input type="text" name="title" defaultValue={user?.username} />
      </FormControl>
      <FormControl isRequired mb="20px" isDisabled={!editProfile}>
        <FormLabel>Full name: </FormLabel>
        <Input type="text" name="title" defaultValue={user?.full_name} />
      </FormControl>
      <FormControl isRequired mb="20px" isDisabled={!editProfile}>
        <FormLabel>Email: </FormLabel>
        <Input type="email" name="title" defaultValue={user?.email} />
      </FormControl>
      <FormControl isRequired mb="20px" isDisabled={!editProfile}>
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
          <Image
            src={user?.profile_picture}
            boxSize="180px"
            objectFit="cover"
            rounded="lg"
          />
        </Box>
      </FormControl>
      <Button type="submit" mt="20px">
        Submit
      </Button>
    </Box>
  );
}
