'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

import Elementthree from "./elementthree";
import Shoppingcart from "./shoppingcart";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function Navbar() {
  const router = useRouter();

  const [isAccountDropdownOpen, setIsAccountDropdownOpen] = useState(false);
  const [isHelpDropdownOpen, setIsHelpDropdownOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  // const [searchQuery, setSearchQuery] = useState('');

  // Scroll tracking for sticky navbar
  useEffect(() => {
    const handleScroll = () => {
      const topBarHeight = 40; // adjust this value to match your top bar height
      if (window.scrollY > topBarHeight) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

//   const handleSearch = () => {
//   if (searchQuery.trim() !== '') {
//     router.push(`/search?query=${encodeURIComponent(searchQuery)}`);
//   }
// };

  return (
    <>
      {/* Top Banner Image */}
      <div className="bg-[#FFBA00]">
        <div className="w-full align-middle md:max-w-7xl">
          <img
            src="https://ng.jumia.is/cms/0-6-anniversary/2025/Brand_Day/Xiaomi/JA25-top-strip-BD.gif"
            alt="navimage"
            className="mx-auto"
          />
        </div>
      </div>

      {/* Top bar */}
      <div className="hidden bg-[#f5f5f5] py-1 lg:block px-[38px]">
        <div className="container flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="#" className="flex items-center text-xs text-gray-600 hover:text-orange-500">
              <HelpOutlineIcon className="mr-1 size-3" />
              <span>Help</span>
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-orange-500">
              Returns & Refunds
            </Link>
            <Link href="#" className="text-xs text-gray-600 hover:text-orange-500">
              Sell on Jumia
            </Link>
          </div>
          <div>
            <Link href="#" className="flex items-center text-xs text-gray-600 hover:text-orange-500">
              <Image
                src="/globe.svg"
                alt="Jumia app"
                width={30}
                height={20}
                className="mr-1"
              />
              <span>Download the Jumia App</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Sticky Navbar */}
      <div
        className={`bg-white align-middle px-[38px] ${isSticky ? 'fixed top-0 left-0 right-0 z-50 shadow-md' : ''} transition-ease-in-out duration-300`}
      >
        <div className="md:max-w-7xl mx-auto flex py-3 flex-row justify-between space-x-2">
          <span className="flex space-x-2">
            <Elementthree />
            <img
              src="/jumia.png"
              className="h-[40px] pt-3 cursor-pointer"
              alt="logo"
              onClick={() => router.push("/")}
            />
          </span>

          {/* <input
            type="text"
            placeholder="Search products, Brands and Categories"
            className="w-full input input-bordered input-warning outline-none max-w-md my-auto hidden lg:inline"
          /> */}
          <div className="hidden lg:flex items-center w-full max-w-xl mx-auto mr-5">
            
            <input type="text"
              placeholder="Search products, Brands and Categories"
              className="flex-1 input input-bordered input-warning outline-none rounded-l-md"
  
            />
            <button className="bg-[#FFBA00] text-white px-4 py-2 ml-2 rounded-r-md hover:bg-orange-400 cursor-pointer">
              Search
            </button>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-4">
            {/* Account Dropdown */}
            <div className="relative hidden items-center lg:flex">
              <button
                className="flex items-center text-gray-700 hover:text-orange-500"
                onMouseEnter={() => setIsAccountDropdownOpen(true)}
                onMouseLeave={() => setIsAccountDropdownOpen(false)}
              >
                <AccountCircleIcon className="size-5" />
                <span className="ml-1 hidden text-sm xl:block">Account</span>
                <ExpandMoreIcon className="ml-1 size-4" />
              </button>

              {isAccountDropdownOpen && (
                <div
                  className="absolute right-0 top-full z-50 w-64 rounded-md border border-gray-200 bg-white py-2 shadow-lg"
                  onMouseEnter={() => setIsAccountDropdownOpen(true)}
                  onMouseLeave={() => setIsAccountDropdownOpen(false)}
                >
                  <div className="border-b border-gray-100 px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Button className="flex-1 bg-orange-500 text-white hover:bg-orange-600">SIGN IN</Button>
                    </div>
                    <p className="mt-2 text-xs text-gray-600">
                      New customer?{" "}
                      <Link href="/register" className="text-orange-500 hover:underline">
                        Start here
                      </Link>
                    </p>
                  </div>

                  <div className="py-2">
                    <Link href="/account" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <AccountCircleIcon className="mr-3 size-4" />
                      My Account
                    </Link>
                    <Link href="/orders" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <div className="mr-3 size-4 rounded border border-gray-300" />
                      Orders
                    </Link>
                    <Link href="/saved-items" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <FavoriteIcon className="mr-3 size-4" />
                      Saved Items
                    </Link>
                    <Link href="/recently-viewed" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <div className="mr-3 size-4 rounded-full border border-gray-300" />
                      Recently Viewed
                    </Link>
                    <Link href="/vouchers" className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <div className="mr-3 size-4 rounded border border-gray-300" />
                      Vouchers
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Help Dropdown */}
            <div className="relative hidden items-center lg:flex">
              <button
                className="flex items-center text-gray-700 hover:text-orange-500"
                onMouseEnter={() => setIsHelpDropdownOpen(true)}
                onMouseLeave={() => setIsHelpDropdownOpen(false)}
              >
                <HelpOutlineIcon className="size-5" />
                <span className="ml-1 hidden text-sm xl:block">Help</span>
                <ExpandMoreIcon className="ml-1 size-4" />
              </button>

              {isHelpDropdownOpen && (
                <div
                  className="absolute right-0 top-full z-50 w-64 rounded-md border border-gray-200 bg-white py-2 shadow-lg"
                  onMouseEnter={() => setIsHelpDropdownOpen(true)}
                  onMouseLeave={() => setIsHelpDropdownOpen(false)}
                >
                  <div className="border-b border-gray-100 px-4 py-3">
                    <h3 className="font-semibold text-gray-800">Help Center</h3>
                    <p className="text-xs text-gray-600">Browse our help topics</p>
                  </div>

                  <div className="py-2">
                    <Link href="/help/place-order" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Place an Order
                    </Link>
                    <Link href="/help/payment" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Payment Options
                    </Link>
                    <Link href="/help/delivery" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Delivery Timelines
                    </Link>
                    <Link href="/help/returns" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Returns & Refunds
                    </Link>
                    <Link href="/help/report" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Report a Product
                    </Link>
                    <Link href="/help/dispute" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Dispute Resolution
                    </Link>
                    <Link href="/help/contact" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      Contact Us
                    </Link>
                  </div>

                  <div className="border-t border-gray-100 px-4 py-3">
                    <Link href="/help" className="text-sm font-medium text-orange-500 hover:underline">
                      View All Help Topics →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <Link href="/wishlist" className="hidden text-gray-700 hover:text-orange-500 lg:block">
              <FavoriteIcon className="size-5" />
            </Link>

            {/* Cart */}
            <Shoppingcart />
          </div>
        </div>
      </div>
    </>
  );
}
