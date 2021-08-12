import App from 'next/app';
import 'tailwindcss/tailwind.css';

function CustomApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

CustomApp.getInitialProps = async (context) => {
  const initialProps = await App.getInitialProps(context);
  return { ...initialProps };
};

export default CustomApp;
