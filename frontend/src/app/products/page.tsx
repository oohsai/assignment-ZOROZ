import CatNav from "@/components/CategoriesNav";
import Navbar from "@/components/NavBar";
import ListingPage from "@/components/Products";

export default function Products() {
    return (<div>
        <Navbar />
        <CatNav />
        <ListingPage/>
    </div>)
}