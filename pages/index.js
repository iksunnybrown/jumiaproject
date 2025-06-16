// import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/header/header";
// import Oraimo from "@/components/recommended/oraimo";
import Recommended from "@/components/recommended/recommended";
import Sectionend from "@/components/recommended/sectionend";
import SliderMainPage from "@/components/mainPage/slider";
import TopSellers from "@/components/recommended/TopSellers";
import FlashSales from "@/components/recommended/FlashSale";
import ProductSections from "@/components/recommended/ProductSection";
// import Recommendedforu from "@/components/recommended/recommendedforu";
// import Gaming from "@/components/recommended/gaming";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
     <main className="md:max-w-7xl mx-auto px-[34px]">
      <Header />

      <Recommended />

      {/* <Oraimo /> */}

      <SliderMainPage />
      <TopSellers/>

      <FlashSales/>

      <ProductSections/>
      
      <Sectionend />

      {/* <Recommendedforu /> */}

      {/* <Gaming /> */}
    </main>
  );
}
