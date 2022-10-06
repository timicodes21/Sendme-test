import React, { Fragment } from "react";
import { Product } from "../../types/reduxState";
import { Text, Box, Flex, Spacer, Checkbox } from "@chakra-ui/react";
import { formatToCurrency } from "../../utils/formatter";

// Component to show the list of all products and selected products

interface Props {
  products: Product[];
  handleCheck: (a: React.ChangeEvent<HTMLInputElement>, b: Product) => void;
  selectedProducts: Product[];
  checkbox?: boolean;
  marginBottom: string;
}

const ProductList: React.FC<Props> = ({
  products,
  handleCheck,
  selectedProducts,
  checkbox,
  marginBottom,
}) => {
  return (
    <>
      {products.map((product: Product) => (
        <Fragment key={product.id}>
          <Flex alignItems="center" marginBottom={marginBottom}>
            <Flex>
              {checkbox && (
                <Checkbox
                  colorScheme="red"
                  color="#FF402C"
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    handleCheck(e, product)
                  }
                  defaultChecked={
                    checkbox && selectedProducts.includes(product)
                  }
                ></Checkbox>
              )}
              <Text
                marginLeft={checkbox ? "15px" : "0px"}
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
    </>
  );
};

export default ProductList;
