import React, { Fragment, useEffect, useState } from "react";
import { Text, Box, Flex, Spacer, Input } from "@chakra-ui/react";
import { Product } from "../types/reduxState";
import { BsArrowLeft } from "react-icons/bs";
import { formatToCurrency } from "../utils/formatter";
import SubmitButton from "./buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { calculateSubTotal } from "../slices/productSlice";

interface Props {
  goBack: () => void;
}

const OrderInformation: React.FC<Props> = ({ goBack }) => {
  const dispatch = useAppDispatch();
  const { selectedProducts, subTotal } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(calculateSubTotal());
  }, []);
  // Calculating the subtotal

  return (
    <>
      <Box>
        <Box onClick={goBack} style={{ cursor: "pointer" }}>
          <BsArrowLeft style={{ fontSize: "20px", color: "#200E32" }} />
        </Box>
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
        <Box marginTop="25px">
          <Text color="#092443" fontSize="15px" fontWeight={700}>
            Phone Number
          </Text>
          <Text color="#596273" fontSize="15px" fontWeight={400}>
            09076857432
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
            No 26, Agbowo opposite Agowo shopping complex
          </Text>
        </Box>
        <Box background="#FFFFFF" borderRadius="10px">
          <Box borderBottom="0.560596px dashed #8F92A1">
            <Box padding="19px 14px">
              <Text
                marginBottom="27px"
                color="#092443"
                fontSize="15px"
                fontWeight={700}
              >
                Products Ordered
              </Text>
              {selectedProducts.length > 0 &&
                selectedProducts.map((product: Product) => (
                  <Fragment key={product.id}>
                    <Flex alignItems="center" marginBottom="35px">
                      <Flex>
                        <Text color="#092443" fontSize="15px" fontWeight={600}>
                          {product.name} {product.weight}
                        </Text>
                      </Flex>
                      <Spacer />
                      <Text color="#777E96" fontSize="15px" fontWeight={400}>
                        # {formatToCurrency(product.price)}
                      </Text>
                    </Flex>
                  </Fragment>
                ))}
            </Box>
          </Box>
          <Box padding="19px 14px">
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
          </Box>
        </Box>
        <Box margin="41px 0 26px 0">
          <SubmitButton type="submit" onClick={() => {}}>
            MAKE PAYMENT
          </SubmitButton>
        </Box>
      </Box>
    </>
  );
};

export default OrderInformation;
