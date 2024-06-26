"use client";
import { movies } from "@/data/movies";
import { InfoIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  SimpleGrid,
  Spinner,
  Text,
} from "@chakra-ui/react";
import MovieCard from "../components/MovieCard";
import { useList } from "../context/MyListContext";

export default function MyListPage() {
  const { myList, toggleMyList, isLoading } = useList();

  if (isLoading) {
    return (
      <Flex justify="center" align="center" height="100vh">
        <Spinner size={"xl"} color="red.500" />
      </Flex>
    );
  }

  return (
    <Box color={"white"} mt={"7rem"}>
      <Flex direction="column" align="center">
        {myList.length > 0 ? (
          <Text fontSize={["2xl", "3xl", "4xl"]} fontWeight="bold" mb={4}>
            My List
          </Text>
        ) : (
          <Box textAlign="center" py={10} px={6}>
            <InfoIcon boxSize={"50px"} color={"red.500"} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              Your list is empty!
            </Heading>
          </Box>
        )}
      </Flex>
      <SimpleGrid
        width="90%"
        m="2rem auto"
        alignContent={"center"}
        mt="2rem"
        columns={{ base: 1, md: 2, lg: 4 }}
        columnGap={8}
      >
        {myList.map((movieId) => (
          <MovieCard
            key={movieId}
            movie={movies.find((movie) => movieId === movie.id)}
            isInMyList={true}
            isExpanded={true}
            onToggle={() => toggleMyList(movieId)}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
}
