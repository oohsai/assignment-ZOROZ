'use client'
import Image from "next/image"

const productCard = [
    { id: 1, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg", name: "AC"},
    { id: 2, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg" ,name: "Fridge" },
    { id: 3, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg" , name: "Microwaves"},
    { id: 4, image: "https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg" , name: "Washing Machines" },
  ]

export default function Cards() {
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
        <div className="m-10 border-black">
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