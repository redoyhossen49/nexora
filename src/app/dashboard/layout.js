"use client";

import { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import Header from "@/components/dashboard/Header";
import DashboardProvider from "@/context/DashboardContext";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  function openSidebar() {
    setIsSidebarOpen(true);
  }

  function closeSidebar() {
    setIsSidebarOpen(false);
  }

  return (
    <DashboardProvider>
    <div className="min-h-screen bg-[var(--background)]">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={closeSidebar}
      />

      <div className="md:pl-64">
        <Header onMenuClick={openSidebar} />

        <main>
          {children}
        </main>
      </div>
    </div>
    </DashboardProvider>
  );
}