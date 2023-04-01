import "@/styles/globals.css";
import State from "@/context/state";

export default function App({ Component, pageProps }) {
  return (
    <State>
      <Component {...pageProps} />
    </State>
  );
}
