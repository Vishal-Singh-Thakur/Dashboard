import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import AppRoutes from "./Route";
// import Wallet from "../Wallet";

export default function Layout() {
    return (
        <main className="flex min-h-screen flex-grow">
        <Sidebar className="fixed hidden xl:block dark:bg-gray-50" />
        <Header />
        <div className="flex w-full flex-col xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]">
          <div className="mt-20 ml-4">
           <AppRoutes/>
          </div>
        </div>
      </main>
    )

}