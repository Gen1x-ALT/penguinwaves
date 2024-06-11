import { useEffect } from 'react';
import '@styles/globals.css';
import { useRouter } from 'next/router';

function Application({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    // Add the class to the body when the component mounts
    document.body.classList.add('has-scrollbar');

    // Remove the class from the body when the component unmounts
    return () => {
      document.body.classList.remove('has-scrollbar');
    };
  }, []); // Empty dependency array to only run the effect once

  useEffect(() => {
    // Check the current URL and perform the redirection if needed
    const currentUrl = window.location.href;
    const hostname = window.location.hostname;
    const path = window.location.pathname;

    if (
      hostname === 'penguinwaves.netlify.app' &&
      !currentUrl.endsWith('replit.dev')
    ) {
      window.location.href = `https://waves.mubi.tech${path}`;
    }
  }, []); // Empty dependency array to only run the effect once

  return <Component {...pageProps} />;
}

export default Application;