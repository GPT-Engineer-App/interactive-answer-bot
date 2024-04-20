import { Box, Flex, Input, Button, Text, VStack, Image, IconButton } from "@chakra-ui/react";
import { FaSearch, FaQuestionCircle, FaCog, FaPaperPlane, FaRegSmile, FaRegFrown } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" minH="100vh" p={5}>
      <Flex w="full" justify="space-between" align="center" mb={10}>
        <Image src="https://images.unsplash.com/photo-1620288627223-53302f4e8c74?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxicmFuZCUyMGxvZ298ZW58MHx8fHwxNzEzNTMxMzcxfDA&ixlib=rb-4.0.3&q=80&w=1080" h="50px" />
        <Flex>
          <IconButton icon={<FaSearch />} aria-label="Search" mx={2} />
          <IconButton icon={<FaQuestionCircle />} aria-label="Help" mx={2} />
          <IconButton icon={<FaCog />} aria-label="Settings" mx={2} />
        </Flex>
      </Flex>
      <VStack spacing={4} w="full" maxW="md" align="center">
        <Input placeholder="Type your question here..." size="lg" />
        <Button rightIcon={<FaPaperPlane />} colorScheme="blue" size="lg">
          Submit
        </Button>
      </VStack>
      <Box mt={10} p={5} w="full" maxW="md" bg="gray.100" borderRadius="md">
        <Text fontSize="lg">Your answer will appear here...</Text>
        {/* Example of an answer with an image */}
        <Image src="https://images.unsplash.com/photo-1576158113928-4c240eaaf360?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxleGFtcGxlJTIwYW5zd2VyJTIwaW1hZ2V8ZW58MHx8fHwxNzEzNTk2Mzg4fDA&ixlib=rb-4.0.3&q=80&w=1080" mt={4} />
      </Box>
      <Flex mt={5} justify="center">
        <Button leftIcon={<FaRegSmile />} colorScheme="green" mx={2}>
          Satisfied
        </Button>
        <Button leftIcon={<FaRegFrown />} colorScheme="red" mx={2}>
          Not Satisfied
        </Button>
      </Flex>
    </Flex>
  );
};

export default Index;
