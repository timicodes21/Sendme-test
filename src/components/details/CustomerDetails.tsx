import React from "react";
import { Text, Box } from "@chakra-ui/react";

interface Props {
  phone: string;
  address: string;
}

// Phone no and customer address

const CustomerDetails: React.FC<Props> = ({ phone, address }) => {
  return (
    <>
      <Box marginTop="25px">
        <Text color="#092443" fontSize="15px" fontWeight={700}>
          Phone Number
        </Text>
        <Text color="#596273" fontSize="15px" fontWeight={400}>
          {phone}
        </Text>
      </Box>
      <Box margin="18px 0px 28px 0">
        <Text color="#092443" fontSize="15px" fontWeight={700}>
          Delivery Address
        </Text>
        <Text
          color="#596273"
          fontSize="15px"
          fontWeight={400}
          lineHeight="30px"
        >
          {address}
        </Text>
      </Box>
    </>
  );
};

export default CustomerDetails;
