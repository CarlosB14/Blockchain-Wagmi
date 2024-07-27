import { Box, Flex, Text } from "@chakra-ui/react";
import { useAccount, useBalance } from "wagmi";
import HeaderComponent from "./components/HeaderComponent";
import { useWeb3ModalState } from "@web3modal/wagmi/react";


function App() {
  const { isConnected, address } = useAccount();
  const { data: balance } = useBalance({ address: address });
  const { selectedNetworkId } = useWeb3ModalState();

  return (
    <Box bgColor={"gray.700"} w="100vw" h="100vh">
      {!isConnected ? (
        <Flex w={"100vw"} h={"100vh"} alignItems={"center"} justifyContent={"center"}>
          <w3m-connect-button />
        </Flex>
      ) : (
      <>
        <HeaderComponent />
        <Flex gap={4}>
          <Text color={"white"} fontSize={"2xl"} p={2}>
            Address: { address } 
          </Text>
          {balance && (
            <>
              <Text color={"white"} fontSize={"2xl"} p={2}>
                Balance: { balance.formatted } 
              </Text>
              <Text color={"white"} fontSize={"2xl"} p={2}>
                Symbol: { balance.symbol } 
              </Text>
            </>
          )}
          <Text color={"white"} fontSize={"2xl"} p={2}>
            Network: { selectedNetworkId } 
          </Text>
        </Flex>
      </>
      )}
    </Box>
    );
}

export default App;

