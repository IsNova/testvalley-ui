"use client";
import Carousal from "@/components/Carousal";
import Category from "@/components/Category";
import Collections from "@/components/Collections";
import Header from "@/components/Header";

export default function Home() {

  return (
    <div className="bg-white flex min-h-screen flex-col">
      <Header />
      <Carousal />
      <Category />
      <Collections />
    </div>
  );
}
