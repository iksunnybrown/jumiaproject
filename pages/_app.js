
import Layout from "@/components/Layout";
import "@/styles/globals.css";
// import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    
        <Layout>
          <main >
            <Component {...pageProps}/>
          </main>
        </Layout>
     
  );
}
