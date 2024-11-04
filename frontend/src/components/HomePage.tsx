import MovingCards from '@/components/MovingCards'
import Cards from '@/components/Cards'

export default function HomePage() {
    return (
        <div className="relative flex flex-col items-center justify-center">
            <MovingCards />
            <Cards />
            
        </div>
    )
}

