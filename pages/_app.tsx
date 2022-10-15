/** @packages */
import { AppProps } from "next/app";
import { createTheme, NextUIProvider } from "@nextui-org/react"

/** @styles */
import "../styles/globals.scss";

const darkTheme = createTheme({
  type: 'dark',
});

const lightTheme = createTheme({
  type: 'light',
})

export default function MyApp({ Component, pageProps }: AppProps) {

  return (
    
    <NextUIProvider theme={darkTheme}>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}
