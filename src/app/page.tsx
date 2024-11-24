import DndBar from "@/components/dndBar/DndBar";
import DropArea from "@/components/dropArea/DropArea";
import Navbar from "@/components/navbar/Navbar";
import { Add, CropFree, HorizontalRule, LockOpen } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";


const HomePage: React.FC = () => {

  return (
    <div className="">
      <Navbar />
      <main className="flex">
        <DndBar/>

        <div className="fixed bottom-8 left-80 flex flex-col rounded-full shadow-lg">
          <button className="hover:cursor-pointer p-2 bg-gray-300 flex items-center justify-center">
            <Add/>
          </button>
          <button className="hover:cursor-pointer p-2 bg-gray-300 flex items-center justify-center border-t">
            <HorizontalRule/>
          </button>
          <button className="hover:cursor-pointer p-2 bg-gray-300 flex items-center justify-center border-t">
            <CropFree/>
          </button>
          <button className="hover:cursor-pointer p-2 bg-gray-300 flex items-center justify-center border-t">
            <LockOpen/>
          </button>
        </div>

        <DropArea/>

        <Link href='/chat'
          className="fixed bottom-12 right-12 rounded-full text-[#064f38] hover:cursor-pointer shadow-lg transition"
        >
          <div className="relative w-[50px] h-[50px]">
              <Image
              src="/images/Frame 1000003434.svg"
              alt="GreenBasket Store's Logo"
              fill
              style={{ objectFit: 'cover' }}
              sizes="100%"
              />
          </div>
        </Link>
      </main>
    </div>
  );
};

export default HomePage;
