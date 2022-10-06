import type { NextPage } from "next";
import { Container } from "@chakra-ui/react";
import AllProducts from "../src/components/AllProducts";
import OrderInformation from "../src/components/OrderInformation";
import { useState } from "react";
import { useMediaQuery } from "@chakra-ui/react";

const Home: NextPage = () => {
  const [isMobile] = useMediaQuery("(max-width: 700px)");
  const [page, setPage] = useState<number>(1);
  const [produce, setProduce] = useState<string>("Cow");

  return (
    <Container
      maxW={isMobile ? "95%" : "60%"}
      marginTop="50px"
      background="#F6F5F5"
    >
      {page === 1 && (
        <AllProducts
          navigate={() => setPage(2)}
          produce={produce}
          setProduce={setProduce}
        />
      )}
      {page === 2 && <OrderInformation goBack={() => setPage(1)} />}
    </Container>
  );
};

export default Home;
