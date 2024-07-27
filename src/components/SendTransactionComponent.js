import { Box, Button, Input, Text } from "@chakra-ui/react"
import { useState } from "react";
import { parseEther } from "viem";
import { useSendTransaction, useWaitForTransactionReceipt } from "wagmi";

const SendTransactionComponent = () => {
    const [transactionValue, setTransactionValue] = useState({to: "", value: 0});
    const { sendTransaction, data: hash } = useSendTransaction();
    const { isLoading: isConfirming, isSuccess: isConfirmed } = useWaitForTransactionReceipt({ hash });

    const handleOnChange = (e) => {
        const param = e.target.name;
        const value = param === "to" ? e.target.value : parseEther(e.target.value);

        setTransactionValue({ ...transactionValue, [param]: value});
    };

    const handleSendTransaction = () => {
        sendTransaction(transactionValue);
    };

  return (
    <Box w={"100%"} display={"flex"} flexDirection={"column"} pl={2}>
        <Text fontWeight={"bold"} fontSize={"2xl"} color={"white"} mb={4} pl={2}>Send Transaction</Text>
        {(isConfirming || isConfirmed) && (
            <>
                <Text color={"white"} fontSize={"2xl"} p={2}>
                    Status: { isConfirming ? "Pending..." : isConfirmed ?  "Confirmed" : null }
                </Text>
            </>
        )}
        <Input w={"40%"} mb={4} pl={5} color={"white"} placeholder="Address" name="to" onChange={handleOnChange} />
        <Input w={"40%"} mb={4} pl={5} color={"white"} placeholder="Value" name="value" onChange={handleOnChange} />
        <Button w={"40%"} mb={4} bg={"white"} onClick={handleSendTransaction}>Send Transaction</Button>
    </Box>
  );
};

export default SendTransactionComponent;