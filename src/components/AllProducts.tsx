import React, { Fragment, useState } from "react";
import { Text, Box, Flex, Spacer, Input } from "@chakra-ui/react";
import RedButton from "./buttons/RedButton";
import { Grid, GridItem, Checkbox } from "@chakra-ui/react";
import Dropdown from "./buttons/Dropdown";
import { allProducts } from "../data/products";
import { Product } from "../types/reduxState";
import { formatToCurrency } from "../utils/formatter";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { addProduct, removeProduct } from "../slices/productSlice";

interface Props {
  navigate: () => void;
}

const AllProducts: React.FC<Props> = ({ navigate }) => {
  const dispatch = useAppDispatch();
  const { selectedProducts } = useAppSelector((state) => state.products);
  const [error, setError] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(allProducts);

  // onChange handler for check button
  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    product: Product
  ) => {
    if (e.target.checked) {
      // check if product exists

      dispatch(addProduct(product));
    } else {
      // Check if product is present in the array first
      const productExists = selectedProducts.find(
        (product) => product.id === product.id
      );
      if (productExists) {
        dispatch(removeProduct(product));
      }
      dispatch(removeProduct(product));
    }
  };

  const gotoNextPage = () => {
    if (selectedProducts.length > 0) {
      setError(false);
      navigate();
    } else {
      setError(true);
    }
  };

  // search function
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value.trim().toLowerCase();
    const newFilteredProducts = allProducts.filter(
      (product) =>
        product.name.toLocaleLowerCase().includes(searchTerm) ||
        product.weight.toLocaleLowerCase().includes(searchTerm)
    );
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <>
      <Box marginRight="20px">
        <Flex alignItems="center">
          <Text color="#092443" fontSize="20px" fontWeight={700}>
            New Order
          </Text>
          <Spacer />
          <RedButton onClick={gotoNextPage}>NEXT</RedButton>
        </Flex>
        <Box marginTop="30px">
          <Text color="#CDCCCC" fontSize="18px" fontWeight={700}>
            SELECT PRODUCTS
          </Text>
        </Box>
        {error && (
          <Box margin="10px 0px">
            <Text
              marginLeft="15px"
              color="#FF1B03"
              textAlign="center"
              fontSize="12px"
              fontWeight={700}
            >
              Please Select a Product
            </Text>
          </Box>
        )}
        <Box marginTop="32px">
          <Grid templateColumns={{ base: "30% 70%", md: "20% 80%" }} gap={4}>
            <GridItem>
              <Dropdown text="COW" />
            </GridItem>
            <GridItem>
              <Input
                placeholder="Search"
                style={{ border: "1px solid #CCCDD5" }}
                onChange={handleSearch}
              />
            </GridItem>
          </Grid>
        </Box>
        <Box marginTop="56px">
          {filteredProducts.map((product: Product) => (
            <Fragment key={product.id}>
              <Flex alignItems="center" marginBottom="42px">
                <Flex>
                  <Checkbox
                    colorScheme="red"
                    color="#FF402C"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      handleCheck(e, product)
                    }
                    defaultChecked={selectedProducts.includes(product)}
                  ></Checkbox>
                  <Text
                    marginLeft="15px"
                    color="#092443"
                    fontSize="15px"
                    fontWeight={600}
                  >
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
    </>
  );
};

export default AllProducts;
