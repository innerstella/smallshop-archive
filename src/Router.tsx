import { BrowserRouter, Route, Routes } from "react-router-dom"
import { MainPage } from "./pages/main"
import { AdminPage } from "./pages/admin"
import { DiscoveryPage } from "./pages/discovery"
import { ContactPage } from "./pages/contact"
import { DetailPage } from "./pages/detail"

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 유저 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/detail/:serviceState/:id" element={<DetailPage />} />
        <Route path="/discovery" element={<DiscoveryPage />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* 관리자 */}
        <Route path="/stella/admin" element={<AdminPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter
