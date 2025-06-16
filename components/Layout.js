import Footer from "./footer";
import Navbar from "./navbar";
import Recommended from "./recommended/recommended";


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
