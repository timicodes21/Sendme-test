import React, { useEffect } from "react";
import { Text, Box } from "@chakra-ui/react";
import { BsArrowLeft } from "react-icons/bs";
import SubmitButton from "./buttons/SubmitButton";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { calculateSubTotal } from "../slices/productSlice";
import ProductList from "./lists/ProductList";
import CustomerDetails from "./details/CustomerDetails";
import OrderHeading from "./details/OrderHeading";
import Fees from "./details/Fees";

interface Props {
  goBack: () => void;
}

// Order details page

const OrderInformation: React.FC<Props> = ({ goBack }) => {
  const dispatch = useAppDispatch();
  const { selectedProducts, subTotal } = useAppSelector(
    (state) => state.products
  );

  // Calculating the subtotal of order items
  useEffect(() => {
    dispatch(calculateSubTotal());
  }, []);

  return (
    <>
      <Box>
        <Box onClick={goBack} style={{ cursor: "pointer" }}>
          <BsArrowLeft style={{ fontSize: "20px", color: "#200E32" }} />
        </Box>
        <OrderHeading />
        <CustomerDetails
          phone="09076857432"
          address="No 26, Agbowo opposite Agowo shopping complex"
        />
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
              {selectedProducts.length > 0 && (
                <ProductList
                  products={selectedProducts}
                  selectedProducts={selectedProducts}
                  handleCheck={(e, pro) => {}}
                  marginBottom="35px"
                />
              )}
            </Box>
          </Box>
          <Box padding="19px 14px">
            <Fees subTotal={subTotal} />
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
