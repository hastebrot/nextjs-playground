import App from "next/app";
import "typeface-dm-sans";
import "typeface-jetbrains-mono";

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

CustomApp.getInitialProps = async context => {
  const initialProps = await App.getInitialProps(context);
  return { ...initialProps };
};

export default CustomApp;
