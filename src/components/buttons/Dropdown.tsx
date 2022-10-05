import React, { Fragment, useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { produce } from "../../data/products";

interface Props {
  onClick: (produce: string) => void;
}

const Dropdown: React.FC<Props> = ({ onClick }) => {
  const [text, setText] = useState<string>("Cow");
  const [dropdown, setDropdown] = useState<boolean>(false);
  return (
    <>
      <Box position="relative" onMouseLeave={() => setDropdown(false)}>
        <Box
          color="#CB4234"
          background="#F1D1D1"
          padding="8px 13px"
          borderRadius="6px"
          fontSize="12px"
          fontWeight={400}
          cursor="pointer"
          width="100%"
          style={{ border: "2px solid #F18479" }}
        >
          <Box
            display="flex"
            align-items="center"
            justifyContent="center"
            onClick={() => setDropdown(true)}
          >
            {text}
            <MdKeyboardArrowDown
              style={{
                fontSize: "20px",
                display: "inline",
                marginLeft: "10px",
              }}
            />
          </Box>
        </Box>
        <Box
          boxShadow="lg"
          className={dropdown ? "dropdown active" : "dropdown"}
        >
          {produce.map((product, index) => (
            <Fragment key={index}>
              <Text
                onClick={() => {
                  setText(product);
                  setDropdown(false);
                  onClick(product);
                }}
                className="dropdown-items"
              >
                {product}
              </Text>
            </Fragment>
          ))}
        </Box>
      </Box>
    </>
  );
};

export default Dropdown;
