import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search, MapPin, ChevronDown, Globe, User } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-2">
      <div className="flex flex-wrap items-center justify-between max-w-screen">
        <Link href="/" className="flex items-center">
          <Image
            src="https://www.vectorlogo.zone/logos/amazon/amazon-tile.svg"
            alt="Amazon"
            width={35}
            height={35}
            className="mr-2"
          />
        </Link>

        <div className="flex items-center text-sm order-3 md:order-2 mt-2 md:mt-0">
          <MapPin size={18} className="mr-1" />
          <span className="hidden md:inline">Deliver to</span>
          <button className="font-bold ml-1 flex items-center">
            Pune
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>


        <div className="flex-grow order-2 md:order-3 mt-2 md:mt-0 md:mx-4">
          <form className="flex">
            <div className="relative flex-grow">
              <select className="absolute left-0 top-0 bottom-0 bg-gray-100 text-black px-2 rounded-l-md border-r border-gray-300">
                <option>All</option>
              </select>
              <Input
                type="text"
                placeholder="Search Amazon"
                className="w-full pl-16 bg-white rounded-r-none"
              />
            </div>
            <Button type="submit" className="bg-yellow-500 hover:bg-yellow-600 text-black rounded-l-none">
              <Search size={20} />
            </Button>
          </form>
        </div>

        <div className="flex items-center text-sm order-4 mt-2 md:mt-0">
          <button className="flex items-center">
            <Globe size={18} className="mr-1" />
            EN
            <ChevronDown size={16} className="ml-1" />
          </button>
        </div>

        <div className="flex items-center text-sm order-5 mt-2 md:mt-0 ml-4">
          <button className="flex flex-col items-start">
            <span>Hello, sign in</span>
            <span className="font-bold flex items-center">
              Account & Lists
              <ChevronDown size={16} className="ml-1" />
            </span>
          </button>
        </div>
      </div>
    </nav>
  )
}