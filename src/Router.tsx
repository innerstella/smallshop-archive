import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AdminReadPage } from "./pages/admin/read";
import { ContactPage } from "./pages/contact";
import { DeliveryPage } from "./pages/delivery";
import { DetailPage } from "./pages/detail";
import { DiscoveryPage } from "./pages/discovery";
import { MainPage } from "./pages/main";
import { AdminPage } from "./pages/admin";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 유저 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:serviceState/:id" element={<DetailPage />} />
        <Route path="/discovery" element={<DiscoveryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/delivery" element={<DeliveryPage />} />

        {/* 관리자 */}
        <Route path="/stella/admin" element={<AdminReadPage />} />
        <Route path="/stella/admin/write" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
