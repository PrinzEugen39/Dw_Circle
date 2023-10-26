import {
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Link,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../features/auth/hooks/useLogin";

const Login = () => {
  const navigate = useNavigate();
  const { handleChange, handleLogin } = useLogin();

  return (
    <Flex
      h="100dvh"
      alignItems="center"
      justifyContent="center"
      bg={"gray.800"}
      color={"gray.100"}
    >
      <Flex
        flexDirection="column"
        bg={"gray.700"}
        p={12}
        borderRadius={8}
        boxShadow="lg"
      >
        <Heading mb={6}>
          Log In to{" "}
          <Text as={"span"} color={"green.400"}>
            Circle
          </Text>
        </Heading>
        <FormLabel>Email</FormLabel>
        <Input
          color={"gray.900"}
          placeholder="yourmail@gmail.com"
          type="email"
          name="email"
          variant="filled"
          mb={3}
          onChange={handleChange}
        />
        <FormLabel>Password</FormLabel>
        <Input
          color={"gray.900"}
          placeholder="**********"
          type="password"
          name="password"
          variant="filled"
          mb={6}
          onChange={handleChange}
        />
        <Button colorScheme="teal" mb={8} onClick={handleLogin}>
          Log In
        </Button>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="dark_mode" mb="0">
            Don't have an account?
            <Link
              color={"blue.400"}
              as={"span"}
              onClick={() => navigate("/auth/signup")}
            >
              {" "}
              Sign Up
            </Link>
          </FormLabel>
        </FormControl>
      </Flex>
    </Flex>
  );
};

export default Login;
