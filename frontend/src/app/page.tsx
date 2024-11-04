import CatNav from "@/components/CategoriesNav";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <div className="bg-slate-50">
      <Navbar />
      <CatNav />
      <HomePage />
    </div>
  );
}
