import { useForm } from "react-hook-form";
import FormRow from "./FormRow";
import { Box, Button, Input } from "@chakra-ui/react";
import { useUpdateProfile } from "../features/profile/hooks/useUpdateProfile";
import { useUserProfile } from "../hooks/useUserProfile";
import Spinner from "./Spinner";

export default function UpdateUserProfileForm() {
  const { profileData, isLoading } = useUserProfile();

  const { register, handleSubmit, formState, reset } = useForm();
  const { errors } = formState;

  const { form, setForm, updateUser, isUpdating } = useUpdateProfile();

  function onSubmit({ full_name, username, profile_description }: any) {
    setForm({ ...form, full_name, username, profile_description });
    updateUser();
  }

  if (isLoading) return <Spinner />;
  return (
    <Box w="540px" display={"flex"} flexDirection="column">
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormRow
          label="Fullname"
          error={errors?.full_name?.message?.toString()}
        >
          <Input
            defaultValue={profileData.full_name}
            type="text"
            isDisabled={isUpdating}
            id="full_name"
            {...register("full_name", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow label="Username" error={errors?.username?.message?.toString()}>
          <Input
            defaultValue={profileData.username}
            type="text"
            id="username"
            isDisabled={isUpdating}
            {...register("username", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <FormRow
          label="Profile description"
          error={errors?.profile_description?.message?.toString()}
        >
          <Input
            defaultValue={profileData.profile_description}
            type="text"
            id="profile_description"
            isDisabled={isUpdating}
            {...register("profile_description", {
              required: "This field is required",
            })}
          />
        </FormRow>
        <Box
          mt="20px"
          display="flex"
          justifyContent="space-between"
          maxW="11rem"
        >
          <Button onClick={reset} type="reset">
            Cancel
          </Button>
          <Button type="submit" isLoading={isUpdating}>
            Submit
          </Button>
        </Box>
      </form>
    </Box>
  );
}
