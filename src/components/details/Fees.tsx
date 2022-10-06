import React from "react";
import { Box, Text, Flex, Spacer } from "@chakra-ui/react";
import { formatToCurrency } from "../../utils/formatter";

interface Props {
  subTotal: number;
}

const Fees: React.FC<Props> = ({ subTotal }) => {
  return (
    <>
      <Flex alignItems="center" margin="17px 0px">
        <Flex>
          <Text color="#596273" fontSize="15px" fontWeight={600}>
            Subtotal
          </Text>
        </Flex>
        <Spacer />
        <Text color="#777E96" fontSize="15px" fontWeight={400}>
          #{formatToCurrency(subTotal)}
        </Text>
      </Flex>
      <Flex alignItems="center" margin="18px 0px 13px 0">
        <Flex>
          <Text color="#596273" fontSize="15px" fontWeight={600}>
            Delivery Fee
          </Text>
        </Flex>
        <Spacer />
        <Text color="#777E96" fontSize="15px" fontWeight={400}>
          #300
        </Text>
      </Flex>
      <Flex alignItems="center" margin="13px 0px 12px 0">
        <Flex>
          <Text color="#092443" fontSize="18px" fontWeight={700}>
            Total
          </Text>
        </Flex>
        <Spacer />
        <Text color="#092443" fontSize="18px" fontWeight={700}>
          #{formatToCurrency(subTotal + 300)}
        </Text>
      </Flex>
    </>
  );
};

export default Fees;
