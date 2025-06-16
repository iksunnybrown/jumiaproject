import ProductCard from "./ProductCard";
import Link from "next/link";
import { useRouter } from "next/router";

export default function ProductSection() {
  const router = useRouter();

   const topSellerProducts = [
    // Use the same product array you provided
    {
        id:1,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/45/5281904/1.jpg?0114",
      title: "itel PowerPulse A1160 Power-Bank 20000mAh 12W Fast Charging TypeC",
      price: "14,491",
      originalPrice: "20,000",
      discount: "29%"
    },
    {
        id:2,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/09/4675373/1.jpg?3644",
      title: "NIVEA Sun UV Sunscreen Face Shine Control Cream SPF 50 - 50ml (Pack of 2)",
      price: "14,345",
      originalPrice: "21,500",
      discount: "33%"
    },
    {
        id:3,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/51/1512883/1.jpg?6323",
      title: "Century 43 Inches Smart 4K UHD TV (CTV-43) + 1 YEAR WARRANTY",
      price: "199,999",
      originalPrice: "280,000",
      discount: "29%"
    },
    {
        id:4,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/65/6271583/1.jpg?5337",
      title: "Boscon Auto Ignition Table Top Gas Cooker-2 Burner-Silver",
      price: "15,900",
      originalPrice: "17,700",
      discount: "10%"
    },
    {
        id:5,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/89/0157843/1.jpg?2245",
      title: "ECOFLOW 980WH 500W E980 Portable Solar Generator For Home Backup",
      price: "499,888",
      originalPrice: "1,450,000",
      discount: "66%"
    },
    {
        id:6,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/97/6570272/1.jpg?3456",
      title: "NIVEA DoShakara Pack - Nourishing Cocoa Body Lotion - 400ml (Pack Of 3)",
      price: "9,997",
      originalPrice: "13,000",
      discount: "23%"
    },
    {
        id:7,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/47/0842053/1.jpg?7763",
      title: "SILVER CREST 2L Industrial 8500W Food Crusher Blender With 2 Jar",
      price: "24,400",
      originalPrice: "27,500",
      discount: "11%"
    },
    {
        id:8,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/54/8858693/1.jpg?9433",
      title: "Hikers 32'' Inches Frameless HD LED TV-Black",
      price: "108,999",
      originalPrice: "124,000",
      discount: "12%"
    },
    {
        id:9,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/64/9523401/1.jpg?5543",
      title: "itel Smart Watch Fit O20 2.04\" HD Display IP68 AI-Powered Black",
      price: "24,173",
      originalPrice: "32,000",
      discount: "24%"
    },
    {
      id:10, 
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/18/7836863/1.jpg?5038",
      title: "itel S25 Ultra 6.78\" AMOLED 256+8 4G Android-Blue",
      price: "212,992",
      originalPrice: "295,000",
      discount: "28%"
    },
    {
      id:11,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/79/8774162/1.jpg?6283",
      title: "itel PowerPulse A1160 Power-Bank 20000mAh 12W Fast Charging TypeC",
      price: "14,491",
      originalPrice: "20,000",
      discount: "29%"
    },
    {
      id:12,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/73/1332231/1.jpg?6301",
      title: "NIVEA Sun UV Sunscreen Face Shine Control Cream SPF 50 - 50ml (Pack of 2)",
      price: "14,345",
      originalPrice: "21,500",
      discount: "33%"
    },
    {
      id:13,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/76/2050204/1.jpg?9542",
      title: "Century 43 Inches Smart 4K UHD TV (CTV-43) + 1 YEAR WARRANTY",
      price: "199,999",
      originalPrice: "280,000",
      discount: "29%"
    },
    {
      id:14,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/61/7080204/1.jpg?9806",
      title: "Boscon Auto Ignition Table Top Gas Cooker-2 Burner-Silver",
      price: "15,900",
      originalPrice: "17,700",
      discount: "10%"
    },
    {
      id:15,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/77/1412592/1.jpg?2876",
      title: "ECOFLOW 980WH 500W E980 Portable Solar Generator For Home Backup",
      price: "499,888",
      originalPrice: "1,450,000",
      discount: "66%"
    },
    {
      id:16,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/44/4661052/1.jpg?9292",
      title: "NIVEA DoShakara Pack - Nourishing Cocoa Body Lotion - 400ml (Pack Of 3)",
      price: "9,997",
      originalPrice: "13,000",
      discount: "23%"
    },
    {
      id:17,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/22/8265531/1.jpg?2050",
      title: "SILVER CREST 2L Industrial 8500W Food Crusher Blender With 2 Jar",
      price: "24,400",
      originalPrice: "27,500",
      discount: "11%"
    },
    {
      id:18,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/19/8487963/1.jpg?3957",
      title: "Hikers 32'' Inches Frameless HD LED TV-Black",
      price: "108,999",
      originalPrice: "124,000",
      discount: "12%"
    },
    {
      id:19,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/03/7608162/1.jpg?0142",
      title: "itel Smart Watch Fit O20 2.04\" HD Display IP68 AI-Powered Black",
      price: "24,173",
      originalPrice: "32,000",
      discount: "24%"
    },
    {
      id:20,
      image: "https://ng.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/46/460869/1.jpg?9879",
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
   <section className="bg-gray-50 pb-4 mt-5">
  {/* Full-Width Header */}
  <div className="bg-[#6AC1D5] w-full">
    <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4">
      <h2 className="text-2xl font-bold text-gray-900">Anniverssary Deals</h2>
      <Link href="/SeeAll" className="text-orange-500 hover:text-orange-600 font-medium">
            See All
      </Link>
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
