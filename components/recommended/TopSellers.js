import ProductCard from "./ProductCard";
import RecomHeader from "./RecomHeader";
import { useRouter } from "next/router";

export default function TopSellers() {
  const router = useRouter();
  const topSellerProducts = [
    {
      id:21,
      image: "https://ext.same-assets.com/828304586/1940043494.jpeg",
      title: "itel PowerPulse A1160 Power-Bank 20000mAh 12W Fast Charging TypeC",
      price: "14,491",
      originalPrice: "20,000",
      discount: "29%"
    },
    {
      id:22,
      image: "https://ext.same-assets.com/828304586/639134141.jpeg",
      title: "NIVEA Sun UV Sunscreen Face Shine Control Cream SPF 50 - 50ml (Pack of 2)",
      price: "14,345",
      originalPrice: "21,500",
      discount: "33%"
    },
    {
      id:23,
      image: "https://ext.same-assets.com/828304586/19284577.jpeg",
      title: "Century 43 Inches Smart 4K UHD TV (CTV-43) + 1 YEAR WARRANTY",
      price: "199,999",
      originalPrice: "280,000",
      discount: "29%"
    },
    {
      id:24,
      image: "https://ext.same-assets.com/828304586/669356352.jpeg",
      title: "Boscon Auto Ignition Table Top Gas Cooker-2 Burner-Silver",
      price: "15,900",
      originalPrice: "17,700",
      discount: "10%"
    },
    {
      id:25,
      image: "https://ext.same-assets.com/828304586/2658625147.jpeg",
      title: "ECOFLOW 980WH 500W E980 Portable Solar Generator For Home Backup",
      price: "499,888",
      originalPrice: "1,450,000",
      discount: "66%"
    },
    {
      id:26,
      image: "https://ext.same-assets.com/828304586/216629128.jpeg",
      title: "NIVEA DoShakara Pack - Nourishing Cocoa Body Lotion - 400ml (Pack Of 3)",
      price: "9,997",
      originalPrice: "13,000",
      discount: "23%"
    },
    {
      id:27,
      image: "https://ext.same-assets.com/828304586/2425442373.jpeg",
      title: "SILVER CREST 2L Industrial 8500W Food Crusher Blender With 2 Jar",
      price: "24,400",
      originalPrice: "27,500",
      discount: "11%"
    },
    {
      id:28,
      image: "https://ext.same-assets.com/828304586/3670870098.jpeg",
      title: "Hikers 32'' Inches Frameless HD LED TV-Black",
      price: "108,999",
      originalPrice: "124,000",
      discount: "12%"
    },
    {
      id:29,
      image: "https://ext.same-assets.com/828304586/3433451312.jpeg",
      title: "itel Smart Watch Fit O20 2.04\" HD Display IP68 AI-Powered Black",
      price: "24,173",
      originalPrice: "32,000",
      discount: "24%"
    },
    {
      id:30,
      image: "https://ext.same-assets.com/828304586/3786360982.jpeg",
      title: "itel S25 Ultra 6.78\" AMOLED 256+8 4G Android-Blue",
      price: "212,992",
      originalPrice: "295,000",
      discount: "28%"
    }
  ];

    const handleProductClick = (id) => {
    router.push(`/product/${id}`); // Navigate to product detail page
  };

  return (
     <section className="bg-gray-50 mt-5">
      {/* Full-Width Header */}
      <div className="bg-green-500 w-full">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
          <h2 className="text-2xl font-bold text-gray-900">Top Sellers</h2>
          <a href="#" className="text-orange-500 hover:text-orange-600 font-medium">
            See All
          </a>
        </div>
      </div>
    
      {/* Section Content */}
      <div className="max-w-7xl mx-auto px-4 mt-6">
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
          {topSellerProducts.map((product, index) => (
            <div key={index} onClick={() => handleProductClick(product.id)} className="cursor-pointer">
            <ProductCard
              key={index}
              image={product.image}
              title={product.title}
              price={product.price}
              originalPrice={product.originalPrice}
              discount={product.discount}
              className="bg-white"
            /></div>
          ))}
        </div>
      </div>
    </section>
  );
}
