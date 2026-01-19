import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import Loader from "../components/Loader/Loader";
import Profile from "../pages/HomePage/Profile/Profile";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import MobileNav from "../components/Navbar/MobileNav";
import BackToTop from "../components/Navigation/BackToTop";

const Main = () => {
  return (
    <Suspense fallback={<Loader />}>
      <div className="mx-auto flex gap-4 md:gap-8 lg:gap-14 px-4 md:px-8 lg:px-6">

        {/* ================= LEFT PROFILE ================= */}
        <aside className="hidden lg:block w-[340px] flex-shrink-0 sticky top-0 h-screen py-4 overflow-y-auto no-scrollbar">
          <Profile />
        </aside>

        {/* ================= MAIN CONTENT ================= */}
        <main className="flex-1">
          <Outlet />
          <Footer />
        </main>

        {/* ================= RIGHT NAVBAR ================= */}
        <aside className="hidden lg:block w-[80px] flex-shrink-0 sticky top-0 h-screen py-6">
          <Navbar />
        </aside>

        {/* ================= MOBILE NAV ================= */}
        <div className="lg:hidden fixed bottom-6 left-6 right-6 z-40">
          <MobileNav />
        </div>
      </div>
    </Suspense>
  );
};

export default Main;
