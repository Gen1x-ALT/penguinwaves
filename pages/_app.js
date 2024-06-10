import { useEffect } from 'react';
import '@styles/globals.css';

function Application({ Component, pageProps }) {
  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add('has-scrollbar');

    // Remove the class from the body when the component unmounts
    return () => {
      document.body.classList.remove('has-scrollbar');
    };
  }, []); // Empty dependency array to only run the effect once

  return <Component {...pageProps} />;
}

export default Application;