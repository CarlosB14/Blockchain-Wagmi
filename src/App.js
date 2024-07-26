import { Box, Flex } from "@chakra-ui/react";
import { useAccount } from "wagmi";
import HeaderComponent from "./components/HeaderComponent";


function App() {
  const { isConnected } = useAccount();

  return (
    <Box bgColor={"gray.700"} w="100vw" h="100vh">
      {!isConnected ? (
        <Flex w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
          <w3m-connect-button />
        </Flex>
      ) : (
      <>
        <HeaderComponent />
      </>
      )}
    </Box>
    );
}

export default App;

