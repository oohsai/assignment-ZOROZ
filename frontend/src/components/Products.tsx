'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import axios from 'axios'


export default function ListingPage() {
  const [products, setProducts] = useState<any[]>([])

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response : any = await axios.get('http://localhost:5001');
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    loadProducts();
  }, []);

  return (
    <div className="flex min-w-screen  mx-10 my-10 px-1 py-2">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="min-w-screen">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-2xl font-bold">Products</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              
              {products.map((product:any) => (
                <Card key={product.id} className="flex flex-col">
                  <CardContent className="p-4 flex-grow">
                    <Image
                      src={product.image}
                      alt={`Product image for ${product.name}`}
                      width={200}
                      height={200}
                      className="w-full h-48 object-contain mb-4"
                    />
                    <h2 className="font-bold mb-2 line-clamp-2">{product.name}</h2>
                    <div className="flex items-center mb-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className={`w-4 h-4 ${
                              star <= Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                      <span className="ml-2 text-sm text-blue-600">{product.reviews}</span>
                    </div>
                    <div className="text-xl font-bold">₹{product.price.toLocaleString()}</div>
                    <div className="text-sm">
                      M.R.P.: <span className="line-through">₹{product.originalPrice.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-green-600">
                      You Save: ₹{(product.originalPrice - product.price).toLocaleString()} (
                      {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%)
                    </div>
                  </CardContent>
                  <div className="p-4 bg-gray-50">
                    <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Add to Cart</Button>
                  </div>
                </Card>
              ))}
            </div>
            
            
          </div>
        </div>
      </div>
  )
}