import UpdateUserPasswordForm from "../../components/UpdateUserPasswordForm";

export default function UserCredientials() {
  return (
    <UpdateUserPasswordForm />
    // <Box maxW="480px">
    //   <FormControl display="flex" alignItems="center" my="20px">
    //     <Checkbox
    //       size="lg"
    //       colorScheme="purple"
    //       isChecked={editProfile}
    //       onChange={() => setEditProfile((edit) => !edit)}
    //     />
    //     <FormLabel ml="10px" mb="0">
    //       Edit Profile
    //     </FormLabel>
    //   </FormControl>

    //   <FormControl isRequired mb="20px" isDisabled={true}>
    //     <FormLabel>Email: </FormLabel>
    //     <Input type="email" name="email" defaultValue={user?.email} />
    //   </FormControl>
    //   <FormControl isRequired mb="20px" isDisabled={!editProfile}>
    //     <FormLabel>New Password: </FormLabel>
    //     <Input type="password" name="password" />
    //   </FormControl>
    //   <FormControl isRequired mb="20px" isDisabled={!editProfile}>
    //     <FormLabel>Confirm new password: </FormLabel>
    //     <Input type="password" name="confirmPassword" />
    //   </FormControl>
    //   <Button type="submit" mt="20px">
    //     Submit
    //   </Button>
    // </Box>
  );
}
