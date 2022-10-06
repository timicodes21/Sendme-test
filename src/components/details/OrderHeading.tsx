import React from "react";
import { Box, Text } from "@chakra-ui/react";

const OrderHeading = () => {
  return (
    <>
      <Box
        marginTop="47px"
        borderBottom="0.560596px solid #8F92A1"
        paddingBottom="24px"
      >
        <Text color="#092443" fontSize="20px" fontWeight={700}>
          Order Information
        </Text>
        <Text
          color="#7C7C7C"
          fontSize="15px"
          fontWeight={400}
          paddingTop="12px"
          lineHeight="19px"
        >
          Here is your order details. Kindly confirm before you proceed to pay
        </Text>
      </Box>
    </>
  );
};

export default OrderHeading;
