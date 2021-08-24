import { globalStyles } from '../styles/global';

function App({ Component, pageProps }) {
  return <>
    {globalStyles}
    <Component {...pageProps} />
  </>
}

export default App
