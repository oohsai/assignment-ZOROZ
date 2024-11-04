'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Star, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const products = [
  {
    id: 1,
    name: "Whirlpool 205 L 4 Star Inverter Direct-Cool Single Door Refrigerator",
    image: "https://m.media-amazon.com/images/I/31tH9CjR5LL._SY445_SX342_QL70_FMwebp_.jpg",
    price: 17990,
    originalPrice: 22150,
    rating: 4.3,
    reviews: 3245,
  },
  {
    id: 2,
    name: "Samsung 253 L 3 Star Inverter Frost Free Double Door Refrigerator",
    image: "https://m.media-amazon.com/images/I/31tH9CjR5LL._SY445_SX342_QL70_FMwebp_.jpg",
    price: 24990,
    originalPrice: 31990,
    rating: 4.1,
    reviews: 2187,
  },
  {
    id: 3,
    name: "LG 260 L 3 Star Frost Free Double Door Refrigerator",
    image: "https://m.media-amazon.com/images/I/31tH9CjR5LL._SY445_SX342_QL70_FMwebp_.jpg",
    price: 26990,
    originalPrice: 32990,
    rating: 4.2,
    reviews: 1876,
  },
  {
    id: 4,
    name: "Haier 195 L 4 Star Direct-Cool Single Door Refrigerator",
    image: "https://m.media-amazon.com/images/I/31tH9CjR5LL._SY445_SX342_QL70_FMwebp_.jpg",
    price: 15990,
    originalPrice: 18290,
    rating: 4.0,
    reviews: 1543,
  },
  {
    id: 4,
    name: "LG 260 L 3 Star Frost Free Double Door Refrigerator",
    image: "https://m.media-amazon.com/images/I/31tH9CjR5LL._SY445_SX342_QL70_FMwebp_.jpg",
    price: 26990,
    originalPrice: 32990,
    rating: 4.2,
    reviews: 1876,
  },
  {
    id: 5,
    name: "LG 260 L 3 Star Frost Free Double Door Refrigerator",
    image: "https://m.media-amazon.com/images/I/31tH9CjR5LL._SY445_SX342_QL70_FMwebp_.jpg",
    price: 26990,
    originalPrice: 32990,
    rating: 4.2,
    reviews: 1876,
  },
  {
    id: 6,
    name: "LG 260 L 3 Star Frost Free Double Door Refrigerator",
    image: "https://m.media-amazon.com/images/I/31tH9CjR5LL._SY445_SX342_QL70_FMwebp_.jpg",
    price: 26990,
    originalPrice: 32990,
    rating: 4.2,
    reviews: 1876,
  },
]

export default function ListingPage() {

  return (
    <div className="flex min-w-screen  mx-10 my-10 px-1 py-2">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="min-w-screen">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Refrigerators</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="flex  flex-col">
                <CardContent className="p-4 flex-grow">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={200}
                    height={200}
                    className="w-full h-48 object-contain mb-4"
                    priority
                  />
                  <h2 className="font-bold mb-2 line-clamp-2">{product.name}</h2>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className={`w-4 h-4 ${star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-blue-600">{product.reviews}</span>
                  </div>
                  <div className="text-xl font-bold">₹{product.price.toLocaleString()}</div>
                  <div className="text-sm">M.R.P.: <span className="line-through">₹{product.originalPrice.toLocaleString()}</span></div>
                  <div className="text-sm text-green-600">
                    You Save: ₹{(product.originalPrice - product.price).toLocaleString()} ({Math.round((product.originalPrice - product.price) / product.originalPrice * 100)}%)
                  </div>
                </CardContent>
                <div className="p-4 bg-gray-50">
                  <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">
                    Add to Cart
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}