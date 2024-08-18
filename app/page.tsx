import Image from "next/image";
import HomePage from "./(routes)/homepage/page";

export default function Home() {
  return (
    <div className='bg-slate-200 min-h-screen '>
      <HomePage />
    </div>
  );
}
