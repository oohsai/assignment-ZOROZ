import MovingCards from '@/components/MovingCards'
import { Cards } from './Cards'

export default function HomePage() {
    return (
        <div className="relative flex flex-col items-center justify-center">
            <MovingCards />
            <div className='flex'>
            <Cards />
            <Cards></Cards>
            <Cards></Cards>
            <Cards></Cards>
            </div>
            
        </div>
    )
}

