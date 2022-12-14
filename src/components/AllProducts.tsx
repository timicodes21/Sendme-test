import React, { useState } from "react";
import { Text, Box, Flex, Spacer, Input } from "@chakra-ui/react";
import RedButton from "./buttons/RedButton";
import { Grid, GridItem, Checkbox } from "@chakra-ui/react";
import Dropdown from "./buttons/Dropdown";
import { allProducts } from "../data/products";
import { Product } from "../types/reduxState";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  addProduct,
  clearProducts,
  removeProduct,
} from "../slices/productSlice";
import ProductList from "./lists/ProductList";
import { useForm, SubmitHandler } from "react-hook-form";

interface Props {
  navigate: () => void;
  produce: string;
  setProduce: React.Dispatch<React.SetStateAction<string>>;
}

// Initial page

const AllProducts: React.FC<Props> = ({ navigate, produce, setProduce }) => {
  const dispatch = useAppDispatch();
  const { selectedProducts } = useAppSelector((state) => state.products);
  const [error, setError] = useState<boolean>(false);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(
    allProducts.filter((product) => product.produce === produce)
  );

  const { register, handleSubmit } = useForm();

  // Function that filters the array based on the produce
  const handleProduce = (produce: string) => {
    setProduce(produce);
    const filteredProducts = allProducts.filter(
      (product) => product.produce === produce
    );
    setFilteredProducts(filteredProducts);
    // Clear the selected products array if products are present
    if (selectedProducts.length > 0) {
      dispatch(clearProducts());
    }
  };

  // onChange handler for check button
  const handleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    product: Product
  ) => {
    if (e.target.checked) {
      dispatch(addProduct(product));
    } else {
      dispatch(removeProduct(product));
    }
  };

  // Route to next page if user has selectd items
  const onSubmit = () => {
    // e.preventDefault();
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
    const newFilteredProducts = allProducts
      .filter(
        (product) =>
          product.name.toLocaleLowerCase().includes(searchTerm) ||
          product.weight.toLocaleLowerCase().includes(searchTerm)
      )
      .filter((product) => product.produce === produce);
    setFilteredProducts(newFilteredProducts);
  };

  return (
    <>
      <Box marginRight="20px">
        <form onSubmit={handleSubmit(onSubmit)}>
          <Flex alignItems="center">
            <Text color="#092443" fontSize="20px" fontWeight={700}>
              New Order
            </Text>
            <Spacer />
            <RedButton type="submit">NEXT</RedButton>
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
                <Dropdown
                  onClick={(produce) => handleProduce(produce)}
                  text={produce}
                />
              </GridItem>
              <GridItem>
                <Input
                  placeholder={`Search in ${produce}`}
                  style={{ border: "1px solid #CCCDD5" }}
                  onChange={handleSearch}
                />
              </GridItem>
            </Grid>
          </Box>
          <Box marginTop="56px">
            <ProductList
              products={filteredProducts}
              selectedProducts={selectedProducts}
              handleCheck={handleCheck}
              checkbox
              marginBottom="42px"
            />
          </Box>
        </form>
      </Box>
    </>
  );
};

export default AllProducts;
