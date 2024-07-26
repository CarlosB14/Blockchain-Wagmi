import { Box } from "@chakra-ui/react";
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    // Aquí podrías inicializar cualquier cosa relacionada con web3modal si es necesario
  }, []);

  return (
    <Box bgColor={"gray.700"} display={"flex"} w="100vw" h="100vh" alignItems={"center"} justifyContent={"center"}>
      <w3m-button />
    </Box>
  );
}

export default App;

