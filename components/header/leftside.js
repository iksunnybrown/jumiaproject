"use client"

import { useState } from "react"
import { ChevronRight, Smartphone, Laptop, Tv, Checkroom, CardGiftcard, Home, DirectionsCar, ChildCare, SportsEsports, Apple } from "@mui/icons-material"

export default function Leftside() {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(null)

  const categories = [
    {
      name: "Phones & Tablets",
      icon: <Smartphone fontSize="small" />,
      subcategories: [
        {
          title: "Mobile Phones",
          items: ["iPhones", "Samsung", "Xiaomi", "Tecno", "Infinix"],
        },
        {
          title: "Tablets",
          items: ["iPads", "Samsung Tablets", "Lenovo Tablets", "Huawei Tablets"],
        },
        {
          title: "Accessories",
          items: ["Phone Cases", "Screen Protectors", "Chargers", "Power Banks", "Memory Cards"],
        },
        {
          title: "Top Phone Brands",
          items: ["iPhones", "Samsung", "Xiaomi", "Tecno", "Infinix", "OPPO", "Realme"],
        },
        {
          title: "Top SmartPhone",
          items: ["iPads", "Samsung Tablets", "Lenovo Tablets", "Huawei Tablets"],
        },
        {
          title: "Mobile Accessories",
          items: ["Phone Cases", "Screen Protectors", "Chargers", "Power Banks", "Memory Cards"],
        },
      ],
    },
    {
      name: "Computing",
      icon: <Laptop fontSize="small" />,
      subcategories: [
        {
          title: "Laptops",
          items: ["MacBooks", "Windows Laptops", "Gaming Laptops", "2-in-1 Laptops"],
        },
        {
          title: "Desktops",
          items: ["All-in-One PCs", "Gaming Desktops", "Monitors"],
        },
        {
          title: "Computer Accessories",
          items: ["Keyboards", "Mice", "Webcams", "Headsets", "External Storage","Keyboards", "Mice",],
        },
        {
          title: "Printer",
          items: ["MacBooks", "Windows Laptops", "Gaming Laptops", "2-in-1 Laptops"],
        },
        {
          title: "Computer Brands",
          items: ["All-in-One PCs", "Gaming Desktops", "Monitors"],
        },
        {
          title: "Data Storage",
          items: ["Keyboards", "Mice", "Webcams", "Headsets", "External Storage"],
        },
      ],
    },
    {
      name: "Electronics",
      icon: <Tv fontSize="small" />,
      subcategories: [
        {
          title: "Televisions",
          items: ["Smart TVs", "LED TVs", "OLED TVs", "4K TVs","LED TVs", "OLED TVs"],
        },
        {
          title: "Audio",
          items: ["Speakers", "Headphones", "Home Theater Systems", "Home Theater Systems"],
        },
        {
          title: "Cameras",
          items: ["Digital Cameras", "DSLR Cameras", "Action Cameras", "DSLR Cameras"],
        },
        {
          title: "Televisions",
          items: ["Smart TVs", "LED TVs", "OLED TVs", "4K TVs","LED TVs", "OLED TVs"],
        },
        {
          title: "Audio",
          items: ["Speakers", "Headphones", "Home Theater Systems", "Home Theater Systems"],
        },
        {
          title: "Cameras",
          items: ["Digital Cameras", "DSLR Cameras", "Action Cameras", "DSLR Cameras", "Action Cameras"],
        },
      ],
    },
    {
      name: "Fashion",
      icon: <Checkroom fontSize="small" />,
      subcategories: [
        {
          title: "Men's Fashion",
          items: ["Clothing", "Shoes", "Watches", "Accessories"],
        },
        {
          title: "Women's Fashion",
          items: ["Clothing", "Shoes", "Bags", "Jewelry", "Accessories"],
        },
        {
          title: "Kid's Fashion",
          items: ["Boy's Clothing", "Girl's Clothing", "Shoes", "Accessories"],
        },
        {
          title: "Men's Fashion",
          items: ["Clothing", "Shoes", "Watches", "Accessories", "Shoes", "Accessories"],
        },
        {
          title: "Women's Fashion",
          items: ["Clothing", "Shoes", "Bags", "Jewelry", "Accessories"],
        },
        {
          title: "Kid's Fashion",
          items: ["Boy's Clothing", "Girl's Clothing", "Shoes", "Accessories", "Shoes", "Accessories", "Shoes"],
        },
      ],
    },
    {
      name: "Supermarket",
      icon: <CardGiftcard fontSize="small" />,
      subcategories: [
        {
          title: "Food Cupboard",
          items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods"],
        },
        {
          title: "Beverages",
          items: ["Coffee", "Tea", "Juices", "Soft Drinks"],
        },
        {
          title: "Household Supplies",
          items: ["Laundry", "Cleaning", "Air Fresheners"],
        },
        {
          title: "Food Cupboard",
          items: ["Grains & Rice", "Pasta", "Noodles", "Breakfast Foods"],
        },
        {
          title: "Beverages",
          items: ["Coffee", "Tea", "Juices", "Soft Drinks", "Tea", "Juices", "Soft Drinks", "Tea"],
        },
        {
          title: "Household Supplies",
          items: ["Laundry", "Cleaning", "Air Fresheners"],
        },
      ],
    },
    {
      name: "Home & Office",
      icon: <Home fontSize="small" />,
      subcategories: [
        {
          title: "Home & Kitchen",
          items: ["Kitchen Appliances", "Furniture", "Bedding", "Decor","Bath","Wall Art","Small Appliances"],
        },
        {
          title: "Office Products",
          items: ["Office Furniture", "Office Electronics", "Stationery","Bakeware","Vacuums & Floor Care"],
        },
        {
          title: "Outdoor & Garden",
          items: ["Office Furniture", "Office Electronics", "Stationery","Cookware","Cutlery & Knife Accessories","Cutlery & Knife Accessories"],
        },
        {
          title: "Home & Kitchen",
          items: ["Kitchen Appliances", "Furniture", "Bedding", "Decor", "Bedding"],
        },
        {
          title: "Office Products",
          items: ["Office Furniture", "Office Electronics", "Stationery"],
        },
        {
          title: "Outdoor & Garden",
          items: ["Office Furniture", "Office Electronics", "Stationery"],
        },
      ],
    },
    {
      name: "Automobile",
      icon: <DirectionsCar fontSize="small" />,
      subcategories: [
        {
          title: "Car Accessories",
          items: ["Interior Accessories", "Exterior Accessories", "Car Care"],
        },
        {
          title: "Car Accessories",
          items: ["Interior Accessories", "Exterior Accessories", "Car Care","Holding Bar", "Structured Lorry"],
        },
        {
          title: "Motorcycle Accessories",
          items: ["Helmets", "Gloves", "Motorcycle Parts","Amplifiers & Effects","Gloves"],
        },
        {
          title: "Car Accessories",
          items: ["Interior Accessories", "Exterior Accessories", "Car Care"],
        },
        {
          title: "Truck Accessories",
          items: ["Interior Accessories", "Exterior Accessories", "Car Care","Holding Bar", "Structured Lorry","Bus Inducer","Silencer"],
        },
        {
          title: "Eelectronic Car Accessories",
          items: ["Helmets", "Gloves", "Motorcycle Parts","Amplifiers & Effects","Gloves"],
        },
      ],
    },
    {
      name: "Baby Products",
      icon: <ChildCare fontSize="small" />,
      subcategories: [
        {
          title: "Baby Care",
          items: ["Diapers", "Wipes", "Baby Food", "Feeding"],
        },
        {
          title: "Baby Runner",
          items: ["Diapers", "Wipes", "Baby Food", "Feeding","Pampers","Towels","Baby walkers"],
        },
        {
          title: "Baby Gear",
          items: ["Strollers", "Car Seats", "Carriers"],
        },
        {
          title: "Baby Care",
          items: ["Diapers", "Wipes", "Baby Food", "Feeding"],
        },
        {
          title: "Baby Seaters",
          items: ["Diapers", "Wipes", "Baby Food", "Feeding","Pampers",],
        },
        {
          title: "Baby Gear",
          items: ["Strollers", "Car Seats", "Carriers"],
        },
      ],
    },
    {
      name: "Gaming",
      icon: <SportsEsports fontSize="small" />,
      subcategories: [
        {
          title: "Consoles",
          items: ["PlayStation", "Xbox", "Nintendo"],
        },
        {
          title: "Games",
          items: ["PlayStation Games", "Xbox Games", "PC Games"],
        },
        {
          title: "Accessories",
          items: ["Controllers", "Headsets", "Gaming Chairs"],
        },
        {
          title: "Consoles",
          items: ["PlayStation", "Xbox", "Nintendo"],
        },
        {
          title: "Games",
          items: ["PlayStation Games", "Xbox Games", "PC Games"],
        },
        {
          title: "Accessories",
          items: ["Controllers", "Headsets", "Gaming Chairs", "Gaming Chairs", "Gaming Chairs", "Gaming Chairs","Controllers", "Headsets", "Gaming Chairs"],
        },
      ],
    },
    {
      name: "Official Stores",
      icon: <Apple fontSize="small" />,
      subcategories: [
        {
          title: "Top Brands",
          items: ["Apple", "Samsung", "Xiaomi", "Nike", "Adidas"],
        },
      ],
    },
  ]

  return (
    <div className="bg-white rounded-md shadow-sm hidden md:inline md:w-[40%] lg:w-[20%]">
      <div className="relative">
        <ul className="py-2">
          {categories.map((category, index) => (
            <li
              key={index}
              className={`text-sm hover:bg-gray-100 cursor-pointer ${activeCategoryIndex === index ? "bg-gray-100" : ""}`}
              onMouseEnter={() => setActiveCategoryIndex(index)}
              onMouseLeave={() => setActiveCategoryIndex(null)}
            >
              <div className="flex items-center justify-between px-3 py-2">
                <span className="flex items-center gap-2">
                  {category.icon}
                  <span className="hidden md:inline">{category.name}</span>
                </span>
                <ChevronRight fontSize="small" />
              </div>

              {/* Mega Menu */}
              {activeCategoryIndex === index && (
                <div className="absolute left-full top-0 bg-white shadow-lg rounded-md w-[200%] md:w-[300%] z-10 p-4 border">
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {category.subcategories.map((subcategory, subIndex) => (
                      <div key={subIndex}>
                        <h3 className="font-semibold text-sm mb-2">{subcategory.title}</h3>
                        <ul className="space-y-1">
                          {subcategory.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <a href="#" className="text-xs hover:text-orange-500">
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
