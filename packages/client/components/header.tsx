import { Container, Flex } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";

const Header = () => (
  <Flex as="header" bgColor="#402441" py={6}>
    <Container d="flex" maxW="container.lg">
      <Image
        src="https://assets.website-files.com/5953bc2faaef8c203fb570b7/5bd22f5c166db1a4287b55c9_foodsy%20-%20logo%20-%20red.svg"
        alt="Foodsy Logo"
      />
    </Container>
  </Flex>
);

export default Header;
