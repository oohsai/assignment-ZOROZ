import Link from "next/link";

export default function CatNav() {
    return (
        <div className="flex text-white font-semibold cursor-pointer bg-[#242F3E]">
            <div className="flex m-2 gap-6 ">
            <div className="flex">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
</svg>
                    
                    <Link href={'/products'}>All</Link></div>
            <div>Fresh</div>
            <div>MX Player</div>
            <div>Sell</div>
            <div>Best Sellers</div>
            <div>Today's Deals</div>
            <div>Mobiles</div>
            <div>Electronics</div>
        </div>
        </div>
    )
}