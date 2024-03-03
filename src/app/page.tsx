"use client";
import Carousal from "@/components/Carousal";
import Category from "@/components/Category";
import Collections from "@/components/Collections";
import Header from "@/components/Header";
import HotDeals from "@/components/HotDeals";

export default function Home() {

  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <div className="bg-white flex min-h-screen flex-col">

      <Header />
      <Carousal />
      <Category />
      <HotDeals />
      <Collections />
    </div>
    // </main>
  );
}
