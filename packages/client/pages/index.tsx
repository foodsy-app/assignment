import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import type { User } from "@prisma/client";
import { Box, Container } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Header from "../components/header";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import NextChakraLink from "../components/next-chakra-link";

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  users,
}) => (
  <Box h="100vh">
    <Header />
    <Container maxW="container.xl" py={12}>
      <Table variant="simple">
        <TableCaption>Users</TableCaption>
        <Thead>
          <Tr>
            <Th>id</Th>
            <Th>email</Th>
            <Th>name</Th>
            <Th>posts</Th>
          </Tr>
        </Thead>
        <Tbody>
          {users.map((user) => (
            <Tr key={user.id}>
              <Td>{user.id}</Td>
              <Td>{user.email}</Td>
              <Td>{user.name}</Td>
              <Td>
                <Button
                  as={NextChakraLink}
                  href={`/posts?user=${user.id}`}
                  size="sm"
                  colorScheme="blue"
                >
                  View posts
                </Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>id</Th>
            <Th>email</Th>
            <Th>name</Th>
            <Th>posts</Th>
          </Tr>
        </Tfoot>
      </Table>
    </Container>
  </Box>
);

export const getStaticProps: GetStaticProps<Record<"users", User[]>> =
  async () => {
    const users = await fetch("http://localhost:4000/users").then((res) =>
      res.json()
    );

    return {
      props: {
        users,
      },
    };
  };

export default Home;
