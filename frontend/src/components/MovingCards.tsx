'use client'
import React, { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Product {
  id: number
  image: string
}

const products: Product[] = [
  { id: 1, image: "https://images-eu.ssl-images-amazon.com/images/G/31/sthaneka/Alphonsa/GW/NOV/BAU/GW_HERO_PC_1_2x._CB542130280_.jpg"},
  { id: 2, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG20/Home/2024/BAU/Hero/Oct/Home-lighting-essentials-PC-3000x1200-without-coupon._CB542286527_.jpg" },
  { id: 3, image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Consumables/X-GL/Feb5/PC_Hero_1_3000._CB582457311_.jpg"},
  { id: 4, image: "https://images-eu.ssl-images-amazon.com/images/G/31/img23/GW/P42/Boult_3000x1200-PC._CB543542644_.jpg" },
]

export default function MovingCards() {
    return (
        <div className='relative'>
            <MovingCard></MovingCard>
            <div className="absolute bottom-0 left-0 w-full" >
                <Cards></Cards>
            </div>
        </div>
    )
}

function MovingCard() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoScrolling, setIsAutoScrolling] = useState(true)

  const moveToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length)
  }, [])

  const moveToPrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length)
  }, [])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    if (isAutoScrolling) {
      intervalId = setInterval(moveToNext, 3000)
    }

    return () => clearInterval(intervalId)
  }, [isAutoScrolling, moveToNext])

  const handleMouseEnter = () => setIsAutoScrolling(false)
  const handleMouseLeave = () => setIsAutoScrolling(true)

  return (
    <div 
      className="relative w-full h-[50%] overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {products.map((product) => (
          <div key={product.id} className="min-w-full flex-shrink-0">
            <Image
              src={product.image}
              alt={`Product ${product.id}`}
              width={1000}
              height={1000}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        ))}
      </div>
      <Button
        variant="outline"
        size="icon"
        className="absolute left-0 top-1/4 transform -translate-y-1/2"
        onClick={moveToPrev}
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      <Button
        variant="outline"
        size="icon"
        className="absolute right-0 top-1/4 transform -translate-y-1/2"
        onClick={moveToNext}
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white/80 via-white/40 to-grey backdrop-blur-sm"></div>
    </div>
  )
}

const productCard = [
    { id: 1, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg", name: "AC"},
    { id: 2, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" ,name: "Fridge" },
    { id: 3, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" , name: "Microwaves"},
    { id: 4, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" , name: "Washing Machines" },
  ]

function Cards() {
    return (
        <div className="flex">
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        </div>
    )
}  

function Card() {
    return (
        <div className="backdrop-blur-lg bg-white bg-opacity-100 rounded-none p-5 rounded-lg mx-10">
            <div className="text-xl font-extrabold">
            Appliances for your home | Up to 55% off
            </div>
            <div className="flex gap-6 grid grid-cols-2">
            {productCard.map((product) => (
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
