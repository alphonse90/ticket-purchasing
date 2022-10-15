/** @packages */
import {Text} from "@nextui-org/react";
import type { NextPage } from "next";

/** @application */
import {LayoutDefault} from "@components/layouts";
import {HomeTable} from "@components/organisms";

const HomePage: NextPage = () => {
  return (
    <LayoutDefault title={'Home'}>
      <Text css={{textAlign: "center"}} h2>Concert Gallery</Text>
      <HomeTable/>
    </LayoutDefault>
  );
};

export default HomePage;
