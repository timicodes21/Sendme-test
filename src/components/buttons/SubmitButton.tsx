import React from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";

interface Props {
  children: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset";
}

const SubmitButton: React.FC<Props> = ({ children, onClick, type }) => {
  return (
    <>
      <Button
        type={type}
        color="#FFFFFF"
        background="#FF1B03"
        onClick={onClick}
        fontSize="18px"
        fontWeight={400}
        borderRadius="12px"
        padding="16px 101px"
        width="100%"
      >
        {children}
      </Button>
    </>
  );
};

export default SubmitButton;
