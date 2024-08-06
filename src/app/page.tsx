import Mainsection from "@/app/mainsection";
import Explore from "@/app/explore";
import "./mainsection.css";
import Navbarshadcn from "@/components/navbar/navbar";

function page() {
  return (
    <div>
      <Navbarshadcn />

      <main className="min-h-screen flex-col ">
        <Mainsection />
        <Explore />
      </main>
    </div>
  );
}

export default page;
