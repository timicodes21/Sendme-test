import React from "react";
import { Text, Box } from "@chakra-ui/react";
import { MdKeyboardArrowDown } from "react-icons/md";

interface Props {
  text: string;
  onClick?: () => void;
}

const Dropdown: React.FC<Props> = ({ text, onClick }) => {
  return (
    <>
      <Box
        color="#CB4234"
        background="#F1D1D1"
        padding="8px 13px"
        borderRadius="6px"
        fontSize="12px"
        fontWeight={400}
        cursor="pointer"
        width="100%"
        onClick={onClick}
        style={{ border: "2px solid #F18479" }}
      >
        <Box display="flex" align-items="center" justifyContent="center">
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
    </>
  );
};

export default Dropdown;
