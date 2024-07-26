import { Flex, Text } from "@chakra-ui/react";

const HeaderComponent = () => {
  return (
      <Flex alignItems={"center"} justifyContent={"space-between"} p={4} bgColor={"gray.800"}>
        <Text color={"white"} padding={"10px"} fontSize={"3xl"}>Web3Modal 1 project</Text>
        <w3m-account-button />
      </Flex>
  )
};
export default HeaderComponent