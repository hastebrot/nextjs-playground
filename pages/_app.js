import App from "next/app";
import "typeface-jetbrains-mono";
import "typeface-rubik";

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

CustomApp.getInitialProps = async context => {
  const initialProps = await App.getInitialProps(context);
  return { ...initialProps };
};

export default CustomApp;
