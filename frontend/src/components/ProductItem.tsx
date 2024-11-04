'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronDown, ShoppingCart, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { CheckboxIcon } from '@radix-ui/react-icons'

export default function ProductItem() {
  const [mainImage, setMainImage] = useState("https://m.media-amazon.com/images/I/31tH9CjR5LL._SY445_SX342_QL70_FMwebp_.jpg")
  const [exchangeOption, setExchangeOption] = useState("withoutExchange");

  const thumbnails = [
    "https://m.media-amazon.com/images/I/31tH9CjR5LL._SY445_SX342_QL70_FMwebp_.jpg",
    "https://m.media-amazon.com/images/I/613c3BwRgSL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71TQdvWQ16L._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71fhgk-SixL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/71L-HdBwDEL._SX679_.jpg",
    "https://m.media-amazon.com/images/I/51aXOkz0P4L._SX679_.jpg"
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2">
          <div className="flex gap-4">
            <div className="flex flex-col gap-2">
              {thumbnails.map((thumb, index) => (
                <Image
                  key={index}
                  src={thumb}
                  alt={`Product thumbnail ${index + 1}`}
                  width={50}
                  height={50}
                  className="cursor-pointer border hover:border-blue-500"
                  onClick={() => setMainImage(thumb)}
                />
              ))}
            </div>
            <div className="flex-grow">
              <Image
                src={mainImage}
                alt="Main product image"
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <h1 className="text-2xl font-bold mb-2">
            Whirlpool 184 L 2 Star Direct-Cool Single Door Refrigerator (205 WDE CLS 2S SAPPHIRE BLUE-Z, Blue, 2023 Model)
          </h1>
          <Link href={"localhost:3000/product"} className='hover:text-[#488A9A] underline'>Visit the Whirlpool Store</Link>
          <div className="flex items-center mb-4">
            <div className="flex">
              {[1, 2, 3, 4].map((star) => (
                <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
              <Star className="w-5 h-5 text-yellow-400" />
            </div>
            <span className="ml-2 text-[#488A9A]">3,944 ratings</span>
          </div>
          <div className="border-t border-b py-4 mb-4">
            <div className="flex text-2xl font-bold"><div className='text-red-700 font-light'>-22%</div><div className='text-lg'>₹</div>11,990</div>
            <div className="text-sm">M.R.P.: <span className="line-through">₹22,150</span></div>
            <div className="text-sm">Inclusive of all taxes</div>
            <div className='text-sm'>EMI starts at ₹581. No Cost EMI available</div>
          </div>
          <div className="mb-4">
            <h2 className="font-bold mb-2">About this item</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Single door refrigerator with Intellisense Inverter Technology</li>
              <li>Capacity: 184 liters for families with 2-3 members</li>
              <li>Energy Rating - 2 Star energy efficiency</li>
              <li>1 year product warranty and 10 year compressor warranty</li>
              <li>Intellisense Inverter technology - Comes with low starting voltage of 95V & assures 25 years of compressor reliability- certified by VDE Germany *As Certified by VDE Germany</li>
              <li>Special Feature - Stabilizer free operations even in high voltage fluctuations between 95V-300V</li>
              <li>Brand Specific Features - Upto 9 hours of cooling retention during power cuts, Easy Manual Defrosting, Jumbo Storage Up To 3, 2L Bottle Storage, Insulated Capillary Technology, Auto Connect To Home Inverter, Large Vegetable Crisper, Honey Comb Lock In Technology & Quick Chill Zone</li>
            </ul>
          </div>
        </div>

        <div className='border-slate border-2 rounded-lg p-5 '>
          <div>
            <div className="mb-4">
              <div className="flex-col gap-4">
                <div className='flex justify-normal gap-5'>
                    <div>
                    With Exchange
                    <div className='text-red-700 font-bold mb-2'>Up to 3,790.00 off</div>
                    </div>
                  
                  <input
                    type="radio"
                    name="exchange"
                    value="withExchange"
                    checked={exchangeOption === "withExchange"}
                    onChange={() => setExchangeOption("withExchange")}
                    className="mr-2"
                  />
                </div>
                <div className='flex justify-normal gap-5'>
                  <div>
                  Without Exchange
                  <div className='text-red-700 font-bold mb-2'>₹11,990</div>
                  </div>
                  
                  <input
                    type="radio"
                    name="exchange"
                    value="withoutExchange"
                    checked={exchangeOption === "withoutExchange"}
                    onChange={() => setExchangeOption("withoutExchange")}
                    className="mr-2"
                  />
                </div>
              </div>
            </div>

            {exchangeOption === "withoutExchange" && (
              <div>
                
                <div>FREE scheduled delivery as soon as <div className='font-bold'>Thursday, 7 November, 7 AM - 9 PM</div></div>
                <div className='mt-10 mb-2 text-green-600 text-2xl'>In stock</div>
                <div>
                  <div className='flex gap-10'>
                    <div>Payment</div> <div>Secure transaction</div>
                  </div>
                  <div className='flex gap-7'>
                    <div>Ships from</div> <div>Amazon</div>
                  </div>
                  <div className='mt-5'>
                    <div className='font-bold'>Add a Protection Plan:</div>
                    <div className='flex justify-center gap-3'>
                      <input type="checkbox" className="w-4 h-4 text-blue-600" /> Extended Warranty for ₹199.00
                    </div>
                    <div className='flex gap-3'>
                      <input type="checkbox" className="w-4 h-4 text-blue-600" /> Extended Warranty for ₹749.00
                    </div>
                  </div>
                  <div className="space-y-4 mt-4">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                      <Zap className="w-4 h-4 mr-2" />
                      Buy Now
                    </Button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
