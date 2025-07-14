import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  Flex,
  Image,
  Stack,
  Link,
  Icon,
} from "@chakra-ui/react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

const Hero = () => {
  return (
    <Box
      bgGradient="linear(to-br, #ff79c6, #3498db)" // Gradient: Sakura pink to Blue comet
      color="white"
      py={20}
      minH="100vh"
    >
      <Container maxW="container.lg" centerContent>
        <Flex direction="column" align="center" spaceY={6} spaceX={6}>
          {/* Profile Picture */}
          <Image
            src="https://bit.ly/naruto-sage" // Replace with your profile picture
            alt="Profile Picture"
            borderRadius="full"
            boxSize={["120px", "150px"]} // Responsive sizing
            objectFit="cover"
            boxShadow="lg" // Adds depth to the image
          />

          {/* Welcome Message */}
          <Heading as="h1" size="xl" fontWeight="bold" textAlign="center" color={'blue.500'}>
            Hello, I'm Adwitiya Sadhu
          </Heading>
          <Text fontSize={["md", "lg"]} textAlign="center" maxW="720px" color={'black'}>
            I am a Fresh Graduate specializing in Front-End Development, Data
            Analytics, and Machine Learning. Passionate about building scalable
            web applications and solving real-world problems.
          </Text>

          {/* Buttons and Social Links */}
          <Stack direction={["column", "row"]} justifyContent="center">
            <Button
              rounded={"full"}
              colorScheme="blackAlpha"
              variant="solid"
              px={8}
              size="lg"
              _hover={{ bg: "blackAlpha.800" }}
            >
              Contact Me Here
            </Button>
            <Button
              rounded={"full"}
              colorScheme="gray"
              variant="outline"
              px={8}
              size="lg"
              _hover={{ bg: "gray.100", color: "black" }}
            >
              Download CV
            </Button>
          </Stack>

          {/* Social Media Icons */}
          <Flex gap={4} mt={4}>
            <Link href="https://linkedin.com/in/your-profile" target="_blank">
              <Icon boxSize={6} color="white">
                <FaLinkedinIn />
              </Icon>
            </Link>
            <Link href="https://github.com/your-github" target="_blank">
              <Icon boxSize={6} color="white">
                <FaGithub />
              </Icon>
            </Link>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export { Hero };
