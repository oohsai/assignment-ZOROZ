'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";

export function Cards() {
  const [productCard, setProductCard] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get('http://localhost:5001/');
        //@ts-ignore
        setProductCard(res.data.products);
      } catch(e) {
        console.log('Error in fetch', e);
      }
    }
    fetchProducts();
  }, []);
    return (
        <div className="flex">
        <Card productCard={productCard} />
        </div>
    )
}  

export function Card({productCard}:any) {
    return (
        <div className="m-10 border-black">
            <div className="text-xl font-extrabold">
            Appliances for your home | Up to 55% off
            </div>
            <div className="flex gap-6 grid grid-cols-2">
            {productCard.map((product:any) => (
          <div key={product.id} className="flex-shrink-0">
            <Image
              src={product.image}
              alt={`Product ${product.id}`}
              width={500}
              height={500}
              className="object-cover w-full h-full"
              priority
            />
            <div className="font-light text-sm">{product.name}</div>
          </div>
        ))}
            </div>
        </div>
    )
}