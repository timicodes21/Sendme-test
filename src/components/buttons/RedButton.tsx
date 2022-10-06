import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

const RedButton: React.FC<Props> = ({ children, onClick, type }) => {
  return (
    <>
      <Button
        type={type}
        color="#FFFFFF"
        background="#FF1B03"
        onClick={onClick}
        fontSize="15px"
        fontWeight={600}
        borderRadius="6.17647px"
        padding="9.88px 35px"
      >
        {children}
      </Button>
    </>
  );
};

export default RedButton;
