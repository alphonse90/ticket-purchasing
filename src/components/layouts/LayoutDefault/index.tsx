/** @packages */
import { Container } from "@nextui-org/react";
import Head from "next/head";
import { ReactNode } from "react";


interface propsWithChildren {
  title: string;
  children: ReactNode;
}

export const LayoutDefault = ({
  title,
  children,
}: propsWithChildren): JSX.Element => (
  <Container fluid={true} css={{ m: 0, p: 0, mw: "100%" }}>
    <Head>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <title>{title}</title>
    </Head>
    <main>
      <Container css={{ py: "2rem" }}>{children}</Container>
    </main>
  </Container>
);
